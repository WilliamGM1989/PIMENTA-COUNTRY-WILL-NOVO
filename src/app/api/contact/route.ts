import { NextRequest, NextResponse } from 'next/server'
import { WHATSAPP_NUMBER } from '@/lib/config'

const RATE_WINDOW_MS = 60_000
const RATE_MAX = 5
const contactLog = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const times = (contactLog.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  times.push(now)
  contactLog.set(ip, times)
  // limpa entradas antigas periodicamente
  if (contactLog.size > 500) {
    for (const [k, ts] of contactLog.entries()) {
      if (!ts.some((t) => now - t < RATE_WINDOW_MS)) contactLog.delete(k)
    }
  }
  return times.length > RATE_MAX
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Muitas tentativas. Aguarde um momento.' },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Requisição inválida.' }, { status: 400 })
  }

  const { name, email, phone, message } = body as Record<string, unknown>

  if (typeof name !== 'string' || name.trim().length < 2 || name.length > 100)
    return NextResponse.json({ error: 'Nome inválido.' }, { status: 400 })

  if (
    typeof email !== 'string' ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > 200
  )
    return NextResponse.json({ error: 'E-mail inválido.' }, { status: 400 })

  if (typeof message !== 'string' || message.trim().length < 5 || message.length > 2000)
    return NextResponse.json(
      { error: 'Mensagem muito curta ou muito longa.' },
      { status: 400 }
    )

  const phoneSafe =
    typeof phone === 'string' ? phone.replace(/\D/g, '').slice(0, 20) : ''

  // Log server-side — aparece nos logs do servidor/Vercel
  console.info('[contato]', {
    name: name.trim(),
    email,
    phone: phoneSafe || 'não informado',
    messageLength: message.trim().length,
    ip,
    ts: new Date().toISOString(),
  })

  // Constrói URL do WhatsApp com os dados do contato para o atendente
  const waText = [
    '📩 Nova mensagem via site:',
    '',
    `Nome: ${name.trim()}`,
    `E-mail: ${email}`,
    `Telefone: ${phoneSafe || 'não informado'}`,
    '',
    'Mensagem:',
    message.trim(),
  ].join('\n')

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`

  return NextResponse.json({ ok: true, waUrl })
}
