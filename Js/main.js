let productData = null
let categoryMain = document.querySelector('.categoryMain')
let adsSection = document.querySelector('.ads-inner')
let readMore = document.querySelector('.readMore')
let dropDownBoxList = document.querySelector('.drop-down-box-list')

fetch('Js/products.json').then(response=> response.json()).then(data =>{
    productData = data
    getProducts()
})
function getProducts(){
   categoryMain.innerHTML = '';
   adsSection.innerHTML = ''
   if(productData !== null){
    productData.forEach((product,index) => {
        categorySection = document.createElement('div');
        categorySection.classList.add('categorySection')
        categorySection.setAttribute("dropDownList", "dropDownLists")
        categorySection.innerHTML=`

        <div class="dropdown">
        <div class="categorySection-inner">
        <div class="categoryLogo">
        <img src="${product.categoryIcon}" alt="">
    </div>
    <div class="categoryContent">
        <h3>${product.categoryName}</h3>
        <p>${product.categories[0].productsContent.length} объявлений</p>
    </div>
    <div class="categoryIcon">
       <img src="images/chevron-right.png" alt="">
    </div>
    </div>
        `
        categoryMain.appendChild(categorySection)


        adsCard= document.createElement('div')
        adsCard.classList.add('ads-card')
        adsCard.innerHTML= `
        <img src="https://assets.ajio.com/medias/sys_master/root/20220530/6OxA/6294bd8eaeb26921aff3ba3d/-1117Wx1400H-441024764-khaki-MODEL.jpg" alt="">
        <div class="adsContent">
            <span class="adsCity">г. Ташкент</span>
            <h4 class="ads-productName">Brioni whyskey</h4>
            <p class="adsNum">Tel: +998977777777</p>
            <p class="ads-productPrice">250 000<span>uzs</span></p>
        </div>
        `
        adsSection.appendChild(adsCard)
       

        // let plus = product.categories.length
        // let plus1 = product.categories[0].productsContent.length
        
        // console.log(product.categories[0].women[0].categoryName)
        // console.log(product.categories[1].categoryName)
    });
   }
}

let currentItem = 4;
        readMore.addEventListener('click', function(){
            let adsBox = [...document.querySelectorAll('.ads .container .ads-inner .ads-card')]
            for(let i = currentItem; i<currentItem + 4; i++){
                adsBox[i].style.display = 'inline-block'
            }
            currentItem +=4
            if(currentItem >= adsBox.length){
                readMore.style.display = 'none'
            }
            
        })

        // window.addEventListener("click", function(event){
        //     if(event.target.hasAttribute("dropDownList")){
        //         let listCategory = event.target.closest('.categorySection')
        //         categoryInfo={
        //             content: listCategory.querySelector('.categoryDropDown li')
        //         }

        //     }
        // })
    

        // window.addEventListener('click', function(event){
        //     if(event.target.hasAttribute('language')){
        //         let lang = document.querySelector('.mainLang')
        //          lang.innerHTML = 
        //     }
        // })

        function changeLang(value){
            let mainLang = document.querySelector('.mainLang')
            mainLang.innerHTML = value
        }

        let search = document.querySelector('.searchValue')

        let searchBtn = document.querySelector('.searchBtn').addEventListener('click', function(e){
            e.preventDefault()
           let searchValue = search.value
           localStorage.setItem('value', searchValue)
           search.value = ''
           window.location.href = "product.html"
        })

        
        $(":input").inputmask();

        $("#phone").inputmask({"mask": "(999) 999-9999"});

    function login(){
        let username = $("#Login").val()
        let password = $("#password").val()
        
        fetch('Js/userData.json').then(response => response.json())
        .then(data => {
            userList = data
           for (let i = 0;i<userList.length;i++){
            let user = userList[i]
          

            if(user.username == username && user.password == password){
                console.log("keldi")
                return " "
            }
           }
           console.log("user yoki parol xato")
        })
        
    }

    $("#submit").click(el=>{
        login()
    })

    function modalFunc(){

        let closeModal = document.querySelector('.fa-xmark')
        let modalSection = document.querySelector('.register')
        closeModal.addEventListener('click', function(){
            modalSection.style.display = 'none'
            console.log(modalSection)
        })
   
        let modalOn = document.querySelector('.modal-on')
        modalOn.addEventListener('click', function(){
            modalSection.style.display = "block"
        })

        
    }
    modalFunc()