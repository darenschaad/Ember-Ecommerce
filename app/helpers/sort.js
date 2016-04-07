import Ember from 'ember';

export function sort(params/*, hash*/) {
  var comments = params[0];

  return comments.reverseObjects();
}

export default Ember.Helper.helper(sort);
