"use strict";
(self["webpackChunkconnect_four"] = self["webpackChunkconnect_four"] || []).push([["gamecontroller"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/matrix.ttf */ "./src/assets/fonts/matrix.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/red_pill_blue_pill.svg */ "./src/assets/images/red_pill_blue_pill.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"matrix\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  --main-content-margin: 1rem;\n  --border-radius: 23px;\n  --background-color-pop-up: brown;\n  --color_white_custom: #e8e6e3;\n  --background-color-army-green-light: #b5b9a4;\n  --background-color-army-green-medium: #a3a78d;\n  --background-color-army-green-dark: #42453a;\n  --overlay-black: rgba(0, 0, 0, 0.8);\n\n  --player-1-color: red;\n  --player-2-color: blue;\n  --row-cell-background-color: #d1fae5;\n  --winning-cells-color: purple;\n  --column-padding: 1rem;\n  --default-transition-duration: 1s;\n\n  --neon-text-shadow-high: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,\n    0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;\n  --neon-text-shadow-medium: 0 0 3.4px #fff, 0 0 5px #fff, 0 0 10.5px #fff,\n    0 0 21px #0fa, 0 0 41px #0fa, 0 0 46px #0fa, 0 0 51px #0fa, 0 0 75.5px #0fa;\n  --neon-text-shadow-low: 0 0 1.7px #fff, 0 0 2.5px #fff, 0 0 5.25px #fff,\n    0 0 10.5px #0fa, 0 0 20.5px #0fa, 0 0 23px #0fa, 0 0 25.5px #0fa,\n    0 0 37.75px #0fa;\n  --neon-text-shadow-very-low: 0 0 0.5px #fff, 0 0 0.6px #fff, 0 0 1.3px #fff,\n    0 0 2.5px #0fa, 0 0 5px #0fa, 0 0 6px #0fa, 0 0 6.5px #0fa, 0 0 37.75px #0fa;\n  --pink-neon-text-shadow-high: 0 0 4px #fff, 0 0 10px #fff, 0 0 18px #fff,\n    0 0 38px #f09, 0 0 73px #f09, 0 0 80px #f09, 0 0 94px #f09, 0 0 140px #f09;\n  --pink-neon-text-shadow-low: 0 0 1px #fff, 0 0 2.5px #fff, 0 0 4.5px #fff,\n    0 0 9.5px #f09, 0 0 18.25px #f09, 0 0 20px #f09, 0 0 23.5px #f09,\n    0 0 35px #f09;\n\n  --blue-neon-text-shadow: 0 0 6px rgba(202, 228, 225, 0.92),\n    0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(30, 132, 242, 0.52),\n    0 0 21px rgba(30, 132, 242, 0.92), 0 0 34px rgba(30, 132, 242, 0.78),\n    0 0 54px rgba(30, 132, 242, 0.92);\n\n  font-family: fantasy;\n}\n.background_video {\n  width: 100vw;\n  height: 100vh;\n  object-fit: cover;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n}\n\nbody {\n  background-color: black;\n  color: var(--color_white_custom);\n  margin: 0;\n  text-shadow: var(--blue-neon-text-shadow-low);\n}\n\n.main_container {\n  display: flex;\n  flex-direction: column;\n  /* padding: 2rem 4rem; */\n  gap: 1rem;\n}\n\n/* ****** */\n/* header */\n/* ****** */\n\n.header_main_container {\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  justify-content: space-between;\n  padding: 0.5rem 4rem;\n  padding-top: 1rem;\n  background-color: var(--overlay-black);\n\n  /* background-color: orange; */\n}\n\n.header_left,\n.header_right {\n  display: flex;\n  gap: 2rem;\n}\n\n.header_mid {\n  align-self: center;\n  text-shadow: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"matrix\";\n}\n.header_mid .header_game_name {\n  font-size: 3.5rem;\n  font-weight: 900;\n  margin-bottom: 0;\n}\n\n.icon {\n  height: 2rem;\n}\n.new_game_button .icon {\n  scale: 1.2;\n  margin-left: 0.3rem;\n}\n\nbutton {\n  width: 120px;\n  height: 50px;\n  background-color: var(--color_white_custom);\n  border-radius: var(--border-radius);\n  box-shadow: inset 0rem 0rem 1rem black;\n\n  border: none;\n  align-self: center;\n  text-align: center;\n  font-size: 1.4rem;\n  cursor: pointer;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nbutton.new_game_button {\n  width: 240px;\n  z-index: 4;\n}\nbutton.new_game_button.active {\n  box-shadow: var(--pink-neon-text-shadow-low);\n}\nbutton:hover {\n  transform: scale(1.1);\n}\n/* ****** */\n/* ****** */\n\n/* ********************** */\n/* Main Content Container */\n/* ********************** */\n\n.content_main_container {\n  /* border: 4px burlywood solid; */\n  margin: 2rem 4rem;\n  margin-bottom: 0;\n}\n\n.content_container {\n  /* border: 2px goldenrod solid; */\n  display: flex;\n  flex-direction: row;\n}\n\n.player_1_container,\n.player_2_container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-shadow: var(--blue-neon-text-shadow);\n  font-weight: 900;\n}\n\n.player_1_name,\n.player_2_name {\n  padding: 1rem;\n  padding-top: 1.5rem;\n  font-size: 2.2rem;\n  /* border: 2px red solid; */\n  border-radius: var(--border-radius);\n  transition-duration: 1s;\n}\n.player_1_name.active,\n.player_2_name.active {\n  text-shadow: var(--pink-neon-text-shadow-low);\n  box-shadow: var(--pink-neon-text-shadow-low);\n}\n\n.player_1_status_round,\n.player_2_status_round {\n  font-size: 1.5rem;\n  margin-top: 4rem;\n  border-radius: var(--border-radius);\n  /* box-shadow: inset 0rem 0rem 55rem black; */\n}\n\n/* cutting the pills .svg file in half and use them on both sided */\n.player_1_img_container {\n  width: 95%;\n  height: 100%;\n  float: left;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-position: right center;\n}\n.player_1_img_container:nth-child(2) {\n  background-position: left center;\n}\n.player_2_img_container {\n  width: 95%;\n  height: 100%;\n  float: right;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-position: left center;\n}\n.player_2_img_container:nth-child(2) {\n  background-position: right center;\n}\n\n.gameboard_container {\n  display: flex;\n  flex-direction: row;\n  /* width: minmax(100, 60vw); */\n}\n\n/* column and row settings */\n/* *********************** */\n\n.column {\n  border-radius: var(--border-radius);\n  /* border: 2px red solid;\n  background-color: brown; */\n  padding: 0 calc(var(--column-padding) / 2);\n\n  display: flex;\n  flex-direction: column;\n}\n.column:hover {\n  scale: 1.01;\n  box-shadow: inset 0 0 60px var(--background-color-army-green-light);\n}\n\n.row {\n  border: 6px black solid;\n  border-radius: 12rem;\n  background-color: var(--row-cell-background-color);\n  opacity: 0.9;\n  box-shadow: inset 0rem 0rem 1.5rem black;\n  padding: var(--column-padding);\n  margin: calc(var(--column-padding) / 5) 0;\n\n  height: 1.7rem;\n  width: 1.7rem;\n  pointer-events: none; /* this is important for the event capture on click */\n}\n/* here you can add animation for winning cells */\n.row.winning_row {\n  opacity: 1;\n  z-index: 4;\n  box-shadow: var(--neon-text-shadow-very-low);\n  animation: flicker 1.5s infinite alternate;\n}\n.row:hover {\n  scale: 1.1;\n}\n/* *********************** */\n\n/* ********************** */\n/* ********************** */\n\n/* ******************* */\n/* overlay and pop-ups */\n/* ******************* */\n\n.overlay_for_pop_ups {\n  transition-duration: var(--default-transition-duration);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--overlay-black);\n  opacity: 0;\n  pointer-events: none;\n  z-index: 3;\n}\n.overlay_for_pop_ups.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.gameover_pop_up {\n  /* margin: 0 auto; */\n  font-size: 4rem;\n  font-family: \"matrix\";\n  color: var(--color_white_custom);\n  /* border: 2px var(--color_white_custom) solid; */\n  opacity: 0;\n  z-index: 4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-shadow: var(--neon-text-shadow-medium);\n  box-shadow: var(--neon-text-shadow-very-low);\n\n  /* box-shadow: inset 1rem 1rem 4rem white; */\n  border-radius: var(--border-radius);\n  padding: 0.7rem;\n}\n.gameover_pop_up.active {\n  opacity: 1;\n}\n.gameover_pop_up .status_winning {\n}\n\n/* ******************* */\n/* ******************* */\n\n/* ****** */\n/* footer */\n/* ****** */\n\nfooter {\n  /* position: fixed;\n  left: 0;\n  bottom: 0; */\n  width: 100%;\n  background-color: red;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: var(--background-color-army-green-dark);\n  color: var(--color_white_custom);\n  z-index: 2;\n  text-shadow: none;\n  margin: 0;\n}\n\nfooter img {\n  height: 2rem;\n  scale: 1.2;\n}\n\nfooter img:hover {\n  transform: scale(1.1);\n}\n/* ****** */\n/* ****** */\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,4CAAsC;EACtC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,qBAAqB;EACrB,gCAAgC;EAChC,6BAA6B;EAC7B,4CAA4C;EAC5C,6CAA6C;EAC7C,2CAA2C;EAC3C,mCAAmC;;EAEnC,qBAAqB;EACrB,sBAAsB;EACtB,oCAAoC;EACpC,6BAA6B;EAC7B,sBAAsB;EACtB,iCAAiC;;EAEjC;+EAC6E;EAC7E;+EAC6E;EAC7E;;oBAEkB;EAClB;gFAC8E;EAC9E;8EAC4E;EAC5E;;iBAEe;;EAEf;;;qCAGmC;;EAEnC,oBAAoB;AACtB;AACA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,eAAe;EACf,OAAO;EACP,QAAQ;EACR,MAAM;EACN,SAAS;EACT,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,gCAAgC;EAChC,SAAS;EACT,6CAA6C;AAC/C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,wBAAwB;EACxB,SAAS;AACX;;AAEA,WAAW;AACX,WAAW;AACX,WAAW;;AAEX;EACE,aAAa;EACb,kCAAkC;EAClC,8BAA8B;EAC9B,oBAAoB;EACpB,iBAAiB;EACjB,sCAAsC;;EAEtC,8BAA8B;AAChC;;AAEA;;EAEE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;AACA;EACE,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,2CAA2C;EAC3C,mCAAmC;EACnC,sCAAsC;;EAEtC,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;;EAEf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,UAAU;AACZ;AACA;EACE,4CAA4C;AAC9C;AACA;EACE,qBAAqB;AACvB;AACA,WAAW;AACX,WAAW;;AAEX,2BAA2B;AAC3B,2BAA2B;AAC3B,2BAA2B;;AAE3B;EACE,iCAAiC;EACjC,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,iCAAiC;EACjC,aAAa;EACb,mBAAmB;AACrB;;AAEA;;EAEE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,yCAAyC;EACzC,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,2BAA2B;EAC3B,mCAAmC;EACnC,uBAAuB;AACzB;AACA;;EAEE,6CAA6C;EAC7C,4CAA4C;AAC9C;;AAEA;;EAEE,iBAAiB;EACjB,gBAAgB;EAChB,mCAAmC;EACnC,6CAA6C;AAC/C;;AAEA,mEAAmE;AACnE;EACE,UAAU;EACV,YAAY;EACZ,WAAW;EACX,yDAA8D;EAC9D,4BAA4B;EAC5B,iCAAiC;AACnC;AACA;EACE,gCAAgC;AAClC;AACA;EACE,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,yDAA8D;EAC9D,4BAA4B;EAC5B,gCAAgC;AAClC;AACA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA,4BAA4B;AAC5B,4BAA4B;;AAE5B;EACE,mCAAmC;EACnC;4BAC0B;EAC1B,0CAA0C;;EAE1C,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,mEAAmE;AACrE;;AAEA;EACE,uBAAuB;EACvB,oBAAoB;EACpB,kDAAkD;EAClD,YAAY;EACZ,wCAAwC;EACxC,8BAA8B;EAC9B,yCAAyC;;EAEzC,cAAc;EACd,aAAa;EACb,oBAAoB,EAAE,qDAAqD;AAC7E;AACA,iDAAiD;AACjD;EACE,UAAU;EACV,UAAU;EACV,4CAA4C;EAC5C,0CAA0C;AAC5C;AACA;EACE,UAAU;AACZ;AACA,4BAA4B;;AAE5B,2BAA2B;AAC3B,2BAA2B;;AAE3B,wBAAwB;AACxB,wBAAwB;AACxB,wBAAwB;;AAExB;EACE,uDAAuD;EACvD,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,sCAAsC;EACtC,UAAU;EACV,oBAAoB;EACpB,UAAU;AACZ;AACA;EACE,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,qBAAqB;EACrB,gCAAgC;EAChC,iDAAiD;EACjD,UAAU;EACV,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,2CAA2C;EAC3C,4CAA4C;;EAE5C,4CAA4C;EAC5C,mCAAmC;EACnC,eAAe;AACjB;AACA;EACE,UAAU;AACZ;AACA;AACA;;AAEA,wBAAwB;AACxB,wBAAwB;;AAExB,WAAW;AACX,WAAW;AACX,WAAW;;AAEX;EACE;;cAEY;EACZ,WAAW;EACX,qBAAqB;EACrB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yCAAyC;EACzC,yDAAyD;EACzD,gCAAgC;EAChC,UAAU;EACV,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,qBAAqB;AACvB;AACA,WAAW;AACX,WAAW","sourcesContent":["@font-face {\n  font-family: \"matrix\";\n  src: url(\"../assets/fonts/matrix.ttf\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  --main-content-margin: 1rem;\n  --border-radius: 23px;\n  --background-color-pop-up: brown;\n  --color_white_custom: #e8e6e3;\n  --background-color-army-green-light: #b5b9a4;\n  --background-color-army-green-medium: #a3a78d;\n  --background-color-army-green-dark: #42453a;\n  --overlay-black: rgba(0, 0, 0, 0.8);\n\n  --player-1-color: red;\n  --player-2-color: blue;\n  --row-cell-background-color: #d1fae5;\n  --winning-cells-color: purple;\n  --column-padding: 1rem;\n  --default-transition-duration: 1s;\n\n  --neon-text-shadow-high: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,\n    0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;\n  --neon-text-shadow-medium: 0 0 3.4px #fff, 0 0 5px #fff, 0 0 10.5px #fff,\n    0 0 21px #0fa, 0 0 41px #0fa, 0 0 46px #0fa, 0 0 51px #0fa, 0 0 75.5px #0fa;\n  --neon-text-shadow-low: 0 0 1.7px #fff, 0 0 2.5px #fff, 0 0 5.25px #fff,\n    0 0 10.5px #0fa, 0 0 20.5px #0fa, 0 0 23px #0fa, 0 0 25.5px #0fa,\n    0 0 37.75px #0fa;\n  --neon-text-shadow-very-low: 0 0 0.5px #fff, 0 0 0.6px #fff, 0 0 1.3px #fff,\n    0 0 2.5px #0fa, 0 0 5px #0fa, 0 0 6px #0fa, 0 0 6.5px #0fa, 0 0 37.75px #0fa;\n  --pink-neon-text-shadow-high: 0 0 4px #fff, 0 0 10px #fff, 0 0 18px #fff,\n    0 0 38px #f09, 0 0 73px #f09, 0 0 80px #f09, 0 0 94px #f09, 0 0 140px #f09;\n  --pink-neon-text-shadow-low: 0 0 1px #fff, 0 0 2.5px #fff, 0 0 4.5px #fff,\n    0 0 9.5px #f09, 0 0 18.25px #f09, 0 0 20px #f09, 0 0 23.5px #f09,\n    0 0 35px #f09;\n\n  --blue-neon-text-shadow: 0 0 6px rgba(202, 228, 225, 0.92),\n    0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(30, 132, 242, 0.52),\n    0 0 21px rgba(30, 132, 242, 0.92), 0 0 34px rgba(30, 132, 242, 0.78),\n    0 0 54px rgba(30, 132, 242, 0.92);\n\n  font-family: fantasy;\n}\n.background_video {\n  width: 100vw;\n  height: 100vh;\n  object-fit: cover;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n}\n\nbody {\n  background-color: black;\n  color: var(--color_white_custom);\n  margin: 0;\n  text-shadow: var(--blue-neon-text-shadow-low);\n}\n\n.main_container {\n  display: flex;\n  flex-direction: column;\n  /* padding: 2rem 4rem; */\n  gap: 1rem;\n}\n\n/* ****** */\n/* header */\n/* ****** */\n\n.header_main_container {\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  justify-content: space-between;\n  padding: 0.5rem 4rem;\n  padding-top: 1rem;\n  background-color: var(--overlay-black);\n\n  /* background-color: orange; */\n}\n\n.header_left,\n.header_right {\n  display: flex;\n  gap: 2rem;\n}\n\n.header_mid {\n  align-self: center;\n  text-shadow: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"matrix\";\n}\n.header_mid .header_game_name {\n  font-size: 3.5rem;\n  font-weight: 900;\n  margin-bottom: 0;\n}\n\n.icon {\n  height: 2rem;\n}\n.new_game_button .icon {\n  scale: 1.2;\n  margin-left: 0.3rem;\n}\n\nbutton {\n  width: 120px;\n  height: 50px;\n  background-color: var(--color_white_custom);\n  border-radius: var(--border-radius);\n  box-shadow: inset 0rem 0rem 1rem black;\n\n  border: none;\n  align-self: center;\n  text-align: center;\n  font-size: 1.4rem;\n  cursor: pointer;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nbutton.new_game_button {\n  width: 240px;\n  z-index: 4;\n}\nbutton.new_game_button.active {\n  box-shadow: var(--pink-neon-text-shadow-low);\n}\nbutton:hover {\n  transform: scale(1.1);\n}\n/* ****** */\n/* ****** */\n\n/* ********************** */\n/* Main Content Container */\n/* ********************** */\n\n.content_main_container {\n  /* border: 4px burlywood solid; */\n  margin: 2rem 4rem;\n  margin-bottom: 0;\n}\n\n.content_container {\n  /* border: 2px goldenrod solid; */\n  display: flex;\n  flex-direction: row;\n}\n\n.player_1_container,\n.player_2_container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-shadow: var(--blue-neon-text-shadow);\n  font-weight: 900;\n}\n\n.player_1_name,\n.player_2_name {\n  padding: 1rem;\n  padding-top: 1.5rem;\n  font-size: 2.2rem;\n  /* border: 2px red solid; */\n  border-radius: var(--border-radius);\n  transition-duration: 1s;\n}\n.player_1_name.active,\n.player_2_name.active {\n  text-shadow: var(--pink-neon-text-shadow-low);\n  box-shadow: var(--pink-neon-text-shadow-low);\n}\n\n.player_1_status_round,\n.player_2_status_round {\n  font-size: 1.5rem;\n  margin-top: 4rem;\n  border-radius: var(--border-radius);\n  /* box-shadow: inset 0rem 0rem 55rem black; */\n}\n\n/* cutting the pills .svg file in half and use them on both sided */\n.player_1_img_container {\n  width: 95%;\n  height: 100%;\n  float: left;\n  background-image: url(../assets/images/red_pill_blue_pill.svg);\n  background-repeat: no-repeat;\n  background-position: right center;\n}\n.player_1_img_container:nth-child(2) {\n  background-position: left center;\n}\n.player_2_img_container {\n  width: 95%;\n  height: 100%;\n  float: right;\n  background-image: url(../assets/images/red_pill_blue_pill.svg);\n  background-repeat: no-repeat;\n  background-position: left center;\n}\n.player_2_img_container:nth-child(2) {\n  background-position: right center;\n}\n\n.gameboard_container {\n  display: flex;\n  flex-direction: row;\n  /* width: minmax(100, 60vw); */\n}\n\n/* column and row settings */\n/* *********************** */\n\n.column {\n  border-radius: var(--border-radius);\n  /* border: 2px red solid;\n  background-color: brown; */\n  padding: 0 calc(var(--column-padding) / 2);\n\n  display: flex;\n  flex-direction: column;\n}\n.column:hover {\n  scale: 1.01;\n  box-shadow: inset 0 0 60px var(--background-color-army-green-light);\n}\n\n.row {\n  border: 6px black solid;\n  border-radius: 12rem;\n  background-color: var(--row-cell-background-color);\n  opacity: 0.9;\n  box-shadow: inset 0rem 0rem 1.5rem black;\n  padding: var(--column-padding);\n  margin: calc(var(--column-padding) / 5) 0;\n\n  height: 1.7rem;\n  width: 1.7rem;\n  pointer-events: none; /* this is important for the event capture on click */\n}\n/* here you can add animation for winning cells */\n.row.winning_row {\n  opacity: 1;\n  z-index: 4;\n  box-shadow: var(--neon-text-shadow-very-low);\n  animation: flicker 1.5s infinite alternate;\n}\n.row:hover {\n  scale: 1.1;\n}\n/* *********************** */\n\n/* ********************** */\n/* ********************** */\n\n/* ******************* */\n/* overlay and pop-ups */\n/* ******************* */\n\n.overlay_for_pop_ups {\n  transition-duration: var(--default-transition-duration);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--overlay-black);\n  opacity: 0;\n  pointer-events: none;\n  z-index: 3;\n}\n.overlay_for_pop_ups.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.gameover_pop_up {\n  /* margin: 0 auto; */\n  font-size: 4rem;\n  font-family: \"matrix\";\n  color: var(--color_white_custom);\n  /* border: 2px var(--color_white_custom) solid; */\n  opacity: 0;\n  z-index: 4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-shadow: var(--neon-text-shadow-medium);\n  box-shadow: var(--neon-text-shadow-very-low);\n\n  /* box-shadow: inset 1rem 1rem 4rem white; */\n  border-radius: var(--border-radius);\n  padding: 0.7rem;\n}\n.gameover_pop_up.active {\n  opacity: 1;\n}\n.gameover_pop_up .status_winning {\n}\n\n/* ******************* */\n/* ******************* */\n\n/* ****** */\n/* footer */\n/* ****** */\n\nfooter {\n  /* position: fixed;\n  left: 0;\n  bottom: 0; */\n  width: 100%;\n  background-color: red;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: var(--background-color-army-green-dark);\n  color: var(--color_white_custom);\n  z-index: 2;\n  text-shadow: none;\n  margin: 0;\n}\n\nfooter img {\n  height: 2rem;\n  scale: 1.2;\n}\n\nfooter img:hover {\n  transform: scale(1.1);\n}\n/* ****** */\n/* ****** */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/javascript/dom_materials.js":
/*!*****************************************!*\
  !*** ./src/javascript/dom_materials.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateMaterialsDOM": () => (/* binding */ CreateMaterialsDOM)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/javascript/index.js");


function CreateMaterialsDOM() {
  const gameboardContainer = document.querySelector(".gameboard_container");

  function playRoundClickEvent(event) {
    let columnNumber = event.target.dataset.column_number;
    let selectedColumn = _index_js__WEBPACK_IMPORTED_MODULE_0__.game.gameboard.getBoard()[columnNumber];
    _index_js__WEBPACK_IMPORTED_MODULE_0__.game.playRound(selectedColumn);
    console.log(selectedColumn);
  }

  function EventListenerToColumns() {
    const columns = document.querySelectorAll(".column");

    function add() {
      columns.forEach((column) => {
        column.addEventListener("click", (event) => {
          playRoundClickEvent(event);
        });
      });
    }

    function remove() {
      columns.forEach((column) => {
        column.removeEventListener("click", (event) => {
          playRoundClickEvent(event);
        });
      });
    }

    return { add, remove };
  }

  function addEventListenerToNewGameButton() {
    const newGameButton = document.querySelector(".new_game_button");
    newGameButton.addEventListener("click", () => {
      _index_js__WEBPACK_IMPORTED_MODULE_0__.game.startNewGame();
    });
  }

  function cleanExistingGameboardElements() {
    const childrenOfContainer = document.querySelectorAll(
      "div.gameboard_container > *"
    );
    childrenOfContainer.forEach((element) => {
      element.remove();
    });
  }

  function displayGameboardDOM() {
    for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.game.gameboard.getBoard().length; i++) {
      const newColumn = document.createElement("div");
      newColumn.classList.add("column");
      newColumn.setAttribute("data-column_number", i);
      gameboardContainer.appendChild(newColumn);

      for (let j = 0; j < _index_js__WEBPACK_IMPORTED_MODULE_0__.game.gameboard.getBoard()[i].length; j++) {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        newRow.setAttribute("data-row_number", j);

        // newRow.innerHTML = game.gameboard.getBoard()[i][j].status;
        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.game.gameboard.getBoard()[i][j].status == 1) {
          newRow.setAttribute(
            "style",
            "background-color: var(--player-1-color); opacity: 1;"
          );
        } else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.game.gameboard.getBoard()[i][j].status == 2) {
          newRow.setAttribute(
            "style",
            "background-color: var(--player-2-color); opacity: 1;"
          );
        }

        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.game.gameboard.getBoard()[i][j].isWinningCell == true) {
          newRow.classList.add("winning_row");
        }
        newColumn.appendChild(newRow);
      }
    }

    const player1Name = document.querySelector(".player_1_name");
    const player2Name = document.querySelector(".player_2_name");
    player1Name.innerHTML = _index_js__WEBPACK_IMPORTED_MODULE_0__.game.getPlayers()[0].name.toUpperCase();
    player2Name.innerHTML = _index_js__WEBPACK_IMPORTED_MODULE_0__.game.getPlayers()[1].name.toUpperCase();
  }

  // function displayRoundStatusMessage(activePlayer, status_message) {
  //   const player1_StatusRound = document.querySelector(
  //     ".player_1_status_round"
  //   );
  //   const player2_StatusRound = document.querySelector(
  //     ".player_2_status_round"
  //   );

  //   if (activePlayer === game.getPlayers()[0]) {
  //     player1_StatusRound.innerHTML = status_message;
  //     player2_StatusRound.innerHTML = "&nbsp;";
  //   } else if (activePlayer === game.getPlayers()[1]) {
  //     player1_StatusRound.innerHTML = "&nbsp;";
  //     player2_StatusRound.innerHTML = status_message;
  //   }
  // }

  function displayWinningStatusMessage(status_message) {
    const statusWinning = document.querySelector(".status_winning");
    statusWinning.innerHTML = status_message;
  }

  function displayActivePlayerFocus(activePlayer) {
    const player1Name = document.querySelector(".player_1_name");
    const player2Name = document.querySelector(".player_2_name");

    if (activePlayer === _index_js__WEBPACK_IMPORTED_MODULE_0__.game.getPlayers()[0]) {
      player1Name.classList.add("active");
      player2Name.classList.remove("active");
    } else if (activePlayer === _index_js__WEBPACK_IMPORTED_MODULE_0__.game.getPlayers()[1]) {
      player1Name.classList.remove("active");
      player2Name.classList.add("active");
    }
  }

  function endGameDOM() {
    const overlay = document.querySelector(".overlay_for_pop_ups");
    const gameoverPopUp = document.querySelector(".gameover_pop_up");
    const buttonNewGame = document.querySelector(".button.new_game_button");

    function add() {
      overlay.classList.add("active");
      gameoverPopUp.classList.add("active");
      buttonNewGame.classList.add("active");
    }
    function remove() {
      overlay.classList.remove("active");
      gameoverPopUp.classList.remove("active");
      buttonNewGame.classList.remove("active");
    }
    return { add, remove };
  }

  function addHeaderConfig() {
    function addAudioConfig() {
      const audio = document.querySelector("audio");
      const audioIconOn = document.querySelector(
        "button.audio_button .icon_on"
      );
      const audioIconOff = document.querySelector(
        "button.audio_button .icon_off"
      );
      audioIconOn.style.display = "none";
      const audioButton = document.querySelector("button.audio_button");

      function togglePlay() {
        if (audio.paused) {
          audioIconOn.style.display = "block";
          audioIconOff.style.display = "none";
          audio.play();
        } else {
          audioIconOn.style.display = "none";
          audioIconOff.style.display = "block";
          audio.pause();
        }
      }

      audioButton.addEventListener("click", () => {
        togglePlay();
      });
    }

    function addInfoButtonConfig() {
      const overlay = document.querySelector(".overlay_for_pop_ups");
      const infoButton = document.querySelector("button.info_button");
      const imagePlayerRed = document.querySelector(".player_1_img_container");
      const imagePlayerBlue = document.querySelector(".player_2_img_container");
      const restartButton = document.querySelector("button.new_game_button");

      let isInfoOn = false;

      function infoButtonToggle() {
        if (!isInfoOn) {
          restartButton.style = "z-index: 1;";
          overlay.classList.add("active");
          infoButton.setAttribute("style", "z-index: 10;");
          infoButton.style = "z-index: 10;";
          imagePlayerRed.style =
            "z-index: 10; transition-duration: var(--default-transition-duration); scale: 1.3";
          imagePlayerBlue.style =
            "z-index: 10; transition-duration: var(--default-transition-duration); scale: 1.3";

          isInfoOn = true;
        } else {
          restartButton.style = "";
          overlay.classList.remove("active");
          infoButton.style = "";
          imagePlayerRed.style = "";
          imagePlayerBlue.style = "";

          isInfoOn = false;
        }
      }

      infoButton.addEventListener("click", () => {
        infoButtonToggle();
      });
    }

    addAudioConfig();
    addInfoButtonConfig();
  }

  return {
    EventListenerToColumns,
    cleanExistingGameboardElements,
    displayGameboardDOM,
    // displayRoundStatusMessage,
    displayWinningStatusMessage,
    displayActivePlayerFocus,
    addEventListenerToNewGameButton,
    endGameDOM,
    addHeaderConfig,
  };
}


