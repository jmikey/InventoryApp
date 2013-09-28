// *** Backbone allows us to seperate MARKUP from DATA keeping it properly  

	// creating a view - FlyItemDetails is a new object
var FlyItemDetails = Backbone.View.extend({
	/* Without templating library
	render: function () {
			// concatinating a string
			// complicated to read so we need a templating library - Handlebars
		var markup_string = '<div>' +
		'<h1>' + this.options.name + '</h1>' +
		'<img src="photos/' + this.options.imagepath + '" class="img-polaroid" />' +
		'<p><span class="label">' + this.options.category + '</span></p>' +
		'<p><span class="label">' + this.options.hooksizes + '</span></p>' +
		'<p><span class="label">' + this.options.imitates + '</span></p>' +
		'</div>';

			//$el is a shortcut to the jQuery object representing the element
		this.$el.html(markup_string);
			// returning the this object allows us to chain calls to the view
		return this; 
	}*/

		// {{}} ensures that all the markup is escaped
		// Hanlebars.complile calls a function that we call in the render function
	template: Handlebars.compile(
		'<div>' +
		'<h1>{{name}}</h1>' +
		'<img src="photos/{{imagepath}}" class="img-polaroid" />' +
		'<p><span class="label">{{category}}</span></p>' +
		'<p><span class="label">{{hooksizes}}</span></p>' +
		'<p><span class="label">{{imitates}}</span></p>' +
		'</div>'
	),



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

