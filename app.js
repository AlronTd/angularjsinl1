var app = angular.module("fdgApp", ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "views/home.html",
        controller: "homeController" 
    })
})

class event{
    constructor(name, location, time, date, url, image){
        this.name = name
        this.location = location
        this.time = time
        this.date = date
        this.url = url
        this.image = image
        
        this.getTableData = () => [this.name, this.location, this.time, this.date]
    }
}


app.controller("homeController", function($scope) {
    $scope.featuredevents = [
        new event('Event 1', 'Venue 1, City 1, Province 1', 'xx:xx', '20xx/xx/xx', '', 'tuce-wXTPJvONpII-unsplash cropped 2.png')
    ]
})


// directives
app.directive("fdgnavbar", function() {
    return {
        template: '<header><nav class="navbar navbar-expand-lg navbar-dark bg-dark"><div class="container"><a class="navbar-brand" href="#/!"><img src="assets/Group 77.svg" alt=""></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span> </button><ul class="navbar-nav collapse navbar-collapse space-between"><li class="nav-item"><a class="nav-link" href="#!events">EVENTS</a></li><li class="nav-item space-between relative"><form class="nav-item space-between relative" id="search-events"><input type="text" placeholder="Search events" class="form-control" id="search-events-input"><img src="assets/Path208.svg" alt="" id="search-icon"><button id="search-events-btn" class="btn nav-link" type="submit">SEARCH</button><form/></li><li class="nav-item"><ul class="navbar-nav collapse navbar-collapse"><li class="nav-item"><a class="nav-link notificationsbtn" href=""><img src="assets/Notifications.svg" alt=""></a></li><li class="nav-item"><a class="nav-link" href="#!profile"><img src="assets/Symbol 9 – 2.svg" alt=""></a> </li></ul></li></ul></div></nav></header>'
    }
})