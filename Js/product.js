let productSection = document.querySelector('.productList')
product = null;
// let productBox = document.querySelectorAll('.productBox')
fetch('Js/products.json').then( response => response.json()).then(data =>{
    product = data
    fetchProducts()
})


function fetchProducts(){
   if(product !== null){
         product.forEach(product => {
        let productBox = document.createElement('div')
        productBox.classList.add('productBox')
        productBox.innerHTML = `
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
        productSection.appendChild(productBox)

        let btnBlock = document.querySelector(".btnBlock").addEventListener('click', function(e){
            productSection.style.display = "block"
            productBox.classList.add('active')
        })
        let btnGrid = document.querySelector('.btnGrid').addEventListener('click', function(){
            productSection.style.display = "flex"
            productBox.classList.remove('active')
        })
    });
   }
}
    let filterSection = document.querySelector('.filterSection')

let filter = document.querySelector('.fa-filter').addEventListener('click',function(){
    filterSection.style.display = 'block'
})
let closeFilter = document.querySelector('.btn').addEventListener('click', function(){
    filterSection.style.display = 'none'
})