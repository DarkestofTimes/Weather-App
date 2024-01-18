/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Img/magnify.svg */ "./src/Img/magnify.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* VARIABLES */
:root {
  --BACKGROUND-LG: linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54));
}

/* 
linear-gradient(skyblue, rgb(179, 179, 179)); sunny
linear-gradient(rgb(28, 24, 55), rgb(17, 15, 32)); clear
linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78)); cloudy
linear-gradient(rgb(214, 214, 214), rgb(121, 121, 121)); blowing snow
linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54)); heavy reain
 */

body {
  height: 100vh;
  background-color: dimgray;
  overflow: hidden;
}

/* HEADER */

header {
  width: 100%;
  height: 10vh;
  display: grid;
  justify-items: center;
}

/* SEARCHBR */

.search {
  width: 300px;
  display: flex;
  padding: 0.4rem;
  height: 50px;
  color: aliceblue;
}

.errorElement {
  display: grid;
  position: absolute;
  width: 290px;
  height: 2.5rem;
  padding: 0.4rem 1rem;
  border: 2px solid black;
  top: 3rem;
  border-radius: 20px;
  font-size: 1.3rem;
  opacity: 0;
  background-color: white;
  color: black;
  transition: opacity 1s ease;
  z-index: 3;
}

.searchInput {
  width: 100%;
  border: 2px solid black;
  border-radius: 20px 0 0 20px;
  padding: 0 1rem;
  font-size: 1.3rem;
  outline: none;
}
.searchButton {
  width: 70px;
  border: none;
  background: black;
  border-radius: 0 20px 20px 0;
}
.searchButton::after {
  display: block;
  margin: auto;
  height: 35px;
  width: 35px;
  content: "";
  -webkit-mask: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat 50% 50%;
  mask: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat 50% 50%;
  -webkit-mask-size: cover;
  mask-size: cover;
  background-color: white;
}
.searchButton:hover {
  background-color: white;
}
.searchButton:hover::after {
  background-color: black;
}

.visible {
  opacity: 1;
}

/* MAIN */

main {
  position: relative;
}

.mainContainer {
  height: 100%;
  width: clamp(320px, 80%, 900px);
  margin: auto;
}

.light {
  color: aliceblue;
  background: rgba(0, 0, 0, 0.199);
}

.dark {
  color: black;
  background: rgba(240, 248, 255, 0.224);
}

/* OVERVIEW */

.overviewContainer {
  padding: 1rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 0.4rem;
}

.nameWrapper {
  display: grid;
  grid-template-rows: 1fr min-content min-content min-content;
  align-items: center;
}
.locationCity {
  font-weight: bold;
  font-size: 1.6rem;
  align-self: end;
}
.locationCountry {
  font-weight: bolder;
  font-size: 1.2rem;
}
.localDate,
.localDate__c {
  font-size: 1.5rem;
  font-weight: bold;
  align-self: start;
}
.localTime {
  font-weight: bold;
  font-size: 1.2rem;
}
.weatherType {
  font-size: 1.2rem;
  font-weight: bold;
}

.weatherWrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  gap: 0.2rem;
}
.temperature,
.temperature__b,
.temperature__c {
  font-weight: bold;
  font-size: 2.5rem;
  grid-column: 1 /-1;
}
.currentWeatherImg {
  border-radius: 10px;
}
.localTime,
.localTime__c {
  font-size: 1.2rem;
}
.UV,
.UV__c {
  font-size: 1.2rem;
}

/* WEATHERDETAILS */

.weatherDetailsContainer {
  display: grid;
  padding: 0 1rem 1rem 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 2rem);
  place-content: center;
  gap: 0.5rem;
  white-space: pre-line;
}
.WDSpan {
  font-weight: bold;
}

/* TOGGEL */

.toggleComponent {
  position: relative;
  width: 2.5rem;
  height: min-content;
  border-radius: 20px;
  border: 2px solid aliceblue;
  background: black;
  margin: 0 1rem 0 1rem;
}
.toggleBtn {
  position: relative;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: aliceblue;
  transition: transform 0.5s ease;
}
.left {
  position: relative;
  transform: translate(0rem);
}
.right {
  position: relative;
  transform: translate(1.3rem);
}

.btnWrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.showoff {
  width: max-content;
  padding: 0.1rem;
  height: 1.3rem;
  border-radius: 20px;
}

/* FORECAST */

.forecastContainer,
.forecastContainer__c {
  margin: 1rem;
  height: min-content;
  overflow-y: hidden;
  overflow-x: auto;
  display: grid;
  grid-template-columns: repeat(24, 7rem);
  border: 2px solid aliceblue;
  color: aliceblue;
}

.hourElement,
.dayElement,
.hourElement__c {
  height: 25vh;
  width: 7rem;
  padding: 0.4rem;
  display: grid;
  grid-template-rows: repeat(4, min-content);
  place-items: center;
  border-right: 2px solid aliceblue;
  transition: all 0.7s ease;
}
.hour,
.day {
  padding-bottom: 0.2rem;
  font-weight: bold;
  font-size: 1rem;
  pointer-events: none;
  white-space: nowrap;
}
.hourIcon,
.dayIcon {
  pointer-events: none;
}
.hourTemp,
.dayTemp {
  padding-top: 0.2rem;
  font-weight: bold;
  font-size: 1.2rem;
  pointer-events: none;
}
.wind {
  pointer-events: none;
}

/* FOOTER */

footer {
  height: 1.5rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: grid;
  justify-items: center;
}

.footerA:any-link {
  color: aliceblue;
}

/* SPINNIE */

.spinnieContainer {
  display: none;
  position: fixed;
  place-items: center;
  height: 100vh;
  width: 100%;
  background-color: hsla(0, 0%, 0%, 0.749);
  overflow: hidden;
  top: 0;
  left: 0;
}

.spinnie {
  display: grid;
  place-content: center;
  position: relative;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  animation: rotate 2s linear infinite;
}
.spinnieOpposite {
  display: grid;
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  animation: rotateOpposite 1s linear infinite;
}
.spinnie::before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  background-color: white;
  border-radius: 50%;
}
.spinnie::after {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  background-color: white;
  border-radius: 50%;
  right: 0;
}
.spinnieOpposite::before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  background-color: white;
  border-radius: 50%;
}
.spinnieOpposite::after {
  justify-self: right;
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  background-color: white;
  border-radius: 50%;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rotateOpposite {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

/* COVER */

.detailsCover__c,
.detailsCover {
  position: fixed;
  width: 100%;
  height: 102vh;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
}

.coverContainer__c,
.coverContainer {
  height: 100vh;
  position: relative;
  width: clamp(320px, 80%, 900px);
  margin: auto;
  display: grid;
  grid-template-columns: clamp(320px, 100%, 900px);
  grid-template-rows: 1fr 2fr;
}
.dataContainer__c,
.dataContainer {
  position: relative;
  grid-row: 2/-1;
  margin-bottom: 1.5rem;
}

.collapseCover,
.collapseCover__c {
  width: 2rem;
  height: 2rem;
  position: fixed;
  right: 1rem;
  top: 1rem;
  rotate: 45deg;
  font-size: 2rem;
  z-index: 3;
  display: grid;
  place-content: center;
  color: aliceblue;
  font-weight: bold;
}

.expanded {
  opacity: 1;
  pointer-events: auto;
}

.expand,
.expand__c {
  width: 102%;
  height: 100vh;
}
.expand > *,
.expand__c > * {
  display: none;
}

/* SCROLLBAR */

* {
  scrollbar-width: thin;
  scrollbar-color: transparent aliceblue;
}
*::-webkit-scrollbar {
  width: 4px;
}

*::-webkit-scrollbar-track {
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
}

*::-webkit-scrollbar-thumb {
  background-color: aliceblue;
  border-radius: 3px;
}

/* BACKGROUND */

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -3;
}
.backgroundContainer {
  position: relative;
  top: 0;
  height: 100%;
  width: clamp(320px, 80%, 900px);
  margin: auto;
  z-index: -1;
}
.background__c,
.background__b {
  position: fixed;
  margin: auto;
  width: clamp(320px, 80%, 900px);
  top: 0;
  z-index: -1;
}

.sun {
  position: absolute;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  top: 5rem;
  right: 4rem;
  background-color: rgb(255, 251, 0);
}
.sun::before {
  display: inline-block;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: "";
  border-radius: 50%;
  width: 250px;
  height: 250px;
  background: radial-gradient(
    hsla(60, 100%, 50%, 0.712),
    hsla(60, 100%, 50%, 0) 70%
  );
}
.moon {
  position: absolute;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  top: 5rem;
  right: 4rem;
  background-color: rgb(209, 237, 255);
}
.moon::before {
  display: inline-block;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: "";
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background: radial-gradient(
    hsla(186, 88%, 84%, 0.224),
    hsla(192, 100%, 50%, 0) 70%
  );
}

/* cloud */

.darkCloud,
.thunderCloud,
.cloud {
  /* filter: drop-shadow(5px 5px 0 #0005); */
  height: 17vh;
  width: 17vh;
  position: absolute;
  border-radius: 50%;
  top: 2vh;
  right: 26vw;
  background: linear-gradient(rgb(234, 234, 234), rgb(194, 193, 193));
  border-bottom: 2px solid grey;
  animation: cloudPassBy 20s linear infinite;
  z-index: 3;
}
.darkCloud::before,
.thunderCloud::before,
.cloud::before {
  /* filter: drop-shadow(5px 5px 0 #0005); */
  display: inline-block;
  position: relative;
  content: "";
  width: 12vh;
  height: 12vh;
  border-radius: 50%;
  background: linear-gradient(rgb(234, 234, 234), rgb(194, 193, 193));
  border-bottom: 2px solid grey;
  top: 5vh;
  left: -7vh;
}
.darkCloud::after,
.thunderCloud::after,
.cloud::after {
  /* filter: drop-shadow(5px 5px 0 #0005); */
  display: inline-block;
  position: relative;
  content: "";
  width: 15vh;
  height: 15vh;
  border-radius: 50%;
  background: linear-gradient(rgb(234, 234, 234), rgb(194, 193, 193));
  border-bottom: 2px solid grey;
  top: -10vh;
  left: 10vh;
}
.darkCloud:first-of-type,
.thunderCloud:first-of-type,
.cloud:first-of-type {
  top: 15vh;
  animation: cloudPassBy 20s linear infinite;
  transform: translate(-90vw, 0);
  z-index: 2;
}
.darkCloud:nth-of-type(2),
.thunderCloud:nth-of-type(2),
.cloud:nth-of-type(2) {
  top: 20vh;
  animation: cloudPassBy 20s linear infinite;
  animation-delay: 10s;
  transform: translate(-90vw, 0);
  z-index: 2;
}
.darkCloud:nth-of-type(3),
.thunderCloud:nth-of-type(3),
.cloud:nth-of-type(3) {
  top: 25vh;
  animation: cloudPassBy 20s linear infinite;
  animation-delay: 15s;
  transform: translate(-90vw, 0);
  z-index: 1;
}

/* dark cloud */

.darkCloud::before,
.darkCloud::after,
.darkCloud {
  /* filter: drop-shadow(5px 5px 0 #0005); */
  background: linear-gradient(rgb(124, 124, 124), rgb(80, 80, 80));
}

/* big cloud */

.bigDarkCloud,
.thunderWrapper,
.bigCloud {
  position: absolute;
  top: 0;
  left: -25vw;
  z-index: 4;
  animation: cloudShiftRight 10s ease-in-out infinite;
}
.cloudPart {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(rgb(234, 234, 234), rgb(194, 193, 193));
  border-bottom: 2px solid grey;
  left: 0;
  top: 0;
}
.cloudPart:first-of-type {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(rgb(234, 234, 234), rgb(194, 193, 193));
  border-bottom: 2px solid grey;
  left: 0;
  top: -4vw;
}
.cloudPart:first-of-type::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(rgb(234, 234, 234), rgb(194, 193, 193));
  border-bottom: 2px solid grey;
  left: 8.5vw;
  top: 0;
}
.cloudPart:nth-of-type(2) {
  left: 17vw;
  top: -4vw;
}
.cloudPart:nth-of-type(2)::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(rgb(234, 234, 234), rgb(194, 193, 193));
  border-bottom: 2px solid grey;
  left: 8vw;
  top: 0;
}
.cloudPart:nth-of-type(3) {
  left: 40vw;
  top: -3vw;
}
.cloudPart:nth-of-type(3)::before {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(rgb(234, 234, 234), rgb(194, 193, 193));
  border-bottom: 2px solid grey;
  left: -7vw;
  top: 0;
}
.cloudPart:nth-of-type(3)::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(rgb(234, 234, 234), rgb(194, 193, 193));
  border-bottom: 2px solid grey;
  left: 8vw;
  top: 0;
}

