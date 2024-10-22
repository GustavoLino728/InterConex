import styles from './LeftSidebar.module.css'
import userIcon from '../../../assets/homeImg/icone.usuario.png';

export default function LeftSidebar() {
  return (
    <div className={styles['left-sidebar']}>
      <div className={styles.ranking}>
        <h2>Ranking de Empresas</h2>
          {[1, 2, 3, 4, 5].map((num) => (
          <div key={`company-${num}`} className={styles['ranking-item']}>
            <img src={userIcon} alt={`Startup ${num}`}/>
            <span>Empresa</span>
            <span className={styles.position}>{num}st</span>
          </div>
        ))}
        <button className={styles['view-all']}>Ver tudo...</button>
      </div>

      <div className={styles.ranking}>
        <h2>Ranking de Startups</h2>
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={`startup-${num}`} className={styles['ranking-item']}>
            <img src={userIcon} alt='' />
            <span>Startup</span>
            <span className={styles.position}>{num}st</span>
          </div>
        ))}
        <button className={styles['view-all']}>Ver tudo...</button>
      </div>
    </div>
  )
}
