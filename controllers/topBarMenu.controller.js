
app.controller("topBarMenu.controller", function ($scope) {
    
    $scope.topBarMood = [
        {
            displayName: "Positivo",
            value: "1",
        },
        {
            displayName: "Negativo",
            value: "2",
        },
        {
            displayName: "Neutro",
            value: "3",
        },
        {
            displayName: "Híbrido",
            value: "4",
        },
        {
            displayName: "Inválido",
            value: "5",
        },
    ];

    $scope.topBarOrderBy = [
        {
            displayName: "Mais recentes",
            value: "-dt_published",
        },
        {
            displayName: "Mais antigos",
            value: "dt_published",
        },
        {
            displayName: "Mais amigos",
            value: "",
        },
        {
            displayName: "Mais seguidores",
            value: "",
        },
        {
            displayName: "Mais curtidas",
            value: "-do_liked",
        },
        {
            displayName: "Mais compartilhamentos",
            value: "",
        },
        {
            displayName: "Mais comentários",
            value: "",
        },
    ];

    $scope.topBarRefresh = [
        {
            displayName: "Manual"
        },
        {
            displayName: "Automático"
        }
    ];

        $scope.orderOption = {
        value: "id_smpost",
    };
});