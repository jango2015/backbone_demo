define([
	'backbone',
	'underscore',
], function(Backbone) {

	var model = Backbone.Model.extend({
		
		url: 'api/markers',

		defaults: {
			x: 0,
			y: 0,
			name: '',
    	},

	});
	
	return model;

});