'use client';

import { useEffect, useState } from "react";
import { Product } from "@/models/ProductModel";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Spinner } from "@/components/Spinner";
import productsList from "../../mocks/products.json";
import styles from "./page.module.scss";


export default function Products() {

    const [select, setSelect] = useState('');
    const [allProducts] = useState<Product[]>(productsList);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    function filterProductsByCategory() {
        const filteredProducts = allProducts.filter((product) => product.category_id === parseInt(select));
        setFilteredProducts(filteredProducts);
    }

    useEffect(() => {
        select ? filterProductsByCategory() : setFilteredProducts(allProducts);
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
                                <option value={1}>Quadros</option>
                                <option value={2}>Convites</option>
                                <option value={3}>Kits</option>
                                <option value={4}>Chaveiros</option>
                                <option value={5}>Polaroides</option>
                                <option value={6}>Caixas</option>
                                <option value={7}>Sacolas</option>
                                <option value={8}>Álbum</option>
                                <option value={9}>Centro</option>
                                <option value={10}>Balas</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.main__body}>
                        { !filteredProducts.length && <Spinner type="products" /> }
                        {
                            filteredProducts.map((product, index) => (
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
