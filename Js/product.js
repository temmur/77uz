let productSection = document.querySelector('.productList')
product = null;
// let productBox = document.querySelectorAll('.productBox')
fetch('Js/products.json').then(response => response.json()).then(data => {
    product = data
    fetchProducts()
})

let i = 0
function fetchProducts() {
    productSection.innerHTML = ""

    let result = [];
    let products = product.filter((e) => {
            subcategory = e.categories.filter((e)=>{
                return e.category == localStorage.getItem('value')
            })
            if (subcategory.length != 0){
                result.push(subcategory);
            }
            return subcategory.length != 0

        // return e.categories[0].category == localStorage.getItem('value')
    })

   
    if (result.length != 0) {
        let x = localStorage.getItem('value')
      
            result.forEach(product => {
                for (i of product) {
                    let b = 0
                    for (b of i.productsContent) {
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
                        let btnBlock = document.querySelector(".btnBlock").addEventListener('click', function (e) {
                            productSection.style.display = "block"
                            productBox.classList.add('active')
                        })
                        let btnGrid = document.querySelector('.btnGrid').addEventListener('click', function () {
                            productSection.style.display = "flex"
                            productBox.classList.remove('active')
                        })
                    }
                }
            });
        
    } else {
  
        let noResult = document.createElement('div')
        noResult.classList.add('noResult')
        noResult.innerHTML = `
<img src="images/Search Error (Solid).png"/>
<h2>Ничего не найдено</h2>
<p>Упс! Мы не смогли найти ни одного подходящего результата по вашему запросу</p>
`
        productSection.appendChild(noResult)
    }
}
let filterSection = document.querySelector('.filterSection')

let filter = document.querySelector('.fa-filter').addEventListener('click', function () {
    filterSection.style.display = 'block'
})
let closeFilter = document.querySelector('.btn').addEventListener('click', function () {
    filterSection.style.display = 'none'
})

function getLocalStorage() {


}

getLocalStorage()

let search = document.querySelector('.search')
let searchBtn = document.querySelector('.searchBtn').addEventListener('click', function(e){
    e.preventDefault()
   let searchValue = search.value
   localStorage.setItem('value', searchValue)
//    search.value = ''
   fetchProducts()
   console.log("keldi")
})