const menuBtn = document.querySelector('.menu__burger')
const mobileMenu = document.querySelector('.menu')

const tabs1 = new meTabs('tab', {
    isChaged: () => {}
})

// /* фокус на таб */
// tabs1.switchTabs(document.querySelector('#tab2'))

$('.owl-carousel').owlCarousel({
    // loop:true,
    margin:20,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})


const openMenu = () => {
    menuBtn.classList.toggle('menu__burger-active')
    mobileMenu.classList.toggle('menu-active')
}

menuBtn.addEventListener('click', openMenu)