import styles from './Header.module.css'
import LogoImage from '../../assets/logoInterConexRedonda.png'
import { faBars, faBoxArchive, faUser } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Filtro from '../PesquisaComponets/Filtro'
import { api } from '../../services/api';
import SearchResults from '../PesquisaComponets/Conteudo'

// eslint-disable-next-line react/prop-types
const Header = ({ handleShowNav }) => {

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
    const value = e.target.value;
    setSearchTerm(value);
    try {
        const response = await api.post('/search',{nome: value});

        if (response.status !== 200) {
            throw new Error('Erro ao buscar dados');
        }

        setSearchResults(response.data);
    } catch (error) {
        console.error('Erro ao buscar dados',error);
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
        </form>
      )}

      <div className={styles.headerPosition}> 
        <FontAwesomeIcon icon={faBoxArchive} className={styles.iconButton}/>
        <FontAwesomeIcon icon={faUser} className={styles.iconButton} />
      </div>
    </header>

    {showFilters && (
      <Filtro />
    )}
    {searchTerm && searchResults.length === 0 && (
      <p>Nenhum resultado encontrado</p>
    )}
    {searchTerm && searchResults.length > 0 && (
      <SearchResults results={searchResults} terms={searchTerm}/>
    )}
  </>)
}

export default Header;