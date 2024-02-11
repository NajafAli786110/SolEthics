exports.id = 934;
exports.ids = [934];
exports.modules = {

/***/ 4404:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 4348:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8616))

/***/ }),

/***/ 7420:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2339))

/***/ }),

/***/ 2339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
var use_reduced_motion = __webpack_require__(1498);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs
var MotionConfig = __webpack_require__(9967);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 195 modules
var motion = __webpack_require__(5796);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(6664);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/react-icons/hi/index.esm.js
var index_esm = __webpack_require__(2717);
// EXTERNAL MODULE: ./node_modules/react-icons/io/index.esm.js
var io_index_esm = __webpack_require__(2772);
// EXTERNAL MODULE: ./src/components/Button.jsx
var Button = __webpack_require__(6444);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(566);
// EXTERNAL MODULE: ./src/components/Offices.jsx
var Offices = __webpack_require__(9945);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var bs_index_esm = __webpack_require__(930);
;// CONCATENATED MODULE: ./src/components/SocialMedia.jsx




const SocialMediaProfiles = [
    {
        title: "Youtube",
        href: "https://www.youtube.com/@reactjsBD/",
        icon: bs_index_esm/* BsYoutube */.bUO
    },
    {
        title: "GitHub",
        href: "https://github.com/noorjsdivs/",
        icon: bs_index_esm/* BsGithub */.rFR
    },
    {
        title: "Facebook",
        href: "https://www.facebook.com/Noorlalu143/",
        icon: bs_index_esm/* BsFacebook */.k1O
    },
    {
        title: "Instagram",
        href: "https://www.linkedin.com/in/noor-mohammad-ab2245193/",
        icon: bs_index_esm/* BsLinkedin */.NQh
    },
    {
        title: "Twitter",
        href: "https://twitter.com",
        icon: bs_index_esm/* BsTwitter */.meP
    }
];
const SocialMedia = ({ className, invert = false })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        role: "list",
        className: (0,clsx/* default */.Z)("flex gap-x-10", invert ? "text-white" : "text-neutral-950", className),
        children: SocialMediaProfiles.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: item.href,
                    "aria-label": item.title,
                    className: (0,clsx/* default */.Z)("transition", invert ? "hover:text-neutral-200" : "hover:text-neutral-700"),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(item.icon, {
                        className: "h-6 w-6 fill-current"
                    })
                })
            }, item.title))
    });
};
/* harmony default export */ const components_SocialMedia = (SocialMedia);

// EXTERNAL MODULE: ./src/components/FadeIn.jsx
var FadeIn = __webpack_require__(8616);
;// CONCATENATED MODULE: ./src/constants/index.jsx


const constants_navigation = [
    {
        title: "Work",
        links: [
            {
                title: "Amazon Clone",
                href: "/work/amazonclone"
            },
            {
                title: "Bazar e-commerce",
                href: "/work/bazar"
            },
            {
                title: "Blog 101",
                href: "/work/blog101"
            },
            {
                title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "See all ",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            "aria-hidden": "true",
                            children: "→"
                        })
                    ]
                }),
                href: "/work"
            }
        ]
    },
    {
        title: "Company",
        links: [
            {
                title: "About",
                href: "/about"
            },
            {
                title: "Process",
                href: "/process"
            },
            {
                title: "Blog",
                href: "/blog"
            },
            {
                title: "Contact us",
                href: "/contact"
            }
        ]
    },
    {
        title: "Connect",
        links: SocialMediaProfiles
    }
];

;// CONCATENATED MODULE: ./src/components/FooterNavigation.jsx



const FooterNavigation = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            role: "list",
            className: "grid grid-cols-2 gap-8 sm:grid-cols-3",
            children: constants_navigation.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "font-display text-sm font-semibold tracking-wider text-neutral-950",
                            children: item.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            role: "list",
                            className: "mt-4 text-sm text-neutral-700",
                            children: item.links.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "mt-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: link.href,
                                        className: "transition hover:text-neutral-950",
                                        children: link.title
                                    })
                                }, link.title))
                        })
                    ]
                }, item.title))
        })
    });
};
/* harmony default export */ const components_FooterNavigation = (FooterNavigation);

;// CONCATENATED MODULE: ./src/components/Logo.jsx



