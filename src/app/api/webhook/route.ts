import { NextRequest, NextResponse } from 'next/server'
import crypto from 'node:crypto'

export async function POST(request: NextRequest) {
  const rawBody = await request.text()
  const signature = request.headers.get('x-signature')
  const requestId = request.headers.get('x-request-id')
  const secret = process.env.MERCADO_PAGO_WEBHOOK_SECRET

  // Verifica assinatura HMAC se o segredo estiver configurado
  if (secret && signature && requestId) {
    const parts = Object.fromEntries(
      signature.split(',').map((part) => {
        const [k, v] = part.split('=')
        return [k.trim(), v?.trim() ?? '']
      })
    )
    const ts = parts['ts']
    const v1 = parts['v1']

    if (ts && v1) {
      const manifest = `id:${requestId};request-id:${requestId};ts:${ts};`
      const expected = crypto
        .createHmac('sha256', secret)
        .update(manifest)
        .digest('hex')

      const v1Buf = Buffer.from(v1.padEnd(expected.length, '0'), 'hex')
      const expBuf = Buffer.from(expected, 'hex')

      if (
        v1Buf.length !== expBuf.length ||
        !crypto.timingSafeEqual(v1Buf, expBuf)
      ) {
        console.warn('[webhook] Assinatura MP inválida — ip:', request.headers.get('x-forwarded-for'))
        return NextResponse.json({ error: 'Assinatura inválida.' }, { status: 401 })
      }
    }
  }

  try {
    const notification = JSON.parse(rawBody) as Record<string, unknown>
    const { type, action, data } = notification as {
      type?: string
      action?: string
      data?: { id?: string }
    }
    console.info('[webhook mp]', {
      type,
      action,
      dataId: data?.id,
      ts: new Date().toISOString(),
    })
    // TODO: consultar status real do pagamento via API do MP usando data.id
    // e atualizar o pedido no sistema de gestão quando implementado
  } catch {
    console.warn('[webhook mp] payload não é JSON')
  }

  // Retornar 200 rapidamente — MP reenvia se não receber resposta em tempo
  return NextResponse.json({ received: true })
}
