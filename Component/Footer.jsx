import Link from 'next/link'
import { FaBeer, FaFacebook, FaInstagram, FaYoutube, FaLinkedin} from 'react-icons/fa';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

let Home = ()=> {
  return (
    <>
    <footer className="footer">
		<div className="inner-footer">
			<div className="quick-links">
				<ul>
				<li className="quick-items"><a href="">Jobs</a></li>
				<li className="quick-items"><a href="">Companies</a></li>
				<li className="quick-items"><a href="">About</a></li>
				<li className="quick-items"><a href="">Contact</a></li>
				</ul>
			</div>
			<div className="social-links">
				<ul>
				<li className="social-items"><Link  href="#"><a><FaFacebook /></a></Link></li>
				<li className="social-items"><Link href="#"><a>< FaInstagram/></a></Link></li>
				<li className="social-items"><Link href="#"><a><FaYoutube/></a></Link></li>
				<li className="social-items"><Link href="#"><a>< FaLinkedin/></a></Link></li>
			   </ul>	
			</div>
			<div className="hori-line"></div>
			<div className="footer-heading footer-3">
				<a href="index.html"><img src="/logo-g.png"/></a>
			</div>
		</div>
			<div className="outer-footer"><b>
				© Copyright &copy;2021.All Rights Reserved.   Privacy-Terms
				</b>
			</div>
		
	</footer>
    </>
  )
}
export default Home;