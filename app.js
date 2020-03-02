const app = angular.module("fdgApp", ["ngRoute"])

/*const activesearches = []

function searchEvents(){
    let currentsearchterm = $('#search-events-input').val()
    if (currentsearchterm) {
        activesearches.push(currentsearchterm)
        $location.url('/events')
    }
}*/

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/home.html",
            controller: "globalController"
        }).when("/events", {
            templateUrl: "views/eventsearch.html",
            controller: "globalController"
        })
})

class event {
    constructor(name, location, time, date, url, image) {
        this.name = name
        this.location = location
        this.time = time
        this.date = date
        this.url = url
        this.image = image

        this.getTableData = () => [this.name, this.location, this.time, this.date]
    }
}

class socialMediaLink {
    constructor(image, url) {
        this.image = image
        this.url = url
    }
}


app.controller("globalController", function ($scope) {

    $scope.account = null


    $scope.allEvents = [
        new event('Event 1', 'Venue 1, City 1, Province 1', 'xx:xx', '20xx/xx/xx', '', 'tuce-wXTPJvONpII-unsplash cropped 2.png'),
        new event('Event 2', 'Venue 1, City 1, Province 1', 'xx:xx', '20xx/xx/xx', '', 'tuce-wXTPJvONpII-unsplash cropped 2.png'),
        new event('Event 3', 'Venue 1, City 1, Province 1', 'xx:xx', '20xx/xx/xx', '', 'tuce-wXTPJvONpII-unsplash cropped 2.png'),
    ]
    $scope.featuredevents = [
        $scope.allEvents[0],
        $scope.allEvents[1],
        $scope.allEvents[2],
    ]
    $scope.cancelledEvents = [$scope.allEvents[2]]

    $scope.getSignupStatus = (event) => {
        if ($scope.cancelledEvents.includes(event)) {
            return 'CANCELLED'
        }
        else if ($scope.account && $scope.account.registeredEvents.includes(event)) {
            return 'SIGNED UP'
        } else {
            return 'SIGN UP'
        }
    }


    $scope.socialmedialinks = [
        new socialMediaLink('Path 2.svg', ''),
        new socialMediaLink('Path 3.svg', ''),
        new socialMediaLink('Path 1.svg', ''),
    ]
    
    $scope.homecards = [
        {header: 'What we do:', 
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad neque ratione voluptatem praesentium, placeat, reprehenderit quod amet assumenda consectetur omnis nihil repellat tempora cumque minima perspiciatis et impedit vero expedita, aliquam distinctio at illo! Cum harum, nisi veniam explicabo animi sed voluptatibus ad totam dignissimos est ullam! Voluptate unde minus blanditiis! Et, unde?'},
        {header: 'Our events', 
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorem temporibus dolores esse quae doloremque atque et magnam earum asperiores, mollitia dignissimos deserunt laudantium hic fuga commodi reprehenderit debitis dolore.'},
        {header: 'Tournaments', 
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad neque ratione voluptatem praesentium, placeat, reprehenderit quod amet assumenda consectetur omnis nihil repellat tempora cumque minima perspiciatis et impedit vero expedita, aliquam distinctio at illo!'},
        {header: 'Casual gatherings', 
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad neque ratione voluptatem praesentium, placeat, reprehenderit quod amet assumenda consectetur omnis nihil repellat tempora cumque minima perspiciatis et impedit vero expedita, aliquam distinctio at illo!'}
    ]
})


// directives
app.directive("fdgnavbar", function () {
    return {
        template: '<header><nav class="navbar navbar-expand-lg navbar-dark bg-dark"><div class="container"><a class="navbar-brand" href="#/!"><img src="assets/Group 77.svg" alt=""></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span> </button><ul class="navbar-nav collapse navbar-collapse space-between"><li class="nav-item"><a class="nav-link" href="#!events">EVENTS</a></li><li class="nav-item space-between relative"><div class="nav-item space-between relative" id="search-events"><input type="text" placeholder="Search events" class="form-control" id="search-events-input"><img src="assets/Path208.svg" alt="" id="search-icon"><button id="search-events-btn" class="btn nav-link" type="button">SEARCH</button><div/></li><li class="nav-item"><ul class="navbar-nav collapse navbar-collapse"><li class="nav-item"><a class="nav-link notificationsbtn" href=""><img src="assets/Notifications.svg" alt=""></a></li><li class="nav-item"><a class="nav-link" href="#!profile"><img src="assets/Symbol 9 – 2.svg" alt=""></a> </li></ul></li></ul></div></nav></header>'
    }
})
app.directive("fdgeventtable", function () {
    return {
        template: '<div class="event-table"><h1 class="table-header parent space-around"><div class="table-header name">NAME</div><div class="table-header location">LOCATION</div><div class="table-header table-time-section">TIME</div></h1><div class="table-row space-between" ng-repeat="event in allEvents"><div class="table-value name">{{ event.name }}</div><div class="table-value location"><span class="divider"></span>{{ event.location }}</div><div class="table-value table-time-section space-between"><div class="table-value time"><span class="divider"></span>{{ event.time }}</div><div class="table-value date">{{ event.date }}</div><a href=""><button class="btn">{{ $parent.getSignupStatus(event) }}</button></a></div></div></div>'
    }
})
app.directive("fdgfeaturedcarousel", function () {
    return {
        template: '<div id="event-carousel" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li ng-class="{active:!$index}" ng-repeat="event in featuredevents" data-target="#event-carousel"data-slide-to="{{ $index }}"><div></div></li></ol><div class="carousel-inner"><div ng-repeat="event in featuredevents" ng-class="{active:!$index}" class="carousel-item relative"><div class="carousel-overlay"><h2>{{ event.name }}</h2><p>{{ event.date }}<p><p>{{ event.location.slice(event.location.indexOf(", ") + 2, event.location.lastIndexOf(", ")) }}</p></div><img src="assets/{{ event.image }}" alt="{{ event.name }} {{ event.date }} {{ event.location }}"></div></div></div>'
    }
})