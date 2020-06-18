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
        { name: "Humano" },
        { name: "Bot" },
        { name: "Álbum" },
        { name: "Álbum - Foto" },
        { name: "Impulsionado" },
        { name: "Comentário" },
        { name: "Comentário Filho" },
        { name: "Vídeo" },
        { name: "Dark Post" },
        { name: "Avaliação" },
        { name: "Evento" },
        { name: "Fan Page" },
        { name: "App do Facebook" },
        { name: "Marcação de Amigo" },
        { name: "Grupo" },
        { name: "Link" },
        { name: "Manual" },
        { name: "Menção" },
        { name: "Mensagem" },
        { name: "Oficial" },
        { name: "Foto" },
        { name: "Perfil" },
        { name: "Enquete" },
        { name: "Review" },
        { name: "Marca" },
        { name: "Compartilhamento" },
        { name: "Status" },
        { name: "Flash" },
        { name: "Termo" },
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
    $scope.checkAll = function (obj) {
      debugger;
      $scope.checkall = true;
      if (obj) {
        for (var i = 0; i < obj.length; i++) {
          obj[i].check = true;
        }
      }
    };

    $scope.uncheckAll = function (obj) {
      $scope.checkall = false;
      if (obj) {
        for (var i = 0; i < obj.length; i++) {
          obj[i].check = false;
        }
      }
    };
    $scope.updateCanais = function () {
      $scope.dataFilterSelected.da_canais = $scope.canais.filter(checkTrue);
    };
    $scope.updateTipos = function () {
      $scope.dataFilterSelected.da_tipos = $scope.tipos.filter(checkTrue);
    };
  },
]);

function checkTrue(obj) {
  return obj.check;
}

app.filter("dateRange", function () {
  // FILTER  | dateRange:request.period.dt_published_ini:request.period.dt_published_end

  return function (items, startDate, endDate) {
    //an undefined startDate is converted to the beginning of time
    startDate = startDate || 0;

    const granularity = null; // can be 'days', ... see momentJS doc

    var filter = items.filter((item) => {
      if (
        moment(item.dt_published, "DD/MM/YYYY hh:mm").isBetween(
          moment(startDate, "DD/MM/YYYY hh:mm"),
          moment(endDate, "DD/MM/YYYY hh:mm"),
          granularity,
          "[]"
        )
      ) {
        return item;
      }
    });
    return filter;
  };
});
