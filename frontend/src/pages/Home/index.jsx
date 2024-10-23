import LogoInterConex from '../../assets/logoInterConexRedonda.png'
import SVGFigure from '../../assets/Online-world-pana.svg'
import { Container, HeaderRow, NavRow, ContentContainer } from './styles'
import styles from './home.module.css'

import { Link } from 'react-router-dom';
import { animate, motion } from 'framer-motion';

const containerVariants = {
  initial: {
    opacity: 0,
    x: '-40vw'
  },

  animate: {
      opacity: 1,
      x: 0,

    transition: {
      type: "spring",
      damping: 15,
      stiffness: 150,
      delay: 0.5,
      duration: 1,
      ease: "easeInOut"
    }
  },
}

const headerVariants = {
  initial: {
    opacity: 0,
    y: '-40vh'
  },

  animate: {
    opacity: 1,
    y: 0,

    transition: {
      type: "spring",
      damping: 20,
      stiffness: 150,
      duration: 1,
      ease: "easeInOut"
    }
  },
}

const imgVariants = {
  animate: {
    y: [0, -10],
    scale: [1, 1.02],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 1
    }
  }
}

const Home = () => {
  return (
    <Container>
        <HeaderRow
          variants={headerVariants}
          initial="initial"
          animate="animate"
        >
            <img src={LogoInterConex} alt="Logo Inter" />
            <NavRow>
                <Link to='/login' className={styles.link}>Login</Link>
                <Link to='/registro' className={styles.link}>Registro</Link>
            </NavRow>
        </HeaderRow>

        <ContentContainer
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.img src={SVGFigure} alt="Figure Home" 
            variants={imgVariants}
          />
          <h1>Boas-vindas ao InterConex!</h1>
        </ContentContainer>
    </Container>
  )
}

export default Home