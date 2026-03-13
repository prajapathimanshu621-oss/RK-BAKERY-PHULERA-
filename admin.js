let products = JSON.parse(localStorage.getItem("products")) || []

function addCake(){

let name = document.getElementById("cakeName").value
let price = document.getElementById("cakePrice").value
let image = document.getElementById("cakeImage").files[0]

let reader = new FileReader()

reader.onload = function(){

let cake = {

name:name,
price:price,
image:reader.result

}

products.push(cake)

localStorage.setItem("products",JSON.stringify(products))

displayProducts()

}

reader.readAsDataURL(image)

}

function displayProducts(){
let circle = new google.maps.Circle({

map:map,
radius:10000,
fillColor:"#ff4d6d",
center:bakery

})
let list = document.getElementById("productList")

list.innerHTML=""

products.forEach((p,i)=>{

list.innerHTML+=`

<div>

<img src="${p.image}" width="100">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<button onclick="deleteCake(${i})">Delete</button>

</div>

`

})

}

function deleteCake(i){

products.splice(i,1)

localStorage.setItem("products",JSON.stringify(products))

displayProducts()

}

displayProducts()
let visits = localStorage.getItem("visits") || 0

visits++

localStorage.setItem("visits",visits)

document.getElementById("visitors").innerText = visits
function initMap(){

let bakery = {lat:26.9124, lng:75.7873}

let map = new google.maps.Map(
document.getElementById("map"),
{
zoom:13,
center:bakery
}
)

let marker = new google.maps.Marker({
position:bakery,
map:map,
title:"RK Bakery"
})

}
window.onload = initMap