.bigCloud:nth-of-type(2),
.thunderWrapper:nth-of-type(2),
.bigDarkCloud:nth-of-type(2) {
  left: 32vw;
  z-index: 4;
  animation: cloudShiftRight 10s ease-in-out infinite;
}
.bigCloud:nth-of-type(3),
.thunderWrapper:nth-of-type(3),
.bigDarkCloud:nth-of-type(3) {
  top: 9vh;
  left: -25vw;
  z-index: 3;
  animation: cloudShiftLeft 10s ease-in-out infinite;
}
.bigCloud:nth-of-type(4),
.thunderWrapper:nth-of-type(4),
.bigDarkCloud:nth-of-type(4) {
  top: 9vh;
  left: 32vw;
  z-index: 3;
  animation: cloudShiftLeft 10s ease-in-out infinite;
}
.bigCloud:nth-of-type(5),
.thunderWrapper:nth-of-type(5),
.bigDarkCloud:nth-of-type(5) {
  top: 19vh;
  left: -25vw;
  z-index: 2;
  animation: cloudShiftRight 10s ease-in-out infinite;
}
.bigCloud:nth-of-type(6),
.thunderWrapper:nth-of-type(6),
.bigDarkCloud:nth-of-type(6) {
  top: 19vh;
  left: 32vw;
  z-index: 2;
  animation: cloudShiftRight 10s ease-in-out infinite;
}
.bigCloud:nth-of-type(7),
.thunderWrapper:nth-of-type(7),
.bigDarkCloud:nth-of-type(7) {
  top: 27vh;
  left: -25vw;
  z-index: 1;
  animation: cloudShiftLeft 10s ease-in-out infinite;
}
.bigCloud:nth-of-type(8),
.thunderWrapper:nth-of-type(8),
.bigDarkCloud:nth-of-type(8) {
  top: 27vh;
  left: 32vw;
  z-index: 1;
  animation: cloudShiftLeft 10s ease-in-out infinite;
}

/* big dark cloud */

.bigDarkCloud > .cloudPart::after,
.bigDarkCloud > .cloudPart,
.bigDarkCloud > .cloudPart::before {
  background: linear-gradient(rgb(124, 124, 124), rgb(80, 80, 80));
}

/* thunderCloud */

