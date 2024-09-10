fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>{
    let allProducts = json
    console.log(allProducts)
    let productListElement = document.getElementById("product-list")

for (let i = 0; i < allProducts.length; i++){

    let productElement = document.createElement("div")
    productElement.classList.add("col-12")
    productElement.classList.add("col-sm-6")
    productElement.classList.add("col-md-4")
    productElement.classList.add("col-lg-4")
    productElement.classList.add("col-xl-3")
    productElement.classList.add("col-xxl-3")
    
    
    productElement.innerHTML = `<div class="card">
                            <img src="${allProducts[i].image}" class="card-img-top product-image" alt="...">
                            <div class="card-body">
                              <h5 class="card-title product-title">${allProducts[i].title}</h5>
                              <p class = "text-success">$ ${allProducts[i].price}</p>
                              <p class="card-text product-description">${allProducts[i].description}</p>
                              <a href="Productdetails.html" class="btn btn-warning">View Product</a>
                              <a href="cart.html" class="btn btn-primary">Add to cart</a>
                            </div>
                        </div>`
    
    productListElement.appendChild(productElement)
}   
})


