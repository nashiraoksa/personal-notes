import React from 'react';

function SearchBar({ search, onSearch }) {
  return (
    <form action="">
      <input type="text" placeholder="Cari judul..." />
      <button type="submit" className="note-header__search-button" onClick={() => onSearch(search)}>
        Cari
      </button>
    </form>
  );
}

export default SearchBar;
