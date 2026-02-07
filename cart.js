let box=document.getElementById("cart");

let cart=JSON.parse(localStorage.getItem("cart"))||[];

function loadCart(){

box.innerHTML="";

if(cart.length===0){
box.innerHTML="<h2 class='empty_cart'>Cart is empty 😢</h2>";
return;
}

cart.forEach((item,index)=>{

let div=document.createElement("div");
div.className="card";

div.innerHTML=` 
<img src="${item.image}">
<h3>${item.title}</h3>
<p>₹ ${item.price}</p>
<button class="delete_btn" >Delete</button>
`;

div.querySelector("button")
.addEventListener("click",()=>{

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

loadCart();

});

box.appendChild(div);

});

}

loadCart();
