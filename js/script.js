
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
        $(".stories").append(`
            <p>${text}</p>
        `);
        $(".stories").append(`
        <img src= ${pic} >`);

    })
})   
});

