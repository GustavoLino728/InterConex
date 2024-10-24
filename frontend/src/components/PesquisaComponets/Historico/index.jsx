import styles from './Historico.module.css'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Historico = () => {
    const historico = [
        { id: 1, nome: "Nome 1" },
        { id: 2, nome: "Nome 2" },
        { id: 3, nome: "Nome 3" },
        { id: 4, nome: "Nome 4" },
        { id: 5, nome: "Nome 5" },
      ];

    return (
    <div className={styles.historicoContainer}>
        <h3 className={styles.historicoTitle}><FontAwesomeIcon icon={faRepeat}/> Histórico</h3>
        

        <div className={styles.historicoItems}>
        {historico.map((item) => (
            <div key={item.id} className={styles.historicoItem}>
            <div className={styles.historicoIcon}> {/* Ícone para cada item */}
                {/* Ícone ou imagem do usuário */}
            </div>
            <div className={styles.historicoNome}>
                {item.nome} {/* Nome do usuário ou item */}
            </div>
            </div>
        ))}
        </div>

        
    </div>
    );
}


export default Historico;