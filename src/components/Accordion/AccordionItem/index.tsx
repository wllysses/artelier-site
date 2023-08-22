'use client';

import { useState } from "react";
import styles from "./AccordionItem.module.scss";

interface AccordionItemProps {
    question: string
    response: string
}

export function AccordionItem({ question, response }: AccordionItemProps) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.accordion__item}>
            <div 
                className={styles.accordion__item__title}
                onClick={() => setIsOpen(!isOpen)}
            >
                <h4>{question}</h4>
                <span>
                    {isOpen ? '-' : '+'}
                </span>
            </div>
            <p
                style={{ display: isOpen ? 'block' : 'none' }}
            >
                {response}
            </p>
        </div>
    );
}
