const container=$(".flex-container");
 

const ul = document.getElementById("posts");
const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
.then((resp)=>resp.json())
.then(function(data){
    console.log(data)
 for(let i = 0; i< 10; i++){
     const title = data[i]["title"];
     const body = data[i]["body"];
     const id = data[i]["id"];
     container.append(`
     <div class="posts-div ">
        <ul>
        <li>
          <h3>
          <a class=show_item show_id=`+ id + `  href="singlePost.html">${title}</a>  
          </h3>
          <p>${body}</p>
         </li>
        </ul>
     </div>`)

 //    <a class="id" ${id}   href="singlePost.html">${title}</a> 

    }
         $(document).on("click","a",function(){
         let value = $(this).attr("show_id");
         console.log(value);
         localStorage.setItem("myPost", value);
         window.location.href = "singlePost.html"
    
    });
    
 
 })




.catch(function(error){
console.log(error)
})