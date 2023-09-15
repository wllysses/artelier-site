function formatPrice(price: number) {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function getProductPhoto(link: string | string[]) {
    const isArray = Array.isArray(link); // return true if link is an array
    return isArray ? link[0] : link;
}

export { formatPrice, getProductPhoto };
