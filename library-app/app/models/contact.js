import Ember from 'ember';
import DS from 'ember-data';
import Faker from 'faker';

export default DS.Model.extend({

	email: DS.attr('string'),
  	message: DS.attr('string'),

    isValidEmail: Ember.computed.match('email', /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
    isMessageEnoughLong: Ember.computed.gte('message.length', 5),

    isValid: Ember.computed.and('isValidEmail', 'isMessageEnoughLong'),
    isNotValid: Ember.computed.not('isValid'),
	
	randomize() {
    	this.set('email', Faker.internet.email());
    	this.set('message', Faker.lorem.sentence());

    	// If you would like to use in chain.
    	return this;
  	},

});
