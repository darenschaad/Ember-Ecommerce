import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  date: DS.attr(),
  item: DS.belongsTo('item', {async: true}),
});
