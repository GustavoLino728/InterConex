import LeftSideBar from '../../components/FeedComponents/LeftSidebar';
import MainContent from '../../components/FeedComponents/MainContent';
import RightSidebar from '../../components/FeedComponents/RightSidebar';
import styles from './styles.module.css'

const Feed = () => {
  return (<>
    <div className={styles.divGeral}>
      <LeftSideBar/>
      <MainContent/>
      <RightSidebar/>
    </div>
  </>);
}

export default Feed;