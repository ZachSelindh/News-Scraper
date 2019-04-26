let newsSource;
let newsBias;

// Re-colors dropdown button for bias coloring.
$(".dropdown-menu li").click(function() {
  $("#selected").text($(this).text());
  newsSource = $(this).attr("data-id");
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

$("#scrape-button").click(function() {
  console.log(newsSource);
  $.get("/scrape/" + newsSource + "", function(data, status) {
    console.log("Data: " + data + " Status: " + status);
  });
});
