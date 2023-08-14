import { BiLogoInstagram } from "react-icons/bi";
import styles from "./Footer.module.scss";

export function Footer() {
    return (
        <footer className={styles.footer__section} id="contact">
            <div className="container">
                <div className={styles.footer__wrapper}>
                    <div className={styles.folow}>
                        <h4>Siga-nos</h4>
                        <BiLogoInstagram size={25}/>
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
                        </ul>
                    </div>
                    <div className={styles.contacts}>
                        <h4>Entre em contato</h4>
                        <ul>
                            <li>(83)98690-3987</li>
                            <li>@artelier_pb</li>
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
