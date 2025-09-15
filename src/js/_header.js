export function setupMenuButton() {
    const menuButton = document.querySelector('.js-header__menu'); 
    const navigationMenu = document.querySelector('.js-header__navigation');
    const menuIcon = menuButton.querySelector('.material-symbols-outlined--menu');
    let isMenuOpen = false;

    const toggleMenu = (open) => {
        isMenuOpen = open;
        navigationMenu.classList.toggle('header__navigation--open', open);
        menuIcon.textContent = open ? 'close' : 'menu';
        document.body.classList.toggle('body--no-scroll', open);
    };

    const handleResponsiveMenu = () => {
        if (window.innerWidth <= 768) {
            toggleMenu(false);
            menuButton.classList.add('header__menu--visible');
        } else {
            menuButton.classList.remove('header__menu--visible');
            document.body.classList.remove('body--no-scroll');
        }
    };

    menuButton.addEventListener('click', () => toggleMenu(!isMenuOpen));

    window.addEventListener('load', handleResponsiveMenu);
    window.addEventListener('resize', handleResponsiveMenu);
}

export function setupDropdowns() {
    function toggleDropdown(triggerElement, dropdownContent, iconExpand, iconArrow) {
        const isActive = dropdownContent.classList.toggle('active');
        closeOtherDropdowns(dropdownContent);

        iconExpand.classList.toggle('active', isActive); 
        iconArrow.classList.toggle('active', isActive);  
    }

    function closeOtherDropdowns(activeDropdown) {
        document.querySelectorAll('.header__dropdown-content.active').forEach(dropdown => {
            if (dropdown !== activeDropdown) {
                dropdown.classList.remove('active');
            }
        });

        document.querySelectorAll('.material-symbols-outlined--header.active').forEach(icon => {
            icon.classList.remove('active');
        });

        document.querySelectorAll('.icon-arrow-forward.active').forEach(icon => {
            icon.classList.remove('active');
        });
    }

    function setupDropdown(dropdownId, triggerId) {
        const triggerElement = document.getElementById(triggerId);
        const dropdownContent = document.getElementById(dropdownId);
        const iconExpand = triggerElement.querySelector('.material-symbols-outlined--header');
        const iconArrow = triggerElement.querySelector('.icon-arrow-forward'); 

        triggerElement.addEventListener('click', function(event) {
            event.preventDefault();
            toggleDropdown(triggerElement, dropdownContent, iconExpand, iconArrow);
        });
    }

    ['our-divisions', 'investors'].forEach(id => setupDropdown(`${id}-content`, id));

    document.addEventListener('click', function(event) {
        if (!document.querySelector('.header__navigation').contains(event.target)) {
            closeOtherDropdowns(null);
        }
    });
}
