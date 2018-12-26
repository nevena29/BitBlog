const container=$(".flex-container");

fetch("https://jsonplaceholder.typicode.com/users")
.then((resp=>resp.json()))
.then(function(data){
 console.log(data)
 for( let i= 0; i<data.length; i++){
     const name = data[i].name;
     const id = data[i].id;
     container.append(`
     <div class="posts-div">
       <h3><a class = authors author-id=`+ id + ` href="singleAuthorPage.html">${name} </a></h3>
     </div>
     `)
 }
 $(document).on("click","a",function(){
 let authorsValue = $(this).attr("author-id");
 console.log(authorsValue);
 localStorage.setItem("authorsId",authorsValue);
 window.location.href = "singleAuthorPage.html"
 })
})