/***/ }),

/***/ "./src/javascript/gameboard.js":
/*!*************************************!*\
  !*** ./src/javascript/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _dom_materials_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_materials.js */ "./src/javascript/dom_materials.js");


function Gameboard() {
  const rows = 6;
  const columns = 7;
  const board = [];
  const domCreator = (0,_dom_materials_js__WEBPACK_IMPORTED_MODULE_0__.CreateMaterialsDOM)();

  function getBoard() {
    return board;
  }
  function getDomCreator() {
    return domCreator;
  }

  function createGameboardGrids() {
    board.length = 0;

    for (let i = 0; i < columns; i++) {
      board[i] = [];

      for (let j = 0; j < rows; j++) {
        board[i].push(Cell(0));
      }
    }
  }

  function Cell(status) {
    const isWinningCell = false;

    function addToken(player) {
      status = player;
    }
    function getStatus() {
      return status;
    }

    return { status, isWinningCell, addToken, getStatus };
  }

  function whichCellIsAvailable(column) {
    //returns which cell on the selected column is available

    if (column[0].status !== 0) {
      console.log("this column is full");
      return;
    }

    for (let i = rows - 1; i >= 0; i--) {
      if (column[i].status === 0) {
        return column[i];
      }
    }
  }

  function dropToken(column, playerToken) {
    let myColumn = column;

    let selectedCell = whichCellIsAvailable(myColumn);

    if (selectedCell == undefined) {
      return;
    }

    selectedCell.status = playerToken;
  }

  function displayGameboard() {
    domCreator.cleanExistingGameboardElements();
    domCreator.displayGameboardDOM();
    domCreator.EventListenerToColumns().add();
    domCreator.addEventListenerToNewGameButton();
  }

  function checkGameOver(player) {
    //Check draw
    function isDraw() {
      for (let col = 0; col < columns; col++) {
        if (board[col][0].status === 0) {
          return false;
        }
      }
      return true;
    }
    if (isDraw()) {
      return "draw";
    }

    // Check columns
    for (let col = 0; col < columns; col++) {
      for (let row = 0; row < rows - 3; row++) {
        if (
          getBoard()[col][row].status == player.token &&
          getBoard()[col][row + 1].status == player.token &&
          getBoard()[col][row + 2].status == player.token &&
          getBoard()[col][row + 3].status == player.token
        ) {
          getBoard()[col][row].isWinningCell = true;
          getBoard()[col][row + 1].isWinningCell = true;
          getBoard()[col][row + 2].isWinningCell = true;
          getBoard()[col][row + 3].isWinningCell = true;
          return true;
        }
      }
    }

    // Check rows
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns - 3; col++) {
        if (
          getBoard()[col][row].status == player.token &&
          getBoard()[col + 1][row].status == player.token &&
          getBoard()[col + 2][row].status == player.token &&
          getBoard()[col + 3][row].status == player.token
        ) {
          getBoard()[col][row].isWinningCell = true;
          getBoard()[col + 1][row].isWinningCell = true;
          getBoard()[col + 2][row].isWinningCell = true;
          getBoard()[col + 3][row].isWinningCell = true;
          return true;
        }
      }
    }

    // Check diagonal (top left to bottom right)
    for (let row = 0; row < rows - 3; row++) {
      for (let col = 0; col < columns - 3; col++) {
        if (
          getBoard()[col][row].status == player.token &&
          getBoard()[col + 1][row + 1].status == player.token &&
          getBoard()[col + 2][row + 2].status == player.token &&
          getBoard()[col + 3][row + 3].status == player.token
        ) {
          getBoard()[col][row].isWinningCell = true;
          getBoard()[col + 1][row + 1].isWinningCell = true;
          getBoard()[col + 2][row + 2].isWinningCell = true;
          getBoard()[col + 3][row + 3].isWinningCell = true;
          return true;
        }
      }
    }

    // Check diagonal (top right to bottom left)
    for (let row = 0; row < rows - 3; row++) {
      for (let col = 3; col < columns; col++) {
        if (
          getBoard()[col][row].status == player.token &&
          getBoard()[col - 1][row + 1].status == player.token &&
          getBoard()[col - 2][row + 2].status == player.token &&
          getBoard()[col - 3][row + 3].status == player.token
        ) {
          getBoard()[col][row].isWinningCell = true;
          getBoard()[col - 1][row + 1].isWinningCell = true;
          getBoard()[col - 2][row + 2].isWinningCell = true;
          getBoard()[col - 3][row + 3].isWinningCell = true;
          return true;
        }
      }
    }

    return false; // no win found
  }

  return {
    // board,
    getDomCreator,
    getBoard,
    createGameboardGrids,
    displayGameboard,
    dropToken,
    whichCellIsAvailable,
    checkGameOver,
  };
}


