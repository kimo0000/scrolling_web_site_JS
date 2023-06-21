const content = document.querySelector('.content');
const title = document.querySelector('.title');
const stars = document.querySelector('#stars')
const moon = document.querySelector('#moon')
const mountain3 = document.querySelector('#mountain3')
const mountain4 = document.querySelector('#mountain4')
const river = document.querySelector('#river')
const boat = document.querySelector('#boat')
const mountain7 = document.querySelector('#mountain7')

window.addEventListener('scroll', () => {
    // console.log(scrollY)
    moon.style.top = `${scrollY*3}px`
    mountain3.style.top = `${scrollY*3}px`
    mountain4.style.top = `${scrollY}px`
    boat.style.left = `${scrollY*2}px`
    mountain7.style.top = `${scrollY}px`
    if(scrollY > 170) {
      content.style.background = "linear-gradient(#222, #fff)"
         title.style.opacity = 1
         title.style.fontSize = `${scrollY - 100}px`
         if(scrollY > 250) {
            title.style.opacity = 0
         }
    } else {
        content.style.background = "linear-gradient(#000, #111)"
        title.style.opacity = 0
    }
})
