import { BiLogoWhatsapp } from "react-icons/bi";
import { toast } from "react-toastify";
import { useStore } from "@/store/store";
import Link from "next/link";
import { Product } from "@/models/ProductModel";
import styles from "./Card.module.scss";

interface CardProps {
    product: Product
    type?: string
}

export function Card({ product, type }: CardProps) {

    const { addProduct } = useStore();

    function formatPrice(price: number) {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    function getProductPhoto(link: string | string[]) {
        return Array.isArray(link) ? link[0] : link;
    }

    function addProductOnCart(product: Product) {
        addProduct(product);
        toast.success('Adicionado ao carrinho 🛒');
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
                        <button onClick={() => addProductOnCart(product)}>Adicionar ao carrinho</button>
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
                            <a
                                href={`https://api.whatsapp.com/send?phone=5583986903987&text=Ol%C3%A1.%20Tude%20bem?%0AGostaria%20de%20encomendar%20um(a)%20${product.name}%20com%20este%20modelo%20(${getProductPhoto(product.photo)})`}
                                target="_blank"
                                className={styles.card__button}
                            >
                                <BiLogoWhatsapp size={20} />
                                <span>Comprar</span>
                            </a>
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
