var FlyMenuView = Backbone.View.extend({

	template: Handlebars.compile(
		'<ul>' +
			'{{#each models}}<li><a href="#/flyorders/{{attributes.id}}">{{attributes.name}}</a></li>{{/each}}' +
		'<ul>'
	),

		//this is if we're using a COLLECTION
		//we are listening for the "reset" event
	initialize: function () {
		this.listenTo(this.collection, "reset", this.render);
		this.listenTo(this.collection, "add", this.render);
		this.listenTo(this.collection, "remove", this.render);
	},
	

	render: function () {

			// when the render function is called
			// this.collection will be passed into the template function
		this.$el.html(this.template(this.collection));
		return this;
	}

});