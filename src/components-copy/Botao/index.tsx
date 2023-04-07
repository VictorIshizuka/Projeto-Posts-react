import styles from  './styles.module.css'

export const Botao = () => {
    return (
        <div className={styles.square}>
            <button className={styles.botao} >Clique aqui</button>
            <p className={styles.legend}>Legenda</p>
        </div>
    )
}