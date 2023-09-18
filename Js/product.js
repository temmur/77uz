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
                let colorBlock = document.querySelectorAll('.btnBlock svg path')
                let colorGrid = document.querySelectorAll('.btnGrid svg path')
                      
                        let btnBlock = document.querySelector(".btnBlock").addEventListener('click', function (e) {
                           colorBlock.forEach((block)=>{
                            block.style.stroke = "#388FF3"
                           })
                           colorGrid.forEach((block)=>{
                            block.style.stroke = "rgb(213, 216, 219)"
                           })
                            productSection.style.display = "block"
                            productBox.classList.add('active')
                        })
                        let btnGrid = document.querySelector('.btnGrid').addEventListener('click', function () {
                            colorBlock.forEach((block)=>{
                                block.style.stroke = "rgb(213, 216, 219)"
                               })
                               colorGrid.forEach((block)=>{
                                block.style.stroke = "#388FF3"
                               })
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



// registration section 

$(":input").inputmask();

$("#phone").inputmask({ "mask": "(999) 999-9999" });

function login() {
    let username = $("#Login").val()
    let password = $("#password").val()
    let inputError = document.querySelectorAll(".registerCard form input")
    fetch('Js/userData.json').then(response => response.json())
        .then(data => {
            userList = data
            for (let i = 0; i < userList.length; i++) {
                let user = userList[i]


                if (user.username == username && user.password == password) {
                    document.querySelector('.register').style.display = "none"
                    return " "
                }
            }
            console.log("user yoki parol xato")
            let passError = document.querySelector('.passwordValue')
            let userError = document.querySelector('#Login')
            userError.classList.add('valueError')
            passError.classList.add('valueError')
        })

}

$("#submit").click(el => {
    login()
})

function modalFunc() {

    let closeModal = document.querySelector('.fa-xmark')
    let modalSection = document.querySelector('.register')
    closeModal.addEventListener('click', function () {
        modalSection.style.display = 'none'
        console.log(modalSection)
    })

    let modalOn = document.querySelector('.headerLogin')
    modalOn.addEventListener('click', function () {
        modalSection.style.display = "block"
    })


}
modalFunc()



let passwordVal = document.querySelector(".passwordValue input")

let hidePass = document.querySelector('.passwordValue svg').addEventListener('click', function () {
    if (passwordVal.type === "password") {
        passwordVal.type = "text";
    } else {
        passwordVal.type = "password";
    }
})