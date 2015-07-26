// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var bookPos = 0;
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('BookCtrl', function(){
  var request = new XMLHttpRequest();
  request.open("GET", "assets/book.json", false);
  request.send(null);
  JSON.parse(request.responseText);

  this.title = JSON.parse(request.responseText).title;
  this.icon = JSON.parse(request.responseText).icon;
  this.toc = JSON.parse(request.responseText).toc;
})
.controller('Chapter1Ctrl', function($scope) {
    //Code used in order to append "/assets" to the image urls
    //var newLink = "assets/"+document.getElementsByTagName("img")[0].getAttribute("src");
    //document.getElementsByTagName("body")[0].setAttribute("class", "padding");
    bookPos = 1;
})
.controller('Chapter2Ctrl', function($scope) {
    //Code used in order to append "/assets" to the image urls
    //var newLink = "assets/"+document.getElementsByTagName("img")[0].getAttribute("src");
    //document.getElementsByTagName("body")[0].setAttribute("class", "padding");
    bookPos = 2;
})
.controller('Chapter3Ctrl', function($scope) {
    //Code used in order to append "/assets" to the image urls
    //var newLink = "assets/"+document.getElementsByTagName("img")[0].getAttribute("src");
    //document.getElementsByTagName("body")[0].setAttribute("class", "padding");
    bookPos = 3;
})

.controller('DefaultCtrl', function($scope) {
    $scope.message = 'This is The Table of Contents';
})

// Browse Function to be implemented
.controller('BrowseCtrl', function($scope) {
    this.url = "";
    this.forwardUrl = "";
    this.backUrl = "";
    switch(bookPos) {
      case 1:
        forwardUrl="#/Chapter2";
        url="#/Chapter1";
        backUrl="#/Chapter3";
        alert(bookPos);
      break;
      case 2:
        forwardUrl="#/Chapter3";
        url="#/Chapter2";
        backUrl="#/Chapter1";
        alert(bookPos);
      break;
      case 3:
        forwardUrl="#/Chapter1";
        url="#/Chapter3";
        backUrl="#/Chapter2";
        alert(bookPos);
      break;
    }
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('chapter1', {
    url: '/chapter1',
    //controller: 'Chapter1Ctrl',
    templateUrl: 'assets/chapter1.html',
  })

  .state('chapter2', {
    url: '/chapter2',
    //controller: 'Chapter2Ctrl',
    templateUrl: 'assets/chapter2.html',
  })
  .state('chapter3', {
    url: '/chapter3',
    //controller: 'Chapter3Ctrl',
    templateUrl: 'assets/chapter3.html',
  })
  .state('default', {
    url: '/default',
    //controller: 'DefaultCtrl',
    templateUrl: 'templates/default.html',
  });
  $urlRouterProvider.otherwise('/default');
})

;
