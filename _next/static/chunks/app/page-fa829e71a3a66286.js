(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    193: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 6774));
    },
    6774: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return h;
          },
        });
      var a = s(7437),
        l = s(2265),
        r = s(3972),
        i = s(6179),
        n = s(7818),
        c = s(6044);
      let o = "0x6cb25129314123BCD5aDCdc844cEaEEAd65A0896",
        x = (0, n.default)(
          () => Promise.all([s.e(479), s.e(186)]).then(s.bind(s, 4186)),
          { loadableGenerated: { webpack: () => [4186] }, ssr: !1 }
        ),
        d = (e) => {
          let { src: t, className: s, condition: r } = e,
            i = (0, l.useRef)(null),
            n = (0, l.useRef)(0);
          return (
            (0, l.useEffect)(() => {
              i.current && (i.current.src = t), (n.current += 1);
            }, [r]),
            (0, a.jsx)("img", { alt: "", ref: i, className: s })
          );
        },
        u = (e) => {
          let { children: t } = e;
          return (0, a.jsx)("h1", {
            className: "uppercase font-luckiestGuy text-5xl text-center",
            children: t,
          });
        },
        m = (e) => {
          let { img: t, staticImg: s, title: r, subTitle: i, link: n } = e,
            c = (0, l.useRef)(null),
            o = (0, l.useRef)(null),
            [x, d] = (0, l.useState)(!1),
            [u, m] = (0, l.useState)(!1);
          return (
            (0, l.useEffect)(() => {
              var e, t, s, a;
              navigator.userAgent.includes("Windows") && d(!0),
                null === (e = o.current) ||
                  void 0 === e ||
                  e.addEventListener("mouseover", () => {
                    m(!0);
                  }),
                null === (t = o.current) ||
                  void 0 === t ||
                  t.addEventListener("mouseleave", () => {
                    m(!1);
                  }),
                null === (s = c.current) ||
                  void 0 === s ||
                  s.addEventListener("mouseover", () => {
                    m(!0);
                  }),
                null === (a = c.current) ||
                  void 0 === a ||
                  a.addEventListener("mouseleave", () => {
                    m(!1);
                  });
            }, []),
            (0, a.jsxs)("div", {
              className:
                "bg-secondary w-64 h-60 relative text-white flex items-center justify-center flex-col rounded-lg",
              children: [
                (0, a.jsx)("div", {
                  className: "absolute -top-20 left-10  w-[168px] h-[168px]",
                  ref: c,
                  children: (0, a.jsx)("img", { src: t, alt: "" }),
                }),
                (0, a.jsxs)("div", {
                  className: "flex flex-col items-center",
                  children: [
                    (0, a.jsx)("div", {
                      className: "font-poppins text-xl",
                      children: r,
                    }),
                    (0, a.jsx)("div", {
                      className: "font-luckiestGuy text-2xl uppercase",
                      children: i,
                    }),
                  ],
                }),
                x
                  ? (0, a.jsx)("button", {
                      className:
                        "font-luckiestGuy text-md bg-white text-black absolute bottom-8 hover:scale-110 transform transition-transform uppercase w-[110px] h-[30px] px-2",
                      ref: o,
                      onClick: () => {
                        window.open(n, "_blank");
                      },
                      children: "see more",
                    })
                  : (0, a.jsx)("button", {
                      className:
                        "font-luckiestGuy text-md bg-white text-black absolute bottom-8 hover:scale-110 transform transition-transform uppercase w-[110px] h-[30px] px-2 py-1",
                      ref: o,
                      onClick: () => {
                        window.open(n, "_blank");
                      },
                      children: (0, a.jsx)("span", {
                        className: "absolute w-full top-[5px] left-0",
                        children: "see more",
                      }),
                    }),
              ],
            })
          );
        },
        p = (e) => {
          let { title: t, content: s } = e;
          return (0, a.jsxs)("div", {
            className:
              "border-2 border-black rounded-xl p-6 max-w-[550px] drop-shadow-xl shadow-black bg-white-3",
            style: { boxShadow: "4px 4px 0px 0px #000000" },
            children: [
              (0, a.jsx)("div", {
                className: "font-luckiestGuy text-xl uppercase",
                children: t,
              }),
              (0, a.jsx)("p", {
                className: "font-thin font-poppins mt-2",
                children: s,
              }),
            ],
          });
        };
      function h() {
        let e = l.useRef(null),
          t = l.useRef(null),
          s = l.useRef(null),
          n = l.useRef(null),
          [h, f] = (0, l.useState)(!1),
          { ref: g, inView: b } = (0, c.YD)(),
          { ref: w, inView: j } = (0, c.YD)();
        (0, l.useEffect)(() => {
          h
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "auto");
        }, [h]);
        let [v, N] = (0, l.useState)(!1),
          { scrollYProgress: y, scrollY: k } = (0, r.v)({
            target: e,
            offset: ["start end", "end start"],
          }),
          { scrollYProgress: C, scrollY: E } = (0, r.v)({
            target: s,
            offset: ["start end", "end start"],
          }),
          { scrollYProgress: T, scrollY: A } = (0, r.v)({
            target: n,
            offset: ["start end", "end start"],
          }),
          [R, S] = (0, l.useState)(0),
          [D, _] = (0, l.useState)(!1),
          [W, L] = (0, l.useState)(!1),
          [B, G] = (0, l.useState)({ w: 0, h: 0 });
        (0, l.useEffect)(() => {
          let e = () => {
            var e, s;
            G({
              w: Number(
                null === (e = t.current) || void 0 === e
                  ? void 0
                  : e.clientWidth
              ),
              h: Number(
                null === (s = t.current) || void 0 === s
                  ? void 0
                  : s.clientHeight
              ),
            });
          };
          return (
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, [t]),
          (0, l.useLayoutEffect)(() => {
            var e, s;
            navigator.userAgent.includes("Windows") && N(!0),
              G({
                w: Number(
                  null === (e = t.current) || void 0 === e
                    ? void 0
                    : e.clientWidth
                ),
                h: Number(
                  null === (s = t.current) || void 0 === s
                    ? void 0
                    : s.clientHeight
                ),
              }),
              window.scrollY > 6e3 && L(!0),
              window.scrollY > 2840 && _(!0);
          }, []),
          (0, i.W)(k, "change", (e) => {
            S(y.get());
          }),
          (0, i.W)(E, "change", (e) => {
            C.get() > 0.04 && !W && L(!0);
          }),
          (0, i.W)(A, "change", (e) => {
            T.get() > 0.1 && !D && _(!0);
          });
        let U = (0, l.useMemo)(() => (B.w < 1024 ? 50 : 300), [B]);
        return (0, a.jsxs)("main", {
          className: "relative",
          children: [
            (0, a.jsx)(x, { open: h, onClose: () => f(!1) }),
            (0, a.jsxs)("header", {
              className:
                "absolute flex justify-between w-full items-center px-4 pt-4 z-10",
              children: [
                (0, a.jsx)("div", {
                  children: (0, a.jsx)("img", {
                    src: "icons/logo.png",
                    className: "w-32",
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    (0, a.jsx)("a", {
                      href: "https://x.com/CulturCoinPJ",
                      target: "_blank",
                      children: (0, a.jsx)("img", {
                        src: "icons/x.png",
                        alt: "",
                        className: "hover:scale-110 transition-transform w-10",
                      }),
                    }),
                    (0, a.jsx)("a", {
                      href: "https://t.me/CulturCoin",
                      target: "_blank",
                      children: (0, a.jsx)("img", {
                        src: "icons/tg.png",
                        alt: "",
                        className: "hover:scale-110 transition-transform w-10",
                      }),
                    }),
                    (0, a.jsx)("a", {
                      href: "https://www.dextools.io/app/en/ether/pair-explorer/0xb47b71dc61025a80daecf8c922d66700d1e63a57?t=1732040600461",
                      target: "_blank",
                      children: (0, a.jsx)("img", {
                        src: "icons/dextools.png",
                        alt: "",
                        className: "hover:scale-110 transition-transform w-10",
                      }),
                    }),
                    (0, a.jsx)("a", {
                      href: "https://x.com/CulturCoinPJ",
                      target: "_blank",
                      children: (0, a.jsx)("img", {
                        src: "icons/dexscrener.png",
                        alt: "",
                        className: "hover:scale-110 transition-transform w-10",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("section", {
              className:
                "w-full h-screen bg-cover bg-center bg-home flex items-center justify-center relative",
              ref: g,
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center flex-col gap-6",
                  children: [
                    (0, a.jsx)(d, {
                      condition: b,
                      src: "/images/home-text.gif",
                      className: "lg:w-1/2",
                    }),
                    v
                      ? (0, a.jsx)("button", {
                          className:
                            "font-luckiestGuy text-white bg-black py-1 px-4 text-center text-3xl hover:scale-90 lg:hover:scale-110 transform transition-transform uppercase scale-75 lg:scale-100",
                          onClick: () => {
                            window.open(
                              "https://app.uniswap.org/swap?outputCurrency=0x6cb25129314123BCD5aDCdc844cEaEEAd65A0896",
                              "_blank"
                            );
                          },
                          children: "Buy Now",
                        })
                      : (0, a.jsx)("button", {
                          className:
                            "font-luckiestGuy text-white bg-black py-3 px-4 text-center text-3xl hover:scale-90 lg:hover:scale-110 transform transition-transform uppercase w-[158px] h-[47px] scale-75 lg:scale-100",
                          onClick: () => {
                            window.open(
                              "https://app.uniswap.org/swap?outputCurrency=0x6cb25129314123BCD5aDCdc844cEaEEAd65A0896",
                              "_blank"
                            );
                          },
                          children: (0, a.jsx)("span", {
                            className: "absolute w-full left-0 top-[5px]",
                            children: "Buy Now",
                          }),
                        }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "absolute bottom-20 flex gap-2 font-poppins text-xl",
                  children: [
                    (0, a.jsx)("img", {
                      src: "/icons/down.png",
                      alt: "",
                      className: " animate-bounce w-5 h-7",
                    }),
                    "Scroll down",
                    (0, a.jsx)("img", {
                      src: "/icons/down.png",
                      alt: "",
                      className: " animate-bounce w-5 h-7",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className:
                    "absolute bottom-0 bg-black text-white w-full overflow-hidden",
                  children: (0, a.jsx)("div", {
                    className:
                      "font-luckiestGuy text-4xl py-2 animate-marquee flex gap-4 whitespace-nowrap",
                    children: Array(100)
                      .fill("")
                      .map((e, t) =>
                        (0, a.jsx)(
                          "div",
                          {
                            children: v
                              ? (0, a.jsx)("div", { children: "$cultur" })
                              : (0, a.jsx)("div", {
                                  className: "relative w-[133px] h-[32px]",
                                  children: (0, a.jsx)("span", {
                                    children: "$cultur",
                                  }),
                                }),
                          },
                          t
                        )
                      ),
                  }),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "relative overflow-hidden",
              children: [
                (0, a.jsx)("section", {
                  className:
                    "bg-primary flex justify-center pt-32 relative pb-20 z-10",
                  children: (0, a.jsxs)("div", {
                    className: "max-w-[1200px]",
                    children: [
                      (0, a.jsx)(u, { children: "What is cultur" }),
                      (0, a.jsx)("br", {}),
                      (0, a.jsxs)("div", {
                        className:
                          "flex justify-center items-center gap-4 flex-col lg:flex-row",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "relative h-[650px] w-[540px] scale-75 lg:scale-100",
                            children: [
                              (0, a.jsx)("div", {
                                className: "absolute z-10 rotate-12",
                                children: (0, a.jsx)("img", {
                                  src: "/images/img-1.png",
                                  alt: "",
                                  className:
                                    " w-[270px] hover:animate-hero1 animate-hero11",
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "absolute top-1/4 right-20 z-20 -rotate-12",
                                children: (0, a.jsx)("img", {
                                  src: "/images/img-2.png",
                                  alt: "",
                                  className:
                                    "w-[270px] hover:animate-hero2 animate-hero22",
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "absolute bottom-0 z-10 left-10 -rotate-12",
                                children: (0, a.jsx)("img", {
                                  src: "/images/img-3.png",
                                  alt: "",
                                  className:
                                    " w-[270px] hover:animate-hero3 animate-hero33",
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("p", {
                            className: "font-poppins w-96 text-xl px-4 md:px-0",
                            children: [
                              "CULTUR aims to use the combination blockchain technology and multimedia to create a fun and exciting token that celebrates the culture behind the things we love the most; games, TV shows, films, characters, memes and much more!",
                              (0, a.jsx)("br", {}),
                              (0, a.jsx)("br", {}),
                              "Explore your favourite icons across time with Mr. E as our guide!",
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("br", {}),
                      (0, a.jsx)("br", {}),
                      (0, a.jsx)("br", {}),
                      (0, a.jsx)(u, { children: "Who is Mr. e" }),
                      (0, a.jsx)("br", {}),
                      (0, a.jsx)("br", {}),
                      (0, a.jsxs)("div", {
                        className:
                          "flex justify-center items-center gap-4 flex-col lg:flex-row",
                        children: [
                          (0, a.jsxs)("p", {
                            className:
                              "font-poppins w-[357px] text-xl order-1 lg:order-2",
                            children: [
                              "Mr. Entertain, also known as Mr. E, is our buoyant guide that can travel through time and space.",
                              (0, a.jsx)("br", {}),
                              (0, a.jsx)("br", {}),
                              "He uses that curiously mysterious third eye to see and experience any and all sorts of entertainment across time.",
                              (0, a.jsx)("br", {}),
                              (0, a.jsx)("br", {}),
                              "Join Mr. E as he blasts through cyberspace! Who knows, you might even find him traversing into your favourite entertainment!",
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "relative w-[463px] h-[463px] order-2 scale-75 lg:scale-100 background_image",
                            children: (0, a.jsx)("img", {
                              src: "/images/img-8.gif",
                              className: "m-auto top-12 text-center w-full",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "bg-primary relative h-[200px]",
                  ref: t,
                  children: [
                    (0, a.jsx)("svg", {
                      height: "100%",
                      width: "100%",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, a.jsx)("polygon", {
                        points: "0,0 "
                          .concat(B.w, ",0 ")
                          .concat(B.w, ",")
                          .concat(U),
                        className: "fill-primary",
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "absolute animate-marquee2 flex top-0 right-0 z-20 lg:h-52 h-24 justify-end w-[140%] lg:w-auto",
                      style: { rotate: "6deg" },
                      children: Array(100)
                        .fill("")
                        .map((e, t) =>
                          (0, a.jsx)(
                            "img",
                            { src: "/images/img-7.png", className: "" },
                            t
                          )
                        ),
                    }),
                  ],
                }),
                (0, a.jsx)("section", {
                  className:
                    "bg-primary pb-32 flex justify-center lg:pt-32 z-0 ",
                  children: (0, a.jsxs)("div", {
                    className: "max-w-[1200px] w-full p-2 lg:p-0",
                    children: [
                      (0, a.jsx)(u, { children: "Token stuff" }),
                      (0, a.jsx)("br", {}),
                      (0, a.jsx)("br", {}),
                      (0, a.jsxs)("div", {
                        className:
                          "bg-secondary text-white px-6 lg:px-11 rounded-lg w-full py-9 flex justify-between font-poppins text-2xl flex-col lg:flex-row",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex justify-between lg:block ",
                            children: [
                              (0, a.jsx)("div", {
                                className: "mb-2",
                                children: " Contract Address ",
                              }),
                              (0, a.jsxs)("div", {
                                className: "font-thin flex items-center gap-3",
                                children: [
                                  (0, a.jsxs)("span", {
                                    className: "block lg:hidden",
                                    children: [
                                      o.slice(0, 4) + "..." + o.slice(-4),
                                      " ",
                                    ],
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "hidden lg:block",
                                    children: o,
                                  }),
                                  (0, a.jsx)("button", {
                                    onClick: () => {
                                      navigator.clipboard.writeText(o);
                                    },
                                    children: (0, a.jsx)("img", {
                                      src: "/icons/copy.png",
                                      alt: "",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "text-left lg:text-right flex lg:block justify-between invisible",
                            children: [
                              (0, a.jsx)("div", {
                                className: "mb-2",
                                children: "Price",
                              }),
                              (0, a.jsx)("div", {
                                className: "font-bold",
                                children: "$0.0069",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("br", {}),
                      (0, a.jsx)("br", {}),
                      (0, a.jsx)("br", {}),
                      (0, a.jsx)("br", {}),
                      (0, a.jsxs)("div", {
                        className:
                          "flex justify-between flex-col lg:flex-row items-center lg:items-start gap-20 lg:gap-0",
                        children: [
                          (0, a.jsx)(m, {
                            img: "/gifs/token.gif",
                            staticImg: "/images/g-coin.png",
                            title: "Token Standard",
                            subTitle: "ERC20",
                            link: "https://etherscan.io/token/0x6cb25129314123bcd5adcdc844ceaeead65a0896",
                          }),
                          (0, a.jsx)(m, {
                            img: "/gifs/uniswap.gif",
                            staticImg: "/images/g-uni.png",
                            title: "Liquidity Pool",
                            subTitle: "No in-built tax",
                            link: "https://etherscan.io/address/0xb47B71Dc61025A80DAEcf8C922d66700D1e63a57",
                          }),
                          (0, a.jsx)(m, {
                            img: "/gifs/locked.gif",
                            staticImg: "/images/g-lock.png",
                            title: "Liquidity",
                            subTitle: "locked",
                            link: "https://etherscan.io/tx/0x538d35da62dd8d0ab01e3b6b88d2b233d13d78e9030cb9e97fedfbe86f5218b8",
                          }),
                          (0, a.jsx)(m, {
                            img: "/gifs/contract.gif",
                            staticImg: "/images/g-contract.png",
                            title: "Contract",
                            subTitle: "renounced",
                            link: "https://etherscan.io/tx/0x241046bfa50f474b66fa57b2646385b6d6045e2b5b06d705fc9539280b364cfa",
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "flex justify-center mt-10",
                        children: (0, a.jsx)("iframe", {
                          id: "dextools-widget",
                          title: "DEXTools Trading Chart",
                          width: "1200",
                          height: "500",
                          src: "https://www.dextools.io/widget-chart/en/ether/pe-light/0xb47b71dc61025a80daecf8c922d66700d1e63a57?theme=dark&chartType=1&chartResolution=1&drawingToolbars=false",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, a.jsx)("section", {
              className: "bg-primary py-32 flex justify-center",
              ref: n,
              children: (0, a.jsxs)("div", {
                className: "max-w-[1200px] w-full",
                children: [
                  (0, a.jsx)(u, { children: "How To Buy" }),
                  (0, a.jsx)("br", {}),
                  (0, a.jsx)("br", {}),
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-col lg:flex-row gap-10 lg:gap-0 items-center lg:items-start ",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex flex-col gap-4 p-2 lg:p-0 lg:w-1/2",
                        children: [
                          (0, a.jsx)(p, {
                            title: "Step 1: Connect your wallet",
                            content:
                              "Connect your Web3 wallet such as MetaMask, Trust Wallet, or Phantom Wallet.",
                          }),
                          (0, a.jsx)(p, {
                            title: "Step 2: Ensure You Have Funds",
                            content:
                              "Ensure you have Ethereum (ETH) in your Web3 wallet. You can purchase ETH directly through your MetaMask wallet using the ‘Buy’ option or from exchanges like Coinbase.",
                          }),
                          (0, a.jsx)(p, {
                            title: "Step 3: Swap for $Cultur",
                            content:
                              "Once your wallet is connected, use the Uniswap interface. Enter the $CULTUR contract address (available at the top of this page) to ensure you select the correct token. Set slippage to “Auto” to facilitate the swap. Swap your ETH for $CULTUR.",
                          }),
                          (0, a.jsx)(p, {
                            title: "Step 4: Confirm the Transaction",
                            content:
                              "Confirm the transaction in your Web3 wallet. Sign and approve the transaction. Your $CULTUR tokens will be processed and added to your wallet shortly.",
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "flex items-center lg:w-1/2",
                        children:
                          D &&
                          (0, a.jsx)("iframe", {
                            src: "https://app.uniswap.org/#/swap?exactField=input&exactAmount=10&outputCurrency=0x6cb25129314123BCD5aDCdc844cEaEEAd65A0896",
                            height: "660px",
                            width: "100%",
                            className: "w-auto lg:w-[475px]",
                            style: {
                              border: 0,
                              margin: "0 auto",
                              marginBottom: ".5rem",
                              display: "block",
                              borderRadius: "10px",
                              maxWidth: "960px",
                            },
                          }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsx)("section", {
              className: "py-32 flex justify-center lg:pt-32 z-0",
              children: (0, a.jsxs)("div", {
                className: "max-w-[1200px] w-full p-2 lg:p-0",
                children: [
                  (0, a.jsx)(u, { children: "Join the cultur" }),
                  (0, a.jsx)("br", {}),
                  (0, a.jsx)("br", {}),
                  (0, a.jsxs)("div", {
                    className:
                      "flex items-center justify-center gap-20 flex-col lg:flex-row overflow-hidden lg:overflow-visible p-10",
                    children: [
                      (0, a.jsx)("div", {
                        className: "-rotate-12",
                        children: (0, a.jsx)("img", {
                          src: "/images/img-5.png",
                          alt: "",
                          className:
                            "w-[368px] hover:animate-monalisa animate-monalisa2",
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "w-[300px] flex flex-col items-center gap-8",
                        children: [
                          (0, a.jsx)("p", {
                            className: "font-poppins text-xl text-center",
                            children:
                              "Join the CULTUR community by adding Mr. E to your PFP!",
                          }),
                          v
                            ? (0, a.jsx)("button", {
                                className:
                                  "uppercase font-luckiestGuy text-white bg-black px-2 hover:scale-110 transition-transform relative w-[157px] h-[30px]",
                                onClick: () => f(!0),
                                children: "click here to edit",
                              })
                            : (0, a.jsx)("button", {
                                className:
                                  "uppercase font-luckiestGuy text-white bg-black px-2 py-1 hover:scale-110 transition-transform relative w-[157px] h-[30px]",
                                onClick: () => f(!0),
                                children: (0, a.jsx)("span", {
                                  className: "absolute w-full left-0 top-[6px]",
                                  children: "Enter Editor",
                                }),
                              }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsx)("section", {
              className: "bg-primary py-32 flex justify-center",
              ref: w,
              children: (0, a.jsxs)("div", {
                className:
                  "max-w-[1200px] w-full flex flex-col justify-center items-center",
                children: [
                  (0, a.jsx)("div", {
                    className: "lg:w-1/4 sm:w-1/2 w-[80%]",
                    children: (0, a.jsx)(d, {
                      src: "/images/footer-text.gif",
                      condition: j,
                    }),
                  }),
                  (0, a.jsx)("br", {}),
                  (0, a.jsx)("br", {}),
                  (0, a.jsxs)("div", {
                    className:
                      "flex justify-center flex-col items-center gap-10",
                    children: [
                      (0, a.jsx)("img", {
                        src: "/images/img-6.gif",
                        alt: "",
                        className: "w-[474px]",
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex flex-col justify-center items-center",
                        children: [
                          (0, a.jsx)("div", {
                            className: "uppercase font-luckiestGuy text-3xl",
                            children: "Join Us",
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex justify-center gap-2",
                            children: [
                              (0, a.jsx)("a", {
                                href: "https://x.com/CulturCoinPJ",
                                target: "_blank",
                                children: (0, a.jsx)("img", {
                                  src: "/icons/x.png",
                                  alt: "",
                                  className:
                                    "hover:scale-110 transition-transform w-10",
                                }),
                              }),
                              (0, a.jsx)("a", {
                                href: "https://t.me/CulturCoin",
                                target: "_blank",
                                children: (0, a.jsx)("img", {
                                  src: "/icons/tg.png",
                                  alt: "",
                                  className:
                                    "hover:scale-110 transition-transform w-10",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsx)("footer", {
              className: " font-poppins bg-primary text-center py-4",
              children: "\xa9CULTUR 2024 - All Rights Reserved.",
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [438, 971, 23, 744], function () {
      return e((e.s = 193));
    }),
      (_N_E = e.O());
  },
]);
