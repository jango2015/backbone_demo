require([
	'router',
	'backbone',
	'underscore',
	'views/app-view',
],
function(Router, Backbone, _, AppView) {

	var r = new Router(),
		appView = new AppView();

	Backbone.history.start({});

});

