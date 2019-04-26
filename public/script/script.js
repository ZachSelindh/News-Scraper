let newsSource;
let newsBias;

$(".dropdown-menu li").click(function() {
  $("#selected").text($(this).text());
  newsSource = $(this).attr("news-source");
  newsBias = $(this).attr("bias");
  if (newsBias === "right") {
    $("#news-drop").addClass("btn-danger");
    $("#news-drop").removeClass("btn-primary");
    $("#news-drop").removeClass("btn-info");
  } else if (newsBias === "left") {
    $("#news-drop").removeClass("btn-danger");
    $("#news-drop").addClass("btn-primary");
    $("#news-drop").removeClass("btn-info");
  } else if (newsBias === "center") {
    $("#news-drop").removeClass("btn-danger");
    $("#news-drop").removeClass("btn-primary");
    $("#news-drop").addClass("btn-info");
  }
});
