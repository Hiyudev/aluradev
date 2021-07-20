import { useEffect, useState } from 'react'
import Card from '@components/Card/Card'
import styles from '../styles/Project.module.css'
import Link from 'next/link'

export default function MeusProjetos() {

  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    const lS = window.localStorage
    var myProjects = lS.getItem('projetos');
    if(myProjects == null) return;
    setProjects(JSON.parse(myProjects))
  }, [])

  const deleteThis = (i) => {
    var objects = [];
    
    const lS = window.localStorage
    if(lS.getItem('projetos')) {
      const arr = JSON.parse(lS.getItem('projetos'));
      arr.map( el => objects.push(el))
    }
    
    objects.splice(i, 1);
    setProjects(objects);

    if(objects.length == 0) {
      return lS.removeItem('projetos')
    } else {
      return lS.setItem('projetos', JSON.stringify(objects))
    }
  }

  const list = (
    projects.map((value, index) => {
      return (
        <Card 
          key={index} 
          keyel={index}
          title={value.title} 
          desc={value.desc} 
          value={value.code}
          mode={value.mode.toLowerCase()}
          theme={value.theme.toLowerCase()}
          color={value.color}
          onDelete={deleteThis}
        />
      )
    })
  )

  const nolist = (
    <div className={styles.nolist}>
      <div className={styles.nolist_card}>
        <div className={styles.nolist_card_icon}>
          <img src="./icons/Blueprint.svg"/>
        </div>
        <div className={styles.nolist_card_title}>Nenhum projeto foi encontrado</div>
        <Link href="/">
          <button className={"button-outline"}>Criar um projeto</button>
        </Link>
      </div>
    </div>
  )

  return (
    <div className={styles.container}>
        <main className={styles.main}>
          {projects.length > 0 ? list : nolist}
        </main>
    </div>
  )
}
