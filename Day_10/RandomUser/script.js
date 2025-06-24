document.addEventListener('DOMContentLoaded', ()=>{

    function NewUser() {
        fetch('https://randomuser.me/api/')
        .then(data=>data.json())
        .then((data)=>{
            let user = data.results[0];
            console.log(user);
            document.querySelector("h1").innerText = user.name.first;
            document.querySelector("img").src = user.picture.medium;

        })
        .catch((err)=>{
            console.log("Error Occur while fetching user info");
        })
    }
    NewUser();

    document.querySelector("button").addEventListener('click',()=>{
        NewUser();
    })
})
