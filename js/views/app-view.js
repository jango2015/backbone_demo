define([
	'backbone',

	'views/home-view',
	'views/marker-list-view',
	'views/marker-view',
],
function(
	Backbone,

	homeView,
	markerListView,
	markersView
) {
	
	return Backbone.View.extend({

		initialize : function() {
			
			this.initRouterEvents();
		},
				
		initRouterEvents: function() {
			Backbone.on('route:Home', this.displayHome, this);
			Backbone.on('route:MarkersList', this.displayMarkersList, this);
			Backbone.on('route:Marker', this.displayMarker, this);
		},

        currentView: null,
        
        setViewWithCleanup: function(view) {
        	if (this.currentView) this.currentView.cleanup();
        	this.currentView = view;
        	
        	return view;	
		},

        displayHome: function() {
        	this.setViewWithCleanup(new homeView({}));
        },

        displayMarkersList: function() {
        	this.setViewWithCleanup(new markerListView());
        },

        displayMarker: function(marker_id, optional_argument) {
        	this.setViewWithCleanup(new markersView({ marker_id: marker_id, optional_argument: optional_argument }));
        },

	});


});