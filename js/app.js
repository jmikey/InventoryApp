
	// extend function allows us to create objects that have class-like behavior
	// AppRouter is our object
var AppRouter = Backbone.Router.extend({


	/*====================
	*	
	*	
	*	 Router
	*	
	*	
	======================*/ 
		// routes is an object property
	routes: {
			// these correlate to functions in the browser
		"": "list",
		"fly-items/new" : "itemForm",  
			// : allows us to pass in variables thru the url
		"fly-items/:item"	: "flyitemDetails",
		"categories/:category" : "categoryDetails",

		////////////////// mycustom
		///////"" : "list",
		///////"fly-items/new"		: "itemForm_fly",
		///////"fly-items/:flyitem" 	: "itemDetails_fly",
		//"fly-items/:item" 	: "itemDetails_fly",
		"relatedflycategories/:relatedflies" : "relatedfliesDetails",
		"v_flyorders/:item" : "flyorderItem"
	},


	/*====================
	*	
	*	
	*
	*	 initialize FUNCTION -- and setting the VIEWS and MODELS
	*
	*	
	*	
	======================*/ 
		// only going to be called when the AppRouter object is initialized
	initialize: function () {

		/*====================
		*	COLLECTION 
		======================*/ 
		this.flymenuItems = new FlyMenuItems();		//// Creating Collection object
		this.flymenuItems.fetch();					//// Fetching data from server

		/*====================
		*	 ORDER
		======================*/
		this.flyorderedItems = new FlyMenuItems();	//// Creating new instance of the Collection object
		this.flyordersView = new FlyOrdersView({collection: this.flyorderedItems})

		/*====================
		*	 MENU
		======================*/
		this.flymenuItemModel = new FlyMenuItem();   //// is the MODEL 
		this.flymenuItemView = new FlyMenuItemDetails (		 //// is the VIEW
			{ 
				/*
				category: 'Dry Fly',
				hooksizes: '8,10,12,14,16,18,20,22',
				imitates: 'Gray Drake, Callibaetis, Black Drake, Baetis, Isonychia bicolor, BWO, Hendrickson',
				imagepath: '/flies/adams-dry-fly.jpg'
				*/
				model: this.flymenuItemModel
			}

		);

		/*====================
		*	LIST  -- THis is how you would render a HARD-CODED ARRAY
		======================
		this.flymenuView = new FlyMenuView(
			{
				items: [
					"Garden Salad",
					"Pizza",
					"Cheesecake"
				]
			}
		*/

		/*====================
		*	 COLLECTION
		======================*/
		this.flymenuView = new FlyMenuView({collection: this.flymenuItems});


		/*


		this.flymenuView = new FlyMenuView(
			{
				flyitems: [
					"Dry Flies",
					"Wet Flies",
					"Nymphs",
					"Streamers"
				]
			}
		);*/

		/*====================
		*	categories VIEW
		======================*/ 	
		this.menuCategoryView = new MenuCategoryView (
			{
					// pass in an OBJECT w/ two properties
				category: 'Entreés',
				images:[
					"carrots.jpg",
					"green-beans.jpg",
					"mashed-potatoes.jpg"
				]
			}
		);


		/*====================
		*	related flies VIEW
		======================*/ 	
		this.flyRelatedView = new FlyRelatedView(
			{
					// pass in an OBJECT w/ two properties
				relatedflies: 'Related Flies',
				images:[
					"paraadams.jpg",
					"adamsfemale.jpg",
					"adamsextbody.jpg"
				]
			}

		);


	},

	/*====================
	*	
	*	
	*
	*	 FUNCTIONS  (orig)
	*
	*	
	*	
	======================*/ 
	list: function(){
		//$('#app').html('List Screen');
		$('#fly_inventory').html(this.flymenuView.render().el);
	},

	flyitemDetails: function (item) {

			// *** Save a trip to the server ***
			// instead fetch the model from the COLLECTION
			// then render the data in the view	
				// now calling the GET method on the collection
		this.flymenuItemView.model = this.flymenuItems.get(item);
		$('#app').html(this.flymenuItemView.render().el);
	},

	categoryDetails: function (category) {
		this.menuCategoryView.options.category = category;
		$('#app').html(this.menuCategoryView.render().el);
	},

	itemForm: function() {
		$('#app').html('New item form');
	},

	/*====================
	*	
	*	
	*
	*	 other FUNCTIONS  (FlyFishinc)
	*
	*	
	*	
	======================*/ 

	/*====================
	*	FUNCTION - Fly list ---- DELETE
	====================== 
	flylist: function(){
		//$('#app2').html('Fly List Screen');
		$('#app2').html(this.flymenuView.render().el);
	},*/

	/*====================
	*	FUNCTION - itemDetails_fly ---- DELETE
	======================*----------/ 
	itemDetails_fly: function (flyitem) {
		//$('#app2').html('Fly Item: ' + item); // here we're outputting name of item in the dom

		/* --- here we're declairing a new view everytime MenuItemDetails is called
				wastefull and degrades the app
		var view = new FlyItemDetails (
			{
				name: item,
				category: 'Dry Fly',
				hooksizes: '8,10,12,14,16,18,20,22',
				imitates: 'Gray Drake, Callibaetis, Black Drake, Baetis, Isonychia bicolor, BWO, Hendrickson',
				imagepath: '/flies/adams-dry-fly.jpg'
			}
		);

		$('#app2').html(view.render().el);
		*--------/

			// this way we're reusing the same view but setting the property differently
		//old --- this.flyItemView.options.name = item;
		//this.flymenuItemModel.set('name',flyitem);
		this.flymenuItemModel.set('id', item);
		this.flymenuItemModel.fetch();
		$('#app2').html(this.flyItemView.render().el);		

	},*/

	/*====================
	*	FUNCTION - Related Flies
	======================*/ 
	relatedfliesDetails: function(relatedflies) {
		this.flyRelatedView.options.relatedflies = relatedflies;
		$('#app2_sub').html(this.flyRelatedView.render().el);
	},

	flyorderItem: function (item) {
			//flymenuItem comes back as a model
		var flymenuItem = this.flymenuItems.get(item);
		this.flyorderedItems.add(flymenuItem);
			// render flyorders VIEW
		$('#app').html(this.flyordersView.render().el)
	},

	itemForm_fly: function(){
		$('#app2').html('New Fly Form');
	}



});

//// New Object
var app = new AppRouter();

//// jQuery ready function (make sure dom is loaded)
$(function(){

		// this sends an event to the router and tells it to start
	Backbone.history.start();

});