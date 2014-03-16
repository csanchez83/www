$("body").bind("tap", function(e) {
    alert("Hiciste clic");
    $("#status").text("Pulsaste la pantalla y generaste un evento");
});

$("body").bind("taphold", function(e) {
    $("#status").text("Pulsaste la pantalla mas de un segundo y generaste un evento taphold");
});
            