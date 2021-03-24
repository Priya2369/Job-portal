import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BrowseTopCategories from '../Component/propComponents/BrowseTopCategories'
import Sdata from '../Component/propComponents/Sdata'

// function nbox(val){
  

// }

export default function Home() {
  return (
    <>
    <h1>MoSahay</h1>
    <h2>WE PUT PEOPLE BACK TO WORK</h2>
    <h1>Browse Top categories</h1>
    <div className={styles.cards}>
	 {Sdata.map((val)=>{
     return(
      <BrowseTopCategories image={val.image}
       sName={val.sName}/>
    );

   })}
   </div>
		
    </>
  )
}
