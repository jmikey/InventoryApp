var FlyOrdersView = Backbone.View.extend({
	
	template: Handlebars.compile(

		'<h1>Fly Ordered Items</h1>' +
		'{{#each models}}' +
		'<img src="photos/{{attributes.imagepath}}" class="img-polaroid" />' +
		'{{/each}}'

	),

	//*** Don't have to use the initialize: function  (like in flymenuitemdetails.js)
	// because in the flyorderItem function (app.js) the render function is always going to be called

	render: function () {

		this.$el.html(this.template(this.collection));
		return this;

	}

});