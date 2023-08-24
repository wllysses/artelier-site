import { useState } from "react";
import { toast } from "react-toastify";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useStore } from "@/store/store";
import Link from "next/link";
import { Product } from "@/models/ProductModel";
import { formatPrice } from "@/functions";
import styles from "./Card.module.scss";

interface CardProps {
    product: Product
    type?: string
}

export function Card({ product, type }: CardProps) {

    const { products, addProduct } = useStore();
    const [exists, setExists] = useState<boolean | null>(null);

    function addProductOnCart(product: Product) {
        addProduct(product);
        toast.success('Adicionado ao carrinho 🛒');
        checkProductAlreadyExistsInShoppingCart(product.id)
    }

    function checkProductAlreadyExistsInShoppingCart(id: number) {
        const checkProducts = products.filter((product) => product.id === id);

        if (checkProducts) {
            setExists(true);
        } else {
            setExists(false);
        }
    }


    return (
        <div className={styles.card__wrapper}>
            <div
                className={styles.card__image}
                style={{
                    backgroundImage: `url('${Array.isArray(product.photo) ? product.photo[0] : product.photo}')`
                }}
            >
                {
                    type === 'buy' &&
                    <div className={`${styles.view__more}`}>
                        <Link href={`/produtos/${product.id}`}>Ver mais</Link>
                    </div>
                }
            </div>
            <div className={styles.card__data}>
                <div style={{ textAlign: 'center' }}>
                    <h4 title={product.name}>{product.name}</h4>
                    {type === 'buy' && <span>{formatPrice(product.price!) + `${product.price! <= 5 ? ' (unidade)' : ''}`}</span>}
                </div>
                <div className={styles.card__data__button}>
                    {
                        type === 'buy'
                            ?
                            <button
                                className={styles.card__button}
                                onClick={() => addProductOnCart(product)}
                                disabled={exists ? true : false}
                            >
                                <AiOutlineShoppingCart size={18} />
                                Adicionar ao carrinho
                            </button>
                            :
                            <Link
                                href={`/produtos/${product.id}`}
                                className={styles.view__more__button}
                            >
                                Ver mais
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
}
