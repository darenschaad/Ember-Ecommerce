import Ember from 'ember';

export function cartTotal(params/*, hash*/) {

  var cartItems = params[0];

  var total = 0;

  for (var i = 0; i < cartItems.get('length'); i++) {
    var itemPrice = cartItems.objectAt(i).get('price');
    total += itemPrice
  }

  return "$" + total;
}

export default Ember.Helper.helper(cartTotal);
