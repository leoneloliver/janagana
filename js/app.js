// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.activity', {
        url: '/activity',
        views: {
            'menuContent': {
                templateUrl: 'templates/activity.html',
                controller: 'ActivityCtrl'
            },
            'fabContent': {
                template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }
            }
        }
    })

    .state('app.friends', {
        url: '/friends',
        views: {
            'menuContent': {
                templateUrl: 'templates/friends.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-friends" class="button button-fab button-fab-button-left expanded button-energized-900 spin"><i class="icon ion-chatbubbles"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-friends').classList.toggle('on');
                //     }, 900);
                // }
            }
        }
    })

    .state('app.gallery', {
        url: '/gallery',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                controller: 'GalleryCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-gallery" class="button button-fab button-fab-top-right expanded button-energized-900 drop"><i class="icon ion-heart"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-gallery').classList.toggle('on');
                //     }, 600);
                // }
            }
        }
    })

    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

    .state('app.createaccount', {
        url: '/createaccount',
        views: {
            'menuContent': {
                templateUrl: 'templates/createaccount.html',
                controller: 'ProfileCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

    .state('app.profiledetails', {
        url: '/profiledetails',
        views: {
            'menuContent': {
                templateUrl: 'templates/profiledetails.html',
                controller: 'ProfileCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

    .state('app.favourite', {
        url: '/favourite',
        views: {
            'menuContent': {
                templateUrl: 'templates/favourite.html',
                controller: 'FavouriteCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

    .state('app.videolist', {
        url: '/videolist',
        views: {
            'menuContent': {
                templateUrl: 'templates/videolist.html',
                controller: 'VideolistCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

    .state('app.album2', {
        url: '/album2',
        views: {
            'menuContent': {
                templateUrl: 'templates/album2.html',
                controller: 'Album2Ctrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })


    

    .state('app.sounds', {
        url: '/sounds',
        views: {
            'menuContent': {
                templateUrl: 'templates/sounds.html',
                controller: 'SoundsCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })


    .state('app.soundalbum2', {
        url: '/soundalbum2',
        views: {
            'menuContent': {
                templateUrl: 'templates/soundalbum2.html',
                controller: 'SoundsCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })


    .state('app.soundpause', {
        url: '/soundpause',
        views: {
            'menuContent': {
                templateUrl: 'templates/soundpause.html',
                controller: 'SoundsCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

    .state('app.soundpause2', {
        url: '/soundpause2',
        views: {
            'menuContent': {
                templateUrl: 'templates/soundpause2.html',
                controller: 'SoundsCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

    .state('app.sound2', {
        url: '/sound2',
        views: {
            'menuContent': {
                templateUrl: 'templates/sound2.html',
                controller: 'SoundsCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

    .state('app.sound3', {
        url: '/sound3',
        views: {
            'menuContent': {
                templateUrl: 'templates/sound3.html',
                controller: 'SoundsCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

    .state('app.sound2album2', {
        url: '/sound2album2',
        views: {
            'menuContent': {
                templateUrl: 'templates/sound2album2.html',
                controller: 'SoundsCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

    .state('app.sound3album2', {
        url: '/sound3album2',
        views: {
            'menuContent': {
                templateUrl: 'templates/sound3album2.html',
                controller: 'SoundsCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

    .state('app.playlist', {
        url: '/playlist',
        views: {
            'menuContent': {
                templateUrl: 'templates/playlist.html',
                controller: 'SoundsCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

    .state('app.video', {
        url: '/video',
        views: {
            'menuContent': {
                templateUrl: 'templates/video.html',
                controller: 'VideoCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })


    .state('app.artists', {
        url: '/artists',
        views: {
            'menuContent': {
                templateUrl: 'templates/artists.html',
                controller: 'ArtistsCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

    .state('app.artists2', {
        url: '/artists2',
        views: {
            'menuContent': {
                templateUrl: 'templates/artists2.html',
                controller: 'ArtistsCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

    .state('app.events', {
        url: '/events',
        views: {
            'menuContent': {
                templateUrl: 'templates/events.html',
                controller: 'EventsCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

    .state('app.eventdetail', {
        url: '/eventdetail',
        views: {
            'menuContent': {
                templateUrl: 'templates/eventdetail.html',
                controller: 'EventdetailCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

    .state('app.classdetail', {
        url: '/classdetail',
        views: {
            'menuContent': {
                templateUrl: 'templates/classdetail.html',
                controller: 'ClassdetailCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

    .state('app.classlist', {
        url: '/classlist',
        views: {
            'menuContent': {
                templateUrl: 'templates/classlist.html',
                controller: 'ClasslistCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })


    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
