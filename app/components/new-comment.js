import Ember from 'ember';

export default Ember.Component.extend({
  ratingForm: false,
  actions: {
    rateItemForm() {
      this.set('ratingForm', true);
    },
    addComment: function() {
      var date = new Date()
      var params = {
        content: this.get('comment'),
        date: date.getTime(),
        item: this.get('item'),
        rating: parseInt(this.get('rating')),
      };
      this.sendAction('addComment', params);
      this.set('ratingForm', false);
      this.set('comment', '');
    }
  }
});
