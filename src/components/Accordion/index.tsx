import { AccordionItem } from "./AccordionItem";
import styles from "./Accordion.module.scss";

export function Accordion() {
    return (
        <section className={styles.accordion__section}>
            <div className="container">
                <h2>Perguntas frequentes</h2>
                <div className={styles.accordion__wrapper}>
                    <AccordionItem 
                        question="Qual o maior tamanho?" 
                        response="O maior tamanho que fazemos é 31x23 já com a moldura. Trabalhamos com quadros estilo mosaico, que pode fazer o quadro ficar maior, dependendo de quantas peças deseje utilizar." 
                    />
                    <AccordionItem
                        question="Os quadros tem vidro ou acetato?"
                        response="Não. Utilizamos o papel photo glossy 180g que é a prova d’água."
                    />
                    <AccordionItem
                        question="De que material os quadros são feitos?"
                        response="O quadro é feito com papel guache de qualidade( alta gramatura).  Não trabalhamos com MDF ou afins."
                    />
                    <AccordionItem 
                        question="Como limpar e manter?"
                        response="Para limpar usar apenas um pano seco ou levemente úmido.
                        Para manter, basta utilizá-lo em locais secos, sem umidade ou exposição ao sol."
                    />
                    <AccordionItem 
                        question="Posso personalizar o item que desejar?"
                        response="Sim! As imagens são meramente ilustrativas (apesar de autorais), sendo assim é possível personalizar o item desejado da forma como quiser. Basta nos enviar as informações de como deseja personalizar assim que for redirecionado para o nosso Whatsapp."
                    />
                </div>
            </div>
        </section>
    );
}
