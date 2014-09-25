angular.module('app')
    .controller('main', [
        '$scope',
        function ($scope) {
            $scope.lista_aFazer = [
                {texto: 'Começar o curso de AngularJS na Code School'},
                {texto: 'Fazer café!!!'},
                {texto: 'Escrever diretriz para as listas'}
            ];
            $scope.lista_concluidas = [];
            $scope.trocarDeLista = function (origem, destino, indice) {
                destino.push(origem[indice]); //adiciona o item na lista destino
                origem.splice(indice, 1); //remove o item da lista de origem
            };
            $scope.formData = { //modelo para os dados do form
                novaTarefa: '' //modelo para o input
            };
            $scope.adicionarTarefa = function () {
                //adiciona a nova tarefa na lista
                $scope.lista_aFazer.push({texto: $scope.formData.novaTarefa});
                $scope.formData.novaTarefa = ''; //limpa o campo
            };
            $scope.excluirTarefa = function (lista, indice) {
                lista.splice(indice, 1); //remove o item da lista
            };
        }
    ]
);