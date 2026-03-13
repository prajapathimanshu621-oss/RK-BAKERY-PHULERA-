function placeOrder(){

let d=document.getElementById("distance").value;

if(d>10){

alert("Delivery only within 10 km");

return;

}

alert("Order Successful 🎉");

localStorage.removeItem("cart");

window.location="tracking.html";

}