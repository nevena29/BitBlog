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
     container.append(`
     <div class="posts-div">
        <ul>
           <li>
           <h3><a href="singlePost.html">${title}</a> </h3>
           <p>${body}</p>
            </li>
        </ul>
     </div>`)



}
    document.addEventListener('click', function (event) {
    
       
        if (event.target.hasAttribute("id")) {
            console.log(event.target.hasAttribute)
        let idValue = event.target.getAttribute("id");
        localStorage.setItem("id",idValue)
        }
    });
 
 })

//  return posts.map(function(post){
//     let li = createNode("li"),
//         span = createNode("span");
//     span.innerHTML = `{post.title}`
//     append(li,span);
//     append(ul,li)


.catch(function(error){
console.log(error)
})