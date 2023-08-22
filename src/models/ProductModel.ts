export interface Product {
    id: number
    category_id?: number
    name: string
    photo: string[] | string
    price?: number
    description: string
}
