define([
	'backbone',

	'text!tpls/home-tpl.html'
],
function(
	Backbone,

	HomeTpl
) {
	
	return Backbone.View.extend({

		events: {
			'click a.click-me': 'onClick',
		},

		initialize: function() {
			this.template = _.template(HomeTpl);
			this.$wrapper = $('#container');
			this.$wrapper.html(this.$el);
			
			this.render();
		},
		
		render: function() {      
			this.$el.html(this.template({
				name: 'Vitaliy',
			}));
		},
				
		onClick: function(event) {
			event.preventDefault();
			alert('views/home-view.js #34');
		},

	});


});