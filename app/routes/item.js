import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('item', params.item_id);
  },
  actions: {
    delete(item) {
      item.destroyRecord();
      this.transitionTo('store');
    },
    update(item, params) {
      console.log(item);
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          item.set(key,params[key]);
        }
      });
      item.save()
      this.transitionTo('store');
    },

    addComment: function(params) {
      var newComment = this.store.createRecord('comment', params);
      var item = params.item;

      debugger;

      item.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return item.save();
      });
      this.transitionTo('item', params.item);
    }
  }
});
