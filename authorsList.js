const container=$(".flex-container");

fetch("https://jsonplaceholder.typicode.com/users")
.then((resp=>resp.json()))
.then(function(data){
 console.log(data)
 for( let i= 0; i<data.length; i++){
     const name = data[i].name;
     container.append(`
     <div class="posts-div">
       <h3>${name}</h3>
     </div>
     `)
 }
})