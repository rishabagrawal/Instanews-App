const section='science'
$.ajax({
    method:'get',
    url:'https://api.nytimes.com/svc/topstories/v2/'+section+'.json?api-key=GEF9XRHhNY0ZEEyDvzTckQt7YaVziB1d'
})
.done(function(data){
    console.log(data);
});