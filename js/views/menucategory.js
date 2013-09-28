var MenuCategoryView = Backbone.View.extend({
	template: Handlebars.compile(
		'<h1>{{category}}</h1>' +
		'{{#each images}}' +
		'<img src="photos/{{this}}" class="img-polaroid" />' +
		'{{/each}}'
	),

	render: function () {
		this.$el.html(this.template(this.options));
		return this;
	}

});