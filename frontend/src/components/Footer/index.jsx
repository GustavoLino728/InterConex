import styles from './Footer.module.css';
import LogoImage from '../../assets/logoInterConex.jpg';
import { faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer>
    <img src= {LogoImage} alt="Logo do app" className={styles.logo}/>
    <div className={styles.footerSection}>
      <p>Sobre</p>
      <p>Startups</p>
      <p>Freelancers</p>
    </div>
    <div className={styles.footerSection}>
      <p>Privacidade</p>
      <p>Termos de serviço</p>
      <p>Cookies</p>
      <p>Segurança</p>
    </div>
    <div>
      <p><FontAwesomeIcon icon={faGithub} className={styles.icons}/></p>
      <p><FontAwesomeIcon icon={faInstagram} className={styles.icons}/></p>
      <p><FontAwesomeIcon icon={faFacebook} className={styles.icons}/></p>     
    </div>

  </footer>
  )
}

export default Footer;