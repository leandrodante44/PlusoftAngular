function arrayRemove(arr, value) {
  return arr.filter(function (ele) {
    return ele != value;
  });
}

/* ICONS FILTER ONHOVER OPACITY CONTROL */
function hoverFiltersIcons(ctx) {
  debugger;
  try {
    ctx
      .getElementsByTagName("object")[0]
      .getSVGDocument()
      .getElementsByTagName("svg")[0]
      .getElementsByTagName("g")[0]
      .getElementsByTagName("path")[0]
      .setAttribute("fill-opacity", "1");
  } catch (e) {
    try {
      ctx
        .getElementsByTagName("object")[0]
        .getSVGDocument()
        .getElementsByTagName("svg")[0]
        .getElementsByTagName("path")[0]
        .setAttribute("fill-opacity", "1");
    } catch (e) {}
  }
}
function exitFilterIcons(ctx) {}
function initOpacityFiltersIcons(ctx) {
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
}
$(function () {
  setTimeout(function () {
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
    initOpacityFiltersIcons();
  }, 1000);
});