const Logo = ({ invert, href, className, children, ...props })=>{
    className = (0,clsx/* default */.Z)(className, "black", invert ? "text-white hover:text-blue-600" : "text-black hover:text-blue-600");
    const inner = /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "relative",
        children: children
    });
    if (href) {
        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: href,
            className: className,
            ...props,
            children: inner
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("h2", {
        className: (0,clsx/* default */.Z)("cursor-pointer text-2xl font-semibold duration-300", className),
        ...props,
        children: inner
    });
};
/* harmony default export */ const components_Logo = (Logo);

;// CONCATENATED MODULE: ./src/components/Footer.jsx







const ArrowIcon = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 16 6",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16 3 10 .5v2H0v1h10v2L16 3Z"
        })
    });
};
const NewsletterForm = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: "max-w-sm",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "font-display text-sm font-semibold tracking-wider text-neutral-950",
                children: "Sign up for our newsletter"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mt-4 text-sm text-neutral-700",
                children: "Subscribe to get the latest design news, articles, resources and inspiration."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative mt-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "email",
                        placeholder: "Email address",
                        autoComplete: "email",
                        "aria-label": "Email address",
                        className: "block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute inset-y-1 right-1 flex justify-end",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            "aria-label": "Submit",
                            className: "flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowIcon, {
                                className: "w-4"
                            })
                        })
                    })
                ]
            })
        ]
    });
};
const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
        as: "footer",
        className: "mt-24 w-full sm:mt-32 lg:mt-40",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FadeIn["default"], {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_FooterNavigation, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex lg:justify-end",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NewsletterForm, {})
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            "aria-label": "Home",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_Logo, {
                                className: "h-8",
                                fillOnHover: true,
                                children: "Studio_clone"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "text-sm text-neutral-700",
                            children: [
                                "\xa9 Studio Agency Inc. ",
                                new Date().getFullYear()
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./src/images/SolEthics_Logo_Black.png
/* harmony default export */ const SolEthics_Logo_Black = ({"src":"/_next/static/media/SolEthics_Logo_Black.226ac0ad.png","height":121,"width":992,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAKklEQVR4nGMUFPesZXz5m/XzCc0bLE9+8HGG3P31X5JdlOH5fw4GBoY/AOnhDdYExLvNAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":1});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/RootLayout.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 















const Header = ({ panelId, invert = false, icon: Icon, expanded, onToggle, toggleRef })=>{
    // Container
    return /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    "aria-label": "Home",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: SolEthics_Logo_Black,
                        width: 180,
                        height: 180
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center gap-x-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                            href: "/contact",
                            invert: invert,
                            children: "Contact us"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            ref: toggleRef,
                            type: "button",
                            onClick: onToggle,
                            "aria-expanded": expanded.toString(),
                            "aria-controls": panelId,
                            className: (0,clsx/* default */.Z)("group -m-2.5 rounded-full p-2.5 transition", invert ? "hover:bg-white/10" : "hover:bg-neutral-950/10"),
                            "aria-label": "Toggle navigation",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                className: (0,clsx/* default */.Z)("h-6 w-6", invert ? "fill-white group-hover:fill-neutral-200" : "fill-neutral-950 group-hover:fill-neutral-700")
                            })
                        })
                    ]
                })
            ]
        })
    });
};
const NavigationRow = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "even:mt-px sm:bg-neutral-950",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2",
                children: children
            })
        })
    });
};
const NavigationItem = ({ href, children })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: href,
        className: "group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16",
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"
            })
        ]
    });
};
const Navigation = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "mt-px font-display text-5xl font-medium tracking-tight text-white",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavigationRow, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        href: "/work",
                        children: "Our Work"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        href: "/about",
                        children: "About Us"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavigationRow, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        href: "/process",
                        children: "Our Process"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        href: "/blog",
                        children: "Blog"
                    })
                ]
            })
        ]
    });
};
const RootLayoutInner = ({ children })=>{
    const panelId = (0,react_.useId)();
    const [expanded, setExpanded] = (0,react_.useState)(false);
    const openRef = (0,react_.useRef)();
    const closeRef = (0,react_.useRef)();
    const navRef = (0,react_.useRef)();
    const shouldReduceMotion = (0,use_reduced_motion/* useReducedMotion */.J)();
    (0,react_.useEffect)(()=>{
        function onClick(event) {
            if (event.target.closest("a")?.href === window.location.href) {
                setExpanded(false);
            }
        }
        window.addEventListener("click", onClick);
        return ()=>{
            window.removeEventListener("click", onClick);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MotionConfig/* MotionConfig */.A, {
        transition: shouldReduceMotion ? {
            duration: 0
        } : undefined,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute left-0 right-0 top-2 z-40 pt-14",
                        "aria-hidden": expanded ? "true" : undefined,
                        inert: expanded ? "" : undefined,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                            panelId: panelId,
                            icon: index_esm/* HiMenuAlt4 */.iwI,
                            toggleRef: openRef,
                            expanded: expanded,
                            onToggle: ()=>{
                                setExpanded((expanded)=>!expanded);
                                window.setTimeout(()=>closeRef.current?.focus({
                                        preventScroll: true
                                    }));
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                        layout: true,
                        id: panelId,
                        style: {
                            height: expanded ? "auto" : "0.5rem"
                        },
                        className: "relative z-50 overflow-hidden bg-neutral-950 pt-2",
                        "aria-hidden": expanded ? undefined : "true",
                        inert: expanded ? undefined : "",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                            layout: true,
                            className: "bg-neutral-800",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    ref: navRef,
                                    className: "bg-neutral-950 pb-16 pt-14",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                                        invert: true,
                                        panelId: panelId,
                                        icon: io_index_esm/* IoMdClose */.QAE,
                                        toggleRef: closeRef,
                                        expanded: expanded,
                                        onToggle: ()=>{
                                            setExpanded((expanded)=>!expanded);
                                            window.setTimeout(()=>openRef.current?.focus({
                                                    preventScroll: true
                                                }));
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: "font-display text-base font-semibold text-white",
                                                            children: "Our offices"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Offices/* default */.Z, {
                                                            invert: true,
                                                            className: "mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "sm:border-l sm:border-transparent sm:pl-16",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: "font-display text-base font-semibold text-white",
                                                            children: "Follow us"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(components_SocialMedia, {
                                                            className: "mt-6",
                                                            invert: true
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                layout: true,
                style: {
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40
                },
                className: "relative flex flex-auto overflow-hidden bg-white pt-14",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                    layout: true,
                    className: "relative isolate flex w-full flex-col pt-9",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("main", {
                            className: "w-full flex-auto",
                            children: children
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
                    ]
                })
            })
        ]
    });
};
const RootLayout = ({ children })=>{
    const pathName = (0,navigation.usePathname)();
    return /*#__PURE__*/ jsx_runtime_.jsx(RootLayoutInner, {
        children: children
    }, pathName);
};
/* harmony default export */ const components_RootLayout = (RootLayout);

// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(3824);
// EXTERNAL MODULE: ./node_modules/animejs/lib/anime.js
var anime = __webpack_require__(6995);
var anime_default = /*#__PURE__*/__webpack_require__.n(anime);
;// CONCATENATED MODULE: ./src/images/SolEthics_Logo.png
/* harmony default export */ const SolEthics_Logo = ({"src":"/_next/static/media/SolEthics_Logo.a7046be9.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAj0lEQVR42o2MIQ7CQBREd//ep4pAFQkCFCEEw1VISNBwBjwBT4IFheIEKBSioimGdue3w7/B8pIZM5nnkjQxBraUXXGUS3kXKiUCAVCJEeEvw5zK2bY4DG6fx4Qdx1BM7b2wLJ3ViNoNN69Ttn9ee+Vbs6pqclXt25a7JAAEdStrrvyZzjuDpK+/EACSFPwALd1YxYrrR5gAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/SplashScreen.jsx





const SplashScreen = ({ finishLoading })=>{
    const [isMounted, setIsMounted] = (0,react_.useState)(false);
    const anime_func = ()=>{
        const loader = anime_default().timeline({
            complete: ()=>finishLoading()
        });
        loader.add({
            targets: "#logo",
            delay: 0,
            scale: 1,
            duration: 500,
            easing: "easeInOutExpo"
        }).add({
            targets: "#logo",
            delay: 0,
            scale: 1.25,
            duration: 500,
            easing: "easeInOutExpo"
        }).add({
            targets: "#logo",
            delay: 0,
            scale: 1,
            duration: 500,
            easing: "easeInOutExpo"
        }).add({
            targets: "#logo",
            delay: 0,
            scale: 1.25,
            duration: 500,
            easing: "easeInOutExpo"
        });
    };
    (0,react_.useEffect)(()=>{
        const timeout = setTimeout(()=>setIsMounted(true), 10);
        anime_func();
        return ()=>clearTimeout(timeout);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "h-screen flex items-center justify-center",
        isMounted: isMounted,
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            id: "logo",
            src: SolEthics_Logo,
            height: 400,
            width: 400
        })
    });
};
/* harmony default export */ const components_SplashScreen = (SplashScreen);

;// CONCATENATED MODULE: ./src/app/layout.jsx
/* __next_internal_client_entry_do_not_use__ metadata,default auto */ 





const metadata = {
    title: {
        template: "SolEthics",
        default: "SolEthics | Where Solution Meet Ethics"
    }
};
function Layout({ children }) {
    const pathname = (0,navigation.usePathname)();
    const isHome = pathname === "/";
    const [isLoading, setIsLoading] = (0,react_.useState)(isHome);
    (0,react_.useEffect)(()=>{
        if (isLoading) {}
    }, [
        isLoading
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: "h-full bg-neutral-950 text-base antialiased text-neutral-100",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: "flex min-h-full flex-col",
            children: isLoading && isHome ? /*#__PURE__*/ jsx_runtime_.jsx(components_SplashScreen, {
                finishLoading: ()=>setIsLoading(false)
            }) : /*#__PURE__*/ jsx_runtime_.jsx(components_RootLayout, {
                children: children
            })
        })
    });
}


/***/ }),

