import styles from './NavSide.module.css'
import LogoInterConex from '../../assets/logoInterConexRedonda.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBusinessTime,
    faComment,
    faHouse,
    faLaptopCode,
    faMagnifyingGlass,
    faNetworkWired,
    faRectangleXmark,
    faUser,
} from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const NavSide = ({ isOpen, handleCloseNav }) => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const isActive = (path) => location.pathname === path;

    const navegar = (path) => {
        handleCloseNav();
        navigate(path);
    }

  return (
    <div className={`${isOpen ? styles.container : styles.hidden}`}>
        <div className={styles.navTop}>
            <img src={LogoInterConex} alt="Logo InterConex" />
            <FontAwesomeIcon icon={faRectangleXmark} className={styles.icon} onClick={handleCloseNav}/>
        </div>

        <nav className={styles.navLinks}>
            <button onClick={() => navegar('/feed')} className={`${styles.containerLinks} ${isActive('/feed') ? styles.active : ''}`}>
                <FontAwesomeIcon icon={faHouse} className={styles.navIcon}/>
                Página Inicial
            </button>

            <button onClick={() => navegar('/pesquisa')} className={`${styles.containerLinks} ${isActive('/pesquisa') ? styles.active : ''}`}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.navIcon}/>
                Pesquisa
            </button>

            <button onClick={() => navegar('/startups')} className={`${styles.containerLinks} ${isActive('/startups') ? styles.active : ''}`}>
                <FontAwesomeIcon icon={faNetworkWired} className={styles.navIcon}/>
                Startups
            </button>

            <button onClick={() => navegar('/vagas')} className={`${styles.containerLinks} ${isActive('/vagas') ? styles.active : ''}`}>
                <FontAwesomeIcon icon={faBusinessTime} className={styles.navIcon}/>
                Vagas
            </button>

            <button onClick={() => navegar('/freelancers')} className={`${styles.containerLinks} ${isActive('/freelancers') ? styles.active : ''}`}>
                <FontAwesomeIcon icon={faLaptopCode} className={styles.navIcon}/>
                Freelancers
            </button>

            <button onClick={() => navegar('/chat')} className={`${styles.containerLinks} ${isActive('/chat') ? styles.active : ''}`}>
                <FontAwesomeIcon icon={faComment} className={styles.navIcon}/>
                Mensagens
            </button>

            <button onClick={() => navegar('/perfil')} className={`${styles.containerLinks} ${isActive('/perfil') ? styles.active : ''}`}>
                <FontAwesomeIcon icon={faUser} className={styles.navIcon}/>
                Perfil
            </button>
        </nav>
    </div>
  )
}

export default NavSide;