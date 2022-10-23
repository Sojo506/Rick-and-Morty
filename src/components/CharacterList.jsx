import React from "react";
import Character from "./Character";
import "../styles/CharacterList.css";

function CharacterList({ characters }) {
  return (
    <div className="character-container">
      {characters.map((character) => {
        return (
          <Character character={character} key={character.id} />
        );
      })}
    </div>
  );
}

export default CharacterList;
