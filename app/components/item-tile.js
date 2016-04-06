import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service(),

  actions: {
    addToCart(item) {
      this.get('cart').add(item);
    },
  }
});
