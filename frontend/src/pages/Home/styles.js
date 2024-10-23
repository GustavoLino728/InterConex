import styled from "styled-components";
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 100vw;
    height: 100vh;

    background: radial-gradient(#6A28A4, #280F3E);
`

export const HeaderRow = styled(motion.header)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2vh 3vw;

    width: 100%;
    max-width: 100vw;
    
    img{
        width: 55px;
        user-select: none;
        -webkit-user-drag: none;
    }
`

export const NavRow = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20vw;

    padding: 0 7vw;
`

export const ContentContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    max-width: 100vw;
    height: 80%;

    img {
        width: 40vw;
        user-select: none;
        -webkit-user-drag: none;
    }

    h1 {
        color: #F4E9E1;
        font-weight: 800;
        font-size: 4rem;
        width: 40vw;
        text-align: center;
    }
`