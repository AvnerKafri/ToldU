// Ionic Starter App
/// <reference path="../typings/tsd.d.ts" />
angular.module('toldu.services', []);
angular.module('toldu.controllers', ['toldu.services']);
//angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','toldu.controllers','toldu.services'])
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'toldu.controllers'])
    .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            // var w=<Window>window
            //window.StatusBar.styleDefault();
            window.StatusBar.styleDefault();
        }
    });
})
    .config(function ($stateProvider, $urlRouterProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })
        .state('tab.channels', {
        url: '/channels',
        views: {
            'tab-dash': {
                templateUrl: 'templates/tab-Channels.html',
                controller: 'ChannelsCtrl as channelsCtrl'
            }
        }
    })
        .state('tab.channel-detail', {
        url: '/channels/:channelId',
        views: {
            'tab-chats': {
                templateUrl: 'templates/channel-detail.html',
                //controller: 'ChatDetailCtrl'
                controller: 'ChannelDetailCtrl'
            }
        }
    })
        .state('tab.chats', {
        url: '/chats',
        views: {
            'tab-chats': {
                templateUrl: 'templates/tab-chats.html',
                controller: 'ChatsCtrl'
            }
        }
    })
        .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
            'tab-chats': {
                templateUrl: 'templates/chat-detail.html',
                controller: 'ChatDetailCtrl'
            }
        }
    })
        .state('tab.account', {
        url: '/account',
        views: {
            'tab-account': {
                templateUrl: 'templates/tab-account.html',
                controller: 'AccountCtrl as accountCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/channels');
});
