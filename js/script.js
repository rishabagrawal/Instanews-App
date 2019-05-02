
$('#selection-bar').on('change', function(){
    const section = $(this).val();
    if (section !== '')
 
$.ajax({
    method:'get',
    url:'https://api.nytimes.com/svc/topstories/v2/'+section+'.json?api-key=GEF9XRHhNY0ZEEyDvzTckQt7YaVziB1d'    
    // url:'https://api.nytimes.com/svc/topstories/v2/'+section+'.json?api-key=GEF9XRHhNY0ZEEyDvzTckQt7YaVziB1d'
})
.done(function(data){
    console.log(data);
    $(".stories").html("");
    $.each(data.results, function(key, value){
        const text = value.abstract;
        const pic = value.multimedia[4].url;
        const title = value.title;
        const url = value.url;
        $(".stories").append(`<div>
            <p><a href=${url} target=_blank>${text}</a></p> <img src= ${pic} ><h1>${title}</h1>
        </div>`);
 
        

    })
})   
});

