import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    answerFormShow() {
      this.set('addNewComment', true);
    },
    saveAnswer() {
      var params = {
        author: this.get('author'),
        answer: this.get('answer')
      };
      this.set('addNewComment', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
