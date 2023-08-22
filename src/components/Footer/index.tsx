import { BiLogoInstagram, BiLogoWhatsapp } from "react-icons/bi";
import styles from "./Footer.module.scss";

export function Footer() {
    return (
        <footer className={styles.footer__section}>
            <div className="container">
                <div className={styles.footer__wrapper}>
                    <div className={styles.folow}>
                        <h4>Siga-nos</h4>
                        <a href="https://www.instagram.com/artelier_pb/" target="_blank">
                            <BiLogoInstagram size={25} color="white"/>
                            @artelier_pb
                        </a>
                    </div>
                    <div className={styles.products}>
                        <h4>Nossos produtos</h4>
                        <ul>
                            <li>Quadros</li>
                            <li>Polaroides</li>
                            <li>Kits</li>
                            <li>Caixas</li>
                            <li>Chaveiros</li>
                            <li>Convites</li>
                            <li>Sacolas</li>
                            <li>Álbuns</li>
                        </ul>
                    </div>
                    <div className={styles.contacts}>
                        <h4>Entre em contato</h4>
                        <ul>
                            <li>
                                <a href="https://api.whatsapp.com/send?phone=5583986903987" target="_blank">
                                    <BiLogoWhatsapp size={25}/>
                                    (83)98690-3987
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/artelier_pb/" target="_blank">
                                    <BiLogoInstagram size={25}/>
                                    @artelier_pb
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.address}>
                        <h4>Endereço</h4>
                        <p>Rua Tiradentes - Juripiranga/PB</p>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>Copyright &copy; 2023 - Todos os direitos reservados</p>
                    <p>Desenvolvido por <a href="https://www.linkedin.com/in/wllysses/" target="_blank">Wllysses Tavares</a></p>
                </div>
            </div>
        </footer>
    );
}
