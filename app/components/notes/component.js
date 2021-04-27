import Component from '@glimmer/component';
import { action } from '@ember/object';
import { storageFor } from 'ember-local-storage';
import { inject as service } from '@ember/service';

export default class NotesIndexComponent extends Component {
  @storageFor('notes') notes;
  @service store;

  @action
  addNote() {
    this.notes.addObject({
      title: 'Title',
      content: 'Description',
    });
  }

  @action
  removeNote(index) {
    this.notes.removeAt(index, 1);
  }

  @action
  clearAllNotes() {
    this.notes.clear();
  }

  @action
  editValue(index, { target }) {
    const { innerText } = target;
    const { value } = target.attributes.name;

    const updatedNote = this.notes.objectAt(index);
    updatedNote[value] = innerText;
    this.notes.replace(index, 1, [updatedNote]);
  }
}
