import React from 'react';

function SearchBar({ search, onSearch }) {
  return (
    <form action="">
      <input type="text" placeholder="Search..." />
      <button type="submit" onClick={() => onSearch(search)}>
        <i class="fa fa-search"></i>
      </button>
    </form>
  );
}

export default SearchBar;