.thunderCloud:first-of-type,
.thunderCloud {
  filter: drop-shadow(5px 5px 0 #0005);
  background: linear-gradient(rgb(124, 124, 124), rgb(80, 80, 80));
  animation: thunderStrike 10s ease infinite,
    cloudPassBy 20s ease-in-out infinite;
}
.thunderCloud::before,
.thunderCloud::after {
  background: linear-gradient(rgb(124, 124, 124), rgb(80, 80, 80));
}
.thunderCloud:nth-of-type(2) {
  animation: thunderStrike 10s ease infinite,
    cloudPassBy 20s ease-in-out infinite;
  animation-delay: 10s;
}
.thunderCloud:nth-of-type(3) {
  animation: thunderStrike 10s ease infinite,
    cloudPassBy 20s ease-in-out infinite;
  animation-delay: 15s;
}

/* bigThunderCloud */

.bigThunderCloud {
  filter: drop-shadow(5px 5px 0 #0005);
}

.bigThunderCloud > .cloudPart::after,
.bigThunderCloud > .cloudPart,
.bigThunderCloud > .cloudPart::before {
  background: linear-gradient(rgb(124, 124, 124), rgb(80, 80, 80));
}

.thunderWrapper:first-of-type .bigThunderCloud {
  animation: thunderStrike 10s ease infinite;
}
.thunderWrapper:nth-of-type(2) .bigThunderCloud {
  animation: thunderStrike 10s ease infinite;
  animation-delay: 12s;
}
.thunderWrapper:nth-of-type(3) .bigThunderCloud {
  animation: thunderStrike 10s ease infinite;
  animation-delay: 18s;
}
.thunderWrapper:nth-of-type(4) .bigThunderCloud {
  animation: thunderStrike 10s ease infinite;
  animation-delay: 15s;
}
.thunderWrapper:nth-of-type(5) .bigThunderCloud {
  animation: thunderStrike 10s ease infinite;
  animation-delay: 23s;
}
.thunderWrapper:nth-of-type(6) .bigThunderCloud {
  animation: thunderStrike 10s ease infinite;
  animation-delay: 29s;
}
.thunderWrapper:nth-of-type(7) .bigThunderCloud {
  animation: thunderStrike 10s ease infinite;
  animation-delay: 34s;
}
.thunderWrapper:nth-of-type(8) .bigThunderCloud {
  animation: thunderStrike 10s ease infinite;
  animation-delay: 38s;
}
.thunderWrapper:nth-of-type(9) .bigThunderCloud {
  animation: thunderStrike 10s ease infinite;
  animation-delay: 43s;
}

/* big clouds resizing */

.bigThunderCloud,
.bigDarkCloud,
.bigCloud {
  height: 20vh;
  width: 50vw;
}
.cloudPart {
  height: clamp(95px, 12vw, 17vw);
  width: clamp(95px, 12vw, 17vw);
}
.cloudPart:first-of-type::after {
  height: clamp(105px, 14vw, 19vw);
  width: clamp(105px, 14vw, 19vw);
}
.cloudPart:nth-of-type(2) {
  height: clamp(89px, 12vw, 16vw);
  width: clamp(89px, 12vw, 16vw);
}
.cloudPart:nth-of-type(2)::after {
  height: clamp(100px, 13vw, 18vw);
  width: clamp(100px, 13vw, 18vw);
}
.cloudPart:nth-of-type(3) {
  height: clamp(90px, 12vw, 17vw);
  width: clamp(90px, 12vw, 17vw);
}
.cloudPart:nth-of-type(3)::before {
  height: clamp(110px, 14vw, 19vw);
  width: clamp(110px, 14vw, 19vw);
}
.cloudPart:nth-of-type(3)::after {
  height: clamp(100px, 13vw, 18vw);
  width: clamp(100px, 13vw, 18vw);
}

/* mist */

.mist {
  position: absolute;
  top: 0;
  left: -30vw;
  width: 130vw;
  height: 100vh;
  background: hsla(0, 0%, 100%, 0.454);
  filter: blur(10px);
}
.mist::before,
.mist::after {
  position: absolute;
  content: "";
  width: 500px;
  height: 500px;
  background: radial-gradient(
    ellipse closest-side,
    rgba(245, 245, 245, 0.315),
    transparent
  );
  border-radius: 50%;
}
.mist::before {
  top: 0;
  left: 0;
  animation: shiftMistLeft 10s linear infinite;
}
.mist::after {
  top: 0;
  right: 0;
  animation: shiftMistRight 10s linear infinite;
}

/* rain */

.drop {
  position: absolute;
  top: 3rem;
  background: rgb(102, 181, 255);
  width: 2px;
  height: 7px;
  animation: dropFall 1s linear infinite;
  rotate: 15deg;
  z-index: -1;
}

/* snow */

.snowflake {
  position: absolute;
  top: 3rem;
  background: white;
  width: 4px;
  height: 4px;
  animation: dropFall 3s linear infinite;
  rotate: 5deg;
  z-index: -1;
}

/* blizzard */

.blizzard {
  position: absolute;
  top: 3rem;
  background: white;
  width: 4px;
  height: 4px;
  animation: dropFall 0.7s linear infinite;
  translate: 5rem;
  z-index: -1;
  rotate: 35deg;
}

/* blowing snow */

.blowingSnowGenerator {
  position: fixed;
  height: 40%;
  right: 0;
  bottom: 0;
}

.blowingSnow {
  position: absolute;
  top: 3rem;
  background: white;
  width: 4px;
  height: 4px;
  animation: blowSomeSnow 1.5s linear infinite;
  rotate: 90deg;
  z-index: -1;
}

/* ice pellets */

.pellets {
  position: absolute;
  top: 3rem;
  background: rgb(255, 255, 255);
  width: 2px;
  height: 7px;
  animation: dropFall 0.7s linear infinite;
  rotate: 15deg;
  z-index: -1;
}

/* BACKGROUND ANIMATION */

@keyframes shiftMistRight {
  0% {
    transform: translate(100vw, 0);
  }
  100% {
    transform: translate(-100vw, 0);
  }
}
@keyframes shiftMistLeft {
  0% {
    transform: translate(-100vw, 50vh);
  }
  100% {
    transform: translate(100vw, 50vh);
  }
}

@keyframes cloudPassBy {
  0% {
    transform: translate(-90vw, 0);
  }
  65% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(90vw, 0);
  }
}

@keyframes cloudShiftRight {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-10px, -5px);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes cloudShiftLeft {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(10px, 10px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes thunderStrike {
  0% {
    filter: drop-shadow(5px 5px 0 #0005) /* drop-shadow(0 0 0 #fff) */
      brightness(1);
  }
  87% {
    filter: drop-shadow(5px 5px 0 #0005) /* drop-shadow(0 0 0 #fff) */
      brightness(1);
  }
  90% {
    filter: /* drop-shadow(5px 5px 0 #0005) */ drop-shadow(0 0 50px #fff)
      brightness(10);
  }
  92% {
    filter: drop-shadow(5px 5px 0 #0005) /* drop-shadow(0 0 0 #fff) */
      brightness(1);
  }
  97% {
    filter: /* drop-shadow(5px 5px 0 #0005) */ drop-shadow(0 0 50px #fff)
      brightness(10);
  }
  100% {
    filter: drop-shadow(5px 5px 0 #0005) /* drop-shadow(0 0 0 #fff) */
      brightness(1);
  }
}

@keyframes dropFall {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100vh);
  }
}
@keyframes blowSomeSnow {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(2rem, 25vw);
  }
  75% {
    transform: translate(-2rem, 75vw);
  }
  100% {
    transform: translate(0, 100vw);
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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AACpB;AACA;EACE,MAAM;EACN,OAAO;EACP,4CAA4C;AAC9C;AACA;EACE,MAAM;EACN,QAAQ;EACR,6CAA6C;AAC/C;;AAEA,SAAS;;AAET;EACE,kBAAkB;EAClB,SAAS;EACT,8BAA8B;EAC9B,UAAU;EACV,WAAW;EACX,sCAAsC;EACtC,aAAa;EACb,WAAW;AACb;;AAEA,SAAS;;AAET;EACE,kBAAkB;EAClB,SAAS;EACT,iBAAiB;EACjB,UAAU;EACV,WAAW;EACX,sCAAsC;EACtC,YAAY;EACZ,WAAW;AACb;;AAEA,aAAa;;AAEb;EACE,kBAAkB;EAClB,SAAS;EACT,iBAAiB;EACjB,UAAU;EACV,WAAW;EACX,wCAAwC;EACxC,eAAe;EACf,WAAW;EACX,aAAa;AACf;;AAEA,iBAAiB;;AAEjB;EACE,eAAe;EACf,WAAW;EACX,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,iBAAiB;EACjB,UAAU;EACV,WAAW;EACX,4CAA4C;EAC5C,aAAa;EACb,WAAW;AACb;;AAEA,gBAAgB;;AAEhB;EACE,kBAAkB;EAClB,SAAS;EACT,8BAA8B;EAC9B,UAAU;EACV,WAAW;EACX,wCAAwC;EACxC,aAAa;EACb,WAAW;AACb;;AAEA,yBAAyB;;AAEzB;EACE;IACE,8BAA8B;EAChC;EACA;IACE,+BAA+B;EACjC;AACF;AACA;EACE;IACE,kCAAkC;EACpC;EACA;IACE,iCAAiC;EACnC;AACF;;AAEA;EACE;IACE,8BAA8B;EAChC;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,6BAA6B;EAC/B;AACF;;AAEA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,0BAA0B;EAC5B;AACF;AACA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,0BAA0B;EAC5B;AACF;;AAEA;EACE;IACE;mBACe;EACjB;EACA;IACE;mBACe;EACjB;EACA;IACE;oBACgB;EAClB;EACA;IACE;mBACe;EACjB;EACA;IACE;oBACgB;EAClB;EACA;IACE;mBACe;EACjB;AACF;;AAEA;EACE;IACE,wBAAwB;EAC1B;EACA;IACE,4BAA4B;EAC9B;AACF;AACA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,8BAA8B;EAChC;AACF","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* VARIABLES */\r\n:root {\r\n  --BACKGROUND-LG: linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54));\r\n}\r\n\r\n/* \r\nlinear-gradient(skyblue, rgb(179, 179, 179)); sunny\r\nlinear-gradient(rgb(28, 24, 55), rgb(17, 15, 32)); clear\r\nlinear-gradient(rgb(181, 181, 181), rgb(78, 78, 78)); cloudy\r\nlinear-gradient(rgb(214, 214, 214), rgb(121, 121, 121)); blowing snow\r\nlinear-gradient(rgb(75, 75, 75), rgb(54, 54, 54)); heavy reain\r\n */\r\n\r\nbody {\r\n  height: 100vh;\r\n  background-color: dimgray;\r\n  overflow: hidden;\r\n}\r\n\r\n/* HEADER */\r\n\r\nheader {\r\n  width: 100%;\r\n  height: 10vh;\r\n  display: grid;\r\n  justify-items: center;\r\n}\r\n\r\n/* SEARCHBR */\r\n\r\n.search {\r\n  width: 300px;\r\n  display: flex;\r\n  padding: 0.4rem;\r\n  height: 50px;\r\n  color: aliceblue;\r\n}\r\n\r\n.errorElement {\r\n  display: grid;\r\n  position: absolute;\r\n  width: 290px;\r\n  height: 2.5rem;\r\n  padding: 0.4rem 1rem;\r\n  border: 2px solid black;\r\n  top: 3rem;\r\n  border-radius: 20px;\r\n  font-size: 1.3rem;\r\n  opacity: 0;\r\n  background-color: white;\r\n  color: black;\r\n  transition: opacity 1s ease;\r\n  z-index: 3;\r\n}\r\n\r\n.searchInput {\r\n  width: 100%;\r\n  border: 2px solid black;\r\n  border-radius: 20px 0 0 20px;\r\n  padding: 0 1rem;\r\n  font-size: 1.3rem;\r\n  outline: none;\r\n}\r\n.searchButton {\r\n  width: 70px;\r\n  border: none;\r\n  background: black;\r\n  border-radius: 0 20px 20px 0;\r\n}\r\n.searchButton::after {\r\n  display: block;\r\n  margin: auto;\r\n  height: 35px;\r\n  width: 35px;\r\n  content: \"\";\r\n  -webkit-mask: url(Img/magnify.svg) no-repeat 50% 50%;\r\n  mask: url(Img/magnify.svg) no-repeat 50% 50%;\r\n  -webkit-mask-size: cover;\r\n  mask-size: cover;\r\n  background-color: white;\r\n}\r\n.searchButton:hover {\r\n  background-color: white;\r\n}\r\n.searchButton:hover::after {\r\n  background-color: black;\r\n}\r\n\r\n.visible {\r\n  opacity: 1;\r\n}\r\n\r\n/* MAIN */\r\n\r\nmain {\r\n  position: relative;\r\n}\r\n\r\n.mainContainer {\r\n  height: 100%;\r\n  width: clamp(320px, 80%, 900px);\r\n  margin: auto;\r\n}\r\n\r\n.light {\r\n  color: aliceblue;\r\n  background: rgba(0, 0, 0, 0.199);\r\n}\r\n\r\n.dark {\r\n  color: black;\r\n  background: rgba(240, 248, 255, 0.224);\r\n}\r\n\r\n/* OVERVIEW */\r\n\r\n.overviewContainer {\r\n  padding: 1rem;\r\n  display: grid;\r\n  grid-template-columns: 1.5fr 1fr;\r\n  gap: 0.4rem;\r\n}\r\n\r\n.nameWrapper {\r\n  display: grid;\r\n  grid-template-rows: 1fr min-content min-content min-content;\r\n  align-items: center;\r\n}\r\n.locationCity {\r\n  font-weight: bold;\r\n  font-size: 1.6rem;\r\n  align-self: end;\r\n}\r\n.locationCountry {\r\n  font-weight: bolder;\r\n  font-size: 1.2rem;\r\n}\r\n.localDate,\r\n.localDate__c {\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  align-self: start;\r\n}\r\n.localTime {\r\n  font-weight: bold;\r\n  font-size: 1.2rem;\r\n}\r\n.weatherType {\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.weatherWrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  place-items: center;\r\n  gap: 0.2rem;\r\n}\r\n.temperature,\r\n.temperature__b,\r\n.temperature__c {\r\n  font-weight: bold;\r\n  font-size: 2.5rem;\r\n  grid-column: 1 /-1;\r\n}\r\n.currentWeatherImg {\r\n  border-radius: 10px;\r\n}\r\n.localTime,\r\n.localTime__c {\r\n  font-size: 1.2rem;\r\n}\r\n.UV,\r\n.UV__c {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n/* WEATHERDETAILS */\r\n\r\n.weatherDetailsContainer {\r\n  display: grid;\r\n  padding: 0 1rem 1rem 1rem;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: repeat(3, 2rem);\r\n  place-content: center;\r\n  gap: 0.5rem;\r\n  white-space: pre-line;\r\n}\r\n.WDSpan {\r\n  font-weight: bold;\r\n}\r\n\r\n/* TOGGEL */\r\n\r\n.toggleComponent {\r\n  position: relative;\r\n  width: 2.5rem;\r\n  height: min-content;\r\n  border-radius: 20px;\r\n  border: 2px solid aliceblue;\r\n  background: black;\r\n  margin: 0 1rem 0 1rem;\r\n}\r\n.toggleBtn {\r\n  position: relative;\r\n  width: 1rem;\r\n  height: 1rem;\r\n  border-radius: 50%;\r\n  background: aliceblue;\r\n  transition: transform 0.5s ease;\r\n}\r\n.left {\r\n  position: relative;\r\n  transform: translate(0rem);\r\n}\r\n.right {\r\n  position: relative;\r\n  transform: translate(1.3rem);\r\n}\r\n\r\n.btnWrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n.showoff {\r\n  width: max-content;\r\n  padding: 0.1rem;\r\n  height: 1.3rem;\r\n  border-radius: 20px;\r\n}\r\n\r\n/* FORECAST */\r\n\r\n.forecastContainer,\r\n.forecastContainer__c {\r\n  margin: 1rem;\r\n  height: min-content;\r\n  overflow-y: hidden;\r\n  overflow-x: auto;\r\n  display: grid;\r\n  grid-template-columns: repeat(24, 7rem);\r\n  border: 2px solid aliceblue;\r\n  color: aliceblue;\r\n}\r\n\r\n.hourElement,\r\n.dayElement,\r\n.hourElement__c {\r\n  height: 25vh;\r\n  width: 7rem;\r\n  padding: 0.4rem;\r\n  display: grid;\r\n  grid-template-rows: repeat(4, min-content);\r\n  place-items: center;\r\n  border-right: 2px solid aliceblue;\r\n  transition: all 0.7s ease;\r\n}\r\n.hour,\r\n.day {\r\n  padding-bottom: 0.2rem;\r\n  font-weight: bold;\r\n  font-size: 1rem;\r\n  pointer-events: none;\r\n  white-space: nowrap;\r\n}\r\n.hourIcon,\r\n.dayIcon {\r\n  pointer-events: none;\r\n}\r\n.hourTemp,\r\n.dayTemp {\r\n  padding-top: 0.2rem;\r\n  font-weight: bold;\r\n  font-size: 1.2rem;\r\n  pointer-events: none;\r\n}\r\n.wind {\r\n  pointer-events: none;\r\n}\r\n\r\n/* FOOTER */\r\n\r\nfooter {\r\n  height: 1.5rem;\r\n  width: 100%;\r\n  position: fixed;\r\n  bottom: 0;\r\n  display: grid;\r\n  justify-items: center;\r\n}\r\n\r\n.footerA:any-link {\r\n  color: aliceblue;\r\n}\r\n\r\n/* SPINNIE */\r\n\r\n.spinnieContainer {\r\n  display: none;\r\n  position: fixed;\r\n  place-items: center;\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-color: hsla(0, 0%, 0%, 0.749);\r\n  overflow: hidden;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.spinnie {\r\n  display: grid;\r\n  place-content: center;\r\n  position: relative;\r\n  height: 200px;\r\n  width: 200px;\r\n  border-radius: 50%;\r\n  animation: rotate 2s linear infinite;\r\n}\r\n.spinnieOpposite {\r\n  display: grid;\r\n  position: relative;\r\n  height: 150px;\r\n  width: 150px;\r\n  border-radius: 50%;\r\n  animation: rotateOpposite 1s linear infinite;\r\n}\r\n.spinnie::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 20px;\r\n  width: 20px;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n}\r\n.spinnie::after {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 20px;\r\n  width: 20px;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  right: 0;\r\n}\r\n.spinnieOpposite::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 20px;\r\n  width: 20px;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n}\r\n.spinnieOpposite::after {\r\n  justify-self: right;\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 20px;\r\n  width: 20px;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n}\r\n\r\n@keyframes rotate {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes rotateOpposite {\r\n  0% {\r\n    transform: rotate(360deg);\r\n  }\r\n  100% {\r\n    transform: rotate(0deg);\r\n  }\r\n}\r\n\r\n/* COVER */\r\n\r\n.detailsCover__c,\r\n.detailsCover {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 102vh;\r\n  top: 0;\r\n  left: 0;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n.coverContainer__c,\r\n.coverContainer {\r\n  height: 100vh;\r\n  position: relative;\r\n  width: clamp(320px, 80%, 900px);\r\n  margin: auto;\r\n  display: grid;\r\n  grid-template-columns: clamp(320px, 100%, 900px);\r\n  grid-template-rows: 1fr 2fr;\r\n}\r\n.dataContainer__c,\r\n.dataContainer {\r\n  position: relative;\r\n  grid-row: 2/-1;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.collapseCover,\r\n.collapseCover__c {\r\n  width: 2rem;\r\n  height: 2rem;\r\n  position: fixed;\r\n  right: 1rem;\r\n  top: 1rem;\r\n  rotate: 45deg;\r\n  font-size: 2rem;\r\n  z-index: 3;\r\n  display: grid;\r\n  place-content: center;\r\n  color: aliceblue;\r\n  font-weight: bold;\r\n}\r\n\r\n.expanded {\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n}\r\n\r\n.expand,\r\n.expand__c {\r\n  width: 102%;\r\n  height: 100vh;\r\n}\r\n.expand > *,\r\n.expand__c > * {\r\n  display: none;\r\n}\r\n\r\n/* SCROLLBAR */\r\n\r\n* {\r\n  scrollbar-width: thin;\r\n  scrollbar-color: transparent aliceblue;\r\n}\r\n*::-webkit-scrollbar {\r\n  width: 4px;\r\n}\r\n\r\n*::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n*::-webkit-scrollbar-thumb {\r\n  background-color: aliceblue;\r\n  border-radius: 3px;\r\n}\r\n\r\n/* BACKGROUND */\r\n\r\n.background {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  z-index: -3;\r\n}\r\n.backgroundContainer {\r\n  position: relative;\r\n  top: 0;\r\n  height: 100%;\r\n  width: clamp(320px, 80%, 900px);\r\n  margin: auto;\r\n  z-index: -1;\r\n}\r\n.background__c,\r\n.background__b {\r\n  position: fixed;\r\n  margin: auto;\r\n  width: clamp(320px, 80%, 900px);\r\n  top: 0;\r\n  z-index: -1;\r\n}\r\n\r\n.sun {\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  height: 60px;\r\n  width: 60px;\r\n  top: 5rem;\r\n  right: 4rem;\r\n  background-color: rgb(255, 251, 0);\r\n}\r\n.sun::before {\r\n  display: inline-block;\r\n  position: relative;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  content: \"\";\r\n  border-radius: 50%;\r\n  width: 250px;\r\n  height: 250px;\r\n  background: radial-gradient(\r\n    hsla(60, 100%, 50%, 0.712),\r\n    hsla(60, 100%, 50%, 0) 70%\r\n  );\r\n}\r\n.moon {\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  height: 60px;\r\n  width: 60px;\r\n  top: 5rem;\r\n  right: 4rem;\r\n  background-color: rgb(209, 237, 255);\r\n}\r\n.moon::before {\r\n  display: inline-block;\r\n  position: relative;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  content: \"\";\r\n  border-radius: 50%;\r\n  width: 150px;\r\n  height: 150px;\r\n  background: radial-gradient(\r\n    hsla(186, 88%, 84%, 0.224),\r\n    hsla(192, 100%, 50%, 0) 70%\r\n  );\r\n}\r\n\r\n/* cloud */\r\n\r\n.darkCloud,\r\n.thunderCloud,\r\n.cloud {\r\n  /* filter: drop-shadow(5px 5px 0 #0005); */\r\n  height: 17vh;\r\n  width: 17vh;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  top: 2vh;\r\n  right: 26vw;\r\n  background: linear-gradient(rgb(234, 234, 234), rgb(194, 193, 193));\r\n  border-bottom: 2px solid grey;\r\n  animation: cloudPassBy 20s linear infinite;\r\n  z-index: 3;\r\n}\r\n.darkCloud::before,\r\n.thunderCloud::before,\r\n.cloud::before {\r\n  /* filter: drop-shadow(5px 5px 0 #0005); */\r\n  display: inline-block;\r\n  position: relative;\r\n  content: \"\";\r\n  width: 12vh;\r\n  height: 12vh;\r\n  border-radius: 50%;\r\n  background: linear-gradient(rgb(234, 234, 234), rgb(194, 193, 193));\r\n  border-bottom: 2px solid grey;\r\n  top: 5vh;\r\n  left: -7vh;\r\n}\r\n.darkCloud::after,\r\n.thunderCloud::after,\r\n.cloud::after {\r\n  /* filter: drop-shadow(5px 5px 0 #0005); */\r\n  display: inline-block;\r\n  position: relative;\r\n  content: \"\";\r\n  width: 15vh;\r\n  height: 15vh;\r\n  border-radius: 50%;\r\n  background: linear-gradient(rgb(234, 234, 234), rgb(194, 193, 193));\r\n  border-bottom: 2px solid grey;\r\n  top: -10vh;\r\n  left: 10vh;\r\n}\r\n.darkCloud:first-of-type,\r\n.thunderCloud:first-of-type,\r\n.cloud:first-of-type {\r\n  top: 15vh;\r\n  animation: cloudPassBy 20s linear infinite;\r\n  transform: translate(-90vw, 0);\r\n  z-index: 2;\r\n}\r\n.darkCloud:nth-of-type(2),\r\n.thunderCloud:nth-of-type(2),\r\n.cloud:nth-of-type(2) {\r\n  top: 20vh;\r\n  animation: cloudPassBy 20s linear infinite;\r\n  animation-delay: 10s;\r\n  transform: translate(-90vw, 0);\r\n  z-index: 2;\r\n}\r\n.darkCloud:nth-of-type(3),\r\n.thunderCloud:nth-of-type(3),\r\n.cloud:nth-of-type(3) {\r\n  top: 25vh;\r\n  animation: cloudPassBy 20s linear infinite;\r\n  animation-delay: 15s;\r\n  transform: translate(-90vw, 0);\r\n  z-index: 1;\r\n}\r\n\r\n/* dark cloud */\r\n\r\n.darkCloud::before,\r\n.darkCloud::after,\r\n.darkCloud {\r\n  /* filter: drop-shadow(5px 5px 0 #0005); */\r\n  background: linear-gradient(rgb(124, 124, 124), rgb(80, 80, 80));\r\n}\r\n\r\n/* big cloud */\r\n\r\n.bigDarkCloud,\r\n.thunderWrapper,\r\n.bigCloud {\r\n  position: absolute;\r\n  top: 0;\r\n  left: -25vw;\r\n  z-index: 4;\r\n  animation: cloudShiftRight 10s ease-in-out infinite;\r\n}\r\n.cloudPart {\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  background: linear-gradient(rgb(234, 234, 234), rgb(194, 193, 193));\r\n  border-bottom: 2px solid grey;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n.cloudPart:first-of-type {\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  background: linear-gradient(rgb(234, 234, 234), rgb(194, 193, 193));\r\n  border-bottom: 2px solid grey;\r\n  left: 0;\r\n  top: -4vw;\r\n}\r\n.cloudPart:first-of-type::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  background: linear-gradient(rgb(234, 234, 234), rgb(194, 193, 193));\r\n  border-bottom: 2px solid grey;\r\n  left: 8.5vw;\r\n  top: 0;\r\n}\r\n.cloudPart:nth-of-type(2) {\r\n  left: 17vw;\r\n  top: -4vw;\r\n}\r\n.cloudPart:nth-of-type(2)::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  background: linear-gradient(rgb(234, 234, 234), rgb(194, 193, 193));\r\n  border-bottom: 2px solid grey;\r\n  left: 8vw;\r\n  top: 0;\r\n}\r\n.cloudPart:nth-of-type(3) {\r\n  left: 40vw;\r\n  top: -3vw;\r\n}\r\n.cloudPart:nth-of-type(3)::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  background: linear-gradient(rgb(234, 234, 234), rgb(194, 193, 193));\r\n  border-bottom: 2px solid grey;\r\n  left: -7vw;\r\n  top: 0;\r\n}\r\n.cloudPart:nth-of-type(3)::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  background: linear-gradient(rgb(234, 234, 234), rgb(194, 193, 193));\r\n  border-bottom: 2px solid grey;\r\n  left: 8vw;\r\n  top: 0;\r\n}\r\n\r\n.bigCloud:nth-of-type(2),\r\n.thunderWrapper:nth-of-type(2),\r\n.bigDarkCloud:nth-of-type(2) {\r\n  left: 32vw;\r\n  z-index: 4;\r\n  animation: cloudShiftRight 10s ease-in-out infinite;\r\n}\r\n.bigCloud:nth-of-type(3),\r\n.thunderWrapper:nth-of-type(3),\r\n.bigDarkCloud:nth-of-type(3) {\r\n  top: 9vh;\r\n  left: -25vw;\r\n  z-index: 3;\r\n  animation: cloudShiftLeft 10s ease-in-out infinite;\r\n}\r\n.bigCloud:nth-of-type(4),\r\n.thunderWrapper:nth-of-type(4),\r\n.bigDarkCloud:nth-of-type(4) {\r\n  top: 9vh;\r\n  left: 32vw;\r\n  z-index: 3;\r\n  animation: cloudShiftLeft 10s ease-in-out infinite;\r\n}\r\n.bigCloud:nth-of-type(5),\r\n.thunderWrapper:nth-of-type(5),\r\n.bigDarkCloud:nth-of-type(5) {\r\n  top: 19vh;\r\n  left: -25vw;\r\n  z-index: 2;\r\n  animation: cloudShiftRight 10s ease-in-out infinite;\r\n}\r\n.bigCloud:nth-of-type(6),\r\n.thunderWrapper:nth-of-type(6),\r\n.bigDarkCloud:nth-of-type(6) {\r\n  top: 19vh;\r\n  left: 32vw;\r\n  z-index: 2;\r\n  animation: cloudShiftRight 10s ease-in-out infinite;\r\n}\r\n.bigCloud:nth-of-type(7),\r\n.thunderWrapper:nth-of-type(7),\r\n.bigDarkCloud:nth-of-type(7) {\r\n  top: 27vh;\r\n  left: -25vw;\r\n  z-index: 1;\r\n  animation: cloudShiftLeft 10s ease-in-out infinite;\r\n}\r\n.bigCloud:nth-of-type(8),\r\n.thunderWrapper:nth-of-type(8),\r\n.bigDarkCloud:nth-of-type(8) {\r\n  top: 27vh;\r\n  left: 32vw;\r\n  z-index: 1;\r\n  animation: cloudShiftLeft 10s ease-in-out infinite;\r\n}\r\n\r\n/* big dark cloud */\r\n\r\n.bigDarkCloud > .cloudPart::after,\r\n.bigDarkCloud > .cloudPart,\r\n.bigDarkCloud > .cloudPart::before {\r\n  background: linear-gradient(rgb(124, 124, 124), rgb(80, 80, 80));\r\n}\r\n\r\n/* thunderCloud */\r\n\r\n.thunderCloud:first-of-type,\r\n.thunderCloud {\r\n  filter: drop-shadow(5px 5px 0 #0005);\r\n  background: linear-gradient(rgb(124, 124, 124), rgb(80, 80, 80));\r\n  animation: thunderStrike 10s ease infinite,\r\n    cloudPassBy 20s ease-in-out infinite;\r\n}\r\n.thunderCloud::before,\r\n.thunderCloud::after {\r\n  background: linear-gradient(rgb(124, 124, 124), rgb(80, 80, 80));\r\n}\r\n.thunderCloud:nth-of-type(2) {\r\n  animation: thunderStrike 10s ease infinite,\r\n    cloudPassBy 20s ease-in-out infinite;\r\n  animation-delay: 10s;\r\n}\r\n.thunderCloud:nth-of-type(3) {\r\n  animation: thunderStrike 10s ease infinite,\r\n    cloudPassBy 20s ease-in-out infinite;\r\n  animation-delay: 15s;\r\n}\r\n\r\n/* bigThunderCloud */\r\n\r\n.bigThunderCloud {\r\n  filter: drop-shadow(5px 5px 0 #0005);\r\n}\r\n\r\n.bigThunderCloud > .cloudPart::after,\r\n.bigThunderCloud > .cloudPart,\r\n.bigThunderCloud > .cloudPart::before {\r\n  background: linear-gradient(rgb(124, 124, 124), rgb(80, 80, 80));\r\n}\r\n\r\n.thunderWrapper:first-of-type .bigThunderCloud {\r\n  animation: thunderStrike 10s ease infinite;\r\n}\r\n.thunderWrapper:nth-of-type(2) .bigThunderCloud {\r\n  animation: thunderStrike 10s ease infinite;\r\n  animation-delay: 12s;\r\n}\r\n.thunderWrapper:nth-of-type(3) .bigThunderCloud {\r\n  animation: thunderStrike 10s ease infinite;\r\n  animation-delay: 18s;\r\n}\r\n.thunderWrapper:nth-of-type(4) .bigThunderCloud {\r\n  animation: thunderStrike 10s ease infinite;\r\n  animation-delay: 15s;\r\n}\r\n.thunderWrapper:nth-of-type(5) .bigThunderCloud {\r\n  animation: thunderStrike 10s ease infinite;\r\n  animation-delay: 23s;\r\n}\r\n.thunderWrapper:nth-of-type(6) .bigThunderCloud {\r\n  animation: thunderStrike 10s ease infinite;\r\n  animation-delay: 29s;\r\n}\r\n.thunderWrapper:nth-of-type(7) .bigThunderCloud {\r\n  animation: thunderStrike 10s ease infinite;\r\n  animation-delay: 34s;\r\n}\r\n.thunderWrapper:nth-of-type(8) .bigThunderCloud {\r\n  animation: thunderStrike 10s ease infinite;\r\n  animation-delay: 38s;\r\n}\r\n.thunderWrapper:nth-of-type(9) .bigThunderCloud {\r\n  animation: thunderStrike 10s ease infinite;\r\n  animation-delay: 43s;\r\n}\r\n\r\n/* big clouds resizing */\r\n\r\n.bigThunderCloud,\r\n.bigDarkCloud,\r\n.bigCloud {\r\n  height: 20vh;\r\n  width: 50vw;\r\n}\r\n.cloudPart {\r\n  height: clamp(95px, 12vw, 17vw);\r\n  width: clamp(95px, 12vw, 17vw);\r\n}\r\n.cloudPart:first-of-type::after {\r\n  height: clamp(105px, 14vw, 19vw);\r\n  width: clamp(105px, 14vw, 19vw);\r\n}\r\n.cloudPart:nth-of-type(2) {\r\n  height: clamp(89px, 12vw, 16vw);\r\n  width: clamp(89px, 12vw, 16vw);\r\n}\r\n.cloudPart:nth-of-type(2)::after {\r\n  height: clamp(100px, 13vw, 18vw);\r\n  width: clamp(100px, 13vw, 18vw);\r\n}\r\n.cloudPart:nth-of-type(3) {\r\n  height: clamp(90px, 12vw, 17vw);\r\n  width: clamp(90px, 12vw, 17vw);\r\n}\r\n.cloudPart:nth-of-type(3)::before {\r\n  height: clamp(110px, 14vw, 19vw);\r\n  width: clamp(110px, 14vw, 19vw);\r\n}\r\n.cloudPart:nth-of-type(3)::after {\r\n  height: clamp(100px, 13vw, 18vw);\r\n  width: clamp(100px, 13vw, 18vw);\r\n}\r\n\r\n/* mist */\r\n\r\n.mist {\r\n  position: absolute;\r\n  top: 0;\r\n  left: -30vw;\r\n  width: 130vw;\r\n  height: 100vh;\r\n  background: hsla(0, 0%, 100%, 0.454);\r\n  filter: blur(10px);\r\n}\r\n.mist::before,\r\n.mist::after {\r\n  position: absolute;\r\n  content: \"\";\r\n  width: 500px;\r\n  height: 500px;\r\n  background: radial-gradient(\r\n    ellipse closest-side,\r\n    rgba(245, 245, 245, 0.315),\r\n    transparent\r\n  );\r\n  border-radius: 50%;\r\n}\r\n.mist::before {\r\n  top: 0;\r\n  left: 0;\r\n  animation: shiftMistLeft 10s linear infinite;\r\n}\r\n.mist::after {\r\n  top: 0;\r\n  right: 0;\r\n  animation: shiftMistRight 10s linear infinite;\r\n}\r\n\r\n/* rain */\r\n\r\n.drop {\r\n  position: absolute;\r\n  top: 3rem;\r\n  background: rgb(102, 181, 255);\r\n  width: 2px;\r\n  height: 7px;\r\n  animation: dropFall 1s linear infinite;\r\n  rotate: 15deg;\r\n  z-index: -1;\r\n}\r\n\r\n/* snow */\r\n\r\n.snowflake {\r\n  position: absolute;\r\n  top: 3rem;\r\n  background: white;\r\n  width: 4px;\r\n  height: 4px;\r\n  animation: dropFall 3s linear infinite;\r\n  rotate: 5deg;\r\n  z-index: -1;\r\n}\r\n\r\n/* blizzard */\r\n\r\n.blizzard {\r\n  position: absolute;\r\n  top: 3rem;\r\n  background: white;\r\n  width: 4px;\r\n  height: 4px;\r\n  animation: dropFall 0.7s linear infinite;\r\n  translate: 5rem;\r\n  z-index: -1;\r\n  rotate: 35deg;\r\n}\r\n\r\n/* blowing snow */\r\n\r\n.blowingSnowGenerator {\r\n  position: fixed;\r\n  height: 40%;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.blowingSnow {\r\n  position: absolute;\r\n  top: 3rem;\r\n  background: white;\r\n  width: 4px;\r\n  height: 4px;\r\n  animation: blowSomeSnow 1.5s linear infinite;\r\n  rotate: 90deg;\r\n  z-index: -1;\r\n}\r\n\r\n/* ice pellets */\r\n\r\n.pellets {\r\n  position: absolute;\r\n  top: 3rem;\r\n  background: rgb(255, 255, 255);\r\n  width: 2px;\r\n  height: 7px;\r\n  animation: dropFall 0.7s linear infinite;\r\n  rotate: 15deg;\r\n  z-index: -1;\r\n}\r\n\r\n/* BACKGROUND ANIMATION */\r\n\r\n@keyframes shiftMistRight {\r\n  0% {\r\n    transform: translate(100vw, 0);\r\n  }\r\n  100% {\r\n    transform: translate(-100vw, 0);\r\n  }\r\n}\r\n@keyframes shiftMistLeft {\r\n  0% {\r\n    transform: translate(-100vw, 50vh);\r\n  }\r\n  100% {\r\n    transform: translate(100vw, 50vh);\r\n  }\r\n}\r\n\r\n@keyframes cloudPassBy {\r\n  0% {\r\n    transform: translate(-90vw, 0);\r\n  }\r\n  65% {\r\n    transform: translate(0, 0);\r\n  }\r\n  100% {\r\n    transform: translate(90vw, 0);\r\n  }\r\n}\r\n\r\n@keyframes cloudShiftRight {\r\n  0% {\r\n    transform: translate(0, 0);\r\n  }\r\n  50% {\r\n    transform: translate(-10px, -5px);\r\n  }\r\n  100% {\r\n    transform: translate(0, 0);\r\n  }\r\n}\r\n@keyframes cloudShiftLeft {\r\n  0% {\r\n    transform: translate(0, 0);\r\n  }\r\n  50% {\r\n    transform: translate(10px, 10px);\r\n  }\r\n  100% {\r\n    transform: translate(0, 0);\r\n  }\r\n}\r\n\r\n@keyframes thunderStrike {\r\n  0% {\r\n    filter: drop-shadow(5px 5px 0 #0005) /* drop-shadow(0 0 0 #fff) */\r\n      brightness(1);\r\n  }\r\n  87% {\r\n    filter: drop-shadow(5px 5px 0 #0005) /* drop-shadow(0 0 0 #fff) */\r\n      brightness(1);\r\n  }\r\n  90% {\r\n    filter: /* drop-shadow(5px 5px 0 #0005) */ drop-shadow(0 0 50px #fff)\r\n      brightness(10);\r\n  }\r\n  92% {\r\n    filter: drop-shadow(5px 5px 0 #0005) /* drop-shadow(0 0 0 #fff) */\r\n      brightness(1);\r\n  }\r\n  97% {\r\n    filter: /* drop-shadow(5px 5px 0 #0005) */ drop-shadow(0 0 50px #fff)\r\n      brightness(10);\r\n  }\r\n  100% {\r\n    filter: drop-shadow(5px 5px 0 #0005) /* drop-shadow(0 0 0 #fff) */\r\n      brightness(1);\r\n  }\r\n}\r\n\r\n@keyframes dropFall {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n  100% {\r\n    transform: translateY(100vh);\r\n  }\r\n}\r\n@keyframes blowSomeSnow {\r\n  0% {\r\n    transform: translate(0, 0);\r\n  }\r\n  25% {\r\n    transform: translate(2rem, 25vw);\r\n  }\r\n  75% {\r\n    transform: translate(-2rem, 75vw);\r\n  }\r\n  100% {\r\n    transform: translate(0, 100vw);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/backgroundColor.js":
/*!********************************!*\
  !*** ./src/backgroundColor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundColor: () => (/* binding */ backgroundColor)
/* harmony export */ });
const backgroundColor = (object) => {
  const backgroundColors = {
    Sunny: "linear-gradient(skyblue, rgb(179, 179, 179))",
    Clear: "linear-gradient(rgb(28, 24, 55), rgb(17, 15, 32))",
    "Partly cloudy": "linear-gradient(skyblue, rgb(179, 179, 179))",
    Cloudy: "linear-gradient(rgb(181, 181, 181), rgb(112, 112, 112))",
    Overcast: "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    Mist: "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Patchy rain possible":
      "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Patchy snow possible": "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Patchy sleet possible": "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Patchy freezing drizzle possible":
      "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Thundery outbreaks possible":
      "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Blowing snow": "linear-gradient(rgb(214, 214, 214), rgb(121, 121, 121))",
    Blizzard: "linear-gradient(rgb(214, 214, 214), rgb(121, 121, 121))",
    Fog: "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Freezing fog": "linear-gradient(rgb(214, 214, 214), rgb(121, 121, 121))",
    "Patchy light drizzle": "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Light drizzle": "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Freezing drizzle": "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Heavy freezing drizzle":
      "linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54))",
    "Patchy light rain": "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Light rain": "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Moderate rain at times":
      "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Moderate rain": "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Heavy rain at times": "linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54))",
    "Heavy rain": "linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54))",
    "Light freezing rain":
      "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Moderate or heavy freezing rain":
      "linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54))",
    "Light sleet": "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Moderate or heavy sleet":
      "linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54))",
    "Patchy light snow": "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Light snow": "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Patchy moderate snow": "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Moderate snow": "linear-gradient(rgb(214, 214, 214), rgb(121, 121, 121))",
    "Patchy heavy snow":
      "linear-gradient(rgb(214, 214, 214), rgb(121, 121, 121))",
    "Heavy snow": "linear-gradient(rgb(214, 214, 214), rgb(121, 121, 121))",
    "Ice pellets": "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Light rain shower": "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Moderate or heavy rain shower":
      "linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54))",
    "Torrential rain shower":
      "linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54))",
    "Light sleet showers": "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Moderate or heavy sleet showers":
      "linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54))",
    "Light snow showers":
      "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Moderate or heavy snow showers":
      "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Light showers of ice pellets":
      "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Moderate or heavy showers of ice pellets":
      "linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54))",
    "Patchy light rain with thunder":
      "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Moderate or heavy rain with thunder":
      "linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54))",
    "Patchy light snow with thunder":
      "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Moderate or heavy snow with thunder":
      "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
  };
  return backgroundColors[object];
};


/***/ }),

/***/ "./src/clearForecast.js":
/*!******************************!*\
  !*** ./src/clearForecast.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearForecast: () => (/* binding */ clearForecast)
/* harmony export */ });
const clearForecast = () => {
  const forecastContainer = document.querySelectorAll(".forecastContainer");
  forecastContainer.forEach((container) => {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  });
};


