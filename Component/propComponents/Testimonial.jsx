import Head from 'next/head'
import styles from '../../styles/testimonal.module.css'


export default function Testimonial(props) {
  return (
    <>
    <div className={styles.mainDiv}>


<div className="testimonials-carousel-wrap">
    
    <div className={styles.testimonialsCarousel}>
        <div className={styles.swiperContainer}>
            <div className="swiper-wrapper">
                <div className={styles.swiperSlide}>
                    <div className={styles.testiItem}>
                        <div className={styles.testiAvatar}><img src={props.image}/></div></div>
                        
                        <div className={styles.testimonialsText}>
                            <div className="section-title">
                        
                                <div className={styles.testimonialsAvatar}>
                                    <h3>{props.uName}</h3>
                                    <h4>{props.skill}</h4>
                                </div>
                               
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            
                        </div>
                    
                    </div>
                </div>

                </div>
        </div>
    </div>

  
</div>


    </>
  )
}