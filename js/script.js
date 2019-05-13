$(function() {
$("#selection-bar").on("change", function() {
    
  $(".site-header").addClass("shrink");
  $(".stories").addClass("grow");
  const section = $(this).val();
  if (section !== "") {
    $(".stories").html("");
    $(".stories").append('<div class="loading" ><img class="loading-gif" src="images/ajax-loader.gif"/></div>');
    
    
    $.ajax({
      method: "get",
      url:
        "https://api.nytimes.com/svc/topstories/v2/" +
        section +
        ".json?api-key=GEF9XRHhNY0ZEEyDvzTckQt7YaVziB1d"
      
    }).done(function(data) {
      const filterImage = data.results.filter(function(event) {
        if (event.multimedia[4] !== undefined) {
          return true;
        } else {
          return false;
        }
      });
      const sliceData = filterImage.slice(0, 12);
      console.log(data);
      $(".stories").html("");
      $.each(sliceData, function(key, value) {
        const text = value.abstract;
        const pic = value.multimedia[4].url;
        const url = value.url;
        $(".stories").append(`<div class="article">
            <p class="content"><a href=${url} target="_blank">${text}</a></p> <img class="background-hover" src="${pic}" />
        </div>`);
      });
    });
  } // end of if
});
});
