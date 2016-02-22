import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return this.store.createRecord('invitation');
    },

    actions: {

        saveInvitation(newInvitation) {
            console.log("saveInvitation");
            newInvitation.save().then(() => {
                this.controller.set('responseMessage',
                    `Thank you!
					We saved your email address: ${this.controller.get('model.email')}
					with the following id: ${this.controller.get('model.id')}`
                );
                this.controller.set('model.email', '');
            });
        },

        willTransition() {
            // rollbackAttributes() removes the record from the store
            // if the model 'isNew'
            this.controller.get('model').rollbackAttributes();
        }
    }
});
