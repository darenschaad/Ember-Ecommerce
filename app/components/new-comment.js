import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addComment: function() {
      var params = {
        content: this.get('comment'),
        date: Firebase.ServerValue.TIMESTAMP,
        item: this.get('item'),
      };
      this.sendAction('addComment', params);
    }
  }
});
