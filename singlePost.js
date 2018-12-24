const userIdPost = localStorage.getItem("myPost");
console.log(userIdPost);
const url1 ="https://jsonplaceholder.typicode.com/posts/" + userIdPost;

fetch(url1)
.then((resp)=>resp.json())
.then(function(data){
    console.log(data)
});