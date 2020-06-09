app.controller("myCtrl", [
  "$scope",
  "$http",
  function ($scope, $http) {
    ($scope.canais = [
      {
        name: "App Store",
        icon: "library/icons/sgv/Apple.svg",
      },
      {
        name: "Blog",
        icon: "library/icons/sgv/RSS.svg",
      },
      {
        name: "Chat",
        icon: "library/icons/sgv/Wechat.svg",
      },
      {
        name: "E-mail",
        icon: "library/icons/sgv/Mail.svg",
      },
      {
        name: "Facebook",
        icon: "library/icons/sgv/Facebook.svg",
      },
      {
        name: "Facebook App",
        icon: "library/icons/sgv/FacebookApp.svg",
      },
      {
        name: "Google Play",
        icon: "library/icons/sgv/GooglePlay.svg",
      },
      {
        name: "Instagram",
        icon: "library/icons/sgv/Instagram.svg",
      },
      {
        name: "Linkedin",
        icon: "library/icons/sgv/Linkedin.svg",
      },
      {
        name: "Reclame aqui",
        icon: "library/icons/sgv/ReclameAqui.svg",
      },
      {
        name: "Reclame aqui - E-mail",
        icon: "library/icons/sgv/ReclameAqui.svg",
      },
      {
        name: "Twitter",
        icon: "library/icons/sgv/Twitter.svg",
      },
      {
        name: "You Tube",
        icon: "library/icons/sgv/YouTube.svg",
      },
      {
        name: "Ic.Message",
        icon: "library/icons/sgv/IcMessage.svg",
      },
    ]),
      ($scope.tipos = [
        "Humano",
        "Bot",
        "Álbum",
        "Álbum - Foto",
        "Impulsionado",
        "Comentário",
        "Comentário Filho",
        "Vídeo",
        "Dark Post",
        "Avaliação",
        "Evento",
        "Fan Page",
        "App do Facebook",
        "Marcação de Amigo",
        "Grupo",
        "Link",
        "Manual",
        "Menção",
        "Mensagem",
        "Oficial",
        "Foto",
        "Perfil",
        "Enquete",
        "Review",
        "Marca",
        "Compartilhamento",
        "Status",
        "Flash",
        "Termo",
      ]);

    $scope.getDataSlice = function (data, division, part) {
      var amount = data.length / division;
      var rest = data.length % division;

      if (rest) {
        amount = Math.floor(amount);
      }

      var indexStart = amount * part;

      if (part < rest) {
        indexStart += part;
        amount++;
      } else {
        indexStart += rest;
      }

      var indexEnd = indexStart + amount;

      if (indexEnd > data.length) {
        indexEnd = data.length;
      }

      return data.slice(indexStart, indexEnd);
    };

    $scope.checkAll = function () {
      $scope.checkall = true;
    };

    $scope.uncheckAll = function () {
      $scope.checkall = false;
    };
  },
]);
