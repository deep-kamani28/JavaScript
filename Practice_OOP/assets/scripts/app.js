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

/***/ "./Practice_OOP/src/App/ProjectItem.js"
/*!*********************************************!*\
  !*** ./Practice_OOP/src/App/ProjectItem.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectItem: () => (/* binding */ ProjectItem)\n/* harmony export */ });\n/* harmony import */ var _Utility_DOMHepler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMHepler.js */ \"./Practice_OOP/src/Utility/DOMHepler.js\");\n// import {Tooltip} from './Tooltip.js';\n\n\nclass ProjectItem {\n    // hasActiveTooltip=false;\n  constructor(id,updateProjectListFunction,type) {\n    this.id = id;\n    this.hasActiveTooltip=false;\n    this.updateProjectListHandler=updateProjectListFunction;\n    this.connectMoreInfoButton();\n    this.connectSwitchButton(type);\n    this.connectDrag();\n  }\n\n  showMoreInfoHandler(){\n    if(this.hasActiveTooltip){\n        return;\n    }\n    const projectElement=document.getElementById(this.id);\n    const tooltipText=projectElement.dataset.extraInfo;\n\n    __webpack_require__.e(/*! import() */ \"Practice_OOP_src_App_Tooltip_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./Tooltip.js */ \"./Practice_OOP/src/App/Tooltip.js\")).then(module=>{\n        const tooltip=new module.Tooltip(()=>{this.hasActiveTooltip=false;}, tooltipText, this.id);\n        tooltip.show();\n        this.hasActiveTooltip=true;\n    });\n  }\n\n  connectDrag(){\n    document.getElementById(this.id).addEventListener('dragstart',event=>{\n      event.dataTransfer.setData('text/plain',this.id);\n      event.dataTransfer.effectAllowed='move';\n    });\n  }\n\n  connectMoreInfoButton() {\n    const projectItemElement = document.getElementById(this.id);\n    const moreInfoBtn=projectItemElement.querySelector('button:first-of-type');\n    moreInfoBtn.addEventListener('click',this.showMoreInfoHandler.bind(this));\n  }\n\n  connectSwitchButton(type) {\n    const projectItemElement = document.getElementById(this.id);\n    let switchBtn = projectItemElement.querySelector(\"button:last-of-type\");\n    switchBtn=_Utility_DOMHepler_js__WEBPACK_IMPORTED_MODULE_0__.DOMHelper.clearEventListener(switchBtn);\n    switchBtn.textContent=type==='active' ? 'finished':'active';\n    switchBtn.addEventListener('click',this.updateProjectListHandler.bind(null,this.id));\n  }\n\n  update(updateProjectFn,type){\n    this.updateProjectListHandler=updateProjectFn;\n    this.connectSwitchButton(type);\n  }\n}\n\n//# sourceURL=webpack://javascript/./Practice_OOP/src/App/ProjectItem.js?\n}");

/***/ },

/***/ "./Practice_OOP/src/App/ProjectList.js"
/*!*********************************************!*\
  !*** ./Practice_OOP/src/App/ProjectList.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectList: () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem.js */ \"./Practice_OOP/src/App/ProjectItem.js\");\n/* harmony import */ var _Utility_DOMHepler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMHepler.js */ \"./Practice_OOP/src/Utility/DOMHepler.js\");\n\n\n\nclass ProjectList {\n  projects = [];\n  constructor(type) {\n    this.type=type;\n    const prjItems = document.querySelectorAll(`#${type}-projects li`);\n    for (const prjItem of prjItems) {\n      this.projects.push(new _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__.ProjectItem(prjItem.id,this.switchProject.bind(this),this.type));\n    }\n    this.connectDroppable();\n  }\n\n  connectDroppable(){\n    console.log(globalThis.Max_Value);\n    const list=document.querySelector(`#${this.type}-projects ul`);\n\n    list.addEventListener('dragenter',event=>{\n      if(event.dataTransfer.types[0]==='text/plain'){\n        list.parentElement.classList.add('droppable');\n        event.preventDefault();\n      }\n    });\n\n    list.addEventListener('dragover',event=>{\n      if(event.dataTransfer.types[0]==='text/plain'){\n        event.preventDefault();\n      }\n    });\n\n    list.addEventListener('dragleave',event=>{\n      if(event.relatedTarget.closest(`#${this.type}-projects ul`)!==list){\n        list.parentElement.classList.remove('droppable');\n      }\n    });\n\n    list.addEventListener('drop',event=>{\n      const prjId=event.dataTransfer.getData('text/plain');\n      if(this.projects.find(p=>p.id===prjId)){\n        return;\n      }\n      document.getElementById(prjId).querySelector('button:last-of-type').click();\n      list.parentElement.classList.remove('droppable');\n    });\n  }\n\n  setSwitchHandlerFunction(switchHandlerFunction) {\n    this.switchHandler = switchHandlerFunction;\n  }\n\n  addProject(project) {\n    // console.log(project);\n    this.projects.push(project);\n    _Utility_DOMHepler_js__WEBPACK_IMPORTED_MODULE_1__.DOMHelper.moveElement(project.id,`#${this.type}-projects ul`);\n    project.update(this.switchProject.bind(this),this.type);\n  }\n\n  switchProject(projectId) {\n    this.switchHandler(this.projects.find((p) => p.id === projectId));\n    this.projects = this.projects.filter(p=>p.id!==projectId);\n  }\n}\n\n//# sourceURL=webpack://javascript/./Practice_OOP/src/App/ProjectList.js?\n}");

