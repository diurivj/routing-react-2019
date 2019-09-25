import React from 'react';
import { Link } from 'react-router-dom';

function CharacterCard({ character }) {
  return (
    <div>
      <h3>{character.name}</h3>
      <p>{character.status}</p>
      <Link to={`/characters/${character.id}`}>
        <img src={character.image} alt={character.name} />
      </Link>
    </div>
  );
}

export default CharacterCard;
