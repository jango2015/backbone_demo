define([
	'backbone',
    'models/marker-model',
],
function(
	Backbone,
	
	MarkerModel

) {
	
	return Backbone.View.extend({

		events: {
		},

		initialize : function(options) {
			this.marker_id = options.marker_id;
			this.optional_argument = options.optional_argument || null;
			
			this.marker = new MarkerModel({ id: this.marker_id });
			this.marker.fetch();
		},
		
		render: function() {
			
		},
				
	});


});