/***/ },

/***/ "./Practice_OOP/src/Utility/Analytics.js"
/*!***********************************************!*\
  !*** ./Practice_OOP/src/Utility/Analytics.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   intervalId: () => (/* binding */ intervalId)\n/* harmony export */ });\nconst intervalId=setInterval(()=>{\n    console.log(\"Sending Analytics data...\");\n},2000);\n\n// document.getElementById('stop-analytics-btn').addEventListener('click',()=>{\n//     clearInterval(intervalId);\n// });\n\n//# sourceURL=webpack://javascript/./Practice_OOP/src/Utility/Analytics.js?\n}");

/***/ },

/***/ "./Practice_OOP/src/Utility/DOMHepler.js"
/*!***********************************************!*\
  !*** ./Practice_OOP/src/Utility/DOMHepler.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOMHelper: () => (/* binding */ DOMHelper)\n/* harmony export */ });\nclass DOMHelper{\n    static moveElement(elementId,newDestinationSelector){\n        const element=document.getElementById(elementId);\n        const destinationElement=document.querySelector(newDestinationSelector);\n        destinationElement.append(element);\n        element.scrollIntoView({behavior:'smooth'});\n    }\n\n    static clearEventListener(element){\n        const clonedElement=element.cloneNode(true);\n        element.replaceWith(clonedElement);\n        return clonedElement;\n    }\n}\n\n//# sourceURL=webpack://javascript/./Practice_OOP/src/Utility/DOMHepler.js?\n}");

/***/ },

/***/ "./Practice_OOP/src/app.js"
/*!*********************************!*\
  !*** ./Practice_OOP/src/app.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectList.js */ \"./Practice_OOP/src/App/ProjectList.js\");\n/* harmony import */ var _Utility_Analytics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility/Analytics.js */ \"./Practice_OOP/src/Utility/Analytics.js\");\n\n\n\nglobalThis.Max_Value='MAX';\n\nclass App {\n  static init() {\n    const activeProjectList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList(\"active\");\n    const finishedProjectList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList(\"finished\");\n\n    activeProjectList.setSwitchHandlerFunction(\n      finishedProjectList.addProject.bind(finishedProjectList),\n    );\n\n    finishedProjectList.setSwitchHandlerFunction(\n      activeProjectList.addProject.bind(activeProjectList),\n    );\n\n    document.getElementById('stop-analytics-btn').addEventListener('click',()=>{\n      clearInterval(_Utility_Analytics_js__WEBPACK_IMPORTED_MODULE_1__.intervalId);\n    });\n  }\n\n  // static startAnalytics(){\n  //   const analyticsScript=document.createElement('script');\n  //   analyticsScript.src='assets/scripts/Utility/Analytics.js';\n  //   analyticsScript.defer=true;\n  //   document.head.append(analyticsScript);\n  // }\n}\n\nApp.init();\n\n\n//# sourceURL=webpack://javascript/./Practice_OOP/src/app.js?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".app.js";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "javascript:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkjavascript"] = self["webpackChunkjavascript"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./Practice_OOP/src/app.js");
/******/ 	
/******/ })()
;