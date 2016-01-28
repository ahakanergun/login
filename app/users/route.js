import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      name: "Ali Veli",
      age: "24"
    }, {
      name: "Ahmet Mehmet",
      age: "41"
    }, {
      name: "Hasan Hüseyin",
      age: "18"
    }];
  },
  actions: {
    addUser() {
      alert(this.get('firstName'));
    }
  }
});
