define([
	'backbone',
	'models/marker-model',
],
function(Backbone, MarkerModel) {
	
	return Backbone.Collection.extend({

		url: 'api/markers',
		model: MarkerModel,

		defaults: {
			x: 0,
			y: 0,
			name: '',
			
		},
		
	});

});