import { Product } from "@/models/ProductModel";
import { create } from "zustand";

interface StoreProps {
    products: Product[]
    addProduct: (product: Product) => void
    removeProduct: (id: number) => void
}

const useStore = create<StoreProps>((set) => ({
    products: [],
    addProduct: (product: Product) => set((state => ({ products: [...state.products, product]}))),
    removeProduct: (id: number) => set((staet) => ({ products: staet.products.filter((product) => product.id !== id) }))
}));

export { useStore };