/***/ }),

/***/ "./src/currentLocation.js":
/*!********************************!*\
  !*** ./src/currentLocation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentLocation: () => (/* binding */ currentLocation)
/* harmony export */ });
const checkIfLocationAvailable = () => {
  if ("geolocation" in navigator) {
    return true;
  } else {
    return false;
  }
};

const getCoords = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const getLocation = async () => {
  if (checkIfLocationAvailable()) {
    try {
      const location = await getCoords();
      const lat = location.coords.latitude;
      const long = location.coords.longitude;
      if (location) {
        return `${lat}, ${long}`;
      }
    } catch (err) {
      console.log(err, "locationError");
      return "auto:ip";
    }
  }
};

const currentLocation = getLocation();


/***/ }),

/***/ "./src/displayDaily.js":
/*!*****************************!*\
  !*** ./src/displayDaily.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayDaily: () => (/* binding */ displayDaily)
/* harmony export */ });
/* harmony import */ var _backgroundColor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backgroundColor.js */ "./src/backgroundColor.js");


const displayDaily = (array) => {
  const forecastContainer = document.querySelectorAll(".forecastContainer");
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  array.forEach((day) => {
    const dayDate = new Date(day.date);
    const options = {
      weekday: "long",
      day: "numeric",
    };
    const formatDate = dayDate.toLocaleDateString(undefined, options);
    const dayElement = `<div class="dayElement dark" data-date="${
      day.date
    }" style="background: ${(0,_backgroundColor_js__WEBPACK_IMPORTED_MODULE_0__.backgroundColor)(day.day.condition.text)}">
            <p class="day">${formatDate}</p>
            <img src="${day.day.condition.icon}" alt="${
      day.day.condition.text
    }" class="dayIcon" width="50" height="50" />
            <p class="dayTemp">${day.day.avgtemp_c}C</p>
            <p class="wind"> ${day.day.maxwind_kph}kph</p>
          </div>`;
    forecastContainer.forEach((container) =>
      container.insertAdjacentHTML("beforeend", dayElement)
    );
  });

  const currentDayElement = document.querySelector(
    `[data-date="${formattedDate}"]`
  );
  currentDayElement.style.border = "2px solid black";
  currentDayElement.scrollIntoView({
    behavior: "smooth",
    inline: "start",
  });
};


