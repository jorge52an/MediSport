angular.module( "MediSport" )

.service( "DataBaseCenter", function( $http )
{
    this.server = "http://apimedisport.herokuapp.com";
    //this.server = "http://localhost:8000";

    this.add = function( newCenter )
    {

    };

    this.delete = function( center )
    {

    };

    this.getAll = function()
    {
        return $http.get( this.server + "/centers" );
    };

    this.getNearby = function( latitude, longitude, value )
    {
        return $http.post( this.server + "/centers",
        {
            latitude: latitude,
            longitude: longitude,
            value: value
        } );
    };
} )

.service( "DataBaseUser", function( $rootScope, $http, PopUps )
{
    this.server = "http://apimedisport.herokuapp.com";
    //this.server = "http://localhost:8000";

    this.add = function( newUser )
    {
        return $http.post( this.server + "/newUser", newUser );
    };

    this.delete = function( id )
    {

    };

    this.getAll = function()
    {
    };

    this.get = function( username, password )
    {
        return $http.post( this.server + "/user",
        {
            username: username,
            password: password
        } );
    };
} )

.service( "PopUps", function( $rootScope, $ionicPopup, $state )
{
    this.connectionAlert = function()
    {
        var alertPopup = $ionicPopup.alert
        ( {
            title: "Error de conexión",
            template: "Por favor revisa tu conexión a la red."
        } );

        alertPopup.then( function( response )
        {
            console.log( "connection alert" );
        } );
    };

    this.incorrectPassword = function()
    {
        var alertPopup = $ionicPopup.alert
        ( {
            title: "Contraseña incorrecta",
            template: "Por favor revisa tu contraseña."
        } );

        alertPopup.then( function( response )
        {
            console.log( "incorrect password" );
        } );
    };

    this.incorrectNewPassword = function()
    {
        var alertPopup = $ionicPopup.alert
        ( {
            title: "Contraseñas no coinciden",
            template: "Por favor revisa tu contraseña."
        } );

        alertPopup.then( function( response )
        {
            console.log( "incorrect password" );
        } );
    };

    this.newUser = function()
    {
        var confirmPopup = $ionicPopup.confirm
        ( {
            title: "Usuario no encontrado",
            template: "¿Desea registrarse?"
        } );

        confirmPopup.then( function( response )
        {
            if( response )
                $state.go( "signup" );
        } );
    };

    this.newUserIncorrect = function( message )
    {
        var alertPopup = $ionicPopup.alert
        ( {
            title: "Datos incorrectos",
            template: message
        } );

        alertPopup.then( function( response )
        {
            console.log( "Incorrect dates" );
        } );
    };

    this.entryUser = function()
    {
        var alertPopup = $ionicPopup.alert
        ( {
            title: "Ingrese un usuario",
            template: "El campo usuario se encuentra vacío."
        } );

        alertPopup.then( function( response )
        {
            console.log( "Entry user" );
        } );
    };

    this.userExist = function()
    {
        var alertPopup = $ionicPopup.alert
        ( {
            title: "El usuario ya existe",
            template: "Por favor cambie el usuario."
        } );

        alertPopup.then( function( response )
        {
            console.log( "Exist user" );
        } );
    };

    this.welcome = function( name )
    {
        var alertPopup = $ionicPopup.alert
        ( {
            title: "Bienvenido",
            template: "Bienvenido a MediSport " + String( name ) + "."
        } );

        alertPopup.then( function( response )
        {
            $state.go( "menu.searchGPS" );
        } );
    };

    this.ubicationFailed = function()
    {
        var alertPopup = $ionicPopup.alert
        ( {
            title: "Error de ubicación",
            template: "No es posible obtener su ubicación."
        } );

        alertPopup.then( function( response )
        {
            console.log( "Ubication error" );
        } );
    };
} );
