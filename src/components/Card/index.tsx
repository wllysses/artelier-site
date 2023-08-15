import { useRef } from "react";
import { BiLogoWhatsapp } from "react-icons/bi";
import Link from "next/link";
import { Product } from "@/models/ProductModel";
import styles from "./Card.module.scss";

interface CardProps {
    product: Product
    type?: string
}

export function Card({ product, type }: CardProps) {

    function formatPrice(price: number) {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return (
        <div className={styles.card__wrapper}>
            <div
                className={styles.card__image}
                style={{
                    backgroundImage: `url('${product.photo}')`
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
                    <h4>{product.name}</h4>
                    {type === 'buy' && <span>{formatPrice(product.price!) + `${product.price! < 5 ? ' (unidade)' : ''}`}</span>}
                </div>
                <button>
                    {
                        type === 'buy'
                            ?
                            <a
                                href={`https://api.whatsapp.com/send?phone=5583986903987&text=Ol%C3%A1.%20Tudo%20bem?%20Gostaria%20de%20adquirir%20o%20item: ${product.name}.`}
                                target="_blank"
                                className={styles.card__button}
                            >
                                <BiLogoWhatsapp size={20} />
                                <span>Comprar</span>
                            </a>
                            :
                            <Link
                                href={`/produtos/${product.id}`}
                                style={{ display: 'inline-block', color: '#fff', width: '100%', padding: '0.75rem' }}
                            >
                                Ver mais
                            </Link>
                    }
                </button>
            </div>
        </div>
    );
}
