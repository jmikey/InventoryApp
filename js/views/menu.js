/* ---- NOT USING (using flymenu instead)
var MenuView = Backbone.View.extend({

	template: Handlebars.compile(
		'<ul>' +
			// specifiing the name of the variable we want to pass into each (items -- which is an array)
		'{{#each items}}<li>{{this}}</li>{{/each}}' +
		'<ul>'
	),

	initialize: function () {
		this.listenTo(this.model, "change", this.render);
	},

	render: function () {
			// we're expecting that this.options will have a property named items
			// and that property will be an array
		//OLD - this.$el.html(this.template(this.options));
			// rendering the model attributes
		this.$el.html(this.template(this.model.attributes))
		return this;
	}

});*/