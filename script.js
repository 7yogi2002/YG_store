let container = document.getElementById("products");
let search = document.getElementById("search");

let allProducts = [];

// FETCH PRODUCTS
fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(data=>{
    allProducts = data;
    showProducts(data);
});

function showProducts(products){

    container.innerHTML="";

    products.forEach(product=>{

        let card = document.createElement("div");
        card.className="card";

        card.innerHTML=`
            <img src="${product.image}">
            <h3 class="text_title">${product.title.substring(0,40)}</h3>
            <p class="text_prices"><b>₹ ${product.price}</b></p>

            <button class="viewBtn">View</button>
            <button class="cartBtn">Add to Cart</button>
        `;

        // VIEW
        card.querySelector(".viewBtn")
        .addEventListener("click",()=>{
            window.location.href=`product.html?id=${product.id}`;
        });

        // ADD TO CART
        card.querySelector(".cartBtn")
        .addEventListener("click",()=>{
            addToCart(product);
        });

        container.appendChild(card);
    });
}

// SEARCH
search.addEventListener("keyup",()=>{

    let value = search.value.toLowerCase();

    let filtered = allProducts.filter(p=>
        p.title.toLowerCase().includes(value)
    );

    showProducts(filtered);
});

// CART
function addToCart(product){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart",JSON.stringify(cart));

    alert("Added to cart ✅");
}
