angular.module('quoteBook').controller('mainCtrl', function($scope, dataService){
  $scope.test = 'testing';

  $scope.quotes = dataService.getQuotes();

  $scope.deleteMe = function(textToDelete){
    dataService.removeData(textToDelete);
  }

  $scope.addQuote = function(){
    var newQuote = {
      text: $scope.newQuoteText,
      author: $scope.newAuthorText
    }
    if(dataService.addData(newQuote))
    {
        $scope.newQuoteText = '';
        $scope.newAuthorText = '';
    }
  }

});
