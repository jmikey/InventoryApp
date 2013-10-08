var FlyMenuItems = Backbone.Collection.extend({
		// ASSENDING order  
	comparator: 'name',
	model: FlyMenuItem,
	url: '/items'
});
