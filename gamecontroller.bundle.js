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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"matrix\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  --main-content-margin: 1rem;\n  --border-radius: 23px;\n  --background-color-pop-up: brown;\n  --color_white_custom: #e8e6e3;\n  --background-color-army-green-light: #b5b9a4;\n  --background-color-army-green-medium: #a3a78d;\n  --background-color-army-green-dark: #42453a;\n  --overlay-black: rgba(0, 0, 0, 0.8);\n\n  --player-1-color: #dd4124;\n  --player-2-color: #0066b2;\n  --row-cell-background-color: #d1fae5;\n  --winning-cells-color: purple;\n  --column-padding: 1rem;\n  --default-transition-duration: 1s;\n\n  --neon-text-shadow-high: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,\n    0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;\n  --neon-text-shadow-medium: 0 0 3.4px #fff, 0 0 5px #fff, 0 0 10.5px #fff,\n    0 0 21px #0fa, 0 0 41px #0fa, 0 0 46px #0fa, 0 0 51px #0fa, 0 0 75.5px #0fa;\n  --neon-text-shadow-low: 0 0 1.7px #fff, 0 0 2.5px #fff, 0 0 5.25px #fff,\n    0 0 10.5px #0fa, 0 0 20.5px #0fa, 0 0 23px #0fa, 0 0 25.5px #0fa,\n    0 0 37.75px #0fa;\n  --neon-text-shadow-very-low: 0 0 0.5px #fff, 0 0 0.6px #fff, 0 0 1.3px #fff,\n    0 0 2.5px #0fa, 0 0 5px #0fa, 0 0 6px #0fa, 0 0 6.5px #0fa, 0 0 37.75px #0fa;\n  --pink-neon-text-shadow-high: 0 0 4px #fff, 0 0 10px #fff, 0 0 18px #fff,\n    0 0 38px #f09, 0 0 73px #f09, 0 0 80px #f09, 0 0 94px #f09, 0 0 140px #f09;\n  --pink-neon-text-shadow-low: 0 0 1px #fff, 0 0 2.5px #fff, 0 0 4.5px #fff,\n    0 0 9.5px #f09, 0 0 18.25px #f09, 0 0 20px #f09, 0 0 23.5px #f09,\n    0 0 35px #f09;\n\n  --blue-neon-text-shadow: 0 0 6px rgba(202, 228, 225, 0.92),\n    0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(30, 132, 242, 0.52),\n    0 0 21px rgba(30, 132, 242, 0.92), 0 0 34px rgba(30, 132, 242, 0.78),\n    0 0 54px rgba(30, 132, 242, 0.92);\n\n  font-family: fantasy;\n}\n.background_video {\n  width: 100vw;\n  height: 100vh;\n  object-fit: cover;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n}\n\nbody {\n  background-color: black;\n  color: var(--color_white_custom);\n  margin: 0;\n  text-shadow: var(--blue-neon-text-shadow-low);\n  min-height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.main_container {\n  flex: 1;\n\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  /* padding: 2rem 4rem; */\n  gap: 1rem;\n}\n\n/* ****** */\n/* header */\n/* ****** */\n\n.header_main_container {\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  justify-content: space-between;\n  padding: 0.5rem 4rem;\n  padding-top: 1rem;\n  background-color: var(--overlay-black);\n\n  /* background-color: orange; */\n}\n\n.header_left,\n.header_right {\n  display: flex;\n  gap: 2rem;\n}\n\n.header_mid {\n  align-self: center;\n  text-shadow: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"matrix\";\n}\n.header_mid .header_game_name {\n  font-size: 3.5rem;\n  font-weight: 900;\n  margin-bottom: 0;\n}\n\n.icon {\n  height: 2rem;\n}\n.new_game_button .icon {\n  scale: 1.2;\n  margin-left: 0.3rem;\n}\n\nbutton {\n  width: 120px;\n  height: 50px;\n  background-color: var(--color_white_custom);\n  border-radius: var(--border-radius);\n  box-shadow: inset 0rem 0rem 1rem black;\n\n  border: none;\n  align-self: center;\n  text-align: center;\n  font-size: 1.4rem;\n  cursor: pointer;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nbutton.new_game_button {\n  width: 240px;\n  z-index: 4;\n}\nbutton.new_game_button.active {\n  box-shadow: var(--pink-neon-text-shadow-low);\n}\nbutton:hover {\n  box-shadow: var(--blue-neon-text-shadow);\n}\n/* ****** */\n/* ****** */\n\n/* ********************** */\n/* Main Content Container */\n/* ********************** */\n\n/* .content_main_container {\n  margin: 2rem 4rem;\n  margin-bottom: 0;\n  flex: 1;\n} */\n\n.content_container {\n  margin: 2rem 4rem;\n  margin-bottom: 0;\n  flex: 1;\n\n  display: flex;\n  flex-direction: row;\n}\n\n.player_1_container,\n.player_2_container {\n  flex: 1;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-shadow: var(--blue-neon-text-shadow);\n  font-weight: 900;\n}\n\n.player_1_name,\n.player_2_name {\n  padding: 1rem;\n  padding-top: 1.5rem;\n  font-size: 2.2rem;\n  /* border: 2px red solid; */\n  border-radius: var(--border-radius);\n  transition-duration: 1s;\n}\n.player_1_name.active,\n.player_2_name.active {\n  text-shadow: var(--pink-neon-text-shadow-low);\n  box-shadow: var(--pink-neon-text-shadow-low);\n}\n\n.player_1_status_round,\n.player_2_status_round {\n  font-size: 1.5rem;\n  margin-top: 4rem;\n  border-radius: var(--border-radius);\n  /* box-shadow: inset 0rem 0rem 55rem black; */\n}\n\n/* cutting the pills .svg file in half and use them on both sided */\n.player_1_img_container {\n  width: 350px;\n  height: 100%;\n  float: left;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-position: right center;\n}\n.player_1_img_container:nth-child(2) {\n  background-position: left center;\n}\n.player_2_img_container {\n  width: 350px;\n  height: 100%;\n  float: right;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-position: left center;\n}\n.player_2_img_container:nth-child(2) {\n  background-position: right center;\n}\n\n.gameboard_container {\n  align-self: center;\n  display: flex;\n  flex-direction: row;\n  /* width: minmax(100, 60vw); */\n}\n\n/* column and row settings */\n/* *********************** */\n\n.column {\n  border-radius: var(--border-radius);\n  /* border: 2px red solid;\n  background-color: brown; */\n  padding: 0 calc(var(--column-padding) / 2);\n\n  align-self: flex-start;\n\n  display: flex;\n  flex-direction: column;\n}\n.column:hover {\n  scale: 1.01;\n  box-shadow: inset 0 0 60px var(--background-color-army-green-light);\n}\n\n.row {\n  border: 6px black solid;\n  border-radius: 12rem;\n  background-color: var(--row-cell-background-color);\n  opacity: 0.9;\n  box-shadow: inset 0rem 0rem 1.5rem black;\n  padding: var(--column-padding);\n  margin: calc(var(--column-padding) / 5) 0;\n\n  height: 1.6rem;\n  width: 1.6rem;\n  pointer-events: none; /* this is important for the event capture on click */\n}\n/* here you can add animation for winning cells */\n.row.winning_row {\n  opacity: 1;\n  z-index: 4;\n  box-shadow: var(--neon-text-shadow-very-low);\n  animation: flicker 1.5s infinite alternate;\n}\n.row:hover {\n  scale: 1.1;\n}\n/* *********************** */\n\n/* ********************** */\n/* ********************** */\n\n/* ******************* */\n/* overlay and pop-ups */\n/* ******************* */\n\n.overlay_for_pop_ups {\n  transition-duration: var(--default-transition-duration);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--overlay-black);\n  opacity: 0;\n  pointer-events: none;\n  z-index: 3;\n}\n.overlay_for_pop_ups.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.gameover_pop_up {\n  /* margin: 0 auto; */\n  font-size: 4rem;\n  font-family: \"matrix\";\n  color: var(--color_white_custom);\n  /* border: 2px var(--color_white_custom) solid; */\n  opacity: 0;\n  z-index: 4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-shadow: var(--neon-text-shadow-medium);\n  box-shadow: var(--neon-text-shadow-very-low);\n\n  /* box-shadow: inset 1rem 1rem 4rem white; */\n  border-radius: var(--border-radius);\n  padding: 0.7rem;\n}\n.gameover_pop_up.active {\n  opacity: 1;\n}\n.gameover_pop_up .status_winning {\n}\n\n/* ******************* */\n/* ******************* */\n\n/* ****** */\n/* footer */\n/* ****** */\n\nfooter {\n  /* position: fixed;\n  left: 0;\n  bottom: 0; */\n  width: 100%;\n  background-color: red;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: var(--background-color-army-green-dark);\n  color: var(--color_white_custom);\n  z-index: 2;\n  text-shadow: none;\n  margin: 0;\n}\n\nfooter img {\n  height: 2rem;\n  scale: 1.2;\n}\n\nfooter img:hover {\n  transform: scale(1.1);\n}\n/* ****** */\n/* ****** */\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"matrix\";\n  src: url(\"../assets/fonts/matrix.ttf\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  --main-content-margin: 1rem;\n  --border-radius: 23px;\n  --background-color-pop-up: brown;\n  --color_white_custom: #e8e6e3;\n  --background-color-army-green-light: #b5b9a4;\n  --background-color-army-green-medium: #a3a78d;\n  --background-color-army-green-dark: #42453a;\n  --overlay-black: rgba(0, 0, 0, 0.8);\n\n  --player-1-color: #dd4124;\n  --player-2-color: #0066b2;\n  --row-cell-background-color: #d1fae5;\n  --winning-cells-color: purple;\n  --column-padding: 1rem;\n  --default-transition-duration: 1s;\n\n  --neon-text-shadow-high: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,\n    0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;\n  --neon-text-shadow-medium: 0 0 3.4px #fff, 0 0 5px #fff, 0 0 10.5px #fff,\n    0 0 21px #0fa, 0 0 41px #0fa, 0 0 46px #0fa, 0 0 51px #0fa, 0 0 75.5px #0fa;\n  --neon-text-shadow-low: 0 0 1.7px #fff, 0 0 2.5px #fff, 0 0 5.25px #fff,\n    0 0 10.5px #0fa, 0 0 20.5px #0fa, 0 0 23px #0fa, 0 0 25.5px #0fa,\n    0 0 37.75px #0fa;\n  --neon-text-shadow-very-low: 0 0 0.5px #fff, 0 0 0.6px #fff, 0 0 1.3px #fff,\n    0 0 2.5px #0fa, 0 0 5px #0fa, 0 0 6px #0fa, 0 0 6.5px #0fa, 0 0 37.75px #0fa;\n  --pink-neon-text-shadow-high: 0 0 4px #fff, 0 0 10px #fff, 0 0 18px #fff,\n    0 0 38px #f09, 0 0 73px #f09, 0 0 80px #f09, 0 0 94px #f09, 0 0 140px #f09;\n  --pink-neon-text-shadow-low: 0 0 1px #fff, 0 0 2.5px #fff, 0 0 4.5px #fff,\n    0 0 9.5px #f09, 0 0 18.25px #f09, 0 0 20px #f09, 0 0 23.5px #f09,\n    0 0 35px #f09;\n\n  --blue-neon-text-shadow: 0 0 6px rgba(202, 228, 225, 0.92),\n    0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(30, 132, 242, 0.52),\n    0 0 21px rgba(30, 132, 242, 0.92), 0 0 34px rgba(30, 132, 242, 0.78),\n    0 0 54px rgba(30, 132, 242, 0.92);\n\n  font-family: fantasy;\n}\n.background_video {\n  width: 100vw;\n  height: 100vh;\n  object-fit: cover;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n}\n\nbody {\n  background-color: black;\n  color: var(--color_white_custom);\n  margin: 0;\n  text-shadow: var(--blue-neon-text-shadow-low);\n  min-height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.main_container {\n  flex: 1;\n\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  /* padding: 2rem 4rem; */\n  gap: 1rem;\n}\n\n/* ****** */\n/* header */\n/* ****** */\n\n.header_main_container {\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  justify-content: space-between;\n  padding: 0.5rem 4rem;\n  padding-top: 1rem;\n  background-color: var(--overlay-black);\n\n  /* background-color: orange; */\n}\n\n.header_left,\n.header_right {\n  display: flex;\n  gap: 2rem;\n}\n\n.header_mid {\n  align-self: center;\n  text-shadow: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"matrix\";\n}\n.header_mid .header_game_name {\n  font-size: 3.5rem;\n  font-weight: 900;\n  margin-bottom: 0;\n}\n\n.icon {\n  height: 2rem;\n}\n.new_game_button .icon {\n  scale: 1.2;\n  margin-left: 0.3rem;\n}\n\nbutton {\n  width: 120px;\n  height: 50px;\n  background-color: var(--color_white_custom);\n  border-radius: var(--border-radius);\n  box-shadow: inset 0rem 0rem 1rem black;\n\n  border: none;\n  align-self: center;\n  text-align: center;\n  font-size: 1.4rem;\n  cursor: pointer;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nbutton.new_game_button {\n  width: 240px;\n  z-index: 4;\n}\nbutton.new_game_button.active {\n  box-shadow: var(--pink-neon-text-shadow-low);\n}\nbutton:hover {\n  box-shadow: var(--blue-neon-text-shadow);\n}\n/* ****** */\n/* ****** */\n\n/* ********************** */\n/* Main Content Container */\n/* ********************** */\n\n/* .content_main_container {\n  margin: 2rem 4rem;\n  margin-bottom: 0;\n  flex: 1;\n} */\n\n.content_container {\n  margin: 2rem 4rem;\n  margin-bottom: 0;\n  flex: 1;\n\n  display: flex;\n  flex-direction: row;\n}\n\n.player_1_container,\n.player_2_container {\n  flex: 1;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-shadow: var(--blue-neon-text-shadow);\n  font-weight: 900;\n}\n\n.player_1_name,\n.player_2_name {\n  padding: 1rem;\n  padding-top: 1.5rem;\n  font-size: 2.2rem;\n  /* border: 2px red solid; */\n  border-radius: var(--border-radius);\n  transition-duration: 1s;\n}\n.player_1_name.active,\n.player_2_name.active {\n  text-shadow: var(--pink-neon-text-shadow-low);\n  box-shadow: var(--pink-neon-text-shadow-low);\n}\n\n.player_1_status_round,\n.player_2_status_round {\n  font-size: 1.5rem;\n  margin-top: 4rem;\n  border-radius: var(--border-radius);\n  /* box-shadow: inset 0rem 0rem 55rem black; */\n}\n\n/* cutting the pills .svg file in half and use them on both sided */\n.player_1_img_container {\n  width: 350px;\n  height: 100%;\n  float: left;\n  background-image: url(../assets/images/red_pill_blue_pill.svg);\n  background-repeat: no-repeat;\n  background-position: right center;\n}\n.player_1_img_container:nth-child(2) {\n  background-position: left center;\n}\n.player_2_img_container {\n  width: 350px;\n  height: 100%;\n  float: right;\n  background-image: url(../assets/images/red_pill_blue_pill.svg);\n  background-repeat: no-repeat;\n  background-position: left center;\n}\n.player_2_img_container:nth-child(2) {\n  background-position: right center;\n}\n\n.gameboard_container {\n  align-self: center;\n  display: flex;\n  flex-direction: row;\n  /* width: minmax(100, 60vw); */\n}\n\n/* column and row settings */\n/* *********************** */\n\n.column {\n  border-radius: var(--border-radius);\n  /* border: 2px red solid;\n  background-color: brown; */\n  padding: 0 calc(var(--column-padding) / 2);\n\n  align-self: flex-start;\n\n  display: flex;\n  flex-direction: column;\n}\n.column:hover {\n  scale: 1.01;\n  box-shadow: inset 0 0 60px var(--background-color-army-green-light);\n}\n\n.row {\n  border: 6px black solid;\n  border-radius: 12rem;\n  background-color: var(--row-cell-background-color);\n  opacity: 0.9;\n  box-shadow: inset 0rem 0rem 1.5rem black;\n  padding: var(--column-padding);\n  margin: calc(var(--column-padding) / 5) 0;\n\n  height: 1.6rem;\n  width: 1.6rem;\n  pointer-events: none; /* this is important for the event capture on click */\n}\n/* here you can add animation for winning cells */\n.row.winning_row {\n  opacity: 1;\n  z-index: 4;\n  box-shadow: var(--neon-text-shadow-very-low);\n  animation: flicker 1.5s infinite alternate;\n}\n.row:hover {\n  scale: 1.1;\n}\n/* *********************** */\n\n/* ********************** */\n/* ********************** */\n\n/* ******************* */\n/* overlay and pop-ups */\n/* ******************* */\n\n.overlay_for_pop_ups {\n  transition-duration: var(--default-transition-duration);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--overlay-black);\n  opacity: 0;\n  pointer-events: none;\n  z-index: 3;\n}\n.overlay_for_pop_ups.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.gameover_pop_up {\n  /* margin: 0 auto; */\n  font-size: 4rem;\n  font-family: \"matrix\";\n  color: var(--color_white_custom);\n  /* border: 2px var(--color_white_custom) solid; */\n  opacity: 0;\n  z-index: 4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-shadow: var(--neon-text-shadow-medium);\n  box-shadow: var(--neon-text-shadow-very-low);\n\n  /* box-shadow: inset 1rem 1rem 4rem white; */\n  border-radius: var(--border-radius);\n  padding: 0.7rem;\n}\n.gameover_pop_up.active {\n  opacity: 1;\n}\n.gameover_pop_up .status_winning {\n}\n\n/* ******************* */\n/* ******************* */\n\n/* ****** */\n/* footer */\n/* ****** */\n\nfooter {\n  /* position: fixed;\n  left: 0;\n  bottom: 0; */\n  width: 100%;\n  background-color: red;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: var(--background-color-army-green-dark);\n  color: var(--color_white_custom);\n  z-index: 2;\n  text-shadow: none;\n  margin: 0;\n}\n\nfooter img {\n  height: 2rem;\n  scale: 1.2;\n}\n\nfooter img:hover {\n  transform: scale(1.1);\n}\n/* ****** */\n/* ****** */\n"],"sourceRoot":""}]);
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
            "z-index: 10; transition-duration: var(--default-transition-duration); scale: 1.3;";
          imagePlayerBlue.style =
            "z-index: 10; transition-duration: var(--default-transition-duration); scale: 1.3;";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLGFBQWEsWUFBWSxVQUFVLFlBQVksT0FBTyxNQUFNLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFlBQVksY0FBYyxNQUFNLFlBQVksTUFBTSxPQUFPLGNBQWMsY0FBYyxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsY0FBYyxXQUFXLFVBQVUsd0JBQXdCLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLE1BQU0sWUFBWSxjQUFjLFdBQVcsVUFBVSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxVQUFVLDBDQUEwQyw0QkFBNEIsNkNBQTZDLHFCQUFxQix1QkFBdUIsR0FBRyxX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Ly9jb25uZWN0LWZvdXIvLi9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9jb25uZWN0LWZvdXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY29ubmVjdC1mb3VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY29ubmVjdC1mb3VyLy4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSIsIndlYnBhY2s6Ly9jb25uZWN0LWZvdXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY29ubmVjdC1mb3VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jb25uZWN0LWZvdXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY29ubmVjdC1mb3VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL3NyYy9qYXZhc2NyaXB0L2RvbV9tYXRlcmlhbHMuanMiLCJ3ZWJwYWNrOi8vY29ubmVjdC1mb3VyLy4vc3JjL2phdmFzY3JpcHQvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL3NyYy9qYXZhc2NyaXB0L2dhbWVjb250cm9sbGVyLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL3NyYy9qYXZhc2NyaXB0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvbWF0cml4LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvcmVkX3BpbGxfYmx1ZV9waWxsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWF0cml4XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gIC0tbWFpbi1jb250ZW50LW1hcmdpbjogMXJlbTtcXG4gIC0tYm9yZGVyLXJhZGl1czogMjNweDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci1wb3AtdXA6IGJyb3duO1xcbiAgLS1jb2xvcl93aGl0ZV9jdXN0b206ICNlOGU2ZTM7XFxuICAtLWJhY2tncm91bmQtY29sb3ItYXJteS1ncmVlbi1saWdodDogI2I1YjlhNDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci1hcm15LWdyZWVuLW1lZGl1bTogI2EzYTc4ZDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci1hcm15LWdyZWVuLWRhcms6ICM0MjQ1M2E7XFxuICAtLW92ZXJsYXktYmxhY2s6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG5cXG4gIC0tcGxheWVyLTEtY29sb3I6ICNkZDQxMjQ7XFxuICAtLXBsYXllci0yLWNvbG9yOiAjMDA2NmIyO1xcbiAgLS1yb3ctY2VsbC1iYWNrZ3JvdW5kLWNvbG9yOiAjZDFmYWU1O1xcbiAgLS13aW5uaW5nLWNlbGxzLWNvbG9yOiBwdXJwbGU7XFxuICAtLWNvbHVtbi1wYWRkaW5nOiAxcmVtO1xcbiAgLS1kZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xcblxcbiAgLS1uZW9uLXRleHQtc2hhZG93LWhpZ2g6IDAgMCA3cHggI2ZmZiwgMCAwIDEwcHggI2ZmZiwgMCAwIDIxcHggI2ZmZixcXG4gICAgMCAwIDQycHggIzBmYSwgMCAwIDgycHggIzBmYSwgMCAwIDkycHggIzBmYSwgMCAwIDEwMnB4ICMwZmEsIDAgMCAxNTFweCAjMGZhO1xcbiAgLS1uZW9uLXRleHQtc2hhZG93LW1lZGl1bTogMCAwIDMuNHB4ICNmZmYsIDAgMCA1cHggI2ZmZiwgMCAwIDEwLjVweCAjZmZmLFxcbiAgICAwIDAgMjFweCAjMGZhLCAwIDAgNDFweCAjMGZhLCAwIDAgNDZweCAjMGZhLCAwIDAgNTFweCAjMGZhLCAwIDAgNzUuNXB4ICMwZmE7XFxuICAtLW5lb24tdGV4dC1zaGFkb3ctbG93OiAwIDAgMS43cHggI2ZmZiwgMCAwIDIuNXB4ICNmZmYsIDAgMCA1LjI1cHggI2ZmZixcXG4gICAgMCAwIDEwLjVweCAjMGZhLCAwIDAgMjAuNXB4ICMwZmEsIDAgMCAyM3B4ICMwZmEsIDAgMCAyNS41cHggIzBmYSxcXG4gICAgMCAwIDM3Ljc1cHggIzBmYTtcXG4gIC0tbmVvbi10ZXh0LXNoYWRvdy12ZXJ5LWxvdzogMCAwIDAuNXB4ICNmZmYsIDAgMCAwLjZweCAjZmZmLCAwIDAgMS4zcHggI2ZmZixcXG4gICAgMCAwIDIuNXB4ICMwZmEsIDAgMCA1cHggIzBmYSwgMCAwIDZweCAjMGZhLCAwIDAgNi41cHggIzBmYSwgMCAwIDM3Ljc1cHggIzBmYTtcXG4gIC0tcGluay1uZW9uLXRleHQtc2hhZG93LWhpZ2g6IDAgMCA0cHggI2ZmZiwgMCAwIDEwcHggI2ZmZiwgMCAwIDE4cHggI2ZmZixcXG4gICAgMCAwIDM4cHggI2YwOSwgMCAwIDczcHggI2YwOSwgMCAwIDgwcHggI2YwOSwgMCAwIDk0cHggI2YwOSwgMCAwIDE0MHB4ICNmMDk7XFxuICAtLXBpbmstbmVvbi10ZXh0LXNoYWRvdy1sb3c6IDAgMCAxcHggI2ZmZiwgMCAwIDIuNXB4ICNmZmYsIDAgMCA0LjVweCAjZmZmLFxcbiAgICAwIDAgOS41cHggI2YwOSwgMCAwIDE4LjI1cHggI2YwOSwgMCAwIDIwcHggI2YwOSwgMCAwIDIzLjVweCAjZjA5LFxcbiAgICAwIDAgMzVweCAjZjA5O1xcblxcbiAgLS1ibHVlLW5lb24tdGV4dC1zaGFkb3c6IDAgMCA2cHggcmdiYSgyMDIsIDIyOCwgMjI1LCAwLjkyKSxcXG4gICAgMCAwIDMwcHggcmdiYSgyMDIsIDIyOCwgMjI1LCAwLjM0KSwgMCAwIDEycHggcmdiYSgzMCwgMTMyLCAyNDIsIDAuNTIpLFxcbiAgICAwIDAgMjFweCByZ2JhKDMwLCAxMzIsIDI0MiwgMC45MiksIDAgMCAzNHB4IHJnYmEoMzAsIDEzMiwgMjQyLCAwLjc4KSxcXG4gICAgMCAwIDU0cHggcmdiYSgzMCwgMTMyLCAyNDIsIDAuOTIpO1xcblxcbiAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XFxufVxcbi5iYWNrZ3JvdW5kX3ZpZGVvIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yX3doaXRlX2N1c3RvbSk7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tYmx1ZS1uZW9uLXRleHQtc2hhZG93LWxvdyk7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWFpbl9jb250YWluZXIge1xcbiAgZmxleDogMTtcXG5cXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLyogcGFkZGluZzogMnJlbSA0cmVtOyAqL1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4vKiAqKioqKiogKi9cXG4vKiBoZWFkZXIgKi9cXG4vKiAqKioqKiogKi9cXG5cXG4uaGVhZGVyX21haW5fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtIDRyZW07XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW92ZXJsYXktYmxhY2spO1xcblxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyAqL1xcbn1cXG5cXG4uaGVhZGVyX2xlZnQsXFxuLmhlYWRlcl9yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uaGVhZGVyX21pZCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIm1hdHJpeFxcXCI7XFxufVxcbi5oZWFkZXJfbWlkIC5oZWFkZXJfZ2FtZV9uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5pY29uIHtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuLm5ld19nYW1lX2J1dHRvbiAuaWNvbiB7XFxuICBzY2FsZTogMS4yO1xcbiAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yX3doaXRlX2N1c3RvbSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDByZW0gMHJlbSAxcmVtIGJsYWNrO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5idXR0b24ubmV3X2dhbWVfYnV0dG9uIHtcXG4gIHdpZHRoOiAyNDBweDtcXG4gIHotaW5kZXg6IDQ7XFxufVxcbmJ1dHRvbi5uZXdfZ2FtZV9idXR0b24uYWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXBpbmstbmVvbi10ZXh0LXNoYWRvdy1sb3cpO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgYm94LXNoYWRvdzogdmFyKC0tYmx1ZS1uZW9uLXRleHQtc2hhZG93KTtcXG59XFxuLyogKioqKioqICovXFxuLyogKioqKioqICovXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi8qIE1haW4gQ29udGVudCBDb250YWluZXIgKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLyogLmNvbnRlbnRfbWFpbl9jb250YWluZXIge1xcbiAgbWFyZ2luOiAycmVtIDRyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgZmxleDogMTtcXG59ICovXFxuXFxuLmNvbnRlbnRfY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMnJlbSA0cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGZsZXg6IDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnBsYXllcl8xX2NvbnRhaW5lcixcXG4ucGxheWVyXzJfY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tYmx1ZS1uZW9uLXRleHQtc2hhZG93KTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5wbGF5ZXJfMV9uYW1lLFxcbi5wbGF5ZXJfMl9uYW1lIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxuICAvKiBib3JkZXI6IDJweCByZWQgc29saWQ7ICovXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xcbn1cXG4ucGxheWVyXzFfbmFtZS5hY3RpdmUsXFxuLnBsYXllcl8yX25hbWUuYWN0aXZlIHtcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1waW5rLW5lb24tdGV4dC1zaGFkb3ctbG93KTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXBpbmstbmVvbi10ZXh0LXNoYWRvdy1sb3cpO1xcbn1cXG5cXG4ucGxheWVyXzFfc3RhdHVzX3JvdW5kLFxcbi5wbGF5ZXJfMl9zdGF0dXNfcm91bmQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAvKiBib3gtc2hhZG93OiBpbnNldCAwcmVtIDByZW0gNTVyZW0gYmxhY2s7ICovXFxufVxcblxcbi8qIGN1dHRpbmcgdGhlIHBpbGxzIC5zdmcgZmlsZSBpbiBoYWxmIGFuZCB1c2UgdGhlbSBvbiBib3RoIHNpZGVkICovXFxuLnBsYXllcl8xX2ltZ19jb250YWluZXIge1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcXG59XFxuLnBsYXllcl8xX2ltZ19jb250YWluZXI6bnRoLWNoaWxkKDIpIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xcbn1cXG4ucGxheWVyXzJfaW1nX2NvbnRhaW5lciB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xcbn1cXG4ucGxheWVyXzJfaW1nX2NvbnRhaW5lcjpudGgtY2hpbGQoMikge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX2NvbnRhaW5lciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIC8qIHdpZHRoOiBtaW5tYXgoMTAwLCA2MHZ3KTsgKi9cXG59XFxuXFxuLyogY29sdW1uIGFuZCByb3cgc2V0dGluZ3MgKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi5jb2x1bW4ge1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAvKiBib3JkZXI6IDJweCByZWQgc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjsgKi9cXG4gIHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1jb2x1bW4tcGFkZGluZykgLyAyKTtcXG5cXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNvbHVtbjpob3ZlciB7XFxuICBzY2FsZTogMS4wMTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2MHB4IHZhcigtLWJhY2tncm91bmQtY29sb3ItYXJteS1ncmVlbi1saWdodCk7XFxufVxcblxcbi5yb3cge1xcbiAgYm9yZGVyOiA2cHggYmxhY2sgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAxMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJvdy1jZWxsLWJhY2tncm91bmQtY29sb3IpO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHJlbSAwcmVtIDEuNXJlbSBibGFjaztcXG4gIHBhZGRpbmc6IHZhcigtLWNvbHVtbi1wYWRkaW5nKTtcXG4gIG1hcmdpbjogY2FsYyh2YXIoLS1jb2x1bW4tcGFkZGluZykgLyA1KSAwO1xcblxcbiAgaGVpZ2h0OiAxLjZyZW07XFxuICB3aWR0aDogMS42cmVtO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIHRoaXMgaXMgaW1wb3J0YW50IGZvciB0aGUgZXZlbnQgY2FwdHVyZSBvbiBjbGljayAqL1xcbn1cXG4vKiBoZXJlIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBmb3Igd2lubmluZyBjZWxscyAqL1xcbi5yb3cud2lubmluZ19yb3cge1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDQ7XFxuICBib3gtc2hhZG93OiB2YXIoLS1uZW9uLXRleHQtc2hhZG93LXZlcnktbG93KTtcXG4gIGFuaW1hdGlvbjogZmxpY2tlciAxLjVzIGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuLnJvdzpob3ZlciB7XFxuICBzY2FsZTogMS4xO1xcbn1cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKiogKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKiAqL1xcbi8qIG92ZXJsYXkgYW5kIHBvcC11cHMgKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLm92ZXJsYXlfZm9yX3BvcF91cHMge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW92ZXJsYXktYmxhY2spO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgei1pbmRleDogMztcXG59XFxuLm92ZXJsYXlfZm9yX3BvcF91cHMuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4uZ2FtZW92ZXJfcG9wX3VwIHtcXG4gIC8qIG1hcmdpbjogMCBhdXRvOyAqL1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtYXRyaXhcXFwiO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yX3doaXRlX2N1c3RvbSk7XFxuICAvKiBib3JkZXI6IDJweCB2YXIoLS1jb2xvcl93aGl0ZV9jdXN0b20pIHNvbGlkOyAqL1xcbiAgb3BhY2l0eTogMDtcXG4gIHotaW5kZXg6IDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IHZhcigtLW5lb24tdGV4dC1zaGFkb3ctbWVkaXVtKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLW5lb24tdGV4dC1zaGFkb3ctdmVyeS1sb3cpO1xcblxcbiAgLyogYm94LXNoYWRvdzogaW5zZXQgMXJlbSAxcmVtIDRyZW0gd2hpdGU7ICovXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXG59XFxuLmdhbWVvdmVyX3BvcF91cC5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLmdhbWVvdmVyX3BvcF91cCAuc3RhdHVzX3dpbm5pbmcge1xcbn1cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqICovXFxuLyogKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi8qICoqKioqKiAqL1xcbi8qIGZvb3RlciAqL1xcbi8qICoqKioqKiAqL1xcblxcbmZvb3RlciB7XFxuICAvKiBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwOyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWFybXktZ3JlZW4tZGFyayk7XFxuICBjb2xvcjogdmFyKC0tY29sb3Jfd2hpdGVfY3VzdG9tKTtcXG4gIHotaW5kZXg6IDI7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBzY2FsZTogMS4yO1xcbn1cXG5cXG5mb290ZXIgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLyogKioqKioqICovXFxuLyogKioqKioqICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4v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QUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLDRDQUE0Qzs7RUFFNUMsNENBQTRDO0VBQzVDLG1DQUFtQztFQUNuQyxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4Qix3QkFBd0I7O0FBRXhCLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVzs7QUFFWDtFQUNFOztjQUVZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLHlEQUF5RDtFQUN6RCxnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0EsV0FBVztBQUNYLFdBQVdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIm1hdHJpeFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL21hdHJpeC50dGZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gIC0tbWFpbi1jb250ZW50LW1hcmdpbjogMXJlbTtcXG4gIC0tYm9yZGVyLXJhZGl1czogMjNweDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci1wb3AtdXA6IGJyb3duO1xcbiAgLS1jb2xvcl93aGl0ZV9jdXN0b206ICNlOGU2ZTM7XFxuICAtLWJhY2tncm91bmQtY29sb3ItYXJteS1ncmVlbi1saWdodDogI2I1YjlhNDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci1hcm15LWdyZWVuLW1lZGl1bTogI2EzYTc4ZDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci1hcm15LWdyZWVuLWRhcms6ICM0MjQ1M2E7XFxuICAtLW92ZXJsYXktYmxhY2s6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG5cXG4gIC0tcGxheWVyLTEtY29sb3I6ICNkZDQxMjQ7XFxuICAtLXBsYXllci0yLWNvbG9yOiAjMDA2NmIyO1xcbiAgLS1yb3ctY2VsbC1iYWNrZ3JvdW5kLWNvbG9yOiAjZDFmYWU1O1xcbiAgLS13aW5uaW5nLWNlbGxzLWNvbG9yOiBwdXJwbGU7XFxuICAtLWNvbHVtbi1wYWRkaW5nOiAxcmVtO1xcbiAgLS1kZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xcblxcbiAgLS1uZW9uLXRleHQtc2hhZG93LWhpZ2g6IDAgMCA3cHggI2ZmZiwgMCAwIDEwcHggI2ZmZiwgMCAwIDIxcHggI2ZmZixcXG4gICAgMCAwIDQycHggIzBmYSwgMCAwIDgycHggIzBmYSwgMCAwIDkycHggIzBmYSwgMCAwIDEwMnB4ICMwZmEsIDAgMCAxNTFweCAjMGZhO1xcbiAgLS1uZW9uLXRleHQtc2hhZG93LW1lZGl1bTogMCAwIDMuNHB4ICNmZmYsIDAgMCA1cHggI2ZmZiwgMCAwIDEwLjVweCAjZmZmLFxcbiAgICAwIDAgMjFweCAjMGZhLCAwIDAgNDFweCAjMGZhLCAwIDAgNDZweCAjMGZhLCAwIDAgNTFweCAjMGZhLCAwIDAgNzUuNXB4ICMwZmE7XFxuICAtLW5lb24tdGV4dC1zaGFkb3ctbG93OiAwIDAgMS43cHggI2ZmZiwgMCAwIDIuNXB4ICNmZmYsIDAgMCA1LjI1cHggI2ZmZixcXG4gICAgMCAwIDEwLjVweCAjMGZhLCAwIDAgMjAuNXB4ICMwZmEsIDAgMCAyM3B4ICMwZmEsIDAgMCAyNS41cHggIzBmYSxcXG4gICAgMCAwIDM3Ljc1cHggIzBmYTtcXG4gIC0tbmVvbi10ZXh0LXNoYWRvdy12ZXJ5LWxvdzogMCAwIDAuNXB4ICNmZmYsIDAgMCAwLjZweCAjZmZmLCAwIDAgMS4zcHggI2ZmZixcXG4gICAgMCAwIDIuNXB4ICMwZmEsIDAgMCA1cHggIzBmYSwgMCAwIDZweCAjMGZhLCAwIDAgNi41cHggIzBmYSwgMCAwIDM3Ljc1cHggIzBmYTtcXG4gIC0tcGluay1uZW9uLXRleHQtc2hhZG93LWhpZ2g6IDAgMCA0cHggI2ZmZiwgMCAwIDEwcHggI2ZmZiwgMCAwIDE4cHggI2ZmZixcXG4gICAgMCAwIDM4cHggI2YwOSwgMCAwIDczcHggI2YwOSwgMCAwIDgwcHggI2YwOSwgMCAwIDk0cHggI2YwOSwgMCAwIDE0MHB4ICNmMDk7XFxuICAtLXBpbmstbmVvbi10ZXh0LXNoYWRvdy1sb3c6IDAgMCAxcHggI2ZmZiwgMCAwIDIuNXB4ICNmZmYsIDAgMCA0LjVweCAjZmZmLFxcbiAgICAwIDAgOS41cHggI2YwOSwgMCAwIDE4LjI1cHggI2YwOSwgMCAwIDIwcHggI2YwOSwgMCAwIDIzLjVweCAjZjA5LFxcbiAgICAwIDAgMzVweCAjZjA5O1xcblxcbiAgLS1ibHVlLW5lb24tdGV4dC1zaGFkb3c6IDAgMCA2cHggcmdiYSgyMDIsIDIyOCwgMjI1LCAwLjkyKSxcXG4gICAgMCAwIDMwcHggcmdiYSgyMDIsIDIyOCwgMjI1LCAwLjM0KSwgMCAwIDEycHggcmdiYSgzMCwgMTMyLCAyNDIsIDAuNTIpLFxcbiAgICAwIDAgMjFweCByZ2JhKDMwLCAxMzIsIDI0MiwgMC45MiksIDAgMCAzNHB4IHJnYmEoMzAsIDEzMiwgMjQyLCAwLjc4KSxcXG4gICAgMCAwIDU0cHggcmdiYSgzMCwgMTMyLCAyNDIsIDAuOTIpO1xcblxcbiAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XFxufVxcbi5iYWNrZ3JvdW5kX3ZpZGVvIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yX3doaXRlX2N1c3RvbSk7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tYmx1ZS1uZW9uLXRleHQtc2hhZG93LWxvdyk7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWFpbl9jb250YWluZXIge1xcbiAgZmxleDogMTtcXG5cXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLyogcGFkZGluZzogMnJlbSA0cmVtOyAqL1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4vKiAqKioqKiogKi9cXG4vKiBoZWFkZXIgKi9cXG4vKiAqKioqKiogKi9cXG5cXG4uaGVhZGVyX21haW5fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtIDRyZW07XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW92ZXJsYXktYmxhY2spO1xcblxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyAqL1xcbn1cXG5cXG4uaGVhZGVyX2xlZnQsXFxuLmhlYWRlcl9yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uaGVhZGVyX21pZCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIm1hdHJpeFxcXCI7XFxufVxcbi5oZWFkZXJfbWlkIC5oZWFkZXJfZ2FtZV9uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5pY29uIHtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuLm5ld19nYW1lX2J1dHRvbiAuaWNvbiB7XFxuICBzY2FsZTogMS4yO1xcbiAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yX3doaXRlX2N1c3RvbSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDByZW0gMHJlbSAxcmVtIGJsYWNrO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5idXR0b24ubmV3X2dhbWVfYnV0dG9uIHtcXG4gIHdpZHRoOiAyNDBweDtcXG4gIHotaW5kZXg6IDQ7XFxufVxcbmJ1dHRvbi5uZXdfZ2FtZV9idXR0b24uYWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXBpbmstbmVvbi10ZXh0LXNoYWRvdy1sb3cpO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgYm94LXNoYWRvdzogdmFyKC0tYmx1ZS1uZW9uLXRleHQtc2hhZG93KTtcXG59XFxuLyogKioqKioqICovXFxuLyogKioqKioqICovXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi8qIE1haW4gQ29udGVudCBDb250YWluZXIgKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLyogLmNvbnRlbnRfbWFpbl9jb250YWluZXIge1xcbiAgbWFyZ2luOiAycmVtIDRyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgZmxleDogMTtcXG59ICovXFxuXFxuLmNvbnRlbnRfY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMnJlbSA0cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGZsZXg6IDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnBsYXllcl8xX2NvbnRhaW5lcixcXG4ucGxheWVyXzJfY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tYmx1ZS1uZW9uLXRleHQtc2hhZG93KTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5wbGF5ZXJfMV9uYW1lLFxcbi5wbGF5ZXJfMl9uYW1lIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxuICAvKiBib3JkZXI6IDJweCByZWQgc29saWQ7ICovXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xcbn1cXG4ucGxheWVyXzFfbmFtZS5hY3RpdmUsXFxuLnBsYXllcl8yX25hbWUuYWN0aXZlIHtcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1waW5rLW5lb24tdGV4dC1zaGFkb3ctbG93KTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXBpbmstbmVvbi10ZXh0LXNoYWRvdy1sb3cpO1xcbn1cXG5cXG4ucGxheWVyXzFfc3RhdHVzX3JvdW5kLFxcbi5wbGF5ZXJfMl9zdGF0dXNfcm91bmQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAvKiBib3gtc2hhZG93OiBpbnNldCAwcmVtIDByZW0gNTVyZW0gYmxhY2s7ICovXFxufVxcblxcbi8qIGN1dHRpbmcgdGhlIHBpbGxzIC5zdmcgZmlsZSBpbiBoYWxmIGFuZCB1c2UgdGhlbSBvbiBib3RoIHNpZGVkICovXFxuLnBsYXllcl8xX2ltZ19jb250YWluZXIge1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9yZWRfcGlsbF9ibHVlX3BpbGwuc3ZnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XFxufVxcbi5wbGF5ZXJfMV9pbWdfY29udGFpbmVyOm50aC1jaGlsZCgyKSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXG59XFxuLnBsYXllcl8yX2ltZ19jb250YWluZXIge1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvcmVkX3BpbGxfYmx1ZV9waWxsLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XFxufVxcbi5wbGF5ZXJfMl9pbWdfY29udGFpbmVyOm50aC1jaGlsZCgyKSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XFxufVxcblxcbi5nYW1lYm9hcmRfY29udGFpbmVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgLyogd2lkdGg6IG1pbm1heCgxMDAsIDYwdncpOyAqL1xcbn1cXG5cXG4vKiBjb2x1bW4gYW5kIHJvdyBzZXR0aW5ncyAqL1xcbi8qICoqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLmNvbHVtbiB7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIC8qIGJvcmRlcjogMnB4IHJlZCBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duOyAqL1xcbiAgcGFkZGluZzogMCBjYWxjKHZhcigtLWNvbHVtbi1wYWRkaW5nKSAvIDIpO1xcblxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uY29sdW1uOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjAxO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDYwcHggdmFyKC0tYmFja2dyb3VuZC1jb2xvci1hcm15LWdyZWVuLWxpZ2h0KTtcXG59XFxuXFxuLnJvdyB7XFxuICBib3JkZXI6IDZweCBibGFjayBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm93LWNlbGwtYmFja2dyb3VuZC1jb2xvcik7XFxuICBvcGFjaXR5OiAwLjk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcmVtIDByZW0gMS41cmVtIGJsYWNrO1xcbiAgcGFkZGluZzogdmFyKC0tY29sdW1uLXBhZGRpbmcpO1xcbiAgbWFyZ2luOiBjYWxjKHZhcigtLWNvbHVtbi1wYWRkaW5nKSAvIDUpIDA7XFxuXFxuICBoZWlnaHQ6IDEuNnJlbTtcXG4gIHdpZHRoOiAxLjZyZW07XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogdGhpcyBpcyBpbXBvcnRhbnQgZm9yIHRoZSBldmVudCBjYXB0dXJlIG9uIGNsaWNrICovXFxufVxcbi8qIGhlcmUgeW91IGNhbiBhZGQgYW5pbWF0aW9uIGZvciB3aW5uaW5nIGNlbGxzICovXFxuLnJvdy53aW5uaW5nX3JvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgei1pbmRleDogNDtcXG4gIGJveC1zaGFkb3c6IHZhcigtLW5lb24tdGV4dC1zaGFkb3ctdmVyeS1sb3cpO1xcbiAgYW5pbWF0aW9uOiBmbGlja2VyIDEuNXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG4ucm93OmhvdmVyIHtcXG4gIHNjYWxlOiAxLjE7XFxufVxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi8qICoqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqICovXFxuLyogb3ZlcmxheSBhbmQgcG9wLXVwcyAqL1xcbi8qICoqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4ub3ZlcmxheV9mb3JfcG9wX3VwcyB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1kZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb24pO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3ZlcmxheS1ibGFjayk7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB6LWluZGV4OiAzO1xcbn1cXG4ub3ZlcmxheV9mb3JfcG9wX3Vwcy5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5nYW1lb3Zlcl9wb3BfdXAge1xcbiAgLyogbWFyZ2luOiAwIGF1dG87ICovXFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LWZhbWlseTogXFxcIm1hdHJpeFxcXCI7XFxuICBjb2xvcjogdmFyKC0tY29sb3Jfd2hpdGVfY3VzdG9tKTtcXG4gIC8qIGJvcmRlcjogMnB4IHZhcigtLWNvbG9yX3doaXRlX2N1c3RvbSkgc29saWQ7ICovXFxuICBvcGFjaXR5OiAwO1xcbiAgei1pbmRleDogNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tbmVvbi10ZXh0LXNoYWRvdy1tZWRpdW0pO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tbmVvbi10ZXh0LXNoYWRvdy12ZXJ5LWxvdyk7XFxuXFxuICAvKiBib3gtc2hhZG93OiBpbnNldCAxcmVtIDFyZW0gNHJlbSB3aGl0ZTsgKi9cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgcGFkZGluZzogMC43cmVtO1xcbn1cXG4uZ2FtZW92ZXJfcG9wX3VwLmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uZ2FtZW92ZXJfcG9wX3VwIC5zdGF0dXNfd2lubmluZyB7XFxufVxcblxcbi8qICoqKioqKioqKioqKioqKioqKiogKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLyogKioqKioqICovXFxuLyogZm9vdGVyICovXFxuLyogKioqKioqICovXFxuXFxuZm9vdGVyIHtcXG4gIC8qIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7ICovXFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItYXJteS1ncmVlbi1kYXJrKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcl93aGl0ZV9jdXN0b20pO1xcbiAgei1pbmRleDogMjtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5mb290ZXIgaW1nIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHNjYWxlOiAxLjI7XFxufVxcblxcbmZvb3RlciBpbWc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4vKiAqKioqKiogKi9cXG4vKiAqKioqKiogKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlTWF0ZXJpYWxzRE9NKCkge1xuICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVib2FyZF9jb250YWluZXJcIik7XG5cbiAgZnVuY3Rpb24gcGxheVJvdW5kQ2xpY2tFdmVudChldmVudCkge1xuICAgIGxldCBjb2x1bW5OdW1iZXIgPSBldmVudC50YXJnZXQuZGF0YXNldC5jb2x1bW5fbnVtYmVyO1xuICAgIGxldCBzZWxlY3RlZENvbHVtbiA9IGdhbWUuZ2FtZWJvYXJkLmdldEJvYXJkKClbY29sdW1uTnVtYmVyXTtcbiAgICBnYW1lLnBsYXlSb3VuZChzZWxlY3RlZENvbHVtbik7XG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRDb2x1bW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gRXZlbnRMaXN0ZW5lclRvQ29sdW1ucygpIHtcbiAgICBjb25zdCBjb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2x1bW5cIik7XG5cbiAgICBmdW5jdGlvbiBhZGQoKSB7XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICBjb2x1bW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgIHBsYXlSb3VuZENsaWNrRXZlbnQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIGNvbHVtbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgcGxheVJvdW5kQ2xpY2tFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkLCByZW1vdmUgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJUb05ld0dhbWVCdXR0b24oKSB7XG4gICAgY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3X2dhbWVfYnV0dG9uXCIpO1xuICAgIG5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGdhbWUuc3RhcnROZXdHYW1lKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbkV4aXN0aW5nR2FtZWJvYXJkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgY2hpbGRyZW5PZkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcImRpdi5nYW1lYm9hcmRfY29udGFpbmVyID4gKlwiXG4gICAgKTtcbiAgICBjaGlsZHJlbk9mQ29udGFpbmVyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5R2FtZWJvYXJkRE9NKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZS5nYW1lYm9hcmQuZ2V0Qm9hcmQoKS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbmV3Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0NvbHVtbi5jbGFzc0xpc3QuYWRkKFwiY29sdW1uXCIpO1xuICAgICAgbmV3Q29sdW1uLnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uX251bWJlclwiLCBpKTtcbiAgICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDb2x1bW4pO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWUuZ2FtZWJvYXJkLmdldEJvYXJkKClbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgbmV3Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmV3Um93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgICAgIG5ld1Jvdy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd19udW1iZXJcIiwgaik7XG5cbiAgICAgICAgLy8gbmV3Um93LmlubmVySFRNTCA9IGdhbWUuZ2FtZWJvYXJkLmdldEJvYXJkKClbaV1bal0uc3RhdHVzO1xuICAgICAgICBpZiAoZ2FtZS5nYW1lYm9hcmQuZ2V0Qm9hcmQoKVtpXVtqXS5zdGF0dXMgPT0gMSkge1xuICAgICAgICAgIG5ld1Jvdy5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcInN0eWxlXCIsXG4gICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYXllci0xLWNvbG9yKTsgb3BhY2l0eTogMTtcIlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZS5nYW1lYm9hcmQuZ2V0Qm9hcmQoKVtpXVtqXS5zdGF0dXMgPT0gMikge1xuICAgICAgICAgIG5ld1Jvdy5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcInN0eWxlXCIsXG4gICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYXllci0yLWNvbG9yKTsgb3BhY2l0eTogMTtcIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2FtZS5nYW1lYm9hcmQuZ2V0Qm9hcmQoKVtpXVtqXS5pc1dpbm5pbmdDZWxsID09IHRydWUpIHtcbiAgICAgICAgICBuZXdSb3cuY2xhc3NMaXN0LmFkZChcIndpbm5pbmdfcm93XCIpO1xuICAgICAgICB9XG4gICAgICAgIG5ld0NvbHVtbi5hcHBlbmRDaGlsZChuZXdSb3cpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBsYXllcjFOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfMV9uYW1lXCIpO1xuICAgIGNvbnN0IHBsYXllcjJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfMl9uYW1lXCIpO1xuICAgIHBsYXllcjFOYW1lLmlubmVySFRNTCA9IGdhbWUuZ2V0UGxheWVycygpWzBdLm5hbWUudG9VcHBlckNhc2UoKTtcbiAgICBwbGF5ZXIyTmFtZS5pbm5lckhUTUwgPSBnYW1lLmdldFBsYXllcnMoKVsxXS5uYW1lLnRvVXBwZXJDYXNlKCk7XG4gIH1cblxuICAvLyBmdW5jdGlvbiBkaXNwbGF5Um91bmRTdGF0dXNNZXNzYWdlKGFjdGl2ZVBsYXllciwgc3RhdHVzX21lc3NhZ2UpIHtcbiAgLy8gICBjb25zdCBwbGF5ZXIxX1N0YXR1c1JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgLy8gICAgIFwiLnBsYXllcl8xX3N0YXR1c19yb3VuZFwiXG4gIC8vICAgKTtcbiAgLy8gICBjb25zdCBwbGF5ZXIyX1N0YXR1c1JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgLy8gICAgIFwiLnBsYXllcl8yX3N0YXR1c19yb3VuZFwiXG4gIC8vICAgKTtcblxuICAvLyAgIGlmIChhY3RpdmVQbGF5ZXIgPT09IGdhbWUuZ2V0UGxheWVycygpWzBdKSB7XG4gIC8vICAgICBwbGF5ZXIxX1N0YXR1c1JvdW5kLmlubmVySFRNTCA9IHN0YXR1c19tZXNzYWdlO1xuICAvLyAgICAgcGxheWVyMl9TdGF0dXNSb3VuZC5pbm5lckhUTUwgPSBcIiZuYnNwO1wiO1xuICAvLyAgIH0gZWxzZSBpZiAoYWN0aXZlUGxheWVyID09PSBnYW1lLmdldFBsYXllcnMoKVsxXSkge1xuICAvLyAgICAgcGxheWVyMV9TdGF0dXNSb3VuZC5pbm5lckhUTUwgPSBcIiZuYnNwO1wiO1xuICAvLyAgICAgcGxheWVyMl9TdGF0dXNSb3VuZC5pbm5lckhUTUwgPSBzdGF0dXNfbWVzc2FnZTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5V2lubmluZ1N0YXR1c01lc3NhZ2Uoc3RhdHVzX21lc3NhZ2UpIHtcbiAgICBjb25zdCBzdGF0dXNXaW5uaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGF0dXNfd2lubmluZ1wiKTtcbiAgICBzdGF0dXNXaW5uaW5nLmlubmVySFRNTCA9IHN0YXR1c19tZXNzYWdlO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheUFjdGl2ZVBsYXllckZvY3VzKGFjdGl2ZVBsYXllcikge1xuICAgIGNvbnN0IHBsYXllcjFOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfMV9uYW1lXCIpO1xuICAgIGNvbnN0IHBsYXllcjJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfMl9uYW1lXCIpO1xuXG4gICAgaWYgKGFjdGl2ZVBsYXllciA9PT0gZ2FtZS5nZXRQbGF5ZXJzKClbMF0pIHtcbiAgICAgIHBsYXllcjFOYW1lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBwbGF5ZXIyTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH0gZWxzZSBpZiAoYWN0aXZlUGxheWVyID09PSBnYW1lLmdldFBsYXllcnMoKVsxXSkge1xuICAgICAgcGxheWVyMU5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIHBsYXllcjJOYW1lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZW5kR2FtZURPTSgpIHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5X2Zvcl9wb3BfdXBzXCIpO1xuICAgIGNvbnN0IGdhbWVvdmVyUG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVvdmVyX3BvcF91cFwiKTtcbiAgICBjb25zdCBidXR0b25OZXdHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24ubmV3X2dhbWVfYnV0dG9uXCIpO1xuXG4gICAgZnVuY3Rpb24gYWRkKCkge1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgZ2FtZW92ZXJQb3BVcC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgYnV0dG9uTmV3R2FtZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBnYW1lb3ZlclBvcFVwLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBidXR0b25OZXdHYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgIHJldHVybiB7IGFkZCwgcmVtb3ZlIH07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRIZWFkZXJDb25maWcoKSB7XG4gICAgZnVuY3Rpb24gYWRkQXVkaW9Db25maWcoKSB7XG4gICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhdWRpb1wiKTtcbiAgICAgIGNvbnN0IGF1ZGlvSWNvbk9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCJidXR0b24uYXVkaW9fYnV0dG9uIC5pY29uX29uXCJcbiAgICAgICk7XG4gICAgICBjb25zdCBhdWRpb0ljb25PZmYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcImJ1dHRvbi5hdWRpb19idXR0b24gLmljb25fb2ZmXCJcbiAgICAgICk7XG4gICAgICBhdWRpb0ljb25Pbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBjb25zdCBhdWRpb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uYXVkaW9fYnV0dG9uXCIpO1xuXG4gICAgICBmdW5jdGlvbiB0b2dnbGVQbGF5KCkge1xuICAgICAgICBpZiAoYXVkaW8ucGF1c2VkKSB7XG4gICAgICAgICAgYXVkaW9JY29uT24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICBhdWRpb0ljb25PZmYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhdWRpb0ljb25Pbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgYXVkaW9JY29uT2ZmLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhdWRpb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0b2dnbGVQbGF5KCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRJbmZvQnV0dG9uQ29uZmlnKCkge1xuICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheV9mb3JfcG9wX3Vwc1wiKTtcbiAgICAgIGNvbnN0IGluZm9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmluZm9fYnV0dG9uXCIpO1xuICAgICAgY29uc3QgaW1hZ2VQbGF5ZXJSZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl8xX2ltZ19jb250YWluZXJcIik7XG4gICAgICBjb25zdCBpbWFnZVBsYXllckJsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl8yX2ltZ19jb250YWluZXJcIik7XG4gICAgICBjb25zdCByZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5uZXdfZ2FtZV9idXR0b25cIik7XG5cbiAgICAgIGxldCBpc0luZm9PbiA9IGZhbHNlO1xuXG4gICAgICBmdW5jdGlvbiBpbmZvQnV0dG9uVG9nZ2xlKCkge1xuICAgICAgICBpZiAoIWlzSW5mb09uKSB7XG4gICAgICAgICAgcmVzdGFydEJ1dHRvbi5zdHlsZSA9IFwiei1pbmRleDogMTtcIjtcbiAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgaW5mb0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInotaW5kZXg6IDEwO1wiKTtcbiAgICAgICAgICBpbmZvQnV0dG9uLnN0eWxlID0gXCJ6LWluZGV4OiAxMDtcIjtcbiAgICAgICAgICBpbWFnZVBsYXllclJlZC5zdHlsZSA9XG4gICAgICAgICAgICBcInotaW5kZXg6IDEwOyB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1kZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb24pOyBzY2FsZTogMS4zO1wiO1xuICAgICAgICAgIGltYWdlUGxheWVyQmx1ZS5zdHlsZSA9XG4gICAgICAgICAgICBcInotaW5kZXg6IDEwOyB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1kZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb24pOyBzY2FsZTogMS4zO1wiO1xuXG4gICAgICAgICAgaXNJbmZvT24gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3RhcnRCdXR0b24uc3R5bGUgPSBcIlwiO1xuICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICBpbmZvQnV0dG9uLnN0eWxlID0gXCJcIjtcbiAgICAgICAgICBpbWFnZVBsYXllclJlZC5zdHlsZSA9IFwiXCI7XG4gICAgICAgICAgaW1hZ2VQbGF5ZXJCbHVlLnN0eWxlID0gXCJcIjtcblxuICAgICAgICAgIGlzSW5mb09uID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW5mb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpbmZvQnV0dG9uVG9nZ2xlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRBdWRpb0NvbmZpZygpO1xuICAgIGFkZEluZm9CdXR0b25Db25maWcoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgRXZlbnRMaXN0ZW5lclRvQ29sdW1ucyxcbiAgICBjbGVhbkV4aXN0aW5nR2FtZWJvYXJkRWxlbWVudHMsXG4gICAgZGlzcGxheUdhbWVib2FyZERPTSxcbiAgICAvLyBkaXNwbGF5Um91bmRTdGF0dXNNZXNzYWdlLFxuICAgIGRpc3BsYXlXaW5uaW5nU3RhdHVzTWVzc2FnZSxcbiAgICBkaXNwbGF5QWN0aXZlUGxheWVyRm9jdXMsXG4gICAgYWRkRXZlbnRMaXN0ZW5lclRvTmV3R2FtZUJ1dHRvbixcbiAgICBlbmRHYW1lRE9NLFxuICAgIGFkZEhlYWRlckNvbmZpZyxcbiAgfTtcbn1cbiIsImltcG9ydCB7IENyZWF0ZU1hdGVyaWFsc0RPTSB9IGZyb20gXCIuL2RvbV9tYXRlcmlhbHMuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgY29uc3Qgcm93cyA9IDY7XG4gIGNvbnN0IGNvbHVtbnMgPSA3O1xuICBjb25zdCBib2FyZCA9IFtdO1xuICBjb25zdCBkb21DcmVhdG9yID0gQ3JlYXRlTWF0ZXJpYWxzRE9NKCk7XG5cbiAgZnVuY3Rpb24gZ2V0Qm9hcmQoKSB7XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9XG4gIGZ1bmN0aW9uIGdldERvbUNyZWF0b3IoKSB7XG4gICAgcmV0dXJuIGRvbUNyZWF0b3I7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmRHcmlkcygpIHtcbiAgICBib2FyZC5sZW5ndGggPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5zOyBpKyspIHtcbiAgICAgIGJvYXJkW2ldID0gW107XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93czsgaisrKSB7XG4gICAgICAgIGJvYXJkW2ldLnB1c2goQ2VsbCgwKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQ2VsbChzdGF0dXMpIHtcbiAgICBjb25zdCBpc1dpbm5pbmdDZWxsID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBhZGRUb2tlbihwbGF5ZXIpIHtcbiAgICAgIHN0YXR1cyA9IHBsYXllcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzKCkge1xuICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdGF0dXMsIGlzV2lubmluZ0NlbGwsIGFkZFRva2VuLCBnZXRTdGF0dXMgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdoaWNoQ2VsbElzQXZhaWxhYmxlKGNvbHVtbikge1xuICAgIC8vcmV0dXJucyB3aGljaCBjZWxsIG9uIHRoZSBzZWxlY3RlZCBjb2x1bW4gaXMgYXZhaWxhYmxlXG5cbiAgICBpZiAoY29sdW1uWzBdLnN0YXR1cyAhPT0gMCkge1xuICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGNvbHVtbiBpcyBmdWxsXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSByb3dzIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmIChjb2x1bW5baV0uc3RhdHVzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBjb2x1bW5baV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcFRva2VuKGNvbHVtbiwgcGxheWVyVG9rZW4pIHtcbiAgICBsZXQgbXlDb2x1bW4gPSBjb2x1bW47XG5cbiAgICBsZXQgc2VsZWN0ZWRDZWxsID0gd2hpY2hDZWxsSXNBdmFpbGFibGUobXlDb2x1bW4pO1xuXG4gICAgaWYgKHNlbGVjdGVkQ2VsbCA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxlY3RlZENlbGwuc3RhdHVzID0gcGxheWVyVG9rZW47XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5R2FtZWJvYXJkKCkge1xuICAgIGRvbUNyZWF0b3IuY2xlYW5FeGlzdGluZ0dhbWVib2FyZEVsZW1lbnRzKCk7XG4gICAgZG9tQ3JlYXRvci5kaXNwbGF5R2FtZWJvYXJkRE9NKCk7XG4gICAgZG9tQ3JlYXRvci5FdmVudExpc3RlbmVyVG9Db2x1bW5zKCkuYWRkKCk7XG4gICAgZG9tQ3JlYXRvci5hZGRFdmVudExpc3RlbmVyVG9OZXdHYW1lQnV0dG9uKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0dhbWVPdmVyKHBsYXllcikge1xuICAgIC8vQ2hlY2sgZHJhd1xuICAgIGZ1bmN0aW9uIGlzRHJhdygpIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGNvbHVtbnM7IGNvbCsrKSB7XG4gICAgICAgIGlmIChib2FyZFtjb2xdWzBdLnN0YXR1cyA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChpc0RyYXcoKSkge1xuICAgICAgcmV0dXJuIFwiZHJhd1wiO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGNvbHVtbnNcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBjb2x1bW5zOyBjb2wrKykge1xuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcm93cyAtIDM7IHJvdysrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbF1bcm93XS5zdGF0dXMgPT0gcGxheWVyLnRva2VuICYmXG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2xdW3JvdyArIDFdLnN0YXR1cyA9PSBwbGF5ZXIudG9rZW4gJiZcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbF1bcm93ICsgMl0uc3RhdHVzID09IHBsYXllci50b2tlbiAmJlxuICAgICAgICAgIGdldEJvYXJkKClbY29sXVtyb3cgKyAzXS5zdGF0dXMgPT0gcGxheWVyLnRva2VuXG4gICAgICAgICkge1xuICAgICAgICAgIGdldEJvYXJkKClbY29sXVtyb3ddLmlzV2lubmluZ0NlbGwgPSB0cnVlO1xuICAgICAgICAgIGdldEJvYXJkKClbY29sXVtyb3cgKyAxXS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbF1bcm93ICsgMl0uaXNXaW5uaW5nQ2VsbCA9IHRydWU7XG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2xdW3JvdyArIDNdLmlzV2lubmluZ0NlbGwgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgcm93c1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHJvd3M7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBjb2x1bW5zIC0gMzsgY29sKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGdldEJvYXJkKClbY29sXVtyb3ddLnN0YXR1cyA9PSBwbGF5ZXIudG9rZW4gJiZcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCArIDFdW3Jvd10uc3RhdHVzID09IHBsYXllci50b2tlbiAmJlxuICAgICAgICAgIGdldEJvYXJkKClbY29sICsgMl1bcm93XS5zdGF0dXMgPT0gcGxheWVyLnRva2VuICYmXG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgKyAzXVtyb3ddLnN0YXR1cyA9PSBwbGF5ZXIudG9rZW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2xdW3Jvd10uaXNXaW5uaW5nQ2VsbCA9IHRydWU7XG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgKyAxXVtyb3ddLmlzV2lubmluZ0NlbGwgPSB0cnVlO1xuICAgICAgICAgIGdldEJvYXJkKClbY29sICsgMl1bcm93XS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCArIDNdW3Jvd10uaXNXaW5uaW5nQ2VsbCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayBkaWFnb25hbCAodG9wIGxlZnQgdG8gYm90dG9tIHJpZ2h0KVxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHJvd3MgLSAzOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgY29sdW1ucyAtIDM7IGNvbCsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbF1bcm93XS5zdGF0dXMgPT0gcGxheWVyLnRva2VuICYmXG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgKyAxXVtyb3cgKyAxXS5zdGF0dXMgPT0gcGxheWVyLnRva2VuICYmXG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgKyAyXVtyb3cgKyAyXS5zdGF0dXMgPT0gcGxheWVyLnRva2VuICYmXG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgKyAzXVtyb3cgKyAzXS5zdGF0dXMgPT0gcGxheWVyLnRva2VuXG4gICAgICAgICkge1xuICAgICAgICAgIGdldEJvYXJkKClbY29sXVtyb3ddLmlzV2lubmluZ0NlbGwgPSB0cnVlO1xuICAgICAgICAgIGdldEJvYXJkKClbY29sICsgMV1bcm93ICsgMV0uaXNXaW5uaW5nQ2VsbCA9IHRydWU7XG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgKyAyXVtyb3cgKyAyXS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCArIDNdW3JvdyArIDNdLmlzV2lubmluZ0NlbGwgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZGlhZ29uYWwgKHRvcCByaWdodCB0byBib3R0b20gbGVmdClcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByb3dzIC0gMzsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDM7IGNvbCA8IGNvbHVtbnM7IGNvbCsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbF1bcm93XS5zdGF0dXMgPT0gcGxheWVyLnRva2VuICYmXG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgLSAxXVtyb3cgKyAxXS5zdGF0dXMgPT0gcGxheWVyLnRva2VuICYmXG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgLSAyXVtyb3cgKyAyXS5zdGF0dXMgPT0gcGxheWVyLnRva2VuICYmXG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgLSAzXVtyb3cgKyAzXS5zdGF0dXMgPT0gcGxheWVyLnRva2VuXG4gICAgICAgICkge1xuICAgICAgICAgIGdldEJvYXJkKClbY29sXVtyb3ddLmlzV2lubmluZ0NlbGwgPSB0cnVlO1xuICAgICAgICAgIGdldEJvYXJkKClbY29sIC0gMV1bcm93ICsgMV0uaXNXaW5uaW5nQ2VsbCA9IHRydWU7XG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgLSAyXVtyb3cgKyAyXS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCAtIDNdW3JvdyArIDNdLmlzV2lubmluZ0NlbGwgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlOyAvLyBubyB3aW4gZm91bmRcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLy8gYm9hcmQsXG4gICAgZ2V0RG9tQ3JlYXRvcixcbiAgICBnZXRCb2FyZCxcbiAgICBjcmVhdGVHYW1lYm9hcmRHcmlkcyxcbiAgICBkaXNwbGF5R2FtZWJvYXJkLFxuICAgIGRyb3BUb2tlbixcbiAgICB3aGljaENlbGxJc0F2YWlsYWJsZSxcbiAgICBjaGVja0dhbWVPdmVyLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkLmpzXCI7XG5pbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVDb250cm9sbGVyKCkge1xuICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTsgLy8gZG9uJ3QgY2hhbmdlIHRoZSBuYW1lXG4gIGdhbWVib2FyZC5nZXREb21DcmVhdG9yKCkuYWRkSGVhZGVyQ29uZmlnKCk7XG5cbiAgY29uc3QgcGxheWVyT25lTmFtZSA9IFwiUGxheWVyIFJlZFwiO1xuICBjb25zdCBwbGF5ZXJUd29OYW1lID0gXCJQbGF5ZXIgQmx1ZVwiO1xuXG4gIGNvbnN0IHBsYXllcnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogcGxheWVyT25lTmFtZSxcbiAgICAgIHRva2VuOiBcIjFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IHBsYXllclR3b05hbWUsXG4gICAgICB0b2tlbjogXCIyXCIsXG4gICAgfSxcbiAgXTtcbiAgZnVuY3Rpb24gZ2V0UGxheWVycygpIHtcbiAgICByZXR1cm4gcGxheWVycztcbiAgfVxuXG4gIGxldCBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdO1xuXG4gIGZ1bmN0aW9uIGdldEFjdGl2ZVBsYXllcigpIHtcbiAgICByZXR1cm4gYWN0aXZlUGxheWVyO1xuICB9XG5cbiAgZnVuY3Rpb24gc3dpdGNoUGxheWVyVHVybigpIHtcbiAgICBhY3RpdmVQbGF5ZXIgPSBhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnNbMF0gPyBwbGF5ZXJzWzFdIDogcGxheWVyc1swXTtcbiAgICBjb25zdCBwbGF5Um91bmRMb2dNZXNzYWdlID0gYCR7XG4gICAgICBnZXRBY3RpdmVQbGF5ZXIoKS5uYW1lXG4gICAgfSBpcyBwbGF5aW5nIGhpcyB0dXJuLi4uYDtcbiAgICBnYW1lYm9hcmQuZ2V0RG9tQ3JlYXRvcigpLmRpc3BsYXlBY3RpdmVQbGF5ZXJGb2N1cyhhY3RpdmVQbGF5ZXIpO1xuICAgIC8vIGdhbWVib2FyZFxuICAgIC8vICAgLmdldERvbUNyZWF0b3IoKVxuICAgIC8vICAgLmRpc3BsYXlSb3VuZFN0YXR1c01lc3NhZ2UoYWN0aXZlUGxheWVyLCBwbGF5Um91bmRMb2dNZXNzYWdlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0TmV3R2FtZSgpIHtcbiAgICBjb25zdCBkZWZhdWx0V2lubmluZ01lc3NhZ2UgPSBcIldpbm5pbmcgc3RhdHVzXCI7XG4gICAgYWN0aXZlUGxheWVyID0gcGxheWVyc1sxXTtcbiAgICBzd2l0Y2hQbGF5ZXJUdXJuKCk7XG4gICAgZ2FtZWJvYXJkLmNyZWF0ZUdhbWVib2FyZEdyaWRzKCk7XG4gICAgZ2FtZWJvYXJkLmRpc3BsYXlHYW1lYm9hcmQoKTtcbiAgICBnYW1lYm9hcmRcbiAgICAgIC5nZXREb21DcmVhdG9yKClcbiAgICAgIC5kaXNwbGF5V2lubmluZ1N0YXR1c01lc3NhZ2UoZGVmYXVsdFdpbm5pbmdNZXNzYWdlKTtcbiAgICBnYW1lYm9hcmQuZ2V0RG9tQ3JlYXRvcigpLmVuZEdhbWVET00oKS5yZW1vdmUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZFRoZUdhbWUod2lubmluZ1N0YXR1cykge1xuICAgIGNvbnN0IGRyYXdNZXNzYWdlID0gXCJJdCBoYXMgYmVlbiBhIERSQVdcIjtcbiAgICBjb25zdCB3aW5uaW5nTWVzc2FnZSA9IGAke2FjdGl2ZVBsYXllci5uYW1lfSBoYXMgV09OYDtcblxuICAgIGdhbWVib2FyZC5nZXREb21DcmVhdG9yKCkuRXZlbnRMaXN0ZW5lclRvQ29sdW1ucygpLnJlbW92ZSgpO1xuICAgIGlmICh3aW5uaW5nU3RhdHVzID09PSBcImRyYXdcIikge1xuICAgICAgZ2FtZWJvYXJkLmdldERvbUNyZWF0b3IoKS5kaXNwbGF5V2lubmluZ1N0YXR1c01lc3NhZ2UoZHJhd01lc3NhZ2UpO1xuICAgIH0gZWxzZSBpZiAod2lubmluZ1N0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgZ2FtZWJvYXJkLmdldERvbUNyZWF0b3IoKS5kaXNwbGF5V2lubmluZ1N0YXR1c01lc3NhZ2Uod2lubmluZ01lc3NhZ2UpO1xuICAgIH1cbiAgICBnYW1lYm9hcmQuZ2V0RG9tQ3JlYXRvcigpLmVuZEdhbWVET00oKS5hZGQoKTtcbiAgICBnYW1lYm9hcmQuZGlzcGxheUdhbWVib2FyZCgpO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gZGlzcGxheU5ld1JvdW5kKCkge1xuICAvLyAgIGdhbWVib2FyZC5kaXNwbGF5R2FtZWJvYXJkKCk7XG4gIC8vICAgY29uc29sZS5sb2coYGl0IGlzICR7Z2V0QWN0aXZlUGxheWVyKCkubmFtZX3CtHMgdHVybmApO1xuICAvLyB9XG5cbiAgZnVuY3Rpb24gcGxheVJvdW5kKGNvbHVtbikge1xuICAgIGlmIChnYW1lYm9hcmQud2hpY2hDZWxsSXNBdmFpbGFibGUoY29sdW1uKSAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGdhbWVib2FyZC5kcm9wVG9rZW4oY29sdW1uLCBnZXRBY3RpdmVQbGF5ZXIoKS50b2tlbik7XG4gICAgICBnYW1lYm9hcmQuZGlzcGxheUdhbWVib2FyZCgpO1xuICAgICAgY29uc3Qgd2lubmluZ1N0YXR1cyA9IGdhbWVib2FyZC5jaGVja0dhbWVPdmVyKGFjdGl2ZVBsYXllcik7XG5cbiAgICAgIGlmICh3aW5uaW5nU3RhdHVzICE9PSBmYWxzZSkge1xuICAgICAgICBlbmRUaGVHYW1lKHdpbm5pbmdTdGF0dXMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzd2l0Y2hQbGF5ZXJUdXJuKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnYW1lYm9hcmQsXG4gICAgZ2V0UGxheWVycyxcbiAgICBzd2l0Y2hQbGF5ZXJUdXJuLFxuICAgIC8vIGRpc3BsYXlOZXdSb3VuZCxcbiAgICBnZXRBY3RpdmVQbGF5ZXIsXG4gICAgcGxheVJvdW5kLFxuICAgIHN0YXJ0TmV3R2FtZSxcbiAgfTtcbn1cbiIsImltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5jc3NcIjtcbmltcG9ydCBnaXRMb2dvIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2dpdGh1Yi02NC5wbmdcIjtcbi8vIGltcG9ydCB7IENyZWF0ZU1hdGVyaWFsc0RPTSB9IGZyb20gXCIuL2RvbV9tYXRlcmlhbHMuanNcIjtcbi8vIGltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZC5qc1wiO1xuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9nYW1lY29udHJvbGxlci5qc1wiO1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IEdhbWVDb250cm9sbGVyKCk7IC8vIGRvbid0IGNoYW5nZSB0aGUgbmFtZVxuZ2FtZS5zdGFydE5ld0dhbWUoKTtcblxuY29uc29sZS5sb2coZ2FtZS5nYW1lYm9hcmQuZ2V0Qm9hcmQoKSk7XG5jb25zb2xlLmxvZyhnYW1lLmdhbWVib2FyZC5nZXRCb2FyZCgpWzBdKTtcbmNvbnNvbGUubG9nKGdhbWUuZ2FtZWJvYXJkLmdldEJvYXJkKClbMF1bMF0pO1xuXG4vLyBnYW1lLnBsYXlSb3VuZChnYW1lLmdhbWVib2FyZC5nZXRCb2FyZCgpWzBdKTtcbi8vIGdhbWUuc3RhcnROZXdHYW1lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=