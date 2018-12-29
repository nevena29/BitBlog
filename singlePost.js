const idPost = localStorage.getItem("myPost");

const container=$(".flex-container");
const url1 ="https://jsonplaceholder.typicode.com/posts/" + idPost;

fetch(url1)
.then((resp)=>resp.json())
.then(function(data){
    console.log(data)
 
    const title = data.title;
    const body = data.body;
    let   singleId = data.id;
 container.append(
         `<div class="secondPage"> 
             <h2>${title} </h2>
            <p> ${body} </p>
         
         </div>`
     )
  
fetchSameAuthorPosts(singleId);
    

 });
const url2 = "https://jsonplaceholder.typicode.com/posts?userId=" + idPost
  function fetchSameAuthorPosts(singleId){
    fetch(url2)
    .then((resp)=>resp.json())
    .then(function(authorsData){
        for(i=0; i<authorsData.length;i++){
            const title = authorsData[i].title
            const body = authorsData[i].body;
            const listUsersId = authorsData[i].id
            if(singleId !== listUsersId){
            container.append(
                `
                   <h2><a class="singleTitles" href="#">${title}</a> </h2>
                `
            )
        } 
        $(document).on("click","a",function(singleId){
          if(singleId!==listUsersId){

          }
        })
        }


  })
}
