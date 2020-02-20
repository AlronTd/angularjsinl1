var app = angular.module("fdgApp", ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "views/home",
        controller: "homeController" 
    })
})




app.controller("homeController", function($scope) {
    
})


// directives
/* app.directive("fdgnavbar", function() {
    return {
        template: '<header><nav class="navbar navbar-expand-lg navbar-light bg-light"><div class="container"><a class="navbar-brand" href="#">Navbar</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span> </button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item active"><a class="nav-link" href="#/!">Overview <span class="sr-only">(current)</span></a></li> <li class="nav-item"><a class="nav-link" href="#!products">Products</a></li><li class="nav-item"><a class="nav-link" href="#!contact">Contact</a> </li> </ul></div></div></nav></header>'
    }
}) */