/***/ }),

/***/ "./src/displayDetailsCover.js":
/*!************************************!*\
  !*** ./src/displayDetailsCover.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayDetailsCover: () => (/* binding */ displayDetailsCover),
/* harmony export */   displayHours: () => (/* binding */ displayHours)
/* harmony export */ });
/* harmony import */ var _backgroundColor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backgroundColor.js */ "./src/backgroundColor.js");
/* harmony import */ var _renderCover_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCover.js */ "./src/renderCover.js");
/* harmony import */ var _populateBackground_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populateBackground.js */ "./src/populateBackground.js");




const displayDetailsCover = (ev, objects) => {
  (0,_renderCover_js__WEBPACK_IMPORTED_MODULE_1__.renderCover)(isSecondCover);
  expand(ev, objects);
};

let originalPosition = [];
let isSecondCover = false;

const expand = (ev, objects) => {
  const targetElement = ev.target;
  originalPosition[isSecondCover ? 1 : 0] =
    targetElement.getBoundingClientRect();

  targetElement.style.position = "fixed";
  targetElement.style.top = originalPosition[isSecondCover ? 1 : 0].top + "px";
  targetElement.style.left =
    originalPosition[isSecondCover ? 1 : 0].left + "px";

  setTimeout(() => {
    targetElement.style.top = 0;
    targetElement.style.left = 0;
  }, 0);
  insertPlaceholder(targetElement);
  targetElement.classList.add(`expand${isSecondCover ? "__c" : ""}`);
  displayCover(ev, objects);
};

const displayCover = (ev, objects) => {
  const coverElement = document.querySelector(
    `.detailsCover${isSecondCover ? "__c" : ""}`
  );
  const targetDay = objects.find((obj) => obj.date === ev.target.dataset.date);

  coverElement.classList.add("expanded");
  coverElement.style.transition = "opacity 0.2s ease 0.7s";
  if (
    ev.target.classList.contains("hourElement") ||
    ev.target.classList.contains("hourElement__c")
  ) {
    populateHourCover(ev, targetDay.hour);
  } else {
    populateDayCover(ev, objects);
  }
  collapseListener();
};

const populateDayCover = (ev, objects) => {
  const coverContainer = document.querySelector(
    `.detailsCover${isSecondCover ? "__c" : ""}`
  );
  const correctDay = objects.find((obj) => obj.date === ev.target.dataset.date);
  coverContainer.style.background = `${(0,_backgroundColor_js__WEBPACK_IMPORTED_MODULE_0__.backgroundColor)(
    correctDay.day.condition.text
  )}`;
  displayLocation(correctDay);
  displayWeather(correctDay.day);
  displayDetails(correctDay.day);
  (0,_populateBackground_js__WEBPACK_IMPORTED_MODULE_2__.populateBackground)(correctDay.day.condition.text, isSecondCover, false);
  displayHours(ev, objects);
};

