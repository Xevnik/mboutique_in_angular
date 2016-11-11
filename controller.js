/**
 * Created by kevin on 11/10/16.
 */
var app = angular.module('mboutiqueApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'home.html',
            controller: 'mainController'
        })
        .when('/ourMacarons',{
            templateUrl: 'our_macarons.html',
            controller: 'ourMacaronsController as omc'
        })
        .when('/giftParties',{
            templateUrl: 'gifts_parties.html',
            controller: 'giftPartiesController as gpc'
        })
        .when('/contactUs',{
            templateUrl: 'contact.html',
            controller: 'contactUsController as cuc'
        })
        .otherwise({
            redirectTo:'/'
        });
});
app.controller('mainController',function(){
    this.nav = [
        {
            title: 'Home',
            pageLoc: '#/'
        },
        {
            title: 'Our Macarons',
            pageLoc: '#ourMacarons'
        },
        {
            title: 'Gift & Parties',
            pageLoc: '#giftParties'
        },
        {
            title: 'Contact Us',
            pageLoc: '#contactUs'
        }];
    this.welcomeImg = 'assets/images/welcome-image.png';
})
    .controller('ourMacaronsController', function(){
        this.welcomeImg = 'assets/images/our-macarons-image.png';
    })
    .controller('giftPartiesController', function(){
        this.welcomeImg = 'assets/images/gifts-parties-image.png';
    })
    .controller('contactUsController', function(){
        this.welcomeImg = 'assets/images/contact-image.png';
    });