import React from "react";
import '../styles/Character.css'

function Character({ character }) {
  return (
    <div className="character">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>{character.origin.name}</p>
    </div>
  );
}

export default Character;