const populateHourCover = (ev, object) => {
  const dataContainer = document.querySelector(
    `.dataContainer${isSecondCover ? "__c" : ""}`
  );
  const correctHour = object.find(
    (obj) => obj.time.slice(-5) === ev.target.dataset.hour
  );
  const isNight =
    correctHour.time.slice(-5, -3) <= 6 || correctHour.time.slice(-5, -3) >= 20;
  dataContainer.classList.add(isNight ? "light" : "dark");
  displayLocation(correctHour);
  displayWeather(correctHour);
  displayDetails(correctHour);
  (0,_populateBackground_js__WEBPACK_IMPORTED_MODULE_2__.populateBackground)(correctHour.condition.text, isSecondCover, isNight);
};

const displayLocation = (object) => {
  const localDate = document.querySelector(
    `.localDate${isSecondCover ? "__b" : "__c"}`
  );
  const localTime = document.querySelector(
    `.localTime${isSecondCover ? "__b" : "__c"}`
  );
  if (object.time) {
    const newDateObject = new Date(object.time);
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
    };
    const formatDate = newDateObject.toLocaleDateString(undefined, options);
    localDate.textContent = formatDate;
    localTime.textContent = object.time.slice(10);
  } else {
    const newDateObject = new Date(object.date);
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
    };
    const formatDate = newDateObject.toLocaleDateString(undefined, options);
    localDate.textContent = formatDate;
    localTime.textContent = "";
  }
};

const displayWeather = (object) => {
  const temperature = document.querySelector(
    `.temperature${isSecondCover ? "__b" : "__c"}`
  );
  const weatherType = document.querySelector(
    `.weatherType${isSecondCover ? "__b" : "__c"}`
  );
  if (object.temp_c) {
    temperature.textContent = object.temp_c + "C";
  } else {
    temperature.textContent = object.avgtemp_c + "C";
  }

  weatherType.textContent = object.condition.text;
};

const displayDetails = (object) => {
  const feelsLike = document.querySelector(
    `.feelsLike${isSecondCover ? "__b" : "__c"}`
  );
  const humidity = document.querySelector(
    `.humidity${isSecondCover ? "__b" : "__c"}`
  );
  const windSTR = document.querySelector(
    `.windSTR${isSecondCover ? "__b" : "__c"}`
  );
  const windDIR = document.querySelector(
    `.windDIR${isSecondCover ? "__b" : "__c"}`
  );
  const gust = document.querySelector(`.gust${isSecondCover ? "__b" : "__c"}`);
  const vis = document.querySelector(`.vis${isSecondCover ? "__b" : "__c"}`);
  const precip = document.querySelector(
    `.precip${isSecondCover ? "__b" : "__c"}`
  );
  const UV = document.querySelector(`.UV${isSecondCover ? "__b" : "__c"}`);
  const pressure = document.querySelector(
    `.pressure${isSecondCover ? "__b" : "__c"}`
  );
  if (object.feelslike_c) {
    feelsLike.insertAdjacentText("beforeend", `\n ${object.feelslike_c}C`);
    humidity.insertAdjacentText("beforeend", `\n ${object.humidity}%`);
    windSTR.insertAdjacentText("beforeend", `\n ${object.wind_kph}kph`);
    windDIR.insertAdjacentText(
      "beforeend",
      `\n ${object.wind_dir}, ${object.wind_degree}deg`
    );
    gust.insertAdjacentText("beforeend", `\n ${object.gust_kph}kph`);
    vis.insertAdjacentText("beforeend", `\n ${object.vis_km}km`);
    precip.insertAdjacentText("beforeend", `\n ${object.precip_mm}mm`);
    UV.insertAdjacentText("beforeend", `\n ${object.uv}`);
    pressure.insertAdjacentText("beforeend", `\n ${object.pressure_mb}mb`);
  } else {
    const minTempSpan = document.querySelector(".feelsLike__c span");
    const maxTempSpan = document.querySelector(".windDIR__c span");
    const rainChanceSpan = document.querySelector(".gust__c span");
    minTempSpan.textContent = "Min Temp:";
    maxTempSpan.textContent = "Max Temp:";
    rainChanceSpan.textContent = `${
      object.daily_chance_of_rain >= object.daily_chance_of_snow
        ? "Chance of rain:"
        : "Chance of snow:"
    }`;
    feelsLike.insertAdjacentText("beforeend", `\n ${object.mintemp_c}C`);
    windDIR.insertAdjacentText("beforeend", `\n ${object.maxtemp_c}C`);
    precip.insertAdjacentText("beforeend", `\n ${object.totalprecip_mm}mm`);
    windSTR.insertAdjacentText("beforeend", `\n ${object.maxwind_kph}kph`);
    humidity.insertAdjacentText("beforeend", `\n ${object.avghumidity}%`);
    vis.insertAdjacentText("beforeend", `\n ${object.avgvis_km}km`);
    UV.insertAdjacentText("beforeend", `\n ${object.uv}`);
    rainChanceSpan.insertAdjacentText(
      "beforeend",
      ` ${
        object.daily_chance_of_rain >= object.daily_chance_of_snow
          ? object.daily_chance_of_rain
          : object.daily_chance_of_snow
      }`
    );
  }
};

const collapseListener = () => {
  const collapseCover = document.querySelector(
    `.collapseCover${isSecondCover ? "__c" : ""}`
  );
  collapseCover.addEventListener("click", collapse);
};

const collapse = () => {
  const targetElement = document.querySelector(
    `.expand${isSecondCover ? "__c" : ""}`
  );
  const coverElement = document.querySelector(
    `.detailsCover${isSecondCover ? "__c" : ""}`
  );
  coverElement.classList.remove("expanded");
  targetElement.classList.remove(`expand${isSecondCover ? "__c" : ""}`);
  targetElement.style.top = originalPosition[isSecondCover ? 1 : 0].top + "px";
  targetElement.style.left =
    originalPosition[isSecondCover ? 1 : 0].left + "px";
  setTimeout(() => {
    targetElement.style.position = "static";
    removePlaceholder();
    isSecondCover = false;
  }, 700);

  coverElement.style.transition = "opacity 0s ease";
  (0,_renderCover_js__WEBPACK_IMPORTED_MODULE_1__.removeCover)(isSecondCover);
};

const insertPlaceholder = (targetElement) => {
  const placeholder = document.createElement("div");
  placeholder.classList.add("hourElement");
  placeholder.classList.add(`placeholder${isSecondCover ? "__c" : ""}`);
  targetElement.parentNode.insertBefore(placeholder, targetElement);
};

const removePlaceholder = () => {
  const placeholder = document.querySelector(
    `.placeholder${isSecondCover ? "__c" : ""}`
  );
  placeholder.remove();
};

const displayHours = (ev, objects) => {
  const forecastContainer = document.querySelector(".forecastContainer__c");
  const currentDate = new Date();
  currentDate.setMinutes(0);

  objects.forEach((day) => {
    if (ev.target.dataset.date == day.date) {
      day.hour.forEach((hour) => {
        const isNight =
          hour.time.slice(-5, -3) <= 6 || hour.time.slice(-5, -3) >= 20;
        const hourElement = `<div class="hourElement__c" data-hour="${hour.time.slice(
          -5
        )}" data-date="${day.date}" style="background: ${(0,_backgroundColor_js__WEBPACK_IMPORTED_MODULE_0__.backgroundColor)(
          isNight ? "Clear" : hour.condition.text
        )}">
      <p class="hour">${hour.time.slice(-5)}</p>
      <img src="${hour.condition.icon}" alt="${
          hour.condition.text
        }" class="hourIcon" width="50" height="50" />
      <p class="hourTemp">${hour.temp_c}C</p>
      <p class="wind">${hour.wind_dir}, ${hour.wind_kph}kph</p>
    </div>`;
        forecastContainer.insertAdjacentHTML("beforeend", hourElement);
      });
    }
  });
  hourListeners(objects);
};

const hourListeners = (objects) => {
  const hourElements = document.querySelectorAll(".hourElement__c");
  hourElements.forEach((element) => {
    const clickHandler = (ev) => {
      isSecondCover = true;
      displayDetailsCover(ev, objects);
    };
    element.removeEventListener("click", clickHandler);
    element.addEventListener("click", clickHandler);
  });
};


/***/ }),

/***/ "./src/displayHourly.js":
/*!******************************!*\
  !*** ./src/displayHourly.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayHourly: () => (/* binding */ displayHourly)
/* harmony export */ });
/* harmony import */ var _backgroundColor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backgroundColor.js */ "./src/backgroundColor.js");


const displayHourly = (object) => {
  const forecastContainer = document.querySelectorAll(".forecastContainer");
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const currentDate = new Date();
  const currentHour =
    currentDate.getHours() < 10
      ? `0${currentDate.getHours()}`
      : currentDate.getHours();
  object.forEach((day) => {
    if (formattedDate == day.date) {
      day.hour.forEach((hour) => {
        const isNight =
          hour.time.slice(-5, -3) <= 6 || hour.time.slice(-5, -3) >= 20;
        const hourElement = `<div class="hourElement ${
          isNight ? "light " : "dark"
        }" data-hour="${hour.time.slice(-5)}" data-date="${
          day.date
        }" style="background: ${(0,_backgroundColor_js__WEBPACK_IMPORTED_MODULE_0__.backgroundColor)(
          isNight ? "Clear" : hour.condition.text
        )}">
      <p class="hour">${hour.time.slice(-5)}</p>
      <img src="${hour.condition.icon}" alt="${
          hour.condition.text
        }" class="hourIcon" width="50" height="50" />
      <p class="hourTemp">${hour.temp_c}C</p>
      <p class="wind">${hour.wind_dir}, ${hour.wind_kph}kph</p>
    </div>`;
        forecastContainer.forEach((container) =>
          container.insertAdjacentHTML("beforeend", hourElement)
        );
      });
      const currentHourElement = document.querySelector(
        `[data-hour="${currentHour}:00"]`
      );
      currentHourElement.style.border = "2px solid black";
      currentHourElement.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  });
};


/***/ }),

/***/ "./src/displayWeather.js":
/*!*******************************!*\
  !*** ./src/displayWeather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayWeather: () => (/* binding */ displayWeather)
/* harmony export */ });
/* harmony import */ var _toggleDayOrHour_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggleDayOrHour.js */ "./src/toggleDayOrHour.js");
/* harmony import */ var _backgroundColor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backgroundColor.js */ "./src/backgroundColor.js");
/* harmony import */ var _renderMain_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderMain.js */ "./src/renderMain.js");
/* harmony import */ var _populateBackground_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./populateBackground.js */ "./src/populateBackground.js");
/* harmony import */ var _showoff_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showoff.js */ "./src/showoff.js");






const displayWeather = (object) => {
  (0,_renderMain_js__WEBPACK_IMPORTED_MODULE_2__.renderMain)();
  displayLocation(object);
  displayCurrentWeather(object);
  displayDetails(object);
  (0,_toggleDayOrHour_js__WEBPACK_IMPORTED_MODULE_0__.toggleDayOrHour)(object);
  (0,_showoff_js__WEBPACK_IMPORTED_MODULE_4__.showoff)();
};

const displayLocation = (object) => {
  const locationCity = document.querySelector(".locationCity");
  const locationCountry = document.querySelector(".locationCountry");
  const localDate = document.querySelector(".localDate");
  const localTime = document.querySelector(".localTime");

  const newDateObject = new Date(object.location.localtime);
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const formatDate = newDateObject.toLocaleDateString(undefined, options);

  locationCity.textContent = object.location.name;
  locationCountry.textContent = object.location.country;
  localDate.textContent = formatDate;
  localTime.textContent = object.location.localtime.slice(10);
};

const displayCurrentWeather = (object) => {
  const isNight =
    object.location.localtime.slice(-5, -3) <= 6 ||
    object.location.localtime.slice(-5, -3) >= 20;
  const mainContainer = document.querySelector(".mainContainer");
  mainContainer.classList.add(isNight ? "light" : "dark");

  const temperature = document.querySelector(".temperature");
  const weatherType = document.querySelector(".weatherType");
  const background = document.querySelector(".background");

  temperature.textContent = object.current.temp_c + "C";
  weatherType.textContent = object.current.condition.text;
  background.style.background = `${(0,_backgroundColor_js__WEBPACK_IMPORTED_MODULE_1__.backgroundColor)(
    isNight ? "Clear" : object.current.condition.text
  )}`;
  (0,_populateBackground_js__WEBPACK_IMPORTED_MODULE_3__.populateBackground)(object.current.condition.text, false, isNight);
};

