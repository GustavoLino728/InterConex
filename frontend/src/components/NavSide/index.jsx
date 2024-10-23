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
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const containerVariants = {
    initial: {
        opacity: 0,
        width: 0
    },

    animate: {
        opacity: 1,
        width: '18vw',
        
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 150,
            duration: 1,
            ease: "easeInOut"
        }
    },

    exit: {
        opacity: 0,
        width: 0,
        
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 150,
            duration: 1,
            ease: "easeInOut"
        }
    }
}

// eslint-disable-next-line react/prop-types
const NavSide = ({ isOpen, handleCloseNav }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setIsAnimating(true);
        }
    }, [isOpen]);

    const handleAnimationComplete = () => {
        if (!isOpen) {
            setIsAnimating(false);
        }
    };
    
    const isActive = (path) => location.pathname === path;


    const navegar = (path) => {
        handleCloseNav();
        navigate(path);
    }

  return (
    <motion.div className={styles.container}
        variants={containerVariants}
        style={{ 
            pointerEvents: isOpen ? "auto" : "none", 
            display: isAnimating || isOpen ? 'block' : 'none' 
        }}
        initial={false}
        animate={isOpen ? "animate" : "initial"}
        exit="exit"
        onAnimationComplete={handleAnimationComplete}
    >
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
    </motion.div>
  )
}

export default NavSide;