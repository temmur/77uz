let productData = null
let categoryMain = document.querySelector('.categoryMain')
let adsSection = document.querySelector('.ads-inner')
let readMore = document.querySelector('.readMore')
let dropDownBoxList = document.querySelector('.drop-down-box-list')

fetch('Js/products.json').then(response => response.json()).then(data => {
    productData = data
    getProducts()
})

let arr = []
function renderHistory(list) {
    let el = document.querySelector("#historyList");
    el.innerHTML = ""
    list.forEach(element => {
        el.innerHTML += `<li class="history-list"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M9.57924 2.26159C9.75138 1.9128 10.2487 1.9128 10.4209 2.26159L12.6492 6.77669C12.7176 6.9152 12.8497 7.0112 13.0026 7.03341L17.9853 7.75744C18.3702 7.81337 18.5239 8.28639 18.2453 8.55788L14.6398 12.0724C14.5292 12.1802 14.4787 12.3355 14.5049 12.4878L15.356 17.4504C15.4218 17.8337 15.0194 18.126 14.6751 17.9451L10.2184 15.602C10.0817 15.5302 9.9184 15.5302 9.78169 15.602L5.32501 17.9451C4.98074 18.126 4.57837 17.8337 4.64412 17.4504L5.49526 12.4878C5.52137 12.3355 5.4709 12.1802 5.3603 12.0724L1.75478 8.55788C1.47625 8.28639 1.62995 7.81337 2.01486 7.75744L6.99757 7.03341C7.15042 7.0112 7.28255 6.9152 7.35091 6.77669L9.57924 2.26159Z" stroke="#FAAC36" stroke-width="1.5" stroke-linejoin="round"/>
        </svg>
        ${element}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9.5999 7.20001L14.3999 12L9.5999 16.8" stroke="#B8BBBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
    </li>`
    });
}



function getProducts() {
    categoryMain.innerHTML = '';
    adsSection.innerHTML = ''
    if (productData !== null) {
        productData.forEach((product, id) => {
            let c = ``

            product.categories.forEach((el) => {
                c += `<li><a href="">${el.category}</a><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path d="M8.33337 6L12.3334 10L8.33337 14" stroke="#B8BBBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></li>`
            })

            // categorySection.setAttribute("dropDownList", "dropDownLists")
            let categorySection = `
        
            <div class='categorySection'>
                <div class="dropdown" onclick='openDesc(${id})'>
                    <div class="categorySection-inner">
                        <div class="categoryLogo">
                            <img src="${product.categoryIcon}" alt="">
                        </div>
                        <div class="categoryContent">
                            <h3>${product.categoryName}</h3>
                            <p>${product.categories[0].productsContent.length} объявлений</p>
                        </div>
                        <div class="categoryIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M8 6L12 10L8 14" stroke="#B8BBBD" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
            
                </div>
       </div>

     
            <ul  class="categoryDropDown hidden desc" id='desc-${id}'>
            ${c}
             </ul>
           
       
        `
            listDownFunc(product)
            categoryMain.innerHTML += categorySection


            adsCard = document.createElement('div')
            adsCard.classList.add('ads-card')
            adsCard.innerHTML = `
        <a  href="product-inner.html">
        <img src="https://assets.ajio.com/medias/sys_master/root/20220530/6OxA/6294bd8eaeb26921aff3ba3d/-1117Wx1400H-441024764-khaki-MODEL.jpg" alt="">
        <div class="adsContent">
            <span class="adsCity">г. Ташкент</span>
            <h4 class="ads-productName">Brioni whyskey</h4>
            <p class="adsNum">Tel: +998977777777</p>
            <p class="ads-productPrice">250 000<span>uzs</span></p>
        </div></a>
        `
            adsSection.appendChild(adsCard)
        });
    }
}

let currentItem = 4;
readMore.addEventListener('click', function () {
    let adsBox = [...document.querySelectorAll('.ads .container .ads-inner .ads-card')]
    for (let i = currentItem; i < currentItem + 4; i++) {
        adsBox[i].style.display = 'inline-block'
    }
    currentItem += 4
    if (currentItem >= adsBox.length) {
        readMore.style.display = 'none'
    }

})

function changeLang(value) {
    let mainLang = document.querySelector('.mainLang')
    mainLang.innerHTML = value

}

let search = document.querySelector('.searchValue')

let searchBtn = document.querySelector('.searchBtn').addEventListener('click', function (e) {
    e.preventDefault()
    let searchValue = search.value
    if (searchValue == "") {
        return
    }
    localStorage.setItem('value', searchValue)
    search.value = ''

    historyArray = localStorage.getItem("history") ? JSON.parse(localStorage.getItem("history")) : []
    historyArray.unshift(searchValue)

    let history = historyArray.slice(0, 7);

    localStorage.setItem("history", JSON.stringify(history))

    window.location.href = "product.html"
})


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

let historySection = document.querySelector('.historyList')

$("#searchInput").click(() => {
    renderHistory(JSON.parse(localStorage.getItem("history")))
    historySection.style.display = "block"
})


historySection.addEventListener('click', function () {
    historySection.style.display = 'none'
})

function listDownFunc(product) {

}

let nowCatergory = 1

function openDesc(id) {
    document.querySelector(`#desc-${nowCatergory}`).classList.add("hidden");
    nowCatergory = id
    let el = document.querySelector(`#desc-${id}`)
    el.classList.remove("hidden")
}


