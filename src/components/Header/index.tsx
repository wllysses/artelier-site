import { BiSearchAlt2 } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/artelier-logo.jpg";
import styles from "./Header.module.scss";

export function Header() {
    return (
        <header className={styles.header__container}>
            <div className={styles.header_detail}/>
            <div className="container">
                <div className={styles.header__wrapper}>
                    <div className={styles.input__search}>
                        <input type="text" id="search" placeholder="Pesquisar produto" disabled />
                        <BiSearchAlt2 size={20} />
                    </div>
                    <Image src={logo} alt="Artelier Logo"/>
                    <nav className={styles.menu}>
                        <Link href="/">Página inicial</Link>
                        <Link href="/produtos">Produtos</Link>
                        {/* <Link href="/login">Login</Link> */}
                    </nav>
                </div>
            </div>
        </header>
    );
}
