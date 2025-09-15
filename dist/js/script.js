/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://starter/./src/scss/style.scss?");

/***/ }),

/***/ "./src/js/_accordion.js":
/*!******************************!*\
  !*** ./src/js/_accordion.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupAccordion: () => (/* binding */ setupAccordion)\n/* harmony export */ });\nfunction setupAccordion() {\r\n    var acc = document.getElementsByClassName(\"js-accordion__item\");\r\n\r\n    for (var i = 0; i < acc.length; i++) {\r\n      acc[i].addEventListener(\"click\", function() {\r\n       \r\n        for (var j = 0; j < acc.length; j++) {\r\n          var otherPanel = acc[j].nextElementSibling;\r\n          if (otherPanel !== this.nextElementSibling) {\r\n            otherPanel.classList.remove(\"accordion__panel--active\");\r\n            acc[j].classList.remove(\"active\");\r\n          }\r\n        }\r\n    \r\n        this.classList.toggle(\"active\");\r\n        var panel = this.nextElementSibling;\r\n        panel.classList.toggle(\"accordion__panel--active\");\r\n      });\r\n    }\r\n    \r\n}\n\n//# sourceURL=webpack://starter/./src/js/_accordion.js?");

/***/ }),

/***/ "./src/js/_header.js":
/*!***************************!*\
  !*** ./src/js/_header.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupDropdowns: () => (/* binding */ setupDropdowns),\n/* harmony export */   setupMenuButton: () => (/* binding */ setupMenuButton)\n/* harmony export */ });\nfunction setupMenuButton() {\r\n    const menuButton = document.querySelector('.js-header__menu'); \r\n    const navigationMenu = document.querySelector('.js-header__navigation');\r\n    const menuIcon = menuButton.querySelector('.material-symbols-outlined--menu');\r\n    let isMenuOpen = false;\r\n\r\n    const toggleMenu = (open) => {\r\n        isMenuOpen = open;\r\n        navigationMenu.classList.toggle('header__navigation--open', open);\r\n        menuIcon.textContent = open ? 'close' : 'menu';\r\n        document.body.classList.toggle('body--no-scroll', open);\r\n    };\r\n\r\n    const handleResponsiveMenu = () => {\r\n        if (window.innerWidth <= 768) {\r\n            toggleMenu(false);\r\n            menuButton.classList.add('header__menu--visible');\r\n        } else {\r\n            menuButton.classList.remove('header__menu--visible');\r\n            document.body.classList.remove('body--no-scroll');\r\n        }\r\n    };\r\n\r\n    menuButton.addEventListener('click', () => toggleMenu(!isMenuOpen));\r\n\r\n    window.addEventListener('load', handleResponsiveMenu);\r\n    window.addEventListener('resize', handleResponsiveMenu);\r\n}\r\n\r\nfunction setupDropdowns() {\r\n    function toggleDropdown(triggerElement, dropdownContent, iconExpand, iconArrow) {\r\n        const isActive = dropdownContent.classList.toggle('active');\r\n        closeOtherDropdowns(dropdownContent);\r\n\r\n        iconExpand.classList.toggle('active', isActive); \r\n        iconArrow.classList.toggle('active', isActive);  \r\n    }\r\n\r\n    function closeOtherDropdowns(activeDropdown) {\r\n        document.querySelectorAll('.header__dropdown-content.active').forEach(dropdown => {\r\n            if (dropdown !== activeDropdown) {\r\n                dropdown.classList.remove('active');\r\n            }\r\n        });\r\n\r\n        document.querySelectorAll('.material-symbols-outlined--header.active').forEach(icon => {\r\n            icon.classList.remove('active');\r\n        });\r\n\r\n        document.querySelectorAll('.icon-arrow-forward.active').forEach(icon => {\r\n            icon.classList.remove('active');\r\n        });\r\n    }\r\n\r\n    function setupDropdown(dropdownId, triggerId) {\r\n        const triggerElement = document.getElementById(triggerId);\r\n        const dropdownContent = document.getElementById(dropdownId);\r\n        const iconExpand = triggerElement.querySelector('.material-symbols-outlined--header');\r\n        const iconArrow = triggerElement.querySelector('.icon-arrow-forward'); \r\n\r\n        triggerElement.addEventListener('click', function(event) {\r\n            event.preventDefault();\r\n            toggleDropdown(triggerElement, dropdownContent, iconExpand, iconArrow);\r\n        });\r\n    }\r\n\r\n    ['our-divisions', 'investors'].forEach(id => setupDropdown(`${id}-content`, id));\r\n\r\n    document.addEventListener('click', function(event) {\r\n        if (!document.querySelector('.header__navigation').contains(event.target)) {\r\n            closeOtherDropdowns(null);\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://starter/./src/js/_header.js?");

/***/ }),

/***/ "./src/js/_slider.js":
/*!***************************!*\
  !*** ./src/js/_slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupSlider: () => (/* binding */ setupSlider)\n/* harmony export */ });\nfunction setupSlider() {\r\n    const slides = document.querySelectorAll('.js-slider__item');\r\n    const leftButton = document.querySelector('.js-button-slider-left');\r\n    const rightButton = document.querySelector('.js-button-slider-right');\r\n    const navigationDots = document.querySelectorAll('.js-slider__navigation-dot');\r\n\r\n    let currentIndex = 0;\r\n\r\n    const updateSlider = () => {\r\n        // Update slide visibility\r\n        slides.forEach((slide, index) => {\r\n            slide.classList.toggle('slider__item--show', index === currentIndex);\r\n            slide.classList.toggle('slider__item--hide', index !== currentIndex);\r\n        });\r\n\r\n        navigationDots.forEach((dot, index) => {\r\n            dot.classList.toggle('slider__navigation-dot--active', index === currentIndex);\r\n        });\r\n\r\n        leftButton.classList.toggle('material-symbols-outlined--slider-last', currentIndex === 0);\r\n        rightButton.classList.toggle('material-symbols-outlined--slider-last', currentIndex === slides.length - 1);\r\n    };\r\n\r\n    leftButton.addEventListener('click', () => {\r\n        if (currentIndex > 0) {\r\n            currentIndex--;\r\n            updateSlider();\r\n        }\r\n\r\n        leftButton.classList.add('material-symbols-outlined--slider--fade-out');\r\n\r\n        setTimeout(() => {\r\n            leftButton.classList.remove('material-symbols-outlined--slider--fade-out');\r\n        }, 300);\r\n    });\r\n\r\n    rightButton.addEventListener('click', () => {\r\n        if (currentIndex < slides.length - 1) {\r\n            currentIndex++;\r\n            updateSlider();\r\n        }\r\n\r\n        rightButton.classList.add('material-symbols-outlined--slider--fade-out');\r\n\r\n        setTimeout(() => {\r\n            rightButton.classList.remove('material-symbols-outlined--slider--fade-out');\r\n        }, 300);\r\n    });\r\n\r\n    updateSlider(); \r\n}\r\n\n\n//# sourceURL=webpack://starter/./src/js/_slider.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_accordion.js */ \"./src/js/_accordion.js\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_slider.js */ \"./src/js/_slider.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_header.js */ \"./src/js/_header.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    (0,_accordion_js__WEBPACK_IMPORTED_MODULE_0__.setupAccordion)();\r\n    (0,_slider_js__WEBPACK_IMPORTED_MODULE_1__.setupSlider)(); \r\n    (0,_header_js__WEBPACK_IMPORTED_MODULE_2__.setupMenuButton)();\r\n    (0,_header_js__WEBPACK_IMPORTED_MODULE_2__.setupDropdowns)();\r\n});\n\n//# sourceURL=webpack://starter/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/scss/style.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;