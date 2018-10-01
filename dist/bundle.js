(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["library"] = factory();
	else
		root["library"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = __webpack_require__(1);
var Main = /** @class */ (function () {
    function Main(params) {
        this.params = params;
        this.component = new component_1.Component();
        if (params.argv[2] === 'generate') {
            console.log('Generate Component');
        }
        this.component.createDowngrade(params.env.PWD, params.argv[2]);
    }
    return Main;
}());
exports.Main = Main;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var file_helper_1 = __webpack_require__(5);
var directory_helper_1 = __webpack_require__(4);
var path = __importStar(__webpack_require__(2));
var fs = __importStar(__webpack_require__(3));
var Component = /** @class */ (function () {
    function Component() {
        this.directory = new directory_helper_1.DirectoryHelper();
        this.fileHelper = new file_helper_1.FileHelper();
    }
    Component.prototype.create = function (diretory, fileName) {
        var className = fileName.split('/')[fileName.split('/').length - 1];
        className = className.replace(/^\w/, function (c) { return c.toUpperCase(); });
        var pathtoName = diretory + "/" + fileName;
        this.directory.create(pathtoName);
        var fileTemplate = path.resolve(__dirname, '../templates/component.nghi');
        var templaName = path.basename(fileTemplate);
        var source = fs.createReadStream(fileTemplate);
        this.fileHelper.readAndSaveFile(pathtoName, className, templaName, 'component');
    };
    Component.prototype.createDowngrade = function (diretory, fileName) {
        var className = fileName.split('/')[fileName.split('/').length - 1];
        className = className.replace(/^\w/, function (c) { return c.toUpperCase(); });
        var pathtoName = diretory + "/" + fileName;
        this.directory.create(pathtoName);
        var fileTemplate = path.resolve(__dirname, '../templates/component.downgrade.nghi');
        var templaName = path.basename(fileTemplate);
        var source = fs.createReadStream(fileTemplate);
        this.fileHelper.readAndSaveFile(pathtoName, className, templaName, 'component');
    };
    return Component;
}());
exports.Component = Component;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(__webpack_require__(3));
var DirectoryHelper = /** @class */ (function () {
    function DirectoryHelper() {
    }
    DirectoryHelper.prototype.create = function (pathtoName) {
        var pathFinal = '';
        var pathString = String(pathtoName);
        var pathArray = pathString.split('/');
        console.log(pathArray);
        for (var i = 0; i < pathArray.length + 1; i++) {
            console.log(pathFinal.length);
            if (!fs.existsSync(pathFinal) && pathFinal.length > 0) {
                console.log('criou', pathFinal);
                fs.mkdirSync(pathFinal);
                console.log(pathFinal);
            }
            pathFinal += pathArray[i] + "/";
        }
    };
    return DirectoryHelper;
}());
exports.DirectoryHelper = DirectoryHelper;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(__webpack_require__(3));
var path = __importStar(__webpack_require__(2));
var FileHelper = /** @class */ (function () {
    function FileHelper() {
    }
    FileHelper.prototype.readAndSaveFile = function (pathtoName, className, templaName, typeClass) {
        var _this = this;
        var fileName = className.toLocaleLowerCase();
        console.log(pathtoName);
        fs.readFile(path.resolve(__dirname, "../templates/" + typeClass + ".nghi"), 'utf-8', function (err, data) {
            if (err) {
                throw err;
            }
            _this.saveFile(pathtoName, templaName, className, fileName, _this.replacedData(data, className, fileName));
        });
    };
    FileHelper.prototype.saveFile = function (pathtoName, templaName, className, fileName, convertedData) {
        console.log('template', templaName);
        fs.writeFile(path.resolve("" + pathtoName, fileName + "." + (templaName.replace(/(.downgrade.nghi|.nghi)/, '.ts'))), convertedData, 'utf8', function (err) {
            if (err)
                return console.log(err);
        });
    };
    FileHelper.prototype.replacedData = function (data, className, fileName) {
        var nameComp = data.replace(/{{className}}/g, " " + className);
        var htmlselector = nameComp.replace(/{{htmlselector}}/g, fileName);
        var templateUrl = htmlselector.replace(/{{htmlcomponent}}/g, fileName);
        var styleUrls = templateUrl.replace(/{{scsscomponent}}/g, fileName);
        var finalData = styleUrls;
        return finalData.replace(/{{className}}/g, " " + className);
    };
    return FileHelper;
}());
exports.FileHelper = FileHelper;


/***/ })
/******/ ]);
});