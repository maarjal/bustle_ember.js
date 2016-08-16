import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        body: this.get('body') ? this.get('body') : "",
        image: this.get('image') ? this.get('image') : "",
        date: this.get('date') ? this.get('date') : "",
      };
      this.sendAction('save', params);
    }
  }
});
