var FlyMenuItems = Backbone.Collection.extend({

		// COMPARATOR - allows you to arrange your MODELS
			// when the collection is loaded it will check the 
			// 'name' property of each model and seperate alphabetically
		
		// ASSENDING order  
	comparator: 'name',

			// DECENDING order -- need a function
			// standard JS sort function
				// more at Mozilla Developer Network
		/*
		comparator: function (a, b) { 			//// manually comparing the model properties 
			if(a.get('name') < b.get('name')) {
				return 1;
			} else if (b.get('name') > a.get('name')) {
				return -1;
			}
		},
		*/


		// you must have a MODEL to define a COLLECTION
		// every item in the COLLECTION will be filtered through the FlyMenuItem MODEL
	model: FlyMenuItem,
		// this is the URL where the data can be found
	url: '/items'

});