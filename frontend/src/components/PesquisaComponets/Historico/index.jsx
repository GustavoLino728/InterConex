import styles from './Historico.module.css'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Historico() {
    return(
        <div className={styles.historicoContainer}>
            <FontAwesomeIcon icon={faRepeat} />
            Histórico
        </div>
    );
}

export default Historico;