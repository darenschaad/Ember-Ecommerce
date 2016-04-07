import Ember from 'ember';

export function sort(params/*, hash*/) {
  var comments = params[0];

  return comments.sortBy('date').reverseObjects();

  // return comments.sortBy('rating').reverseObjects();


}


export default Ember.Helper.helper(sort);
