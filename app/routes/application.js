import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function() {
    return this.get('session').fetch().catch(() => null);
 },

  model() {
     return this.store.findAll('product');
 }
});
