import Ember from 'ember';

export default Ember.Component.extend({
  isActive: false,
  actions: {
    toggleDisplay() {
      this.toggleProperty('isActive')
    }
  }
});
