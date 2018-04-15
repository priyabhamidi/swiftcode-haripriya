var app = angular.module('chatApp', ['ngMaterial']);

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('purple')
        .accentPalette('blue');
});

app.controller('chatController', function ($scope) {
    $scope.messages = [
        {
            'sender': 'USER',
            'text': 'Hello'
	},
        {
            'sender': 'BOT',
            'text': 'hey..!!'
	},
        {
            'sender': 'USER',
            'text': 'how r u'
	},
        {
            'sender': 'BOT',
            'text': 'fine'
	}
	];
});