$(function()
  {
      var currentId;
      
      //Funciones de test1
      $("body").bind("tap", function(e) {
                $("#status").text("Presionaste la pantalla");
            });
      
      $("body").bind("taphold", function(e) {
          $("#status").text("Presionaste mas de 1 segundo la pantalla");
      });
      
      //Funciones de test2
      $("body").bind("swipe", function(e) {
          $("#status2").append("Deslizaste tu dedo en la pantalla<br>");
      });
      
      $("body").bind("swipeleft", function(e) {
          $("#status2").append("Deslizaste a la izquierda<br>");
      });
      
      $("body").bind("swiperight", function(e) {
          $("#status2").append("Deslizaste a la derecha<br>");
      });
      
      //Funciones para Test3
      $("body").bind("swipeleft swiperight", function(e) {
          var pagina = $.mobile.activePage[0];
          var dir = e.type;
          
          if (pagina.id == "test1" && dir == "swipeleft")
          {
              $.mobile.changePage("#test2");
          }
          
          if (pagina.id == "test2" && dir == "swiperight")
          {
              $.mobile.changePage("#test1");
          }
      });
      
      //Funciones para Test4
      $("body").bind("scrollstart", function(e) {
          $("#status4").append("Start<br>");
      });
      
      $("body").bind("scrollstop", function(e) {
          $("#status4").append("Done!<br>");
      });
      
      //Funciones para Test5
      $("window").bind("orientationchange", function(e, type) {
          $("#status5").html("Orientation changed to " + e.orientation);
      });
      
      //Funciones para HomePage
      $("#homepage").bind("pagebeforecreate", function(e) {
          //load in our people
          $.get("people.json", {}, function(res, code) {
              var s = "";
              for (var i=0; i < res.length; i++)
              {
                  s+= "<li><a href='#personpage' id='" + res[i].id + "'>" + res[i].name + "</a></li>";
              }
              
              //$("#peoplelist").html(s).listview("refresh");
              $("#homepage ul").html(s).listview("refresh");
          }, "json");
      });
      
      //Funciones para personPage
      $("#personpage").bind("pagebeforecreate", function(e) {
          var thisPage = $(this);
          //var thisUrl = thisPage.data("url");
          //var thisId = thisUrl.split("=")[1];
          var thisId = $(this).attr("id");
          alert(thisId);
          $.get("person" + thisId + ".json", {}, function(res, code)
                {
                    $("h1", thisPage).text(res.name);
                    s = "<p>" + res.name + " is a " + res.gender + " and likes " + res.hobbies + "</p>";
                    $("#contentArea", thisPage).html(s);
                }, "json");
      });
      
      /*$("#homepage ul").bind("tap", function(e) {
          currentId = $(this).attr("li a id");
          alert(currentId);
      });
      */
      
  });