const displayDetails = (object) => {
  const feelsLike = document.querySelector(".feelsLike");
  const humidity = document.querySelector(".humidity");
  const windSTR = document.querySelector(".windSTR");
  const windDIR = document.querySelector(".windDIR");
  const gust = document.querySelector(".gust");
  const vis = document.querySelector(".vis");
  const precip = document.querySelector(".precip");
  const UV = document.querySelector(".UV");
  const pressure = document.querySelector(".pressure");

  feelsLike.insertAdjacentText(
    "beforeend",
    `\n ${object.current.feelslike_c}C`
  );
  humidity.insertAdjacentText("beforeend", `\n ${object.current.humidity}%`);
  windSTR.insertAdjacentText("beforeend", `\n ${object.current.wind_kph}kph`);
  windDIR.insertAdjacentText(
    "beforeend",
    `\n ${object.current.wind_dir}, ${object.current.wind_degree}deg`
  );
  gust.insertAdjacentText("beforeend", `\n ${object.current.gust_kph}kph`);
  vis.insertAdjacentText("beforeend", `\n ${object.current.vis_km}km`);
  precip.insertAdjacentText("beforeend", `\n ${object.current.precip_mm}mm`);
  UV.insertAdjacentText("beforeend", `\n ${object.current.uv}`);
  pressure.insertAdjacentText(
    "beforeend",
    `\n ${object.current.pressure_mb}mb`
  );
};


/***/ }),

/***/ "./src/fetchWeather.js":
/*!*****************************!*\
  !*** ./src/fetchWeather.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchWeather: () => (/* binding */ fetchWeather)
/* harmony export */ });
/* harmony import */ var _displayWeather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayWeather.js */ "./src/displayWeather.js");
/* harmony import */ var _currentLocation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentLocation.js */ "./src/currentLocation.js");
/* harmony import */ var _renderMain_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderMain.js */ "./src/renderMain.js");
/* harmony import */ var _weatherKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weatherKey.js */ "./src/weatherKey.js");





const fetchWeather = async (location) => {
  const errorElement = document.querySelector(".errorElement");
  const spinnieContainer = document.querySelector(".spinnieContainer");
  /*   const forecast = "/forecast.json"; */
  /*   const url = new URL("http://api.weatherapi.com/v1" + forecast); */
  /*   const key = weatherKey;
  const query = await location;
  const days = 5;
  url.searchParams.set("key", key);
  url.searchParams.set("q", query);
  url.searchParams.set("days", days); */
  const url = `http://localhost:5000/weather/${await location}`;
  try {
    spinnieContainer.style.display = "grid";
    const response = await fetch(url /* , { mode: "cors" } */);
    const data = await response.json();
    spinnieContainer.style.display = "none";
    errorElement.classList.remove("visible");
    (0,_displayWeather_js__WEBPACK_IMPORTED_MODULE_0__.displayWeather)(data);
    /* if (response.status === 400) {
      errorElement.classList.add("visible");
      errorElement.textContent = "Does such place even exist?";
    } */
  } catch (err) {
    spinnieContainer.style.display = "none";
    errorElement.classList.add("visible");
    errorElement.textContent = "Fetching went wrong";
    console.log(err, "weatherError");
    setTimeout(() => {
      (0,_renderMain_js__WEBPACK_IMPORTED_MODULE_2__.clearMain)();
      fetchWeather(_currentLocation_js__WEBPACK_IMPORTED_MODULE_1__.currentLocation);
    }, 2000);
  }
};


/***/ }),

/***/ "./src/findLocation.js":
/*!*****************************!*\
  !*** ./src/findLocation.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findLocation: () => (/* binding */ findLocation)
/* harmony export */ });
/* harmony import */ var _currentLocation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentLocation.js */ "./src/currentLocation.js");


const findLocation = () => {
  const input = document.querySelector(".searchInput");
  const search = input.value;
  if (search) {
    return search;
  } else {
    return _currentLocation_js__WEBPACK_IMPORTED_MODULE_0__.currentLocation;
  }
};


/***/ }),

/***/ "./src/populateBackground.js":
/*!***********************************!*\
  !*** ./src/populateBackground.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateBackground: () => (/* binding */ populateBackground)
/* harmony export */ });
const populateBackground = (object, isSecondCover, isNight) => {
  const background = document.querySelector(".backgroundContainer");
  const coverBackground = document.querySelector(
    `.background${isSecondCover ? "__b" : "__c"}`
  );
  if (coverBackground) {
    populateCoverBG(object, coverBackground, isNight);
  } else {
    populateMainBG(object, background, isNight);
  }
};

const conditions = {
  Sun: `<div class="sun"></div>`,
  Moon: `<div class="moon"></div>`,
  Sunny: "",
  Clear: "",
  "Partly cloudy": `<div class="cloud"></div>
  <div class="cloud"></div>
  <div class="cloud"></div>`,
  Cloudy: ` <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>`,
  Overcast: ` <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>`,
  "Thundery outbreaks possible": ` <div class="thunderCloud"></div>
  <div class="thunderCloud"></div>
  <div class="thunderCloud"></div>`,
  "Heavy rain": `  <div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  Mist: `  <div class="mist"></div>`,
  "Patchy rain possible": `<div class="cloud"></div>
  <div class="cloud"></div>
  <div class="cloud"></div>`,
  "Patchy snow possible": `<div class="cloud"></div>
<div class="cloud"></div>
<div class="cloud"></div>`,
  "Patchy sleet possible": `<div class="cloud"></div>
<div class="cloud"></div>
<div class="cloud"></div>`,
  "Patchy freezing drizzle possible": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  Fog: `  <div class="mist"></div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>`,
  "Freezing fog": `  <div class="mist"></div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>`,
  "Patchy light drizzle": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Light drizzle": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Freezing drizzle": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Heavy freezing drizzle": `<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Patchy light rain": `<div class="cloud"></div>
<div class="cloud"></div>
<div class="cloud"></div>`,
  "Light rain": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Moderate rain at times": `<div class="cloud"></div>
<div class="cloud"></div>
<div class="cloud"></div>`,
  "Moderate rain": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Heavy rain at times": `<div class="darkCloud"></div>
<div class="darkCloud"></div>
<div class="darkCloud"></div>`,
  "Heavy rain": `<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Light freezing rain": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Moderate or heavy freezing rain": `<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Light sleet": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Moderate or heavy sleet": `<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Patchy light snow": `<div class="cloud"></div>
<div class="cloud"></div>
<div class="cloud"></div>`,
  "Patchy moderate snow": `<div class="cloud"></div>
<div class="cloud"></div>
<div class="cloud"></div>`,
  "Moderate snow": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Patchy heavy snow": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Moderate or heavy sleet showers": `  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>`,
  "Ice pellets": `<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>`,
  "Light rain shower": `<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>`,
  "Moderate or heavy rain shower": `<div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>`,
  "Light snow": `<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>`,
  "Torrential rain shower": `<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Heavy snow": ` <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>`,
  "Light sleet showers": `<div class="cloud"></div>
<div class="cloud"></div>
<div class="cloud"></div>`,
  "Moderate or heavy sleet showers": `<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Light snow showers": `<div class="cloud"></div>
<div class="cloud"></div>
<div class="cloud"></div>`,
  "Moderate or heavy snow showers": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Light showers of ice pellets": `<div class="cloud"></div>
<div class="cloud"></div>
<div class="cloud"></div>`,
  "Moderate or heavy showers of ice pellets": `<div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>`,

  "Patchy light rain with thunder": `<div class="thunderCloud"></div>
<div class="thunderCloud"></div>
<div class="thunderCloud"></div>`,
  "Patchy light snow with thunder": `<div class="thunderCloud"></div>
<div class="thunderCloud"></div>
<div class="thunderCloud"></div>`,
  "Moderate or heavy rain with thunder": `    <div class="thunderWrapper">
  <div class="bigThunderCloud">
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    </div>
</div>
<div class="thunderWrapper">
  <div class="bigThunderCloud">
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    </div>
</div>
<div class="thunderWrapper">
  <div class="bigThunderCloud">
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    </div>
</div>
<div class="thunderWrapper">
  <div class="bigThunderCloud">
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    </div>
</div>
<div class="thunderWrapper">
  <div class="bigThunderCloud">
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    </div>
</div>
<div class="thunderWrapper">
  <div class="bigThunderCloud">
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    </div>
</div>
<div class="thunderWrapper">
  <div class="bigThunderCloud">
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    </div>
</div>
<div class="thunderWrapper">
  <div class="bigThunderCloud">
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    </div>
</div>`,
  "Moderate or heavy snow with thunder": `<div class="thunderWrapper">
<div class="bigThunderCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
</div>
<div class="thunderWrapper">
<div class="bigThunderCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
</div>
<div class="thunderWrapper">
<div class="bigThunderCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
</div>
<div class="thunderWrapper">
<div class="bigThunderCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
</div>
<div class="thunderWrapper">
<div class="bigThunderCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
</div>
<div class="thunderWrapper">
<div class="bigThunderCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
</div>
<div class="thunderWrapper">
<div class="bigThunderCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
</div>
<div class="thunderWrapper">
<div class="bigThunderCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
</div>`,
  Blizzard: `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Blowing snow": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
};

const populateMainBG = (object, container, isNight) => {
  container.insertAdjacentHTML("beforeend", conditions[object]);
  container.insertAdjacentHTML(
    "beforeend",
    conditions[isNight ? "Moon" : "Sun"]
  );
  addPrecip(object, container);
};

const populateCoverBG = (object, container, isNight) => {
  container.insertAdjacentHTML("beforeend", conditions[object]);
  container.insertAdjacentHTML(
    "beforeend",
    conditions[isNight ? "Moon" : "Sun"]
  );
  addPrecip(object, container);
};

const pellets = (cloud) => {
  const pellets = document.createElement("div");
  pellets.classList.add("pellets");
  const left = Math.floor(Math.random() * (cloud.offsetWidth + 50));

  cloud.appendChild(pellets);
  pellets.style.left = left + "px";

  setTimeout(() => {
    cloud.removeChild(pellets);
  }, 700);
};

const rain = (cloud) => {
  const drop = document.createElement("div");
  drop.classList.add("drop");
  const left = Math.floor(Math.random() * (cloud.offsetWidth + 50));

  cloud.appendChild(drop);
  drop.style.left = left + "px";

  setTimeout(() => {
    cloud.removeChild(drop);
  }, 1000);
};

const snow = (cloud) => {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  const left = Math.floor(Math.random() * (cloud.offsetWidth + 50));

  cloud.appendChild(snowflake);
  snowflake.style.left = left + "px";

  setTimeout(() => {
    cloud.removeChild(snowflake);
  }, 3000);
};

const blizzard = (cloud) => {
  const blizzard = document.createElement("div");
  blizzard.classList.add("blizzard");
  const left = Math.floor(Math.random() * (cloud.offsetWidth + 150));

  cloud.appendChild(blizzard);
  blizzard.style.left = left + "px";

  setTimeout(() => {
    cloud.removeChild(blizzard);
  }, 1000);
};
const blowingSnow = (container) => {
  const blowingSnow = document.createElement("div");
  blowingSnow.classList.add("blowingSnow");
  const left = Math.floor(Math.random() * container.offsetHeight);

  container.appendChild(blowingSnow);
  blowingSnow.style.top = left + "px";

  setTimeout(() => {
    container.removeChild(blowingSnow);
  }, 1500);
};

const addPrecip = (object, container) => {
  const clouds = document.querySelectorAll(`.${container.className} > *`);
  const showerTarget = Math.floor(Math.random() * (clouds.length - 1));
  let frequency = 50;
  if (object.toLowerCase().includes("heavy")) {
    frequency = 10;
  } else if (object.toLowerCase().includes("moderate")) {
    frequency = 30;
  } else if (object.toLowerCase().includes("light")) {
    frequency = 50;
  }
  let filteredClouds = clouds;
  if (object.includes("shower")) {
    filteredClouds = Array.from(clouds).filter(
      (element, index) => index == showerTarget
    );
  }
  if (isRain(object)) {
    addRain(object, filteredClouds, frequency);
  } else if (object === "Blowing snow") {
    addBlowingSnow(container);
  } else if (isSnow(object)) {
    addSnow(object, filteredClouds, frequency);
  } else if (object === "Blizzard") {
    addBlizzard(filteredClouds);
  } else if (isPellets(object)) {
    addPellets(object, filteredClouds, frequency);
  }
};

const isPellets = (object) => {
  const pelletsRegex = /(pellets)/;
  const isPellets = pelletsRegex.test(object);
  return isPellets;
};

const isRain = (object) => {
  const rainRegex = /(rain|drizzle|sleet|shower)(?!(.*(?:snow|pellets)))/;
  const isRain = rainRegex.test(object);
  return isRain;
};

