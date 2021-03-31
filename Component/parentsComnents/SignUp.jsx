import Head from 'next/head'
import{ React, useState, useEffect} from 'react';
import styles from '../../styles/login.module.css'
import TextField from '../propComponents/TextField'

export default function SignUp() {
    const [detail, setDetail] = useState({
        email:'',
        psw:'',
        Cpsw:'',
        })

       function submit(e){
           e.preventDefault();
           console.log(detail)

       }

        useEffect(()=>{
            
        })
  return (
    <>
    <div className={styles.mainDiv}>
        <div className={styles.loginForm}>
            <form onSubmit={e =>submit(e)}>
                <TextField InputEvent={e =>setDetail({email:e.target.value, psw:detail.psw, Cpsw:detail.Cpsw})} val={detail.email}/>
                <TextField InputEvent={e => setDetail({email:detail.email, psw:e.target.value, Cpsw:detail.Cpsw})} val={detail.psw} />
                <TextField InputEvent={e => setDetail({email:detail.email, psw:detail.psw, Cpsw:e.target.value})} val={detail.Cpsw} />
               
                <div className={styles.btn}>
                    <button className={styles.login} >login</button>
                </div>
                
            </form>
            
        </div>
    </div>
    </>
  )
}