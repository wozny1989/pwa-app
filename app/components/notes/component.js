import Component from '@glimmer/component';
import { action } from '@ember/object';
import { storageFor } from 'ember-local-storage';

export default class NotesIndexComponent extends Component {
  @storageFor('notes') notes;

  @action
  addNote() {
    this.notes.addObject({
      title: 'My title',
      content: 'Content note',
    });
  }

  @action
  removeNote(note) {
    console.log(`removing note: ${note}`);
  }

  @action
  clearAllNotes() {
    this.notes.clear();
  }
}
