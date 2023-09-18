let productImages = [
    'https://m.media-amazon.com/images/I/61ClL2FC6VL._SX679_.jpg',
     "https://m.media-amazon.com/images/I/41RKiGBd0PL.jpg",
     "https://m.media-amazon.com/images/I/61zjDlfIOYL._SX679_.jpg",
     "https://m.media-amazon.com/images/I/61v6iQM9lKL._SX679_.jpg",
     "https://m.media-amazon.com/images/I/51L7rYadFsL._SX679_.jpg"
]

let imgBanner = document.querySelector('.imgVissible')
function imgAppear(){
    window.addEventListener('click', function(e){
      if(e.target.hasAttribute('image')){
        
            let img = e.target.closest('img')
            imgBanner.src = img.src
      }
    })
}
imgAppear()
let i = 0
imgBanner.src = productImages[i]
let productNextSlide = document.querySelector('.next').addEventListener('click', function(event){
    i++
    if(i > productImages.length -1){
        i=0
    }
    imgBanner.src = productImages[i]
})

let productPrevSlide = document.querySelector('.prev').addEventListener("click", function(){
   i--
   if(i<0){
    i = productImages.length - 1
   }
   imgBanner.src = productImages[i]
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