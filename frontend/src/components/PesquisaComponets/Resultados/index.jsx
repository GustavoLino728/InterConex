import styles from './styles.module.css'
import PlaceHolderIcon from '../../../assets/Questions-bro.svg';

// eslint-disable-next-line react/prop-types, no-unused-vars
const SearchResults = ({ results, searchTerm }) => {
  return (
    <div className={styles.resultsContainer}>
      {searchTerm === '' ? (
        <div className={styles.placeholderContainer}>
          <img src={PlaceHolderIcon} className={styles.placeholderIcon} />
          <p>Comece a pesquisar para ver os resultados...</p>
        </div>
      ) : (
        results.map((result, index) => (
          <div key={index} className={styles.resultCard}>
            {result.nome_empresa ? (
              <h1>{result.nome_empresa}</h1>
            ) : (
              <h1>{result.nome} {result.sobrenome}</h1>
            )}
            <h3>{result.email}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResults