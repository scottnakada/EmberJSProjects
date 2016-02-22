import Ember from 'ember';
import DS from 'ember-data';
import Faker from 'faker';

export default DS.Model.extend({

    email: DS.attr('string'),

    isValidEmail: Ember.computed.match('email', /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),

    isNotValid: Ember.computed.not('isValidEmail'),
	
	randomize() {
    	this.set('email', Faker.internet.email());

    	// If you would like to use in chain.
    	return this;
  	}
});
