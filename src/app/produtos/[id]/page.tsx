'use client';

import { useEffect, useState } from "react";
import { BiLogoWhatsapp } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { api } from "@/services/api";
import Link from "next/link";
import { Product } from "@/models/ProductModel";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styles from "./page.module.scss";
import { Spinner } from "@/components/Spinner";


interface ParamsProps {
    params: {
        id: number
    }
}


export default function FilteredProducts({ params: { id } }: ParamsProps) {

    const [product, setProduct] = useState({} as Product);

    useEffect(() => {
        async function fetchData() {
            const product = await api.getProductById(id as number);
            setProduct(product);
        }

        fetchData();
    }, []);

    function formatPrice(price: number) {
        return price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return (
        <>
            <Header />
            <main className={styles.main__wrapper}>
                <div className="container">
                    <div className={styles.main__header}>
                        <Link href="/">
                            <AiOutlineArrowLeft
                                color="#000"
                                size={25}
                            />
                        </Link>
                        <h2>Produto</h2>
                    </div>
                    <div className={styles.main__body}>
                        {
                            !Object.keys(product).length 
                                ? 
                                <Spinner type="products"/> 
                                :
                                <>
                                    <div
                                        className={styles.photo}
                                        style={{
                                            backgroundImage: `url('${product.photo}')`
                                        }}
                                    />
                                    <div className={styles.product__details}>
                                        <h3>{product.name}</h3>
                                        <h4>{formatPrice(product.price!)}</h4>
                                        <p>{product.description}</p>
                                        <a
                                            href={`https://api.whatsapp.com/send?phone=5583986903987&text=Ol%C3%A1.%20Tudo%20bem?%20Gostaria%20de%20adquirir%20o%20item: ${product.name}.`}
                                            target="_blank"
                                            className={styles.card__button}
                                        >
                                            <BiLogoWhatsapp size={20} />
                                            <span>Comprar</span>
                                        </a>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}