'use client';

import { AiOutlineShoppingCart } from "react-icons/ai";
import { useStore } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/artelier-logo.jpg";
import styles from "./Header.module.scss";
import { useWindowDimensions  } from "@/hooks/useWindowDimension";

export function Header() {

    const { products } = useStore();
    const { width } = useWindowDimensions();

    return (
        <header className={styles.header__container}>
            <div className={styles.header_detail}/>
            <div className="container">
                <div className={styles.header__wrapper}>
                    <nav className={styles.menu}>
                        <Link href="/">Página inicial</Link>
                        <Link href="/produtos">Produtos</Link>
                        { 
                            width! <= 550 
                                && 
                                <div className={styles.shopping__cart}>
                                    <Link href="/carrinho-compras">
                                        <AiOutlineShoppingCart size={25} />
                                    </Link>
                                    <span>{products.length}</span>
                                </div>
                        }
                    </nav>
                    <Image src={logo} alt="Artelier Logo"/>
                    <div className={styles.shopping__cart} style={{ display: `${width! <= 550 ? 'none' : 'block'}` }}>
                        <Link href="/carrinho-compras">
                            <AiOutlineShoppingCart size={25} />
                        </Link>
                        <span>{products.length}</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
