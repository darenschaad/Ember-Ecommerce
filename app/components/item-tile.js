import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service(),

  actions: {
    addToCart(item) {
      this.get('cart').add(item);
      console.log("CART:", this.get('cart.items'));
      this.sendAction('refresh');
    },

  }
});
