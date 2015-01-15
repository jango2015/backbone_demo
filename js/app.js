requirejs.config({

	deps: ['main'],

	paths: {
		'jquery'      : 'vendor/jquery',
		'tpls'       : 'tpls',
		'collections' : 'collections',
		'views'       : 'views',
		'backbone'    : 'vendor/backbone',
		'text'        : 'vendor/amd-text',
		'underscore'  : 'vendor/underscore',
	},

	shim: {

		'backbone' : {
			deps : ['underscore', 'jquery'],
			exports : 'Backbone'
		}

	}
});                  
