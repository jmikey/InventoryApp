var FlyMenuView = Backbone.View.extend({

	template: Handlebars.compile(
		'<ul>' +
				// specifiing the name of the variable we want to pass into each (items -- which is an array)
				// this works if we're just using a model 
				// here we're cycling over an array in our template
			//OLD --'{{#each items}}<li>{{this}}</li>{{/each}}' +
			
				// This is for cycling over the MODELS inside the COLLECTION
				// outputing attributes.name
			'{{#each models}}<li>{{attributes.name}}</li>{{/each}}' +
		'<ul>'
	),

	/*	this is if we're only doing a MODEL
		we are listening for the "change" event
	initialize: function () {
		this.listenTo(this.model, "change", this.render);
	},
	*/

		//this is if we're using a COLLECTION
		//we are listening for the "reset" event
	initialize: function () {
		this.listenTo(this.collection, "reset", this.render);
		this.listenTo(this.collection, "add", this.render);
		this.listenTo(this.collection, "remove", this.render);
	},
	

	render: function () {
			// we're expecting that this.options will have a property named items
			// and that property will be an array
		//OLD - this.$el.html(this.template(this.options));
			// rendering the model attributes
		//OLD - this.$el.html(this.template(this.model.attributes))
		
			// when the render function is called
			// this.collection will be passed into the template function
		this.$el.html(this.template(this.collection));
		return this;
	}

});