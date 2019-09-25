import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function HomeContainer(props) {
  console.log(props);
  return (
    <div className={styles.container}>
      <h1>Rick And Morty API, (free torrent, free virus)</h1>
      <Link to="/characters">
        <button>Characters</button>
      </Link>
    </div>
  );
}

export default HomeContainer;
