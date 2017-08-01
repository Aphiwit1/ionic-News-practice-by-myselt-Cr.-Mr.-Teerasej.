app.controller('MasterController', ['$scope','$state','NewsService', function($scope,$state,NewsService){
	$scope.news = [
   {title:'A' , imgUrl:'' , createdDate:new Date() , content:'blah blah blah'},
   {title:'B' , imgUrl:'' , createdDate:new Date() , content:'blah blah blah'},
   {title:'C' , imgUrl:'' , createdDate:new Date() , content:'blah blah blah'},
	];
	$scope.showDetail = function(newsItem){
		NewsService.selectedNews = newsItem;
       $state.go('detail');
	}
}])