/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js"
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
() {

eval("{const button = document.querySelector('button');\nconst textParagraph = document.querySelector('p');\nbutton.addEventListener('click', () => {\n  const text = textParagraph.textContent;\n  if (navigator.clipboard) {\n    navigator.clipboard.writeText(text).then(result => {\n      console.log(result);\n    }).catch(error => {\n      console.log(error);\n    });\n  } else {\n    alert('Feature is not available');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzIiwibmFtZXMiOlsiYnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dFBhcmFncmFwaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXh0IiwidGV4dENvbnRlbnQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJvd3Nlcl9zdXBwb3J0Ly4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuY29uc3QgdGV4dFBhcmFncmFwaD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwJyk7XG5cbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgdGV4dD10ZXh0UGFyYWdyYXBoLnRleHRDb250ZW50O1xuICBpZihuYXZpZ2F0b3IuY2xpcGJvYXJkKXtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KS50aGVuKHJlc3VsdD0+e1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgfSkuY2F0Y2goZXJyb3I9PntcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbiAgfWVsc2V7XG4gICAgYWxlcnQoJ0ZlYXR1cmUgaXMgbm90IGF2YWlsYWJsZScpO1xuICB9XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0FBQy9DLE1BQU1DLGFBQWEsR0FBQ0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0FBRS9DRixNQUFNLENBQUNJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0VBQ3JDLE1BQU1DLElBQUksR0FBQ0YsYUFBYSxDQUFDRyxXQUFXO0VBQ3BDLElBQUdDLFNBQVMsQ0FBQ0MsU0FBUyxFQUFDO0lBQ3JCRCxTQUFTLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDSixJQUFJLENBQUMsQ0FBQ0ssSUFBSSxDQUFDQyxNQUFNLElBQUU7TUFDakRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUM7SUFDbkIsQ0FBQyxDQUFDLENBQUNHLEtBQUssQ0FBQ0MsS0FBSyxJQUFFO01BQ2RILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxLQUFLLENBQUM7SUFDcEIsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxNQUFJO0lBQ0hDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztFQUNuQztBQUNGLENBQUMsQ0FBQyIsImlnbm9yZUxpc3QiOltdfQ==\n//# sourceURL=webpack-internal:///./src/app.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;