/***/ }),

/***/ "./src/javascript/gamecontroller.js":
/*!******************************************!*\
  !*** ./src/javascript/gamecontroller.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameController": () => (/* binding */ GameController)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/javascript/gameboard.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/javascript/index.js");



function GameController() {
  const gameboard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(); // don't change the name
  gameboard.getDomCreator().addHeaderConfig();

  const playerOneName = "Player Red";
  const playerTwoName = "Player Blue";

  const players = [
    {
      name: playerOneName,
      token: "1",
    },
    {
      name: playerTwoName,
      token: "2",
    },
  ];
  function getPlayers() {
    return players;
  }

  let activePlayer = players[0];

  function getActivePlayer() {
    return activePlayer;
  }

  function switchPlayerTurn() {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
    const playRoundLogMessage = `${
      getActivePlayer().name
    } is playing his turn...`;
    gameboard.getDomCreator().displayActivePlayerFocus(activePlayer);
    // gameboard
    //   .getDomCreator()
    //   .displayRoundStatusMessage(activePlayer, playRoundLogMessage);
  }

  function startNewGame() {
    const defaultWinningMessage = "Winning status";
    activePlayer = players[1];
    switchPlayerTurn();
    gameboard.createGameboardGrids();
    gameboard.displayGameboard();
    gameboard
      .getDomCreator()
      .displayWinningStatusMessage(defaultWinningMessage);
    gameboard.getDomCreator().endGameDOM().remove();
  }

  function endTheGame(winningStatus) {
    const drawMessage = "It has been a DRAW";
    const winningMessage = `${activePlayer.name} has WON`;

    gameboard.getDomCreator().EventListenerToColumns().remove();
    if (winningStatus === "draw") {
      gameboard.getDomCreator().displayWinningStatusMessage(drawMessage);
    } else if (winningStatus === true) {
      gameboard.getDomCreator().displayWinningStatusMessage(winningMessage);
    }
    gameboard.getDomCreator().endGameDOM().add();
    gameboard.displayGameboard();
  }

  // function displayNewRound() {
  //   gameboard.displayGameboard();
  //   console.log(`it is ${getActivePlayer().name}´s turn`);
  // }

  function playRound(column) {
    if (gameboard.whichCellIsAvailable(column) != undefined) {
      gameboard.dropToken(column, getActivePlayer().token);
      gameboard.displayGameboard();
      const winningStatus = gameboard.checkGameOver(activePlayer);

      if (winningStatus !== false) {
        endTheGame(winningStatus);
        return;
      }
      switchPlayerTurn();
    }
  }

  return {
    gameboard,
    getPlayers,
    switchPlayerTurn,
    // displayNewRound,
    getActivePlayer,
    playRound,
    startNewGame,
  };
}


