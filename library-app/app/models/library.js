import Ember from 'ember';
import DS from 'ember-data';
import Faker from 'faker';

export default DS.Model.extend({

    name: DS.attr('string'),
    address: DS.attr('string'),
    phone: DS.attr('string'),
	
	books: DS.hasMany('books'),

    isNameLongEnough: Ember.computed.notEmpty('name'),
    isAddressLongEnough: Ember.computed.notEmpty('address'),
    isPhoneValid: Ember.computed.match('phone', /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/),

    isNameAddressValid: Ember.computed.and('isNameLongEnough', 'isAddressLongEnough'),
    isAllValid: Ember.computed.and('isNameAddressValid', 'isPhoneValid'),
    isNotValid: Ember.computed.not('isAllValid'),

	randomize() {
    	this.set('name', Faker.company.companyName() + ' Library');
    	this.set('address', this._fullAddress());
    	this.set('phone', Faker.phone.phoneNumber());

    	// If you would like to use in chain.
    	return this;
  	},

  	_fullAddress() {
    	return `${Faker.address.streetAddress()}, ${Faker.address.city()}`;
  	}
  
});
