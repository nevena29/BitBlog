const url1 = "https://jsonplaceholder.typicode.com/posts"

fetch(url1)
.then((resp)=>resp.json())
.then(function(data){
    console.log(data)
});