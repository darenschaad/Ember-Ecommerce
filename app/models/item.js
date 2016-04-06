import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  price:  DS.attr(),
  image:  DS.attr(),
  comments: DS.hasMany('comment', {async: true}),
});
