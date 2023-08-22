function formatPrice(price: number) {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function getProductPhoto(link: string | string[]) {
    return Array.isArray(link) ? link[0] : link;
}

export { formatPrice, getProductPhoto };
