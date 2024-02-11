"use strict";
exports.id = 925;
exports.ids = [925];
exports.modules = {

/***/ 7509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5796);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Block({ x, y, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.path, {
        transform: `translate(${-32 * y + 96 * x} ${160 * y})`,
        d: "M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z",
        ...props
    });
}
const GridPattern = ({ yOffset = 0, interactive = false, ...props })=>{
    let id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    let ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let currentBlock = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let counter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    let [hoveredBlocks, setHoveredBlocks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    let staticBlocks = [
        [
            1,
            1
        ],
        [
            2,
            2
        ],
        [
            4,
            3
        ],
        [
            6,
            2
        ],
        [
            7,
            4
        ],
        [
            5,
            5
        ]
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ref: ref,
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                width: "100%",
                height: "100%",
                fill: `url(#${id})`,
                strokeWidth: "0"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                x: "50%",
                y: yOffset,
                strokeWidth: "0",
                className: "overflow-visible",
                children: [
                    staticBlocks.map((block)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Block, {
                            x: block[0],
                            y: block[1]
                        }, `${block}`)),
                    hoveredBlocks.map((block)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Block, {
                            x: block[0],
                            y: block[1],
                            animate: {
                                opacity: [
                                    0,
                                    1,
                                    0
                                ]
                            },
                            transition: {
                                duration: 1,
                                times: [
                                    0,
                                    0,
                                    1
                                ]
                            },
                            onAnimationComplete: ()=>{
                                setHoveredBlocks((blocks)=>blocks.filter((b)=>b[2] !== block[2]));
                            }
                        }, block[2]))
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pattern", {
                    id: id,
                    width: "96",
                    height: "480",
                    x: "50%",
                    patternUnits: "userSpaceOnUse",
                    patternTransform: `translate(0 ${yOffset})`,
                    fill: "none",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridPattern);


/***/ }),

/***/ 7801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/laptop.22dcb094.jpg","height":3000,"width":2400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAmhH/xAAcEAACAgIDAAAAAAAAAAAAAAABAgMEABMGEVL/2gAIAQEAAT8As8ilrnVcuFih6jjSMHWnkkZ//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Aj//Z","blurWidth":6,"blurHeight":8});

/***/ })

};
;