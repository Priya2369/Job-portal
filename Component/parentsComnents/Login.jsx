import Head from 'next/head'
import{ React, useState, useEffect} from 'react';
import styles from '../../styles/login.module.css'
import TextField from '../propComponents/TextField'

export default function Login() {
    const [detail, setDetail] = useState({
        email:'',
        psw:'',
        })

       function submit(e){
           e.preventDefault();
           console.log(detail)

       }

    //    const InputEvent = (e)=>{
    //     console.log(e.target.value)
    //     const{name , value} = e.target
    //     setDetail((preValue)=>{
    //       return{
    //         ...preValue,
    //         [name]:value,
  
    //       }
    //     });
        
    // }


        // const InputEvent = (e)=>{
        //     const newdata = {...detail}
        //     newdata[e.target.vName] = e.target.value
        //     setDetail(newdata)
        //     console.log(newdata)
            
        // }

        useEffect(()=>{
            
        })
  return (
    <>
    <div className={styles.mainDiv}>
        <div className={styles.loginForm}>
            <form onSubmit={e =>submit(e)}>
                <TextField InputEvent={e =>setDetail({email:e.target.value, psw:detail.psw})} val={detail.email} 
                // vName="email"
                />
                <TextField InputEvent={e => setDetail({email:detail.email, psw:e.target.value})} val={detail.psw} 
                // vName="psw"
                />
                <div className={styles.fpass}>
                    <a href="#">Forget password?</a><br/>
                </div>
                <div className={styles.btn}>
                    <button className={styles.login} >login</button>
                </div>
                
            </form>
            <div className={styles.cna}>
                    <button className={styles.newacc}>Create new account</button>
                </div>
            
        </div>
    </div>
    </>
  )
}