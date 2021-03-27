import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BrowseTopCategories from '../Component/propComponents/BrowseTopCategories'
import Sdata from '../Component/propComponents/Sdata'
import Testimonial from '../Component/propComponents/Testimonial'
import TestimonialData from '../Component/arrya/TestimonialData'

// function nbox(val){


// }

export default function Home() {
  return (
    <>
      <h1>MoSahay</h1>
      <h2>WE PUT PEOPLE BACK TO WORK</h2>
      <h1>Browse Top categories</h1>
      <div className={styles.cards}>
        {Sdata.map((val) => {
          return (
            <BrowseTopCategories image={val.image}
              sName={val.sName} />);

        })}
      </div>
      <div>
        {TestimonialData.map((val) => {
          return (
            <Testimonial image={val.image} uName={val.uName} skill={val.skill} />
          );
        })}

      </div>
    </>
  )
}
