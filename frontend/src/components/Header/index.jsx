import styles from './Header.module.css'
import LogoImage from '../../assets/logoInterConexRedonda.png'
import { faBars, faBoxArchive, faUser } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Filtro from '../PesquisaComponets/Filtro'
import { api } from '../../services/api';
import { useLocation } from 'react-router-dom'

import Historico from '../../components/PesquisaComponets/Historico'
import SearchResults from '../PesquisaComponets/Resultados'

// eslint-disable-next-line react/prop-types
const Header = ({ handleShowNav }) => {
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const searchFocus = () => {
    setShowFilters(true);
  };

  const searchBlur = () => {
    if (searchTerm === '') {
      setShowFilters(false);
    }
  };

  const searchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length === 0) {
      setShowFilters(false);
      setSearchResults([]);
      return;
    } else {
      setShowFilters(true);
    }
  };
  const buscarEmpresas = async (e) => {
    e.preventDefault();
  
    try {
      const response = await api.post('/search', { nome: searchTerm });
      if (response.status !== 200) {
        throw new Error('Erro ao buscar dados');
      }
  
      // Combine os resultados de usuários e empresas
      const { usuarios, empresas } = response.data;
      const allResults = [...usuarios, ...empresas];
      setSearchResults(allResults);
    } catch (error) {
      console.error('Erro ao buscar dados', error);
    }
  };

  return (<>
    <header className={styles.headerContainer}>

      <div className={styles.headerPosition}>
        <FontAwesomeIcon icon={faBars} className={styles.iconButton} onClick={handleShowNav}/> 
        <img src= {LogoImage} alt="Logo do app" className={styles.logo}/>
      </div>

      {location.pathname === '/pesquisa' && (
        <form onSubmit={buscarEmpresas} className={styles.headerPosition}>
            <input 
            className={styles.pesquisa} 
            placeholder='Pesquisar...'
            type="text" 
            value={searchTerm}
            onChange={searchChange}
            onFocus={searchFocus}
            onBlur={searchBlur}
            />
            <button type="submit" style={{ display: 'none' }} />
        </form>
      )}

      <div className={styles.headerPosition}> 
        <FontAwesomeIcon icon={faBoxArchive} className={styles.iconButton}/>
        <FontAwesomeIcon icon={faUser} className={styles.iconButton} />
      </div>
    </header>

    {location.pathname === '/pesquisa' && showFilters && <Filtro />}
      {location.pathname === '/pesquisa' && <Historico />}

      {location.pathname === '/pesquisa' && searchTerm && searchResults.length === 0 && (
        <p>Nenhum resultado encontrado</p>
      )}

      {location.pathname === '/pesquisa' && (
        <SearchResults results={searchResults} searchTerm={searchTerm}/>
      )}
  </>)
}

export default Header;