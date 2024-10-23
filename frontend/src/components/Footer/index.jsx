import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
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
  </footer>
  )
}

export default Footer;