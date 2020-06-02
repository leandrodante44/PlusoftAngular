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
  /* ON CLICK IN "RESPONDER" NO CARD-POST*/
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
  $scope.bkp_modal = {}
  $scope.initModal = function () {
    $scope.bkp_modal = angular.copy($scope.selectedPost)
  };
  $scope.cancelModal = function () {
    debugger
    $scope.selectedPost = angular.copy($scope.bkp_modal);
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
  };

  $scope.data = [
    {
      id_smpost: 1234,
      do_influencer: "N",
      do_favorite: "",
      do_liked: "15",
      do_loverhater: "L",
      ds_authorfrom: "Cristiano Ronaldo dos Santos",
      ds_smicon: "library/icons/sgv/Facebook.svg",
      ds_smsocialmedia: "Facebook",
      ds_urlavatarfrom:
        "https://1.bp.blogspot.com/-WtS8KWHVH6s/V6pBHdbDLWI/AAAAAAAAAIY/4kuelKka2XwAwHoFkHsEOwFH_NpY8wZuwCLcB/s640/rpHfrKQr.jpg",
      ds_title: "Especialista fala sobre o Corona Vírus: ",
      dt_published: "16/03/2020 15:40",
      post_types: [
        {
          id: 1,
          Do_manual: "Y",
          ds_typeicustomer: "Informação",
        },
        {
          id: 1,
          Do_manual: "Y",
          ds_typeicustomer: "Curiosidade",
        },
      ],
      do_chat: {
        dn_friends: "500M",
        dn_followers: "210M",
        dn_posts: "956",
        ds_bio: "The Player Soccer",
        ds_phone: "+55879798877",
        ds_idmidia: "@cristianoronaldo",
        ds_cphone: "+55879798877",
        ds_local: "Milão, Itália",
        ds_email: "cr7@gmail.com",
        do_assignment: {
          ds_status: {
            ds_inprogress: "",
            ds_assigned: "",
            ds_concluded: "",
          },
          ds_input: {
            ds_pleased: "",
            ds_dissatisfied: "",
            ds_indifferent: "",
          },
          ds_exit: {
            ds_pleased: "",
            ds_dissatisfied: "",
            ds_indifferent: "",
          },
          ds_assignment: "1",
        },
        do_contact: [
          {
            dt_contact: "16/03/2020 15:40",
            ds_content: "Boa Tarde Tudo Bem?",
            ds_side: 0,
            ds_urlavatarfrom:
              "https://1.bp.blogspot.com/-WtS8KWHVH6s/V6pBHdbDLWI/AAAAAAAAAIY/4kuelKka2XwAwHoFkHsEOwFH_NpY8wZuwCLcB/s640/rpHfrKQr.jpg",
            ds_authorfrom: "Cristiano Ronaldo dos Santos",
          },
          {
            dt_contact: "16/03/2020 15:40",
            ds_content: "Tenho um elogio para o seu produto!",
            ds_side: 0,
            ds_urlavatarfrom:
              "https://1.bp.blogspot.com/-WtS8KWHVH6s/V6pBHdbDLWI/AAAAAAAAAIY/4kuelKka2XwAwHoFkHsEOwFH_NpY8wZuwCLcB/s640/rpHfrKQr.jpg",
            ds_authorfrom: "Cristiano Ronaldo dos Santos",
          },
          {
            dt_contact: "16/03/2020 15:40",
            ds_content: "Boa Tarde Cris, mandae!",
            ds_side: 1,
            ds_urlavatarfrom:
              "https://upload.wikimedia.org/wikipedia/commons/6/63/Paolla_Oliveira.png",
            ds_authorfrom: "Paolla Oliveira",
          },
          {
            dt_contact: "16/03/2020 15:40",
            ds_content: "Execelente Produto!",
            ds_side: 0,
            ds_urlavatarfrom:
              "https://1.bp.blogspot.com/-WtS8KWHVH6s/V6pBHdbDLWI/AAAAAAAAAIY/4kuelKka2XwAwHoFkHsEOwFH_NpY8wZuwCLcB/s640/rpHfrKQr.jpg",
            ds_authorfrom: "Cristiano Ronaldo dos Santos",
          },
        ],
        do_history: [
          {
            ds_smsocialmedia: "Facebook",
            ds_smicon: "library/icons/sgv/Facebook.svg",
            dt_published: "16/03/2020 15:40",
            ds_title: "Post 01",
            ds_authorfrom: "Cristiano Ronaldo dos Santos",
            ds_urlavatarfrom:
              "https://1.bp.blogspot.com/-WtS8KWHVH6s/V6pBHdbDLWI/AAAAAAAAAIY/4kuelKka2XwAwHoFkHsEOwFH_NpY8wZuwCLcB/s640/rpHfrKQr.jpg",
            post_types: [
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Informação",
              },
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Curiosidade",
              },
            ],
          },
          {
            ds_smsocialmedia: "WeChat",
            ds_smicon: "library/icons/sgv/Wechat.svg",
            dt_published: "16/03/2020 15:40",
            ds_title: "Post 02",
            ds_authorfrom: "Cristiano Ronaldo dos Santos",
            ds_urlavatarfrom:
              "https://1.bp.blogspot.com/-WtS8KWHVH6s/V6pBHdbDLWI/AAAAAAAAAIY/4kuelKka2XwAwHoFkHsEOwFH_NpY8wZuwCLcB/s640/rpHfrKQr.jpg",
            post_types: [
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Informação",
              },
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Curiosidade",
              },
            ],
          },
          {
            ds_smsocialmedia: "Instagram",
            ds_smicon: "library/icons/sgv/Instagram.svg",
            dt_published: "16/03/2020 15:40",
            ds_title: "Post 03",
            ds_authorfrom: "Cristiano Ronaldo dos Santos",
            ds_urlavatarfrom:
              "https://1.bp.blogspot.com/-WtS8KWHVH6s/V6pBHdbDLWI/AAAAAAAAAIY/4kuelKka2XwAwHoFkHsEOwFH_NpY8wZuwCLcB/s640/rpHfrKQr.jpg",
            post_types: [
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Informação",
              },
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Curiosidade",
              },
            ],
          },
          {
            ds_smsocialmedia: "Facebook",
            ds_smicon: "library/icons/sgv/Facebook.svg",
            ds_urlavatarfrom:
              "https://1.bp.blogspot.com/-WtS8KWHVH6s/V6pBHdbDLWI/AAAAAAAAAIY/4kuelKka2XwAwHoFkHsEOwFH_NpY8wZuwCLcB/s640/rpHfrKQr.jpg",
            ds_title: "Post 04 ",
            dt_published: "16/03/2020 15:40",
            post_types: [
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Informação",
              },
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Curiosidade",
              },
            ],
          },
          {
            ds_smsocialmedia: "Facebook",
            ds_smicon: "library/icons/sgv/Facebook.svg",
            dt_published: "16/03/2020 15:40",
            ds_title: "Post 01",
            ds_authorfrom: "Cristiano Ronaldo dos Santos",
            ds_urlavatarfrom:
              "https://1.bp.blogspot.com/-WtS8KWHVH6s/V6pBHdbDLWI/AAAAAAAAAIY/4kuelKka2XwAwHoFkHsEOwFH_NpY8wZuwCLcB/s640/rpHfrKQr.jpg",
            post_types: [
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Informação",
              },
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Curiosidade",
              },
            ],
          },
          {
            ds_smsocialmedia: "WeChat",
            ds_smicon: "library/icons/sgv/Wechat.svg",
            dt_published: "16/03/2020 15:40",
            ds_title: "Post 02",
            ds_authorfrom: "Cristiano Ronaldo dos Santos",
            ds_urlavatarfrom:
              "https://1.bp.blogspot.com/-WtS8KWHVH6s/V6pBHdbDLWI/AAAAAAAAAIY/4kuelKka2XwAwHoFkHsEOwFH_NpY8wZuwCLcB/s640/rpHfrKQr.jpg",
            post_types: [
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Informação",
              },
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Curiosidade",
              },
            ],
          },
          {
            ds_smsocialmedia: "Instagram",
            ds_smicon: "library/icons/sgv/Instagram.svg",
            dt_published: "16/03/2020 15:40",
            ds_title: "Post 03",
            ds_authorfrom: "Cristiano Ronaldo dos Santos",
            ds_urlavatarfrom:
              "https://1.bp.blogspot.com/-WtS8KWHVH6s/V6pBHdbDLWI/AAAAAAAAAIY/4kuelKka2XwAwHoFkHsEOwFH_NpY8wZuwCLcB/s640/rpHfrKQr.jpg",
            post_types: [
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Informação",
              },
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Curiosidade",
              },
            ],
          },
          {
            ds_smsocialmedia: "Facebook",
            ds_smicon: "library/icons/sgv/Facebook.svg",
            ds_urlavatarfrom:
              "https://1.bp.blogspot.com/-WtS8KWHVH6s/V6pBHdbDLWI/AAAAAAAAAIY/4kuelKka2XwAwHoFkHsEOwFH_NpY8wZuwCLcB/s640/rpHfrKQr.jpg",
            ds_title: "Post 04 ",
            dt_published: "16/03/2020 15:40",
            post_types: [
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Informação",
              },
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Curiosidade",
              },
            ],
          },
        ],
      },
    },
    {
      id_smpost: 1235,
      do_influencer: "Y",
      do_favorite: "",
      do_liked: "10",
      do_loverhater: "H",
      ds_authorfrom: "Gabriel Barbosa",
      ds_smicon: "library/icons/sgv/Twitter.svg",
      ds_smsocialmedia: "Twitter",
      ds_urlavatarfrom:
        "https://esportes.estadao.com.br/blogs/crop/320x300/robson-morelli/wp-content/uploads/sites/37/2019/09/gabigol.jpg",
      ds_title:
        "Especialista fala sobre o Corona Vírus: https://t.co/8c8Yi5DtGm",
      dt_published: "16/03/2020 10:30",
      post_types: [
        {
          id: 1,
          Do_manual: "Y",
          ds_typeicustomer: "Corona",
        },
      ],
      do_chat: {
        dn_friends: "600M",
        dn_followers: "200M",
        dn_posts: "777",
        ds_bio: "The Player Soccer Pro",
        ds_phone: "+55879798877",
        ds_idmidia: "@gabigol",
        ds_cphone: "+55879798877",
        ds_local: "Ninho do Urubu, Mengo",
        ds_email: "gabigol@gmail.com",
        do_assignment: {
          ds_status: {
            ds_inprogress: "",
            ds_assigned: "",
            ds_concluded: "",
          },
          ds_input: {
            ds_pleased: "",
            ds_dissatisfied: "",
            ds_indifferent: "",
          },
          ds_exit: {
            ds_pleased: "",
            ds_dissatisfied: "",
            ds_indifferent: "",
          },
          ds_assignment: "1",
        },
        do_contact: [
          {
            dt_contact: "16/03/2020 15:40",
            ds_content: "Olá, Tudo Bem?",
            ds_side: 0,
            ds_urlavatarfrom:
              "https://esportes.estadao.com.br/blogs/crop/320x300/robson-morelli/wp-content/uploads/sites/37/2019/09/gabigol.jpg",
            ds_authorfrom: "Gabigol",
          },
          {
            dt_contact: "16/03/2020 15:40",
            ds_content: "Hoje tem gol do gabigol?",
            ds_side: 0,
            ds_urlavatarfrom:
              "https://esportes.estadao.com.br/blogs/crop/320x300/robson-morelli/wp-content/uploads/sites/37/2019/09/gabigol.jpg",
            ds_authorfrom: "Gabigol",
          },
          {
            dt_contact: "16/03/2020 15:40",
            ds_content: "Tem sim!",
            ds_side: 1,
            ds_urlavatarfrom:
              "https://upload.wikimedia.org/wikipedia/commons/6/63/Paolla_Oliveira.png",
            ds_authorfrom: "Paolla Oliveira",
          },
          {
            dt_contact: "16/03/2020 15:40",
            ds_content: "Boa Tarde!",
            ds_side: 0,
            ds_urlavatarfrom:
              "https://esportes.estadao.com.br/blogs/crop/320x300/robson-morelli/wp-content/uploads/sites/37/2019/09/gabigol.jpg",
            ds_authorfrom: "Gabigol",
          },
        ],
        do_history: [
          {
            ds_smsocialmedia: "Facebook",
            ds_smicon: "library/icons/sgv/Facebook.svg",
            dt_published: "16/03/2020 15:40",
            ds_title: "Post 01",
            ds_authorfrom: "Gabriel Barbosa",
            ds_urlavatarfrom:
              "https://esportes.estadao.com.br/blogs/crop/320x300/robson-morelli/wp-content/uploads/sites/37/2019/09/gabigol.jpg",
            post_types: [
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Informação",
              },
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Curiosidade",
              },
            ],
          },
          {
            ds_smsocialmedia: "WeChat",
            ds_smicon: "library/icons/sgv/Wechat.svg",
            dt_published: "16/03/2020 15:40",
            ds_title: "Post 02",
            ds_authorfrom: "Gabriel Barbosa",
            ds_urlavatarfrom:
              "https://esportes.estadao.com.br/blogs/crop/320x300/robson-morelli/wp-content/uploads/sites/37/2019/09/gabigol.jpg",
            post_types: [
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Informação",
              },
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Curiosidade",
              },
            ],
          },
          {
            ds_smsocialmedia: "Instagram",
            ds_smicon: "library/icons/sgv/Instagram.svg",
            dt_published: "16/03/2020 15:40",
            ds_title: "Post 03",
            ds_authorfrom: "Gabriel Barbosa",
            ds_urlavatarfrom:
              "https://esportes.estadao.com.br/blogs/crop/320x300/robson-morelli/wp-content/uploads/sites/37/2019/09/gabigol.jpg",
            post_types: [
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Informação",
              },
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Curiosidade",
              },
            ],
          },
          {
            ds_smsocialmedia: "Facebook",
            ds_smicon: "library/icons/sgv/Facebook.svg",
            ds_urlavatarfrom:
              "https://esportes.estadao.com.br/blogs/crop/320x300/robson-morelli/wp-content/uploads/sites/37/2019/09/gabigol.jpg",
            ds_title: "Post 04 ",
            dt_published: "16/03/2020 15:40",
            post_types: [
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Informação",
              },
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Curiosidade",
              },
            ],
          },
          {
            ds_smsocialmedia: "Facebook",
            ds_smicon: "library/icons/sgv/Facebook.svg",
            dt_published: "16/03/2020 15:40",
            ds_title: "Post 01",
            ds_authorfrom: "Gabriel Barbosa",
            ds_urlavatarfrom:
              "https://esportes.estadao.com.br/blogs/crop/320x300/robson-morelli/wp-content/uploads/sites/37/2019/09/gabigol.jpg",
            post_types: [
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Informação",
              },
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Curiosidade",
              },
            ],
          },
          {
            ds_smsocialmedia: "WeChat",
            ds_smicon: "library/icons/sgv/Wechat.svg",
            dt_published: "16/03/2020 15:40",
            ds_title: "Post 02",
            ds_authorfrom: "Gabriel Barbosa",
            ds_urlavatarfrom:
              "https://esportes.estadao.com.br/blogs/crop/320x300/robson-morelli/wp-content/uploads/sites/37/2019/09/gabigol.jpg",
            post_types: [
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Informação",
              },
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Curiosidade",
              },
            ],
          },
          {
            ds_smsocialmedia: "Instagram",
            ds_smicon: "library/icons/sgv/Instagram.svg",
            dt_published: "16/03/2020 15:40",
            ds_title: "Post 03",
            ds_authorfrom: "Gabriel Barbosa",
            ds_urlavatarfrom:
              "https://esportes.estadao.com.br/blogs/crop/320x300/robson-morelli/wp-content/uploads/sites/37/2019/09/gabigol.jpg",
            post_types: [
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Informação",
              },
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Curiosidade",
              },
            ],
          },
          {
            ds_smsocialmedia: "Facebook",
            ds_smicon: "library/icons/sgv/Facebook.svg",
            ds_urlavatarfrom:
              "https://esportes.estadao.com.br/blogs/crop/320x300/robson-morelli/wp-content/uploads/sites/37/2019/09/gabigol.jpg",
            ds_title: "Post 04 ",
            ds_authorfrom: "Gabriel Barbosa",
            dt_published: "16/03/2020 15:40",
            post_types: [
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Informação",
              },
              {
                id: 1,
                Do_manual: "Y",
                ds_typeicustomer: "Curiosidade",
              },
            ],
          },
        ],
      },
    },
    {
      id_smpost: 1236,
      do_influencer: "Y",
      do_favorite: "",
      do_liked: "20",
      do_loverhater: "L",
      ds_authorfrom: "Neymar Júnior",
      ds_smicon: "library/icons/sgv/Instagram.svg",
      ds_smsocialmedia: "Instagram",
      ds_urlavatarfrom:
        "https://conteudo.cbf.com.br/cdn/201808/20180820124344_623.jpeg",
      ds_title: "Especialista fala sobre o Corona Vírus: ",
      dt_published: "15/03/2020 10:00",
      post_types: [
        {
          id: 1,
          Do_manual: "Y",
          ds_typeicustomer: "Informação",
        },
        {
          id: 1,
          Do_manual: "Y",
          ds_typeicustomer: "Curiosidade",
        },
      ],
    },
    {
      id_smpost: 1237,
      do_influencer: "N",
      do_favorite: "",
      do_liked: "50",
      do_loverhater: "L",
      ds_authorfrom: "Bruna Marquezine",
      ds_smicon: "library/icons/sgv/Twitter.svg",
      ds_smsocialmedia: "Twitter",
      ds_urlavatarfrom:
        "https://s2.glbimg.com/STCIMSu1Vvn-Bs6GiEfbeuOZ96w=/620x0/top/s.glbimg.com/jo/eg/f/original/2016/09/02/13827314_643041619198037_1536118892_n.jpg",
      ds_title: "Especialista fala sobre o Corona Vírus: ",
      dt_published: "15/03/2020 9:00",
      post_types: [
        {
          id: 1,
          Do_manual: "Y",
          ds_typeicustomer: "Informação",
        },
        {
          id: 1,
          Do_manual: "Y",
          ds_typeicustomer: "Curiosidade",
        },
      ],
    },
  ];
});
