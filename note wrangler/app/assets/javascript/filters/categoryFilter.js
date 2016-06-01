angular.module("NoteWrangler").filter('categoryFilter', function() {
	return function(collection, category) {
		var newCollection = [];

		console.log(category);

		if (category && category.id) {
			for(var i = 0, l = collection.length; i < l; i++) {
				if(collection[i].categoryId === category.id) {
					newCollection.push(collection[i]);
				}
			}
			console.log(newCollection);
			return newCollection;
		}
		else {
			return collection;
		}
		
	}
});