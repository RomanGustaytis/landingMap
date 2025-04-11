import "../styles/main.scss";

document.addEventListener('DOMContentLoaded', () => {
    initDropdownToggle();
    initRegionMenu();
    initOfficeRegionToggle();
    initBusinessToggle();
    initSwiper();
});

// Toggle выпадающего меню офисов
function initDropdownToggle() {
    const menu = document.querySelector('.menu');
    const dropdown = document.querySelector('.js-office-dropdown');
    const toggleBtn = document.querySelector('.js-office-dropdown-toggle');

    if (!dropdown || !toggleBtn || !menu) return;

    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('office-dropdown--active');
        menu.classList.toggle('menu--active');
    });

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('office-dropdown--active');
            menu.classList.remove('menu--active');
        }
    });
}

// Меню регионов карты
function initRegionMenu() {
    const menuButtons = document.querySelectorAll('.region-menu__button');
    const cities = document.querySelectorAll('.map__city');

    if (!menuButtons.length || !cities.length) return;

    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedRegion = button.dataset.region;

            menuButtons.forEach(btn => {
                btn.classList.remove('region-menu__button--active');
            });
            button.classList.add('region-menu__button--active');

            cities.forEach(city => {
                const regions = city.dataset.region?.split(' ') || [];
                city.classList.toggle('map__city--active', regions.includes(selectedRegion) || selectedRegion === 'all');
            });
        });
    });

    document.querySelector('.region-menu__button[data-region="all"]')?.click();
}

// Переключение регионов в дропдауне по заголовкам
function initOfficeRegionToggle() {
    const regionTitles = document.querySelectorAll('.office-dropdown__title');

    regionTitles.forEach(title => {
        title.addEventListener('click', () => {
            title.classList.toggle('office-dropdown__title--active');
        });
    });
}

// Тоггл бизнес-блоков
function initBusinessToggle() {
    const buttons = document.querySelectorAll('.business-item__title');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.closest('.business-item');
            item?.classList.toggle('business-item--active');
        });
    });
}

// Инициализация Swiper-слайдера
function initSwiper() {
    const swiperContainer = document.querySelector('.swiper');
    if (!swiperContainer) return;

    new Swiper(swiperContainer, {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}
