import Model, { attr } from '@ember-data/model';

export default class NotesModel extends Model {
  @attr('string') title;
  @attr('string') content;
}