/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _assets_images_github_64_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/github-64.png */ "./src/assets/images/github-64.png");
/* harmony import */ var _gamecontroller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gamecontroller.js */ "./src/javascript/gamecontroller.js");


// import { CreateMaterialsDOM } from "./dom_materials.js";
// import { Gameboard } from "./gameboard.js";


const game = (0,_gamecontroller_js__WEBPACK_IMPORTED_MODULE_2__.GameController)(); // don't change the name
game.startNewGame();

console.log(game.gameboard.getBoard());
console.log(game.gameboard.getBoard()[0]);
console.log(game.gameboard.getBoard()[0][0]);

// game.playRound(game.gameboard.getBoard()[0]);
// game.startNewGame();


/***/ }),

/***/ "./src/assets/fonts/matrix.ttf":
/*!*************************************!*\
  !*** ./src/assets/fonts/matrix.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5dca1e2a70b092f17674.ttf";

/***/ }),

/***/ "./src/assets/images/github-64.png":
/*!*****************************************!*\
  !*** ./src/assets/images/github-64.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "770b383a99485f3f7a7d.png";

/***/ }),

/***/ "./src/assets/images/red_pill_blue_pill.svg":
/*!**************************************************!*\
  !*** ./src/assets/images/red_pill_blue_pill.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2639eaf5a91a4abaf7e1.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/javascript/gamecontroller.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUEsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0syQztBQUNUOztBQUUzQjtBQUNQLG9CQUFvQix3REFBUyxJQUFJO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixtQkFBbUI7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9GNkI7QUFDd0I7QUFDckQsWUFBWSxxQkFBcUI7QUFDakMsWUFBWSxZQUFZO0FBQzZCOztBQUU5QyxhQUFhLGtFQUFjLElBQUk7QUFDdEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25uZWN0LWZvdXIvLi9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9jb25uZWN0LWZvdXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY29ubmVjdC1mb3VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY29ubmVjdC1mb3VyLy4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSIsIndlYnBhY2s6Ly9jb25uZWN0LWZvdXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY29ubmVjdC1mb3VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jb25uZWN0LWZvdXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY29ubmVjdC1mb3VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL3NyYy9qYXZhc2NyaXB0L2RvbV9tYXRlcmlhbHMuanMiLCJ3ZWJwYWNrOi8vY29ubmVjdC1mb3VyLy4vc3JjL2phdmFzY3JpcHQvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL3NyYy9qYXZhc2NyaXB0L2dhbWVjb250cm9sbGVyLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL3NyYy9qYXZhc2NyaXB0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvbWF0cml4LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvcmVkX3BpbGxfYmx1ZV9waWxsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWF0cml4XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gIC0tbWFpbi1jb250ZW50LW1hcmdpbjogMXJlbTtcXG4gIC0tYm9yZGVyLXJhZGl1czogMjNweDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci1wb3AtdXA6IGJyb3duO1xcbiAgLS1jb2xvcl93aGl0ZV9jdXN0b206ICNlOGU2ZTM7XFxuICAtLWJhY2tncm91bmQtY29sb3ItYXJteS1ncmVlbi1saWdodDogI2I1YjlhNDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci1hcm15LWdyZWVuLW1lZGl1bTogI2EzYTc4ZDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci1hcm15LWdyZWVuLWRhcms6ICM0MjQ1M2E7XFxuICAtLW92ZXJsYXktYmxhY2s6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG5cXG4gIC0tcGxheWVyLTEtY29sb3I6IHJlZDtcXG4gIC0tcGxheWVyLTItY29sb3I6IGJsdWU7XFxuICAtLXJvdy1jZWxsLWJhY2tncm91bmQtY29sb3I6ICNkMWZhZTU7XFxuICAtLXdpbm5pbmctY2VsbHMtY29sb3I6IHB1cnBsZTtcXG4gIC0tY29sdW1uLXBhZGRpbmc6IDFyZW07XFxuICAtLWRlZmF1bHQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XFxuXFxuICAtLW5lb24tdGV4dC1zaGFkb3ctaGlnaDogMCAwIDdweCAjZmZmLCAwIDAgMTBweCAjZmZmLCAwIDAgMjFweCAjZmZmLFxcbiAgICAwIDAgNDJweCAjMGZhLCAwIDAgODJweCAjMGZhLCAwIDAgOTJweCAjMGZhLCAwIDAgMTAycHggIzBmYSwgMCAwIDE1MXB4ICMwZmE7XFxuICAtLW5lb24tdGV4dC1zaGFkb3ctbWVkaXVtOiAwIDAgMy40cHggI2ZmZiwgMCAwIDVweCAjZmZmLCAwIDAgMTAuNXB4ICNmZmYsXFxuICAgIDAgMCAyMXB4ICMwZmEsIDAgMCA0MXB4ICMwZmEsIDAgMCA0NnB4ICMwZmEsIDAgMCA1MXB4ICMwZmEsIDAgMCA3NS41cHggIzBmYTtcXG4gIC0tbmVvbi10ZXh0LXNoYWRvdy1sb3c6IDAgMCAxLjdweCAjZmZmLCAwIDAgMi41cHggI2ZmZiwgMCAwIDUuMjVweCAjZmZmLFxcbiAgICAwIDAgMTAuNXB4ICMwZmEsIDAgMCAyMC41cHggIzBmYSwgMCAwIDIzcHggIzBmYSwgMCAwIDI1LjVweCAjMGZhLFxcbiAgICAwIDAgMzcuNzVweCAjMGZhO1xcbiAgLS1uZW9uLXRleHQtc2hhZG93LXZlcnktbG93OiAwIDAgMC41cHggI2ZmZiwgMCAwIDAuNnB4ICNmZmYsIDAgMCAxLjNweCAjZmZmLFxcbiAgICAwIDAgMi41cHggIzBmYSwgMCAwIDVweCAjMGZhLCAwIDAgNnB4ICMwZmEsIDAgMCA2LjVweCAjMGZhLCAwIDAgMzcuNzVweCAjMGZhO1xcbiAgLS1waW5rLW5lb24tdGV4dC1zaGFkb3ctaGlnaDogMCAwIDRweCAjZmZmLCAwIDAgMTBweCAjZmZmLCAwIDAgMThweCAjZmZmLFxcbiAgICAwIDAgMzhweCAjZjA5LCAwIDAgNzNweCAjZjA5LCAwIDAgODBweCAjZjA5LCAwIDAgOTRweCAjZjA5LCAwIDAgMTQwcHggI2YwOTtcXG4gIC0tcGluay1uZW9uLXRleHQtc2hhZG93LWxvdzogMCAwIDFweCAjZmZmLCAwIDAgMi41cHggI2ZmZiwgMCAwIDQuNXB4ICNmZmYsXFxuICAgIDAgMCA5LjVweCAjZjA5LCAwIDAgMTguMjVweCAjZjA5LCAwIDAgMjBweCAjZjA5LCAwIDAgMjMuNXB4ICNmMDksXFxuICAgIDAgMCAzNXB4ICNmMDk7XFxuXFxuICAtLWJsdWUtbmVvbi10ZXh0LXNoYWRvdzogMCAwIDZweCByZ2JhKDIwMiwgMjI4LCAyMjUsIDAuOTIpLFxcbiAgICAwIDAgMzBweCByZ2JhKDIwMiwgMjI4LCAyMjUsIDAuMzQpLCAwIDAgMTJweCByZ2JhKDMwLCAxMzIsIDI0MiwgMC41MiksXFxuICAgIDAgMCAyMXB4IHJnYmEoMzAsIDEzMiwgMjQyLCAwLjkyKSwgMCAwIDM0cHggcmdiYSgzMCwgMTMyLCAyNDIsIDAuNzgpLFxcbiAgICAwIDAgNTRweCByZ2JhKDMwLCAxMzIsIDI0MiwgMC45Mik7XFxuXFxuICBmb250LWZhbWlseTogZmFudGFzeTtcXG59XFxuLmJhY2tncm91bmRfdmlkZW8ge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogdmFyKC0tY29sb3Jfd2hpdGVfY3VzdG9tKTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1ibHVlLW5lb24tdGV4dC1zaGFkb3ctbG93KTtcXG59XFxuXFxuLm1haW5fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLyogcGFkZGluZzogMnJlbSA0cmVtOyAqL1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4vKiAqKioqKiogKi9cXG4vKiBoZWFkZXIgKi9cXG4vKiAqKioqKiogKi9cXG5cXG4uaGVhZGVyX21haW5fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtIDRyZW07XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW92ZXJsYXktYmxhY2spO1xcblxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyAqL1xcbn1cXG5cXG4uaGVhZGVyX2xlZnQsXFxuLmhlYWRlcl9yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uaGVhZGVyX21pZCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIm1hdHJpeFxcXCI7XFxufVxcbi5oZWFkZXJfbWlkIC5oZWFkZXJfZ2FtZV9uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5pY29uIHtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuLm5ld19nYW1lX2J1dHRvbiAuaWNvbiB7XFxuICBzY2FsZTogMS4yO1xcbiAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yX3doaXRlX2N1c3RvbSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDByZW0gMHJlbSAxcmVtIGJsYWNrO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5idXR0b24ubmV3X2dhbWVfYnV0dG9uIHtcXG4gIHdpZHRoOiAyNDBweDtcXG4gIHotaW5kZXg6IDQ7XFxufVxcbmJ1dHRvbi5uZXdfZ2FtZV9idXR0b24uYWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXBpbmstbmVvbi10ZXh0LXNoYWRvdy1sb3cpO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4vKiAqKioqKiogKi9cXG4vKiAqKioqKiogKi9cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqICovXFxuLyogTWFpbiBDb250ZW50IENvbnRhaW5lciAqL1xcbi8qICoqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4uY29udGVudF9tYWluX2NvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDRweCBidXJseXdvb2Qgc29saWQ7ICovXFxuICBtYXJnaW46IDJyZW0gNHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5jb250ZW50X2NvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDJweCBnb2xkZW5yb2Qgc29saWQ7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnBsYXllcl8xX2NvbnRhaW5lcixcXG4ucGxheWVyXzJfY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tYmx1ZS1uZW9uLXRleHQtc2hhZG93KTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5wbGF5ZXJfMV9uYW1lLFxcbi5wbGF5ZXJfMl9uYW1lIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxuICAvKiBib3JkZXI6IDJweCByZWQgc29saWQ7ICovXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xcbn1cXG4ucGxheWVyXzFfbmFtZS5hY3RpdmUsXFxuLnBsYXllcl8yX25hbWUuYWN0aXZlIHtcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1waW5rLW5lb24tdGV4dC1zaGFkb3ctbG93KTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXBpbmstbmVvbi10ZXh0LXNoYWRvdy1sb3cpO1xcbn1cXG5cXG4ucGxheWVyXzFfc3RhdHVzX3JvdW5kLFxcbi5wbGF5ZXJfMl9zdGF0dXNfcm91bmQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAvKiBib3gtc2hhZG93OiBpbnNldCAwcmVtIDByZW0gNTVyZW0gYmxhY2s7ICovXFxufVxcblxcbi8qIGN1dHRpbmcgdGhlIHBpbGxzIC5zdmcgZmlsZSBpbiBoYWxmIGFuZCB1c2UgdGhlbSBvbiBib3RoIHNpZGVkICovXFxuLnBsYXllcl8xX2ltZ19jb250YWluZXIge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XFxufVxcbi5wbGF5ZXJfMV9pbWdfY29udGFpbmVyOm50aC1jaGlsZCgyKSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXG59XFxuLnBsYXllcl8yX2ltZ19jb250YWluZXIge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XFxufVxcbi5wbGF5ZXJfMl9pbWdfY29udGFpbmVyOm50aC1jaGlsZCgyKSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XFxufVxcblxcbi5nYW1lYm9hcmRfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgLyogd2lkdGg6IG1pbm1heCgxMDAsIDYwdncpOyAqL1xcbn1cXG5cXG4vKiBjb2x1bW4gYW5kIHJvdyBzZXR0aW5ncyAqL1xcbi8qICoqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLmNvbHVtbiB7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIC8qIGJvcmRlcjogMnB4IHJlZCBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duOyAqL1xcbiAgcGFkZGluZzogMCBjYWxjKHZhcigtLWNvbHVtbi1wYWRkaW5nKSAvIDIpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5jb2x1bW46aG92ZXIge1xcbiAgc2NhbGU6IDEuMDE7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNjBweCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWFybXktZ3JlZW4tbGlnaHQpO1xcbn1cXG5cXG4ucm93IHtcXG4gIGJvcmRlcjogNnB4IGJsYWNrIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMTJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3ctY2VsbC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDByZW0gMHJlbSAxLjVyZW0gYmxhY2s7XFxuICBwYWRkaW5nOiB2YXIoLS1jb2x1bW4tcGFkZGluZyk7XFxuICBtYXJnaW46IGNhbGModmFyKC0tY29sdW1uLXBhZGRpbmcpIC8gNSkgMDtcXG5cXG4gIGhlaWdodDogMS43cmVtO1xcbiAgd2lkdGg6IDEuN3JlbTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiB0aGlzIGlzIGltcG9ydGFudCBmb3IgdGhlIGV2ZW50IGNhcHR1cmUgb24gY2xpY2sgKi9cXG59XFxuLyogaGVyZSB5b3UgY2FuIGFkZCBhbmltYXRpb24gZm9yIHdpbm5pbmcgY2VsbHMgKi9cXG4ucm93Lndpbm5pbmdfcm93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiA0O1xcbiAgYm94LXNoYWRvdzogdmFyKC0tbmVvbi10ZXh0LXNoYWRvdy12ZXJ5LWxvdyk7XFxuICBhbmltYXRpb246IGZsaWNrZXIgMS41cyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcbi5yb3c6aG92ZXIge1xcbiAgc2NhbGU6IDEuMTtcXG59XFxuLyogKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqICovXFxuLyogKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi8qICoqKioqKioqKioqKioqKioqKiogKi9cXG4vKiBvdmVybGF5IGFuZCBwb3AtdXBzICovXFxuLyogKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi5vdmVybGF5X2Zvcl9wb3BfdXBzIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLWRlZmF1bHQtdHJhbnNpdGlvbi1kdXJhdGlvbik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdmVybGF5LWJsYWNrKTtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHotaW5kZXg6IDM7XFxufVxcbi5vdmVybGF5X2Zvcl9wb3BfdXBzLmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLmdhbWVvdmVyX3BvcF91cCB7XFxuICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWF0cml4XFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcl93aGl0ZV9jdXN0b20pO1xcbiAgLyogYm9yZGVyOiAycHggdmFyKC0tY29sb3Jfd2hpdGVfY3VzdG9tKSBzb2xpZDsgKi9cXG4gIG9wYWNpdHk6IDA7XFxuICB6LWluZGV4OiA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1uZW9uLXRleHQtc2hhZG93LW1lZGl1bSk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1uZW9uLXRleHQtc2hhZG93LXZlcnktbG93KTtcXG5cXG4gIC8qIGJveC1zaGFkb3c6IGluc2V0IDFyZW0gMXJlbSA0cmVtIHdoaXRlOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBwYWRkaW5nOiAwLjdyZW07XFxufVxcbi5nYW1lb3Zlcl9wb3BfdXAuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5nYW1lb3Zlcl9wb3BfdXAgLnN0YXR1c193aW5uaW5nIHtcXG59XFxuXFxuLyogKioqKioqKioqKioqKioqKioqKiAqL1xcbi8qICoqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4vKiAqKioqKiogKi9cXG4vKiBmb290ZXIgKi9cXG4vKiAqKioqKiogKi9cXG5cXG5mb290ZXIge1xcbiAgLyogcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1hcm15LWdyZWVuLWRhcmspO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yX3doaXRlX2N1c3RvbSk7XFxuICB6LWluZGV4OiAyO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmZvb3RlciBpbWcge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgc2NhbGU6IDEuMjtcXG59XFxuXFxuZm9vdGVyIGltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi8qICoqKioqKiAqL1xcbi8qICoqKioqKiAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUFzQztFQUN0QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLDRDQUE0QztFQUM1Qyw2Q0FBNkM7RUFDN0MsMkNBQTJDO0VBQzNDLG1DQUFtQzs7RUFFbkMscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixpQ0FBaUM7O0VBRWpDOytFQUM2RTtFQUM3RTsrRUFDNkU7RUFDN0U7O29CQUVrQjtFQUNsQjtnRkFDOEU7RUFD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c0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWF0cml4XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvbWF0cml4LnR0ZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluLWNvbnRlbnQtbWFyZ2luOiAxcmVtO1xcbiAgLS1ib3JkZXItcmFkaXVzOiAyM3B4O1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLXBvcC11cDogYnJvd247XFxuICAtLWNvbG9yX3doaXRlX2N1c3RvbTogI2U4ZTZlMztcXG4gIC0tYmFja2dyb3VuZC1jb2xvci1hcm15LWdyZWVuLWxpZ2h0OiAjYjViOWE0O1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWFybXktZ3JlZW4tbWVkaXVtOiAjYTNhNzhkO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWFybXktZ3JlZW4tZGFyazogIzQyNDUzYTtcXG4gIC0tb3ZlcmxheS1ibGFjazogcmdiYSgwLCAwLCAwLCAwLjgpO1xcblxcbiAgLS1wbGF5ZXItMS1jb2xvcjogcmVkO1xcbiAgLS1wbGF5ZXItMi1jb2xvcjogYmx1ZTtcXG4gIC0tcm93LWNlbGwtYmFja2dyb3VuZC1jb2xvcjogI2QxZmFlNTtcXG4gIC0td2lubmluZy1jZWxscy1jb2xvcjogcHVycGxlO1xcbiAgLS1jb2x1bW4tcGFkZGluZzogMXJlbTtcXG4gIC0tZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcXG5cXG4gIC0tbmVvbi10ZXh0LXNoYWRvdy1oaWdoOiAwIDAgN3B4ICNmZmYsIDAgMCAxMHB4ICNmZmYsIDAgMCAyMXB4ICNmZmYsXFxuICAgIDAgMCA0MnB4ICMwZmEsIDAgMCA4MnB4ICMwZmEsIDAgMCA5MnB4ICMwZmEsIDAgMCAxMDJweCAjMGZhLCAwIDAgMTUxcHggIzBmYTtcXG4gIC0tbmVvbi10ZXh0LXNoYWRvdy1tZWRpdW06IDAgMCAzLjRweCAjZmZmLCAwIDAgNXB4ICNmZmYsIDAgMCAxMC41cHggI2ZmZixcXG4gICAgMCAwIDIxcHggIzBmYSwgMCAwIDQxcHggIzBmYSwgMCAwIDQ2cHggIzBmYSwgMCAwIDUxcHggIzBmYSwgMCAwIDc1LjVweCAjMGZhO1xcbiAgLS1uZW9uLXRleHQtc2hhZG93LWxvdzogMCAwIDEuN3B4ICNmZmYsIDAgMCAyLjVweCAjZmZmLCAwIDAgNS4yNXB4ICNmZmYsXFxuICAgIDAgMCAxMC41cHggIzBmYSwgMCAwIDIwLjVweCAjMGZhLCAwIDAgMjNweCAjMGZhLCAwIDAgMjUuNXB4ICMwZmEsXFxuICAgIDAgMCAzNy43NXB4ICMwZmE7XFxuICAtLW5lb24tdGV4dC1zaGFkb3ctdmVyeS1sb3c6IDAgMCAwLjVweCAjZmZmLCAwIDAgMC42cHggI2ZmZiwgMCAwIDEuM3B4ICNmZmYsXFxuICAgIDAgMCAyLjVweCAjMGZhLCAwIDAgNXB4ICMwZmEsIDAgMCA2cHggIzBmYSwgMCAwIDYuNXB4ICMwZmEsIDAgMCAzNy43NXB4ICMwZmE7XFxuICAtLXBpbmstbmVvbi10ZXh0LXNoYWRvdy1oaWdoOiAwIDAgNHB4ICNmZmYsIDAgMCAxMHB4ICNmZmYsIDAgMCAxOHB4ICNmZmYsXFxuICAgIDAgMCAzOHB4ICNmMDksIDAgMCA3M3B4ICNmMDksIDAgMCA4MHB4ICNmMDksIDAgMCA5NHB4ICNmMDksIDAgMCAxNDBweCAjZjA5O1xcbiAgLS1waW5rLW5lb24tdGV4dC1zaGFkb3ctbG93OiAwIDAgMXB4ICNmZmYsIDAgMCAyLjVweCAjZmZmLCAwIDAgNC41cHggI2ZmZixcXG4gICAgMCAwIDkuNXB4ICNmMDksIDAgMCAxOC4yNXB4ICNmMDksIDAgMCAyMHB4ICNmMDksIDAgMCAyMy41cHggI2YwOSxcXG4gICAgMCAwIDM1cHggI2YwOTtcXG5cXG4gIC0tYmx1ZS1uZW9uLXRleHQtc2hhZG93OiAwIDAgNnB4IHJnYmEoMjAyLCAyMjgsIDIyNSwgMC45MiksXFxuICAgIDAgMCAzMHB4IHJnYmEoMjAyLCAyMjgsIDIyNSwgMC4zNCksIDAgMCAxMnB4IHJnYmEoMzAsIDEzMiwgMjQyLCAwLjUyKSxcXG4gICAgMCAwIDIxcHggcmdiYSgzMCwgMTMyLCAyNDIsIDAuOTIpLCAwIDAgMzRweCByZ2JhKDMwLCAxMzIsIDI0MiwgMC43OCksXFxuICAgIDAgMCA1NHB4IHJnYmEoMzAsIDEzMiwgMjQyLCAwLjkyKTtcXG5cXG4gIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xcbn1cXG4uYmFja2dyb3VuZF92aWRlbyB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcl93aGl0ZV9jdXN0b20pO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1zaGFkb3c6IHZhcigtLWJsdWUtbmVvbi10ZXh0LXNoYWRvdy1sb3cpO1xcbn1cXG5cXG4ubWFpbl9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAvKiBwYWRkaW5nOiAycmVtIDRyZW07ICovXFxuICBnYXA6IDFyZW07XFxufVxcblxcbi8qICoqKioqKiAqL1xcbi8qIGhlYWRlciAqL1xcbi8qICoqKioqKiAqL1xcblxcbi5oZWFkZXJfbWFpbl9jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwLjVyZW0gNHJlbTtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3ZlcmxheS1ibGFjayk7XFxuXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7ICovXFxufVxcblxcbi5oZWFkZXJfbGVmdCxcXG4uaGVhZGVyX3JpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5oZWFkZXJfbWlkIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWF0cml4XFxcIjtcXG59XFxuLmhlYWRlcl9taWQgLmhlYWRlcl9nYW1lX25hbWUge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLmljb24ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG4ubmV3X2dhbWVfYnV0dG9uIC5pY29uIHtcXG4gIHNjYWxlOiAxLjI7XFxuICBtYXJnaW4tbGVmdDogMC4zcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Jfd2hpdGVfY3VzdG9tKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHJlbSAwcmVtIDFyZW0gYmxhY2s7XFxuXFxuICBib3JkZXI6IG5vbmU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmJ1dHRvbi5uZXdfZ2FtZV9idXR0b24ge1xcbiAgd2lkdGg6IDI0MHB4O1xcbiAgei1pbmRleDogNDtcXG59XFxuYnV0dG9uLm5ld19nYW1lX2J1dHRvbi5hY3RpdmUge1xcbiAgYm94LXNoYWRvdzogdmFyKC0tcGluay1uZW9uLXRleHQtc2hhZG93LWxvdyk7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi8qICoqKioqKiAqL1xcbi8qICoqKioqKiAqL1xcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKiogKi9cXG4vKiBNYWluIENvbnRlbnQgQ29udGFpbmVyICovXFxuLyogKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi5jb250ZW50X21haW5fY29udGFpbmVyIHtcXG4gIC8qIGJvcmRlcjogNHB4IGJ1cmx5d29vZCBzb2xpZDsgKi9cXG4gIG1hcmdpbjogMnJlbSA0cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLmNvbnRlbnRfY29udGFpbmVyIHtcXG4gIC8qIGJvcmRlcjogMnB4IGdvbGRlbnJvZCBzb2xpZDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4ucGxheWVyXzFfY29udGFpbmVyLFxcbi5wbGF5ZXJfMl9jb250YWluZXIge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1ibHVlLW5lb24tdGV4dC1zaGFkb3cpO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLnBsYXllcl8xX25hbWUsXFxuLnBsYXllcl8yX25hbWUge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIC8qIGJvcmRlcjogMnB4IHJlZCBzb2xpZDsgKi9cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XFxufVxcbi5wbGF5ZXJfMV9uYW1lLmFjdGl2ZSxcXG4ucGxheWVyXzJfbmFtZS5hY3RpdmUge1xcbiAgdGV4dC1zaGFkb3c6IHZhcigtLXBpbmstbmVvbi10ZXh0LXNoYWRvdy1sb3cpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tcGluay1uZW9uLXRleHQtc2hhZG93LWxvdyk7XFxufVxcblxcbi5wbGF5ZXJfMV9zdGF0dXNfcm91bmQsXFxuLnBsYXllcl8yX3N0YXR1c19yb3VuZCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIC8qIGJveC1zaGFkb3c6IGluc2V0IDByZW0gMHJlbSA1NXJlbSBibGFjazsgKi9cXG59XFxuXFxuLyogY3V0dGluZyB0aGUgcGlsbHMgLnN2ZyBmaWxlIGluIGhhbGYgYW5kIHVzZSB0aGVtIG9uIGJvdGggc2lkZWQgKi9cXG4ucGxheWVyXzFfaW1nX2NvbnRhaW5lciB7XFxuICB3aWR0aDogOTUlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9yZWRfcGlsbF9ibHVlX3BpbGwuc3ZnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XFxufVxcbi5wbGF5ZXJfMV9pbWdfY29udGFpbmVyOm50aC1jaGlsZCgyKSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXG59XFxuLnBsYXllcl8yX2ltZ19jb250YWluZXIge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1hZ2VzL3JlZF9waWxsX2JsdWVfcGlsbC5zdmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xcbn1cXG4ucGxheWVyXzJfaW1nX2NvbnRhaW5lcjpudGgtY2hpbGQoMikge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIC8qIHdpZHRoOiBtaW5tYXgoMTAwLCA2MHZ3KTsgKi9cXG59XFxuXFxuLyogY29sdW1uIGFuZCByb3cgc2V0dGluZ3MgKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi5jb2x1bW4ge1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAvKiBib3JkZXI6IDJweCByZWQgc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjsgKi9cXG4gIHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1jb2x1bW4tcGFkZGluZykgLyAyKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uY29sdW1uOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjAxO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDYwcHggdmFyKC0tYmFja2dyb3VuZC1jb2xvci1hcm15LWdyZWVuLWxpZ2h0KTtcXG59XFxuXFxuLnJvdyB7XFxuICBib3JkZXI6IDZweCBibGFjayBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm93LWNlbGwtYmFja2dyb3VuZC1jb2xvcik7XFxuICBvcGFjaXR5OiAwLjk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcmVtIDByZW0gMS41cmVtIGJsYWNrO1xcbiAgcGFkZGluZzogdmFyKC0tY29sdW1uLXBhZGRpbmcpO1xcbiAgbWFyZ2luOiBjYWxjKHZhcigtLWNvbHVtbi1wYWRkaW5nKSAvIDUpIDA7XFxuXFxuICBoZWlnaHQ6IDEuN3JlbTtcXG4gIHdpZHRoOiAxLjdyZW07XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogdGhpcyBpcyBpbXBvcnRhbnQgZm9yIHRoZSBldmVudCBjYXB0dXJlIG9uIGNsaWNrICovXFxufVxcbi8qIGhlcmUgeW91IGNhbiBhZGQgYW5pbWF0aW9uIGZvciB3aW5uaW5nIGNlbGxzICovXFxuLnJvdy53aW5uaW5nX3JvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgei1pbmRleDogNDtcXG4gIGJveC1zaGFkb3c6IHZhcigtLW5lb24tdGV4dC1zaGFkb3ctdmVyeS1sb3cpO1xcbiAgYW5pbWF0aW9uOiBmbGlja2VyIDEuNXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG4ucm93OmhvdmVyIHtcXG4gIHNjYWxlOiAxLjE7XFxufVxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi8qICoqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqICovXFxuLyogb3ZlcmxheSBhbmQgcG9wLXVwcyAqL1xcbi8qICoqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4ub3ZlcmxheV9mb3JfcG9wX3VwcyB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1kZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb24pO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3ZlcmxheS1ibGFjayk7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB6LWluZGV4OiAzO1xcbn1cXG4ub3ZlcmxheV9mb3JfcG9wX3Vwcy5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5nYW1lb3Zlcl9wb3BfdXAge1xcbiAgLyogbWFyZ2luOiAwIGF1dG87ICovXFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LWZhbWlseTogXFxcIm1hdHJpeFxcXCI7XFxuICBjb2xvcjogdmFyKC0tY29sb3Jfd2hpdGVfY3VzdG9tKTtcXG4gIC8qIGJvcmRlcjogMnB4IHZhcigtLWNvbG9yX3doaXRlX2N1c3RvbSkgc29saWQ7ICovXFxuICBvcGFjaXR5OiAwO1xcbiAgei1pbmRleDogNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tbmVvbi10ZXh0LXNoYWRvdy1tZWRpdW0pO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tbmVvbi10ZXh0LXNoYWRvdy12ZXJ5LWxvdyk7XFxuXFxuICAvKiBib3gtc2hhZG93OiBpbnNldCAxcmVtIDFyZW0gNHJlbSB3aGl0ZTsgKi9cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgcGFkZGluZzogMC43cmVtO1xcbn1cXG4uZ2FtZW92ZXJfcG9wX3VwLmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uZ2FtZW92ZXJfcG9wX3VwIC5zdGF0dXNfd2lubmluZyB7XFxufVxcblxcbi8qICoqKioqKioqKioqKioqKioqKiogKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLyogKioqKioqICovXFxuLyogZm9vdGVyICovXFxuLyogKioqKioqICovXFxuXFxuZm9vdGVyIHtcXG4gIC8qIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7ICovXFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItYXJteS1ncmVlbi1kYXJrKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcl93aGl0ZV9jdXN0b20pO1xcbiAgei1pbmRleDogMjtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5mb290ZXIgaW1nIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHNjYWxlOiAxLjI7XFxufVxcblxcbmZvb3RlciBpbWc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4vKiAqKioqKiogKi9cXG4vKiAqKioqKiogKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlTWF0ZXJpYWxzRE9NKCkge1xuICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVib2FyZF9jb250YWluZXJcIik7XG5cbiAgZnVuY3Rpb24gcGxheVJvdW5kQ2xpY2tFdmVudChldmVudCkge1xuICAgIGxldCBjb2x1bW5OdW1iZXIgPSBldmVudC50YXJnZXQuZGF0YXNldC5jb2x1bW5fbnVtYmVyO1xuICAgIGxldCBzZWxlY3RlZENvbHVtbiA9IGdhbWUuZ2FtZWJvYXJkLmdldEJvYXJkKClbY29sdW1uTnVtYmVyXTtcbiAgICBnYW1lLnBsYXlSb3VuZChzZWxlY3RlZENvbHVtbik7XG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRDb2x1bW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gRXZlbnRMaXN0ZW5lclRvQ29sdW1ucygpIHtcbiAgICBjb25zdCBjb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2x1bW5cIik7XG5cbiAgICBmdW5jdGlvbiBhZGQoKSB7XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICBjb2x1bW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgIHBsYXlSb3VuZENsaWNrRXZlbnQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIGNvbHVtbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgcGxheVJvdW5kQ2xpY2tFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkLCByZW1vdmUgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJUb05ld0dhbWVCdXR0b24oKSB7XG4gICAgY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3X2dhbWVfYnV0dG9uXCIpO1xuICAgIG5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGdhbWUuc3RhcnROZXdHYW1lKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbkV4aXN0aW5nR2FtZWJvYXJkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgY2hpbGRyZW5PZkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcImRpdi5nYW1lYm9hcmRfY29udGFpbmVyID4gKlwiXG4gICAgKTtcbiAgICBjaGlsZHJlbk9mQ29udGFpbmVyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5R2FtZWJvYXJkRE9NKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZS5nYW1lYm9hcmQuZ2V0Qm9hcmQoKS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbmV3Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0NvbHVtbi5jbGFzc0xpc3QuYWRkKFwiY29sdW1uXCIpO1xuICAgICAgbmV3Q29sdW1uLnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uX251bWJlclwiLCBpKTtcbiAgICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDb2x1bW4pO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWUuZ2FtZWJvYXJkLmdldEJvYXJkKClbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgbmV3Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmV3Um93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgICAgIG5ld1Jvdy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd19udW1iZXJcIiwgaik7XG5cbiAgICAgICAgLy8gbmV3Um93LmlubmVySFRNTCA9IGdhbWUuZ2FtZWJvYXJkLmdldEJvYXJkKClbaV1bal0uc3RhdHVzO1xuICAgICAgICBpZiAoZ2FtZS5nYW1lYm9hcmQuZ2V0Qm9hcmQoKVtpXVtqXS5zdGF0dXMgPT0gMSkge1xuICAgICAgICAgIG5ld1Jvdy5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcInN0eWxlXCIsXG4gICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYXllci0xLWNvbG9yKTsgb3BhY2l0eTogMTtcIlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZS5nYW1lYm9hcmQuZ2V0Qm9hcmQoKVtpXVtqXS5zdGF0dXMgPT0gMikge1xuICAgICAgICAgIG5ld1Jvdy5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcInN0eWxlXCIsXG4gICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYXllci0yLWNvbG9yKTsgb3BhY2l0eTogMTtcIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2FtZS5nYW1lYm9hcmQuZ2V0Qm9hcmQoKVtpXVtqXS5pc1dpbm5pbmdDZWxsID09IHRydWUpIHtcbiAgICAgICAgICBuZXdSb3cuY2xhc3NMaXN0LmFkZChcIndpbm5pbmdfcm93XCIpO1xuICAgICAgICB9XG4gICAgICAgIG5ld0NvbHVtbi5hcHBlbmRDaGlsZChuZXdSb3cpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBsYXllcjFOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfMV9uYW1lXCIpO1xuICAgIGNvbnN0IHBsYXllcjJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfMl9uYW1lXCIpO1xuICAgIHBsYXllcjFOYW1lLmlubmVySFRNTCA9IGdhbWUuZ2V0UGxheWVycygpWzBdLm5hbWUudG9VcHBlckNhc2UoKTtcbiAgICBwbGF5ZXIyTmFtZS5pbm5lckhUTUwgPSBnYW1lLmdldFBsYXllcnMoKVsxXS5uYW1lLnRvVXBwZXJDYXNlKCk7XG4gIH1cblxuICAvLyBmdW5jdGlvbiBkaXNwbGF5Um91bmRTdGF0dXNNZXNzYWdlKGFjdGl2ZVBsYXllciwgc3RhdHVzX21lc3NhZ2UpIHtcbiAgLy8gICBjb25zdCBwbGF5ZXIxX1N0YXR1c1JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgLy8gICAgIFwiLnBsYXllcl8xX3N0YXR1c19yb3VuZFwiXG4gIC8vICAgKTtcbiAgLy8gICBjb25zdCBwbGF5ZXIyX1N0YXR1c1JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgLy8gICAgIFwiLnBsYXllcl8yX3N0YXR1c19yb3VuZFwiXG4gIC8vICAgKTtcblxuICAvLyAgIGlmIChhY3RpdmVQbGF5ZXIgPT09IGdhbWUuZ2V0UGxheWVycygpWzBdKSB7XG4gIC8vICAgICBwbGF5ZXIxX1N0YXR1c1JvdW5kLmlubmVySFRNTCA9IHN0YXR1c19tZXNzYWdlO1xuICAvLyAgICAgcGxheWVyMl9TdGF0dXNSb3VuZC5pbm5lckhUTUwgPSBcIiZuYnNwO1wiO1xuICAvLyAgIH0gZWxzZSBpZiAoYWN0aXZlUGxheWVyID09PSBnYW1lLmdldFBsYXllcnMoKVsxXSkge1xuICAvLyAgICAgcGxheWVyMV9TdGF0dXNSb3VuZC5pbm5lckhUTUwgPSBcIiZuYnNwO1wiO1xuICAvLyAgICAgcGxheWVyMl9TdGF0dXNSb3VuZC5pbm5lckhUTUwgPSBzdGF0dXNfbWVzc2FnZTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5V2lubmluZ1N0YXR1c01lc3NhZ2Uoc3RhdHVzX21lc3NhZ2UpIHtcbiAgICBjb25zdCBzdGF0dXNXaW5uaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGF0dXNfd2lubmluZ1wiKTtcbiAgICBzdGF0dXNXaW5uaW5nLmlubmVySFRNTCA9IHN0YXR1c19tZXNzYWdlO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheUFjdGl2ZVBsYXllckZvY3VzKGFjdGl2ZVBsYXllcikge1xuICAgIGNvbnN0IHBsYXllcjFOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfMV9uYW1lXCIpO1xuICAgIGNvbnN0IHBsYXllcjJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfMl9uYW1lXCIpO1xuXG4gICAgaWYgKGFjdGl2ZVBsYXllciA9PT0gZ2FtZS5nZXRQbGF5ZXJzKClbMF0pIHtcbiAgICAgIHBsYXllcjFOYW1lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBwbGF5ZXIyTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH0gZWxzZSBpZiAoYWN0aXZlUGxheWVyID09PSBnYW1lLmdldFBsYXllcnMoKVsxXSkge1xuICAgICAgcGxheWVyMU5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIHBsYXllcjJOYW1lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZW5kR2FtZURPTSgpIHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5X2Zvcl9wb3BfdXBzXCIpO1xuICAgIGNvbnN0IGdhbWVvdmVyUG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVvdmVyX3BvcF91cFwiKTtcbiAgICBjb25zdCBidXR0b25OZXdHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24ubmV3X2dhbWVfYnV0dG9uXCIpO1xuXG4gICAgZnVuY3Rpb24gYWRkKCkge1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgZ2FtZW92ZXJQb3BVcC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgYnV0dG9uTmV3R2FtZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBnYW1lb3ZlclBvcFVwLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBidXR0b25OZXdHYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgIHJldHVybiB7IGFkZCwgcmVtb3ZlIH07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRIZWFkZXJDb25maWcoKSB7XG4gICAgZnVuY3Rpb24gYWRkQXVkaW9Db25maWcoKSB7XG4gICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhdWRpb1wiKTtcbiAgICAgIGNvbnN0IGF1ZGlvSWNvbk9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCJidXR0b24uYXVkaW9fYnV0dG9uIC5pY29uX29uXCJcbiAgICAgICk7XG4gICAgICBjb25zdCBhdWRpb0ljb25PZmYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcImJ1dHRvbi5hdWRpb19idXR0b24gLmljb25fb2ZmXCJcbiAgICAgICk7XG4gICAgICBhdWRpb0ljb25Pbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBjb25zdCBhdWRpb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uYXVkaW9fYnV0dG9uXCIpO1xuXG4gICAgICBmdW5jdGlvbiB0b2dnbGVQbGF5KCkge1xuICAgICAgICBpZiAoYXVkaW8ucGF1c2VkKSB7XG4gICAgICAgICAgYXVkaW9JY29uT24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICBhdWRpb0ljb25PZmYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhdWRpb0ljb25Pbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgYXVkaW9JY29uT2ZmLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhdWRpb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0b2dnbGVQbGF5KCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRJbmZvQnV0dG9uQ29uZmlnKCkge1xuICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheV9mb3JfcG9wX3Vwc1wiKTtcbiAgICAgIGNvbnN0IGluZm9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmluZm9fYnV0dG9uXCIpO1xuICAgICAgY29uc3QgaW1hZ2VQbGF5ZXJSZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl8xX2ltZ19jb250YWluZXJcIik7XG4gICAgICBjb25zdCBpbWFnZVBsYXllckJsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl8yX2ltZ19jb250YWluZXJcIik7XG4gICAgICBjb25zdCByZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5uZXdfZ2FtZV9idXR0b25cIik7XG5cbiAgICAgIGxldCBpc0luZm9PbiA9IGZhbHNlO1xuXG4gICAgICBmdW5jdGlvbiBpbmZvQnV0dG9uVG9nZ2xlKCkge1xuICAgICAgICBpZiAoIWlzSW5mb09uKSB7XG4gICAgICAgICAgcmVzdGFydEJ1dHRvbi5zdHlsZSA9IFwiei1pbmRleDogMTtcIjtcbiAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgaW5mb0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInotaW5kZXg6IDEwO1wiKTtcbiAgICAgICAgICBpbmZvQnV0dG9uLnN0eWxlID0gXCJ6LWluZGV4OiAxMDtcIjtcbiAgICAgICAgICBpbWFnZVBsYXllclJlZC5zdHlsZSA9XG4gICAgICAgICAgICBcInotaW5kZXg6IDEwOyB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1kZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb24pOyBzY2FsZTogMS4zXCI7XG4gICAgICAgICAgaW1hZ2VQbGF5ZXJCbHVlLnN0eWxlID1cbiAgICAgICAgICAgIFwiei1pbmRleDogMTA7IHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLWRlZmF1bHQtdHJhbnNpdGlvbi1kdXJhdGlvbik7IHNjYWxlOiAxLjNcIjtcblxuICAgICAgICAgIGlzSW5mb09uID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN0YXJ0QnV0dG9uLnN0eWxlID0gXCJcIjtcbiAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgaW5mb0J1dHRvbi5zdHlsZSA9IFwiXCI7XG4gICAgICAgICAgaW1hZ2VQbGF5ZXJSZWQuc3R5bGUgPSBcIlwiO1xuICAgICAgICAgIGltYWdlUGxheWVyQmx1ZS5zdHlsZSA9IFwiXCI7XG5cbiAgICAgICAgICBpc0luZm9PbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGluZm9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaW5mb0J1dHRvblRvZ2dsZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkQXVkaW9Db25maWcoKTtcbiAgICBhZGRJbmZvQnV0dG9uQ29uZmlnKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIEV2ZW50TGlzdGVuZXJUb0NvbHVtbnMsXG4gICAgY2xlYW5FeGlzdGluZ0dhbWVib2FyZEVsZW1lbnRzLFxuICAgIGRpc3BsYXlHYW1lYm9hcmRET00sXG4gICAgLy8gZGlzcGxheVJvdW5kU3RhdHVzTWVzc2FnZSxcbiAgICBkaXNwbGF5V2lubmluZ1N0YXR1c01lc3NhZ2UsXG4gICAgZGlzcGxheUFjdGl2ZVBsYXllckZvY3VzLFxuICAgIGFkZEV2ZW50TGlzdGVuZXJUb05ld0dhbWVCdXR0b24sXG4gICAgZW5kR2FtZURPTSxcbiAgICBhZGRIZWFkZXJDb25maWcsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBDcmVhdGVNYXRlcmlhbHNET00gfSBmcm9tIFwiLi9kb21fbWF0ZXJpYWxzLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IHJvd3MgPSA2O1xuICBjb25zdCBjb2x1bW5zID0gNztcbiAgY29uc3QgYm9hcmQgPSBbXTtcbiAgY29uc3QgZG9tQ3JlYXRvciA9IENyZWF0ZU1hdGVyaWFsc0RPTSgpO1xuXG4gIGZ1bmN0aW9uIGdldEJvYXJkKCkge1xuICAgIHJldHVybiBib2FyZDtcbiAgfVxuICBmdW5jdGlvbiBnZXREb21DcmVhdG9yKCkge1xuICAgIHJldHVybiBkb21DcmVhdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlR2FtZWJvYXJkR3JpZHMoKSB7XG4gICAgYm9hcmQubGVuZ3RoID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uczsgaSsrKSB7XG4gICAgICBib2FyZFtpXSA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd3M7IGorKykge1xuICAgICAgICBib2FyZFtpXS5wdXNoKENlbGwoMCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIENlbGwoc3RhdHVzKSB7XG4gICAgY29uc3QgaXNXaW5uaW5nQ2VsbCA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gYWRkVG9rZW4ocGxheWVyKSB7XG4gICAgICBzdGF0dXMgPSBwbGF5ZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFN0YXR1cygpIHtcbiAgICAgIHJldHVybiBzdGF0dXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3RhdHVzLCBpc1dpbm5pbmdDZWxsLCBhZGRUb2tlbiwgZ2V0U3RhdHVzIH07XG4gIH1cblxuICBmdW5jdGlvbiB3aGljaENlbGxJc0F2YWlsYWJsZShjb2x1bW4pIHtcbiAgICAvL3JldHVybnMgd2hpY2ggY2VsbCBvbiB0aGUgc2VsZWN0ZWQgY29sdW1uIGlzIGF2YWlsYWJsZVxuXG4gICAgaWYgKGNvbHVtblswXS5zdGF0dXMgIT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBjb2x1bW4gaXMgZnVsbFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gcm93cyAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAoY29sdW1uW2ldLnN0YXR1cyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gY29sdW1uW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BUb2tlbihjb2x1bW4sIHBsYXllclRva2VuKSB7XG4gICAgbGV0IG15Q29sdW1uID0gY29sdW1uO1xuXG4gICAgbGV0IHNlbGVjdGVkQ2VsbCA9IHdoaWNoQ2VsbElzQXZhaWxhYmxlKG15Q29sdW1uKTtcblxuICAgIGlmIChzZWxlY3RlZENlbGwgPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2VsZWN0ZWRDZWxsLnN0YXR1cyA9IHBsYXllclRva2VuO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheUdhbWVib2FyZCgpIHtcbiAgICBkb21DcmVhdG9yLmNsZWFuRXhpc3RpbmdHYW1lYm9hcmRFbGVtZW50cygpO1xuICAgIGRvbUNyZWF0b3IuZGlzcGxheUdhbWVib2FyZERPTSgpO1xuICAgIGRvbUNyZWF0b3IuRXZlbnRMaXN0ZW5lclRvQ29sdW1ucygpLmFkZCgpO1xuICAgIGRvbUNyZWF0b3IuYWRkRXZlbnRMaXN0ZW5lclRvTmV3R2FtZUJ1dHRvbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tHYW1lT3ZlcihwbGF5ZXIpIHtcbiAgICAvL0NoZWNrIGRyYXdcbiAgICBmdW5jdGlvbiBpc0RyYXcoKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBjb2x1bW5zOyBjb2wrKykge1xuICAgICAgICBpZiAoYm9hcmRbY29sXVswXS5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoaXNEcmF3KCkpIHtcbiAgICAgIHJldHVybiBcImRyYXdcIjtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBjb2x1bW5zXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgY29sdW1uczsgY29sKyspIHtcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHJvd3MgLSAzOyByb3crKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2xdW3Jvd10uc3RhdHVzID09IHBsYXllci50b2tlbiAmJlxuICAgICAgICAgIGdldEJvYXJkKClbY29sXVtyb3cgKyAxXS5zdGF0dXMgPT0gcGxheWVyLnRva2VuICYmXG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2xdW3JvdyArIDJdLnN0YXR1cyA9PSBwbGF5ZXIudG9rZW4gJiZcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbF1bcm93ICsgM10uc3RhdHVzID09IHBsYXllci50b2tlblxuICAgICAgICApIHtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbF1bcm93XS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbF1bcm93ICsgMV0uaXNXaW5uaW5nQ2VsbCA9IHRydWU7XG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2xdW3JvdyArIDJdLmlzV2lubmluZ0NlbGwgPSB0cnVlO1xuICAgICAgICAgIGdldEJvYXJkKClbY29sXVtyb3cgKyAzXS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIHJvd3NcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByb3dzOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgY29sdW1ucyAtIDM7IGNvbCsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbF1bcm93XS5zdGF0dXMgPT0gcGxheWVyLnRva2VuICYmXG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgKyAxXVtyb3ddLnN0YXR1cyA9PSBwbGF5ZXIudG9rZW4gJiZcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCArIDJdW3Jvd10uc3RhdHVzID09IHBsYXllci50b2tlbiAmJlxuICAgICAgICAgIGdldEJvYXJkKClbY29sICsgM11bcm93XS5zdGF0dXMgPT0gcGxheWVyLnRva2VuXG4gICAgICAgICkge1xuICAgICAgICAgIGdldEJvYXJkKClbY29sXVtyb3ddLmlzV2lubmluZ0NlbGwgPSB0cnVlO1xuICAgICAgICAgIGdldEJvYXJkKClbY29sICsgMV1bcm93XS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCArIDJdW3Jvd10uaXNXaW5uaW5nQ2VsbCA9IHRydWU7XG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgKyAzXVtyb3ddLmlzV2lubmluZ0NlbGwgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZGlhZ29uYWwgKHRvcCBsZWZ0IHRvIGJvdHRvbSByaWdodClcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByb3dzIC0gMzsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGNvbHVtbnMgLSAzOyBjb2wrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2xdW3Jvd10uc3RhdHVzID09IHBsYXllci50b2tlbiAmJlxuICAgICAgICAgIGdldEJvYXJkKClbY29sICsgMV1bcm93ICsgMV0uc3RhdHVzID09IHBsYXllci50b2tlbiAmJlxuICAgICAgICAgIGdldEJvYXJkKClbY29sICsgMl1bcm93ICsgMl0uc3RhdHVzID09IHBsYXllci50b2tlbiAmJlxuICAgICAgICAgIGdldEJvYXJkKClbY29sICsgM11bcm93ICsgM10uc3RhdHVzID09IHBsYXllci50b2tlblxuICAgICAgICApIHtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbF1bcm93XS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCArIDFdW3JvdyArIDFdLmlzV2lubmluZ0NlbGwgPSB0cnVlO1xuICAgICAgICAgIGdldEJvYXJkKClbY29sICsgMl1bcm93ICsgMl0uaXNXaW5uaW5nQ2VsbCA9IHRydWU7XG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgKyAzXVtyb3cgKyAzXS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGRpYWdvbmFsICh0b3AgcmlnaHQgdG8gYm90dG9tIGxlZnQpXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcm93cyAtIDM7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAzOyBjb2wgPCBjb2x1bW5zOyBjb2wrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2xdW3Jvd10uc3RhdHVzID09IHBsYXllci50b2tlbiAmJlxuICAgICAgICAgIGdldEJvYXJkKClbY29sIC0gMV1bcm93ICsgMV0uc3RhdHVzID09IHBsYXllci50b2tlbiAmJlxuICAgICAgICAgIGdldEJvYXJkKClbY29sIC0gMl1bcm93ICsgMl0uc3RhdHVzID09IHBsYXllci50b2tlbiAmJlxuICAgICAgICAgIGdldEJvYXJkKClbY29sIC0gM11bcm93ICsgM10uc3RhdHVzID09IHBsYXllci50b2tlblxuICAgICAgICApIHtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbF1bcm93XS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCAtIDFdW3JvdyArIDFdLmlzV2lubmluZ0NlbGwgPSB0cnVlO1xuICAgICAgICAgIGdldEJvYXJkKClbY29sIC0gMl1bcm93ICsgMl0uaXNXaW5uaW5nQ2VsbCA9IHRydWU7XG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgLSAzXVtyb3cgKyAzXS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTsgLy8gbm8gd2luIGZvdW5kXG4gIH1cblxuICByZXR1cm4ge1xuICAgIC8vIGJvYXJkLFxuICAgIGdldERvbUNyZWF0b3IsXG4gICAgZ2V0Qm9hcmQsXG4gICAgY3JlYXRlR2FtZWJvYXJkR3JpZHMsXG4gICAgZGlzcGxheUdhbWVib2FyZCxcbiAgICBkcm9wVG9rZW4sXG4gICAgd2hpY2hDZWxsSXNBdmFpbGFibGUsXG4gICAgY2hlY2tHYW1lT3ZlcixcbiAgfTtcbn1cbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZC5qc1wiO1xuaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lQ29udHJvbGxlcigpIHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7IC8vIGRvbid0IGNoYW5nZSB0aGUgbmFtZVxuICBnYW1lYm9hcmQuZ2V0RG9tQ3JlYXRvcigpLmFkZEhlYWRlckNvbmZpZygpO1xuXG4gIGNvbnN0IHBsYXllck9uZU5hbWUgPSBcIlBsYXllciBSZWRcIjtcbiAgY29uc3QgcGxheWVyVHdvTmFtZSA9IFwiUGxheWVyIEJsdWVcIjtcblxuICBjb25zdCBwbGF5ZXJzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IHBsYXllck9uZU5hbWUsXG4gICAgICB0b2tlbjogXCIxXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBwbGF5ZXJUd29OYW1lLFxuICAgICAgdG9rZW46IFwiMlwiLFxuICAgIH0sXG4gIF07XG4gIGZ1bmN0aW9uIGdldFBsYXllcnMoKSB7XG4gICAgcmV0dXJuIHBsYXllcnM7XG4gIH1cblxuICBsZXQgYWN0aXZlUGxheWVyID0gcGxheWVyc1swXTtcblxuICBmdW5jdGlvbiBnZXRBY3RpdmVQbGF5ZXIoKSB7XG4gICAgcmV0dXJuIGFjdGl2ZVBsYXllcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN3aXRjaFBsYXllclR1cm4oKSB7XG4gICAgYWN0aXZlUGxheWVyID0gYWN0aXZlUGxheWVyID09PSBwbGF5ZXJzWzBdID8gcGxheWVyc1sxXSA6IHBsYXllcnNbMF07XG4gICAgY29uc3QgcGxheVJvdW5kTG9nTWVzc2FnZSA9IGAke1xuICAgICAgZ2V0QWN0aXZlUGxheWVyKCkubmFtZVxuICAgIH0gaXMgcGxheWluZyBoaXMgdHVybi4uLmA7XG4gICAgZ2FtZWJvYXJkLmdldERvbUNyZWF0b3IoKS5kaXNwbGF5QWN0aXZlUGxheWVyRm9jdXMoYWN0aXZlUGxheWVyKTtcbiAgICAvLyBnYW1lYm9hcmRcbiAgICAvLyAgIC5nZXREb21DcmVhdG9yKClcbiAgICAvLyAgIC5kaXNwbGF5Um91bmRTdGF0dXNNZXNzYWdlKGFjdGl2ZVBsYXllciwgcGxheVJvdW5kTG9nTWVzc2FnZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydE5ld0dhbWUoKSB7XG4gICAgY29uc3QgZGVmYXVsdFdpbm5pbmdNZXNzYWdlID0gXCJXaW5uaW5nIHN0YXR1c1wiO1xuICAgIGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMV07XG4gICAgc3dpdGNoUGxheWVyVHVybigpO1xuICAgIGdhbWVib2FyZC5jcmVhdGVHYW1lYm9hcmRHcmlkcygpO1xuICAgIGdhbWVib2FyZC5kaXNwbGF5R2FtZWJvYXJkKCk7XG4gICAgZ2FtZWJvYXJkXG4gICAgICAuZ2V0RG9tQ3JlYXRvcigpXG4gICAgICAuZGlzcGxheVdpbm5pbmdTdGF0dXNNZXNzYWdlKGRlZmF1bHRXaW5uaW5nTWVzc2FnZSk7XG4gICAgZ2FtZWJvYXJkLmdldERvbUNyZWF0b3IoKS5lbmRHYW1lRE9NKCkucmVtb3ZlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBlbmRUaGVHYW1lKHdpbm5pbmdTdGF0dXMpIHtcbiAgICBjb25zdCBkcmF3TWVzc2FnZSA9IFwiSXQgaGFzIGJlZW4gYSBEUkFXXCI7XG4gICAgY29uc3Qgd2lubmluZ01lc3NhZ2UgPSBgJHthY3RpdmVQbGF5ZXIubmFtZX0gaGFzIFdPTmA7XG5cbiAgICBnYW1lYm9hcmQuZ2V0RG9tQ3JlYXRvcigpLkV2ZW50TGlzdGVuZXJUb0NvbHVtbnMoKS5yZW1vdmUoKTtcbiAgICBpZiAod2lubmluZ1N0YXR1cyA9PT0gXCJkcmF3XCIpIHtcbiAgICAgIGdhbWVib2FyZC5nZXREb21DcmVhdG9yKCkuZGlzcGxheVdpbm5pbmdTdGF0dXNNZXNzYWdlKGRyYXdNZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKHdpbm5pbmdTdGF0dXMgPT09IHRydWUpIHtcbiAgICAgIGdhbWVib2FyZC5nZXREb21DcmVhdG9yKCkuZGlzcGxheVdpbm5pbmdTdGF0dXNNZXNzYWdlKHdpbm5pbmdNZXNzYWdlKTtcbiAgICB9XG4gICAgZ2FtZWJvYXJkLmdldERvbUNyZWF0b3IoKS5lbmRHYW1lRE9NKCkuYWRkKCk7XG4gICAgZ2FtZWJvYXJkLmRpc3BsYXlHYW1lYm9hcmQoKTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIGRpc3BsYXlOZXdSb3VuZCgpIHtcbiAgLy8gICBnYW1lYm9hcmQuZGlzcGxheUdhbWVib2FyZCgpO1xuICAvLyAgIGNvbnNvbGUubG9nKGBpdCBpcyAke2dldEFjdGl2ZVBsYXllcigpLm5hbWV9wrRzIHR1cm5gKTtcbiAgLy8gfVxuXG4gIGZ1bmN0aW9uIHBsYXlSb3VuZChjb2x1bW4pIHtcbiAgICBpZiAoZ2FtZWJvYXJkLndoaWNoQ2VsbElzQXZhaWxhYmxlKGNvbHVtbikgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBnYW1lYm9hcmQuZHJvcFRva2VuKGNvbHVtbiwgZ2V0QWN0aXZlUGxheWVyKCkudG9rZW4pO1xuICAgICAgZ2FtZWJvYXJkLmRpc3BsYXlHYW1lYm9hcmQoKTtcbiAgICAgIGNvbnN0IHdpbm5pbmdTdGF0dXMgPSBnYW1lYm9hcmQuY2hlY2tHYW1lT3ZlcihhY3RpdmVQbGF5ZXIpO1xuXG4gICAgICBpZiAod2lubmluZ1N0YXR1cyAhPT0gZmFsc2UpIHtcbiAgICAgICAgZW5kVGhlR2FtZSh3aW5uaW5nU3RhdHVzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3dpdGNoUGxheWVyVHVybigpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2FtZWJvYXJkLFxuICAgIGdldFBsYXllcnMsXG4gICAgc3dpdGNoUGxheWVyVHVybixcbiAgICAvLyBkaXNwbGF5TmV3Um91bmQsXG4gICAgZ2V0QWN0aXZlUGxheWVyLFxuICAgIHBsYXlSb3VuZCxcbiAgICBzdGFydE5ld0dhbWUsXG4gIH07XG59XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguY3NzXCI7XG5pbXBvcnQgZ2l0TG9nbyBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9naXRodWItNjQucG5nXCI7XG4vLyBpbXBvcnQgeyBDcmVhdGVNYXRlcmlhbHNET00gfSBmcm9tIFwiLi9kb21fbWF0ZXJpYWxzLmpzXCI7XG4vLyBpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmQuanNcIjtcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vZ2FtZWNvbnRyb2xsZXIuanNcIjtcblxuZXhwb3J0IGNvbnN0IGdhbWUgPSBHYW1lQ29udHJvbGxlcigpOyAvLyBkb24ndCBjaGFuZ2UgdGhlIG5hbWVcbmdhbWUuc3RhcnROZXdHYW1lKCk7XG5cbmNvbnNvbGUubG9nKGdhbWUuZ2FtZWJvYXJkLmdldEJvYXJkKCkpO1xuY29uc29sZS5sb2coZ2FtZS5nYW1lYm9hcmQuZ2V0Qm9hcmQoKVswXSk7XG5jb25zb2xlLmxvZyhnYW1lLmdhbWVib2FyZC5nZXRCb2FyZCgpWzBdWzBdKTtcblxuLy8gZ2FtZS5wbGF5Um91bmQoZ2FtZS5nYW1lYm9hcmQuZ2V0Qm9hcmQoKVswXSk7XG4vLyBnYW1lLnN0YXJ0TmV3R2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9