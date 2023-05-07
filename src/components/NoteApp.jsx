import React from 'react';
import NoteList from './NoteList';
import { getInitialData } from '../utils';
import NoteAppHeader from './NoteAppHeader';
import NoteInput from './NoteInput';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    // console.log(id);
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    console.log(id);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: Math.floor(Math.random() * 100),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="note-app">
        <NoteAppHeader></NoteAppHeader>
        <div className="note-app__body">
          <div className="note-input">
            <h2>Buat Catatan</h2>
            <NoteInput addNote={this.onAddNoteHandler}></NoteInput>
          </div>

          <h2>Catatan Aktif</h2>
          <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}></NoteList>

          <h2>Arsip</h2>
        </div>
      </div>
    );
  }
}

export default NoteApp;
