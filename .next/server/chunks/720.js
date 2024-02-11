"use strict";
exports.id = 720;
exports.ids = [720];
exports.modules = {

/***/ 7612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1392);
/* harmony import */ var _FadeIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5635);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(732);
/* harmony import */ var _Offices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3040);






const ContactSection = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: "mt-24 sm:mt-32 lg:mt-40",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FadeIn__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
            className: "-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl",
                        children: "Tell us about your project"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-6 flex",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            href: "/contact",
                            invert: true,
                            children: "Say Hello"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-10 border-t border-white/10 pt-10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "font-display text-base font-semibold text-white",
                                children: "Our offices"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Offices__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                invert: true,
                                className: "mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactSection);


/***/ }),

/***/ 4771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ GridList),
/* harmony export */   l: () => (/* binding */ GridListItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FadeIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5635);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5182);
/* harmony import */ var _Border__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2779);




function GridList({ className, children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FadeIn__WEBPACK_IMPORTED_MODULE_1__/* .FadeInStagger */ .o$, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            role: "list",
            className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3", className),
            children: children
        })
    });
}
function GridListItem({ title, children, className, invert = false }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("text-base", invert ? "text-neutral-300 before:bg-white after:bg-white/10" : "text-neutral-600 before:bg-neutral-950 after:bg-neutral-100", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FadeIn__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Border__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                position: "left",
                className: "pl-8",
                invert: invert,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("font-semibold", invert ? "text-white" : "text-neutral-950"),
                        children: [
                            title,
                            "."
                        ]
                    }),
                    " ",
                    children
                ]
            })
        })
    });
}


/***/ }),

/***/ 5962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1392);
/* harmony import */ var _FadeIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5635);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5182);





const SectionIntro = ({ eyebrow, title, children, smaller = false, invert = false, ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FadeIn__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
            className: "max-w-2xl",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                    children: [
                        eyebrow && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("mb-6 block font-display text-base font-semibold", invert ? "text-white" : "text-neutral-950"),
                                    children: eyebrow
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sr-only",
                                    children: " - "
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("block font-display tracking-tight [text-wrap:balance]", smaller ? "text-2xl font-semibold" : "text-4xl font-medium sm:text-5xl", invert ? "text-white" : "text-neutral-950"),
                            children: title
                        })
                    ]
                }),
                children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("mt-6 text-xl", invert ? "text-neutral-300" : "text-neutral-600"),
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionIntro);


/***/ })

};
;