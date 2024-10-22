import styles from './RightSidebar.module.css'
import userIcon from '../../../assets/homeImg/icone.usuario.png';

export default function RightSidebar() {
  return (
    <div className={styles['right-sidebar']}>
      <h2>Sugestões para você</h2>
      <div className={styles['suggestion-box']}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
        <div key={`suggestion-${num}`} className={styles['suggestion-item']}>
          <img src={userIcon} alt=''/>
          <div className={styles['suggestion-info']}>
            <h3>Usuário</h3>
            <p>Descrição do usuário</p>
          </div>
          <button className={styles['visit-button']}>Visitar</button>
        </div>
      ))}
      </div>
      <button className={styles['view-all']}>Ver tudo...</button>
      <p className={styles['end-text']}>InterConex © Todos direitos reservados.</p>
    </div>
  )
}