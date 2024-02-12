(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "+EN/":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "/I9Y");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "/I9Y":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  font-family: \"Montserrat\", sans-serif;\n}\n\nbody {\n  margin: 0;\n  background: #e0e0e0;\n}\n\n.home-container {\n  margin: 60px 0 0 0;\n}\n\n.page-details {\n  margin: 2rem;\n}\n\n.page-details h4, .page-details h2 {\n  font-weight: lighter;\n}\n\n.legal {\n  padding: 0.5rem;\n  font-size: 0.7rem;\n  text-align: center;\n}\n\n@media (max-width: 572px) {\n  .add-item-container {\n    margin: 0;\n  }\n}\n\n@media (min-width: 572px) {\n  .add-item-container {\n    margin: 0.5em 0.5em;\n  }\n}\n\n.add-item-container .enable {\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 60px;\n  height: 50px;\n  margin: 0 -5px;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.add-item-container .enable:checked ~ .form-container {\n  transform: translate(-50%, 0%);\n  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.9);\n}\n\n.add-item-container .enable:checked ~ .active-list {\n  transform: translate(0%, 0%);\n}\n\n.add-item-container .active-list {\n  z-index: 3;\n  position: fixed;\n  top: 50px;\n  transform: translate(0%, -50px);\n  transition: 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n  margin: 0;\n  padding: 4px;\n  width: 100%;\n  font-size: 0.7rem;\n  text-align: center;\n  background: #d3d3d3;\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);\n}\n\n.add-item-container .form-container {\n  z-index: 2;\n  position: fixed;\n  top: 70px;\n  left: 50%;\n  width: 100vw;\n  height: 92%;\n  transform: translate(-50%, -110%);\n  transition: 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n  margin: 0;\n  padding: 10px;\n  align-content: center;\n  overflow: scroll;\n  background: #d3d3d3;\n  border-radius: 0px 0px 14px 14px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n}\n\n.add-item-container .form-container .header {\n  margin: 10px 22px;\n  font-size: 1.5rem;\n  color: #797979;\n}\n\n.add-item-container .form-container .field {\n  margin: 10px 22px;\n  font-size: 0.8rem;\n}\n\n.add-item-container .form-container .field .thumb {\n  object-fit: cover;\n}\n\n@media (max-width: 572px) {\n  .add-item-container .form-container .field .thumb {\n    width: 100%;\n    height: 260px;\n  }\n}\n\n@media (min-width: 572px) {\n  .add-item-container .form-container .field .thumb {\n    width: 100%;\n    height: 260px;\n  }\n}\n\n.add-item-container .form-container .field input[type=text], .add-item-container .form-container .field .submit {\n  width: 100%;\n  font-family: \"Montserrat\", sans-serif;\n  border: 0px;\n  border-radius: 6px;\n}\n\n.add-item-container .form-container .field input[type=text] {\n  margin: 4px 0;\n}\n\n.add-item-container .form-container .field .submit {\n  margin-top: 15px;\n  margin-bottom: 40px;\n  width: 100%;\n  font-size: 1.4rem;\n  background-color: #57a7e8;\n  color: white;\n}\n\n.rating-selector {\n  display: flex;\n  flex-wrap: nowrap;\n  margin: 10px 0;\n}\n\n.rating-selector .selected {\n  border: 3px #4390E1 solid;\n}\n\n.rating-selector .unselected {\n  border: 3px #7e7e7e77 solid;\n}\n\n.rating-selector .selected, .rating-selector .unselected {\n  flex-grow: 1;\n  margin: 0 3px;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 5px;\n  font-size: 0.7rem;\n}\n\n.ranks-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.ranks-container .card-container {\n  flex-grow: 1;\n}\n\n@media (max-width: 572px) {\n  .ranks-container .card-container {\n    margin: 0;\n  }\n}\n\n@media (min-width: 572px) {\n  .ranks-container .card-container {\n    margin: 0.5em 0.5em;\n  }\n}\n\n.ranks-container .card-container .card {\n  margin: 0.3em auto;\n  align-content: center;\n  overflow: hidden;\n  cursor: pointer;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n  transform: translate(-50%, -50%) translateZ(0);\n}\n\n@media (max-width: 572px) {\n  .ranks-container .card-container .card {\n    position: relative;\n    top: 160px;\n    left: 46%;\n    width: 92%;\n    height: 320px;\n  }\n}\n\n@media (min-width: 572px) {\n  .ranks-container .card-container .card {\n    position: relative;\n    top: 160px;\n    left: 175px;\n    width: 350px;\n    height: 320px;\n  }\n}\n\n.ranks-container .card-container .card .thumb {\n  object-fit: cover;\n  filter: blur(0px);\n  opacity: 1;\n  transition: 0.5s 0.25s cubic-bezier(0.17, 0.67, 0.5, 1.03);\n}\n\n@media (max-width: 572px) {\n  .ranks-container .card-container .card .thumb {\n    width: 100%;\n    height: 260px;\n  }\n}\n\n@media (min-width: 572px) {\n  .ranks-container .card-container .card .thumb {\n    width: 100%;\n    height: 260px;\n  }\n}\n\n.ranks-container .card-container .card .data-container {\n  margin: 0;\n  transition: 0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03);\n}\n\n.ranks-container .card-container .card .data-container input {\n  z-index: 9;\n  position: absolute;\n  top: 256px;\n  width: 136px;\n  height: 36px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  opacity: 0;\n  cursor: pointer;\n}\n\n.ranks-container .card-container .card .data-container input:checked ~ .details .bonuses {\n  opacity: 0;\n}\n\n.ranks-container .card-container .card .data-container input:checked ~ .details .ranks {\n  opacity: 1;\n  filter: blur(0px);\n}\n\n@media (max-width: 572px) {\n  .ranks-container .card-container .card .data-container input:checked ~ .details .ranks {\n    transform: translate(-46%, 0%);\n  }\n}\n\n@media (min-width: 572px) {\n  .ranks-container .card-container .card .data-container input:checked ~ .details .ranks {\n    transform: translate(-46%, 0%);\n  }\n}\n\n.ranks-container .card-container .card .data-container input:checked ~ .details .link img {\n  transform: translateY(-5%) scale(-1);\n}\n\n.ranks-container .card-container .card .data-container .header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin: 5px 10px;\n}\n\n.ranks-container .card-container .card .data-container .header .title {\n  font-size: 1rem;\n  font-weight: bold;\n  color: #152536;\n  letter-spacing: 0.05rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ranks-container .card-container .card .data-container .header .title .stamp .top10stamp {\n  background: url(\"/assets/top10.png\") no-repeat;\n}\n\n.ranks-container .card-container .card .data-container .header .title .stamp .top20stamp {\n  background: url(\"/assets/image1.png\") no-repeat;\n}\n\n.ranks-container .card-container .card .data-container .header .title .stamp .top10stamp, .ranks-container .card-container .card .data-container .header .title .stamp .top20stamp {\n  width: 50px;\n  height: 20px;\n  margin-top: 0.3rem;\n  background-size: 100%;\n}\n\n.ranks-container .card-container .card .data-container .header .score {\n  margin: -0.7rem 0;\n  font-size: 3.3rem;\n  font-weight: bold;\n  color: rgba(21, 37, 54, 0.7);\n}\n\n.ranks-container .card-container .card .data-container .details {\n  position: relative;\n}\n\n.ranks-container .card-container .card .data-container .details .bonuses {\n  margin: 6px 10px;\n  z-index: 4;\n  font-size: 0.95rem;\n  color: rgba(21, 37, 54, 0.7);\n  opacity: 1;\n  transition: 0.5s 0.25s cubic-bezier(0.17, 0.67, 0.5, 1.03);\n}\n\n.ranks-container .card-container .card .data-container .details .ranks {\n  z-index: 2;\n  position: absolute;\n  top: -5px;\n  left: 50%;\n  margin: 0;\n  opacity: 0.2;\n  filter: blur(2px);\n  transform-origin: 0% 0%;\n  transition: 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n  @import 'https://code.highcharts.com/css/highcharts.css';\n}\n\n@media (max-width: 572px) {\n  .ranks-container .card-container .card .data-container .details .ranks {\n    transform: translate(-46%, 65%);\n  }\n}\n\n@media (min-width: 572px) {\n  .ranks-container .card-container .card .data-container .details .ranks {\n    transform: translate(-46%, 65%);\n  }\n}\n\n.ranks-container .card-container .card .data-container .details .ranks .highcharts-point {\n  stroke-width: 0px;\n  fill: #1111117d;\n}\n\n.ranks-container .card-container .card .data-container .details .gradient-fader-bottom {\n  position: absolute;\n  top: 20px;\n  width: 100%;\n  height: 250px;\n  z-index: 1;\n  background-image: linear-gradient(to top, white 20%, #ffffff00 100%, #ffffffaa 95%);\n}\n\n.ranks-container .card-container .card .data-container .details .link {\n  position: absolute;\n  top: 205px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  z-index: 3;\n  padding: 0.5rem;\n  text-align: center;\n  font-size: 0.9rem;\n  color: #5a93b9;\n  border-radius: 5px;\n  background-color: #eeeeee;\n  box-sizing: border-box;\n  box-shadow: 0 2px 2px rgba(0, 90, 250, 0.05), 0 4px 4px rgba(0, 90, 250, 0.05), 0 8px 8px rgba(0, 90, 250, 0.05), 0 16px 16px rgba(0, 90, 250, 0.05);\n}\n\n.ranks-container .card-container .card .data-container .details .link .arrow {\n  width: 25px;\n  height: 25px;\n  margin-left: 0.5em;\n  vertical-align: middle;\n  transform: translateY(-5%) scale(1);\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n  opacity: 0.15;\n}\n\n.ranks-container .card-container .card:hover .thumb {\n  filter: blur(8px);\n  opacity: 0.4;\n}\n\n@media (max-width: 572px) {\n  .ranks-container .card-container .card:hover .data-container {\n    transform: translateY(-260px);\n  }\n}\n\n@media (min-width: 572px) {\n  .ranks-container .card-container .card:hover .data-container {\n    transform: translateY(-260px);\n  }\n}\n\n.navi {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 9;\n  margin: 0;\n  width: 100%;\n  height: 50px;\n  background-color: #1E1E23;\n}\n\n.navi .bar-text {\n  vertical-align: middle;\n  color: #dddddd;\n}\n\n.navi .bar-text .list-state {\n  position: absolute;\n  top: 5px;\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n\n.navi .bar-text .list-state .title {\n  font-size: 1.1rem;\n}\n\n.navi .bar-text .list-state .sort {\n  margin: 5px 0;\n  width: 100%;\n  font-size: 0.7rem;\n}\n\n.navi .bar-text .list-state .sort select {\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: none;\n  background-color: transparent;\n  border: 0px;\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n  text-align-last: center;\n  -moz-text-align-last: center;\n  font-size: 0.7rem;\n  color: #cfc7c7;\n  cursor: pointer;\n}\n\n.navi .bar-text .list-state .sort select option {\n  background-image: none;\n  background-color: #464646;\n  padding: 1px;\n  font-size: 0.9rem;\n  color: white;\n  cursor: pointer;\n}\n\n@media (max-width: 572px) {\n  .navi .bar-text .list-state .sort-options-container {\n    margin: 0;\n  }\n}\n\n@media (min-width: 572px) {\n  .navi .bar-text .list-state .sort-options-container {\n    margin: 0.5em 0.5em;\n  }\n}\n\n.navi .bar-text .list-state .sort-options-container .enable {\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 60px;\n  height: 50px;\n  margin: 0 -5px;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.navi .bar-text .list-state .sort-options-container .enable:checked ~ .form-container {\n  transform: translate(-50%, 0%);\n  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.5);\n}\n\n.navi .bar-text .list-state .sort-options-container .form-container {\n  z-index: 2;\n  position: fixed;\n  top: 50px;\n  left: 50%;\n  width: 100vw;\n  height: 500px;\n  transform: translate(-50%, -110%);\n  transition: 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n  margin: 0;\n  align-content: center;\n  overflow: scroll;\n  background: #d3d3d3;\n  border-radius: 0px 0px 14px 14px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n}\n\n.navi .bar-text .list-state .sort-options-container .form-container .field {\n  margin: 10px 22px;\n  font-size: 0.8rem;\n}\n\n.navi .bar-text .list-state .sort-options-container .form-container .field input[type=text], .navi .bar-text .list-state .sort-options-container .form-container .field .submit {\n  width: 100%;\n  font-family: \"Montserrat\", sans-serif;\n  border: 0px;\n  border-radius: 6px;\n}\n\n.navi .bar-text .list-state .sort-options-container .form-container .field input[type=text] {\n  margin: 4px 0;\n}\n\n.navi .bar-text .list-state .sort-options-container .form-container .field .submit {\n  width: 100%;\n  margin: 15px 0;\n  font-size: 1.4rem;\n  background-color: #57a7e8;\n  color: white;\n}\n\n.navi .bar-text .plus {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  padding-right: 15px;\n  font-size: 2.6rem;\n  font-weight: 600;\n  float: right;\n}\n\n.navi .menuToggle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  height: 50px;\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n.navi .menuToggle span, .navi .menuToggle input {\n  display: flex;\n}\n\n.navi .menuToggle span {\n  position: relative;\n  top: 15px;\n  left: 15px;\n  width: 29px;\n  height: 2px;\n  z-index: 1;\n  margin-bottom: 5px;\n  background: #73788a;\n  border-radius: 3px;\n  transform-origin: 5px 0px;\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n}\n\n.navi .menuToggle input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 60px;\n  height: 50px;\n  z-index: 2;\n  margin: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.navi .menuToggle ul {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 180px;\n  height: 100vh;\n  margin: 0;\n  padding: 48px 21px;\n  list-style-type: none;\n  box-shadow: 0 0 10px #85888C;\n  background-color: #F5F6FA;\n  -webkit-font-smoothing: antialiased;\n  transform-origin: 0% 0%;\n  transform: translate(-110%, 0);\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n}\n\n.navi .menuToggle ul li {\n  margin: 1.5rem 0;\n}\n\n.navi .menuToggle ul a {\n  text-decoration: none;\n  font-size: 1.5em;\n  color: #1E1E23;\n}\n\n.navi .menuToggle input:checked ~ ul {\n  transform: none;\n}\n\n.navi .menuToggle input:checked ~ span:nth-last-child(3) {\n  transform: rotate(0deg) scale(0.2, 0.2);\n  opacity: 0;\n}\n\n.navi .menuToggle input:checked ~ span:nth-last-child(2) {\n  transform: rotate(-45deg) translate(0, -1px);\n}\n\n.navi .menuToggle input:checked ~ span {\n  transform: rotate(45deg) translate(-3px, -1px);\n  opacity: 1;\n}\n\n.navi .menuToggle span:first-child {\n  transform-origin: 0% 0%;\n}\n\n.navi .menuToggle span:nth-last-child(2) {\n  transform-origin: 0% 100%;\n}\n\n@media (max-width: 572px) {\n  .no-tap {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    user-select: none;\n  }\n}\n\n@media (max-width: 572px) {\n  .select-allowed {\n    -webkit-touch-callout: unset;\n    -webkit-user-select: unset;\n    user-select: unset;\n  }\n}\n\n.test-flex {\n  border-radius: 3px;\n  background-color: #A2CBFA;\n  border: 1px solid #4390E1;\n  box-sizing: border-box;\n  box-shadow: 0 2px 2px rgba(0, 90, 250, 0.05), 0 4px 4px rgba(0, 90, 250, 0.05), 0 8px 8px rgba(0, 90, 250, 0.05), 0 16px 16px rgba(0, 90, 250, 0.05);\n}", "",{"version":3,"sources":["webpack://src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["@mixin pos($pos, $left: null, $top: null, $right: null, $bottom: null) {\n\tposition:$pos;\n\t// left:$left;\n\t@if $top { top: $top; }\n\t@if $left { left: $left; }\n\t@if $right { right: $right; }\n\t@if $bottom { bottom: $bottom; }\n}\n\n@mixin size($width, $height) {\n\twidth: $width;\n\theight: $height;\n}\n\n//------------- CONSTANTS --------------//\n\n$big-stone:#152536;\n$white:#fff;\n$smalt-blue:#4e958b;\n$maroon-flush:#C32361;\n$black:#000;\n$lite-grey:rgba($black, .2);\n$lite-big-stone: rgba($big-stone, .7);\n\n$border-radius: 8px;\n$box-shadow: 0 1px 4px rgba($black, .3);\n$transition: cubic-bezier(.17,.67,.5,1.03);\n$timing-1: .4s .15s;\n$timing-2: .5s .25s;\n\n$small-screen: 572px;\n\n$card-width-small: 92%;\n$card-width-medium: 350px;\n\n$card-height: 320px;\n$thumb-height: 260px;\n\n//------------- BOILER PLATE --------------//\n\n* { font-family: 'Montserrat', sans-serif; }\nbody { margin: 0; background: #e0e0e0; } //for some reason, the user agent stylesheet adds 8px\n.home-container { margin: 60px 0 0 0; } //shift everything under the nav bar\n.page-details { margin: 2rem; h4, h2 { font-weight: lighter; } }\n\n//---------------- Legal ------------------//\n\n.legal { \n\tpadding: .5rem; \n\tfont-size: .7rem; \n\ttext-align: center; \n}\n\n//--------------- ADD ITEM ----------------//\n\n.add-item-container {\n\t@media (max-width: $small-screen) { margin: 0; }\n\t@media (min-width: $small-screen) { margin: .5em .5em; }\n\n\t.enable {\n\t\tz-index: 10;\n\t\t@include pos(fixed, $right: 0, $top: 0);\n\t\t@include size(60px, 50px); \n\t\tmargin: 0 -5px;\n\t\topacity: 0; cursor: pointer;\n\t\t&:checked ~ .form-container { \n\t\t\ttransform: translate(-50%, 0%); \n\t\t\tbox-shadow: 0 30px 30px rgba(0, 0, 0, 0.9);\n\t\t}\n\t\t&:checked ~ .active-list {\n\t\t\ttransform: translate(0%, 0%); \n\t\t}\n\t}\n\n\t.active-list {\n\t\tz-index: 3;\n\t\t@include pos(fixed, $top: 50px);\n\t\ttransform: translate(0%, -50px); \n\t\ttransition: 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n\t\tmargin: 0;\n\t\tpadding: 4px;\n\t\twidth: 100%;\n\t\tfont-size: .7rem;\n\t\ttext-align: center;\n\t\tbackground: #d3d3d3;\n\t\tbox-shadow: 0 10px 10px rgba(0, 0, 0, .4);\n\t}\n\n\t.form-container {\n\t\tz-index: 2;\n\t\t@include pos(fixed, $left: 50%, $top: 70px);\n\t\t@include size(100vw, 92%);\n\t\ttransform: translate(-50%, -110%); //idk why this works\n\t\ttransition: 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n\t\tmargin: 0;\n\t\tpadding: 10px;\n\t\talign-content: center;\n\t\toverflow: scroll;\n\t\tbackground: #d3d3d3;\n\t\tborder-radius: 0px 0px 14px 14px; \n\t\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n\t\t\n\n\t\t.header {\n\t\t\tmargin: 10px 22px;\n\t\t\tfont-size: 1.5rem;\n\t\t\tcolor: #797979;\n\t\t}\n\n\t\t.field {\n\t\t\tmargin: 10px 22px;\n\t\t\tfont-size: .8rem;\n\n\t\t\t//thumbnail\n\t\t\t.thumb {\n\t\t\t\t@media (max-width: $small-screen) { @include size(100%, $thumb-height); }\n\t\t\t\t@media (min-width: $small-screen) { @include size(100%, $thumb-height); }\n\t\t\t\tobject-fit: cover; \n\t\t\t}\n\n\t\t\tinput[type=text], .submit {\n\t\t\t\twidth: 100%;\n\t\t\t\tfont-family: 'Montserrat', sans-serif;\n\t\t\t\tborder: 0px;\n\t\t\t\tborder-radius: 6px;\n\t\t\t}\n\t\n\t\t\tinput[type=text] {\n\t\t\t\tmargin: 4px 0;\n\t\t\t}\n\t\n\t\t\t.submit {\n\t\t\t\t//dunno what's going on at the bottom of the screen\n\t\t\t\tmargin-top: 15px;\n\t\t\t\tmargin-bottom: 40px; \n\t\t\t\twidth: 100%;\n\t\t\t\tfont-size: 1.4rem;\n\t\t\t\tbackground-color: #57a7e8;\n\t\t\t\tcolor: white;\n\t\t\t}\n\n\t\t}\n\t}\n}\n\n.rating-selector {\n\tdisplay: flex; flex-wrap: nowrap; // justify-content: space-around;\n\tmargin: 10px 0;\n\n\t.selected   { border: 3px #4390E1 solid; }\n\t.unselected { border: 3px #7e7e7e77 solid; }\n\t.selected, .unselected {\n\t\tflex-grow: 1;\n\t\tmargin: 0 3px;\n\t\tvertical-align: middle;\n\t\ttext-align: center;\n\t\tcursor: pointer;\n\t\tborder-radius: 5px;\n\t\tfont-size: .7rem;\n\t}\n}\n\n//-------------- RANKS ---------------//\n\n.ranks-container {\n\tdisplay: flex; flex-wrap: wrap; // justify-content: space-around;\n\n\t//this keeps space between cards to preserve their size\n\t.card-container {\n\t\t@media (max-width: $small-screen) { margin: 0; }\n\t\t@media (min-width: $small-screen) { margin: .5em .5em; }\n\t\tflex-grow: 1;\n\n\t\t.card {\n\t\t\t@media (max-width: $small-screen) { @include pos(relative, $card-width-small / 2, $card-height / 2); @include size($card-width-small, $card-height); }\n\t\t\t@media (min-width: $small-screen) { @include pos(relative, $card-width-medium / 2, $card-height / 2); @include size($card-width-medium, $card-height); }\n\t\t\tmargin: .3em auto;\n\t\t\talign-content: center;\n\t\t\toverflow: hidden;\n\t\t\tcursor: pointer;\n\t\t\tbackground: $white;\n\t\t\tborder-radius: $border-radius; box-shadow: $box-shadow;\n\t\t\ttransform: translate(-50%, -50%) translateZ(0);\n\n\t\t\t.thumb {\n\t\t\t\t@media (max-width: $small-screen) { @include size(100%, $thumb-height); }\n\t\t\t\t@media (min-width: $small-screen) { @include size(100%, $thumb-height); }\n\t\t\t\tobject-fit: cover; \n\t\t\t\tfilter: blur(0px);\n\t\t\t\topacity: 1;\n\t\t\t\ttransition: $timing-2 $transition;\n\t\t\t}\n\n\t\t\t.data-container {\n\t\t\t\tmargin: 0;\n\t\t\t\ttransition: $timing-1 $transition;\n\n\t\t\t\tinput {\n\t\t\t\t\tz-index: 9;\n\t\t\t\t\t@include pos(absolute, $top: 256px);\n\t\t\t\t\t@include size(136px, 36px); \n\t\t\t\t\tleft: 50%; transform: translate(-50%, 0); //idk why this works\n\t\t\t\t\topacity: 0;\n\t\t\t\t\tcursor: pointer; \n\n\t\t\t\t\t//any \"&:operation .class-name { attribute: newValue; }\" has to go last, \n\t\t\t\t\t//but the html element has to be first\n\t\t\t\t\t//https://www.w3schools.com/cssref/css_selectors.asp\n\t\t\t\t\t&:checked ~ .details .bonuses { opacity: 0; }\n\t\t\t\t\t&:checked ~ .details .ranks { \n\t\t\t\t\t\t@media (max-width: $small-screen) { transform: translate(-46%, 0%); }\n\t\t\t\t\t\t@media (min-width: $small-screen) { transform: translate(-46%, 0%); }\n\t\t\t\t\t\topacity: 1; filter: blur(0px);\n\t\t\t\t\t}\n\t\t\t\t\t&:checked ~ .details .link img { transform: translateY(-5%) scale(-1); }\n\t\t\t\t}\n\n\t\t\t\t.header {\n\t\t\t\t\tdisplay: flex; justify-content: space-between; align-items: flex-start;\n\t\t\t\t\tmargin: 5px 10px;\n\n\t\t\t\t\t.title {\n\t\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\t\tcolor: $big-stone;\n\t\t\t\t\t\tletter-spacing: .05rem;\n\t\t\t\t\t\twhite-space: nowrap; // ensure no wrapping\n\t\t\t\t\t\toverflow: hidden; // if for some reason it escapes the visible area don't display anyth...\n\t\t\t\t\t\ttext-overflow: ellipsis;\n\t\t\t\t\t\t\n\t\t\t\t\t\t.stamp {\n\t\t\t\t\t\t\t.top10stamp { background: url('/assets/top10.png') no-repeat; }\n\t\t\t\t\t\t\t.top20stamp { background: url('/assets/image1.png') no-repeat; }\n\n\t\t\t\t\t\t\t.top10stamp, .top20stamp {\n\t\t\t\t\t\t\t\t@include size(50px, 20px);\n\t\t\t\t\t\t\t\tmargin-top: .3rem;\n\t\t\t\t\t\t\t\tbackground-size: 100%;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t.score {\n\t\t\t\t\t\tmargin: -0.7rem 0;\n\t\t\t\t\t\tfont-size: 3.3rem;\n\t\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\t\tcolor: $lite-big-stone;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t.details {\n\t\t\t\t\t@include pos(relative);\n\n\t\t\t\t\t.bonuses {\n\t\t\t\t\t\tmargin: 6px 10px;\n\t\t\t\t\t\tz-index: 4;\n\t\t\t\t\t\tfont-size: .95rem;\n\t\t\t\t\t\tcolor: $lite-big-stone;\n\t\t\t\t\t\topacity: 1;\n\t\t\t\t\t\ttransition: $timing-2 $transition;\n\t\t\t\t\t}\n\n\t\t\t\t\t.ranks {\n\t\t\t\t\t\tz-index: 2;\n\t\t\t\t\t\t@include pos(absolute, $left: 50%, $top: -5px); \n\t\t\t\t\t\t@media (max-width: $small-screen) { transform: translate(-46%, 65%); }\n\t\t\t\t\t\t@media (min-width: $small-screen) { transform: translate(-46%, 65%); }\n\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t\n\t\t\t\t\t\topacity: .2; filter: blur(2px);\n\t\t\t\t\t\ttransform-origin: 0% 0%; \n\t\t\t\t\t\ttransition: 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n\n\t\t\t\t\t\t@import 'https://code.highcharts.com/css/highcharts.css';\n\t\t\t\t\t\t.highcharts-point { stroke-width: 0px; fill: #1111117d; }\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t.gradient-fader-bottom {\n\t\t\t\t\t\t@include pos(absolute, $top: 20px);\n\t\t\t\t\t\t@include size(100%, 250px);\n\t\t\t\t\t\tz-index: 1; \n\t\t\t\t\t\tbackground-image: linear-gradient(to top, white 20%, #ffffff00 100%, #ffffffaa 95%);\n\t\t\t\t\t}\n\n\t\t\t\t\t.link {\n\t\t\t\t\t\t@include pos(absolute, $top: 205px);\n\t\t\t\t\t\tleft: 50%; transform: translate(-50%, 0); //idk why this works\n\t\t\t\t\t\tz-index: 3;\n\t\t\t\t\t\tpadding: .5rem;\n\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\tfont-size: .9rem;\n\t\t\t\t\t\tcolor: #5a93b9;\n\t\n\t\t\t\t\t\tborder-radius: 5px;\n\t\t\t\t\t\tbackground-color: #eeeeee;\n\t\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\t\tbox-shadow: 0 2px 2px rgba(0,90,250,0.05), 0 4px 4px rgba(0,90,250,0.05), 0 8px 8px rgba(0,90,250,0.05), 0 16px 16px rgba(0,90,250,0.05);\n\n\t\t\t\t\t\t.arrow {\n\t\t\t\t\t\t\t@include size(25px, 25px); \n\t\t\t\t\t\t\tmargin-left: .5em;\n\t\t\t\t\t\t\tvertical-align: middle;\n\n\t\t\t\t\t\t\ttransform: translateY(-5%) scale(1);\n\t\t\t\t\t\t\ttransition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n\t\t\t\t\t\t\topacity: 0.15;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&:hover //DISABLE THIS IF TESTING THE INFO DIV\t\n\t\t\t.thumb { filter: blur(8px); opacity: 0.4; }\n\n\t\t\t&:hover //DISABLE THIS IF TESTING THE INFO DIV\t\n\t\t\t.data-container { @media (max-width: $small-screen) { transform:translateY(-$thumb-height); } @media (min-width: $small-screen) { transform:translateY(-$thumb-height); } }\n\t\t}\n\t}\n}\n\n//------------- NAV BAR --------------//\n\n.navi {\n\t@include pos(fixed, $left: 0, $top: 0);\n\tz-index: 9;\n\tmargin: 0;\n\t@include size(100%, 50px);\n\tbackground-color: #1E1E23;\n\t\n\t.bar-text {\n\t\tvertical-align: middle;\n\t\tcolor: #dddddd;\n\n\t\t.list-state {\n\t\t\t@include pos(absolute, $left: 50%, $top: 5px);\n\t\t\ttransform: translate(-50%, 0);\n\n\t\t\t.title { font-size: 1.1rem; }\n\t\t\t.sort {\n\t\t\t\tmargin: 5px 0;\n\t\t\t\twidth: 100%;\n\t\t\t\tfont-size: .7rem;\n\n\t\t\t\tselect {\n\t\t\t\t\tappearance: none; -webkit-appearance: none; -moz-appearance: none;\n\t\t\t\t\tbackground-image: none; background-color: transparent; border: 0px;\n\t\t\t\t\tmargin: 0 auto; display: block;\n\t\t\t\t\ttext-align: center; text-align-last: center; -moz-text-align-last: center;\n\t\t\t\t\tfont-size: .7rem;\n\t\t\t\t\tcolor: #cfc7c7; cursor: pointer;\n\n\t\t\t\t\toption {\n\t\t\t\t\t\tbackground-image: none; background-color: #464646;\n\t\t\t\t\t\tpadding: 1px;\n\t\t\t\t\t\tfont-size: .9rem;\n\t\t\t\t\t\tcolor: white; cursor: pointer;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.sort-options-container {\n\t\t\t\t@media (max-width: $small-screen) { margin: 0; }\n\t\t\t\t@media (min-width: $small-screen) { margin: .5em .5em; }\n\t\t\t\t\n\t\t\t\t.enable {\n\t\t\t\t\tz-index: 10;\n\t\t\t\t\t@include pos(fixed, $right: 0, $top: 0);\n\t\t\t\t\t@include size(60px, 50px); \n\t\t\t\t\tmargin: 0 -5px;\n\t\t\t\t\topacity: 0; cursor: pointer;\n\t\t\t\t\t&:checked ~ .form-container { \n\t\t\t\t\t\ttransform: translate(-50%, 0%); \n\t\t\t\t\t\tbox-shadow: 0 15px 15px rgba(0, 0, 0, 0.5);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t.form-container {\n\t\t\t\t\tz-index: 2;\n\t\t\t\t\t@include pos(fixed, $left: 50%, $top: 50px);\n\t\t\t\t\t@include size(100vw, 500px);\n\t\t\t\t\ttransform: translate(-50%, -110%); //idk why this works\n\t\t\t\t\ttransition: 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\talign-content: center;\n\t\t\t\t\toverflow: scroll;\n\t\t\t\t\tbackground: #d3d3d3;\n\t\t\t\t\tborder-radius: 0px 0px 14px 14px; \n\t\t\t\t\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n\n\t\t\t\t\t.field {\n\t\t\t\t\t\tmargin: 10px 22px;\n\t\t\t\t\t\tfont-size: .8rem;\n\n\t\t\t\t\t\tinput[type=text], .submit {\n\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\tfont-family: 'Montserrat', sans-serif;\n\t\t\t\t\t\t\tborder: 0px;\n\t\t\t\t\t\t\tborder-radius: 6px;\n\t\t\t\t\t\t}\n\t\t\t\t\n\t\t\t\t\t\tinput[type=text] {\n\t\t\t\t\t\t\tmargin: 4px 0;\n\t\t\t\t\t\t}\n\t\t\t\t\n\t\t\t\t\t\t.submit {\n\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\tmargin: 15px 0;\n\t\t\t\t\t\t\tfont-size: 1.4rem;\n\t\t\t\t\t\t\tbackground-color: #57a7e8;\n\t\t\t\t\t\t\tcolor: white;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\n\t\t.plus {\n\t\t\t@include pos(absolute, $right: 0px, $top: 0px);\n\t\t\tpadding-right: 15px;\n\t\t\tfont-size: 2.6rem;\n\t\t\tfont-weight: 600;\n\t\t\tfloat: right;\n\t\t}\n\t}\n\n\t.menuToggle {\n\t\t@include pos(absolute, $left: 0, $top: 0);\n\t\tdisplay: flex; flex-direction: column;\n\t\theight: 50px;\n\t\tuser-select: none; -webkit-user-select: none;\n\t\t\n\t\tspan, input { display: flex; }\n\n\t\tspan { //hamburger\n\t\t\t@include pos(relative, $left: 15px, $top: 15px);\n\t\t\t@include size(29px, 2px);\n\t\t\tz-index: 1;\n\t\t\tmargin-bottom: 5px;\n\t\t\tbackground: #73788a;\n\t\t\tborder-radius: 3px;\n\t\t\ttransform-origin: 5px 0px;\n\t\t\ttransition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\n\t\t\t\t\t\tbackground 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\n\t\t\t\t\t\topacity 0.55s ease;\n\t\t}\n\n\t\tinput { //placed over the hamburger, to turn it into button\n\t\t\t@include pos(absolute, $left: 0, $top: 0);\n\t\t\t@include size(60px, 50px);\n\t\t\tz-index: 2; \n\t\t\tmargin: 0;\n\t\t\topacity: 0; cursor: pointer; \n\t\t}\n\n\t\tul { //page links\n\t\t\t@include pos(absolute, $left: 0px, $top: 0px);\n\t\t\t@include size(180px, 100vh);\n\t\t\tmargin: 0;\n\t\t\tpadding: 48px 21px;\n\t\n\t\t\tlist-style-type: none; \n\t\t\tbox-shadow: 0 0 10px #85888C; background-color: #F5F6FA; -webkit-font-smoothing: antialiased;\n\t\t\ttransform-origin: 0% 0%; transform: translate(-110%, 0); transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n\t\n\t\t\tli { margin: 1.5rem 0; }\n\t\t\ta { text-decoration: none; font-size: 1.5em; color: #1E1E23; }\n\t\t}\n\n\t\tinput:checked ~ ul { transform: none; }\n\t\tinput:checked ~ span:nth-last-child(3) { transform: rotate(0deg) scale(0.2, 0.2); opacity: 0; }\n\t\tinput:checked ~ span:nth-last-child(2) { transform: rotate(-45deg) translate(0, -1px); }\n\t\tinput:checked ~ span { transform: rotate(45deg) translate(-3px, -1px); opacity: 1; }\n\t\tspan:first-child { transform-origin: 0% 0%; }\n\t\tspan:nth-last-child(2) { transform-origin: 0% 100%; }\n\t}\n}\t\n\n//---- NO-TAP: Prevents accidentally text highlighting ----//\n\n.no-tap {\n\t@media (max-width: $small-screen) {\n\t\t-webkit-touch-callout: none;\n\t\t-webkit-user-select: none;\n\t\t-khtml-user-select: none;\n\t\t-moz-user-select: none;\n\t\t-ms-user-select: none;\n\t\tuser-select: none;\n\t}\n}\n\n.select-allowed {\n\t@media (max-width: $small-screen) {\n\t\t-webkit-touch-callout: unset;\n\t\t-webkit-user-select: unset;\n\t\t-khtml-user-select: unset;\n\t\t-moz-user-select: unset;\n\t\t-ms-user-select: unset;\n\t\tuser-select: unset;\n\t}\n}\n\n//------ FLEX BOX TO TEST MARGIN/PADDING ------//\n\n// @extend .test-flex; //to test margins\n\n.test-flex {\n\tborder-radius: 3px;\n\tbackground-color: #A2CBFA;\n\tborder: 1px solid #4390E1;\n\tbox-sizing: border-box;\n\tbox-shadow: 0 2px 2px rgba(0,90,250,0.05), \n\t0 4px 4px rgba(0,90,250,0.05), 0 8px 8px rgba(0,90,250,0.05), 0 16px 16px rgba(0,90,250,0.05);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\limit\Desktop\workspace\my-games-tracker\src\styles.scss */"+EN/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map