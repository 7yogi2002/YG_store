let box=document.getElementById("details");

let params=new URLSearchParams(window.location.search);
let id=params.get("id");

fetch(`https://fakestoreapi.com/products/${id}`)
.then(res=>res.json())
.then(product=>{

box.innerHTML=`
<div class="card">
<img src="${product.image}">
<h2>${product.title}</h2>
<p class="product_description">${product.description}</p>
<h3>₹ ${product.price}</h3>
<button id="cartBtn" class="cartBtn">Add to Cart</button>
</div>
`;

document.getElementById("cartBtn")
.addEventListener("click",()=>{

let cart=JSON.parse(localStorage.getItem("cart"))||[];

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to cart ✅");

});

});
