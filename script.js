let scrollImg = document.querySelector(".factoryImageHomePage0")
let factoryImageContainer = document.querySelector(".factoryImageHomePage0Container")

let aboutImages = document.querySelectorAll(".aboutImg");

document.addEventListener('scroll', () => {
    let scrollDistance = window.pageYOffset
    // const rect = scrollImg.getBoundingClientRect().top + window.scrollY
    // if(scrollDistance < rect){
    //     scrollImg.width = ((scrollDistance/rect) * factoryImageContainer.clientWidth);
    // }else{
    //     scrollImg.width = factoryImageContainer.clientWidth;
    // }

    // aboutImages.forEach(img => {
    //     const distToReveal = 1
    //     if(scrollDistance < img.getBoundingClientRect().top - distToReveal){
    //         img.style.opacity = "0"
    //     }else{
    //         img.style.opacity = "1"

    //     }

    //     console.log("Scroll Distance: " + scrollDistance + "imgLocation" + img.getBoundingClientRect().top)
    // });


})

