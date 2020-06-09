function getFilters() {
  return [
    {
      id: 1,
      name: "Atendimento",
      icon: "library/icons/sgv/supervised_user_circle.svg",
      modal: "#modalAtendimento",
      content: "includes/modalAtendimento.html",
      do_inputs:{
        di_respondidos: [{ label: 'Sim', value: 1},{ label: 'Não', value: 2}],
        di_viabot: [{ label: 'Sim', value: 1},{ label: 'Não', value: 2}],
        di_verificados: [{ label: 'Verificado', value: 1},{ label: 'Não Verificado', value: 2}]
      }
    },
    {
      id: 2,
      name: "Anexos",
      icon: "library/icons/sgv/attach_file.svg",
      modal: "#modalAnexos",
      content: "includes/modalAnexos.html",
      do_inputs:{
        di_respondidos: [{ label: 'Sim', value: 1},{ label: 'Não', value: 2}]
      }
    },
    {
      id: 3,
      name: "Autor",
      icon: "library/icons/sgv/account_circle.svg",
      modal: "#modalAutor",
      content: "includes/modalAutor.html",
      do_inputs:{

      }
    },
    {
      id: 4,
      name: "Canais",
      icon: "library/icons/sgv/phonelink.svg",
      modal: "#modalCanais",
      content: "includes/modalCanais.html",
      do_inputs:{

      }
    },
    {
      id: 5,
      name: "Chamados",
      icon: "library/icons/sgv/sim_card.svg",
      modal: "#modalChamado",
      content: "includes/modalChamado.html",
      do_inputs: {
        di_prioridade: [{ label: 'Baixa', value: 1},{ label: 'Média', value: 2},{ label: 'Alta', value: 3}],
        di_sentimentoentrada: [{ label: 'Satisfeito', value: 1},{ label: 'Insatisfeito', value: 2},{ label: 'Indiferente', value: 3}],
        di_sentimentosaida: [{ label: 'Satisfeito', value: 1},{ label: 'Insatisfeito', value: 2},{ label: 'Indiferente', value: 3}],
        di_chamados: [{ label: 'Chamado #1234', value: 1},{ label: 'Chamado #1234', value: 2},{ label: 'Chamado #1235', value: 2}],
        di_favorito: [{ label: 'Favorito', value: 1},{ label: 'Não Favorito', value: 2}],
        di_formularios: [{ label: 'Sim', value: 1},{ label: 'Não', value: 2}],
        di_favoravel: [{ label: 'Sim', value: 1},{ label: 'Não', value: 2}],
        di_status: [{ label: 'Aguardando', value: 1},{ label: 'Em andamento', value: 2},{ label: 'Atribuido', value: 3},{ label: 'Concluido', value: 4}],
        di_atendentes: [{ label: 'Atendente 01', value: 1},{ label: 'Atendente 01', value: 2}]
      }
    },
    {
      id: 6,
      name: "Classificação",
      icon: "library/icons/sgv/done_all.svg",
      modal: "#modalClassificacao",
      content: "includes/modalClassificacao.html",
      do_inputs:{

      }
    },
    {
      id: 7,
      name: "Favoritos",
      icon: "library/icons/sgv/star_border.svg",
      modal: "#modalFavoritos",
      content: "includes/modalFavoritos.html",
      do_inputs:{

      }
    },
    {
      id: 8,
      name: "Paginação",
      icon: "library/icons/sgv/settings_ethernet.svg",
      modal: "#modalPaginacao",
      content: "includes/modalPaginacao.html",
      do_inputs:{

      }
    },
    {
      id: 9,
      name: "Privados",
      icon: "library/icons/sgv/forum.svg",
      modal: "#modalPrivados",
      content: "includes/modalPrivados.html",
      do_inputs:{
        di_resultados: [{label:'10',value: 10},{label:'30',value:30},{label:'50',value:50},{label:'100',value:100}]
      }
    },
    {
      id: 10,
      name: "Posts",
      icon: "library/icons/sgv/art_track.svg",
      modal: "#modalPosts",
      content: "includes/modalPosts.html",
      do_inputs:{
        di_idpost: [{ label: 'Post 01', value: 1}, { label: 'Post 02', value: 2}, { label: 'Post 03', value: 3}],
        di_idpostprincipal:[{ label: 'Post 01', value: 1}, { label: 'Post 02', value: 2}, { label: 'Post 03', value: 3}],
        di_idconversa:[{ label: 'Conversa 01', value: 1}, { label: 'Conversa 02', value: 2}, { label: 'Conversa 03', value: 3}],
        di_idpostcanal:[{ label: 'Post 01', value: 1}, { label: 'Post 02', value: 2}, { label: 'Post 03', value: 3}],
        di_qualquerid:[{ label: 'Sim', value: 1}, { label: 'Não', value: 2}]
      }
    },
    {
      id: 11,
      name: "Tags",
      icon: "library/icons/sgv/tag_filter.svg",
      modal: "#modalTags",
      content: "includes/modalTags.html",
      do_inputs:{
        di_tagueados: [{ label: 'Sim', value: 1}, { label: 'Não', value: 2}],
        di_automatico:[{ label: 'Sim', value: 1}, { label: 'Não', value: 2}],
        di_clientes:[{ label: 'Cliente 01', value: 1}, { label: 'Cliente 02', value: 2}]
      }
    },
    {
      id: 12,
      name: "Tipos",
      icon: "library/icons/sgv/all_inbox.svg",
      modal: "#modalTipos",
      content: "includes/modalTipos.html",
      do_inputs:{

      }
    },
  ];
}

function getData() {
  return [
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
    },
  ];
}
