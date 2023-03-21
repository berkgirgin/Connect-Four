"use strict";
(self["webpackChunkconnect_four"] = self["webpackChunkconnect_four"] || []).push([["index"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"matrix\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  --main-content-margin: 1rem;\n  --border-radius: 23px;\n  --background-color-pop-up: brown;\n  --color_white_custom: #e8e6e3;\n  --background-color-army-green-light: #b5b9a4;\n  --background-color-army-green-medium: #a3a78d;\n  --background-color-army-green-dark: #42453a;\n  --overlay-black: rgba(0, 0, 0, 0.8);\n\n  --player-1-color: red;\n  --player-2-color: blue;\n  --row-cell-background-color: #d1fae5;\n  --winning-cells-color: purple;\n  --column-padding: 1rem;\n\n  --neon-text-shadow-high: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,\n    0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;\n  --neon-text-shadow-medium: 0 0 3.4px #fff, 0 0 5px #fff, 0 0 10.5px #fff,\n    0 0 21px #0fa, 0 0 41px #0fa, 0 0 46px #0fa, 0 0 51px #0fa, 0 0 75.5px #0fa;\n  --neon-text-shadow-low: 0 0 1.7px #fff, 0 0 2.5px #fff, 0 0 5.25px #fff,\n    0 0 10.5px #0fa, 0 0 20.5px #0fa, 0 0 23px #0fa, 0 0 25.5px #0fa,\n    0 0 37.75px #0fa;\n  --neon-text-shadow-very-low: 0 0 0.5px #fff, 0 0 0.6px #fff, 0 0 1.3px #fff,\n    0 0 2.5px #0fa, 0 0 5px #0fa, 0 0 6px #0fa, 0 0 6.5px #0fa, 0 0 37.75px #0fa;\n  --pink-neon-text-shadow-high: 0 0 4px #fff, 0 0 10px #fff, 0 0 18px #fff,\n    0 0 38px #f09, 0 0 73px #f09, 0 0 80px #f09, 0 0 94px #f09, 0 0 140px #f09;\n  --pink-neon-text-shadow-low: 0 0 1px #fff, 0 0 2.5px #fff, 0 0 4.5px #fff,\n    0 0 9.5px #f09, 0 0 18.25px #f09, 0 0 20px #f09, 0 0 23.5px #f09,\n    0 0 35px #f09;\n\n  --blue-neon-text-shadow: 0 0 6px rgba(202, 228, 225, 0.92),\n    0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(30, 132, 242, 0.52),\n    0 0 21px rgba(30, 132, 242, 0.92), 0 0 34px rgba(30, 132, 242, 0.78),\n    0 0 54px rgba(30, 132, 242, 0.92);\n\n  font-family: fantasy;\n}\n.background_video {\n  width: 100vw;\n  height: 100vh;\n  object-fit: cover;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n}\n\nbody {\n  background-color: darkcyan;\n  color: var(--color_white_custom);\n  margin: 0;\n  text-shadow: var(--blue-neon-text-shadow-low);\n}\n\n.main_container {\n  display: flex;\n  flex-direction: column;\n  /* padding: 2rem 4rem; */\n  gap: 1rem;\n}\n\n/* ****** */\n/* header */\n/* ****** */\n\n.header_main_container {\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  justify-content: space-between;\n  padding: 0.5rem 4rem;\n  padding-top: 1rem;\n  background-color: var(--overlay-black);\n\n  /* background-color: orange; */\n}\n\n.header_left,\n.header_right {\n  display: flex;\n  gap: 2rem;\n}\n\n.header_mid {\n  align-self: center;\n  text-shadow: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"matrix\";\n}\n.header_mid .header_game_name {\n  font-size: 3.5rem;\n  font-weight: 900;\n  margin-bottom: 0;\n}\n\n.icon {\n  height: 2rem;\n}\n.new_game_button .icon {\n  scale: 1.2;\n  margin-left: 0.3rem;\n}\n\nbutton {\n  width: 120px;\n  height: 50px;\n  background-color: var(--color_white_custom);\n  border-radius: var(--border-radius);\n  box-shadow: inset 0rem 0rem 1rem black;\n\n  border: none;\n  align-self: center;\n  text-align: center;\n  font-size: 1.4rem;\n  cursor: pointer;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nbutton.new_game_button {\n  width: 240px;\n  z-index: 4;\n}\nbutton.new_game_button.active {\n  box-shadow: var(--pink-neon-text-shadow-low);\n}\nbutton:hover {\n  transform: scale(1.1);\n}\n/* ****** */\n/* ****** */\n\n/* ********************** */\n/* Main Content Container */\n/* ********************** */\n\n.content_main_container {\n  /* border: 4px burlywood solid; */\n  margin: 2rem 4rem;\n  margin-bottom: 0;\n}\n\n.content_container {\n  /* border: 2px goldenrod solid; */\n  display: flex;\n  flex-direction: row;\n}\n\n.player_1_container,\n.player_2_container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-shadow: var(--blue-neon-text-shadow);\n  font-weight: 900;\n}\n\n.player_1_name,\n.player_2_name {\n  transition-duration: 0.5s;\n  padding: 1rem;\n  padding-top: 1.5rem;\n  font-size: 2.2rem;\n  /* border: 2px red solid; */\n  border-radius: var(--border-radius);\n}\n.player_1_name.active,\n.player_2_name.active {\n  text-shadow: var(--pink-neon-text-shadow-low);\n  box-shadow: var(--pink-neon-text-shadow-low);\n}\n\n.player_1_status_round,\n.player_2_status_round {\n  font-size: 1.5rem;\n  margin-top: 4rem;\n  border-radius: var(--border-radius);\n  /* box-shadow: inset 0rem 0rem 55rem black; */\n}\n\n/* cutting the pills .svg file in half and use them on both sided */\n.player_1_img_container {\n  width: 95%;\n  height: 100%;\n  float: left;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-position: right center;\n}\n.player_1_img_container:nth-child(2) {\n  background-position: left center;\n}\n.player_2_img_container {\n  width: 95%;\n  height: 100%;\n  float: right;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-position: left center;\n}\n.player_2_img_container:nth-child(2) {\n  background-position: right center;\n}\n\n.gameboard_container {\n  display: flex;\n  flex-direction: row;\n  /* width: minmax(100, 60vw); */\n}\n\n/* column and row settings */\n/* *********************** */\n\n.column {\n  border-radius: var(--border-radius);\n  /* border: 2px red solid;\n  background-color: brown; */\n  padding: 0 calc(var(--column-padding) / 2);\n\n  display: flex;\n  flex-direction: column;\n}\n.column:hover {\n  scale: 1.01;\n  box-shadow: inset 0 0 60px var(--background-color-army-green-light);\n}\n\n.row {\n  border: 6px black solid;\n  border-radius: 12rem;\n  background-color: var(--row-cell-background-color);\n  opacity: 0.9;\n  box-shadow: inset 0rem 0rem 1.5rem black;\n  padding: var(--column-padding);\n  margin: calc(var(--column-padding) / 5) 0;\n\n  height: 1.7rem;\n  width: 1.7rem;\n  pointer-events: none; /* this is important for the event capture on click */\n}\n/* here you can add animation for winning cells */\n.row.winning_row {\n  opacity: 1;\n  z-index: 4;\n  box-shadow: var(--neon-text-shadow-very-low);\n  animation: flicker 1.5s infinite alternate;\n}\n.row:hover {\n  scale: 1.1;\n}\n/* *********************** */\n\n/* ********************** */\n/* ********************** */\n\n/* ******************* */\n/* overlay and pop-ups */\n/* ******************* */\n\n.overlay_for_pop_ups {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--overlay-black);\n  opacity: 0;\n  pointer-events: none;\n  z-index: 3;\n}\n.overlay_for_pop_ups.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.gameover_pop_up {\n  /* margin: 0 auto; */\n  font-size: 4rem;\n  font-family: \"matrix\";\n  color: var(--color_white_custom);\n  /* border: 2px var(--color_white_custom) solid; */\n  opacity: 0;\n  z-index: 4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-shadow: var(--neon-text-shadow-medium);\n  box-shadow: var(--neon-text-shadow-very-low);\n\n  /* box-shadow: inset 1rem 1rem 4rem white; */\n  border-radius: var(--border-radius);\n  padding: 0.7rem;\n}\n.gameover_pop_up.active {\n  opacity: 1;\n}\n.gameover_pop_up .status_winning {\n}\n\n/* ******************* */\n/* ******************* */\n\n/* ****** */\n/* footer */\n/* ****** */\n\nfooter {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: red;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: var(--background-color-army-green-dark);\n  color: var(--color_white_custom);\n  z-index: 2;\n  text-shadow: none;\n  margin: 0;\n}\n\nfooter img {\n  height: 1.5rem;\n  scale: 1.2;\n}\n\nfooter img:hover {\n  transform: scale(1.1);\n}\n/* ****** */\n/* ****** */\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"matrix\";\n  src: url(\"../assets/fonts/matrix.ttf\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  --main-content-margin: 1rem;\n  --border-radius: 23px;\n  --background-color-pop-up: brown;\n  --color_white_custom: #e8e6e3;\n  --background-color-army-green-light: #b5b9a4;\n  --background-color-army-green-medium: #a3a78d;\n  --background-color-army-green-dark: #42453a;\n  --overlay-black: rgba(0, 0, 0, 0.8);\n\n  --player-1-color: red;\n  --player-2-color: blue;\n  --row-cell-background-color: #d1fae5;\n  --winning-cells-color: purple;\n  --column-padding: 1rem;\n\n  --neon-text-shadow-high: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,\n    0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;\n  --neon-text-shadow-medium: 0 0 3.4px #fff, 0 0 5px #fff, 0 0 10.5px #fff,\n    0 0 21px #0fa, 0 0 41px #0fa, 0 0 46px #0fa, 0 0 51px #0fa, 0 0 75.5px #0fa;\n  --neon-text-shadow-low: 0 0 1.7px #fff, 0 0 2.5px #fff, 0 0 5.25px #fff,\n    0 0 10.5px #0fa, 0 0 20.5px #0fa, 0 0 23px #0fa, 0 0 25.5px #0fa,\n    0 0 37.75px #0fa;\n  --neon-text-shadow-very-low: 0 0 0.5px #fff, 0 0 0.6px #fff, 0 0 1.3px #fff,\n    0 0 2.5px #0fa, 0 0 5px #0fa, 0 0 6px #0fa, 0 0 6.5px #0fa, 0 0 37.75px #0fa;\n  --pink-neon-text-shadow-high: 0 0 4px #fff, 0 0 10px #fff, 0 0 18px #fff,\n    0 0 38px #f09, 0 0 73px #f09, 0 0 80px #f09, 0 0 94px #f09, 0 0 140px #f09;\n  --pink-neon-text-shadow-low: 0 0 1px #fff, 0 0 2.5px #fff, 0 0 4.5px #fff,\n    0 0 9.5px #f09, 0 0 18.25px #f09, 0 0 20px #f09, 0 0 23.5px #f09,\n    0 0 35px #f09;\n\n  --blue-neon-text-shadow: 0 0 6px rgba(202, 228, 225, 0.92),\n    0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(30, 132, 242, 0.52),\n    0 0 21px rgba(30, 132, 242, 0.92), 0 0 34px rgba(30, 132, 242, 0.78),\n    0 0 54px rgba(30, 132, 242, 0.92);\n\n  font-family: fantasy;\n}\n.background_video {\n  width: 100vw;\n  height: 100vh;\n  object-fit: cover;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n}\n\nbody {\n  background-color: darkcyan;\n  color: var(--color_white_custom);\n  margin: 0;\n  text-shadow: var(--blue-neon-text-shadow-low);\n}\n\n.main_container {\n  display: flex;\n  flex-direction: column;\n  /* padding: 2rem 4rem; */\n  gap: 1rem;\n}\n\n/* ****** */\n/* header */\n/* ****** */\n\n.header_main_container {\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  justify-content: space-between;\n  padding: 0.5rem 4rem;\n  padding-top: 1rem;\n  background-color: var(--overlay-black);\n\n  /* background-color: orange; */\n}\n\n.header_left,\n.header_right {\n  display: flex;\n  gap: 2rem;\n}\n\n.header_mid {\n  align-self: center;\n  text-shadow: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"matrix\";\n}\n.header_mid .header_game_name {\n  font-size: 3.5rem;\n  font-weight: 900;\n  margin-bottom: 0;\n}\n\n.icon {\n  height: 2rem;\n}\n.new_game_button .icon {\n  scale: 1.2;\n  margin-left: 0.3rem;\n}\n\nbutton {\n  width: 120px;\n  height: 50px;\n  background-color: var(--color_white_custom);\n  border-radius: var(--border-radius);\n  box-shadow: inset 0rem 0rem 1rem black;\n\n  border: none;\n  align-self: center;\n  text-align: center;\n  font-size: 1.4rem;\n  cursor: pointer;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nbutton.new_game_button {\n  width: 240px;\n  z-index: 4;\n}\nbutton.new_game_button.active {\n  box-shadow: var(--pink-neon-text-shadow-low);\n}\nbutton:hover {\n  transform: scale(1.1);\n}\n/* ****** */\n/* ****** */\n\n/* ********************** */\n/* Main Content Container */\n/* ********************** */\n\n.content_main_container {\n  /* border: 4px burlywood solid; */\n  margin: 2rem 4rem;\n  margin-bottom: 0;\n}\n\n.content_container {\n  /* border: 2px goldenrod solid; */\n  display: flex;\n  flex-direction: row;\n}\n\n.player_1_container,\n.player_2_container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-shadow: var(--blue-neon-text-shadow);\n  font-weight: 900;\n}\n\n.player_1_name,\n.player_2_name {\n  transition-duration: 0.5s;\n  padding: 1rem;\n  padding-top: 1.5rem;\n  font-size: 2.2rem;\n  /* border: 2px red solid; */\n  border-radius: var(--border-radius);\n}\n.player_1_name.active,\n.player_2_name.active {\n  text-shadow: var(--pink-neon-text-shadow-low);\n  box-shadow: var(--pink-neon-text-shadow-low);\n}\n\n.player_1_status_round,\n.player_2_status_round {\n  font-size: 1.5rem;\n  margin-top: 4rem;\n  border-radius: var(--border-radius);\n  /* box-shadow: inset 0rem 0rem 55rem black; */\n}\n\n/* cutting the pills .svg file in half and use them on both sided */\n.player_1_img_container {\n  width: 95%;\n  height: 100%;\n  float: left;\n  background-image: url(../assets/images/red_pill_blue_pill.svg);\n  background-repeat: no-repeat;\n  background-position: right center;\n}\n.player_1_img_container:nth-child(2) {\n  background-position: left center;\n}\n.player_2_img_container {\n  width: 95%;\n  height: 100%;\n  float: right;\n  background-image: url(../assets/images/red_pill_blue_pill.svg);\n  background-repeat: no-repeat;\n  background-position: left center;\n}\n.player_2_img_container:nth-child(2) {\n  background-position: right center;\n}\n\n.gameboard_container {\n  display: flex;\n  flex-direction: row;\n  /* width: minmax(100, 60vw); */\n}\n\n/* column and row settings */\n/* *********************** */\n\n.column {\n  border-radius: var(--border-radius);\n  /* border: 2px red solid;\n  background-color: brown; */\n  padding: 0 calc(var(--column-padding) / 2);\n\n  display: flex;\n  flex-direction: column;\n}\n.column:hover {\n  scale: 1.01;\n  box-shadow: inset 0 0 60px var(--background-color-army-green-light);\n}\n\n.row {\n  border: 6px black solid;\n  border-radius: 12rem;\n  background-color: var(--row-cell-background-color);\n  opacity: 0.9;\n  box-shadow: inset 0rem 0rem 1.5rem black;\n  padding: var(--column-padding);\n  margin: calc(var(--column-padding) / 5) 0;\n\n  height: 1.7rem;\n  width: 1.7rem;\n  pointer-events: none; /* this is important for the event capture on click */\n}\n/* here you can add animation for winning cells */\n.row.winning_row {\n  opacity: 1;\n  z-index: 4;\n  box-shadow: var(--neon-text-shadow-very-low);\n  animation: flicker 1.5s infinite alternate;\n}\n.row:hover {\n  scale: 1.1;\n}\n/* *********************** */\n\n/* ********************** */\n/* ********************** */\n\n/* ******************* */\n/* overlay and pop-ups */\n/* ******************* */\n\n.overlay_for_pop_ups {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--overlay-black);\n  opacity: 0;\n  pointer-events: none;\n  z-index: 3;\n}\n.overlay_for_pop_ups.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.gameover_pop_up {\n  /* margin: 0 auto; */\n  font-size: 4rem;\n  font-family: \"matrix\";\n  color: var(--color_white_custom);\n  /* border: 2px var(--color_white_custom) solid; */\n  opacity: 0;\n  z-index: 4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-shadow: var(--neon-text-shadow-medium);\n  box-shadow: var(--neon-text-shadow-very-low);\n\n  /* box-shadow: inset 1rem 1rem 4rem white; */\n  border-radius: var(--border-radius);\n  padding: 0.7rem;\n}\n.gameover_pop_up.active {\n  opacity: 1;\n}\n.gameover_pop_up .status_winning {\n}\n\n/* ******************* */\n/* ******************* */\n\n/* ****** */\n/* footer */\n/* ****** */\n\nfooter {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: red;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: var(--background-color-army-green-dark);\n  color: var(--color_white_custom);\n  z-index: 2;\n  text-shadow: none;\n  margin: 0;\n}\n\nfooter img {\n  height: 1.5rem;\n  scale: 1.2;\n}\n\nfooter img:hover {\n  transform: scale(1.1);\n}\n/* ****** */\n/* ****** */\n"],"sourceRoot":""}]);
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
    // console.log(columnNumber);
    // console.log(selectedColumn);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.game.playRound(selectedColumn);
    console.log(selectedColumn);
    // console.log(game.getActivePlayer());
  }

  function EventListenerToColumns() {
    const columns = document.querySelectorAll(".column");

    function add() {
      columns.forEach((column) => {
        column.addEventListener("click", (event) => {
          // console.log(event.target.dataset.column_number);
          playRoundClickEvent(event);
        });
      });
    }

    function remove() {
      columns.forEach((column) => {
        column.removeEventListener("click", (event) => {
          // console.log(event.target.dataset.column_number);
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
      const infoButton = document.querySelector("button info_button");
      let isInfoOn = false;

      function infoButtonToggle() {}

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
    //TO DO: edit with column parameter
    let myColumn = column;
    //TO DO: remove this line below later
    // myColumn = board[0];

    let selectedCell = whichCellIsAvailable(myColumn);

    if (selectedCell == undefined) {
      return;
    }

    // TO DO: edit as player.status
    selectedCell.status = playerToken;
  }

  function displayGameboard() {
    domCreator.cleanExistingGameboardElements();
    domCreator.displayGameboardDOM();
    domCreator.EventListenerToColumns().add();
    domCreator.addEventListenerToNewGameButton();
  }

  function checkGameOver(player) {
    //TO DO: Check why the last number only shows up after the alert!!

    // if (getBoard()[0][0].status != 0) {
    //   return true;
    // } else {
    //   return false;
    // }

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
    // console.log("game has ended");

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
    // returns false if game continues, draw? when all cells are full?

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/javascript/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxnSUFBNkM7QUFDekYsNENBQTRDLDBKQUEwRDtBQUN0Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHNEQUFzRCw0QkFBNEIseURBQXlELHFCQUFxQix1QkFBdUIsR0FBRyxXQUFXLGdDQUFnQywwQkFBMEIscUNBQXFDLGtDQUFrQyxpREFBaUQsa0RBQWtELGdEQUFnRCx3Q0FBd0MsNEJBQTRCLDJCQUEyQix5Q0FBeUMsa0NBQWtDLDJCQUEyQiw0SkFBNEosK0pBQStKLDBLQUEwSyxtS0FBbUssOEpBQThKLHlLQUF5SyxnUUFBZ1EsMkJBQTJCLEdBQUcscUJBQXFCLGlCQUFpQixrQkFBa0Isc0JBQXNCLG9CQUFvQixZQUFZLGFBQWEsV0FBVyxjQUFjLGdCQUFnQixHQUFHLFVBQVUsK0JBQStCLHFDQUFxQyxjQUFjLGtEQUFrRCxHQUFHLHFCQUFxQixrQkFBa0IsMkJBQTJCLDJCQUEyQixnQkFBZ0IsR0FBRyx3RUFBd0Usa0JBQWtCLHVDQUF1QyxtQ0FBbUMseUJBQXlCLHNCQUFzQiwyQ0FBMkMsbUNBQW1DLEtBQUssa0NBQWtDLGtCQUFrQixjQUFjLEdBQUcsaUJBQWlCLHVCQUF1QixzQkFBc0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsNEJBQTRCLEdBQUcsaUNBQWlDLHNCQUFzQixxQkFBcUIscUJBQXFCLEdBQUcsV0FBVyxpQkFBaUIsR0FBRywwQkFBMEIsZUFBZSx3QkFBd0IsR0FBRyxZQUFZLGlCQUFpQixpQkFBaUIsZ0RBQWdELHdDQUF3QywyQ0FBMkMsbUJBQW1CLHVCQUF1Qix1QkFBdUIsc0JBQXNCLG9CQUFvQixvQkFBb0IsNEJBQTRCLHdCQUF3QixHQUFHLDBCQUEwQixpQkFBaUIsZUFBZSxHQUFHLGlDQUFpQyxpREFBaUQsR0FBRyxnQkFBZ0IsMEJBQTBCLEdBQUcscUpBQXFKLG9DQUFvQyx3QkFBd0IscUJBQXFCLEdBQUcsd0JBQXdCLG9DQUFvQyxvQkFBb0Isd0JBQXdCLEdBQUcsK0NBQStDLFlBQVksa0JBQWtCLDJCQUEyQix3QkFBd0IsOENBQThDLHFCQUFxQixHQUFHLHFDQUFxQyw4QkFBOEIsa0JBQWtCLHdCQUF3QixzQkFBc0IsOEJBQThCLDBDQUEwQyxHQUFHLGlEQUFpRCxrREFBa0QsaURBQWlELEdBQUcscURBQXFELHNCQUFzQixxQkFBcUIsd0NBQXdDLGdEQUFnRCxLQUFLLG1HQUFtRyxlQUFlLGlCQUFpQixnQkFBZ0Isc0VBQXNFLGlDQUFpQyxzQ0FBc0MsR0FBRyx3Q0FBd0MscUNBQXFDLEdBQUcsMkJBQTJCLGVBQWUsaUJBQWlCLGlCQUFpQixzRUFBc0UsaUNBQWlDLHFDQUFxQyxHQUFHLHdDQUF3QyxzQ0FBc0MsR0FBRywwQkFBMEIsa0JBQWtCLHdCQUF3QixpQ0FBaUMsS0FBSyw2RUFBNkUsd0NBQXdDLDZCQUE2Qiw2QkFBNkIsaURBQWlELG9CQUFvQiwyQkFBMkIsR0FBRyxpQkFBaUIsZ0JBQWdCLHdFQUF3RSxHQUFHLFVBQVUsNEJBQTRCLHlCQUF5Qix1REFBdUQsaUJBQWlCLDZDQUE2QyxtQ0FBbUMsOENBQThDLHFCQUFxQixrQkFBa0IsMEJBQTBCLHlEQUF5RCx3RUFBd0UsZUFBZSxlQUFlLGlEQUFpRCwrQ0FBK0MsR0FBRyxjQUFjLGVBQWUsR0FBRywwTUFBME0sb0JBQW9CLFdBQVcsWUFBWSxhQUFhLGNBQWMsMkNBQTJDLGVBQWUseUJBQXlCLGVBQWUsR0FBRywrQkFBK0IsZUFBZSx3QkFBd0IsR0FBRyxzQkFBc0IsdUJBQXVCLHNCQUFzQiw0QkFBNEIscUNBQXFDLG9EQUFvRCxpQkFBaUIsZUFBZSxrQkFBa0IsNEJBQTRCLHdCQUF3QixnREFBZ0QsaURBQWlELGlEQUFpRCwwQ0FBMEMsb0JBQW9CLEdBQUcsMkJBQTJCLGVBQWUsR0FBRyxvQ0FBb0MsR0FBRyxnSEFBZ0gsb0JBQW9CLFlBQVksY0FBYyxnQkFBZ0IsMEJBQTBCLHVCQUF1QixrQkFBa0IsNEJBQTRCLHdCQUF3Qiw4Q0FBOEMsOERBQThELHFDQUFxQyxlQUFlLHNCQUFzQixjQUFjLEdBQUcsZ0JBQWdCLG1CQUFtQixlQUFlLEdBQUcsc0JBQXNCLDBCQUEwQixHQUFHLHFDQUFxQyx1RkFBdUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLE9BQU8sTUFBTSxPQUFPLE9BQU8sT0FBTyxNQUFNLE9BQU8sTUFBTSxPQUFPLE9BQU8sT0FBTyxPQUFPLFFBQVEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxVQUFVLFVBQVUsV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLFlBQVksVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLFVBQVUsV0FBVyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksY0FBYyxNQUFNLFlBQVksTUFBTSxPQUFPLGNBQWMsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsV0FBVyxVQUFVLHdCQUF3QixNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssTUFBTSxZQUFZLGNBQWMsV0FBVyxVQUFVLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sVUFBVSwwQ0FBMEMsNEJBQTRCLDZDQUE2QyxxQkFBcUIsdUJBQXVCLEdBQUcsV0FBVyxnQ0FBZ0MsMEJBQTBCLHFDQUFxQyxrQ0FBa0MsaURBQWlELGtEQUFrRCxnREFBZ0Qsd0NBQXdDLDRCQUE0QiwyQkFBMkIseUNBQXlDLGtDQUFrQywyQkFBMkIsNEpBQTRKLCtKQUErSiwwS0FBMEssbUtBQW1LLDhKQUE4Six5S0FBeUssZ1FBQWdRLDJCQUEyQixHQUFHLHFCQUFxQixpQkFBaUIsa0JBQWtCLHNCQUFzQixvQkFBb0IsWUFBWSxhQUFhLFdBQVcsY0FBYyxnQkFBZ0IsR0FBRyxVQUFVLCtCQUErQixxQ0FBcUMsY0FBYyxrREFBa0QsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQiwyQkFBMkIsZ0JBQWdCLEdBQUcsd0VBQXdFLGtCQUFrQix1Q0FBdUMsbUNBQW1DLHlCQUF5QixzQkFBc0IsMkNBQTJDLG1DQUFtQyxLQUFLLGtDQUFrQyxrQkFBa0IsY0FBYyxHQUFHLGlCQUFpQix1QkFBdUIsc0JBQXNCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLDRCQUE0QixHQUFHLGlDQUFpQyxzQkFBc0IscUJBQXFCLHFCQUFxQixHQUFHLFdBQVcsaUJBQWlCLEdBQUcsMEJBQTBCLGVBQWUsd0JBQXdCLEdBQUcsWUFBWSxpQkFBaUIsaUJBQWlCLGdEQUFnRCx3Q0FBd0MsMkNBQTJDLG1CQUFtQix1QkFBdUIsdUJBQXVCLHNCQUFzQixvQkFBb0Isb0JBQW9CLDRCQUE0Qix3QkFBd0IsR0FBRywwQkFBMEIsaUJBQWlCLGVBQWUsR0FBRyxpQ0FBaUMsaURBQWlELEdBQUcsZ0JBQWdCLDBCQUEwQixHQUFHLHFKQUFxSixvQ0FBb0Msd0JBQXdCLHFCQUFxQixHQUFHLHdCQUF3QixvQ0FBb0Msb0JBQW9CLHdCQUF3QixHQUFHLCtDQUErQyxZQUFZLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDhDQUE4QyxxQkFBcUIsR0FBRyxxQ0FBcUMsOEJBQThCLGtCQUFrQix3QkFBd0Isc0JBQXNCLDhCQUE4QiwwQ0FBMEMsR0FBRyxpREFBaUQsa0RBQWtELGlEQUFpRCxHQUFHLHFEQUFxRCxzQkFBc0IscUJBQXFCLHdDQUF3QyxnREFBZ0QsS0FBSyxtR0FBbUcsZUFBZSxpQkFBaUIsZ0JBQWdCLG1FQUFtRSxpQ0FBaUMsc0NBQXNDLEdBQUcsd0NBQXdDLHFDQUFxQyxHQUFHLDJCQUEyQixlQUFlLGlCQUFpQixpQkFBaUIsbUVBQW1FLGlDQUFpQyxxQ0FBcUMsR0FBRyx3Q0FBd0Msc0NBQXNDLEdBQUcsMEJBQTBCLGtCQUFrQix3QkFBd0IsaUNBQWlDLEtBQUssNkVBQTZFLHdDQUF3Qyw2QkFBNkIsNkJBQTZCLGlEQUFpRCxvQkFBb0IsMkJBQTJCLEdBQUcsaUJBQWlCLGdCQUFnQix3RUFBd0UsR0FBRyxVQUFVLDRCQUE0Qix5QkFBeUIsdURBQXVELGlCQUFpQiw2Q0FBNkMsbUNBQW1DLDhDQUE4QyxxQkFBcUIsa0JBQWtCLDBCQUEwQix5REFBeUQsd0VBQXdFLGVBQWUsZUFBZSxpREFBaUQsK0NBQStDLEdBQUcsY0FBYyxlQUFlLEdBQUcsME1BQTBNLG9CQUFvQixXQUFXLFlBQVksYUFBYSxjQUFjLDJDQUEyQyxlQUFlLHlCQUF5QixlQUFlLEdBQUcsK0JBQStCLGVBQWUsd0JBQXdCLEdBQUcsc0JBQXNCLHVCQUF1QixzQkFBc0IsNEJBQTRCLHFDQUFxQyxvREFBb0QsaUJBQWlCLGVBQWUsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZ0RBQWdELGlEQUFpRCxpREFBaUQsMENBQTBDLG9CQUFvQixHQUFHLDJCQUEyQixlQUFlLEdBQUcsb0NBQW9DLEdBQUcsZ0hBQWdILG9CQUFvQixZQUFZLGNBQWMsZ0JBQWdCLDBCQUEwQix1QkFBdUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsOENBQThDLDhEQUE4RCxxQ0FBcUMsZUFBZSxzQkFBc0IsY0FBYyxHQUFHLGdCQUFnQixtQkFBbUIsZUFBZSxHQUFHLHNCQUFzQiwwQkFBMEIsR0FBRyxpREFBaUQ7QUFDOTRsQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1oxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYmtDOztBQUUzQjtBQUNQOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsOERBQXVCO0FBQ2hEO0FBQ0E7QUFDQSxJQUFJLHFEQUFjO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdEQUFpQjtBQUN2QixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0Esb0JBQW9CLElBQUksOERBQXVCLFdBQVc7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLElBQUksOERBQXVCLGNBQWM7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSw4REFBdUI7QUFDbkM7QUFDQTtBQUNBLHNEQUFzRCxXQUFXO0FBQ2pFO0FBQ0EsVUFBVSxTQUFTLDhEQUF1QjtBQUMxQztBQUNBO0FBQ0Esc0RBQXNELFdBQVc7QUFDakU7QUFDQTs7QUFFQSxZQUFZLDhEQUF1QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsc0RBQWU7QUFDM0MsNEJBQTRCLHNEQUFlO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsU0FBUztBQUNULGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixzREFBZTtBQUN4QztBQUNBO0FBQ0EsTUFBTSwwQkFBMEIsc0RBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDek13RDs7QUFFakQ7QUFDUDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUVBQWtCOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsYUFBYTtBQUNqQzs7QUFFQSxzQkFBc0IsVUFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixlQUFlO0FBQ3JDLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixZQUFZO0FBQ2xDLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEMsd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0Qyx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pMMkM7QUFDVDs7QUFFM0I7QUFDUCxvQkFBb0Isd0RBQVMsSUFBSTtBQUNqQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsbUJBQW1CO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25EOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHNkI7QUFDd0I7QUFDckQsWUFBWSxxQkFBcUI7QUFDakMsWUFBWSxZQUFZO0FBQzZCOztBQUU5QyxhQUFhLGtFQUFjLElBQUk7QUFDdEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25uZWN0LWZvdXIvLi9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9jb25uZWN0LWZvdXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY29ubmVjdC1mb3VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY29ubmVjdC1mb3VyLy4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSIsIndlYnBhY2s6Ly9jb25uZWN0LWZvdXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY29ubmVjdC1mb3VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jb25uZWN0LWZvdXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY29ubmVjdC1mb3VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL3NyYy9qYXZhc2NyaXB0L2RvbV9tYXRlcmlhbHMuanMiLCJ3ZWJwYWNrOi8vY29ubmVjdC1mb3VyLy4vc3JjL2phdmFzY3JpcHQvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL3NyYy9qYXZhc2NyaXB0L2dhbWVjb250cm9sbGVyLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL3NyYy9qYXZhc2NyaXB0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvbWF0cml4LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvcmVkX3BpbGxfYmx1ZV9waWxsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWF0cml4XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gIC0tbWFpbi1jb250ZW50LW1hcmdpbjogMXJlbTtcXG4gIC0tYm9yZGVyLXJhZGl1czogMjNweDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci1wb3AtdXA6IGJyb3duO1xcbiAgLS1jb2xvcl93aGl0ZV9jdXN0b206ICNlOGU2ZTM7XFxuICAtLWJhY2tncm91bmQtY29sb3ItYXJteS1ncmVlbi1saWdodDogI2I1YjlhNDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci1hcm15LWdyZWVuLW1lZGl1bTogI2EzYTc4ZDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci1hcm15LWdyZWVuLWRhcms6ICM0MjQ1M2E7XFxuICAtLW92ZXJsYXktYmxhY2s6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG5cXG4gIC0tcGxheWVyLTEtY29sb3I6IHJlZDtcXG4gIC0tcGxheWVyLTItY29sb3I6IGJsdWU7XFxuICAtLXJvdy1jZWxsLWJhY2tncm91bmQtY29sb3I6ICNkMWZhZTU7XFxuICAtLXdpbm5pbmctY2VsbHMtY29sb3I6IHB1cnBsZTtcXG4gIC0tY29sdW1uLXBhZGRpbmc6IDFyZW07XFxuXFxuICAtLW5lb24tdGV4dC1zaGFkb3ctaGlnaDogMCAwIDdweCAjZmZmLCAwIDAgMTBweCAjZmZmLCAwIDAgMjFweCAjZmZmLFxcbiAgICAwIDAgNDJweCAjMGZhLCAwIDAgODJweCAjMGZhLCAwIDAgOTJweCAjMGZhLCAwIDAgMTAycHggIzBmYSwgMCAwIDE1MXB4ICMwZmE7XFxuICAtLW5lb24tdGV4dC1zaGFkb3ctbWVkaXVtOiAwIDAgMy40cHggI2ZmZiwgMCAwIDVweCAjZmZmLCAwIDAgMTAuNXB4ICNmZmYsXFxuICAgIDAgMCAyMXB4ICMwZmEsIDAgMCA0MXB4ICMwZmEsIDAgMCA0NnB4ICMwZmEsIDAgMCA1MXB4ICMwZmEsIDAgMCA3NS41cHggIzBmYTtcXG4gIC0tbmVvbi10ZXh0LXNoYWRvdy1sb3c6IDAgMCAxLjdweCAjZmZmLCAwIDAgMi41cHggI2ZmZiwgMCAwIDUuMjVweCAjZmZmLFxcbiAgICAwIDAgMTAuNXB4ICMwZmEsIDAgMCAyMC41cHggIzBmYSwgMCAwIDIzcHggIzBmYSwgMCAwIDI1LjVweCAjMGZhLFxcbiAgICAwIDAgMzcuNzVweCAjMGZhO1xcbiAgLS1uZW9uLXRleHQtc2hhZG93LXZlcnktbG93OiAwIDAgMC41cHggI2ZmZiwgMCAwIDAuNnB4ICNmZmYsIDAgMCAxLjNweCAjZmZmLFxcbiAgICAwIDAgMi41cHggIzBmYSwgMCAwIDVweCAjMGZhLCAwIDAgNnB4ICMwZmEsIDAgMCA2LjVweCAjMGZhLCAwIDAgMzcuNzVweCAjMGZhO1xcbiAgLS1waW5rLW5lb24tdGV4dC1zaGFkb3ctaGlnaDogMCAwIDRweCAjZmZmLCAwIDAgMTBweCAjZmZmLCAwIDAgMThweCAjZmZmLFxcbiAgICAwIDAgMzhweCAjZjA5LCAwIDAgNzNweCAjZjA5LCAwIDAgODBweCAjZjA5LCAwIDAgOTRweCAjZjA5LCAwIDAgMTQwcHggI2YwOTtcXG4gIC0tcGluay1uZW9uLXRleHQtc2hhZG93LWxvdzogMCAwIDFweCAjZmZmLCAwIDAgMi41cHggI2ZmZiwgMCAwIDQuNXB4ICNmZmYsXFxuICAgIDAgMCA5LjVweCAjZjA5LCAwIDAgMTguMjVweCAjZjA5LCAwIDAgMjBweCAjZjA5LCAwIDAgMjMuNXB4ICNmMDksXFxuICAgIDAgMCAzNXB4ICNmMDk7XFxuXFxuICAtLWJsdWUtbmVvbi10ZXh0LXNoYWRvdzogMCAwIDZweCByZ2JhKDIwMiwgMjI4LCAyMjUsIDAuOTIpLFxcbiAgICAwIDAgMzBweCByZ2JhKDIwMiwgMjI4LCAyMjUsIDAuMzQpLCAwIDAgMTJweCByZ2JhKDMwLCAxMzIsIDI0MiwgMC41MiksXFxuICAgIDAgMCAyMXB4IHJnYmEoMzAsIDEzMiwgMjQyLCAwLjkyKSwgMCAwIDM0cHggcmdiYSgzMCwgMTMyLCAyNDIsIDAuNzgpLFxcbiAgICAwIDAgNTRweCByZ2JhKDMwLCAxMzIsIDI0MiwgMC45Mik7XFxuXFxuICBmb250LWZhbWlseTogZmFudGFzeTtcXG59XFxuLmJhY2tncm91bmRfdmlkZW8ge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47XFxuICBjb2xvcjogdmFyKC0tY29sb3Jfd2hpdGVfY3VzdG9tKTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1ibHVlLW5lb24tdGV4dC1zaGFkb3ctbG93KTtcXG59XFxuXFxuLm1haW5fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLyogcGFkZGluZzogMnJlbSA0cmVtOyAqL1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4vKiAqKioqKiogKi9cXG4vKiBoZWFkZXIgKi9cXG4vKiAqKioqKiogKi9cXG5cXG4uaGVhZGVyX21haW5fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtIDRyZW07XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW92ZXJsYXktYmxhY2spO1xcblxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyAqL1xcbn1cXG5cXG4uaGVhZGVyX2xlZnQsXFxuLmhlYWRlcl9yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uaGVhZGVyX21pZCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIm1hdHJpeFxcXCI7XFxufVxcbi5oZWFkZXJfbWlkIC5oZWFkZXJfZ2FtZV9uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5pY29uIHtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuLm5ld19nYW1lX2J1dHRvbiAuaWNvbiB7XFxuICBzY2FsZTogMS4yO1xcbiAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yX3doaXRlX2N1c3RvbSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDByZW0gMHJlbSAxcmVtIGJsYWNrO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5idXR0b24ubmV3X2dhbWVfYnV0dG9uIHtcXG4gIHdpZHRoOiAyNDBweDtcXG4gIHotaW5kZXg6IDQ7XFxufVxcbmJ1dHRvbi5uZXdfZ2FtZV9idXR0b24uYWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXBpbmstbmVvbi10ZXh0LXNoYWRvdy1sb3cpO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4vKiAqKioqKiogKi9cXG4vKiAqKioqKiogKi9cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqICovXFxuLyogTWFpbiBDb250ZW50IENvbnRhaW5lciAqL1xcbi8qICoqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4uY29udGVudF9tYWluX2NvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDRweCBidXJseXdvb2Qgc29saWQ7ICovXFxuICBtYXJnaW46IDJyZW0gNHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5jb250ZW50X2NvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDJweCBnb2xkZW5yb2Qgc29saWQ7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnBsYXllcl8xX2NvbnRhaW5lcixcXG4ucGxheWVyXzJfY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tYmx1ZS1uZW9uLXRleHQtc2hhZG93KTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5wbGF5ZXJfMV9uYW1lLFxcbi5wbGF5ZXJfMl9uYW1lIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgLyogYm9yZGVyOiAycHggcmVkIHNvbGlkOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcbi5wbGF5ZXJfMV9uYW1lLmFjdGl2ZSxcXG4ucGxheWVyXzJfbmFtZS5hY3RpdmUge1xcbiAgdGV4dC1zaGFkb3c6IHZhcigtLXBpbmstbmVvbi10ZXh0LXNoYWRvdy1sb3cpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tcGluay1uZW9uLXRleHQtc2hhZG93LWxvdyk7XFxufVxcblxcbi5wbGF5ZXJfMV9zdGF0dXNfcm91bmQsXFxuLnBsYXllcl8yX3N0YXR1c19yb3VuZCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIC8qIGJveC1zaGFkb3c6IGluc2V0IDByZW0gMHJlbSA1NXJlbSBibGFjazsgKi9cXG59XFxuXFxuLyogY3V0dGluZyB0aGUgcGlsbHMgLnN2ZyBmaWxlIGluIGhhbGYgYW5kIHVzZSB0aGVtIG9uIGJvdGggc2lkZWQgKi9cXG4ucGxheWVyXzFfaW1nX2NvbnRhaW5lciB7XFxuICB3aWR0aDogOTUlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcXG59XFxuLnBsYXllcl8xX2ltZ19jb250YWluZXI6bnRoLWNoaWxkKDIpIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xcbn1cXG4ucGxheWVyXzJfaW1nX2NvbnRhaW5lciB7XFxuICB3aWR0aDogOTUlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXG59XFxuLnBsYXllcl8yX2ltZ19jb250YWluZXI6bnRoLWNoaWxkKDIpIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVib2FyZF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAvKiB3aWR0aDogbWlubWF4KDEwMCwgNjB2dyk7ICovXFxufVxcblxcbi8qIGNvbHVtbiBhbmQgcm93IHNldHRpbmdzICovXFxuLyogKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4uY29sdW1uIHtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgLyogYm9yZGVyOiAycHggcmVkIHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247ICovXFxuICBwYWRkaW5nOiAwIGNhbGModmFyKC0tY29sdW1uLXBhZGRpbmcpIC8gMik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNvbHVtbjpob3ZlciB7XFxuICBzY2FsZTogMS4wMTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2MHB4IHZhcigtLWJhY2tncm91bmQtY29sb3ItYXJteS1ncmVlbi1saWdodCk7XFxufVxcblxcbi5yb3cge1xcbiAgYm9yZGVyOiA2cHggYmxhY2sgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAxMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJvdy1jZWxsLWJhY2tncm91bmQtY29sb3IpO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHJlbSAwcmVtIDEuNXJlbSBibGFjaztcXG4gIHBhZGRpbmc6IHZhcigtLWNvbHVtbi1wYWRkaW5nKTtcXG4gIG1hcmdpbjogY2FsYyh2YXIoLS1jb2x1bW4tcGFkZGluZykgLyA1KSAwO1xcblxcbiAgaGVpZ2h0OiAxLjdyZW07XFxuICB3aWR0aDogMS43cmVtO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIHRoaXMgaXMgaW1wb3J0YW50IGZvciB0aGUgZXZlbnQgY2FwdHVyZSBvbiBjbGljayAqL1xcbn1cXG4vKiBoZXJlIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBmb3Igd2lubmluZyBjZWxscyAqL1xcbi5yb3cud2lubmluZ19yb3cge1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDQ7XFxuICBib3gtc2hhZG93OiB2YXIoLS1uZW9uLXRleHQtc2hhZG93LXZlcnktbG93KTtcXG4gIGFuaW1hdGlvbjogZmxpY2tlciAxLjVzIGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuLnJvdzpob3ZlciB7XFxuICBzY2FsZTogMS4xO1xcbn1cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKiogKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKiAqL1xcbi8qIG92ZXJsYXkgYW5kIHBvcC11cHMgKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLm92ZXJsYXlfZm9yX3BvcF91cHMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3ZlcmxheS1ibGFjayk7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB6LWluZGV4OiAzO1xcbn1cXG4ub3ZlcmxheV9mb3JfcG9wX3Vwcy5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5nYW1lb3Zlcl9wb3BfdXAge1xcbiAgLyogbWFyZ2luOiAwIGF1dG87ICovXFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LWZhbWlseTogXFxcIm1hdHJpeFxcXCI7XFxuICBjb2xvcjogdmFyKC0tY29sb3Jfd2hpdGVfY3VzdG9tKTtcXG4gIC8qIGJvcmRlcjogMnB4IHZhcigtLWNvbG9yX3doaXRlX2N1c3RvbSkgc29saWQ7ICovXFxuICBvcGFjaXR5OiAwO1xcbiAgei1pbmRleDogNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tbmVvbi10ZXh0LXNoYWRvdy1tZWRpdW0pO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tbmVvbi10ZXh0LXNoYWRvdy12ZXJ5LWxvdyk7XFxuXFxuICAvKiBib3gtc2hhZG93OiBpbnNldCAxcmVtIDFyZW0gNHJlbSB3aGl0ZTsgKi9cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgcGFkZGluZzogMC43cmVtO1xcbn1cXG4uZ2FtZW92ZXJfcG9wX3VwLmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uZ2FtZW92ZXJfcG9wX3VwIC5zdGF0dXNfd2lubmluZyB7XFxufVxcblxcbi8qICoqKioqKioqKioqKioqKioqKiogKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLyogKioqKioqICovXFxuLyogZm9vdGVyICovXFxuLyogKioqKioqICovXFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItYXJteS1ncmVlbi1kYXJrKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcl93aGl0ZV9jdXN0b20pO1xcbiAgei1pbmRleDogMjtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5mb290ZXIgaW1nIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgc2NhbGU6IDEuMjtcXG59XFxuXFxuZm9vdGVyIGltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi8qICoqKioqKiAqL1xcbi8qICoqKioqKiAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUFzQztFQUN0QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLDRDQUE0QztFQUM1Qyw2Q0FBNkM7RUFDN0MsMkNBQTJDO0VBQzNDLG1DQUFtQzs7RUFFbkMscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLHNCQUFzQjs7RUFFdEI7K0VBQzZFO0VBQzdFOytFQUM2RTtFQUM3RTs7b0JBRWtCO0VBQ2xCO2dGQUM4RTtFQUM5RTs4RUFDNEU7RUFDNUU7O2lCQUVlOztFQUVmOzs7cUNBR21DOztFQUVuQyxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGdDQUFnQztFQUNoQyxTQUFTO0VBQ1QsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVzs7QUFFWDtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsc0NBQXNDOztFQUV0Qyw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osMkNBQTJDO0VBQzNDLG1DQUFtQztFQUNuQyxzQ0FBc0M7O0VBRXRDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlOztFQUVmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaO0FBQ0E7RUFDRSw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBLFdBQVc7QUFDWCxXQUFXOztBQUVYLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IsMkJBQTJCOztBQUUzQjtFQUNFLGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixtQ0FBbUM7QUFDckM7QUFDQTs7RUFFRSw2Q0FBNkM7RUFDN0MsNENBQTRDO0FBQzlDOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DLDZDQUE2QztBQUMvQzs7QUFFQSxtRUFBbUU7QUFDbkU7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCx5REFBOEQ7RUFDOUQsNEJBQTRCO0VBQzVCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWix5REFBOEQ7RUFDOUQsNEJBQTRCO0VBQzVCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUEsNEJBQTRCO0FBQzVCLDRCQUE0Qjs7QUFFNUI7RUFDRSxtQ0FBbUM7RUFDbkM7NEJBQzBCO0VBQzFCLDBDQUEwQzs7RUFFMUMsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLG1FQUFtRTtBQUNyRTs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsa0RBQWtEO0VBQ2xELFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsOEJBQThCO0VBQzlCLHlDQUF5Qzs7RUFFekMsY0FBYztFQUNkLGFBQWE7RUFDYixvQkFBb0IsRUFBRSxxREFBcUQ7QUFDN0U7QUFDQSxpREFBaUQ7QUFDakQ7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLDRDQUE0QztFQUM1QywwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBLDRCQUE0Qjs7QUFFNUIsMkJBQTJCO0FBQzNCLDJCQUEyQjs7QUFFM0Isd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qix3QkFBd0I7O0FBRXhCO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxzQ0FBc0M7RUFDdEMsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixnQ0FBZ0M7RUFDaEMsaURBQWlEO0VBQ2pELFVBQVU7RUFDVixVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLDRDQUE0Qzs7RUFFNUMsNENBQTRDO0VBQzVDLG1DQUFtQztFQUNuQyxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4Qix3QkFBd0I7O0FBRXhCLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVzs7QUFFWDtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6Qyx5REFBeUQ7RUFDekQsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBLFdBQVc7QUFDWCxXQUFXXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtYXRyaXhcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9tYXRyaXgudHRmXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLW1haW4tY29udGVudC1tYXJnaW46IDFyZW07XFxuICAtLWJvcmRlci1yYWRpdXM6IDIzcHg7XFxuICAtLWJhY2tncm91bmQtY29sb3ItcG9wLXVwOiBicm93bjtcXG4gIC0tY29sb3Jfd2hpdGVfY3VzdG9tOiAjZThlNmUzO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWFybXktZ3JlZW4tbGlnaHQ6ICNiNWI5YTQ7XFxuICAtLWJhY2tncm91bmQtY29sb3ItYXJteS1ncmVlbi1tZWRpdW06ICNhM2E3OGQ7XFxuICAtLWJhY2tncm91bmQtY29sb3ItYXJteS1ncmVlbi1kYXJrOiAjNDI0NTNhO1xcbiAgLS1vdmVybGF5LWJsYWNrOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuXFxuICAtLXBsYXllci0xLWNvbG9yOiByZWQ7XFxuICAtLXBsYXllci0yLWNvbG9yOiBibHVlO1xcbiAgLS1yb3ctY2VsbC1iYWNrZ3JvdW5kLWNvbG9yOiAjZDFmYWU1O1xcbiAgLS13aW5uaW5nLWNlbGxzLWNvbG9yOiBwdXJwbGU7XFxuICAtLWNvbHVtbi1wYWRkaW5nOiAxcmVtO1xcblxcbiAgLS1uZW9uLXRleHQtc2hhZG93LWhpZ2g6IDAgMCA3cHggI2ZmZiwgMCAwIDEwcHggI2ZmZiwgMCAwIDIxcHggI2ZmZixcXG4gICAgMCAwIDQycHggIzBmYSwgMCAwIDgycHggIzBmYSwgMCAwIDkycHggIzBmYSwgMCAwIDEwMnB4ICMwZmEsIDAgMCAxNTFweCAjMGZhO1xcbiAgLS1uZW9uLXRleHQtc2hhZG93LW1lZGl1bTogMCAwIDMuNHB4ICNmZmYsIDAgMCA1cHggI2ZmZiwgMCAwIDEwLjVweCAjZmZmLFxcbiAgICAwIDAgMjFweCAjMGZhLCAwIDAgNDFweCAjMGZhLCAwIDAgNDZweCAjMGZhLCAwIDAgNTFweCAjMGZhLCAwIDAgNzUuNXB4ICMwZmE7XFxuICAtLW5lb24tdGV4dC1zaGFkb3ctbG93OiAwIDAgMS43cHggI2ZmZiwgMCAwIDIuNXB4ICNmZmYsIDAgMCA1LjI1cHggI2ZmZixcXG4gICAgMCAwIDEwLjVweCAjMGZhLCAwIDAgMjAuNXB4ICMwZmEsIDAgMCAyM3B4ICMwZmEsIDAgMCAyNS41cHggIzBmYSxcXG4gICAgMCAwIDM3Ljc1cHggIzBmYTtcXG4gIC0tbmVvbi10ZXh0LXNoYWRvdy12ZXJ5LWxvdzogMCAwIDAuNXB4ICNmZmYsIDAgMCAwLjZweCAjZmZmLCAwIDAgMS4zcHggI2ZmZixcXG4gICAgMCAwIDIuNXB4ICMwZmEsIDAgMCA1cHggIzBmYSwgMCAwIDZweCAjMGZhLCAwIDAgNi41cHggIzBmYSwgMCAwIDM3Ljc1cHggIzBmYTtcXG4gIC0tcGluay1uZW9uLXRleHQtc2hhZG93LWhpZ2g6IDAgMCA0cHggI2ZmZiwgMCAwIDEwcHggI2ZmZiwgMCAwIDE4cHggI2ZmZixcXG4gICAgMCAwIDM4cHggI2YwOSwgMCAwIDczcHggI2YwOSwgMCAwIDgwcHggI2YwOSwgMCAwIDk0cHggI2YwOSwgMCAwIDE0MHB4ICNmMDk7XFxuICAtLXBpbmstbmVvbi10ZXh0LXNoYWRvdy1sb3c6IDAgMCAxcHggI2ZmZiwgMCAwIDIuNXB4ICNmZmYsIDAgMCA0LjVweCAjZmZmLFxcbiAgICAwIDAgOS41cHggI2YwOSwgMCAwIDE4LjI1cHggI2YwOSwgMCAwIDIwcHggI2YwOSwgMCAwIDIzLjVweCAjZjA5LFxcbiAgICAwIDAgMzVweCAjZjA5O1xcblxcbiAgLS1ibHVlLW5lb24tdGV4dC1zaGFkb3c6IDAgMCA2cHggcmdiYSgyMDIsIDIyOCwgMjI1LCAwLjkyKSxcXG4gICAgMCAwIDMwcHggcmdiYSgyMDIsIDIyOCwgMjI1LCAwLjM0KSwgMCAwIDEycHggcmdiYSgzMCwgMTMyLCAyNDIsIDAuNTIpLFxcbiAgICAwIDAgMjFweCByZ2JhKDMwLCAxMzIsIDI0MiwgMC45MiksIDAgMCAzNHB4IHJnYmEoMzAsIDEzMiwgMjQyLCAwLjc4KSxcXG4gICAgMCAwIDU0cHggcmdiYSgzMCwgMTMyLCAyNDIsIDAuOTIpO1xcblxcbiAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XFxufVxcbi5iYWNrZ3JvdW5kX3ZpZGVvIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yX3doaXRlX2N1c3RvbSk7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tYmx1ZS1uZW9uLXRleHQtc2hhZG93LWxvdyk7XFxufVxcblxcbi5tYWluX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIHBhZGRpbmc6IDJyZW0gNHJlbTsgKi9cXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLyogKioqKioqICovXFxuLyogaGVhZGVyICovXFxuLyogKioqKioqICovXFxuXFxuLmhlYWRlcl9tYWluX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbSA0cmVtO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdmVybGF5LWJsYWNrKTtcXG5cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTsgKi9cXG59XFxuXFxuLmhlYWRlcl9sZWZ0LFxcbi5oZWFkZXJfcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLmhlYWRlcl9taWQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtYXRyaXhcXFwiO1xcbn1cXG4uaGVhZGVyX21pZCAuaGVhZGVyX2dhbWVfbmFtZSB7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcbi5uZXdfZ2FtZV9idXR0b24gLmljb24ge1xcbiAgc2NhbGU6IDEuMjtcXG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcl93aGl0ZV9jdXN0b20pO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcmVtIDByZW0gMXJlbSBibGFjaztcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuYnV0dG9uLm5ld19nYW1lX2J1dHRvbiB7XFxuICB3aWR0aDogMjQwcHg7XFxuICB6LWluZGV4OiA0O1xcbn1cXG5idXR0b24ubmV3X2dhbWVfYnV0dG9uLmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiB2YXIoLS1waW5rLW5lb24tdGV4dC1zaGFkb3ctbG93KTtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLyogKioqKioqICovXFxuLyogKioqKioqICovXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi8qIE1haW4gQ29udGVudCBDb250YWluZXIgKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLmNvbnRlbnRfbWFpbl9jb250YWluZXIge1xcbiAgLyogYm9yZGVyOiA0cHggYnVybHl3b29kIHNvbGlkOyAqL1xcbiAgbWFyZ2luOiAycmVtIDRyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uY29udGVudF9jb250YWluZXIge1xcbiAgLyogYm9yZGVyOiAycHggZ29sZGVucm9kIHNvbGlkOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5wbGF5ZXJfMV9jb250YWluZXIsXFxuLnBsYXllcl8yX2NvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IHZhcigtLWJsdWUtbmVvbi10ZXh0LXNoYWRvdyk7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4ucGxheWVyXzFfbmFtZSxcXG4ucGxheWVyXzJfbmFtZSB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIC8qIGJvcmRlcjogMnB4IHJlZCBzb2xpZDsgKi9cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbn1cXG4ucGxheWVyXzFfbmFtZS5hY3RpdmUsXFxuLnBsYXllcl8yX25hbWUuYWN0aXZlIHtcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1waW5rLW5lb24tdGV4dC1zaGFkb3ctbG93KTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXBpbmstbmVvbi10ZXh0LXNoYWRvdy1sb3cpO1xcbn1cXG5cXG4ucGxheWVyXzFfc3RhdHVzX3JvdW5kLFxcbi5wbGF5ZXJfMl9zdGF0dXNfcm91bmQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAvKiBib3gtc2hhZG93OiBpbnNldCAwcmVtIDByZW0gNTVyZW0gYmxhY2s7ICovXFxufVxcblxcbi8qIGN1dHRpbmcgdGhlIHBpbGxzIC5zdmcgZmlsZSBpbiBoYWxmIGFuZCB1c2UgdGhlbSBvbiBib3RoIHNpZGVkICovXFxuLnBsYXllcl8xX2ltZ19jb250YWluZXIge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvcmVkX3BpbGxfYmx1ZV9waWxsLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xcbn1cXG4ucGxheWVyXzFfaW1nX2NvbnRhaW5lcjpudGgtY2hpbGQoMikge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XFxufVxcbi5wbGF5ZXJfMl9pbWdfY29udGFpbmVyIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9yZWRfcGlsbF9ibHVlX3BpbGwuc3ZnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXG59XFxuLnBsYXllcl8yX2ltZ19jb250YWluZXI6bnRoLWNoaWxkKDIpIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVib2FyZF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAvKiB3aWR0aDogbWlubWF4KDEwMCwgNjB2dyk7ICovXFxufVxcblxcbi8qIGNvbHVtbiBhbmQgcm93IHNldHRpbmdzICovXFxuLyogKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4uY29sdW1uIHtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgLyogYm9yZGVyOiAycHggcmVkIHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247ICovXFxuICBwYWRkaW5nOiAwIGNhbGModmFyKC0tY29sdW1uLXBhZGRpbmcpIC8gMik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNvbHVtbjpob3ZlciB7XFxuICBzY2FsZTogMS4wMTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2MHB4IHZhcigtLWJhY2tncm91bmQtY29sb3ItYXJteS1ncmVlbi1saWdodCk7XFxufVxcblxcbi5yb3cge1xcbiAgYm9yZGVyOiA2cHggYmxhY2sgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAxMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJvdy1jZWxsLWJhY2tncm91bmQtY29sb3IpO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHJlbSAwcmVtIDEuNXJlbSBibGFjaztcXG4gIHBhZGRpbmc6IHZhcigtLWNvbHVtbi1wYWRkaW5nKTtcXG4gIG1hcmdpbjogY2FsYyh2YXIoLS1jb2x1bW4tcGFkZGluZykgLyA1KSAwO1xcblxcbiAgaGVpZ2h0OiAxLjdyZW07XFxuICB3aWR0aDogMS43cmVtO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIHRoaXMgaXMgaW1wb3J0YW50IGZvciB0aGUgZXZlbnQgY2FwdHVyZSBvbiBjbGljayAqL1xcbn1cXG4vKiBoZXJlIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBmb3Igd2lubmluZyBjZWxscyAqL1xcbi5yb3cud2lubmluZ19yb3cge1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDQ7XFxuICBib3gtc2hhZG93OiB2YXIoLS1uZW9uLXRleHQtc2hhZG93LXZlcnktbG93KTtcXG4gIGFuaW1hdGlvbjogZmxpY2tlciAxLjVzIGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuLnJvdzpob3ZlciB7XFxuICBzY2FsZTogMS4xO1xcbn1cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKiogKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKiAqL1xcbi8qIG92ZXJsYXkgYW5kIHBvcC11cHMgKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLm92ZXJsYXlfZm9yX3BvcF91cHMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3ZlcmxheS1ibGFjayk7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB6LWluZGV4OiAzO1xcbn1cXG4ub3ZlcmxheV9mb3JfcG9wX3Vwcy5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5nYW1lb3Zlcl9wb3BfdXAge1xcbiAgLyogbWFyZ2luOiAwIGF1dG87ICovXFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LWZhbWlseTogXFxcIm1hdHJpeFxcXCI7XFxuICBjb2xvcjogdmFyKC0tY29sb3Jfd2hpdGVfY3VzdG9tKTtcXG4gIC8qIGJvcmRlcjogMnB4IHZhcigtLWNvbG9yX3doaXRlX2N1c3RvbSkgc29saWQ7ICovXFxuICBvcGFjaXR5OiAwO1xcbiAgei1pbmRleDogNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tbmVvbi10ZXh0LXNoYWRvdy1tZWRpdW0pO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tbmVvbi10ZXh0LXNoYWRvdy12ZXJ5LWxvdyk7XFxuXFxuICAvKiBib3gtc2hhZG93OiBpbnNldCAxcmVtIDFyZW0gNHJlbSB3aGl0ZTsgKi9cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgcGFkZGluZzogMC43cmVtO1xcbn1cXG4uZ2FtZW92ZXJfcG9wX3VwLmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uZ2FtZW92ZXJfcG9wX3VwIC5zdGF0dXNfd2lubmluZyB7XFxufVxcblxcbi8qICoqKioqKioqKioqKioqKioqKiogKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLyogKioqKioqICovXFxuLyogZm9vdGVyICovXFxuLyogKioqKioqICovXFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItYXJteS1ncmVlbi1kYXJrKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcl93aGl0ZV9jdXN0b20pO1xcbiAgei1pbmRleDogMjtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5mb290ZXIgaW1nIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgc2NhbGU6IDEuMjtcXG59XFxuXFxuZm9vdGVyIGltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi8qICoqKioqKiAqL1xcbi8qICoqKioqKiAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVNYXRlcmlhbHNET00oKSB7XG4gIGNvbnN0IGdhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWJvYXJkX2NvbnRhaW5lclwiKTtcblxuICBmdW5jdGlvbiBwbGF5Um91bmRDbGlja0V2ZW50KGV2ZW50KSB7XG4gICAgbGV0IGNvbHVtbk51bWJlciA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmNvbHVtbl9udW1iZXI7XG4gICAgbGV0IHNlbGVjdGVkQ29sdW1uID0gZ2FtZS5nYW1lYm9hcmQuZ2V0Qm9hcmQoKVtjb2x1bW5OdW1iZXJdO1xuICAgIC8vIGNvbnNvbGUubG9nKGNvbHVtbk51bWJlcik7XG4gICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWRDb2x1bW4pO1xuICAgIGdhbWUucGxheVJvdW5kKHNlbGVjdGVkQ29sdW1uKTtcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZENvbHVtbik7XG4gICAgLy8gY29uc29sZS5sb2coZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBFdmVudExpc3RlbmVyVG9Db2x1bW5zKCkge1xuICAgIGNvbnN0IGNvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbHVtblwiKTtcblxuICAgIGZ1bmN0aW9uIGFkZCgpIHtcbiAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIGNvbHVtbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmRhdGFzZXQuY29sdW1uX251bWJlcik7XG4gICAgICAgICAgcGxheVJvdW5kQ2xpY2tFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgY29sdW1uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuZGF0YXNldC5jb2x1bW5fbnVtYmVyKTtcbiAgICAgICAgICBwbGF5Um91bmRDbGlja0V2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBhZGQsIHJlbW92ZSB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclRvTmV3R2FtZUJ1dHRvbigpIHtcbiAgICBjb25zdCBuZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdfZ2FtZV9idXR0b25cIik7XG4gICAgbmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZ2FtZS5zdGFydE5ld0dhbWUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFuRXhpc3RpbmdHYW1lYm9hcmRFbGVtZW50cygpIHtcbiAgICBjb25zdCBjaGlsZHJlbk9mQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiZGl2LmdhbWVib2FyZF9jb250YWluZXIgPiAqXCJcbiAgICApO1xuICAgIGNoaWxkcmVuT2ZDb250YWluZXIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlHYW1lYm9hcmRET00oKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lLmdhbWVib2FyZC5nZXRCb2FyZCgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBuZXdDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3Q29sdW1uLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW5cIik7XG4gICAgICBuZXdDb2x1bW4uc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5fbnVtYmVyXCIsIGkpO1xuICAgICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NvbHVtbik7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2FtZS5nYW1lYm9hcmQuZ2V0Qm9hcmQoKVtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBuZXdSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdSb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAgICAgbmV3Um93LnNldEF0dHJpYnV0ZShcImRhdGEtcm93X251bWJlclwiLCBqKTtcblxuICAgICAgICAvLyBuZXdSb3cuaW5uZXJIVE1MID0gZ2FtZS5nYW1lYm9hcmQuZ2V0Qm9hcmQoKVtpXVtqXS5zdGF0dXM7XG4gICAgICAgIGlmIChnYW1lLmdhbWVib2FyZC5nZXRCb2FyZCgpW2ldW2pdLnN0YXR1cyA9PSAxKSB7XG4gICAgICAgICAgbmV3Um93LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIFwic3R5bGVcIixcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGxheWVyLTEtY29sb3IpOyBvcGFjaXR5OiAxO1wiXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChnYW1lLmdhbWVib2FyZC5nZXRCb2FyZCgpW2ldW2pdLnN0YXR1cyA9PSAyKSB7XG4gICAgICAgICAgbmV3Um93LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIFwic3R5bGVcIixcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGxheWVyLTItY29sb3IpOyBvcGFjaXR5OiAxO1wiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnYW1lLmdhbWVib2FyZC5nZXRCb2FyZCgpW2ldW2pdLmlzV2lubmluZ0NlbGwgPT0gdHJ1ZSkge1xuICAgICAgICAgIG5ld1Jvdy5jbGFzc0xpc3QuYWRkKFwid2lubmluZ19yb3dcIik7XG4gICAgICAgIH1cbiAgICAgICAgbmV3Q29sdW1uLmFwcGVuZENoaWxkKG5ld1Jvdyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGxheWVyMU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl8xX25hbWVcIik7XG4gICAgY29uc3QgcGxheWVyMk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl8yX25hbWVcIik7XG4gICAgcGxheWVyMU5hbWUuaW5uZXJIVE1MID0gZ2FtZS5nZXRQbGF5ZXJzKClbMF0ubmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgIHBsYXllcjJOYW1lLmlubmVySFRNTCA9IGdhbWUuZ2V0UGxheWVycygpWzFdLm5hbWUudG9VcHBlckNhc2UoKTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIGRpc3BsYXlSb3VuZFN0YXR1c01lc3NhZ2UoYWN0aXZlUGxheWVyLCBzdGF0dXNfbWVzc2FnZSkge1xuICAvLyAgIGNvbnN0IHBsYXllcjFfU3RhdHVzUm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAvLyAgICAgXCIucGxheWVyXzFfc3RhdHVzX3JvdW5kXCJcbiAgLy8gICApO1xuICAvLyAgIGNvbnN0IHBsYXllcjJfU3RhdHVzUm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAvLyAgICAgXCIucGxheWVyXzJfc3RhdHVzX3JvdW5kXCJcbiAgLy8gICApO1xuXG4gIC8vICAgaWYgKGFjdGl2ZVBsYXllciA9PT0gZ2FtZS5nZXRQbGF5ZXJzKClbMF0pIHtcbiAgLy8gICAgIHBsYXllcjFfU3RhdHVzUm91bmQuaW5uZXJIVE1MID0gc3RhdHVzX21lc3NhZ2U7XG4gIC8vICAgICBwbGF5ZXIyX1N0YXR1c1JvdW5kLmlubmVySFRNTCA9IFwiJm5ic3A7XCI7XG4gIC8vICAgfSBlbHNlIGlmIChhY3RpdmVQbGF5ZXIgPT09IGdhbWUuZ2V0UGxheWVycygpWzFdKSB7XG4gIC8vICAgICBwbGF5ZXIxX1N0YXR1c1JvdW5kLmlubmVySFRNTCA9IFwiJm5ic3A7XCI7XG4gIC8vICAgICBwbGF5ZXIyX1N0YXR1c1JvdW5kLmlubmVySFRNTCA9IHN0YXR1c19tZXNzYWdlO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlXaW5uaW5nU3RhdHVzTWVzc2FnZShzdGF0dXNfbWVzc2FnZSkge1xuICAgIGNvbnN0IHN0YXR1c1dpbm5pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXR1c193aW5uaW5nXCIpO1xuICAgIHN0YXR1c1dpbm5pbmcuaW5uZXJIVE1MID0gc3RhdHVzX21lc3NhZ2U7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5QWN0aXZlUGxheWVyRm9jdXMoYWN0aXZlUGxheWVyKSB7XG4gICAgY29uc3QgcGxheWVyMU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl8xX25hbWVcIik7XG4gICAgY29uc3QgcGxheWVyMk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl8yX25hbWVcIik7XG5cbiAgICBpZiAoYWN0aXZlUGxheWVyID09PSBnYW1lLmdldFBsYXllcnMoKVswXSkge1xuICAgICAgcGxheWVyMU5hbWUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIHBsYXllcjJOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIGlmIChhY3RpdmVQbGF5ZXIgPT09IGdhbWUuZ2V0UGxheWVycygpWzFdKSB7XG4gICAgICBwbGF5ZXIxTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgcGxheWVyMk5hbWUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbmRHYW1lRE9NKCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlfZm9yX3BvcF91cHNcIik7XG4gICAgY29uc3QgZ2FtZW92ZXJQb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZW92ZXJfcG9wX3VwXCIpO1xuICAgIGNvbnN0IGJ1dHRvbk5ld0dhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi5uZXdfZ2FtZV9idXR0b25cIik7XG5cbiAgICBmdW5jdGlvbiBhZGQoKSB7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBnYW1lb3ZlclBvcFVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBidXR0b25OZXdHYW1lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIGdhbWVvdmVyUG9wVXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIGJ1dHRvbk5ld0dhbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgYWRkLCByZW1vdmUgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEhlYWRlckNvbmZpZygpIHtcbiAgICBmdW5jdGlvbiBhZGRBdWRpb0NvbmZpZygpIHtcbiAgICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImF1ZGlvXCIpO1xuICAgICAgY29uc3QgYXVkaW9JY29uT24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcImJ1dHRvbi5hdWRpb19idXR0b24gLmljb25fb25cIlxuICAgICAgKTtcbiAgICAgIGNvbnN0IGF1ZGlvSWNvbk9mZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiYnV0dG9uLmF1ZGlvX2J1dHRvbiAuaWNvbl9vZmZcIlxuICAgICAgKTtcbiAgICAgIGF1ZGlvSWNvbk9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGNvbnN0IGF1ZGlvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hdWRpb19idXR0b25cIik7XG5cbiAgICAgIGZ1bmN0aW9uIHRvZ2dsZVBsYXkoKSB7XG4gICAgICAgIGlmIChhdWRpby5wYXVzZWQpIHtcbiAgICAgICAgICBhdWRpb0ljb25Pbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgIGF1ZGlvSWNvbk9mZi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF1ZGlvSWNvbk9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBhdWRpb0ljb25PZmYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICBhdWRpby5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGF1ZGlvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZVBsYXkoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEluZm9CdXR0b25Db25maWcoKSB7XG4gICAgICBjb25zdCBpbmZvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiBpbmZvX2J1dHRvblwiKTtcbiAgICAgIGxldCBpc0luZm9PbiA9IGZhbHNlO1xuXG4gICAgICBmdW5jdGlvbiBpbmZvQnV0dG9uVG9nZ2xlKCkge31cblxuICAgICAgaW5mb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpbmZvQnV0dG9uVG9nZ2xlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRBdWRpb0NvbmZpZygpO1xuICAgIGFkZEluZm9CdXR0b25Db25maWcoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgRXZlbnRMaXN0ZW5lclRvQ29sdW1ucyxcbiAgICBjbGVhbkV4aXN0aW5nR2FtZWJvYXJkRWxlbWVudHMsXG4gICAgZGlzcGxheUdhbWVib2FyZERPTSxcbiAgICAvLyBkaXNwbGF5Um91bmRTdGF0dXNNZXNzYWdlLFxuICAgIGRpc3BsYXlXaW5uaW5nU3RhdHVzTWVzc2FnZSxcbiAgICBkaXNwbGF5QWN0aXZlUGxheWVyRm9jdXMsXG4gICAgYWRkRXZlbnRMaXN0ZW5lclRvTmV3R2FtZUJ1dHRvbixcbiAgICBlbmRHYW1lRE9NLFxuICAgIGFkZEhlYWRlckNvbmZpZyxcbiAgfTtcbn1cbiIsImltcG9ydCB7IENyZWF0ZU1hdGVyaWFsc0RPTSB9IGZyb20gXCIuL2RvbV9tYXRlcmlhbHMuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgY29uc3Qgcm93cyA9IDY7XG4gIGNvbnN0IGNvbHVtbnMgPSA3O1xuICBjb25zdCBib2FyZCA9IFtdO1xuICBjb25zdCBkb21DcmVhdG9yID0gQ3JlYXRlTWF0ZXJpYWxzRE9NKCk7XG5cbiAgZnVuY3Rpb24gZ2V0Qm9hcmQoKSB7XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9XG4gIGZ1bmN0aW9uIGdldERvbUNyZWF0b3IoKSB7XG4gICAgcmV0dXJuIGRvbUNyZWF0b3I7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmRHcmlkcygpIHtcbiAgICBib2FyZC5sZW5ndGggPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5zOyBpKyspIHtcbiAgICAgIGJvYXJkW2ldID0gW107XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93czsgaisrKSB7XG4gICAgICAgIGJvYXJkW2ldLnB1c2goQ2VsbCgwKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQ2VsbChzdGF0dXMpIHtcbiAgICBjb25zdCBpc1dpbm5pbmdDZWxsID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBhZGRUb2tlbihwbGF5ZXIpIHtcbiAgICAgIHN0YXR1cyA9IHBsYXllcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzKCkge1xuICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdGF0dXMsIGlzV2lubmluZ0NlbGwsIGFkZFRva2VuLCBnZXRTdGF0dXMgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdoaWNoQ2VsbElzQXZhaWxhYmxlKGNvbHVtbikge1xuICAgIC8vcmV0dXJucyB3aGljaCBjZWxsIG9uIHRoZSBzZWxlY3RlZCBjb2x1bW4gaXMgYXZhaWxhYmxlXG5cbiAgICBpZiAoY29sdW1uWzBdLnN0YXR1cyAhPT0gMCkge1xuICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGNvbHVtbiBpcyBmdWxsXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSByb3dzIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmIChjb2x1bW5baV0uc3RhdHVzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBjb2x1bW5baV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcFRva2VuKGNvbHVtbiwgcGxheWVyVG9rZW4pIHtcbiAgICAvL1RPIERPOiBlZGl0IHdpdGggY29sdW1uIHBhcmFtZXRlclxuICAgIGxldCBteUNvbHVtbiA9IGNvbHVtbjtcbiAgICAvL1RPIERPOiByZW1vdmUgdGhpcyBsaW5lIGJlbG93IGxhdGVyXG4gICAgLy8gbXlDb2x1bW4gPSBib2FyZFswXTtcblxuICAgIGxldCBzZWxlY3RlZENlbGwgPSB3aGljaENlbGxJc0F2YWlsYWJsZShteUNvbHVtbik7XG5cbiAgICBpZiAoc2VsZWN0ZWRDZWxsID09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRPIERPOiBlZGl0IGFzIHBsYXllci5zdGF0dXNcbiAgICBzZWxlY3RlZENlbGwuc3RhdHVzID0gcGxheWVyVG9rZW47XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5R2FtZWJvYXJkKCkge1xuICAgIGRvbUNyZWF0b3IuY2xlYW5FeGlzdGluZ0dhbWVib2FyZEVsZW1lbnRzKCk7XG4gICAgZG9tQ3JlYXRvci5kaXNwbGF5R2FtZWJvYXJkRE9NKCk7XG4gICAgZG9tQ3JlYXRvci5FdmVudExpc3RlbmVyVG9Db2x1bW5zKCkuYWRkKCk7XG4gICAgZG9tQ3JlYXRvci5hZGRFdmVudExpc3RlbmVyVG9OZXdHYW1lQnV0dG9uKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0dhbWVPdmVyKHBsYXllcikge1xuICAgIC8vVE8gRE86IENoZWNrIHdoeSB0aGUgbGFzdCBudW1iZXIgb25seSBzaG93cyB1cCBhZnRlciB0aGUgYWxlcnQhIVxuXG4gICAgLy8gaWYgKGdldEJvYXJkKClbMF1bMF0uc3RhdHVzICE9IDApIHtcbiAgICAvLyAgIHJldHVybiB0cnVlO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICByZXR1cm4gZmFsc2U7XG4gICAgLy8gfVxuXG4gICAgLy9DaGVjayBkcmF3XG4gICAgZnVuY3Rpb24gaXNEcmF3KCkge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgY29sdW1uczsgY29sKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2NvbF1bMF0uc3RhdHVzID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGlzRHJhdygpKSB7XG4gICAgICByZXR1cm4gXCJkcmF3XCI7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgY29sdW1uc1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGNvbHVtbnM7IGNvbCsrKSB7XG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByb3dzIC0gMzsgcm93KyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGdldEJvYXJkKClbY29sXVtyb3ddLnN0YXR1cyA9PSBwbGF5ZXIudG9rZW4gJiZcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbF1bcm93ICsgMV0uc3RhdHVzID09IHBsYXllci50b2tlbiAmJlxuICAgICAgICAgIGdldEJvYXJkKClbY29sXVtyb3cgKyAyXS5zdGF0dXMgPT0gcGxheWVyLnRva2VuICYmXG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2xdW3JvdyArIDNdLnN0YXR1cyA9PSBwbGF5ZXIudG9rZW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2xdW3Jvd10uaXNXaW5uaW5nQ2VsbCA9IHRydWU7XG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2xdW3JvdyArIDFdLmlzV2lubmluZ0NlbGwgPSB0cnVlO1xuICAgICAgICAgIGdldEJvYXJkKClbY29sXVtyb3cgKyAyXS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbF1bcm93ICsgM10uaXNXaW5uaW5nQ2VsbCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayByb3dzXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGNvbHVtbnMgLSAzOyBjb2wrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2xdW3Jvd10uc3RhdHVzID09IHBsYXllci50b2tlbiAmJlxuICAgICAgICAgIGdldEJvYXJkKClbY29sICsgMV1bcm93XS5zdGF0dXMgPT0gcGxheWVyLnRva2VuICYmXG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgKyAyXVtyb3ddLnN0YXR1cyA9PSBwbGF5ZXIudG9rZW4gJiZcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCArIDNdW3Jvd10uc3RhdHVzID09IHBsYXllci50b2tlblxuICAgICAgICApIHtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbF1bcm93XS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCArIDFdW3Jvd10uaXNXaW5uaW5nQ2VsbCA9IHRydWU7XG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgKyAyXVtyb3ddLmlzV2lubmluZ0NlbGwgPSB0cnVlO1xuICAgICAgICAgIGdldEJvYXJkKClbY29sICsgM11bcm93XS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGRpYWdvbmFsICh0b3AgbGVmdCB0byBib3R0b20gcmlnaHQpXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcm93cyAtIDM7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBjb2x1bW5zIC0gMzsgY29sKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGdldEJvYXJkKClbY29sXVtyb3ddLnN0YXR1cyA9PSBwbGF5ZXIudG9rZW4gJiZcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCArIDFdW3JvdyArIDFdLnN0YXR1cyA9PSBwbGF5ZXIudG9rZW4gJiZcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCArIDJdW3JvdyArIDJdLnN0YXR1cyA9PSBwbGF5ZXIudG9rZW4gJiZcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCArIDNdW3JvdyArIDNdLnN0YXR1cyA9PSBwbGF5ZXIudG9rZW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2xdW3Jvd10uaXNXaW5uaW5nQ2VsbCA9IHRydWU7XG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgKyAxXVtyb3cgKyAxXS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCArIDJdW3JvdyArIDJdLmlzV2lubmluZ0NlbGwgPSB0cnVlO1xuICAgICAgICAgIGdldEJvYXJkKClbY29sICsgM11bcm93ICsgM10uaXNXaW5uaW5nQ2VsbCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayBkaWFnb25hbCAodG9wIHJpZ2h0IHRvIGJvdHRvbSBsZWZ0KVxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHJvd3MgLSAzOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMzsgY29sIDwgY29sdW1uczsgY29sKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGdldEJvYXJkKClbY29sXVtyb3ddLnN0YXR1cyA9PSBwbGF5ZXIudG9rZW4gJiZcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCAtIDFdW3JvdyArIDFdLnN0YXR1cyA9PSBwbGF5ZXIudG9rZW4gJiZcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCAtIDJdW3JvdyArIDJdLnN0YXR1cyA9PSBwbGF5ZXIudG9rZW4gJiZcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCAtIDNdW3JvdyArIDNdLnN0YXR1cyA9PSBwbGF5ZXIudG9rZW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2xdW3Jvd10uaXNXaW5uaW5nQ2VsbCA9IHRydWU7XG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgLSAxXVtyb3cgKyAxXS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCAtIDJdW3JvdyArIDJdLmlzV2lubmluZ0NlbGwgPSB0cnVlO1xuICAgICAgICAgIGdldEJvYXJkKClbY29sIC0gM11bcm93ICsgM10uaXNXaW5uaW5nQ2VsbCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7IC8vIG5vIHdpbiBmb3VuZFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAvLyBib2FyZCxcbiAgICBnZXREb21DcmVhdG9yLFxuICAgIGdldEJvYXJkLFxuICAgIGNyZWF0ZUdhbWVib2FyZEdyaWRzLFxuICAgIGRpc3BsYXlHYW1lYm9hcmQsXG4gICAgZHJvcFRva2VuLFxuICAgIHdoaWNoQ2VsbElzQXZhaWxhYmxlLFxuICAgIGNoZWNrR2FtZU92ZXIsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmQuanNcIjtcbmltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gR2FtZUNvbnRyb2xsZXIoKSB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpOyAvLyBkb24ndCBjaGFuZ2UgdGhlIG5hbWVcbiAgZ2FtZWJvYXJkLmdldERvbUNyZWF0b3IoKS5hZGRIZWFkZXJDb25maWcoKTtcblxuICBjb25zdCBwbGF5ZXJPbmVOYW1lID0gXCJQbGF5ZXIgUmVkXCI7XG4gIGNvbnN0IHBsYXllclR3b05hbWUgPSBcIlBsYXllciBCbHVlXCI7XG5cbiAgY29uc3QgcGxheWVycyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBwbGF5ZXJPbmVOYW1lLFxuICAgICAgdG9rZW46IFwiMVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogcGxheWVyVHdvTmFtZSxcbiAgICAgIHRva2VuOiBcIjJcIixcbiAgICB9LFxuICBdO1xuICBmdW5jdGlvbiBnZXRQbGF5ZXJzKCkge1xuICAgIHJldHVybiBwbGF5ZXJzO1xuICB9XG5cbiAgbGV0IGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF07XG5cbiAgZnVuY3Rpb24gZ2V0QWN0aXZlUGxheWVyKCkge1xuICAgIHJldHVybiBhY3RpdmVQbGF5ZXI7XG4gIH1cblxuICBmdW5jdGlvbiBzd2l0Y2hQbGF5ZXJUdXJuKCkge1xuICAgIGFjdGl2ZVBsYXllciA9IGFjdGl2ZVBsYXllciA9PT0gcGxheWVyc1swXSA/IHBsYXllcnNbMV0gOiBwbGF5ZXJzWzBdO1xuICAgIGNvbnN0IHBsYXlSb3VuZExvZ01lc3NhZ2UgPSBgJHtcbiAgICAgIGdldEFjdGl2ZVBsYXllcigpLm5hbWVcbiAgICB9IGlzIHBsYXlpbmcgaGlzIHR1cm4uLi5gO1xuICAgIGdhbWVib2FyZC5nZXREb21DcmVhdG9yKCkuZGlzcGxheUFjdGl2ZVBsYXllckZvY3VzKGFjdGl2ZVBsYXllcik7XG4gICAgLy8gZ2FtZWJvYXJkXG4gICAgLy8gICAuZ2V0RG9tQ3JlYXRvcigpXG4gICAgLy8gICAuZGlzcGxheVJvdW5kU3RhdHVzTWVzc2FnZShhY3RpdmVQbGF5ZXIsIHBsYXlSb3VuZExvZ01lc3NhZ2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnROZXdHYW1lKCkge1xuICAgIGNvbnN0IGRlZmF1bHRXaW5uaW5nTWVzc2FnZSA9IFwiV2lubmluZyBzdGF0dXNcIjtcbiAgICBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzFdO1xuICAgIHN3aXRjaFBsYXllclR1cm4oKTtcbiAgICBnYW1lYm9hcmQuY3JlYXRlR2FtZWJvYXJkR3JpZHMoKTtcbiAgICBnYW1lYm9hcmQuZGlzcGxheUdhbWVib2FyZCgpO1xuICAgIGdhbWVib2FyZFxuICAgICAgLmdldERvbUNyZWF0b3IoKVxuICAgICAgLmRpc3BsYXlXaW5uaW5nU3RhdHVzTWVzc2FnZShkZWZhdWx0V2lubmluZ01lc3NhZ2UpO1xuICAgIGdhbWVib2FyZC5nZXREb21DcmVhdG9yKCkuZW5kR2FtZURPTSgpLnJlbW92ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5kVGhlR2FtZSh3aW5uaW5nU3RhdHVzKSB7XG4gICAgY29uc3QgZHJhd01lc3NhZ2UgPSBcIkl0IGhhcyBiZWVuIGEgRFJBV1wiO1xuICAgIGNvbnN0IHdpbm5pbmdNZXNzYWdlID0gYCR7YWN0aXZlUGxheWVyLm5hbWV9IGhhcyBXT05gO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZ2FtZSBoYXMgZW5kZWRcIik7XG5cbiAgICBnYW1lYm9hcmQuZ2V0RG9tQ3JlYXRvcigpLkV2ZW50TGlzdGVuZXJUb0NvbHVtbnMoKS5yZW1vdmUoKTtcbiAgICBpZiAod2lubmluZ1N0YXR1cyA9PT0gXCJkcmF3XCIpIHtcbiAgICAgIGdhbWVib2FyZC5nZXREb21DcmVhdG9yKCkuZGlzcGxheVdpbm5pbmdTdGF0dXNNZXNzYWdlKGRyYXdNZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKHdpbm5pbmdTdGF0dXMgPT09IHRydWUpIHtcbiAgICAgIGdhbWVib2FyZC5nZXREb21DcmVhdG9yKCkuZGlzcGxheVdpbm5pbmdTdGF0dXNNZXNzYWdlKHdpbm5pbmdNZXNzYWdlKTtcbiAgICB9XG4gICAgZ2FtZWJvYXJkLmdldERvbUNyZWF0b3IoKS5lbmRHYW1lRE9NKCkuYWRkKCk7XG4gICAgZ2FtZWJvYXJkLmRpc3BsYXlHYW1lYm9hcmQoKTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIGRpc3BsYXlOZXdSb3VuZCgpIHtcbiAgLy8gICBnYW1lYm9hcmQuZGlzcGxheUdhbWVib2FyZCgpO1xuICAvLyAgIGNvbnNvbGUubG9nKGBpdCBpcyAke2dldEFjdGl2ZVBsYXllcigpLm5hbWV9wrRzIHR1cm5gKTtcbiAgLy8gfVxuXG4gIGZ1bmN0aW9uIHBsYXlSb3VuZChjb2x1bW4pIHtcbiAgICAvLyByZXR1cm5zIGZhbHNlIGlmIGdhbWUgY29udGludWVzLCBkcmF3PyB3aGVuIGFsbCBjZWxscyBhcmUgZnVsbD9cblxuICAgIGlmIChnYW1lYm9hcmQud2hpY2hDZWxsSXNBdmFpbGFibGUoY29sdW1uKSAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGdhbWVib2FyZC5kcm9wVG9rZW4oY29sdW1uLCBnZXRBY3RpdmVQbGF5ZXIoKS50b2tlbik7XG4gICAgICBnYW1lYm9hcmQuZGlzcGxheUdhbWVib2FyZCgpO1xuICAgICAgY29uc3Qgd2lubmluZ1N0YXR1cyA9IGdhbWVib2FyZC5jaGVja0dhbWVPdmVyKGFjdGl2ZVBsYXllcik7XG5cbiAgICAgIGlmICh3aW5uaW5nU3RhdHVzICE9PSBmYWxzZSkge1xuICAgICAgICBlbmRUaGVHYW1lKHdpbm5pbmdTdGF0dXMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzd2l0Y2hQbGF5ZXJUdXJuKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnYW1lYm9hcmQsXG4gICAgZ2V0UGxheWVycyxcbiAgICBzd2l0Y2hQbGF5ZXJUdXJuLFxuICAgIC8vIGRpc3BsYXlOZXdSb3VuZCxcbiAgICBnZXRBY3RpdmVQbGF5ZXIsXG4gICAgcGxheVJvdW5kLFxuICAgIHN0YXJ0TmV3R2FtZSxcbiAgfTtcbn1cbiIsImltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5jc3NcIjtcbmltcG9ydCBnaXRMb2dvIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2dpdGh1Yi02NC5wbmdcIjtcbi8vIGltcG9ydCB7IENyZWF0ZU1hdGVyaWFsc0RPTSB9IGZyb20gXCIuL2RvbV9tYXRlcmlhbHMuanNcIjtcbi8vIGltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZC5qc1wiO1xuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9nYW1lY29udHJvbGxlci5qc1wiO1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IEdhbWVDb250cm9sbGVyKCk7IC8vIGRvbid0IGNoYW5nZSB0aGUgbmFtZVxuZ2FtZS5zdGFydE5ld0dhbWUoKTtcblxuY29uc29sZS5sb2coZ2FtZS5nYW1lYm9hcmQuZ2V0Qm9hcmQoKSk7XG5jb25zb2xlLmxvZyhnYW1lLmdhbWVib2FyZC5nZXRCb2FyZCgpWzBdKTtcbmNvbnNvbGUubG9nKGdhbWUuZ2FtZWJvYXJkLmdldEJvYXJkKClbMF1bMF0pO1xuXG4vLyBnYW1lLnBsYXlSb3VuZChnYW1lLmdhbWVib2FyZC5nZXRCb2FyZCgpWzBdKTtcbi8vIGdhbWUuc3RhcnROZXdHYW1lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=