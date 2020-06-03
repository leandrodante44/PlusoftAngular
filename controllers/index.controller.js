$(function () {
  $(".link-filter").hover(
    function () {
      try {
        this.getElementsByTagName("object")[0]
          .getSVGDocument()
          .getElementsByTagName("svg")[0]
          .getElementsByTagName("g")[0]
          .getElementsByTagName("path")[0]
          .setAttribute("fill-opacity", "1");
      } catch (e) {
        this.getElementsByTagName("object")[0]
          .getSVGDocument()
          .getElementsByTagName("svg")[0]
          .getElementsByTagName("path")[0]
          .setAttribute("fill-opacity", "1");
      }
    },
    function () {
      try {
        this.getElementsByTagName("object")[0]
          .getSVGDocument()
          .getElementsByTagName("svg")[0]
          .getElementsByTagName("g")[0]
          .getElementsByTagName("path")[0]
          .setAttribute("fill-opacity", "0.5");
      } catch (e) {
        this.getElementsByTagName("object")[0]
          .getSVGDocument()
          .getElementsByTagName("svg")[0]
          .getElementsByTagName("path")[0]
          .setAttribute("fill-opacity", "0.5");
      }
    }
  );
  setTimeout(function () {
    $("object").removeClass("opacity");
    var y = document.getElementsByClassName("init-opacity");
    var i;
    for (i = 0; i < y.length; i++) {
      try {
        y[i]
          .getSVGDocument()
          .getElementsByTagName("svg")[0]
          .getElementsByTagName("g")[0]
          .getElementsByTagName("path")[0]
          .setAttribute("fill-opacity", "0.5");
      } catch (e) {
        y[i]
          .getSVGDocument()
          .getElementsByTagName("svg")[0]
          .getElementsByTagName("path")[0]
          .setAttribute("fill-opacity", "0.5");
      }
    }
  }, 2000);
});
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
  $scope.initModal = function () {
    $scope.bkp_modal = angular.copy($scope.selectedPost)
  };
  $scope.cancelModal = function () {
    debugger
    $scope.selectedPost = angular.copy($scope.bkp_modal);
  };

  /*GROUPING METHODS OF GROUPING DYNAMICS*/
  $scope.addGroup = function (post,idx){
    if($scope.input.post_check[idx]){
      $scope.grouping.di_grouping.push(post);
    }else{
      $scope.grouping.di_grouping = arrayRemove($scope.grouping,post);
    }
  };

  $scope.applyGrouping = function (){
    $scope.grouping.do_grouping.push(angular.copy($scope.grouping.di_grouping))
    $scope.grouping.di_grouping = [];
    for(var i=0; i < $scope.input.post_check.length; i++){
      $scope.input.post_check[i] = false;
    }
  }

  $scope.bkp_modal = {};

  $scope.grouping = {
    di_grouping: [],
    do_grouping: []
  }

  $scope.clerk = {
    name: "Manu Gavassi",
    ds_urlavatarfrom:
      "https://pbs.twimg.com/profile_images/1253524205578194946/OhPUF69-_400x400.jpg",
  };

  $scope.input = {
    chat: {
      message: "",
    },
    post_check: []
  };

  $scope.data = getData();
  
});
