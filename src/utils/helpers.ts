export const formatPrice = (price: number) =>
  price ? `${price.toLocaleString("ru-RU")} ₽` : "";
