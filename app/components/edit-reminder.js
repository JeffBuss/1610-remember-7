import Ember from 'ember';

export default Ember.Component.extend({
  actions:  {
    editReminder() {
      console.log("Button does thing!");
    },
    saveReminder() {
      console.log("You saved a thing!");
    }
  }
});
