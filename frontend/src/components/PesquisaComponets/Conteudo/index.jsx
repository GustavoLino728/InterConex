import styles from './conteudo.module.css';

const SearchResults = ({ results, terms }) => {
    if (!results || results.length === 0) {
      // Não exibe nada se não houver resultados
      return (
        <>
        {terms && results.length === 0 && (
            <p>Nenhum resultado encontrado</p>
        )}
        </>
      )
    }
    
    return (
      <div className={styles.containerPesquisa}>
        <ul className={styles.containerPesquisa}>
          {results.map((item, index) => (
            // Exemplo: exibindo o nome de cada item
            <li className={styles.contentPesquisa} key={index}>{item.nome}</li> 
          ))}
        </ul>
      </div>
    );
};
  
export default SearchResults;