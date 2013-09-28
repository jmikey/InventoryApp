var FlyRelatedView = Backbone.View.extend({
	template: Handlebars.compile(
		'<h1>{{relatedflies}}</h1>' +
		'<ul>{{#each images}}' +
		'<li><img src="photos/flies/{{this}}" class="img-polaroid" height="auto" width="100%" /></li>' +
		'{{/each}}</ul>'
	),

	render: function () {
		this.$el.html(this.template(this.options));
		return this;
	}

});