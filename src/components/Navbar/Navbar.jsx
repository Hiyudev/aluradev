import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css'
import inputs from '../../../styles/Input.module.css'
import Link from 'next/link'
import { useRouter } from "next/router";
import AluraIcon from 'public/icons/Logo';

export default function Navbar(props) {
    const router = useRouter();

    useEffect(() => {
        window.onresize = () => {  
            if(window.innerWidth > 575 && search) {
                setSearch(false);
            }

            if(window.innerWidth > 840 && menu) {
                setMenu(false);
            }
        };

        document.getElementById("searchbar").style.display = search ? "block" : ""
        document.getElementById("logo").style.display = search ? "none" : "block"
    
        document.getElementById("menu").style.display = menu ? "" : "none"
    });
    
    const [search, setSearch] = useState(false);
    const [menu, setMenu] = useState(false);


    const links = (
        <>
            <Link href="/">
                <a onClick={() => {if(menu) setMenu(false)}} className={styles.listitem + ' ' + `${router.pathname == "/" ? styles.active : ""}`}>
                    <div className={"icon" + ' ' + styles.itemicon}>
                        <img className={"icon"} src="./icons/Code.svg"/>
                    </div>
                    <div className={styles.icontitle}>Editor de Código</div>
                </a>
            </Link>

            <Link href="/projetos">
                <a onClick={() => {if(menu) setMenu(false)}} className={styles.listitem + ' ' + `${router.pathname == "/projetos" ? styles.active : ""}`}>
                    <div className={"icon" + ' ' + styles.itemicon}>
                        <img className={"icon"} src="./icons/Blueprint.svg"/>
                    </div>
                    <div className={styles.icontitle}>Meus projetos</div>
                </a>
            </Link>

            <Link href="/config">
                <a onClick={() => {if(menu) setMenu(false)}} className={styles.listitem + ' ' + `${router.pathname == "/config" ? styles.active : ""}`}>
                    <div className={"icon" + ' ' + styles.itemicon}>
                        <img className={"icon"} src="./icons/Cog.svg"/>
                    </div>
                    <div className={styles.icontitle}>Configuração</div>
                </a>
            </Link>
        </>
    )

    return (
        <>
            <header className={styles.topbar}>
                <div id="logo" className={styles.logo}>
                    {AluraIcon()}
                </div>
        
                <div id="searchbar" className={styles.searchbar}>
                    <input className={inputs.input} type="text" id="pesquisa" placeholder="Busque por algo"/>
                </div>
        
                <div className={styles.ghostmenu}></div>
                
                <div className={styles.responsive}>
                    <a onClick={() => setSearch(!search)}>
                        <div className={"icon" + ' ' + styles.mobile}>
                            <img src="./icons/Search.svg"/>
                        </div>
                    </a>
                    <a onClick={() => setMenu(!menu)}>
                        <div className={"icon" + ' ' + styles.tablet}>
                            {menu ? <img src="./icons/No.svg"/> : <img src="./icons/Menu.svg"/>}
                        </div>
                    </a>
                </div>
            </header>
            <div id="menu" className={styles.menubar}>
                {links}
            </div>
            <main className={styles.main}>
                <nav className={styles.leftnav}>
                    <div className={styles.sidebar_title}>MENU</div>
            
                    <div className={styles.list}>
                        {links}
                    </div>
                </nav>
                <div className={styles.content}>
                    {props.children}
                </div>
            </main>
        </>
    )
}