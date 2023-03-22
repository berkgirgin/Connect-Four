"use strict";
(self["webpackChunkconnect_four"] = self["webpackChunkconnect_four"] || []).push([["gameboard"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/javascript/gameboard.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bmVjdC1mb3VyLy4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vY29ubmVjdC1mb3VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jb25uZWN0LWZvdXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzYzNDkiLCJ3ZWJwYWNrOi8vY29ubmVjdC1mb3VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY29ubmVjdC1mb3VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jb25uZWN0LWZvdXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jb25uZWN0LWZvdXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jb25uZWN0LWZvdXIvLi9zcmMvamF2YXNjcmlwdC9kb21fbWF0ZXJpYWxzLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZm91ci8uL3NyYy9qYXZhc2NyaXB0L2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9jb25uZWN0LWZvdXIvLi9zcmMvamF2YXNjcmlwdC9nYW1lY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9jb25uZWN0LWZvdXIvLi9zcmMvamF2YXNjcmlwdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL21hdHJpeC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3JlZF9waWxsX2JsdWVfcGlsbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIm1hdHJpeFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLW1haW4tY29udGVudC1tYXJnaW46IDFyZW07XFxuICAtLWJvcmRlci1yYWRpdXM6IDIzcHg7XFxuICAtLWJhY2tncm91bmQtY29sb3ItcG9wLXVwOiBicm93bjtcXG4gIC0tY29sb3Jfd2hpdGVfY3VzdG9tOiAjZThlNmUzO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWFybXktZ3JlZW4tbGlnaHQ6ICNiNWI5YTQ7XFxuICAtLWJhY2tncm91bmQtY29sb3ItYXJteS1ncmVlbi1tZWRpdW06ICNhM2E3OGQ7XFxuICAtLWJhY2tncm91bmQtY29sb3ItYXJteS1ncmVlbi1kYXJrOiAjNDI0NTNhO1xcbiAgLS1vdmVybGF5LWJsYWNrOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuXFxuICAtLXBsYXllci0xLWNvbG9yOiAjZGQ0MTI0O1xcbiAgLS1wbGF5ZXItMi1jb2xvcjogIzAwNjZiMjtcXG4gIC0tcm93LWNlbGwtYmFja2dyb3VuZC1jb2xvcjogI2QxZmFlNTtcXG4gIC0td2lubmluZy1jZWxscy1jb2xvcjogcHVycGxlO1xcbiAgLS1jb2x1bW4tcGFkZGluZzogMXJlbTtcXG4gIC0tZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcXG5cXG4gIC0tbmVvbi10ZXh0LXNoYWRvdy1oaWdoOiAwIDAgN3B4ICNmZmYsIDAgMCAxMHB4ICNmZmYsIDAgMCAyMXB4ICNmZmYsXFxuICAgIDAgMCA0MnB4ICMwZmEsIDAgMCA4MnB4ICMwZmEsIDAgMCA5MnB4ICMwZmEsIDAgMCAxMDJweCAjMGZhLCAwIDAgMTUxcHggIzBmYTtcXG4gIC0tbmVvbi10ZXh0LXNoYWRvdy1tZWRpdW06IDAgMCAzLjRweCAjZmZmLCAwIDAgNXB4ICNmZmYsIDAgMCAxMC41cHggI2ZmZixcXG4gICAgMCAwIDIxcHggIzBmYSwgMCAwIDQxcHggIzBmYSwgMCAwIDQ2cHggIzBmYSwgMCAwIDUxcHggIzBmYSwgMCAwIDc1LjVweCAjMGZhO1xcbiAgLS1uZW9uLXRleHQtc2hhZG93LWxvdzogMCAwIDEuN3B4ICNmZmYsIDAgMCAyLjVweCAjZmZmLCAwIDAgNS4yNXB4ICNmZmYsXFxuICAgIDAgMCAxMC41cHggIzBmYSwgMCAwIDIwLjVweCAjMGZhLCAwIDAgMjNweCAjMGZhLCAwIDAgMjUuNXB4ICMwZmEsXFxuICAgIDAgMCAzNy43NXB4ICMwZmE7XFxuICAtLW5lb24tdGV4dC1zaGFkb3ctdmVyeS1sb3c6IDAgMCAwLjVweCAjZmZmLCAwIDAgMC42cHggI2ZmZiwgMCAwIDEuM3B4ICNmZmYsXFxuICAgIDAgMCAyLjVweCAjMGZhLCAwIDAgNXB4ICMwZmEsIDAgMCA2cHggIzBmYSwgMCAwIDYuNXB4ICMwZmEsIDAgMCAzNy43NXB4ICMwZmE7XFxuICAtLXBpbmstbmVvbi10ZXh0LXNoYWRvdy1oaWdoOiAwIDAgNHB4ICNmZmYsIDAgMCAxMHB4ICNmZmYsIDAgMCAxOHB4ICNmZmYsXFxuICAgIDAgMCAzOHB4ICNmMDksIDAgMCA3M3B4ICNmMDksIDAgMCA4MHB4ICNmMDksIDAgMCA5NHB4ICNmMDksIDAgMCAxNDBweCAjZjA5O1xcbiAgLS1waW5rLW5lb24tdGV4dC1zaGFkb3ctbG93OiAwIDAgMXB4ICNmZmYsIDAgMCAyLjVweCAjZmZmLCAwIDAgNC41cHggI2ZmZixcXG4gICAgMCAwIDkuNXB4ICNmMDksIDAgMCAxOC4yNXB4ICNmMDksIDAgMCAyMHB4ICNmMDksIDAgMCAyMy41cHggI2YwOSxcXG4gICAgMCAwIDM1cHggI2YwOTtcXG5cXG4gIC0tYmx1ZS1uZW9uLXRleHQtc2hhZG93OiAwIDAgNnB4IHJnYmEoMjAyLCAyMjgsIDIyNSwgMC45MiksXFxuICAgIDAgMCAzMHB4IHJnYmEoMjAyLCAyMjgsIDIyNSwgMC4zNCksIDAgMCAxMnB4IHJnYmEoMzAsIDEzMiwgMjQyLCAwLjUyKSxcXG4gICAgMCAwIDIxcHggcmdiYSgzMCwgMTMyLCAyNDIsIDAuOTIpLCAwIDAgMzRweCByZ2JhKDMwLCAxMzIsIDI0MiwgMC43OCksXFxuICAgIDAgMCA1NHB4IHJnYmEoMzAsIDEzMiwgMjQyLCAwLjkyKTtcXG5cXG4gIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xcbn1cXG4uYmFja2dyb3VuZF92aWRlbyB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcl93aGl0ZV9jdXN0b20pO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1zaGFkb3c6IHZhcigtLWJsdWUtbmVvbi10ZXh0LXNoYWRvdy1sb3cpO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW5fY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIHBhZGRpbmc6IDJyZW0gNHJlbTsgKi9cXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLyogKioqKioqICovXFxuLyogaGVhZGVyICovXFxuLyogKioqKioqICovXFxuXFxuLmhlYWRlcl9tYWluX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbSA0cmVtO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdmVybGF5LWJsYWNrKTtcXG5cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTsgKi9cXG59XFxuXFxuLmhlYWRlcl9sZWZ0LFxcbi5oZWFkZXJfcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLmhlYWRlcl9taWQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtYXRyaXhcXFwiO1xcbn1cXG4uaGVhZGVyX21pZCAuaGVhZGVyX2dhbWVfbmFtZSB7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcbi5uZXdfZ2FtZV9idXR0b24gLmljb24ge1xcbiAgc2NhbGU6IDEuMjtcXG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcl93aGl0ZV9jdXN0b20pO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcmVtIDByZW0gMXJlbSBibGFjaztcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuYnV0dG9uLm5ld19nYW1lX2J1dHRvbiB7XFxuICB3aWR0aDogMjQwcHg7XFxuICB6LWluZGV4OiA0O1xcbn1cXG5idXR0b24ubmV3X2dhbWVfYnV0dG9uLmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiB2YXIoLS1waW5rLW5lb24tdGV4dC1zaGFkb3ctbG93KTtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJsdWUtbmVvbi10ZXh0LXNoYWRvdyk7XFxufVxcbi8qICoqKioqKiAqL1xcbi8qICoqKioqKiAqL1xcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKiogKi9cXG4vKiBNYWluIENvbnRlbnQgQ29udGFpbmVyICovXFxuLyogKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi8qIC5jb250ZW50X21haW5fY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMnJlbSA0cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGZsZXg6IDE7XFxufSAqL1xcblxcbi5jb250ZW50X2NvbnRhaW5lciB7XFxuICBtYXJnaW46IDJyZW0gNHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBmbGV4OiAxO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5wbGF5ZXJfMV9jb250YWluZXIsXFxuLnBsYXllcl8yX2NvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IHZhcigtLWJsdWUtbmVvbi10ZXh0LXNoYWRvdyk7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4ucGxheWVyXzFfbmFtZSxcXG4ucGxheWVyXzJfbmFtZSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgLyogYm9yZGVyOiAycHggcmVkIHNvbGlkOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcXG59XFxuLnBsYXllcl8xX25hbWUuYWN0aXZlLFxcbi5wbGF5ZXJfMl9uYW1lLmFjdGl2ZSB7XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tcGluay1uZW9uLXRleHQtc2hhZG93LWxvdyk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1waW5rLW5lb24tdGV4dC1zaGFkb3ctbG93KTtcXG59XFxuXFxuLnBsYXllcl8xX3N0YXR1c19yb3VuZCxcXG4ucGxheWVyXzJfc3RhdHVzX3JvdW5kIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgLyogYm94LXNoYWRvdzogaW5zZXQgMHJlbSAwcmVtIDU1cmVtIGJsYWNrOyAqL1xcbn1cXG5cXG4vKiBjdXR0aW5nIHRoZSBwaWxscyAuc3ZnIGZpbGUgaW4gaGFsZiBhbmQgdXNlIHRoZW0gb24gYm90aCBzaWRlZCAqL1xcbi5wbGF5ZXJfMV9pbWdfY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XFxufVxcbi5wbGF5ZXJfMV9pbWdfY29udGFpbmVyOm50aC1jaGlsZCgyKSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXG59XFxuLnBsYXllcl8yX2ltZ19jb250YWluZXIge1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXG59XFxuLnBsYXllcl8yX2ltZ19jb250YWluZXI6bnRoLWNoaWxkKDIpIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVib2FyZF9jb250YWluZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAvKiB3aWR0aDogbWlubWF4KDEwMCwgNjB2dyk7ICovXFxufVxcblxcbi8qIGNvbHVtbiBhbmQgcm93IHNldHRpbmdzICovXFxuLyogKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4uY29sdW1uIHtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgLyogYm9yZGVyOiAycHggcmVkIHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247ICovXFxuICBwYWRkaW5nOiAwIGNhbGModmFyKC0tY29sdW1uLXBhZGRpbmcpIC8gMik7XFxuXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5jb2x1bW46aG92ZXIge1xcbiAgc2NhbGU6IDEuMDE7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNjBweCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWFybXktZ3JlZW4tbGlnaHQpO1xcbn1cXG5cXG4ucm93IHtcXG4gIGJvcmRlcjogNnB4IGJsYWNrIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMTJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3ctY2VsbC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDByZW0gMHJlbSAxLjVyZW0gYmxhY2s7XFxuICBwYWRkaW5nOiB2YXIoLS1jb2x1bW4tcGFkZGluZyk7XFxuICBtYXJnaW46IGNhbGModmFyKC0tY29sdW1uLXBhZGRpbmcpIC8gNSkgMDtcXG5cXG4gIGhlaWdodDogMS42cmVtO1xcbiAgd2lkdGg6IDEuNnJlbTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiB0aGlzIGlzIGltcG9ydGFudCBmb3IgdGhlIGV2ZW50IGNhcHR1cmUgb24gY2xpY2sgKi9cXG59XFxuLyogaGVyZSB5b3UgY2FuIGFkZCBhbmltYXRpb24gZm9yIHdpbm5pbmcgY2VsbHMgKi9cXG4ucm93Lndpbm5pbmdfcm93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiA0O1xcbiAgYm94LXNoYWRvdzogdmFyKC0tbmVvbi10ZXh0LXNoYWRvdy12ZXJ5LWxvdyk7XFxuICBhbmltYXRpb246IGZsaWNrZXIgMS41cyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcbi5yb3c6aG92ZXIge1xcbiAgc2NhbGU6IDEuMTtcXG59XFxuLyogKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqICovXFxuLyogKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi8qICoqKioqKioqKioqKioqKioqKiogKi9cXG4vKiBvdmVybGF5IGFuZCBwb3AtdXBzICovXFxuLyogKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi5vdmVybGF5X2Zvcl9wb3BfdXBzIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLWRlZmF1bHQtdHJhbnNpdGlvbi1kdXJhdGlvbik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdmVybGF5LWJsYWNrKTtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHotaW5kZXg6IDM7XFxufVxcbi5vdmVybGF5X2Zvcl9wb3BfdXBzLmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLmdhbWVvdmVyX3BvcF91cCB7XFxuICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWF0cml4XFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcl93aGl0ZV9jdXN0b20pO1xcbiAgLyogYm9yZGVyOiAycHggdmFyKC0tY29sb3Jfd2hpdGVfY3VzdG9tKSBzb2xpZDsgKi9cXG4gIG9wYWNpdHk6IDA7XFxuICB6LWluZGV4OiA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1uZW9uLXRleHQtc2hhZG93LW1lZGl1bSk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1uZW9uLXRleHQtc2hhZG93LXZlcnktbG93KTtcXG5cXG4gIC8qIGJveC1zaGFkb3c6IGluc2V0IDFyZW0gMXJlbSA0cmVtIHdoaXRlOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBwYWRkaW5nOiAwLjdyZW07XFxufVxcbi5nYW1lb3Zlcl9wb3BfdXAuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5nYW1lb3Zlcl9wb3BfdXAgLnN0YXR1c193aW5uaW5nIHtcXG59XFxuXFxuLyogKioqKioqKioqKioqKioqKioqKiAqL1xcbi8qICoqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4vKiAqKioqKiogKi9cXG4vKiBmb290ZXIgKi9cXG4vKiAqKioqKiogKi9cXG5cXG5mb290ZXIge1xcbiAgLyogcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1hcm15LWdyZWVuLWRhcmspO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yX3doaXRlX2N1c3RvbSk7XFxuICB6LWluZGV4OiAyO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmZvb3RlciBpbWcge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgc2NhbGU6IDEuMjtcXG59XFxuXFxuZm9vdGVyIGltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi8qICoqKioqKiAqL1xcbi8qICoqKioqKiAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9z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QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyw0Q0FBNEM7O0VBRTVDLDRDQUE0QztFQUM1QyxtQ0FBbUM7RUFDbkMsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEIsd0JBQXdCOztBQUV4QixXQUFXO0FBQ1gsV0FBVztBQUNYLFdBQVc7O0FBRVg7RUFDRTs7Y0FFWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6Qyx5REFBeUQ7RUFDekQsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBLFdBQVc7QUFDWCxXQUFXXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtYXRyaXhcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9tYXRyaXgudHRmXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLW1haW4tY29udGVudC1tYXJnaW46IDFyZW07XFxuICAtLWJvcmRlci1yYWRpdXM6IDIzcHg7XFxuICAtLWJhY2tncm91bmQtY29sb3ItcG9wLXVwOiBicm93bjtcXG4gIC0tY29sb3Jfd2hpdGVfY3VzdG9tOiAjZThlNmUzO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWFybXktZ3JlZW4tbGlnaHQ6ICNiNWI5YTQ7XFxuICAtLWJhY2tncm91bmQtY29sb3ItYXJteS1ncmVlbi1tZWRpdW06ICNhM2E3OGQ7XFxuICAtLWJhY2tncm91bmQtY29sb3ItYXJteS1ncmVlbi1kYXJrOiAjNDI0NTNhO1xcbiAgLS1vdmVybGF5LWJsYWNrOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuXFxuICAtLXBsYXllci0xLWNvbG9yOiAjZGQ0MTI0O1xcbiAgLS1wbGF5ZXItMi1jb2xvcjogIzAwNjZiMjtcXG4gIC0tcm93LWNlbGwtYmFja2dyb3VuZC1jb2xvcjogI2QxZmFlNTtcXG4gIC0td2lubmluZy1jZWxscy1jb2xvcjogcHVycGxlO1xcbiAgLS1jb2x1bW4tcGFkZGluZzogMXJlbTtcXG4gIC0tZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcXG5cXG4gIC0tbmVvbi10ZXh0LXNoYWRvdy1oaWdoOiAwIDAgN3B4ICNmZmYsIDAgMCAxMHB4ICNmZmYsIDAgMCAyMXB4ICNmZmYsXFxuICAgIDAgMCA0MnB4ICMwZmEsIDAgMCA4MnB4ICMwZmEsIDAgMCA5MnB4ICMwZmEsIDAgMCAxMDJweCAjMGZhLCAwIDAgMTUxcHggIzBmYTtcXG4gIC0tbmVvbi10ZXh0LXNoYWRvdy1tZWRpdW06IDAgMCAzLjRweCAjZmZmLCAwIDAgNXB4ICNmZmYsIDAgMCAxMC41cHggI2ZmZixcXG4gICAgMCAwIDIxcHggIzBmYSwgMCAwIDQxcHggIzBmYSwgMCAwIDQ2cHggIzBmYSwgMCAwIDUxcHggIzBmYSwgMCAwIDc1LjVweCAjMGZhO1xcbiAgLS1uZW9uLXRleHQtc2hhZG93LWxvdzogMCAwIDEuN3B4ICNmZmYsIDAgMCAyLjVweCAjZmZmLCAwIDAgNS4yNXB4ICNmZmYsXFxuICAgIDAgMCAxMC41cHggIzBmYSwgMCAwIDIwLjVweCAjMGZhLCAwIDAgMjNweCAjMGZhLCAwIDAgMjUuNXB4ICMwZmEsXFxuICAgIDAgMCAzNy43NXB4ICMwZmE7XFxuICAtLW5lb24tdGV4dC1zaGFkb3ctdmVyeS1sb3c6IDAgMCAwLjVweCAjZmZmLCAwIDAgMC42cHggI2ZmZiwgMCAwIDEuM3B4ICNmZmYsXFxuICAgIDAgMCAyLjVweCAjMGZhLCAwIDAgNXB4ICMwZmEsIDAgMCA2cHggIzBmYSwgMCAwIDYuNXB4ICMwZmEsIDAgMCAzNy43NXB4ICMwZmE7XFxuICAtLXBpbmstbmVvbi10ZXh0LXNoYWRvdy1oaWdoOiAwIDAgNHB4ICNmZmYsIDAgMCAxMHB4ICNmZmYsIDAgMCAxOHB4ICNmZmYsXFxuICAgIDAgMCAzOHB4ICNmMDksIDAgMCA3M3B4ICNmMDksIDAgMCA4MHB4ICNmMDksIDAgMCA5NHB4ICNmMDksIDAgMCAxNDBweCAjZjA5O1xcbiAgLS1waW5rLW5lb24tdGV4dC1zaGFkb3ctbG93OiAwIDAgMXB4ICNmZmYsIDAgMCAyLjVweCAjZmZmLCAwIDAgNC41cHggI2ZmZixcXG4gICAgMCAwIDkuNXB4ICNmMDksIDAgMCAxOC4yNXB4ICNmMDksIDAgMCAyMHB4ICNmMDksIDAgMCAyMy41cHggI2YwOSxcXG4gICAgMCAwIDM1cHggI2YwOTtcXG5cXG4gIC0tYmx1ZS1uZW9uLXRleHQtc2hhZG93OiAwIDAgNnB4IHJnYmEoMjAyLCAyMjgsIDIyNSwgMC45MiksXFxuICAgIDAgMCAzMHB4IHJnYmEoMjAyLCAyMjgsIDIyNSwgMC4zNCksIDAgMCAxMnB4IHJnYmEoMzAsIDEzMiwgMjQyLCAwLjUyKSxcXG4gICAgMCAwIDIxcHggcmdiYSgzMCwgMTMyLCAyNDIsIDAuOTIpLCAwIDAgMzRweCByZ2JhKDMwLCAxMzIsIDI0MiwgMC43OCksXFxuICAgIDAgMCA1NHB4IHJnYmEoMzAsIDEzMiwgMjQyLCAwLjkyKTtcXG5cXG4gIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xcbn1cXG4uYmFja2dyb3VuZF92aWRlbyB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcl93aGl0ZV9jdXN0b20pO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1zaGFkb3c6IHZhcigtLWJsdWUtbmVvbi10ZXh0LXNoYWRvdy1sb3cpO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW5fY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIHBhZGRpbmc6IDJyZW0gNHJlbTsgKi9cXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLyogKioqKioqICovXFxuLyogaGVhZGVyICovXFxuLyogKioqKioqICovXFxuXFxuLmhlYWRlcl9tYWluX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbSA0cmVtO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdmVybGF5LWJsYWNrKTtcXG5cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTsgKi9cXG59XFxuXFxuLmhlYWRlcl9sZWZ0LFxcbi5oZWFkZXJfcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLmhlYWRlcl9taWQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtYXRyaXhcXFwiO1xcbn1cXG4uaGVhZGVyX21pZCAuaGVhZGVyX2dhbWVfbmFtZSB7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcbi5uZXdfZ2FtZV9idXR0b24gLmljb24ge1xcbiAgc2NhbGU6IDEuMjtcXG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcl93aGl0ZV9jdXN0b20pO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcmVtIDByZW0gMXJlbSBibGFjaztcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuYnV0dG9uLm5ld19nYW1lX2J1dHRvbiB7XFxuICB3aWR0aDogMjQwcHg7XFxuICB6LWluZGV4OiA0O1xcbn1cXG5idXR0b24ubmV3X2dhbWVfYnV0dG9uLmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiB2YXIoLS1waW5rLW5lb24tdGV4dC1zaGFkb3ctbG93KTtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJsdWUtbmVvbi10ZXh0LXNoYWRvdyk7XFxufVxcbi8qICoqKioqKiAqL1xcbi8qICoqKioqKiAqL1xcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKiogKi9cXG4vKiBNYWluIENvbnRlbnQgQ29udGFpbmVyICovXFxuLyogKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi8qIC5jb250ZW50X21haW5fY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMnJlbSA0cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGZsZXg6IDE7XFxufSAqL1xcblxcbi5jb250ZW50X2NvbnRhaW5lciB7XFxuICBtYXJnaW46IDJyZW0gNHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBmbGV4OiAxO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5wbGF5ZXJfMV9jb250YWluZXIsXFxuLnBsYXllcl8yX2NvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IHZhcigtLWJsdWUtbmVvbi10ZXh0LXNoYWRvdyk7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4ucGxheWVyXzFfbmFtZSxcXG4ucGxheWVyXzJfbmFtZSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgLyogYm9yZGVyOiAycHggcmVkIHNvbGlkOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcXG59XFxuLnBsYXllcl8xX25hbWUuYWN0aXZlLFxcbi5wbGF5ZXJfMl9uYW1lLmFjdGl2ZSB7XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tcGluay1uZW9uLXRleHQtc2hhZG93LWxvdyk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1waW5rLW5lb24tdGV4dC1zaGFkb3ctbG93KTtcXG59XFxuXFxuLnBsYXllcl8xX3N0YXR1c19yb3VuZCxcXG4ucGxheWVyXzJfc3RhdHVzX3JvdW5kIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgLyogYm94LXNoYWRvdzogaW5zZXQgMHJlbSAwcmVtIDU1cmVtIGJsYWNrOyAqL1xcbn1cXG5cXG4vKiBjdXR0aW5nIHRoZSBwaWxscyAuc3ZnIGZpbGUgaW4gaGFsZiBhbmQgdXNlIHRoZW0gb24gYm90aCBzaWRlZCAqL1xcbi5wbGF5ZXJfMV9pbWdfY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvcmVkX3BpbGxfYmx1ZV9waWxsLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xcbn1cXG4ucGxheWVyXzFfaW1nX2NvbnRhaW5lcjpudGgtY2hpbGQoMikge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XFxufVxcbi5wbGF5ZXJfMl9pbWdfY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1hZ2VzL3JlZF9waWxsX2JsdWVfcGlsbC5zdmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xcbn1cXG4ucGxheWVyXzJfaW1nX2NvbnRhaW5lcjpudGgtY2hpbGQoMikge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX2NvbnRhaW5lciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIC8qIHdpZHRoOiBtaW5tYXgoMTAwLCA2MHZ3KTsgKi9cXG59XFxuXFxuLyogY29sdW1uIGFuZCByb3cgc2V0dGluZ3MgKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi5jb2x1bW4ge1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAvKiBib3JkZXI6IDJweCByZWQgc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjsgKi9cXG4gIHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1jb2x1bW4tcGFkZGluZykgLyAyKTtcXG5cXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNvbHVtbjpob3ZlciB7XFxuICBzY2FsZTogMS4wMTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2MHB4IHZhcigtLWJhY2tncm91bmQtY29sb3ItYXJteS1ncmVlbi1saWdodCk7XFxufVxcblxcbi5yb3cge1xcbiAgYm9yZGVyOiA2cHggYmxhY2sgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAxMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJvdy1jZWxsLWJhY2tncm91bmQtY29sb3IpO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHJlbSAwcmVtIDEuNXJlbSBibGFjaztcXG4gIHBhZGRpbmc6IHZhcigtLWNvbHVtbi1wYWRkaW5nKTtcXG4gIG1hcmdpbjogY2FsYyh2YXIoLS1jb2x1bW4tcGFkZGluZykgLyA1KSAwO1xcblxcbiAgaGVpZ2h0OiAxLjZyZW07XFxuICB3aWR0aDogMS42cmVtO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIHRoaXMgaXMgaW1wb3J0YW50IGZvciB0aGUgZXZlbnQgY2FwdHVyZSBvbiBjbGljayAqL1xcbn1cXG4vKiBoZXJlIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBmb3Igd2lubmluZyBjZWxscyAqL1xcbi5yb3cud2lubmluZ19yb3cge1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDQ7XFxuICBib3gtc2hhZG93OiB2YXIoLS1uZW9uLXRleHQtc2hhZG93LXZlcnktbG93KTtcXG4gIGFuaW1hdGlvbjogZmxpY2tlciAxLjVzIGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuLnJvdzpob3ZlciB7XFxuICBzY2FsZTogMS4xO1xcbn1cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKiogKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKiAqL1xcbi8qIG92ZXJsYXkgYW5kIHBvcC11cHMgKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLm92ZXJsYXlfZm9yX3BvcF91cHMge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW92ZXJsYXktYmxhY2spO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgei1pbmRleDogMztcXG59XFxuLm92ZXJsYXlfZm9yX3BvcF91cHMuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4uZ2FtZW92ZXJfcG9wX3VwIHtcXG4gIC8qIG1hcmdpbjogMCBhdXRvOyAqL1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtYXRyaXhcXFwiO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yX3doaXRlX2N1c3RvbSk7XFxuICAvKiBib3JkZXI6IDJweCB2YXIoLS1jb2xvcl93aGl0ZV9jdXN0b20pIHNvbGlkOyAqL1xcbiAgb3BhY2l0eTogMDtcXG4gIHotaW5kZXg6IDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IHZhcigtLW5lb24tdGV4dC1zaGFkb3ctbWVkaXVtKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLW5lb24tdGV4dC1zaGFkb3ctdmVyeS1sb3cpO1xcblxcbiAgLyogYm94LXNoYWRvdzogaW5zZXQgMXJlbSAxcmVtIDRyZW0gd2hpdGU7ICovXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXG59XFxuLmdhbWVvdmVyX3BvcF91cC5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLmdhbWVvdmVyX3BvcF91cCAuc3RhdHVzX3dpbm5pbmcge1xcbn1cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqICovXFxuLyogKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi8qICoqKioqKiAqL1xcbi8qIGZvb3RlciAqL1xcbi8qICoqKioqKiAqL1xcblxcbmZvb3RlciB7XFxuICAvKiBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwOyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWFybXktZ3JlZW4tZGFyayk7XFxuICBjb2xvcjogdmFyKC0tY29sb3Jfd2hpdGVfY3VzdG9tKTtcXG4gIHotaW5kZXg6IDI7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBzY2FsZTogMS4yO1xcbn1cXG5cXG5mb290ZXIgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLyogKioqKioqICovXFxuLyogKioqKioqICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZU1hdGVyaWFsc0RPTSgpIHtcbiAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lYm9hcmRfY29udGFpbmVyXCIpO1xuXG4gIGZ1bmN0aW9uIHBsYXlSb3VuZENsaWNrRXZlbnQoZXZlbnQpIHtcbiAgICBsZXQgY29sdW1uTnVtYmVyID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuY29sdW1uX251bWJlcjtcbiAgICBsZXQgc2VsZWN0ZWRDb2x1bW4gPSBnYW1lLmdhbWVib2FyZC5nZXRCb2FyZCgpW2NvbHVtbk51bWJlcl07XG4gICAgZ2FtZS5wbGF5Um91bmQoc2VsZWN0ZWRDb2x1bW4pO1xuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkQ29sdW1uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEV2ZW50TGlzdGVuZXJUb0NvbHVtbnMoKSB7XG4gICAgY29uc3QgY29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sdW1uXCIpO1xuXG4gICAgZnVuY3Rpb24gYWRkKCkge1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgY29sdW1uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBwbGF5Um91bmRDbGlja0V2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICBjb2x1bW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgIHBsYXlSb3VuZENsaWNrRXZlbnQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IGFkZCwgcmVtb3ZlIH07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyVG9OZXdHYW1lQnV0dG9uKCkge1xuICAgIGNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld19nYW1lX2J1dHRvblwiKTtcbiAgICBuZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBnYW1lLnN0YXJ0TmV3R2FtZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW5FeGlzdGluZ0dhbWVib2FyZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGNoaWxkcmVuT2ZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCJkaXYuZ2FtZWJvYXJkX2NvbnRhaW5lciA+ICpcIlxuICAgICk7XG4gICAgY2hpbGRyZW5PZkNvbnRhaW5lci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheUdhbWVib2FyZERPTSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWUuZ2FtZWJvYXJkLmdldEJvYXJkKCkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5ld0NvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdDb2x1bW4uY2xhc3NMaXN0LmFkZChcImNvbHVtblwiKTtcbiAgICAgIG5ld0NvbHVtbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbl9udW1iZXJcIiwgaSk7XG4gICAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q29sdW1uKTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYW1lLmdhbWVib2FyZC5nZXRCb2FyZCgpW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IG5ld1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5ld1Jvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgICAgICBuZXdSb3cuc2V0QXR0cmlidXRlKFwiZGF0YS1yb3dfbnVtYmVyXCIsIGopO1xuXG4gICAgICAgIC8vIG5ld1Jvdy5pbm5lckhUTUwgPSBnYW1lLmdhbWVib2FyZC5nZXRCb2FyZCgpW2ldW2pdLnN0YXR1cztcbiAgICAgICAgaWYgKGdhbWUuZ2FtZWJvYXJkLmdldEJvYXJkKClbaV1bal0uc3RhdHVzID09IDEpIHtcbiAgICAgICAgICBuZXdSb3cuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgXCJzdHlsZVwiLFxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wbGF5ZXItMS1jb2xvcik7IG9wYWNpdHk6IDE7XCJcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKGdhbWUuZ2FtZWJvYXJkLmdldEJvYXJkKClbaV1bal0uc3RhdHVzID09IDIpIHtcbiAgICAgICAgICBuZXdSb3cuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgXCJzdHlsZVwiLFxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wbGF5ZXItMi1jb2xvcik7IG9wYWNpdHk6IDE7XCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdhbWUuZ2FtZWJvYXJkLmdldEJvYXJkKClbaV1bal0uaXNXaW5uaW5nQ2VsbCA9PSB0cnVlKSB7XG4gICAgICAgICAgbmV3Um93LmNsYXNzTGlzdC5hZGQoXCJ3aW5uaW5nX3Jvd1wiKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdDb2x1bW4uYXBwZW5kQ2hpbGQobmV3Um93KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGF5ZXIxTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyXzFfbmFtZVwiKTtcbiAgICBjb25zdCBwbGF5ZXIyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyXzJfbmFtZVwiKTtcbiAgICBwbGF5ZXIxTmFtZS5pbm5lckhUTUwgPSBnYW1lLmdldFBsYXllcnMoKVswXS5uYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgcGxheWVyMk5hbWUuaW5uZXJIVE1MID0gZ2FtZS5nZXRQbGF5ZXJzKClbMV0ubmFtZS50b1VwcGVyQ2FzZSgpO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gZGlzcGxheVJvdW5kU3RhdHVzTWVzc2FnZShhY3RpdmVQbGF5ZXIsIHN0YXR1c19tZXNzYWdlKSB7XG4gIC8vICAgY29uc3QgcGxheWVyMV9TdGF0dXNSb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIC8vICAgICBcIi5wbGF5ZXJfMV9zdGF0dXNfcm91bmRcIlxuICAvLyAgICk7XG4gIC8vICAgY29uc3QgcGxheWVyMl9TdGF0dXNSb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIC8vICAgICBcIi5wbGF5ZXJfMl9zdGF0dXNfcm91bmRcIlxuICAvLyAgICk7XG5cbiAgLy8gICBpZiAoYWN0aXZlUGxheWVyID09PSBnYW1lLmdldFBsYXllcnMoKVswXSkge1xuICAvLyAgICAgcGxheWVyMV9TdGF0dXNSb3VuZC5pbm5lckhUTUwgPSBzdGF0dXNfbWVzc2FnZTtcbiAgLy8gICAgIHBsYXllcjJfU3RhdHVzUm91bmQuaW5uZXJIVE1MID0gXCImbmJzcDtcIjtcbiAgLy8gICB9IGVsc2UgaWYgKGFjdGl2ZVBsYXllciA9PT0gZ2FtZS5nZXRQbGF5ZXJzKClbMV0pIHtcbiAgLy8gICAgIHBsYXllcjFfU3RhdHVzUm91bmQuaW5uZXJIVE1MID0gXCImbmJzcDtcIjtcbiAgLy8gICAgIHBsYXllcjJfU3RhdHVzUm91bmQuaW5uZXJIVE1MID0gc3RhdHVzX21lc3NhZ2U7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheVdpbm5pbmdTdGF0dXNNZXNzYWdlKHN0YXR1c19tZXNzYWdlKSB7XG4gICAgY29uc3Qgc3RhdHVzV2lubmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhdHVzX3dpbm5pbmdcIik7XG4gICAgc3RhdHVzV2lubmluZy5pbm5lckhUTUwgPSBzdGF0dXNfbWVzc2FnZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlBY3RpdmVQbGF5ZXJGb2N1cyhhY3RpdmVQbGF5ZXIpIHtcbiAgICBjb25zdCBwbGF5ZXIxTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyXzFfbmFtZVwiKTtcbiAgICBjb25zdCBwbGF5ZXIyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyXzJfbmFtZVwiKTtcblxuICAgIGlmIChhY3RpdmVQbGF5ZXIgPT09IGdhbWUuZ2V0UGxheWVycygpWzBdKSB7XG4gICAgICBwbGF5ZXIxTmFtZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgcGxheWVyMk5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZVBsYXllciA9PT0gZ2FtZS5nZXRQbGF5ZXJzKClbMV0pIHtcbiAgICAgIHBsYXllcjFOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBwbGF5ZXIyTmFtZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZEdhbWVET00oKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheV9mb3JfcG9wX3Vwc1wiKTtcbiAgICBjb25zdCBnYW1lb3ZlclBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lb3Zlcl9wb3BfdXBcIik7XG4gICAgY29uc3QgYnV0dG9uTmV3R2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLm5ld19nYW1lX2J1dHRvblwiKTtcblxuICAgIGZ1bmN0aW9uIGFkZCgpIHtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIGdhbWVvdmVyUG9wVXAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIGJ1dHRvbk5ld0dhbWUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgZ2FtZW92ZXJQb3BVcC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgYnV0dG9uTmV3R2FtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgICByZXR1cm4geyBhZGQsIHJlbW92ZSB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkSGVhZGVyQ29uZmlnKCkge1xuICAgIGZ1bmN0aW9uIGFkZEF1ZGlvQ29uZmlnKCkge1xuICAgICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXVkaW9cIik7XG4gICAgICBjb25zdCBhdWRpb0ljb25PbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiYnV0dG9uLmF1ZGlvX2J1dHRvbiAuaWNvbl9vblwiXG4gICAgICApO1xuICAgICAgY29uc3QgYXVkaW9JY29uT2ZmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCJidXR0b24uYXVkaW9fYnV0dG9uIC5pY29uX29mZlwiXG4gICAgICApO1xuICAgICAgYXVkaW9JY29uT24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgY29uc3QgYXVkaW9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmF1ZGlvX2J1dHRvblwiKTtcblxuICAgICAgZnVuY3Rpb24gdG9nZ2xlUGxheSgpIHtcbiAgICAgICAgaWYgKGF1ZGlvLnBhdXNlZCkge1xuICAgICAgICAgIGF1ZGlvSWNvbk9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgYXVkaW9JY29uT2ZmLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBhdWRpby5wbGF5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXVkaW9JY29uT24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIGF1ZGlvSWNvbk9mZi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgIGF1ZGlvLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYXVkaW9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlUGxheSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkSW5mb0J1dHRvbkNvbmZpZygpIHtcbiAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlfZm9yX3BvcF91cHNcIik7XG4gICAgICBjb25zdCBpbmZvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5pbmZvX2J1dHRvblwiKTtcbiAgICAgIGNvbnN0IGltYWdlUGxheWVyUmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfMV9pbWdfY29udGFpbmVyXCIpO1xuICAgICAgY29uc3QgaW1hZ2VQbGF5ZXJCbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfMl9pbWdfY29udGFpbmVyXCIpO1xuICAgICAgY29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24ubmV3X2dhbWVfYnV0dG9uXCIpO1xuXG4gICAgICBsZXQgaXNJbmZvT24gPSBmYWxzZTtcblxuICAgICAgZnVuY3Rpb24gaW5mb0J1dHRvblRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKCFpc0luZm9Pbikge1xuICAgICAgICAgIHJlc3RhcnRCdXR0b24uc3R5bGUgPSBcInotaW5kZXg6IDE7XCI7XG4gICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgIGluZm9CdXR0b24uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ6LWluZGV4OiAxMDtcIik7XG4gICAgICAgICAgaW5mb0J1dHRvbi5zdHlsZSA9IFwiei1pbmRleDogMTA7XCI7XG4gICAgICAgICAgaW1hZ2VQbGF5ZXJSZWQuc3R5bGUgPVxuICAgICAgICAgICAgXCJ6LWluZGV4OiAxMDsgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uKTsgc2NhbGU6IDEuMztcIjtcbiAgICAgICAgICBpbWFnZVBsYXllckJsdWUuc3R5bGUgPVxuICAgICAgICAgICAgXCJ6LWluZGV4OiAxMDsgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uKTsgc2NhbGU6IDEuMztcIjtcblxuICAgICAgICAgIGlzSW5mb09uID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN0YXJ0QnV0dG9uLnN0eWxlID0gXCJcIjtcbiAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgaW5mb0J1dHRvbi5zdHlsZSA9IFwiXCI7XG4gICAgICAgICAgaW1hZ2VQbGF5ZXJSZWQuc3R5bGUgPSBcIlwiO1xuICAgICAgICAgIGltYWdlUGxheWVyQmx1ZS5zdHlsZSA9IFwiXCI7XG5cbiAgICAgICAgICBpc0luZm9PbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGluZm9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaW5mb0J1dHRvblRvZ2dsZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkQXVkaW9Db25maWcoKTtcbiAgICBhZGRJbmZvQnV0dG9uQ29uZmlnKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIEV2ZW50TGlzdGVuZXJUb0NvbHVtbnMsXG4gICAgY2xlYW5FeGlzdGluZ0dhbWVib2FyZEVsZW1lbnRzLFxuICAgIGRpc3BsYXlHYW1lYm9hcmRET00sXG4gICAgLy8gZGlzcGxheVJvdW5kU3RhdHVzTWVzc2FnZSxcbiAgICBkaXNwbGF5V2lubmluZ1N0YXR1c01lc3NhZ2UsXG4gICAgZGlzcGxheUFjdGl2ZVBsYXllckZvY3VzLFxuICAgIGFkZEV2ZW50TGlzdGVuZXJUb05ld0dhbWVCdXR0b24sXG4gICAgZW5kR2FtZURPTSxcbiAgICBhZGRIZWFkZXJDb25maWcsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBDcmVhdGVNYXRlcmlhbHNET00gfSBmcm9tIFwiLi9kb21fbWF0ZXJpYWxzLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IHJvd3MgPSA2O1xuICBjb25zdCBjb2x1bW5zID0gNztcbiAgY29uc3QgYm9hcmQgPSBbXTtcbiAgY29uc3QgZG9tQ3JlYXRvciA9IENyZWF0ZU1hdGVyaWFsc0RPTSgpO1xuXG4gIGZ1bmN0aW9uIGdldEJvYXJkKCkge1xuICAgIHJldHVybiBib2FyZDtcbiAgfVxuICBmdW5jdGlvbiBnZXREb21DcmVhdG9yKCkge1xuICAgIHJldHVybiBkb21DcmVhdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlR2FtZWJvYXJkR3JpZHMoKSB7XG4gICAgYm9hcmQubGVuZ3RoID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uczsgaSsrKSB7XG4gICAgICBib2FyZFtpXSA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd3M7IGorKykge1xuICAgICAgICBib2FyZFtpXS5wdXNoKENlbGwoMCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIENlbGwoc3RhdHVzKSB7XG4gICAgY29uc3QgaXNXaW5uaW5nQ2VsbCA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gYWRkVG9rZW4ocGxheWVyKSB7XG4gICAgICBzdGF0dXMgPSBwbGF5ZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFN0YXR1cygpIHtcbiAgICAgIHJldHVybiBzdGF0dXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3RhdHVzLCBpc1dpbm5pbmdDZWxsLCBhZGRUb2tlbiwgZ2V0U3RhdHVzIH07XG4gIH1cblxuICBmdW5jdGlvbiB3aGljaENlbGxJc0F2YWlsYWJsZShjb2x1bW4pIHtcbiAgICAvL3JldHVybnMgd2hpY2ggY2VsbCBvbiB0aGUgc2VsZWN0ZWQgY29sdW1uIGlzIGF2YWlsYWJsZVxuXG4gICAgaWYgKGNvbHVtblswXS5zdGF0dXMgIT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBjb2x1bW4gaXMgZnVsbFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gcm93cyAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAoY29sdW1uW2ldLnN0YXR1cyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gY29sdW1uW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BUb2tlbihjb2x1bW4sIHBsYXllclRva2VuKSB7XG4gICAgbGV0IG15Q29sdW1uID0gY29sdW1uO1xuXG4gICAgbGV0IHNlbGVjdGVkQ2VsbCA9IHdoaWNoQ2VsbElzQXZhaWxhYmxlKG15Q29sdW1uKTtcblxuICAgIGlmIChzZWxlY3RlZENlbGwgPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2VsZWN0ZWRDZWxsLnN0YXR1cyA9IHBsYXllclRva2VuO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheUdhbWVib2FyZCgpIHtcbiAgICBkb21DcmVhdG9yLmNsZWFuRXhpc3RpbmdHYW1lYm9hcmRFbGVtZW50cygpO1xuICAgIGRvbUNyZWF0b3IuZGlzcGxheUdhbWVib2FyZERPTSgpO1xuICAgIGRvbUNyZWF0b3IuRXZlbnRMaXN0ZW5lclRvQ29sdW1ucygpLmFkZCgpO1xuICAgIGRvbUNyZWF0b3IuYWRkRXZlbnRMaXN0ZW5lclRvTmV3R2FtZUJ1dHRvbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tHYW1lT3ZlcihwbGF5ZXIpIHtcbiAgICAvL0NoZWNrIGRyYXdcbiAgICBmdW5jdGlvbiBpc0RyYXcoKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBjb2x1bW5zOyBjb2wrKykge1xuICAgICAgICBpZiAoYm9hcmRbY29sXVswXS5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoaXNEcmF3KCkpIHtcbiAgICAgIHJldHVybiBcImRyYXdcIjtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBjb2x1bW5zXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgY29sdW1uczsgY29sKyspIHtcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHJvd3MgLSAzOyByb3crKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2xdW3Jvd10uc3RhdHVzID09IHBsYXllci50b2tlbiAmJlxuICAgICAgICAgIGdldEJvYXJkKClbY29sXVtyb3cgKyAxXS5zdGF0dXMgPT0gcGxheWVyLnRva2VuICYmXG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2xdW3JvdyArIDJdLnN0YXR1cyA9PSBwbGF5ZXIudG9rZW4gJiZcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbF1bcm93ICsgM10uc3RhdHVzID09IHBsYXllci50b2tlblxuICAgICAgICApIHtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbF1bcm93XS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbF1bcm93ICsgMV0uaXNXaW5uaW5nQ2VsbCA9IHRydWU7XG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2xdW3JvdyArIDJdLmlzV2lubmluZ0NlbGwgPSB0cnVlO1xuICAgICAgICAgIGdldEJvYXJkKClbY29sXVtyb3cgKyAzXS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIHJvd3NcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByb3dzOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgY29sdW1ucyAtIDM7IGNvbCsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbF1bcm93XS5zdGF0dXMgPT0gcGxheWVyLnRva2VuICYmXG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgKyAxXVtyb3ddLnN0YXR1cyA9PSBwbGF5ZXIudG9rZW4gJiZcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCArIDJdW3Jvd10uc3RhdHVzID09IHBsYXllci50b2tlbiAmJlxuICAgICAgICAgIGdldEJvYXJkKClbY29sICsgM11bcm93XS5zdGF0dXMgPT0gcGxheWVyLnRva2VuXG4gICAgICAgICkge1xuICAgICAgICAgIGdldEJvYXJkKClbY29sXVtyb3ddLmlzV2lubmluZ0NlbGwgPSB0cnVlO1xuICAgICAgICAgIGdldEJvYXJkKClbY29sICsgMV1bcm93XS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCArIDJdW3Jvd10uaXNXaW5uaW5nQ2VsbCA9IHRydWU7XG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgKyAzXVtyb3ddLmlzV2lubmluZ0NlbGwgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZGlhZ29uYWwgKHRvcCBsZWZ0IHRvIGJvdHRvbSByaWdodClcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByb3dzIC0gMzsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGNvbHVtbnMgLSAzOyBjb2wrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2xdW3Jvd10uc3RhdHVzID09IHBsYXllci50b2tlbiAmJlxuICAgICAgICAgIGdldEJvYXJkKClbY29sICsgMV1bcm93ICsgMV0uc3RhdHVzID09IHBsYXllci50b2tlbiAmJlxuICAgICAgICAgIGdldEJvYXJkKClbY29sICsgMl1bcm93ICsgMl0uc3RhdHVzID09IHBsYXllci50b2tlbiAmJlxuICAgICAgICAgIGdldEJvYXJkKClbY29sICsgM11bcm93ICsgM10uc3RhdHVzID09IHBsYXllci50b2tlblxuICAgICAgICApIHtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbF1bcm93XS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCArIDFdW3JvdyArIDFdLmlzV2lubmluZ0NlbGwgPSB0cnVlO1xuICAgICAgICAgIGdldEJvYXJkKClbY29sICsgMl1bcm93ICsgMl0uaXNXaW5uaW5nQ2VsbCA9IHRydWU7XG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgKyAzXVtyb3cgKyAzXS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGRpYWdvbmFsICh0b3AgcmlnaHQgdG8gYm90dG9tIGxlZnQpXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcm93cyAtIDM7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAzOyBjb2wgPCBjb2x1bW5zOyBjb2wrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2xdW3Jvd10uc3RhdHVzID09IHBsYXllci50b2tlbiAmJlxuICAgICAgICAgIGdldEJvYXJkKClbY29sIC0gMV1bcm93ICsgMV0uc3RhdHVzID09IHBsYXllci50b2tlbiAmJlxuICAgICAgICAgIGdldEJvYXJkKClbY29sIC0gMl1bcm93ICsgMl0uc3RhdHVzID09IHBsYXllci50b2tlbiAmJlxuICAgICAgICAgIGdldEJvYXJkKClbY29sIC0gM11bcm93ICsgM10uc3RhdHVzID09IHBsYXllci50b2tlblxuICAgICAgICApIHtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbF1bcm93XS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICBnZXRCb2FyZCgpW2NvbCAtIDFdW3JvdyArIDFdLmlzV2lubmluZ0NlbGwgPSB0cnVlO1xuICAgICAgICAgIGdldEJvYXJkKClbY29sIC0gMl1bcm93ICsgMl0uaXNXaW5uaW5nQ2VsbCA9IHRydWU7XG4gICAgICAgICAgZ2V0Qm9hcmQoKVtjb2wgLSAzXVtyb3cgKyAzXS5pc1dpbm5pbmdDZWxsID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTsgLy8gbm8gd2luIGZvdW5kXG4gIH1cblxuICByZXR1cm4ge1xuICAgIC8vIGJvYXJkLFxuICAgIGdldERvbUNyZWF0b3IsXG4gICAgZ2V0Qm9hcmQsXG4gICAgY3JlYXRlR2FtZWJvYXJkR3JpZHMsXG4gICAgZGlzcGxheUdhbWVib2FyZCxcbiAgICBkcm9wVG9rZW4sXG4gICAgd2hpY2hDZWxsSXNBdmFpbGFibGUsXG4gICAgY2hlY2tHYW1lT3ZlcixcbiAgfTtcbn1cbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZC5qc1wiO1xuaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lQ29udHJvbGxlcigpIHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7IC8vIGRvbid0IGNoYW5nZSB0aGUgbmFtZVxuICBnYW1lYm9hcmQuZ2V0RG9tQ3JlYXRvcigpLmFkZEhlYWRlckNvbmZpZygpO1xuXG4gIGNvbnN0IHBsYXllck9uZU5hbWUgPSBcIlBsYXllciBSZWRcIjtcbiAgY29uc3QgcGxheWVyVHdvTmFtZSA9IFwiUGxheWVyIEJsdWVcIjtcblxuICBjb25zdCBwbGF5ZXJzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IHBsYXllck9uZU5hbWUsXG4gICAgICB0b2tlbjogXCIxXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBwbGF5ZXJUd29OYW1lLFxuICAgICAgdG9rZW46IFwiMlwiLFxuICAgIH0sXG4gIF07XG4gIGZ1bmN0aW9uIGdldFBsYXllcnMoKSB7XG4gICAgcmV0dXJuIHBsYXllcnM7XG4gIH1cblxuICBsZXQgYWN0aXZlUGxheWVyID0gcGxheWVyc1swXTtcblxuICBmdW5jdGlvbiBnZXRBY3RpdmVQbGF5ZXIoKSB7XG4gICAgcmV0dXJuIGFjdGl2ZVBsYXllcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN3aXRjaFBsYXllclR1cm4oKSB7XG4gICAgYWN0aXZlUGxheWVyID0gYWN0aXZlUGxheWVyID09PSBwbGF5ZXJzWzBdID8gcGxheWVyc1sxXSA6IHBsYXllcnNbMF07XG4gICAgY29uc3QgcGxheVJvdW5kTG9nTWVzc2FnZSA9IGAke1xuICAgICAgZ2V0QWN0aXZlUGxheWVyKCkubmFtZVxuICAgIH0gaXMgcGxheWluZyBoaXMgdHVybi4uLmA7XG4gICAgZ2FtZWJvYXJkLmdldERvbUNyZWF0b3IoKS5kaXNwbGF5QWN0aXZlUGxheWVyRm9jdXMoYWN0aXZlUGxheWVyKTtcbiAgICAvLyBnYW1lYm9hcmRcbiAgICAvLyAgIC5nZXREb21DcmVhdG9yKClcbiAgICAvLyAgIC5kaXNwbGF5Um91bmRTdGF0dXNNZXNzYWdlKGFjdGl2ZVBsYXllciwgcGxheVJvdW5kTG9nTWVzc2FnZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydE5ld0dhbWUoKSB7XG4gICAgY29uc3QgZGVmYXVsdFdpbm5pbmdNZXNzYWdlID0gXCJXaW5uaW5nIHN0YXR1c1wiO1xuICAgIGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMV07XG4gICAgc3dpdGNoUGxheWVyVHVybigpO1xuICAgIGdhbWVib2FyZC5jcmVhdGVHYW1lYm9hcmRHcmlkcygpO1xuICAgIGdhbWVib2FyZC5kaXNwbGF5R2FtZWJvYXJkKCk7XG4gICAgZ2FtZWJvYXJkXG4gICAgICAuZ2V0RG9tQ3JlYXRvcigpXG4gICAgICAuZGlzcGxheVdpbm5pbmdTdGF0dXNNZXNzYWdlKGRlZmF1bHRXaW5uaW5nTWVzc2FnZSk7XG4gICAgZ2FtZWJvYXJkLmdldERvbUNyZWF0b3IoKS5lbmRHYW1lRE9NKCkucmVtb3ZlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBlbmRUaGVHYW1lKHdpbm5pbmdTdGF0dXMpIHtcbiAgICBjb25zdCBkcmF3TWVzc2FnZSA9IFwiSXQgaGFzIGJlZW4gYSBEUkFXXCI7XG4gICAgY29uc3Qgd2lubmluZ01lc3NhZ2UgPSBgJHthY3RpdmVQbGF5ZXIubmFtZX0gaGFzIFdPTmA7XG5cbiAgICBnYW1lYm9hcmQuZ2V0RG9tQ3JlYXRvcigpLkV2ZW50TGlzdGVuZXJUb0NvbHVtbnMoKS5yZW1vdmUoKTtcbiAgICBpZiAod2lubmluZ1N0YXR1cyA9PT0gXCJkcmF3XCIpIHtcbiAgICAgIGdhbWVib2FyZC5nZXREb21DcmVhdG9yKCkuZGlzcGxheVdpbm5pbmdTdGF0dXNNZXNzYWdlKGRyYXdNZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKHdpbm5pbmdTdGF0dXMgPT09IHRydWUpIHtcbiAgICAgIGdhbWVib2FyZC5nZXREb21DcmVhdG9yKCkuZGlzcGxheVdpbm5pbmdTdGF0dXNNZXNzYWdlKHdpbm5pbmdNZXNzYWdlKTtcbiAgICB9XG4gICAgZ2FtZWJvYXJkLmdldERvbUNyZWF0b3IoKS5lbmRHYW1lRE9NKCkuYWRkKCk7XG4gICAgZ2FtZWJvYXJkLmRpc3BsYXlHYW1lYm9hcmQoKTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIGRpc3BsYXlOZXdSb3VuZCgpIHtcbiAgLy8gICBnYW1lYm9hcmQuZGlzcGxheUdhbWVib2FyZCgpO1xuICAvLyAgIGNvbnNvbGUubG9nKGBpdCBpcyAke2dldEFjdGl2ZVBsYXllcigpLm5hbWV9wrRzIHR1cm5gKTtcbiAgLy8gfVxuXG4gIGZ1bmN0aW9uIHBsYXlSb3VuZChjb2x1bW4pIHtcbiAgICBpZiAoZ2FtZWJvYXJkLndoaWNoQ2VsbElzQXZhaWxhYmxlKGNvbHVtbikgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBnYW1lYm9hcmQuZHJvcFRva2VuKGNvbHVtbiwgZ2V0QWN0aXZlUGxheWVyKCkudG9rZW4pO1xuICAgICAgZ2FtZWJvYXJkLmRpc3BsYXlHYW1lYm9hcmQoKTtcbiAgICAgIGNvbnN0IHdpbm5pbmdTdGF0dXMgPSBnYW1lYm9hcmQuY2hlY2tHYW1lT3ZlcihhY3RpdmVQbGF5ZXIpO1xuXG4gICAgICBpZiAod2lubmluZ1N0YXR1cyAhPT0gZmFsc2UpIHtcbiAgICAgICAgZW5kVGhlR2FtZSh3aW5uaW5nU3RhdHVzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3dpdGNoUGxheWVyVHVybigpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2FtZWJvYXJkLFxuICAgIGdldFBsYXllcnMsXG4gICAgc3dpdGNoUGxheWVyVHVybixcbiAgICAvLyBkaXNwbGF5TmV3Um91bmQsXG4gICAgZ2V0QWN0aXZlUGxheWVyLFxuICAgIHBsYXlSb3VuZCxcbiAgICBzdGFydE5ld0dhbWUsXG4gIH07XG59XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguY3NzXCI7XG5pbXBvcnQgZ2l0TG9nbyBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9naXRodWItNjQucG5nXCI7XG4vLyBpbXBvcnQgeyBDcmVhdGVNYXRlcmlhbHNET00gfSBmcm9tIFwiLi9kb21fbWF0ZXJpYWxzLmpzXCI7XG4vLyBpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmQuanNcIjtcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vZ2FtZWNvbnRyb2xsZXIuanNcIjtcblxuZXhwb3J0IGNvbnN0IGdhbWUgPSBHYW1lQ29udHJvbGxlcigpOyAvLyBkb24ndCBjaGFuZ2UgdGhlIG5hbWVcbmdhbWUuc3RhcnROZXdHYW1lKCk7XG5cbmNvbnNvbGUubG9nKGdhbWUuZ2FtZWJvYXJkLmdldEJvYXJkKCkpO1xuY29uc29sZS5sb2coZ2FtZS5nYW1lYm9hcmQuZ2V0Qm9hcmQoKVswXSk7XG5jb25zb2xlLmxvZyhnYW1lLmdhbWVib2FyZC5nZXRCb2FyZCgpWzBdWzBdKTtcblxuLy8gZ2FtZS5wbGF5Um91bmQoZ2FtZS5nYW1lYm9hcmQuZ2V0Qm9hcmQoKVswXSk7XG4vLyBnYW1lLnN0YXJ0TmV3R2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9