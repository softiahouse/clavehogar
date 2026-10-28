// Contato único da ClaveHogar — trocar aqui muda o site inteiro.
export const WA_NUMERO = "34612266321";
export const WA_TEXTO = "+34 612 266 321";
export const WA_NOMBRE = "Paulo";

export function waLink(mensaje?: string) {
  const base = `https://wa.me/${WA_NUMERO}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}
