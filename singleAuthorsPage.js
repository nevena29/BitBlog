const authorSingle = localStorage.getItem("authorsId");
const container = $(".flex-container");

const url3 = "https://jsonplaceholder.typicode.com/users/" + authorSingle;
fetch(url3)
.then((resp=>resp.json()))
.then(function(data){
    console.log(data);
    
    const name = data.name;
    const username = data.username;
    const email = data.email;
    const phone = data.phone;
    const street = data.address.street;
    const city = data.address.city;
     const companyName = data.company.name;
     const slogan = data.company.catchPhrase;
    container.append(`
    <div class="authorsCard">
       <h1>${name} </h1> <br>
       <span> Username:${username} <br>
              Email: ${email} <br>
              Phone:${phone} <br>
             </span>

    </div>`)
    container.append(`
    <div class="authorsCard">
       <h1>Address </h1> <br>
       <span> Street:${street} <br>
              City: ${city} <br>
       </span>

    </div>`)
    container.append(`
    <div class="authorsCard">
       <h1>Company </h1> <br>
       <span> Name:${companyName} <br>
              City: ${slogan} <br>
       </span>

    </div>`)
    
    
})