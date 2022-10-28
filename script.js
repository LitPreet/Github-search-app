let btn = document.querySelector(".btn");
const url = 'https://api.github.com/users/';
const notfound = document.getElementById("notfound");
const dp = document.getElementById("dp");
const username = document.getElementById("username");
const name = document.getElementById("name");
const bio = document.querySelector(".biopara");
const locations = document.querySelector(".location");
const follower = document.querySelector(".follower");
const following = document.querySelector(".following");
const repo = document.getElementById("repo");
const stars = document.getElementById("star");
const arrow = document.getElementById("arrow");
const container = document.querySelector(".container");
const p_url = document.querySelector(".p_url")
arrow.addEventListener("click",function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })
btn.addEventListener("click",function scrollWin() {
    window.scrollTo(0, 700);
   
  });

btn.addEventListener("click",(e)=>
{
    e.preventDefault();
let search = document.getElementById("search").value;
let originalName = search.split(' ').join('');

fetch(url+originalName)
.then((resp)=>resp.json())
.then((data)=>
{


   dp.innerHTML = `<img src="${data.avatar_url}" width="100%" style = "border-radius:50%;">`
   console.log(data)
   username.innerHTML = `@${data.login}`
   name.innerHTML = `${data.name}`;
   bio.innerHTML = `<span class="bio">BIO: </span>${data.bio}`;
   locations.innerHTML = `<img src="./img/map.png" width="20px"> ${data.location}`
   p_url.innerHTML = ` Visit profile : <a href="${data.html_url}" target="_blank">${data.login}</a>`;
   follower.innerHTML =  `<img src="./img/follower.png" width="20px"> Followers : ${data.followers}`;
   following.innerHTML = `<img src="./img/check.png" width="20px">Following : ${data.following}`;
   repo.innerHTML = `${data.public_repos}`;

if(!data.login)
{
notfound.innerHTML = `<h2>OOPS! 😥Profile not found! Enter valid username! </h2>`
container.style.display = "none";


}

   
})
search.value = " ";

})