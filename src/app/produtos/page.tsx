'use client';

import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { Product } from "@/models/ProductModel";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Spinner } from "@/components/Spinner";
import styles from "./page.module.scss";

export default function Products() {

    const [select, setSelect] = useState('');
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchProductsData() {
            const products = await api.getProducts();
            setProducts(products);
        }
        async function fetchCategoriesData() {
            const categories = await api.getProductsByCategory(select);
            setProducts(categories);
        }

        !select ? fetchProductsData() : fetchCategoriesData();
    }, [select]);

    return (
        <>
            <Header />
            <main className={styles.main__wrapper}>
                <div className="container">
                    <div className={styles.main__header}>
                        <h2>Produtos</h2>
                        <div className={styles.filter}>
                            <label htmlFor="selectCategory">Filtrar</label>
                            <select id="selectCategory" onChange={(e) => setSelect(e.target.value)}>
                                <option value="" selected>Todos</option>
                                <option value="Quadros">Quadros</option>
                                <option value="Convites">Convites</option>
                                <option value="Kits">Kits</option>
                                <option value="Chaveiros">Chaveiros</option>
                                <option value="Polaroides">Polaroides</option>
                                <option value="Caixas">Caixas</option>
                                <option value="Sacolas">Sacolas</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.main__body}>
                        { !products.length && <Spinner type="products" /> }
                        {
                            products &&
                            products.map((product, index) => (
                                <Card key={index} product={product} type="buy" />
                            ))
                        }
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}