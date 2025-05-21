"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [186],
  {
    4186: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        });
      var r = n(7437),
        l = n(2466),
        i = n(1235),
        c = n.n(i),
        s = n(140),
        a = n.n(s),
        o = n(2265);
      let d = (e) => {
          let { children: t, onClick: n, className: l } = e,
            [i, c] = (0, o.useState)(!1);
          return (
            (0, o.useEffect)(() => {
              navigator.userAgent.includes("Windows") && c(!0);
            }, []),
            i
              ? (0, r.jsx)("button", {
                  className:
                    "text-2xl font-luckiestGuy text-white bg-black py-1 px-3 w-auto text-center h-9 hover:scale-110 transform transition-transform ".concat(
                      l
                    ),
                  onClick: n,
                  children: t,
                })
              : (0, r.jsx)("button", {
                  className:
                    "text-2xl font-luckiestGuy text-white bg-black py-2 px-3 w-auto text-center h-10 hover:scale-110 transform transition-transform ".concat(
                      l
                    ),
                  onClick: n,
                  children: t,
                })
          );
        },
        h = document.createElement("img");
      h.src = "/icons/flip.png";
      let u = (e) => {
          let {
              img: t,
              x: n,
              y: i,
              isSelected: s,
              onSelect: d,
              onChange: u,
            } = e,
            [g] = a()(t),
            x = o.createRef(),
            f = o.createRef();
          return (
            o.useEffect(() => {
              if (s && x.current && f.current) {
                var e;
                x.current.nodes([f.current]);
                let t = x.current.scaleX(),
                  n = (x.current.width() * x.current.scaleX()) / 2 - 15,
                  r = x.current.height() * x.current.scaleY();
                t < 0 && (n = -1 * n - 30), r < 0 && (r *= -1);
                let l = {
                    x: n,
                    y: r + 10,
                  },
                  i = new (c().Image)({
                    image: h,
                    x: l.x,
                    y: l.y,
                    width: 30,
                    height: 30,
                  });
                i.on("pointerdown", () => {
                  var e, t;
                  null === (t = f.current) ||
                    void 0 === t ||
                    t.scaleX(
                      -(
                        (null === (e = f.current) || void 0 === e
                          ? void 0
                          : e.scaleX()) * 1
                      )
                    );
                }),
                  i.on("click", () => {
                    var e, t;
                    null === (t = f.current) ||
                      void 0 === t ||
                      t.scaleX(
                        -(
                          (null === (e = f.current) || void 0 === e
                            ? void 0
                            : e.scaleX()) * 1
                        )
                      );
                  }),
                  x.current.add(i),
                  null === (e = x.current.getLayer()) ||
                    void 0 === e ||
                    e.batchDraw(),
                  x.current.on("transform", (e) => {
                    if (!x.current) return;
                    let t = x.current.scaleX(),
                      n = (x.current.width() * x.current.scaleX()) / 2 - 15,
                      r = x.current.height() * x.current.scaleY();
                    t < 0 && (n = -1 * n - 30), r < 0 && (r *= -1);
                    let l = {
                      x: n,
                      y: r + 10,
                    };
                    i.setAttrs({
                      x: l.x,
                      y: l.y,
                    });
                  });
              }
            }, [s]),
            (0, r.jsxs)(o.Fragment, {
              children: [
                (0, r.jsx)(l.Ee, {
                  ref: f,
                  image: g,
                  x: n,
                  y: i,
                  draggable: !0,
                  onClick: d,
                  onTap: d,
                  width: 120,
                  height: 120,
                  onDragEnd: (e) => {
                    console.log("onDragEnd", e);
                  },
                  onTransformEnd: (e) => {
                    console.log("transform end", e);
                  },
                }),
                s &&
                  (0, r.jsx)(l.$T, {
                    ref: x,
                    useSingleNodeRotation: !1,
                  }),
              ],
            })
          );
        },
        g = (e) => {
          let { img: t, width: n, height: i } = e,
            [c] = a()(t);
          return (0, r.jsx)(l.Ee, {
            image: c,
            width: n,
            height: i,
          });
        };
      var x = (e) => {
        let { open: t, onClose: n } = e,
          i = o.useRef(null),
          c = o.createRef(),
          [s, a] = o.useState(""),
          [h, x] = o.useState(!1),
          [f, m] = o.useState(),
          [w, v] = (0, o.useState)([]),
          [p, j] = (0, o.useState)(),
          k = (e) => {
            e.target === e.target.getStage() && m(void 0);
          };
        return (0, r.jsxs)("div", {
          className: "fixed z-50 bg-primary h-screen w-full ".concat(
            t ? "visible scale-100" : "invisible scale-0",
            " transition-all"
          ),
          children: [
            (0, r.jsx)("button", {
              className: "absolute right-4 top-4",
              onClick: n,
              children: (0, r.jsxs)("svg", {
                width: "44",
                height: "44",
                viewBox: "0 0 44 44",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, r.jsx)("circle", {
                    cx: "22",
                    cy: "22",
                    r: "22",
                    fill: "black",
                  }),
                  (0, r.jsx)("path", {
                    d: "M12 12L31.5 31.5",
                    stroke: "#F6F6EE",
                    strokeWidth: "1.5",
                  }),
                  (0, r.jsx)("path", {
                    d: "M31.5 12L12 31.5",
                    stroke: "#F6F6EE",
                    strokeWidth: "1.5",
                  }),
                ],
              }),
            }),
            (0, r.jsxs)("div", {
              className:
                "w-full h-full flex justify-center items-center flex-col gap-4",
              children: [
                (0, r.jsx)("h1", {
                  className: "capitalize font-luckiestGuy text-5xl",
                  children: "Join The cultur",
                }),
                (0, r.jsx)("div", {
                  className: "font-poppins text-xl",
                  children: "Add Mr. E to your PFP!",
                }),
                (0, r.jsx)(d, {
                  onClick: () => {
                    i.current && i.current.click();
                  },
                  children: "Choose File",
                }),
                (0, r.jsx)(l.Hf, {
                  width: 300,
                  height: 300,
                  className: "bg-white border-[3px] border-black",
                  ref: c,
                  onMouseDown: k,
                  onTouchStart: k,
                  children: (0, r.jsxs)(l.mh, {
                    children: [
                      s &&
                        (0, r.jsx)(g, {
                          img: s,
                          width: (null == p ? void 0 : p.width) || 400,
                          height: (null == p ? void 0 : p.height) || 400,
                        }),
                      w.map((e) =>
                        (0, r.jsx)(
                          u,
                          {
                            img: "/icons/guy.png",
                            x: 140,
                            y: 140,
                            onChange: () => {},
                            onSelect: () => {
                              f === e ? m(void 0) : m(e);
                            },
                            isSelected: f === e,
                          },
                          e
                        )
                      ),
                    ],
                  }),
                }),
                (0, r.jsx)("input", {
                  type: "file",
                  name: "",
                  id: "",
                  className: "hidden",
                  ref: i,
                  onChange: (e) => {
                    var t;
                    if (
                      null === (t = e.target.files) || void 0 === t
                        ? void 0
                        : t.length
                    ) {
                      let t = new Image(),
                        n = URL.createObjectURL(e.target.files[0]);
                      (t.onload = function () {
                        if ((a(n), t.width !== t.height)) {
                          console.log("img", t.width, t.height);
                          let e = t.width / t.height;
                          e > 1
                            ? j({
                                width: 300,
                                height: 300 / e,
                              })
                            : j({
                                width: 300 * e,
                                height: 300,
                              });
                        } else
                          j({
                            width: 300,
                            height: 300,
                          });
                      }),
                        (t.src = n);
                    }
                  },
                }),
                h &&
                  (0, r.jsx)("span", {
                    className: "text-[#FF0000] italic font-josefinSans",
                    children: "Please upload a square image",
                  }),
                (0, r.jsxs)("div", {
                  className: "flex gap-4 mt-2 md:flex-row flex-col",
                  children: [
                    (0, r.jsx)(d, {
                      onClick: () => {
                        let e = Math.floor(100 * Math.random());
                        v((t) => [...t, e]),
                          setTimeout(() => {
                            m(e);
                          }, 100);
                      },
                      children: "Add MR. E",
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex gap-2",
                      children: [
                        (0, r.jsx)(d, {
                          onClick: () => {
                            s
                              ? (m(void 0),
                                setTimeout(() => {
                                  if (c.current) {
                                    let e = c.current.clone();
                                    e.scale({
                                      x: 4,
                                      y: 4,
                                    }),
                                      e.width(1200),
                                      e.height(1200),
                                      setTimeout(() => {
                                        var t, n, r;
                                        (t = e.toDataURL()),
                                          (n = "cultur.png"),
                                          ((r =
                                            document.createElement(
                                              "a"
                                            )).download = n),
                                          (r.href = t),
                                          document.body.appendChild(r),
                                          r.click(),
                                          document.body.removeChild(r);
                                      }, 100);
                                  }
                                }, 250))
                              : alert("Please upload an image first");
                          },
                          children: "download image",
                        }),
                        (0, r.jsx)(d, {
                          onClick: () => {
                            v([]), m(void 0), a("");
                          },
                          children: "reset",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
  },
]);