const isSnow = (object) => {
  const snowRegex = /(snow)(?!.*(?:Blowing))/;
  const isSnow = snowRegex.test(object);
  return isSnow;
};

const isPatchy = (object) => {
  const patchyRegex = /(patchy|times)/i;
  const isPatchy = patchyRegex.test(object);
  return isPatchy;
};

const addPellets = (object, filteredClouds, frequency) => {
  filteredClouds.forEach((cloud) => {
    if (!cloud.classList.contains("sun") && !cloud.classList.contains("moon")) {
      if (isPatchy(object)) {
        const patchyPrecip = () => {
          let intervalId = setInterval(() => {
            pellets(cloud);
          }, frequency);
          setTimeout(() => {
            clearInterval(intervalId);
            setTimeout(patchyPrecip, 5000);
          }, 5000);
        };
        patchyPrecip();
      } else {
        setInterval(() => {
          pellets(cloud);
        }, frequency);
      }
    }
  });
};

const addBlowingSnow = (container) => {
  const blowingSnowGenerator = document.createElement("div");
  blowingSnowGenerator.classList.add("blowingSnowGenerator");
  container.appendChild(blowingSnowGenerator);
  setInterval(() => {
    blowingSnow(blowingSnowGenerator);
  }, 10);
};

const addBlizzard = (filteredClouds) => {
  filteredClouds.forEach((cloud) => {
    if (!cloud.classList.contains("sun") && !cloud.classList.contains("moon")) {
      setInterval(() => {
        blizzard(cloud);
      }, 20);
    }
  });
};

const addRain = (object, filteredClouds, frequency) => {
  filteredClouds.forEach((cloud) => {
    if (!cloud.classList.contains("sun") && !cloud.classList.contains("moon")) {
      if (isPatchy(object)) {
        const patchyPrecip = () => {
          let intervalId = setInterval(() => {
            rain(cloud);
          }, frequency);
          setTimeout(() => {
            clearInterval(intervalId);
            setTimeout(patchyPrecip, 5000);
          }, 5000);
        };
        patchyPrecip();
      } else {
        setInterval(() => {
          rain(cloud);
        }, frequency);
      }
    }
  });
};

const addSnow = (object, filteredClouds, frequency) => {
  filteredClouds.forEach((cloud) => {
    if (!cloud.classList.contains("sun") && !cloud.classList.contains("moon")) {
      if (isPatchy(object)) {
        const patchyPrecip = () => {
          let intervalId = setInterval(() => {
            snow(cloud);
          }, frequency);
          setTimeout(() => {
            clearInterval(intervalId);
            setTimeout(patchyPrecip, 5000);
          }, 5000);
        };
        patchyPrecip();
      } else {
        setInterval(() => {
          snow(cloud);
        }, frequency);
      }
    }
  });
};


/***/ }),

/***/ "./src/renderCover.js":
/*!****************************!*\
  !*** ./src/renderCover.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeCover: () => (/* binding */ removeCover),
/* harmony export */   renderCover: () => (/* binding */ renderCover)
/* harmony export */ });
const renderCover = (isSecondCover) => {
  const container = document.querySelector("main");
  const cover = ` <div class="detailsCover${isSecondCover ? "__c" : ""}">
    <div class="collapseCover${isSecondCover ? "__c" : ""}">+</div>
    <div class="coverContainer${isSecondCover ? "__c" : ""}">
      <div class="dataContainer${isSecondCover ? "__c" : ""}">
        <div class="overviewContainer">
          <div class="weatherWrapper">
            <p class="localDate${isSecondCover ? "__b" : "__c"}">date</p>
            <p class="localTime${isSecondCover ? "__b" : "__c"}">time</p>
          </div>
          <div>
          <p class="temperature${isSecondCover ? "__b" : "__c"}">27c</p>
          <p class="weatherType${isSecondCover ? "__b" : "__c"}">sunny</p>
          </div>
          
        </div>
        <div class="weatherDetailsContainer">
          <p class="feelsLike${
            isSecondCover ? "__b" : "__c"
          }"><span class="WDSpan">Feels like:</span></p>
          <p class="humidity${
            isSecondCover ? "__b" : "__c"
          }"><span class="WDSpan">Humidity:</span></p>
          <p class="windSTR${
            isSecondCover ? "__b" : "__c"
          }"><span class="WDSpan">Wind STR:</span></p>
          <p class="windDIR${
            isSecondCover ? "__b" : "__c"
          }"><span class="WDSpan">Wind DIR:</span></p>
          <p class="vis${
            isSecondCover ? "__b" : "__c"
          }"><span class="WDSpan">Visibility:</span></p>
          <p class="precip${
            isSecondCover ? "__b" : "__c"
          }"><span class="WDSpan">Precip:</span></p>
          <p class="UV${
            isSecondCover ? "__b" : "__c"
          }"><span class="WDSpan">UV:</span></p>
          <p class="pressure${
            isSecondCover ? "__b" : "__c"
          }"><span class="WDSpan">Pressure:</span></p>
          <p class="gust${
            isSecondCover ? "__b" : "__c"
          }"><span class="WDSpan">Gust:</span></p>
        </div>
        <div class="forecastContainer__c"></div>
      </div>
      <div class="background${isSecondCover ? "__b" : "__c"}"></div>
    </div>
  </div>`;
  container.insertAdjacentHTML("beforeend", cover);
};

const removeCover = (isSecondCover) => {
  const cover = document.querySelector(
    `.detailsCover${isSecondCover ? "__c" : ""}`
  );
  cover.remove();
};


/***/ }),

/***/ "./src/renderMain.js":
/*!***************************!*\
  !*** ./src/renderMain.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearMain: () => (/* binding */ clearMain),
/* harmony export */   renderMain: () => (/* binding */ renderMain)
/* harmony export */ });
const renderMain = () => {
  const container = document.querySelector("main");
  const main = `<div class="mainContainer">
  <div class="overviewContainer">
    <div class="nameWrapper">
      <p class="locationCity"></p>
      <p class="locationCountry"></p>
      <p class="localDate"></p>
    </div>
    <div class="weatherWrapper">
      <p class="temperature"></p>
      <p class="localTime"></p>
      <p class="weatherType"></p>
    </div>
  </div>
  <div class="weatherDetailsContainer">
    <p class="feelsLike"><span class="WDSpan">Feels like:</span></p>
    <p class="humidity"><span class="WDSpan">Humidity:</span></p>
    <p class="windSTR"><span class="WDSpan">Wind STR:</span></p>
    <p class="windDIR"><span class="WDSpan">Wind DIR:</span></p>
    <p class="vis"><span class="WDSpan">Visibility:</span></p>
    <p class="precip"><span class="WDSpan">Precip:</span></p>
    <p class="UV"><span class="WDSpan">UV:</span></p>
    <p class="pressure"><span class="WDSpan">Pressure:</span></p>
    <p class="gust"><span class="WDSpan">Gust:</span></p>
  </div>

  <div class="btnWrapper">
  <div class="toggleComponent">
    <div class="toggleBtn left"></div>
  </div>
  <button class="showoff" id="showoffBtn">Click Me!</button>
  </div>

  <div class="forecastContainer"></div>
  </div>`;
  container.insertAdjacentHTML("beforeend", main);
};

const clearMain = () => {
  const main = document.querySelector(".mainContainer");
  main.remove();
};


/***/ }),

/***/ "./src/showoff.js":
/*!************************!*\
  !*** ./src/showoff.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showoff: () => (/* binding */ showoff)
/* harmony export */ });
/* harmony import */ var _populateBackground_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populateBackground.js */ "./src/populateBackground.js");
/* harmony import */ var _backgroundColor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backgroundColor.js */ "./src/backgroundColor.js");



const showoff = () => {
  const showoffBtn = document.querySelector(".showoff");
  const conditions = [
    "Blizzard",
    "Moderate or heavy rain with thunder",
    "Moderate or heavy showers of ice pellets",
    "Fog",
    "Blowing snow",
    "Patchy heavy snow",
  ];
  let i = 0;

  showoffBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    engageWeather(conditions[i]);
    console.log(i);
    i++;
    if (i >= conditions.length) {
      i = 0;
    }
  });
};

const engageWeather = (conditions) => {
  const background = document.querySelector(".background");
  clearBackground();
  (0,_populateBackground_js__WEBPACK_IMPORTED_MODULE_0__.populateBackground)(conditions, false, false);
  background.style.background = `${(0,_backgroundColor_js__WEBPACK_IMPORTED_MODULE_1__.backgroundColor)(conditions)}`;
};

const clearBackground = () => {
  const background = document.querySelector(".backgroundContainer");
  while (background.firstChild) {
    background.removeChild(background.firstChild);
  }
};


/***/ }),

/***/ "./src/toggleDayOrHour.js":
/*!********************************!*\
  !*** ./src/toggleDayOrHour.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleDayOrHour: () => (/* binding */ toggleDayOrHour)
/* harmony export */ });
/* harmony import */ var _displayHourly_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayHourly.js */ "./src/displayHourly.js");
/* harmony import */ var _displayDaily_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayDaily.js */ "./src/displayDaily.js");
/* harmony import */ var _clearForecast_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearForecast.js */ "./src/clearForecast.js");
/* harmony import */ var _displayDetailsCover_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayDetailsCover.js */ "./src/displayDetailsCover.js");





const toggleDayOrHour = (object) => {
  const toggleComponent = document.querySelector(".toggleComponent");
  toggleComponent.addEventListener("click", () => changePosition(object));
  (0,_displayHourly_js__WEBPACK_IMPORTED_MODULE_0__.displayHourly)(object.forecast.forecastday);
  hourListeners(object.forecast.forecastday);
};

const changePosition = (object) => {
  const toggleBtn = document.querySelector(".toggleBtn");
  if (toggleBtn.classList.contains("left")) {
    toggleBtn.classList.remove("left");
    toggleBtn.classList.add("right");
    (0,_clearForecast_js__WEBPACK_IMPORTED_MODULE_2__.clearForecast)();
    (0,_displayDaily_js__WEBPACK_IMPORTED_MODULE_1__.displayDaily)(object.forecast.forecastday);
    dayListeners(object.forecast.forecastday);
  } else {
    toggleBtn.classList.remove("right");
    toggleBtn.classList.add("left");
    (0,_clearForecast_js__WEBPACK_IMPORTED_MODULE_2__.clearForecast)();
    (0,_displayHourly_js__WEBPACK_IMPORTED_MODULE_0__.displayHourly)(object.forecast.forecastday);
    hourListeners(object.forecast.forecastday);
  }
};

const hourListeners = (object) => {
  const hourElements = document.querySelectorAll(".hourElement");
  hourElements.forEach((element) => {
    const clickHandler = (event) => {
      (0,_displayDetailsCover_js__WEBPACK_IMPORTED_MODULE_3__.displayDetailsCover)(event, object);
    };
    element.removeEventListener("click", clickHandler);
    element.addEventListener("click", clickHandler);
  });
};

const dayListeners = (object) => {
  const dayElements = document.querySelectorAll(".dayElement");
  dayElements.forEach((element) => {
    const clickHandler = (event) => {
      (0,_displayDetailsCover_js__WEBPACK_IMPORTED_MODULE_3__.displayDetailsCover)(event, object);
    };
    element.removeEventListener("click", clickHandler);
    element.addEventListener("click", clickHandler);
  });
};


/***/ }),

/***/ "./src/weatherKey.js":
/*!***************************!*\
  !*** ./src/weatherKey.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   weatherKey: () => (/* binding */ weatherKey)
/* harmony export */ });
const weatherKey = "1b3bd345873848a2b92114519233008";


/***/ }),

/***/ "./src/Img/magnify.svg":
/*!*****************************!*\
  !*** ./src/Img/magnify.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54ff7732bb1a5ff166c6.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetchWeather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchWeather.js */ "./src/fetchWeather.js");
/* harmony import */ var _currentLocation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentLocation.js */ "./src/currentLocation.js");
/* harmony import */ var _findLocation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./findLocation.js */ "./src/findLocation.js");
/* harmony import */ var _renderMain_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderMain.js */ "./src/renderMain.js");
/* harmony import */ var _src_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/styles.css */ "./src/styles.css");






const searchButton = document.querySelector(".searchButton");

(0,_fetchWeather_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeather)(_currentLocation_js__WEBPACK_IMPORTED_MODULE_1__.currentLocation);

searchButton.addEventListener("click", (ev) => {
  (0,_renderMain_js__WEBPACK_IMPORTED_MODULE_3__.clearMain)();
  ev.preventDefault();
  (0,_fetchWeather_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeather)((0,_findLocation_js__WEBPACK_IMPORTED_MODULE_2__.findLocation)());
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map