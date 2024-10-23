import Home from './pages/Home';
import Feed from './pages/Feed';
import Login from './pages/Login';
import Pesquisa from './pages/Pesquisa';
import RegistroEmpresas from './pages/RegistroEmpresas';

import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import { useLocation } from 'react-router-dom';

import {
  Routes,
  Route,
} from 'react-router-dom'

const App = () => {
  const location = useLocation();

  return (
    <>
      { location.pathname !== '/' &&
        location.pathname !== '/login' &&
        location.pathname !== '/registro' &&
        location.pathname !== '/registro-empresa' && (
          <Header/>
      )}
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/feed" element={<Feed/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/registro" element={<Login/>}></Route>
        <Route path="/pesquisa" element={<Pesquisa/>}></Route>
        <Route path="/registro-empresa" element={<RegistroEmpresas/>}></Route>
      </Routes>

      { location.pathname !== '/' &&
        location.pathname !== '/login' &&
        location.pathname !== '/registro' &&
        location.pathname !== '/registro-empresa' && (
          <Footer/>
      )}
    </>
  )
}

export default App
