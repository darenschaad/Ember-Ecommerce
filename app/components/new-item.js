import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params {
        name: this.get('name'),
        description: this.get('description'),
        price: this.get('price'),
        image: this.get('image'),
      };
      this.sendAction('save', params);
    }
  }
});
