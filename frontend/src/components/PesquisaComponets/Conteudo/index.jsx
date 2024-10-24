import ImagemTeste from '../../../assets/questions.png';
import styles from './conteudo.module.css';

const Conteudo = () => {
    return (
        <div className={styles.body}>    
            <div className={styles.containerConteudo}>
                <img src={ImagemTeste} 
                alt="Question Mark" 
                className={styles.content}/>
            </div>
        </div>
    )
}

export default Conteudo;