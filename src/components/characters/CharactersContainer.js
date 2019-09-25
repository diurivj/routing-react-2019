import React, { Component } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

class CharactersContainer extends Component {
  state = {};

  componentDidMount() {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(({ data }) => {
        this.setState({ characters: [...data.results] });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { characters } = this.state;
    if (!characters) return <p>Loading...</p>;
    return (
      <div>
        <h1>Characters</h1>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    );
  }
}

export default CharactersContainer;
