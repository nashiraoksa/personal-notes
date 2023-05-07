import React from 'react';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
import ArchieveButton from './ArchiveButton';
import { showFormattedDate } from '../utils';

function NoteItem({ title, body, createdAt, id, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <NoteItemBody title={title} body={body} createdAt={showFormattedDate(createdAt)}></NoteItemBody>
      </div>
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete}></DeleteButton>
        <ArchieveButton id={id} onArchive={onArchive}></ArchieveButton>
      </div>
    </div>
  );
}

export default NoteItem;
