import Ember from 'ember';

export default Ember.Route.extend({
	
	 model() {
    return this.store.createRecord('contact');
  },

  actions: {

    saveContact(newContact) {
		console.log("saveContact" + newContact);
      newContact.save().then(() => this.controller.set('responseMessage', true));
    },

    willTransition() {
		
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
	  
	  this.controller.set('responseMessage', false);
	  
    }
  }
	
});