/***/ 6444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(566);



const Button = ({ invert, href, className, children, ...props })=>{
    className = (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(className, "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition", invert ? "bg-white text-neutral-950 hover:bg-neutral-200" : "text-white hover:bg-neutral-800 bg-SolEthics-primary");
    let inner = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        children: children
    });
    if (href) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: href,
            className: className,
            ...props,
            children: inner
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: className,
        ...props,
        children: inner
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 6664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(566);


const Container = ({ as: Component = "div", className, children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("max-w-7xl mx-auto px-6 lg:px-8", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-2xl mx-auto lg:max-w-none",
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 8616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FadeInStagger: () => (/* binding */ FadeInStagger),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1498);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5796);
/* __next_internal_client_entry_do_not_use__ FadeInStagger,default auto */ 


const FadeInStaggerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
const viewport = {
    once: true,
    margin: "0px 0px -200px"
};
const FadeIn = (props)=>{
    const shouldReduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .useReducedMotion */ .J)();
    const isInStaggerGroup = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FadeInStaggerContext);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
        variants: {
            hidden: {
                opacity: 0,
                y: shouldReduceMotion ? 0 : 24
            },
            visible: {
                opacity: 1,
                y: 0
            }
        },
        transition: {
            duration: 0.5
        },
        ...isInStaggerGroup ? {} : {
            initial: "hidden",
            whileInView: "visible",
            viewport
        },
        ...props
    });
};
const FadeInStagger = ({ faster = false, ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeInStaggerContext.Provider, {
        value: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
            initial: "hidden",
            whileInView: "visible",
            viewport: viewport,
            transition: {
                staggerChildren: faster ? 0.12 : 0.2
            },
            ...props
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FadeIn);


/***/ }),

