import styles from './Error.module.css'

export default function Error({ children, hidden }) {
    return (
        <div className={styles.error + ' ' + ( hidden ? styles.hidden : '')}>
            <div className={styles.erroricon}>
                <img src="./icons/Warning.svg"></img>
            </div>
            <div className={styles.errorbody}>
                {children}
            </div>
        </div>
    )
}