import { MercadoPagoConfig } from 'mercadopago';

const token = process.env.MERCADO_PAGO_ACCESS_TOKEN;
if (!token) {
  throw new Error(
    '[Pimenta Country] MERCADO_PAGO_ACCESS_TOKEN não configurado. ' +
    'Verifique o arquivo .env antes de iniciar o servidor.'
  );
}

export const mercadoPagoClient = new MercadoPagoConfig({ accessToken: token });
