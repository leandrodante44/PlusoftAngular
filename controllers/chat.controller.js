function initEditor() {
  $(".wysihtml5-sandbox, .wysihtml5-toolbar").remove();
  $("#editorArea").wysihtml5({
    toolbar: {
      "font-styles": false, //Font styling, e.g. h1, h2, etc. Default true
      emphasis: true, //Italics, bold, etc. Default true
      lists: false, //(Un)ordered lists, e.g. Bullets, Numbers. Default true
      html: false, //Button which allows you to edit the generated HTML. Default false
      link: false, //Button to insert a link. Default true
      image: true, //Button to insert an image. Default true,
      color: false, //Button to change color of font
      blockquote: false,
    },
  });
  var atual = "";
  var itens = getAllElementsWithAttribute("data-wysihtml5-command");
  for (var i = 0; i < itens.length; i++) {
    atual = itens[i].getAttribute("data-wysihtml5-command");
    switch (atual) {
      case "bold":
        $(itens[i]).html(
          '<i class="zmdi zmdi-format-bold zmdi-hc-lg text-primary"></i>'
        );
        itens[i].remove();
        break;
      case "italic":
        $(itens[i]).html(
          '<i class="zmdi zmdi-format-italic zmdi-hc-lg text-primary"></i>'
        );
        itens[i].remove();
        break;
      case "underline":
        $(itens[i]).html(
          '<i class= "zmdi zmdi-format-underlined zmdi-hc-lg text-primary" ></i > '
        );
        itens[i].remove();
        break;
      case "createLink":
        $(itens[i]).html('<span class="text-primary">@</span> ');
        break;
      case "insertImage":
        $(itens[i]).addClass("insert-image");
        $(itens[i]).css("display", "none");
      default:
        break;
    }
  }
  $(".current-color").html(
    '<i class="zmdi zmdi-format-color-text zmdi-hc-lg text-primary"></i>'
  );
  $(".current-font").html(
    '<i class="zmdi zmdi-format-size zmdi-hc-lg text-primary"></i>'
  );
  $(".glyphicon-font").remove();
  $("#editorArea").show();
  $("#editorArea").val("");
  $(".picker").lsxEmojiPicker({
    twemoji: true,
    onSelect: function (emoji) {
      document
        .getElementsByClassName("wysihtml5-sandbox")[0]
        .contentWindow.document.getElementsByClassName(
          "wysihtml5-editor"
        )[0].innerHTML =
        document
          .getElementsByClassName("wysihtml5-sandbox")[0]
          .contentWindow.document.getElementsByClassName("wysihtml5-editor")[0]
          .innerHTML +
        "<span>" +
        emoji.value +
        ";</span>";
    },
  });
}
function getAllElementsWithAttribute(attribute) {
  var matchingElements = [];
  var allElements = document.getElementsByTagName("*");
  for (var i = 0, n = allElements.length; i < n; i++) {
    if (allElements[i].getAttribute(attribute) !== null) {
      // Element exists with attribute. Add to array.
      matchingElements.push(allElements[i]);
    }
  }
  return matchingElements;
}
showAlert = () => {
  $(".alert-success").show();
  setTimeout(function () {
    $(".alert-success").hide();
  }, 2000);
};

insertUser = () => {
  document
    .getElementsByClassName("wysihtml5-sandbox")[0]
    .contentWindow.document.getElementsByClassName(
      "wysihtml5-editor"
    )[0].innerHTML =
    document
      .getElementsByClassName("wysihtml5-sandbox")[0]
      .contentWindow.document.getElementsByClassName("wysihtml5-editor")[0]
      .innerHTML + " <a href='#'>@</a>";
};
