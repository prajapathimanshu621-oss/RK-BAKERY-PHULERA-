let cart = JSON.parse(localStorage.getItem("cart")) || [];

let list = document.getElementById("cartItems");

let total = 0;

cart.forEach((item,i)=>{

let li=document.createElement("li");

li.innerHTML=item.name+" ₹"+item.price+
` <button onclick="removeItem(${i})">Delete</button>`;

list.appendChild(li);

total+=item.price;

});

document.getElementById("total").innerText="Total ₹"+total;

function removeItem(i){

cart.splice(i,1);

localStorage.setItem("cart",JSON.stringify(cart));

location.reload();

}