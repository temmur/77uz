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