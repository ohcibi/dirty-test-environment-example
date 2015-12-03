import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    changeFoo() {
      this.set("foo.bar", Math.random());
    }
  },

  foo: {}
});
