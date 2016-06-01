angular.module('NoteWrangler').controller('NotesCreateController', function($scope, Note, Category, $location){
	$scope.note = new Note();
	$scope.isSubmitting = false;
	$scope.categories = Category.query();

	$scope.saveNote = function(note) {
		$scope.isSubmitting = true;
		note.$save().then(function(){
			$location.path("/notes");
		}).finally(function(){
			isSubmitting = false;
			
		});
	}
});