import React from "react";
import '../styles/NavPage.css'

function NavPage({ page, setPage }) {
  return (
    <div>
      <header className="button-container">
        <button onClick={() => setPage(
          page > 1 ? page-1: page+0
        )}>Previous</button>
        <button onClick={() => setPage(page + 1)}>NexT</button>
      </header>
    </div>
  );
}

export default NavPage;
