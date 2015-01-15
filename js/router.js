define([
	'backbone',
],  function(Backbone) {

	var Router = Backbone.Router.extend({
		routes : {
			'': 'Home',
			'markers': 'MarkersList',
			'markers/:marker_id/(:optional_argument)': 'Marker',

			'*actions': 'defaultRoute'
		},

		defaultRoute : function() {
			alert('Not implemented yet');
		},

        Home: function() {
            Backbone.trigger('route:Home');
        },

        MarkersList: function() {
            Backbone.trigger('route:MarkersList');
        },

        Marker: function(marker_id, optional_argument) {
            Backbone.trigger('route:Marker', marker_id, optional_argument);
        },

	});

	return Router;

});