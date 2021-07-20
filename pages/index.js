import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Home.module.css'
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';
import CodeMirror from '@components/Codemirror/Codemirror'
import Dropdown from '@components/Dropdown/Dropdown'
import Error from '@components/Error/Error';
import router from 'next/router';

export default function Home() { 
  const [code, setNewCode] = useState("");
  const [color, setColor] = useState("#6BD1FF");
  const [mode, newMode] = useState('Javascript');
  const [exportoption, newExport] = useState('');
  const [theme, newTheme] = useState('Monokai');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [showError, setError] = useState(false);

  const titletext = useRef();
  const desctext = useRef();
  const codeblock = useRef();

  const triggerError = () => {
    setError(true);
  }

  const [options, setNewOptions] = useState({
    mode: mode.toLowerCase(),
    theme: theme.toLowerCase(),
    lineWrapping: true
  });
  
  const saveProject = () => {
    const object = { title, desc, color, mode, theme, code }

    if(!(title.length >= 3) || !(desc.length > 0) || !(code.length > 0)) {
      return triggerError();
    }
    
    const objects = []

    objects.push(object)

    const lS = window.localStorage
    if(lS.getItem('projetos')) {
      const arr = JSON.parse(lS.getItem('projetos'));
      arr.map( el => objects.push(el))
    }

    lS.setItem('projetos', JSON.stringify(objects));

    setTitle("");
    setDesc("");
    
    titletext.current.value = "";
    desctext.current.value = "";

    router.push('/projetos')
  }

  useEffect(() => {
    document.querySelector('html').style.setProperty('--backcodeblock', color)
  }, [color]);

  useEffect(() => {
    if(title.length >= 3 || desc.length > 0 || code.length > 0) {
      setError(false);
    }
  }, [code, title, desc]);

  useEffect(() => {
    const rmode = mode.toLowerCase();
    const rtheme = theme.toLowerCase();

    setNewOptions({
      mode: rmode,
      theme: rtheme
    })
  }, [mode, theme]);

  const exportImage = () => {
    const el = codeblock.current
    switch(exportoption) {
      case "PNG":
        domtoimage.toPng(el)
          .then((blob) => {
            saveAs(blob, 'code.png')
          })
        break;
      case "SVG":
        domtoimage.toSvg(el)
          .then((blob) => {
            saveAs(blob, 'code.svg')
          })
        break;
      case "JPEG":
        domtoimage.toJpeg(el)
        .then((blob) => {
          saveAs(blob, 'code.jpeg')
        })
        break;
    }
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.center}>
          <div ref={codeblock} className={styles.codebackground}>
            <div className={styles.codeblockheader}>
              <img src="./icons/Ellipse 1.svg"/>
              <img src="./icons/Ellipse 2.svg"/>
              <img src="./icons/Ellipse 3.svg"/>
            </div>
            {<CodeMirror
              className={"shadow" + ' ' + styles.textcode}
              value={code}
              onChange={code => setNewCode(code)}
              options={options}
            />}
          </div>

          <Error hidden={(!showError) || code.length > 0}>Coloque um código para salvar</Error>

          <div className={styles.customother}>
            <button onClick={exportImage} className={"button-outline" + ' ' + styles.bottommargin}>Exportar</button>
            
            <Dropdown selected={exportoption} selectNewValue={newExport} items={["PNG", "JPEG", "SVG"]}/>
          </div>
        </div>

        <div className={styles.rightbar}>
          <div className={styles.sidebar_title}>SEU PROJETO</div>
  
          <div className={styles.listmenu}>
              <input ref={titletext} onChange={e => setTitle(e.target.value)} className={styles.inputs} type="text" placeholder="Nome do seu projeto"/>
              <Error hidden={(!showError) || title.length >= 3}>Coloque um titulo com mais de 3 caracteres para o projeto</Error>

              <textarea ref={desctext} onChange={e => setDesc(e.target.value)} className={styles.inputs} type="text" rows="4" placeholder="Descrição do projeto"></textarea>
              <Error hidden={(!showError) || desc.length > 0}>Coloque uma descrição para o projeto</Error>
          </div>

          <div className={styles.sidebar_title + ' ' + styles.topmargin}>PERSONALIZAÇÃO</div>

          <div className={styles.listmenu}>
            <div className={styles.listmenu + ' ' + styles.custommenu} id="listtwo">
              <Dropdown selected={mode} selectNewValue={newMode} items={[
                "Javascript", "CSS", "HTMLMIXED", "Python", "Xml"
              ]}/>

              <Dropdown selected={theme} selectNewValue={newTheme} items={[
                "Monokai", "Cobalt", "Darcula", "Paraiso-dark", "3024-Day", "3024-Night"
              ]}/>

              <input className={styles.colorpicker} type="color" defaultValue={color} onChange={e => setColor(e.target.value)}/>
            </div>

            <button onClick={saveProject} className={"button-filled"} id="save">Salvar projeto</button>
          </div>
        </div>
      </main>
    </div>
  )
}
