fetch("data/products.json")

.then(res=>res.json())

.then(data=>{

let container=document.getElementById("products")

data.forEach(p=>{

let card=document.createElement("div")

card.className="card"

card.innerHTML=`

<img src="${p.image}">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<button onclick="addToCart('${p.name}',${p.price})">Add to Cart</button>

`

container.appendChild(card)

})

})