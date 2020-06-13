$(document).on("hidden.bs.modal", function (event) {
  if ($(".modal:visible").length) {
    $("body").addClass("modal-open");
  }
});
app.controller("index.controller", function ($scope) {
  /* ON CLICK IN "RESPONDER" IN CARD-POST*/
  $scope.loadDataChat = function (id_smpost) {
    $scope.selectedPost = $scope.data[id_smpost];
    $scope.getLastClerk();
    $(".alert-success").hide();
  };

  $scope.getLastClerk = function () {
    try {
      $scope.lastClerk = $scope.selectedPost.do_chat.do_contact.reverse();
      var find = true;
      var idx = 0;
      for (var i = 0; find; i++) {
        if ($scope.lastClerk[i].ds_side == 1) {
          idx = i;
          find = false;
        }
      }
      $scope.lastClerk = $scope.lastClerk[idx];
      $scope.selectedPost.do_chat.do_contact.reverse();
    } catch (ex) {
      $scope.lastClerk = "";
    }
  };

  $scope.sendMessage = function () {
    debugger;
    console.log($("#editorArea").val());
    var message = {
      dt_contact: new Date().toLocaleString(),
      ds_content: $("#editorArea").val(),
      ds_side: 1,
      ds_urlavatarfrom: $scope.clerk.ds_urlavatarfrom,
      ds_authorfrom: $scope.clerk.name,
    };
    debugger;
    $scope.selectedPost.do_chat.do_contact.push(message);
    initEditor();
    $scope.getLastClerk();
  };

  /*MODALS METHODS OF MODAL DYNAMICS*/
  $scope.initModal = function (post) {
    if (post) {
      $scope.selectedPost = getPostById($scope.data, post);
      $scope.bkp_modal = angular.copy(getPostById($scope.data, post));
    } else {
      $scope.bkp_modal = angular.copy($scope.selectedPost);
    }
  };
  $scope.cancelModal = function () {
    debugger;
    $scope.selectedPost = angular.copy($scope.bkp_modal);
  };

  /*GROUPING METHODS OF GROUPING DYNAMICS*/
  $scope.addGroup = function (post, idx) {
    if ($scope.input.post_check[idx]) {
      $scope.grouping.di_grouping.push(post);
    } else {
      $scope.grouping.di_grouping = arrayRemove(
        $scope.grouping.di_grouping,
        post
      );
    }
  };
  $scope.applyGrouping = function () {
    var postParent, postChild, lstId;
    for (var j = 0; j < $scope.grouping.di_grouping.length; j++) {
      if (!j) {
        postParent = getPostById($scope.data, $scope.grouping.di_grouping[j]);
        lstId = postParent.post_types[postParent.post_types.length - 1].id;
      } else {
        postChild = getPostById($scope.data, $scope.grouping.di_grouping[j]);
        var statuspost = "";
        switch (true) {
          case postChild.do_assignment.ds_status.ds_inprogress:
            statuspost = "Em andamento";
            break;
          case postChild.do_assignment.ds_status.ds_assigned:
            statuspost = "Atribuido";
            break;
          case postChild.do_assignment.ds_status.ds_concluded:
            statuspost = "Concluido";
            break;
          default:
            statuspost = "Aguardando";
        }
        var arrTag = {
          id: lstId++,
          Do_manual: "A",
          ds_typeicustomer: "# " + postChild.id_smpost + " - " + statuspost,
        };
        postParent.post_types.push(arrTag);
      }
    }
    $scope.grouping.do_grouping.push(angular.copy($scope.grouping.di_grouping));
    $scope.grouping.di_grouping = [];
    for (var i = 0; i < $scope.input.post_check.length; i++) {
      $scope.input.post_check[i] = false;
    }
  };
  $scope.verifyGrouping = function (post) {
    for (var i = 0; i < $scope.grouping.do_grouping.length; i++) {
      for (var j = 0; j < $scope.grouping.do_grouping[i].length; j++) {
        if ($scope.grouping.do_grouping[i][j] == post && j != 0) return false;
      }
    }
    return true;
  };
  $scope.isParentGrouping = function (post) {
    for (var i = 0; i < $scope.grouping.do_grouping.length; i++) {
      for (var j = 0; j < $scope.grouping.do_grouping[i].length; j++) {
        if ($scope.grouping.do_grouping[i][j] == post && j == 0) return true;
      }
    }
    return false;
  };

  $scope.bkp_modal = {};

  $scope.grouping = {
    di_grouping: [],
    do_grouping: [],
  };

  $scope.clerk = {
    name: "Manu Gavassi",
    ds_urlavatarfrom:
      "https://pbs.twimg.com/profile_images/1253524205578194946/OhPUF69-_400x400.jpg",
  };

  $scope.input = {
    chat: {
      message: "",
    },
    post_check: [],
    datepicker: "",
  };

  $scope.data = getData();
  $scope.menu = getFilters();

  $scope.loadDataFilter = function (id_filter) {
    $scope.selectedFilter = $scope.menu[id_filter];
    $scope.dataFilterSelected = getFilterById(
      $scope.request.filters,
      $scope.selectedFilter.id
    );
    $scope.initFilterModal();
    debugger;
  };

  $scope.bkp_filter = {};

  $scope.initFilterModal = function () {
    $scope.bkp_filter = angular.copy($scope.request.filters);
  };

  $scope.cancelFilter = function () {
    $scope.request.filters = angular.copy($scope.bkp_filter);
  };

  $scope.request = {
    filters: getFiltersData(),
    period: {
      dt_published_ini: "16/03/2020 09:30",
      dt_published_end: "17/03/2020 14:20",
    },
  };

  $scope.topBarMood = gettopBarMood();

  $scope.topBarOrderBy = gettopBarOrderBy();

  $scope.topBarRefresh = gettopBarRefresh();

  $scope.orderOption = {
    value: "id_smpost",
  };

  $scope.openDaterange = function () {
    document.getElementsByName("daterange")[0].focus();
  };

  $('input[name="daterange"]').daterangepicker({
    timePicker: true,
    timePicker24Hour: true,
    applyButtonClasses: "btn-success custom-apply",
    locale: {
      format: "DD/MM/YYYY hh:mm",
      separator: " - ",
      applyLabel: "Aplicar",
      cancelLabel: "Cancelar",
      fromLabel: "De",
      toLabel: "Até",
      customRangeLabel: "Custom",
      showDropdowns: true,
      weekLabel: "W",
      daysOfWeek: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"],
      monthNames: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ],
      firstDay: 0,
    },
    startDate: moment(
      $scope.request.period.dt_published_ini,
      "DD/MM/YYYY hh:mm"
    ),
    endDate: moment($scope.request.period.dt_published_end, "DD/MM/YYYY hh:mm"),
  });

  //$('input[name="daterange"]').on('apply.daterangepicker', function(ev, picker) {
  //  $scope.updateDateRange(picker.startDate.format('DD/MM/YYYY hh:mm'), picker.endDate.format('DD/MM/YYYY hh:mm'));
  //});
  $scope.atualizarData = function () {
    var startDate = $scope.input.datepicker.split("-")[0].trim();
    var endDate = $scope.input.datepicker.split("-")[1].trim();
    $scope.updateDateRange(startDate, endDate);
  };
  $scope.updateDateRange = function (ini, end) {
    $scope.request.period = {
      dt_published_ini: ini,
      dt_published_end: end,
    };
  };

  $scope.tags = getTags();
  $scope.selectedTag = {};

  $scope.getTags = () => {
    debugger;
    var new_post_types = [];

    Object.values($scope.selectedTag).forEach((tag) => {
      if (tag != null) {
        new_post_types.push({
          id: 1,
          Do_manual: "Y",
          ds_typeicustomer: tag,
        });
      }
    });
    //ADICIOINAR TAGS NO POST
    for (var i = 0; i < $scope.grouping.di_grouping.length; i++) {
      for (var j = 0; j < $scope.data.length; j++) {
        if ($scope.data[j].id_smpost == $scope.grouping.di_grouping[i]) {
          for (var k = 0; k < new_post_types.length; k++) {
            $scope.data[j].post_types.push(new_post_types[k]);
          }
        }
      }
    }
    //LIMPAR CHERCKBOX
    $scope.grouping.di_grouping = [];
    for (var i = 0; i < $scope.input.post_check.length; i++) {
      $scope.input.post_check[i] = false;
    }
    //LIMPAR SELEÇÕES NA MODAL
    $scope.selectedTag = {};
    return new_post_types;
  };

  $scope.removeTag = function (post, tag) {
    post.post_types = arrayRemove(post.post_types, tag);
    debugger;
  };

  $scope.setMood = (valor) => {
    //ADICIOINAR MOOD NO POST
    for (var i = 0; i < $scope.grouping.di_grouping.length; i++) {
      for (var j = 0; j < $scope.data.length; j++) {
        if ($scope.data[j].id_smpost == $scope.grouping.di_grouping[i]) {
          $scope.data[j].ds_feeling = valor;
        }
      }
    }
    //LIMPAR CHERCKBOX
    $scope.grouping.di_grouping = [];
    for (var i = 0; i < $scope.input.post_check.length; i++) {
      $scope.input.post_check[i] = false;
    }
    debugger;
  };

  $scope.isFeeling = (fell, post) => {
    if (post.ds_feeling == fell) return true;
    else return false;
  };

  $scope.setFeeling = (valor, post) => {
    post.ds_feeling = valor;
  };
});

//BTN ATRIBUIR
//MODAL DE TAGUEAMENTO
//POST PAI E FILHO
//DROPDOWNS DO TOP MENU ITEM A ITEM
//EXECUÇÃO DO FIGMA
//ATRUBIÇÃO
/** AO RELIZAR O AGRUPAMENTO, SOBRE BTN ADD TAG

TAGUEAMENTO, SELECIONA E ABRE MODAL, E TBM EM MASSA
OBJETO DE ARVORE DE TAGUEAMENTO NA MODAL - FALARCOM HUGO

POST PAI
  NAVEGAÇÃO CLICA NO ABA CARREGA O POST PAI, QUANDO VOLTAR CARREGA O POST FILHO

HISTÓRICO DAS MENSAGENS CLICA NO BALÃO
  MSM CONVERSA DO CHAT 

TOP MENU, SÃO AÇÕES EM MASSA
PENDENTE
ATRIBUIDO
EM ATENDIMENTO
CONCLUIDO **/
