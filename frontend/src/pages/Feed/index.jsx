import Header from '../../components/Header';
import LeftSideBar from '../../components/FeedComponents/LeftSidebar';
import MainContent from '../../components/FeedComponents/MainContent';
import RightSidebar from '../../components/FeedComponents/RightSidebar';
import styles from './styles.module.css';
import Footer from '../../components/Footer';

const Feed = () => {
  return (<>
    <Header/>
     <div className={styles.divGeral}>
    <LeftSideBar/>
    <MainContent/>
    <RightSidebar/>
    <Footer/>
    </div>
  </>);
}

export default Feed;