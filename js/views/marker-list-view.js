define([
	'backbone',

	'collections/marker-collection',
	'text!tpls/markers-list-tpl.html'
],
function(
	Backbone,

	MarkerCollection,
	MarkerListTpl
) {
	
	return Backbone.View.extend({

		events: {
		},

		initialize : function() {
			this.template = _.template(MarkerListTpl);
			
			this.$wrapper = $('#container');
			this.$wrapper.html(this.$el);
			
			this.collection = new MarkerCollection();
			this.collection.fetch().then(this.render.bind(this));
			console.log(this.collection);
		},
		
		render: function() {
			this.$el.html(this.template({
				collection: this.collection,
			}));
		},
				
	});


});