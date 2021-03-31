import Head from 'next/head'
import{ React, useState, useEffect} from 'react';
import styles from '../../styles/contact.module.css'
import TextField from '../propComponents/TextField'

export default function Contact() {
    const [detail, setDetail] = useState({
        Fname:'',
        email:'',
        No:'',
        message:'',
        })

       function submit(e){
           e.preventDefault();
           console.log(detail)

       }

        useEffect(()=>{
            
        })
  return (
    <>
    <div>
        <form onSubmit={e =>submit(e)}>
        <div>
            <input type="text" placeholder="Full Name"
            onChange={e =>setDetail({Fname:e.target.value, email:detail.email, No:detail.No , message:detail.message})} 
            value={detail.Fname}/>
        </div>
        <div>
            <div>
                <input type="text" placeholder="Email"
                 onChange={e =>setDetail({Fname:detail.Fname, email:e.target.value, No:detail.No , message:detail.message})}
                 value={detail.email}/>
            </div>
            <div>
                <input type="number" placeholder="Phone No"
                onChange={e =>setDetail({Fname:detail.Fname, email:detail.email, No:e.target.value , message:detail.message})}
                value={detail.No}/>
            </div>
        </div>
        <div>
            <textarea type='text' placeholder="message"
            onChange={e =>setDetail({Fname:detail.Fname, email:detail.email, No:detail.No , message:e.target.value})}
            value={detail.message}></textarea>
        </div>

        <div>
            <button>Submit</button>
        </div>
        </form>
    </div>
    </>
  )
}