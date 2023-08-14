import styles from "./Spinner.module.scss";

interface SpinnerProps {
    type?: string
}

export function Spinner({ type }: SpinnerProps) {
    return (
        <div 
            className={styles.spinner__wrapper}
            style={{
                height: `${type === 'products' ? '600px' : '350px'}`
            }}
        >
            <span className={styles.loader}></span>
            <h4>Carregando informações...</h4>
        </div>
    );
}