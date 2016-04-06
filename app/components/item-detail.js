import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(item) {
      if (confirm("Are you sure you want to delete this item?")) {
        this.sendAction('delete', item)
      }
    }
  }
});
