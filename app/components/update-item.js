import Ember from 'ember';

export default Ember.Component.extend({
  updateItemForm: false,
  actions: {
    updateItemForm() {
      this.set('updateItemForm', true);
    },
    update(item) {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        image: this.get('image'),
        price: this.get('price'),
      };
      this.set('updateItemForm', false);
      this.sendAction('update', item, params);
    }

  }
});
