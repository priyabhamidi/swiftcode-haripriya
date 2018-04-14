var app = angular.module('chatApp', ['ngMaterial']);

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