'use client';

import { useEffect, useState } from "react";
import { BiSolidTrash, BiLogoWhatsapp } from "react-icons/bi";
import { toast } from "react-toastify";
import { useStore } from "@/store/store";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getProductPhoto } from "@/functions";
import styles from "./page.module.scss";


export default function ShoppingCart() {

    const { products, removeProduct } = useStore();
    const [total, setTotal] = useState(0);

    function formatPrice(price: number) {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    function removeProductInCart(id: number) {
        removeProduct(id);
        toast.error('Item removido do 🛒');
    }

    function handleTotalPrices() {
        const prices = products.reduce((total, product) => {
            return total + product.price!
        }, 0);
        setTotal(prices);
    }

    useEffect(() => {
        handleTotalPrices();
    }, [total, products]);

    let message = `Olá. Gostaria de encomendar os seguintes itens:\n\n`;
    for (const product of products) {
        message += `Nome: ${product.name}\nPreço: ${formatPrice(product.price!)}\nFoto: ${getProductPhoto(product.photo)}\n\n`;
    }

    let messageEncoded = encodeURIComponent(message);

    return (
        <>
            <Header />
            <main className={styles.main__wrapper}>
                <div className="container">
                    <div className={styles.main__header}>
                        <h2>Carrinho de compras</h2>
                    </div>
                    <div className={styles.main__body}>
                        <div className={styles.products__list}>
                            {!products.length && <span>Carrinho vazio.</span>}
                            {
                                products.map((product) => (
                                    <div className={styles.products__list__item} key={product.id}>
                                        <div
                                            className={styles.product__photo}
                                            style={{
                                                backgroundImage: `url(${Array.isArray(product.photo) ? product.photo[0] : product.photo})`
                                            }}
                                        />
                                        <h4 className={styles.product__name} title={product.name}>{product.name}</h4>
                                        <h4>{formatPrice(product.price!)}</h4>
                                        <BiSolidTrash size={20} cursor="pointer" onClick={() => removeProductInCart(product.id)} />
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.details}>
                            <h3>Detalhes da compra</h3>
                            <div className={styles.details__data}>
                                <div className={styles.details__data__total}>
                                    <h4>Total -</h4>
                                    <h4>{formatPrice(total)}</h4>
                                </div>
                                <a href={`https://api.whatsapp.com/send?phone=5583986903987&text=${messageEncoded}Total%20da%20compra:%20${formatPrice(total)}`} target="_blank" className={styles.details__data__button}>
                                    <button disabled={!products.length}>
                                        <BiLogoWhatsapp size={25} />
                                        Finalizar compra
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
