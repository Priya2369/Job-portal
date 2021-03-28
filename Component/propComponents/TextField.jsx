import Head from 'next/head'
import styles from '../../styles/textField.module.css'

export default function TextField(props) {
  return (
    <>
    <input required="" type="text" className={styles.input}  onChange={e => props.InputEvent(e)} value={props.val} 
    name={props.vName}/>
    <label alt="Email/Phone no." placeholder="Email/Phone no." className={styles.label}></label>
    </>
  )
}