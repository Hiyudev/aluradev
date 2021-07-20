import { useTheme } from "src/hooks/Theme"
import styles from '../styles/Config.module.css'

export default function Configuration() {
    const {setTheme, setPalette} = useTheme()
    
    const setThemeDark = () => setTheme('dark');
    const setThemeWhite = () => setTheme('white');
    const setThemeBlue = () => setTheme('blue');
    
    const setPaletteBlue = () => setPalette('blue');
    const setPalettePurple = () => setPalette('purple');
    const setPaletteGreen = () => setPalette('green');

    return (
        <>
            <div className={styles.sidebar_title}>TEMAS</div>
            <div className={styles.themelist}>
                <button className={"button-filled"} onClick={setThemeDark}>Dark</button>
                <button className={"button-filled"} onClick={setThemeWhite}>White</button>
                <button className={"button-filled"} onClick={setThemeBlue}>Blue</button>
            </div>

            <hr/>

            <div className={styles.sidebar_title}>CORES</div>
            <div className={styles.themelist}>
                <button className={"button-filled"} onClick={setPaletteBlue}>Blue</button>
                <button className={"button-filled"} onClick={setPalettePurple}>Purple</button>
                <button className={"button-filled"} onClick={setPaletteGreen}>Green</button>
            </div>
        </>
    )
}