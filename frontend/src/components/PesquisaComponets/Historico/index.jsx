import styles from './Historico.module.css'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Historico() {
    const historico = [
        { id: 1, nome: "Nome 1" },
        { id: 2, nome: "Nome 2" },
        { id: 3, nome: "Nome 3" },
        { id: 4, nome: "Nome 4" },
        { id: 5, nome: "Nome 5" },
      ];

    return (
    <div className={styles.historicoContainer}>
        <div className={styles.historicoTitle}>
        <h3><FontAwesomeIcon icon={faRepeat}/> Histórico</h3>
        </div>

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

        <div className={styles.verTudo}>
        <a href="/ver-tudo">Ver tudo...</a> {/* Link para ver todos os itens */}
        </div>
    </div>
    );
}


export default Historico;