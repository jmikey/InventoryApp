var FlyMenuItemDetails = Backbone.View.extend({
	/* Without templating library ---
	render: function () {
		var markup = '<div>' +
		'<h1>' + this.options.name + '</h1>' +
		'<p><span class="label">' + this.options.category + '</span></p>' +
		'<img src="photos/' + this.options.imagepath + '" class="img-polaroid" />' +
		'</div>';

		this.$el.html(markup);
		return this;
	}*/

	template: Handlebars.compile(
		'<div>' +
		'<h1>{{name}}</h1>' +
		'<p><span class="label">{{category}}</span></p>' +
		'<img src="photos/{{imagepath}}" class="img-polaroid" />' +
		'</div>'
	),


		// this is listening for whenever the MODEL emits a CHANGE event
		// then call the render function
	initialize: function () {
			// this is a function that we're going to add to our view
			// we pass in a:
				// 1) model
				// 2) event to listen to "change"
				// 3) call the render function (below) when this event occurs
		this.listenTo(this.model,"change", this.render)
	},
	

	render: function(){
			// here we're passing this.options into the template
		//orig--- this.$el.html(this.template(this.options));
			// we now want to pass in the MODEL attributes in
		this.$el.html(this.template(this.model.attributes));
		return this;
	}

});