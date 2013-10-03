var FlyOrdersView = Backbone.View.extend({
	
	template: Handlebars.compile(

		'<h1>Fly Ordered Items</h1>' +
		'{{#each models}}' +
		'<img src="photos/{{attributes.imagepath}}" class="img-polaroid" />' +
		'{{/each}}'

	),

	render: function () {

		this.$el.html(this.template(this.collection));
		return this;

	}

});