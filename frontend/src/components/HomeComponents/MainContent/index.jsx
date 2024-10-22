import styles from './MainContent.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import cesarPerfil from '../../../assets/homeImg/marca_cesar_school.png';
import differentUser from '../../../assets/homeImg/usuario_publicacao.png';

export default function MainContent() {
  return (
    <div className={styles['main-content']}>
      <div className={styles['create-post']}>
        <div className= {styles['img-and-start']}>
        <img src={cesarPerfil} alt="" className={styles['avatar']}/>
        <input type="text" placeholder="Comece uma publicação"/>
        </div>
        <div className={styles['create-post-actions']}>
          <div className={styles['service-button']}>
          <FontAwesomeIcon icon={faBriefcase} alt="" className={styles['icons_fa']}/>
          <p className={styles['inner-text']}>Serviço</p>
          </div>
          <div className={styles['media-button']}>
          <FontAwesomeIcon icon={faPhotoFilm} alt="" className={styles['icons_fa']}/>
          <p className={styles['inner-text']}>Mídia</p>
          </div>
          <div className={styles['job-button']}>
          <FontAwesomeIcon icon={faBuilding} alt="" className={styles['icons_fa']}/>
          <p className={styles['inner-text']}>Vaga</p>
          </div>
        </div>
      </div>

      <div className={styles['post']}>
        <div className={styles['post-header']}>
          <img src="/placeholder.svg?height=40&width=40" alt="User Avatar" className={styles['avatar']} />
          <div className={styles['user-info']}>
            <h3>Usuário</h3>
            <p>Descrição do usuário | 1h</p>
          </div>
          <button className={styles['follow-button']}>Seguir</button>
        </div>
        <p className={styles['post-content']}>Conteúdo da publicação...</p>
        <div className={styles['post-images']}>
          <img src="/placeholder.svg?height=200&width=200" alt="Post Image 1" />
          <img src="/placeholder.svg?height=200&width=200" alt="Post Image 2" />
          <img src="/placeholder.svg?height=200&width=200" alt="Post Image 3" />
        </div>
        <div className={styles['post-stats']}>
          <span>0 curtidas</span>
          <span>0 Comentários</span>
        </div>
      </div>
    </div>
  )
}