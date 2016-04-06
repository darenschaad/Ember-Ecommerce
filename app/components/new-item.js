import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        price: this.get('price'),
        image: this.get('image'),
      };
      this.sendAction('save', params);
      this.set('name', '');
      this.set('description', '');
      this.set('price', '');
      this.set('image', '');
    }
  }
});
