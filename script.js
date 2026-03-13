let cart=[]

fetch("products.json")
.then(res=>res.json())
.then(data=>{
let container=document.getElementById("products")

data.forEach(product=>{
let card=document.createElement("div")
card.className="card"

card.innerHTML=`
<img src="${product.image}" width="200">
<h3>${product.name}</h3>
<p>₹${product.price}</p>
<button onclick="addToCart('${product.name}')">Add</button>
`

container.appendChild(card)
})
})

function addToCart(item){
cart.push(item)
displayCart()
}

function removeItem(index){
cart.splice(index,1)
displayCart()
}

function displayCart(){
let cartList=document.getElementById("cart")
cartList.innerHTML=""

cart.forEach((item,i)=>{
cartList.innerHTML+=`
<li>${item}
<button onclick="removeItem(${i})">Delete</button>
</li>`
})
}

function checkout(){

let distance=prompt("Enter distance from bakery (km)")

if(distance>10){
alert("Delivery only within 10km")
return
}

alert("Order placed! Tracking: Preparing Cake 🍰")
}