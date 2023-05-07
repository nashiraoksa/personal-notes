import React from 'react';
import SearchBar from './SearchBar';

function NoteAppHeader() {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <SearchBar></SearchBar>
    </div>
  );
}

export default NoteAppHeader;
