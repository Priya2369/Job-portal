import Link from 'next/link'
import { FaBeer, FaFacebook, FaInstagram, FaYoutube, FaLinkedin} from 'react-icons/fa';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
     <div className="header">
                <div className="header-logo">
                    <a>Email:mosahay.adm@gmail.com</a>


                </div>
                <div className="float-right-header">
                   <Link  href="#"><a><FaFacebook /></a></Link> 
                   <Link href="#"><a>< FaInstagram/></a></Link>
                   <Link href="#"><a><FaYoutube/></a></Link>
                   <Link href="#"><a>< FaLinkedin/></a></Link>

                </div>
            </div>
            <div className="navbar">
                <div className="navbar-logo">
                    <a href="index.html"><img src="logo-g.png" /></a>
                </div>
                <div className="float-navbar">
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/jobs"><a>Jobs</a></Link>
                    <Link href="/companies"><a>Companies</a></Link>
                    <Link href="/about"><a>About</a></Link>
                    <Link href="/contact"><a>Contact</a></Link>
                    <Link href="/login"><a>Login</a></Link>
                </div>
            </div>
    </>
  )
}
