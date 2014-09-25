angular.module('app')
    .controller('main', [
        '$scope',
        function ($scope) {
            $scope.oi = 'Oi!';
            $scope.lista = [
                {texto: 'Primeiro'},
                {texto: 'Segundo'},
                {texto: 'Terceiro'},
                {texto: 'Quarto'},
                {texto: 'Segundo'}
            ];
        }
    ]
);