/***/ 9945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(566);


function Office({ name, children, invert = false }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("address", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("text-sm not-italic", invert ? "text-neutral-300" : "text-neutral-600"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                className: invert ? "text-white" : "text-neutral-950",
                children: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            children
        ]
    });
}
const Offices = ({ invert = false, ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        role: "list",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Office, {
                    name: "U.S.A",
                    invert: invert,
                    children: [
                        "on bay mark",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "Newtown city of Las Vegas"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Office, {
                    name: "London",
                    invert: invert,
                    children: [
                        "13 long Street",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "Downtown, Allyway"
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Offices);


/***/ }),

/***/ 5004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   metadata: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\najaf\Downloads\studioyt-main\studioyt-main\src\app\layout.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["metadata"];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 9653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1392);
/* harmony import */ var _components_FadeIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5635);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2947);





const NotFound = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        className: "flex h-full items-center pt-20 sm:pt-24 lg:pt-32",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_FadeIn__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
            className: "flex flex-col items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "font-display text-4xl font-semibold text-neutral-950 sm:text-5xl",
                    children: "404"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "mt-4 font-display text-2xl font-semibold text-neutral-950",
                    children: "Page not found"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mt-2 text-sm text-neutral-600",
                    children: "Sorry, we could ont find the page you are looking for."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: "/",
                    className: "mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700",
                    children: "Go to the home page"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);


/***/ }),

/***/ 1392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5182);


const Container = ({ as: Component = "div", className, children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("max-w-7xl mx-auto px-6 lg:px-8", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-2xl mx-auto lg:max-w-none",
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 5635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   o$: () => (/* binding */ e0)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\najaf\Downloads\studioyt-main\studioyt-main\src\components\FadeIn.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["FadeInStagger"];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"200x200"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 3824:
/***/ (() => {



/***/ })

};
;