app.controller("index.controller", function ($scope) {
  $scope.loadDataChat = function (id_smpost) {
    $scope.selectedPost = $scope.data[id_smpost];
    $scope.lastClerk = $scope.selectedPost.do_chat.do_contact.reverse();
    var find = true
    var idx = 0
    for(var i= 0; find; i++){
      if($scope.lastClerk[i].ds_side == 1) {idx = i; find = false}
    }
    $scope.lastClerk = $scope.lastClerk[idx]
    debugger
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
        dn_friends: "1",
        dn_followers: "2",
        dn_posts: "3",
        ds_bio: "a",
        ds_phone: "b",
        ds_idmidia: "c",
        ds_cphone: "d",
        ds_local: "e",
        ds_email: "f",
        do_contact: [
          {
            dt_contact: "16/03/2020 15:40",
            ds_content: "njadskjadsnk",
            ds_side: 0,
            ds_urlavatarfrom:
              "https://1.bp.blogspot.com/-WtS8KWHVH6s/V6pBHdbDLWI/AAAAAAAAAIY/4kuelKka2XwAwHoFkHsEOwFH_NpY8wZuwCLcB/s640/rpHfrKQr.jpg",
            ds_authorfrom: "Cristiano Ronaldo dos Santos",
          },
          {
            dt_contact: "16/03/2020 15:40",
            ds_content: "njadskjadsnk",
            ds_side: 0,
            ds_urlavatarfrom:
              "https://1.bp.blogspot.com/-WtS8KWHVH6s/V6pBHdbDLWI/AAAAAAAAAIY/4kuelKka2XwAwHoFkHsEOwFH_NpY8wZuwCLcB/s640/rpHfrKQr.jpg",
              ds_authorfrom: "Cristiano Ronaldo dos Santos",
          },
          {
            dt_contact: "16/03/2020 15:40",
            ds_content: "njadskjadsnk",
            ds_side: 1,
            ds_urlavatarfrom: "https://upload.wikimedia.org/wikipedia/commons/6/63/Paolla_Oliveira.png",
            ds_authorfrom: "Paolla Oliveira",
          },
          {
            dt_contact: "16/03/2020 15:40",
            ds_content: "njadskjadsnk",
            ds_side: 0,
            ds_urlavatarfrom: "https://1.bp.blogspot.com/-WtS8KWHVH6s/V6pBHdbDLWI/AAAAAAAAAIY/4kuelKka2XwAwHoFkHsEOwFH_NpY8wZuwCLcB/s640/rpHfrKQr.jpg",
            ds_authorfrom: "Cristiano Ronaldo dos Santos",
          },
        ],
        do_history: [
          {
            ds_smsocialmedia: "Facebook",
            ds_smicon: "library/icons/sgv/Facebook.svg",
            dt_published: "16/03/2020 15:40",
            ds_title: "Teste 1",
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
            ds_title: "Teste 1",
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
            ds_title: "Teste 1",
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
