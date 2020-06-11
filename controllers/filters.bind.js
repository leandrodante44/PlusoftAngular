function getFilters() {
  return [
    {
      id: 1,
      name: "Atendimento",
      icon: "library/icons/sgv/supervised_user_circle.svg",
      modal: "#modalAtendimento",
      content: "includes/modalAtendimento.html",
      do_inputs: {
        di_respondidos: [
          { label: "Sim", value: 1 },
          { label: "Não", value: 2 },
        ],
        di_viabot: [
          { label: "Sim", value: 1 },
          { label: "Não", value: 2 },
        ],
        di_verificados: [
          { label: "Verificado", value: 1 },
          { label: "Não Verificado", value: 2 },
        ],
      },
    },
    {
      id: 2,
      name: "Anexos",
      icon: "library/icons/sgv/attach_file.svg",
      modal: "#modalAnexos",
      content: "includes/modalAnexos.html",
      do_inputs: {
        di_respondidos: [
          { label: "Sim", value: 1 },
          { label: "Não", value: 2 },
        ],
      },
    },
    {
      id: 3,
      name: "Autor",
      icon: "library/icons/sgv/account_circle.svg",
      modal: "#modalAutor",
      content: "includes/modalAutor.html",
      do_inputs: {},
    },
    {
      id: 4,
      name: "Canais",
      icon: "library/icons/sgv/phonelink.svg",
      modal: "#modalCanais",
      content: "includes/modalCanais.html",
      do_inputs: {},
    },
    {
      id: 5,
      name: "Chamados",
      icon: "library/icons/sgv/sim_card.svg",
      modal: "#modalChamado",
      content: "includes/modalChamado.html",
      do_inputs: {
        di_prioridade: [
          { label: "Baixa", value: 1 },
          { label: "Média", value: 2 },
          { label: "Alta", value: 3 },
        ],
        di_sentimentoentrada: [
          { label: "Satisfeito", value: 1 },
          { label: "Insatisfeito", value: 2 },
          { label: "Indiferente", value: 3 },
        ],
        di_sentimentosaida: [
          { label: "Satisfeito", value: 1 },
          { label: "Insatisfeito", value: 2 },
          { label: "Indiferente", value: 3 },
        ],
        di_chamados: [
          { label: "Chamado #1234", value: 1 },
          { label: "Chamado #1234", value: 2 },
          { label: "Chamado #1235", value: 2 },
        ],
        di_favorito: [
          { label: "Favorito", value: 1 },
          { label: "Não Favorito", value: 2 },
        ],
        di_formularios: [
          { label: "Sim", value: 1 },
          { label: "Não", value: 2 },
        ],
        di_favoravel: [
          { label: "Sim", value: 1 },
          { label: "Não", value: 2 },
        ],
        di_status: [
          { label: "Aguardando", value: 1 },
          { label: "Em andamento", value: 2 },
          { label: "Atribuido", value: 3 },
          { label: "Concluido", value: 4 },
        ],
        di_atendentes: [
          { label: "Atendente 01", value: 1 },
          { label: "Atendente 01", value: 2 },
        ],
      },
    },
    {
      id: 6,
      name: "Classificação",
      icon: "library/icons/sgv/done_all.svg",
      modal: "#modalClassificacao",
      content: "includes/modalClassificacao.html",
      do_inputs: {},
    },
    {
      id: 7,
      name: "Favoritos",
      icon: "library/icons/sgv/star_border.svg",
      modal: "#modalFavoritos",
      content: "includes/modalFavoritos.html",
      do_inputs: {},
    },
    {
      id: 8,
      name: "Paginação",
      icon: "library/icons/sgv/settings_ethernet.svg",
      modal: "#modalPaginacao",
      content: "includes/modalPaginacao.html",
      do_inputs: {},
    },
    {
      id: 9,
      name: "Privados",
      icon: "library/icons/sgv/forum.svg",
      modal: "#modalPrivados",
      content: "includes/modalPrivados.html",
      do_inputs: {
        di_resultados: [
          { label: "10", value: 10 },
          { label: "30", value: 30 },
          { label: "50", value: 50 },
          { label: "100", value: 100 },
        ],
      },
    },
    {
      id: 10,
      name: "Posts",
      icon: "library/icons/sgv/art_track.svg",
      modal: "#modalPosts",
      content: "includes/modalPosts.html",
      do_inputs: {
        di_idpost: [
          { label: "Post 01", value: 1 },
          { label: "Post 02", value: 2 },
          { label: "Post 03", value: 3 },
        ],
        di_idpostprincipal: [
          { label: "Post 01", value: 1 },
          { label: "Post 02", value: 2 },
          { label: "Post 03", value: 3 },
        ],
        di_idconversa: [
          { label: "Conversa 01", value: 1 },
          { label: "Conversa 02", value: 2 },
          { label: "Conversa 03", value: 3 },
        ],
        di_idpostcanal: [
          { label: "Post 01", value: 1 },
          { label: "Post 02", value: 2 },
          { label: "Post 03", value: 3 },
        ],
        di_qualquerid: [
          { label: "Sim", value: 1 },
          { label: "Não", value: 2 },
        ],
      },
    },
    {
      id: 11,
      name: "Tags",
      icon: "library/icons/sgv/tag_filter.svg",
      modal: "#modalTags",
      content: "includes/modalTags.html",
      do_inputs: {
        di_tagueados: [
          { label: "Sim", value: 1 },
          { label: "Não", value: 2 },
        ],
        di_automatico: [
          { label: "Sim", value: 1 },
          { label: "Não", value: 2 },
        ],
        di_clientes: [
          { label: "Cliente 01", value: 1 },
          { label: "Cliente 02", value: 2 },
        ],
      },
    },
    {
      id: 12,
      name: "Tipos",
      icon: "library/icons/sgv/all_inbox.svg",
      modal: "#modalTipos",
      content: "includes/modalTipos.html",
      do_inputs: {},
    },
  ];
}

