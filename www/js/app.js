angular.module( "MediSport", ["ionic"] )

.run( function( $ionicPlatform )
{
    $ionicPlatform.ready( function()
    {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if( window.cordova && window.cordova.plugins.Keyboard )
        {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar( true );
            cordova.plugins.Keyboard.disableScroll( true );
        }
        if( window.StatusBar )
        {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    } );
} )

.config( function( $stateProvider, $urlRouterProvider )
{
    $stateProvider

    .state( "login",
    {
        url: "/login",
        templateUrl: "templates/login.html",
        controller: "LogIn"
    } )

    .state( "signup",
    {
        url: "/signup",
        templateUrl: "templates/signup.html",
        controller: "SignUp"
    } )

    .state( "menu",
    {
        url: "/menu",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: "Menu"
    } )

    .state( "menu.searchGPS",
    {
        url: "/searchGPS",
        views:
        {
            "menuContent":
            {
                templateUrl: "templates/searchGPS.html",
                controller: "Map"
            }
        }
    } )

    .state( "menu.account",
    {
        url: "/account",
        views:
        {
            "menuContent":
            {
                templateUrl: "templates/account.html",
                controller: "Account"
            }
        }
    } );
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise( "/login" );
} );
