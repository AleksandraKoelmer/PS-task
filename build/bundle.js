/******/ (function(modules) { // webpackBootstrap
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

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('scroll', function (event) {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollTop > 10) {
        document.querySelector('.paralax').classList.add('on');
        // document.querySelector('.paralax.small').classList.add('on');
    }
});
/*
let windowW = window.innerWidth;
let windowH = window.innerHeight;

let isLoaded = false;
let glitch;
let imgSrc = 'data:image/jpeg;base64,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'
function setup() {
    background(0);
    
    createCanvas(windowW, windowH);
    loadImage(imgSrc, function(img) {
        glitch = new Glitch(img);
        isLoaded = true;
    });
}

function draw() {
    clear();
    background(0);

    if (isLoaded) {
        glitch.show();
    }

    // fill(255, 255, 255);
    // textSize(14);
    // text('FPS: ' + floor(frameRate()), 20, 30);

}

class Glitch {
    constructor(img) {
        this.channelLen = 4;
        this.imgOrigin = img;
        this.imgOrigin.loadPixels();
        this.copyData = [];
        this.flowLineImgs = [];
        this.shiftLineImgs = [];
        this.shiftRGBs = [];
        this.scatImgs = [];
        this.throughFlag = true;
        this.copyData = new Uint8ClampedArray(this.imgOrigin.pixels);

        // flow line
        for (let i = 0; i < 1; i++) {
            let o = {
                pixels: null,
                t1: floor(random(0, 1000)),
                speed: floor(random(4, 24)),
                randX: floor(random(24, 80))
            };
            this.flowLineImgs.push(o);
        }

        // shift line
        for (let i = 0; i < 6; i++) {
            let o = null;
            this.shiftLineImgs.push(o);
        }

        // shift RGB
        for (let i = 0; i < 1; i++) {
            let o = null;
            this.shiftRGBs.push(o);
        }

        // scat imgs
        for (let i = 0; i < 3; i++) {
            let scatImg = {
                img: null,
                x: 0,
                y: 0
            };
            this.scatImgs.push(scatImg);
        }
    }

    replaceData(destImg, srcPixels) {
        for (let y = 0; y < destImg.height; y++) {
            for (let x = 0; x < destImg.width; x++) {
                let r, g, b, a;
                let index;
                index = (y * destImg.width + x) * this.channelLen;
                r = index;
                g = index + 1;
                b = index + 2;
                a = index + 3;
                destImg.pixels[r] = srcPixels[r];
                destImg.pixels[g] = srcPixels[g];
                destImg.pixels[b] = srcPixels[b];
                destImg.pixels[a] = srcPixels[a];
            }
        }
        destImg.updatePixels();
    }

    flowLine(srcImg, obj) {

        let destPixels,
            tempY;
        destPixels = new Uint8ClampedArray(srcImg.pixels);
        obj.t1 %= srcImg.height;
        obj.t1 += obj.speed;
        //tempY = floor(noise(obj.t1) * srcImg.height);
        tempY = floor(obj.t1);
        for (let y = 0; y < srcImg.height; y++) {
            if (tempY === y) {
                for (let x = 0; x < srcImg.width; x++) {
                    let r, g, b, a;
                    let index;
                    index = (y * srcImg.width + x) * this.channelLen;
                    r = index;
                    g = index + 1;
                    b = index + 2;
                    a = index + 3;
                    destPixels[r] = srcImg.pixels[r] + obj.randX;
                    destPixels[g] = srcImg.pixels[g] + obj.randX;
                    destPixels[b] = srcImg.pixels[b] + obj.randX;
                    destPixels[a] = srcImg.pixels[a];
                }
            }
        }
        return destPixels;
    }

    shiftLine(srcImg) {

        let offsetX;
        let rangeMin, rangeMax;
        let destPixels;
        let rangeH;

        destPixels = new Uint8ClampedArray(srcImg.pixels);
        rangeH = srcImg.height;
        rangeMin = floor(random(0, rangeH));
        rangeMax = rangeMin + floor(random(1, rangeH - rangeMin));
        offsetX = this.channelLen * floor(random(-40, 40));

        for (let y = 0; y < srcImg.height; y++) {
            if (y > rangeMin && y < rangeMax) {
                for (let x = 0; x < srcImg.width; x++) {
                        let r, g, b, a;
                        let r2, g2, b2, a2;
                        let index;

                        index = (y * srcImg.width + x) * this.channelLen;
                        r = index;
                        g = index + 1;
                        b = index + 2;
                        a = index + 3;
                        r2 = r + offsetX;
                        g2 = g + offsetX;
                        b2 = b + offsetX;
                        destPixels[r] = srcImg.pixels[r2];
                        destPixels[g] = srcImg.pixels[g2];
                        destPixels[b] = srcImg.pixels[b2];
                        destPixels[a] = srcImg.pixels[a];
                }
            }
        }
        return destPixels;
    }

    shiftRGB(srcImg) {

        let randR, randG, randB;
        let destPixels;
        let range;

        range = 16;
        destPixels = new Uint8ClampedArray(srcImg.pixels);
        randR = (floor(random(-range, range)) * srcImg.width + floor(random(-range, range))) * this.channelLen;
        randG = (floor(random(-range, range)) * srcImg.width + floor(random(-range, range))) * this.channelLen;
        randB = (floor(random(-range, range)) * srcImg.width + floor(random(-range, range))) * this.channelLen;

        for (let y = 0; y < srcImg.height; y++) {
            for (let x = 0; x < srcImg.width; x++) {
                let r, g, b, a;
                let r2, g2, b2, a2;
                let index;

                index = (y * srcImg.width + x) * this.channelLen;
                r = index;
                g = index + 1;
                b = index + 2;
                a = index + 3;
                r2 = (r + randR) % srcImg.pixels.length;
                g2 = (g + randG) % srcImg.pixels.length;
                b2 = (b + randB) % srcImg.pixels.length;
                destPixels[r] = srcImg.pixels[r2];
                destPixels[g] = srcImg.pixels[g2];
                destPixels[b] = srcImg.pixels[b2];
                destPixels[a] = srcImg.pixels[a];
            }
        }

        return destPixels;
    }

    getRandomRectImg(srcImg) {
        let startX;
        let startY;
        let rectW;
        let rectH;
        let destImg;
        startX = floor(random(0, srcImg.width - 30));
        startY = floor(random(0, srcImg.height - 50));
        rectW = floor(random(30, srcImg.width - startX));
        rectH = floor(random(1, 50));
        destImg = srcImg.get(startX, startY, rectW, rectH);
        destImg.loadPixels();
        return destImg;
    }

    show() {
      
        // restore the original state
        this.replaceData(this.imgOrigin, this.copyData);

        // sometimes pass without effect processing
        let n = floor(random(100));
        if (n > 75 && this.throughFlag) {
            this.throughFlag = false;
            setTimeout(() => {
                this.throughFlag = true;
            }, floor(random(40, 400)));
        }
        if (!this.throughFlag) {
            push();
            translate((width - this.imgOrigin.width) / 2, (height - this.imgOrigin.height) / 2);
            image(this.imgOrigin, 0, 0);
            pop();
            return;
        }

        // flow line
        this.flowLineImgs.forEach((v, i, arr) => {
            arr[i].pixels = this.flowLine(this.imgOrigin, v);
            if (arr[i].pixels) {
                this.replaceData(this.imgOrigin, arr[i].pixels);
            }
        })

        // shift line
        this.shiftLineImgs.forEach((v, i, arr) => {
            if (floor(random(100)) > 50) {
                arr[i] = this.shiftLine(this.imgOrigin);
                this.replaceData(this.imgOrigin, arr[i]);
            } else {
                if (arr[i]) {
                    this.replaceData(this.imgOrigin, arr[i]);
                }
            }
        })

        // shift rgb
        this.shiftRGBs.forEach((v, i, arr) => {
            if (floor(random(100)) > 65) {
                arr[i] = this.shiftRGB(this.imgOrigin);
                this.replaceData(this.imgOrigin, arr[i]);
            }
        })

        push();
        translate((width - this.imgOrigin.width) / 2, (height - this.imgOrigin.height) / 2);
        image(this.imgOrigin, 0, 0);
        pop();

        // scat image
        this.scatImgs.forEach((obj) => {
            push();
            translate((width - this.imgOrigin.width) / 2, (height - this.imgOrigin.height) / 2);
            if (floor(random(100)) > 80) {
                obj.x = floor(random(-this.imgOrigin.width * 0.3, this.imgOrigin.width * 0.7));
                obj.y = floor(random(-this.imgOrigin.height * 0.1, this.imgOrigin.height));
                obj.img = this.getRandomRectImg(this.imgOrigin);
            }
            if (obj.img) {
                image(obj.img, obj.x, obj.y);
            }
            pop();
        })

    }

}

*/

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);