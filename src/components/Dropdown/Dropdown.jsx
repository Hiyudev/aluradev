import React, { useEffect, useState, useRef } from "react";
import styles from "./Dropdown.module.css";

export default function Dropdown({ items, selected, selectNewValue }) {
  const [isOpen, open] = useState(false)

  const selectItem = (item) => {
    selectNewValue(item)
    open(false)
  }

  const componentRef = useRef();

  useEffect(() => {
    selectNewValue(items[0])

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    
    function handleClick(e) {
      if(componentRef && componentRef.current){
        const ref = componentRef.current
        if(!ref.contains(e.target)){
          open(false)
        }
      }
    }
  }, []);

  return (
    <div className={styles.customselect}>
      <div ref={componentRef} onClick={() => open(!isOpen)} className={`${styles.selected} ${isOpen ? styles.selectarrowactive : ''}`}>{selected}</div>
      <div className={styles.selectitems} hidden={!isOpen}>{items.map((item, index) => {
        return <option hidden={selected == item} onClick={() => selectItem(item)} key={index} value={item}>{item}</option>
      })}</div>
    </div>
  )
}