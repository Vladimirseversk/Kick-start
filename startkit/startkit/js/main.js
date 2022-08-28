//При прокрутке страницы вниз фиксируем хедер


document.addEventListener('DOMContentLoaded', () => {
    // С помощью слушателя DOMContentLoaded ждем когда HTML загрузиться в браузер

// Етот слушатель проверяет насколько пикселей был совершен скрол
    window.addEventListener('scroll',()=>{
        let headerTopContainer= document.querySelector('.header-top__container'); // Елемент который бедет фиксироваться
        let header = document.querySelector('.header-top').offsetTop;// Определяем вісоту хедера
        if (window.pageYOffset >= header) {
            // если отсуп от верха єкрана больше высоты хедера то хедеру добаляем клас sticky
            headerTopContainer.classList.add("sticky")
        } else {
             // если отсуп от верха єкрана меньше высоты хедера то у хедера удаляем клас sticky
            headerTopContainer.classList.remove("sticky");
        }
    })
    let mobileMenu = document.querySelector('.header-top__menu')// Мобильное меню
    let burger = document.querySelector('.menu-burger__block')// Значек бургенра мобильное меню
        burger.addEventListener('click', function () {
            // Добавляем-Убираем клас актив при нажатии
            this.classList.toggle("active");
            mobileMenu.classList.toggle("active");
        })
   
})