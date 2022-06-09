let scrollImg = document.querySelector(".factoryImageHomePage0")
let factoryImageContainer = document.querySelector(".factoryImageHomePage0Container")

document.addEventListener('scroll', () => {
    let scrollDistance = window.pageYOffset
    const rect = scrollImg.getBoundingClientRect().top + window.scrollY
    if(scrollDistance < rect){
        scrollImg.width = ((scrollDistance/rect) * factoryImageContainer.clientWidth);
    }else{
        scrollImg.width = factoryImageContainer.clientWidth;
    }
})

