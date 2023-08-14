const BASE_URL = 'https://artelier-api.onrender.com';

async function getProducts() {
    const response = await fetch(`${BASE_URL}/api/produtos`);
    const data = await response.json();
    return await data;
}

async function getProductById(id: number) {
    const response = await fetch(`${BASE_URL}/api/produtos/${id}`);
    const data = await response.json();
    return await data;
}

async function getProductsByCategory(category: string) {
    const response = await fetch(`${BASE_URL}/api/categorias/${category}`);
    const data = await response.json();
    return await data;
}

async function registerProduct(data: { name: string, category_id: string, price: string, photo:string, description: string }) {
    const response = await fetch(`${BASE_URL}/api/produtos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: data.name,
            category_id: parseInt(data.category_id),
            price: parseFloat(data.price),
            photo: data.photo,
            description: data.description
        })
    });
    return await response.json();
}

async function userLogin(data: { email: string, password: string }) {
    const response = await fetch(`${BASE_URL}/api/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data.email,
            password: data.password
        })
    });
    return await response.json();
}

export const api = {
    getProducts,
    getProductById,
    getProductsByCategory,
    registerProduct,
    userLogin
}