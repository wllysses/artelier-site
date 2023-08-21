'use client';

import { useState } from "react";
import Carousel from "better-react-carousel";
import { Product } from "@/models/ProductModel";
import { Card } from "../Card";
import { Spinner } from "../Spinner";
import styles from "./Products.module.scss";

import productsList from "@/mocks/products.json";


export function Products() {

    const [products] = useState<Product[]>(productsList);

    return (
        <section className={styles.products__section}>
            <div className="container">
                <h2>Conheça nossos produtos</h2>
                {
                    !products.length
                        ?
                        <Spinner />
                        :
                        <Carousel cols={4} rows={1} gap={20} loop>
                            {
                                products &&
                                products.map((item) => (
                                    <Carousel.Item key={item.id} >
                                        <Card product={item} />
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                }
            </div>
        </section>
    );
}
