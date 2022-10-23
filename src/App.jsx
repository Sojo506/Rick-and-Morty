import React, { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import Nav from './components/NavPage';
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <div className="app-container">
      <h1 className="">Rick and Morty</h1>
      <Nav 
        page={page}
        setPage={setPage}/>
      {loading ? (
        <h1>Loanding...</h1>
      ) : (
        <CharacterList characters={characters} />
      )}
      <p className="page-number">Page: {page}</p>
      <Nav 
        page={page}
        setPage={setPage}/>
    </div>
  );
}

export default App;