function getFiltersData() {
  return [
    {
      id: 1,
      ds_buscarespostas: "",
      ds_respondidos: "",
      ds_viabot: "",
      ds_verificados: "",
      ds_atendentes: "",
    },
    {
      id: 2,
      ds_respondidos: "",
    },
    {
      id: 3,
      ds_nome: "",
    },
    {
      id: 4,
      da_canais: [],
    },
    {
      id: 5,
      ds_idchamado: "",
      ds_idchamadocrm: "",
      ds_prioridade: "",
      ds_chamados: "",
      ds_sentimentoentrada: "",
      ds_sentimentosaida: "",
      ds_favorito: "",
      ds_formularios: "",
      ds_favoravel: "",
      ds_status: "",
      ds_atendentes: "",
    },
    {
      id: 6,
      ds_sentimento: "",
      ds_opcao: "",
    },
    {
      id: 7,
      da_favorito: [],
    },
    {
      id: 8,
      da_paginacao: [],
    },
    {
      id: 9,
      ds_resultadospagina: "",
    },
    {
      id: 10,
      ds_idpost: "",
      ds_idpostprincipal: "",
      ds_idconversa: "",
      ds_idpostcanal: "",
      ds_qualquerid: "",
      ds_postmoderado: "",
    },
    {
      id: 11,
      ds_tagueados: "",
      ds_automatico: "",
      ds_clientes: "",
    },
    {
      id: 12,
      da_tipos: [],
    },
  ];
}

function gettopBarRefresh() {
  return [
    {
      displayName: "Manual",
    },
    {
      displayName: "Automático",
    },
  ];
}

function gettopBarOrderBy() {
  return [
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
}

function gettopBarMood() {
  return [
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
}

function getTags() {
  return  {
    manifestacao: [
      "opção 1",
      "opção 2",
      "opção 3"
    ],
    produtos: [
      "opção 1",
      "opção 2",
      "opção 3"
    ],
    campanhas: [
      "opção 1",
      "opção 2",
      "opção 3"
    ],
    perfis: [
      "opção 1",
      "opção 2",
      "opção 3"
    ],
    crises: [
      "opção 1",
      "opção 2",
      "opção 3"
    ],
    prioridade: [
      "opção 1",
      "opção 2",
      "opção 3"
    ]
  };
}
