import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        author: this.get('author'),
        post: this.get('post'),
        notes: this.get('notes'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params)
    }
  }
});
