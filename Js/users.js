let products
fetch("Js/products.json").then(response => response.json())
.then(data=>{
    products = data
    fetchData()
})
let products_section = document.querySelector('.products-inner')

function fetchData(){
    if(products !== null){
        products.forEach(products => {
            let b =0
                for(b of products.categories){
                    for(c of b.productsContent){
                       if(c.userInfo.userName === "Timur"){
                        let userProducts = document.createElement('div')
                        userProducts.classList.add('productBox')
                        userProducts.innerHTML = `
                       <a href="product-inner.html">
                       <div class="productImg">
                       <img src="https://m.media-amazon.com/images/I/61ClL2FC6VL._AC_UF1000,1000_QL80_.jpg" alt="">
                       </div>
                        <div class="productContent">
                           <div class="productContent-inner">
                           <p class="city">г. Ташкент</p>
                           <h4 class="productName">Кепка US-Polo</h4>
                           </div>
                           <div class="productContent-inner">
                           <p class="tel">+99897 777-77-37</p>
                           <h4 class="price">2 549 000 <span>uzs</span></h4>
                           </div>
                        </div>
                       </a>
                        `
                        products_section.appendChild(userProducts)
                       }
                    }
            }
        });
    }
 
    
}