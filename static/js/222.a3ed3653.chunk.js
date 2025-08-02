"use strict";
(self.webpackChunkjinko_frontend = self.webpackChunkjinko_frontend || []).push([
  [222],
  {
    80222: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return $e;
          },
        });
      var r,
        a = t(1413),
        i = t(45987),
        o = t(93433),
        s = t(74165),
        l = t(15861),
        d = t(29439),
        c = t(30168),
        u = t(72791),
        m = t(17691),
        p = t(57689),
        v = (t(69655), t(42164)),
        g = t(91580),
        h = t(33749),
        f = t(75366),
        x = t(96944),
        w = t(38058),
        y = t(21148),
        b = t(44642),
        k = t(70878),
        C = t(10865),
        j = t(94230),
        Z = t(32488),
        L = t(838),
        S = t(13688),
        E = t(8007),
        _ = t(44695),
        M = t(61134),
        T = t(55705),
        A = t(2116),
        P = t(16863),
        B = t(9724),
        F = t(60208),
        R = t(22855),
        H = t(89155),
        I = t(74678),
        O = t(7503),
        N = t(63748),
        W = t(24602),
        D = t(24828),
        V = t(4306),
        z = t(82451),
        G = t(46295),
        U = t(81562),
        Y = (t(51696), t(93539)),
        K = t(24805),
        q = (t(65801), t(54261)),
        J = (t(38062), t(65370)),
        Q = t(57631),
        X = t(50888),
        $ = t(76610),
        ee = (0, m.ZP)($.Z)(
          r ||
            (r = (0, c.Z)([
              "\nfont-size:0.875rem;\nwidth:20px; \nmargin-bottom:0px;\n:after {\n  content: ' .';\n  animation: dots 1s steps(5, end) infinite;}\n\n@keyframes dots {\n  0%, 20% {\n    color: rgba(0,0,0,0);\n    text-shadow:\n      .25em 0 0 rgba(0,0,0,0),\n      .5em 0 0 rgba(0,0,0,0);}\n  40% {\n    color: var(--yellowColor);\n    text-shadow:\n      .25em 0 0 rgba(0,0,0,0),\n      .5em 0 0 rgba(0,0,0,0);}\n  60% {\n    text-shadow:\n      .25em 0 0 var(--yellowColor),\n      .5em 0 0 rgba(0,0,0,0);}\n  80%, 100% {\n    text-shadow:\n      .25em 0 0 var(--yellowColor),\n      .5em 0 0 var(--yellowColor);}}\n\n",
            ]))
        ),
        ne = t(97625),
        te = t.n(ne),
        re = t(80184),
        ae = function (e) {
          var n = e.name,
            t = e.width,
            r = void 0 === t ? "250px" : t,
            a = e.height,
            i = void 0 === a ? "150px" : a,
            o = (0, u.useCallback)(function (e, n) {
              var t =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                r =
                  !(arguments.length > 3 && void 0 !== arguments[3]) ||
                  arguments[3],
                a = document.querySelector(e),
                i = te().loadAnimation({
                  name: e,
                  container: a,
                  renderer: "svg",
                  loop: t,
                  autoplay: r,
                  path: n,
                  rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                });
              return { lottieInfo: te(), animation: i };
            }, []);
          return (
            (0, u.useEffect)(
              function () {
                var e = o("#".concat(n), "/lotties/loading-icon.json", !0),
                  t = e.lottieInfo,
                  r = e.animation;
                return function () {
                  t.destroy(r.name);
                };
              },
              [o, n]
            ),
            (0, re.jsx)("div", { id: n, style: { height: i, width: r } })
          );
        },
        ie = function (e) {
          var n = e.name,
            t = (0, u.useCallback)(function (e, n) {
              var t =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                r =
                  !(arguments.length > 3 && void 0 !== arguments[3]) ||
                  arguments[3],
                a = document.querySelector(e),
                i = te().loadAnimation({
                  name: e,
                  container: a,
                  renderer: "svg",
                  loop: t,
                  autoplay: r,
                  path: n,
                  rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                });
              return { lottieInfo: te(), animation: i };
            }, []);
          return (
            (0, u.useEffect)(
              function () {
                var e = t("#".concat(n), "/lotties/waveform.json", !0),
                  r = e.lottieInfo,
                  a = e.animation;
                return function () {
                  r.destroy(a.name);
                };
              },
              [t, n]
            ),
            (0, re.jsx)("div", {
              id: n,
              style: { height: "26px", width: "100%" },
            })
          );
        };
      t(25498);
      var oe,
        se,
        le,
        de,
        ce,
        ue,
        me,
        pe,
        ve,
        ge,
        he,
        fe,
        xe,
        we,
        ye,
        be,
        ke,
        Ce,
        je,
        Ze = t(31243),
        Le = ["node"],
        Se = ["node"],
        Ee = ["node"],
        _e = ["node"],
        Me = ["node"],
        Te = m.ZP.div(
          oe ||
            (oe = (0, c.Z)([
              "\nheight: 100%;\n@media only screen and (min-width: 992px) {\n  background-image: url(./images/background-ellipse.png);\n  background-position-x: right;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n",
            ]))
        ),
        Ae = m.ZP.div(
          se ||
            (se = (0, c.Z)([
              '\n  background-image: url("/images/background-avatar.svg");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  align-items:center;\n  flex-wrap:wrap;\n',
            ]))
        ),
        Pe = (0, m.ZP)(h.ZP)(
          le ||
            (le = (0, c.Z)([
              "\nfont-family: var(--fontFamily1);\nbackground-color: transparent;\nborder:1px solid var(--greyColor);\nborder-radius: 0px!important;\n",
            ]))
        ),
        Be = (0, m.ZP)(h.ZP.Button)(
          de ||
            (de = (0, c.Z)([
              "\nfont-family: var(--fontFamily1);\nbackground-color: transparent;\nborder:1px solid var(--greyColor);\nborder-radius:0px;\nmin-width:200px;\n",
            ]))
        ),
        Fe = (0, m.ZP)(h.ZP.Menu)(
          ce ||
            (ce = (0, c.Z)([
              "\nfont-family: var(--fontFamily1);\nbackground-color: transparent;\nborder:1px solid var(--greyColor);\nborder-radius: 0px;\npadding:0px;\noverflow:hidden;\n.is-hovered {\n  background-color:var(--yellowColor);\n  color:var(--blackColor);\n}\n.is-focused {\n  background-color:var(--yellowColor);\n  color:var(--blackColor);\n  border-radius: 0px;\n}\n.is-selectable{\n  border-radius: 0px;\n}\n",
            ]))
        ),
        Re = (0, m.ZP)(h.ZP.Item)(
          ue ||
            (ue = (0, c.Z)(
              [
                "font-family: var(--fontFamily1);\nbackground-color: black;\ncolor:white;\n",
              ],
              [
                "\\\nfont-family: var(--fontFamily1);\nbackground-color: black;\ncolor:white;\n",
              ]
            ))
        ),
        He = (0, m.ZP)(f.ZP)(
          me ||
            (me = (0, c.Z)([
              "\nheight: ",
              ";\nwidth: ",
              ";\nmin-width: fit-content;\nbackground-color: transparent;\npadding: 0px;\nborder-radius: 0px;\n:hover {\n    cursor: pointer;\n    background-color: transparent;\n  }\n:pressed{\n    background-color:transparent;\n  }\n.nextui-drip{\n    background-color:transparent;\n    color:var(--whiteColor);\n  } \n.nextui-button-drip{\n  background-color:var(--blackColor);\n  color:var(--whiteColor);\n} \n.nextui-button--pressed{\n  background-color:transparent;\n  color:var(--whiteColor);\n} \n",
            ])),
          function (e) {
            return e.height;
          },
          function (e) {
            return e.width;
          }
        ),
        Ie = (0, m.ZP)(f.ZP)(
          pe ||
            (pe = (0, c.Z)([
              "\nheight: ",
              ";\nwidth: ",
              ";\npadding: ",
              ";\nborder-radius: ",
              ";\nmin-width: ",
              ";\nbackground-color: ",
              "!important;\n:hover {\n    cursor: pointer;\n  }\n",
            ])),
          function (e) {
            return e.height;
          },
          function (e) {
            return e.width;
          },
          function (e) {
            return e.padding;
          },
          function (e) {
            return e.borderradius;
          },
          function (e) {
            return e.minwidth;
          },
          function (e) {
            return e.bg;
          }
        ),
        Oe = (0, m.ZP)(v.k)(
          ve ||
            (ve = (0, c.Z)([
              "\nalign-items:center;\n@media only screen and (max-width: 991px) {\n  display:flex;\n  // align-items:end;\n}\n// @media only screen and (min-width: 992px) {\n//   display:none;\n// }\n",
            ]))
        ),
        Ne = (0, m.ZP)(v.k)(
          ge ||
            (ge = (0, c.Z)([
              "\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n  display:none;\n}\n",
            ]))
        ),
        We = (0, m.ZP)(v.k)(
          he ||
            (he = (0, c.Z)([
              "\n@media only screen and (min-width: 992px) {\n  height:100%;\n}\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n  position:relative;\n  align-items:self-end;\n}\n",
            ]))
        ),
        De = m.ZP.form(
          fe ||
            (fe = (0, c.Z)([
              "\nheight:100%;\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n  position:absolute;\n  width:100%;\n  padding:0px 0px 50px 0px;\n  height:fit-content;\n  bottom:0px;\n}\n@media only screen and (min-width: 992px) {\n  flex-grow: 1; \n  overflow: hidden; \n  position: relative;\n}\n",
            ]))
        ),
        Ve = (0, m.ZP)(v.k)(
          xe ||
            (xe = (0, c.Z)([
              "\n@media only screen and (min-width: 992px) {\n  height:100%;\n}\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n\n}\n",
            ]))
        ),
        ze = (0, m.ZP)(v.k)(
          we ||
            (we = (0, c.Z)([
              "\njustify-content:center;\npadding:0px 0px 15px 0px;\n@media only screen and (min-width: 992px) {\n  min-height:480px;\n}\n@media only screen and (min-width: 0px) and (max-width: 991px) {\njustify-content:end;\nmax-height: 400px;\n}\n",
            ]))
        ),
        Ge = (0, m.ZP)(w.t)(
          ye ||
            (ye = (0, c.Z)([
              "\nwidth:100%;\nheight:100%;\n// @media only screen and (min-width: 0px) and (max-width: 991px) {\n//   height:40%;\n// }\n",
            ]))
        ),
        Ue = [
          { animName: "neutral", animList: [] },
          { animName: "anger", animList: [] },
          { animName: "disgust", animList: [] },
          { animName: "fear", animList: [] },
          { animName: "joy", animList: [] },
          { animName: "excited", animList: [] },
        ],
        Ye = [
          {
            target: new B.P(0, 1, 0),
            alpha: 1.67,
            beta: 1.3,
            radius: 4.3,
            lowerBetaLimit: -2,
            upperBetaLimit: 5,
            lowerRadiusLimit: 3.4,
            upperRadiusLimit: 4.3,
            fov: 0.5,
          },
          {
            target: new B.P(0, 1.3, 0),
            alpha: 1.67,
            beta: 1.3,
            radius: 2.3,
            lowerBetaLimit: -2,
            upperBetaLimit: 5,
            lowerRadiusLimit: 2.3,
            upperRadiusLimit: 2.3,
            fov: 0.5,
          },
          {
            target: new B.P(0, 1.5, 0),
            alpha: 1.67,
            beta: 1.3,
            radius: 1.35,
            lowerBetaLimit: 1.3,
            upperBetaLimit: 1.3,
            lowerRadiusLimit: 1.35,
            upperRadiusLimit: 1.35,
            fov: 0.01,
          },
        ],
        Ke = function (e) {
          var n = null;
          switch (e) {
            case "A":
            case "X":
            default:
              n = [
                { name: "vAA", value: 0 },
                { name: "vEE", value: 0 },
                { name: "vEH", value: 0 },
                { name: "vER", value: 0 },
                { name: "vF", value: 0 },
                { name: "vIH", value: 0 },
                { name: "vIY", value: 0 },
                { name: "vK", value: 0 },
                { name: "vL", value: 0 },
                { name: "vM", value: 0 },
                { name: "vOW", value: 0 },
                { name: "vS", value: 0 },
                { name: "vSH", value: 0 },
                { name: "vT", value: 0 },
                { name: "vTH", value: 0 },
                { name: "vUW", value: 0 },
                { name: "vW", value: 0 },
              ];
              break;
            case "B":
              n = [
                { name: "vAA", value: 0 },
                { name: "vEE", value: 0 },
                { name: "vEH", value: 0 },
                { name: "vER", value: 0 },
                { name: "vF", value: 0 },
                { name: "vIH", value: 0 },
                { name: "vIY", value: 0 },
                { name: "vK", value: 0 },
                { name: "vL", value: 0 },
                { name: "vM", value: 0 },
                { name: "vOW", value: 0 },
                { name: "vS", value: 0 },
                { name: "vSH", value: 0 },
                { name: "vT", value: 0 },
                { name: "vTH", value: 0 },
                { name: "vUW", value: 0.5 },
                { name: "vW", value: 0 },
              ];
              break;
            case "C":
              n = [
                { name: "vAA", value: 0 },
                { name: "vEE", value: 0 },
                { name: "vEH", value: 0.8 },
                { name: "vER", value: 0 },
                { name: "vF", value: 0 },
                { name: "vIH", value: 0 },
                { name: "vIY", value: 0 },
                { name: "vK", value: 0 },
                { name: "vL", value: 0.8 },
                { name: "vM", value: 0 },
                { name: "vOW", value: 0 },
                { name: "vS", value: 0 },
                { name: "vSH", value: 0 },
                { name: "vT", value: 0 },
                { name: "vTH", value: 0 },
                { name: "vUW", value: 0 },
                { name: "vW", value: 0 },
              ];
              break;
            case "D":
              n = [
                { name: "vAA", value: 0 },
                { name: "vEE", value: 0 },
                { name: "vEH", value: 0.8 },
                { name: "vER", value: 0 },
                { name: "vF", value: 0 },
                { name: "vIH", value: 0 },
                { name: "vIY", value: 0 },
                { name: "vK", value: 0 },
                { name: "vL", value: 0 },
                { name: "vM", value: 0 },
                { name: "vOW", value: 0 },
                { name: "vS", value: 0 },
                { name: "vSH", value: 0 },
                { name: "vT", value: 0 },
                { name: "vTH", value: 0 },
                { name: "vUW", value: 0 },
                { name: "vW", value: 0 },
              ];
              break;
            case "E":
              n = [
                { name: "vAA", value: 0 },
                { name: "vEE", value: 0 },
                { name: "vEH", value: 0.8 },
                { name: "vER", value: 0 },
                { name: "vF", value: 0 },
                { name: "vIH", value: 0 },
                { name: "vIY", value: 0 },
                { name: "vK", value: 0 },
                { name: "vL", value: 0 },
                { name: "vM", value: 0 },
                { name: "vOW", value: 0 },
                { name: "vS", value: 0 },
                { name: "vSH", value: 0 },
                { name: "vT", value: 0 },
                { name: "vTH", value: 0 },
                { name: "vUW", value: 0 },
                { name: "vW", value: 0.4 },
              ];
              break;
            case "F":
              n = [
                { name: "vAA", value: 0 },
                { name: "vEE", value: 0 },
                { name: "vEH", value: 0 },
                { name: "vER", value: 0 },
                { name: "vF", value: 0 },
                { name: "vIH", value: 0 },
                { name: "vIY", value: 0 },
                { name: "vK", value: 0 },
                { name: "vL", value: 0 },
                { name: "vM", value: 0 },
                { name: "vOW", value: 0.2 },
                { name: "vS", value: 0 },
                { name: "vSH", value: 0 },
                { name: "vT", value: 0 },
                { name: "vTH", value: 0 },
                { name: "vUW", value: 0 },
                { name: "vW", value: 0.2 },
              ];
              break;
            case "G":
              n = [
                { name: "vAA", value: 0 },
                { name: "vEE", value: 0 },
                { name: "vEH", value: 0 },
                { name: "vER", value: 0 },
                { name: "vF", value: 0.5 },
                { name: "vIH", value: 0 },
                { name: "vIY", value: 0 },
                { name: "vK", value: 0 },
                { name: "vL", value: 0 },
                { name: "vM", value: 0 },
                { name: "vOW", value: 0 },
                { name: "vS", value: 0 },
                { name: "vSH", value: 0 },
                { name: "vT", value: 0 },
                { name: "vTH", value: 0 },
                { name: "vUW", value: 0 },
                { name: "vW", value: 0 },
              ];
              break;
            case "H":
              n = [
                { name: "vAA", value: 0 },
                { name: "vEE", value: 0 },
                { name: "vEH", value: 0.2 },
                { name: "vER", value: 0 },
                { name: "vF", value: 0 },
                { name: "vIH", value: 0 },
                { name: "vIY", value: 0 },
                { name: "vK", value: 0 },
                { name: "vL", value: 1 },
                { name: "vM", value: 0 },
                { name: "vOW", value: 0 },
                { name: "vS", value: 0 },
                { name: "vSH", value: 0 },
                { name: "vT", value: 0 },
                { name: "vTH", value: 0 },
                { name: "vUW", value: 0 },
                { name: "vW", value: 0 },
              ];
          }
          return n;
        },
        qe = (0, m.ZP)(x.ZP)(
          be ||
            (be = (0, c.Z)([
              "\nborder: 1px solid rgba(255, 240, 240, 0.50);\npadding:0px;\nmax-width:552px;\nbackground:#16181A;\nbutton>svg{\n  color:var(--yellowColor);\n}\n",
            ]))
        ),
        Je = (0, m.ZP)(x.ZP.Header)(
          ke ||
            (ke = (0, c.Z)(["\npadding-top: 15px;\npadding-bottom: 14px;\n"]))
        ),
        Qe =
          ((0, m.ZP)(x.ZP.Body)(
            Ce ||
              (Ce = (0, c.Z)([
                '\n// &:before {\n//   content: url(\'data:image/svg+xml,<svg width="29" height="1" viewBox="0 0 29 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.5" y1="0.5" x2="28.5" y2="0.500002" stroke="%23A5A2BA"/></svg>\');\n//   width: 29px;\n//   height: 29px;\n//   align-self:center;\n',
              ]))
          ),
          (0, m.ZP)(v.k)(
            je ||
              (je = (0, c.Z)([
                "\nbackground: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 245, 0, 0.40) 100%);\nborder: 1px solid rgba(255, 240, 240, 0.50);\nborder-radius: 10px;\nwidth:100%;\nflex-direction:row;\ngap:5px;\npadding:10px;\nalign-items:center;\nflex-wrap: wrap;\njustify-content: space-between;\n",
              ]))
          ),
          function (e) {
            var n = e.show,
              t = e.onClose,
              r = e.handleOptionsLanguageListDropdown,
              a = e.handleOptionsVoiceListDropdown,
              i = e.handleOptionsModelListSelector,
              o = e.handleOptionsApplyButton,
              s = e.optionsLanguageList,
              l = e.currentOptionsLanguage,
              d = e.optionsVoiceList,
              c = e.currentOptionsVoice,
              u = e.optionsModelList,
              m = e.currentOptionsModel,
              p = (0, Y.Z)();
            return (0, re.jsxs)(qe, {
              closeButton: !0,
              blur: !0,
              "aria-labelledby": "modal-title",
              open: n,
              onClose: t,
              children: [
                (0, re.jsx)(Je, {
                  children: (0, re.jsx)(X.tP, {
                    id: "modal-title",
                    size: "clamp(1.7rem,2vw,1.875rem)",
                    color: "var(--yellowColor)",
                    weight: "bold",
                    css: {
                      fontFamily: "var(--fontFamily1)",
                      textTransform: "uppercase",
                      lineHeight: "clamp(1.7rem,2vw,1.875rem)",
                    },
                    children: "".concat(
                      p.formatMessage({
                        id: "choose",
                        defaultMessage: "Choose",
                      })
                    ),
                  }),
                }),
                (0, re.jsx)("svg", {
                  style: { alignSelf: "center" },
                  width: "29",
                  height: "1",
                  viewBox: "0 0 29 1",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: (0, re.jsx)("line", {
                    x1: "0.5",
                    y1: "0.5",
                    x2: "28.5",
                    y2: "0.500002",
                    stroke: "#A5A2BA",
                  }),
                }),
                (0, re.jsxs)(x.ZP.Body, {
                  children: [
                    (0, re.jsxs)(v.k, {
                      gap: "10px",
                      justify: "start",
                      align: "start",
                      direction: "column",
                      wrap: "wrap",
                      style: { width: "100%" },
                      children: [
                        (0, re.jsx)(X.tP, {
                          size: "0.9rem",
                          color: "var(--whiteColor)",
                          weight: "bold",
                          css: {
                            fontFamily: "var(--fontFamily1)",
                            textTransform: "uppercase",
                          },
                          children: "".concat(
                            p.formatMessage({
                              id: "language",
                              defaultMessage: "Language",
                            }),
                            " :"
                          ),
                        }),
                        s.length > 0
                          ? (0, re.jsxs)(Pe, {
                              offset: 0,
                              disableTriggerPressedAnimation: !0,
                              rounded: !1,
                              containerCss: { borderRadius: "0px" },
                              children: [
                                (0, re.jsx)(Be, {
                                  css: {
                                    color: "var(--whiteColor)",
                                    justifyContent: "space-between",
                                  },
                                  children: (0, re.jsx)(X.tP, {
                                    size: "0.9rem",
                                    color: "var(--whiteColor)",
                                    weight: "normal",
                                    transform: "uppercase",
                                    css: { fontFamily: "var(--fontFamily1)" },
                                    children:
                                      null === l || void 0 === l
                                        ? void 0
                                        : l.name,
                                  }),
                                }),
                                (0, re.jsx)(Fe, {
                                  containerCss: { borderRadius: "0px" },
                                  color: "default",
                                  disallowEmptySelection: !0,
                                  selectionMode: "single",
                                  selectedKeys:
                                    null === l || void 0 === l
                                      ? void 0
                                      : l.id.toString(),
                                  onSelectionChange: function (e) {
                                    r(e);
                                  },
                                  children: s.map(function (e) {
                                    return (0,
                                    re.jsx)(Re, { css: { color: "var(--whiteColor)", textTransform: "uppercase" }, children: e.name }, e.id.toString());
                                  }),
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                    null !== m && void 0 !== m && m.default_voice_id
                      ? null
                      : (0, re.jsxs)(v.k, {
                          gap: "10px",
                          justify: "start",
                          align: "start",
                          direction: "column",
                          wrap: "wrap",
                          style: { width: "100%" },
                          children: [
                            (0, re.jsx)(X.tP, {
                              size: "0.9rem",
                              color: "var(--whiteColor)",
                              weight: "bold",
                              css: {
                                fontFamily: "var(--fontFamily1)",
                                textTransform: "uppercase",
                              },
                              children: "".concat(
                                p.formatMessage({
                                  id: "voice",
                                  defaultMessage: "Voice",
                                }),
                                " :"
                              ),
                            }),
                            d.length > 0
                              ? (0, re.jsxs)(Pe, {
                                  offset: 0,
                                  disableTriggerPressedAnimation: !0,
                                  rounded: !1,
                                  containerCss: { borderRadius: "0px" },
                                  children: [
                                    (0, re.jsx)(Be, {
                                      css: {
                                        color: "var(--whiteColor)",
                                        justifyContent: "space-between",
                                      },
                                      children: (0, re.jsx)(X.tP, {
                                        size: "0.9rem",
                                        color: "var(--whiteColor)",
                                        weight: "normal",
                                        transform: "uppercase",
                                        css: {
                                          fontFamily: "var(--fontFamily1)",
                                        },
                                        children:
                                          null === c || void 0 === c
                                            ? void 0
                                            : c.name,
                                      }),
                                    }),
                                    (0, re.jsx)(Fe, {
                                      containerCss: { borderRadius: "0px" },
                                      color: "default",
                                      disallowEmptySelection: !0,
                                      selectionMode: "single",
                                      selectedKeys:
                                        null === c || void 0 === c
                                          ? void 0
                                          : c.id.toString(),
                                      onSelectionChange: function (e) {
                                        a(e);
                                      },
                                      children: d.map(function (e) {
                                        return (0,
                                        re.jsx)(Re, { rounded: !1, css: { color: "var(--whiteColor)", textTransform: "uppercase" }, children: null === e || void 0 === e ? void 0 : e.name }, null === e || void 0 === e ? void 0 : e.id.toString());
                                      }),
                                    }),
                                  ],
                                })
                              : null,
                          ],
                        }),
                    (0, re.jsxs)(v.k, {
                      gap: "10px",
                      justify: "start",
                      align: "start",
                      direction: "column",
                      wrap: "wrap",
                      style: { width: "100%" },
                      children: [
                        (0, re.jsx)(X.tP, {
                          size: "0.9rem",
                          color: "var(--whiteColor)",
                          weight: "bold",
                          css: {
                            fontFamily: "var(--fontFamily1)",
                            textTransform: "uppercase",
                          },
                          children: "".concat(
                            p.formatMessage({
                              id: "personality",
                              defaultMessage: "Personality",
                            }),
                            " :"
                          ),
                        }),
                        u.length > 0
                          ? (0, re.jsx)(v.k, {
                              direction: "column",
                              style: { flex: "none", width: "100%" },
                              className: "hide-scrollbar-keep-function ",
                              children: u.map(function (e) {
                                return (0, re.jsx)(re.Fragment, {
                                  children: (0, re.jsx)(v.k, {
                                    className: "border-radio-button-mobile",
                                    onClick: function (n) {
                                      i(e);
                                    },
                                    children: (0, re.jsxs)(v.k, {
                                      direction: "row",
                                      wrap: "nowrap",
                                      justify: "center",
                                      gap: "5px",
                                      style: {
                                        margin: "5px 30px",
                                        width: "max-content",
                                      },
                                      children: [
                                        (0, re.jsx)("img", {
                                          src:
                                            ""
                                              .concat(
                                                null === e || void 0 === e
                                                  ? void 0
                                                  : e.image_url,
                                                "?v="
                                              )
                                              .concat(Date.now()) ||
                                            "/images/icon-personality.png",
                                          alt:
                                            null === e || void 0 === e
                                              ? void 0
                                              : e.name,
                                          style: {
                                            width: "30px",
                                            height: "30px",
                                            border:
                                              (null === m || void 0 === m
                                                ? void 0
                                                : m.id) === e.id
                                                ? "1px solid var(--yellowColor)"
                                                : "1px solid var(--greyColor)",
                                            borderRadius: "100%",
                                          },
                                          crossOrigin: "",
                                        }),
                                        (0, re.jsx)(X.tP, {
                                          size: "1rem",
                                          color:
                                            (null === m || void 0 === m
                                              ? void 0
                                              : m.id) === e.id
                                              ? "var(--yellowColor)"
                                              : "var(--whiteColor)",
                                          weight: "bold",
                                          transform: "uppercase",
                                          css: {
                                            fontFamily: "var(--fontFamily1)",
                                            margin: "0px",
                                            wordBreak: "keep-all",
                                            whiteSpace: "nowrap",
                                          },
                                          children:
                                            (null === e || void 0 === e
                                              ? void 0
                                              : e.name) || "",
                                        }),
                                      ],
                                    }),
                                  }),
                                });
                              }),
                            })
                          : null,
                      ],
                    }),
                    (0, re.jsx)(Ie, {
                      padding: "0px",
                      borderradius: "20px",
                      width: "100%",
                      minwidth: "100%",
                      height: "42px",
                      bg: "var(--yellowColor)",
                      onPress: function () {
                        o();
                      },
                      children: (0, re.jsx)(X.tP, {
                        size: "clamp(0.8rem,2vw,0.9rem)",
                        color: "var(--blackColor)",
                        weight: "bold",
                        transform: "uppercase",
                        css: { fontFamily: "var(--fontFamily1)" },
                        children: "".concat(
                          p.formatMessage({
                            id: "apply",
                            defaultMessage: "Apply",
                          })
                        ),
                      }),
                    }),
                  ],
                }),
              ],
            });
          }),
        Xe = function (e) {
          var n = e.modelIsLoading,
            t = e.handleLanguageListDropdown,
            r = e.handleVoiceListDropdown,
            a = e.handleModelListSelector,
            i = e.languageList,
            o = e.voiceList,
            s = e.modelList,
            l = e.currentLanguage,
            d = e.currentVoice,
            c = e.currentModel,
            u = (0, Y.Z)();
          return (0, re.jsxs)(re.Fragment, {
            children: [
              (0, re.jsxs)(v.k, {
                gap: "10px",
                justify: "start",
                align: "start",
                direction: "row",
                wrap: "wrap",
                style: { width: "100%" },
                children: [
                  (0, re.jsx)(v.k, {
                    justify: "start",
                    align: "start",
                    direction: "row",
                    wrap: "wrap",
                    style: { width: "150px" },
                    children: (0, re.jsx)(X.tP, {
                      size: "1rem",
                      color: "var(--yellowColor)",
                      weight: "bold",
                      css: {
                        fontFamily: "var(--fontFamily1)",
                        textTransform: "uppercase",
                        margin: "0px",
                      },
                      children: "".concat(
                        u.formatMessage({
                          id: "language",
                          defaultMessage: "Language",
                        }),
                        ":"
                      ),
                    }),
                  }),
                  (0, re.jsx)(v.k, {
                    direction: "row",
                    wrap: "wrap",
                    style: { flex: 3 },
                    children:
                      i.length > 0
                        ? (0, re.jsxs)(Pe, {
                            offset: 0,
                            disableTriggerPressedAnimation: !0,
                            rounded: !1,
                            containerCss: { borderRadius: "0px" },
                            isDisabled: n,
                            children: [
                              (0, re.jsx)(Be, {
                                css: {
                                  color: "var(--whiteColor)",
                                  justifyContent: "space-between",
                                  fontSize: "1rem",
                                },
                                children: (0, re.jsx)(X.tP, {
                                  size: "1rem",
                                  color: "var(--whiteColor)",
                                  weight: "bold",
                                  transform: "uppercase",
                                  css: { fontFamily: "var(--fontFamily1)" },
                                  children: l.name,
                                }),
                              }),
                              (0, re.jsx)(Fe, {
                                containerCss: { borderRadius: "0px" },
                                color: "default",
                                disallowEmptySelection: !0,
                                selectionMode: "single",
                                selectedKeys: l.id.toString(),
                                onSelectionChange: function (e) {
                                  t(e);
                                },
                                children: i.map(function (e) {
                                  return (0,
                                  re.jsx)(Re, { css: { color: "var(--whiteColor)", fontWeight: "bold", fontFamily: "var(--fontFamily1)", fontSize: "1rem", textTransform: "uppercase" }, children: e.name }, e.id.toString());
                                }),
                              }),
                            ],
                          })
                        : null,
                  }),
                ],
              }),
              null !== c && void 0 !== c && c.default_voice_id
                ? null
                : (0, re.jsxs)(v.k, {
                    gap: "10px",
                    justify: "start",
                    align: "center",
                    direction: "row",
                    wrap: "wrap",
                    style: { width: "100%" },
                    children: [
                      (0, re.jsx)(v.k, {
                        justify: "start",
                        align: "start",
                        direction: "row",
                        wrap: "wrap",
                        style: { width: "150px", height: "fit-content" },
                        children: (0, re.jsx)(X.tP, {
                          size: "1rem",
                          color: "var(--yellowColor)",
                          weight: "bold",
                          css: {
                            fontFamily: "var(--fontFamily1)",
                            textTransform: "uppercase",
                            margin: "0px",
                            width: "fit-content",
                            height: "fit-content",
                          },
                          children: "".concat(
                            u.formatMessage({
                              id: "voice",
                              defaultMessage: "Voice",
                            }),
                            ":"
                          ),
                        }),
                      }),
                      (0, re.jsx)(v.k, {
                        direction: "row",
                        wrap: "wrap",
                        style: { flex: 3 },
                        children:
                          o.length > 0
                            ? (0, re.jsxs)(Pe, {
                                offset: 0,
                                disableTriggerPressedAnimation: !0,
                                rounded: !1,
                                containerCss: { borderRadius: "0px" },
                                isDisabled: n,
                                children: [
                                  (0, re.jsx)(Be, {
                                    css: {
                                      color: "var(--whiteColor)",
                                      justifyContent: "space-between",
                                      fontSize: "1rem",
                                    },
                                    children: (0, re.jsx)(X.tP, {
                                      size: "1rem",
                                      color: "var(--whiteColor)",
                                      weight: "bold",
                                      transform: "uppercase",
                                      css: { fontFamily: "var(--fontFamily1)" },
                                      children:
                                        null === d || void 0 === d
                                          ? void 0
                                          : d.name,
                                    }),
                                  }),
                                  (0, re.jsx)(Fe, {
                                    containerCss: { borderRadius: "0px" },
                                    color: "default",
                                    disallowEmptySelection: !0,
                                    selectionMode: "single",
                                    selectedKeys:
                                      null === d || void 0 === d
                                        ? void 0
                                        : d.id.toString(),
                                    onSelectionChange: function (e) {
                                      r(e);
                                    },
                                    children: o.map(function (e) {
                                      return (0,
                                      re.jsx)(Re, { rounded: !1, css: { color: "var(--whiteColor)", textTransform: "uppercase" }, children: null === e || void 0 === e ? void 0 : e.name }, null === e || void 0 === e ? void 0 : e.id.toString());
                                    }),
                                  }),
                                ],
                              })
                            : null,
                      }),
                    ],
                  }),
              (0, re.jsxs)(v.k, {
                gap: "10px",
                justify: "start",
                align: "center",
                direction: "row",
                style: { width: "100%" },
                children: [
                  (0, re.jsx)(v.k, {
                    justify: "start",
                    align: "start",
                    direction: "row",
                    wrap: "wrap",
                    style: { width: "150px", flex: "none" },
                    children: (0, re.jsx)(X.tP, {
                      size: "1rem",
                      color: "var(--yellowColor)",
                      weight: "bold",
                      css: {
                        fontFamily: "var(--fontFamily1)",
                        textTransform: "uppercase",
                        margin: "0px",
                      },
                      children: "".concat(
                        u.formatMessage({
                          id: "personality",
                          defaultMessage: "Personality",
                        }),
                        ":"
                      ),
                    }),
                  }),
                  (0, re.jsx)("div", {
                    style: {
                      overflow: "hidden",
                      pointerEvents: n ? "none" : "all",
                      width: "100%",
                    },
                    children:
                      s.length > 0
                        ? (0, re.jsx)(v.k, {
                            style: { width: "100%" },
                            className: "hide-scrollbar-keep-function",
                            id: "personality-bar",
                            children: s.map(function (e) {
                              return (0, re.jsx)(
                                v.k,
                                {
                                  className: "border-radio-button-desktop",
                                  onClick: function (n) {
                                    a(e);
                                  },
                                  children: (0, re.jsxs)(v.k, {
                                    direction: "row",
                                    wrap: "nowrap",
                                    justify: "center",
                                    gap: "5px",
                                    style: {
                                      margin: "5px 30px",
                                      width: "max-content",
                                    },
                                    children: [
                                      (0, re.jsx)("img", {
                                        src:
                                          ""
                                            .concat(
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.image_url,
                                              "?v="
                                            )
                                            .concat(Date.now()) ||
                                          "/images/icon-personality.png",
                                        alt:
                                          null === e || void 0 === e
                                            ? void 0
                                            : e.name,
                                        style: {
                                          width: "30px",
                                          height: "30px",
                                          border:
                                            (null === c || void 0 === c
                                              ? void 0
                                              : c.id) === e.id
                                              ? "1px solid var(--yellowColor)"
                                              : "1px solid var(--greyColor)",
                                          borderRadius: "100%",
                                        },
                                        crossOrigin: "",
                                      }),
                                      (0, re.jsx)(X.tP, {
                                        size: "1rem",
                                        color:
                                          (null === c || void 0 === c
                                            ? void 0
                                            : c.id) === e.id
                                            ? "var(--yellowColor)"
                                            : "var(--whiteColor)",
                                        weight: "bold",
                                        transform: "uppercase",
                                        css: {
                                          fontFamily: "var(--fontFamily1)",
                                          margin: "0px",
                                          wordBreak: "keep-all",
                                          whiteSpace: "nowrap",
                                        },
                                        children:
                                          (null === e || void 0 === e
                                            ? void 0
                                            : e.name) || "",
                                      }),
                                    ],
                                  }),
                                },
                                (null === e || void 0 === e
                                  ? void 0
                                  : e.name) || null
                              );
                            }),
                          })
                        : null,
                  }),
                ],
              }),
            ],
          });
        },
        $e = function () {
          var e = (0, Y.Z)(),
            n = (0, p.s0)(),
            t = (0, J.q)().content,
            r = (0, p.UO)().genderParam,
            c = (0, K.useMediaQuery)({ query: "(max-width: 992px)" }),
            m = (0, u.createRef)(),
            h = (0, u.useRef)(null),
            f = (0, u.useRef)(null),
            x = (0, u.useRef)(null),
            w = (0, u.useRef)(null),
            $ = (0, u.useRef)(null),
            ne = E.Ry().shape({ message: E.Z_() }),
            te = { resolver: (0, _.X)(ne) },
            oe = (0, M.cI)(te),
            se =
              (oe.register,
              oe.handleSubmit,
              oe.formState.errors,
              (0, Q.rM)().onGetAuthMode),
            le = {
              onGetLanguages: (0, u.useCallback)(
                (0, l.Z)(
                  (0, s.Z)().mark(function e() {
                    var n, t, r, a, i, o, l;
                    return (0, s.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                Ze.Z.get(
                                  "".concat(
                                    "https://api.jinkoai.com/",
                                    "chat/languages"
                                  )
                                )
                              );
                            case 3:
                              return (n = e.sent), (e.next = 6), n;
                            case 6:
                              if (
                                ((t = e.sent),
                                (r = t.data),
                                (a = t.status),
                                (i = t.statusText),
                                200 === a)
                              ) {
                                e.next = 12;
                                break;
                              }
                              throw new Error(i);
                            case 12:
                              if (!r.error) {
                                e.next = 14;
                                break;
                              }
                              throw new Error(r.msg);
                            case 14:
                              if (0 !== r.data.length) {
                                e.next = 16;
                                break;
                              }
                              throw new Error("No language available");
                            case 16:
                              return e.abrupt("return", {
                                error: !1,
                                data: r.data,
                                message: "",
                              });
                            case 19:
                              return (
                                (e.prev = 19),
                                (e.t0 = e.catch(0)),
                                (o = e.t0.message),
                                (l = void 0 === o ? "" : o),
                                e.abrupt("return", {
                                  error: !0,
                                  data: "",
                                  message: l,
                                })
                              );
                            case 23:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 19]]
                    );
                  })
                ),
                []
              ),
            }.onGetLanguages,
            de = (function () {
              var e = (0, u.useCallback)(
                (function () {
                  var e = (0, l.Z)(
                    (0, s.Z)().mark(function e(n, t) {
                      var r, a, i, o, l, d, c;
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  Ze.Z.get(
                                    ""
                                      .concat(
                                        "https://api.jinkoai.com/",
                                        "chat/voices?page=1&limit=20&language="
                                      )
                                      .concat(n, "&gender=")
                                      .concat(t)
                                  )
                                );
                              case 3:
                                return (r = e.sent), (e.next = 6), r;
                              case 6:
                                if (
                                  ((a = e.sent),
                                  (i = a.data),
                                  (o = a.status),
                                  (l = a.statusText),
                                  200 === o)
                                ) {
                                  e.next = 12;
                                  break;
                                }
                                throw new Error(l);
                              case 12:
                                if (!i.error) {
                                  e.next = 14;
                                  break;
                                }
                                throw new Error(i.msg);
                              case 14:
                                if (0 !== i.data.models.length) {
                                  e.next = 16;
                                  break;
                                }
                                throw new Error("No voice available");
                              case 16:
                                return e.abrupt("return", {
                                  error: !1,
                                  data: i.data.models,
                                  message: "",
                                });
                              case 19:
                                return (
                                  (e.prev = 19),
                                  (e.t0 = e.catch(0)),
                                  (d = e.t0.message),
                                  (c = void 0 === d ? "" : d),
                                  e.abrupt("return", {
                                    error: !0,
                                    data: "",
                                    message: c,
                                  })
                                );
                              case 23:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 19]]
                      );
                    })
                  );
                  return function (n, t) {
                    return e.apply(this, arguments);
                  };
                })(),
                []
              );
              return { onGetVoice: e };
            })(),
            ce = de.onGetVoice,
            ue = (function () {
              var e = (0, J.q)().tokenValidity,
                n = (0, u.useCallback)(
                  (function () {
                    var n = (0, l.Z)(
                      (0, s.Z)().mark(function n(t, r) {
                        var a, i, o, l, d, c, u, m;
                        return (0, s.Z)().wrap(
                          function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  return (
                                    (n.prev = 0),
                                    (n.next = 3),
                                    Ze.Z.get(
                                      ""
                                        .concat(
                                          "https://api.jinkoai.com/",
                                          "chat/models?page=1&limit=20&language="
                                        )
                                        .concat(t, "&gender=")
                                        .concat(r)
                                    )
                                  );
                                case 3:
                                  return (a = n.sent), (n.next = 6), a;
                                case 6:
                                  if (
                                    ((i = n.sent),
                                    (o = i.data),
                                    (l = i.status),
                                    (d = i.statusText),
                                    200 === l)
                                  ) {
                                    n.next = 12;
                                    break;
                                  }
                                  throw new Error(d);
                                case 12:
                                  if (!o.error) {
                                    n.next = 14;
                                    break;
                                  }
                                  throw new Error(o.msg);
                                case 14:
                                  if (0 !== o.data.models.length) {
                                    n.next = 16;
                                    break;
                                  }
                                  throw new Error("No personality available");
                                case 16:
                                  return (
                                    (c = e
                                      ? o.data.models
                                      : o.data.models.filter(function (e) {
                                          return !1 === e.whitelist_only;
                                        })),
                                    n.abrupt("return", {
                                      error: !1,
                                      data: c,
                                      message: "",
                                    })
                                  );
                                case 20:
                                  return (
                                    (n.prev = 20),
                                    (n.t0 = n.catch(0)),
                                    (u = n.t0.message),
                                    (m = void 0 === u ? "" : u),
                                    n.abrupt("return", {
                                      error: !0,
                                      data: "",
                                      message: m,
                                    })
                                  );
                                case 24:
                                case "end":
                                  return n.stop();
                              }
                          },
                          n,
                          null,
                          [[0, 20]]
                        );
                      })
                    );
                    return function (e, t) {
                      return n.apply(this, arguments);
                    };
                  })(),
                  [e]
                );
              return { onGetModel: n };
            })(),
            me = ue.onGetModel,
            pe = (function () {
              var e = (0, u.useCallback)(
                (function () {
                  var e = (0, l.Z)(
                    (0, s.Z)().mark(function e(n, t, r, a) {
                      var i, o, l, d, c, u, m, p;
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (i = {
                                    headers: { accept: "application/json" },
                                  }),
                                  a && (i.headers.Authorization = a),
                                  (e.next = 5),
                                  Ze.Z.post(
                                    "".concat(
                                      "https://api.jinkoai.com/",
                                      "chat/complete"
                                    ),
                                    { message: n, model: t, voice: r },
                                    i
                                  )
                                );
                              case 5:
                                return (o = e.sent), (e.next = 8), o;
                              case 8:
                                if (
                                  ((l = e.sent),
                                  (d = l.data),
                                  (c = l.status),
                                  (u = l.statusText),
                                  200 === c)
                                ) {
                                  e.next = 14;
                                  break;
                                }
                                throw new Error(u);
                              case 14:
                                if (!d.error) {
                                  e.next = 16;
                                  break;
                                }
                                throw new Error(d.msg);
                              case 16:
                                return e.abrupt("return", {
                                  error: !1,
                                  data: d,
                                  message: "",
                                });
                              case 19:
                                return (
                                  (e.prev = 19),
                                  (e.t0 = e.catch(0)),
                                  (m = e.t0.message),
                                  (p = void 0 === m ? "" : m),
                                  e.abrupt("return", {
                                    error: !0,
                                    data: "",
                                    message: p,
                                  })
                                );
                              case 23:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 19]]
                      );
                    })
                  );
                  return function (n, t, r, a) {
                    return e.apply(this, arguments);
                  };
                })(),
                []
              );
              return { onGetCompletions: e };
            })(),
            ve = pe.onGetCompletions,
            ge = (function () {
              var e = (0, u.useCallback)(
                (function () {
                  var e = (0, l.Z)(
                    (0, s.Z)().mark(function e(n) {
                      var t, r, a, i, o, l, d, c;
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (t = {
                                    headers: { accept: "application/json" },
                                  }),
                                  n && (t.headers.Authorization = n),
                                  (e.next = 5),
                                  Ze.Z.get(
                                    "".concat(
                                      "https://api.jinkoai.com/",
                                      "auth/tasks"
                                    ),
                                    t
                                  )
                                );
                              case 5:
                                return (r = e.sent), (e.next = 8), r;
                              case 8:
                                if (
                                  ((a = e.sent),
                                  (i = a.data),
                                  (o = a.status),
                                  (l = a.statusText),
                                  200 === o)
                                ) {
                                  e.next = 14;
                                  break;
                                }
                                throw new Error(l);
                              case 14:
                                if (!i.error) {
                                  e.next = 16;
                                  break;
                                }
                                throw new Error(i.msg);
                              case 16:
                                return e.abrupt("return", {
                                  error: !1,
                                  data: i.data,
                                  message: "",
                                });
                              case 19:
                                return (
                                  (e.prev = 19),
                                  (e.t0 = e.catch(0)),
                                  (d = e.t0.message),
                                  (c = void 0 === d ? "" : d),
                                  e.abrupt("return", {
                                    error: !0,
                                    data: "",
                                    message: c,
                                  })
                                );
                              case 23:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 19]]
                      );
                    })
                  );
                  return function (n) {
                    return e.apply(this, arguments);
                  };
                })(),
                []
              );
              return { onGetTask: e };
            })(),
            he = (ge.onGetTask, (0, u.useRef)(null)),
            fe = (0, u.useRef)(null),
            xe = (0, u.useRef)(null),
            we = (0, u.useState)(!1),
            ye = (0, d.Z)(we, 2),
            be = ye[0],
            ke = ye[1],
            Ce = (0, u.useState)(!0),
            je = (0, d.Z)(Ce, 2),
            Pe = je[0],
            Be = je[1],
            Fe = (0, u.useRef)([]),
            Re = (0, u.useRef)(null),
            qe = (0, u.useRef)([]),
            Je = (0, u.useState)([]),
            $e = (0, d.Z)(Je, 2),
            en = $e[0],
            nn = $e[1],
            tn = (0, u.useState)(!1),
            rn = (0, d.Z)(tn, 2),
            an = rn[0],
            on = rn[1],
            sn = (0, u.useRef)(0),
            ln = (0, u.useState)(Ye[0]),
            dn = (0, d.Z)(ln, 2),
            cn = dn[0],
            un = dn[1],
            mn = (0, u.useState)(!0),
            pn = (0, d.Z)(mn, 2),
            vn = pn[0],
            gn = pn[1],
            hn = (0, u.useState)(),
            fn = (0, d.Z)(hn, 2),
            xn = fn[0],
            wn = fn[1],
            yn = (0, u.useState)(),
            bn = (0, d.Z)(yn, 2),
            kn = bn[0],
            Cn = bn[1],
            jn = (0, u.useState)(),
            Zn = (0, d.Z)(jn, 2),
            Ln = Zn[0],
            Sn = Zn[1],
            En = (0, u.useState)([]),
            _n = (0, d.Z)(En, 2),
            Mn = _n[0],
            Tn = _n[1],
            An = (0, u.useState)([]),
            Pn = (0, d.Z)(An, 2),
            Bn = Pn[0],
            Fn = Pn[1],
            Rn = (0, u.useState)([]),
            Hn = (0, d.Z)(Rn, 2),
            In = Hn[0],
            On = Hn[1],
            Nn = (0, u.useState)(),
            Wn = (0, d.Z)(Nn, 2),
            Dn = Wn[0],
            Vn = Wn[1],
            zn = (0, u.useState)(),
            Gn = (0, d.Z)(zn, 2),
            Un = Gn[0],
            Yn = Gn[1],
            Kn = (0, u.useState)(),
            qn = (0, d.Z)(Kn, 2),
            Jn = qn[0],
            Qn = qn[1],
            Xn = (0, u.useState)([]),
            $n = (0, d.Z)(Xn, 2),
            et = $n[0],
            nt = $n[1],
            tt = (0, u.useState)([]),
            rt = (0, d.Z)(tt, 2),
            at = rt[0],
            it = rt[1],
            ot = (0, u.useState)([]),
            st = (0, d.Z)(ot, 2),
            lt = st[0],
            dt = st[1],
            ct = (0, u.useState)(!1),
            ut = (0, d.Z)(ct, 2),
            mt = ut[0],
            pt = ut[1],
            vt = (0, u.useState)(!1),
            gt = (0, d.Z)(vt, 2),
            ht = (gt[0], gt[1]),
            ft = (0, u.useState)(!1),
            xt = (0, d.Z)(ft, 2),
            wt = xt[0],
            yt = (xt[1], (0, u.useState)([])),
            bt = (0, d.Z)(yt, 2),
            kt = bt[0],
            Ct =
              (bt[1],
              (0, u.useState)({
                max_exp: 0,
                exp: 0,
                is_max_exp: !1,
                is_share: !1,
                is_airdrop: !1,
              })),
            jt = (0, d.Z)(Ct, 2),
            Zt = jt[0],
            Lt = jt[1],
            St = (0, u.useState)(!0),
            Et = (0, d.Z)(St, 2),
            _t = Et[0],
            Mt = Et[1],
            Tt = (0, u.useState)(!1),
            At = (0, d.Z)(Tt, 2),
            Pt = At[0],
            Bt =
              (At[1],
              (0, T.TA)({
                initialValues: { message: "" },
                validationSchema: ne,
                onSubmit: (function () {
                  var e = (0, l.Z)(
                    (0, s.Z)().mark(function e(n, r) {
                      var a, i, l, d, u, m, p, v, g, f, x, w;
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((a = r.resetForm), (e.prev = 1), n.message)
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                return e.abrupt("return");
                              case 4:
                                if (
                                  null !== kn &&
                                  void 0 !== kn &&
                                  kn.id &&
                                  null !== Ln &&
                                  void 0 !== Ln &&
                                  Ln.id
                                ) {
                                  e.next = 6;
                                  break;
                                }
                                return e.abrupt("return");
                              case 6:
                                return (
                                  nn(function (e) {
                                    return [].concat((0, o.Z)(e), [
                                      {
                                        content: "".concat(n.message),
                                        role: "user",
                                        date: new Date(),
                                        id: (0, q.Z)(),
                                      },
                                    ]);
                                  }),
                                  a(),
                                  (e.prev = 8),
                                  on(!0),
                                  (e.next = 12),
                                  ve(
                                    [].concat((0, o.Z)(qe.current), [
                                      { content: n.message, role: "user" },
                                    ]),
                                    Ln.id,
                                    _t ? 0 : kn.id,
                                    (vn || (!vn && Zt.is_airdrop)) &&
                                      t &&
                                      t.token
                                      ? t.token
                                      : null
                                  )
                                );
                              case 12:
                                if (!(i = e.sent).error) {
                                  e.next = 15;
                                  break;
                                }
                                throw new Error(i.message);
                              case 15:
                                if (
                                  ((qe.current = [].concat(
                                    (0, o.Z)(qe.current),
                                    [{ content: n.message, role: "user" }]
                                  )),
                                  (qe.current = [].concat(
                                    (0, o.Z)(qe.current),
                                    [
                                      {
                                        content:
                                          i.data.data.response.raw_message
                                            .content,
                                        role: "assistant",
                                      },
                                    ]
                                  )),
                                  nn(function (e) {
                                    return [].concat((0, o.Z)(e), [
                                      {
                                        content:
                                          i.data.data.response.message.content,
                                        role: "assistant",
                                        emotion: i.data.data.response.emotion,
                                        pose: i.data.data.response.pose,
                                        date: new Date(),
                                        id: (0, q.Z)(),
                                      },
                                    ]);
                                  }),
                                  i.data.data.response.emotion &&
                                    "neutral" !==
                                      i.data.data.response.emotion &&
                                    (l = h.current.getAnimationGroupByName(
                                      i.data.data.response.emotion
                                    )) &&
                                    (h.current
                                      .getAnimationGroupByName("neutral")
                                      .stop(),
                                    l.start(!1, 1, l.from, l.to, !0)),
                                  !i.data.data.audio)
                                ) {
                                  e.next = 37;
                                  break;
                                }
                                60,
                                  (m = {}),
                                  (p = new D.O("mouthViseme", h.current)),
                                  (v =
                                    i.data.data.mouthShape.mouthCues).forEach(
                                    function (e, n) {
                                      var t = 60 * e.start;
                                      Ke(e.value).forEach(function (e) {
                                        void 0 === m[e.name] &&
                                          (m[e.name] = []),
                                          m[e.name].push({
                                            frame: t,
                                            value: e.value,
                                          }),
                                          v.length - 1 === n &&
                                            Ke("A").forEach(function (e) {
                                              m[e.name].push({
                                                frame: t,
                                                value: e.value,
                                              });
                                            });
                                      });
                                    }
                                  ),
                                  (g =
                                    null ===
                                      (d = $.current.get(
                                        null === (u = Ln.model) || void 0 === u
                                          ? void 0
                                          : u.name
                                      )) || void 0 === d
                                      ? void 0
                                      : d.meshList),
                                  (f = (0, s.Z)().mark(function e(n) {
                                    return (0, s.Z)().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            m &&
                                              Object.keys(m).map(function (
                                                e,
                                                t
                                              ) {
                                                var r = new R.f(
                                                  e,
                                                  "influence",
                                                  60,
                                                  R.f.ANIMATIONTYPE_FLOAT
                                                );
                                                r.setKeys(m[e]);
                                                var a = g[
                                                  n
                                                ].morphTargetManager.getTarget(
                                                  Fe.current[e]
                                                );
                                                return p.addTargetedAnimation(
                                                  r,
                                                  a
                                                );
                                              });
                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })),
                                  (x = 0);
                              case 28:
                                if (!(x < g.length)) {
                                  e.next = 33;
                                  break;
                                }
                                return e.delegateYield(f(x), "t0", 30);
                              case 30:
                                x++, (e.next = 28);
                                break;
                              case 33:
                                p.onAnimationEndObservable.add(function () {
                                  p.dispose();
                                }),
                                  p.start(!1, 1, p.from, p.to, !0),
                                  (w = (0, V.HQ)(
                                    i.data.data.audio.split(",")[1]
                                  )),
                                  new z.$u(
                                    "mouthVisemeSound",
                                    w,
                                    h.current,
                                    null,
                                    { loop: !1, autoplay: !0, volume: 1 }
                                  );
                              case 37:
                                e.next = 43;
                                break;
                              case 39:
                                (e.prev = 39),
                                  (e.t1 = e.catch(8)),
                                  console.error(
                                    "Error submitting content:",
                                    e.t1
                                  ),
                                  nn(function (e) {
                                    return [].concat((0, o.Z)(e), [
                                      {
                                        content: "\ud83d\ude10",
                                        role: "assistant",
                                        date: new Date(),
                                        id: (0, q.Z)(),
                                      },
                                    ]);
                                  });
                              case 43:
                                return (
                                  (e.prev = 43),
                                  c || Re.current.focus(),
                                  on(!1),
                                  e.finish(43)
                                );
                              case 47:
                                e.next = 52;
                                break;
                              case 49:
                                (e.prev = 49),
                                  (e.t2 = e.catch(1)),
                                  console.error(e.t2);
                              case 52:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [
                          [1, 49],
                          [8, 39, 43, 47],
                        ]
                      );
                    })
                  );
                  return function (n, t) {
                    return e.apply(this, arguments);
                  };
                })(),
              })),
            Ft = (0, u.useCallback)(
              (0, l.Z)(
                (0, s.Z)().mark(function e() {
                  var n, t;
                  return (0, s.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), se();
                          case 3:
                            if (!(n = e.sent).error) {
                              e.next = 6;
                              break;
                            }
                            throw new Error(n.message);
                          case 6:
                            return (
                              (t = n.data.shouldAuthenticate),
                              gn(t),
                              e.abrupt("return", t)
                            );
                          case 11:
                            return (
                              (e.prev = 11),
                              (e.t0 = e.catch(0)),
                              gn(!0),
                              e.abrupt("return", !0)
                            );
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 11]]
                  );
                })
              ),
              [se]
            );
          (0, u.useEffect)(
            function () {
              !(function () {
                var e;
                null === f ||
                  void 0 === f ||
                  null === (e = f.current) ||
                  void 0 === e ||
                  e.scrollToBottom();
              })();
            },
            [en]
          ),
            (0, u.useEffect)(
              function () {
                if (be && h.current) {
                  var e,
                    n = new H.Sp(h.current);
                  if (
                    ((n.useDefaultLoadingScreen = !1),
                    (n.autoHideLoadingUI = !1),
                    h.current && Ln)
                  )
                    if (
                      !h.current.getMeshByName(
                        null === (e = Ln.model) || void 0 === e
                          ? void 0
                          : e.name
                      )
                    )
                      try {
                        var t;
                        if (
                          $.current.has(
                            null === (t = Ln.model) || void 0 === t
                              ? void 0
                              : t.name
                          )
                        ) {
                          var a, i, o, d;
                          null ===
                            (a = $.current.get(
                              null === (i = Ln.model) || void 0 === i
                                ? void 0
                                : i.name
                            )) ||
                            void 0 === a ||
                            a.assetContainer.addAllToScene(),
                            null === (o = $.current.get(x.current)) ||
                              void 0 === o ||
                              o.assetContainer.removeAllFromScene(),
                            (x.current =
                              null === (d = Ln.model) || void 0 === d
                                ? void 0
                                : d.name);
                          var c = h.current.getAnimationGroupByName("neutral");
                          c && c.play(!0);
                          var u = h.current.getAnimationGroupByName("eyeBlink");
                          u && u.play(!0);
                        } else {
                          var m, p, v;
                          if (
                            (h.current.getEngine().displayLoadingUI(),
                            x.current)
                          )
                            null === (v = $.current.get(x.current)) ||
                              void 0 === v ||
                              v.assetContainer.removeAllFromScene();
                          var g =
                              null !== (m = Ln.model) &&
                              void 0 !== m &&
                              m.file_url
                                ? Ln.model.file_url.replace(/[^\/]+$/g, "")
                                : "../glb/characters/",
                            f = "".concat(
                              (null === (p = Ln.model) || void 0 === p
                                ? void 0
                                : p.file_name) ||
                                ("female" === r
                                  ? "Jinko_Female_Base"
                                  : "Jinko_Male_Base"),
                              ".glb"
                            );
                          (n.addMeshTask("Model", "", g, f).onSuccess =
                            function (e) {
                              var n,
                                t,
                                a,
                                i = e;
                              h.current.stopAllAnimations(),
                                (i.loadedMeshes[0].name =
                                  null === (n = Ln.model) || void 0 === n
                                    ? void 0
                                    : n.name),
                                (Fe.current = []);
                              var o = [],
                                s = h.current.getTransformNodeByName("Jinko"),
                                l = s.getChildTransformNodes(!0),
                                d = l[0].name;
                              l[0].dispose(),
                                h.current
                                  .getTransformNodeByName(d)
                                  .getChildMeshes(!0)
                                  .forEach(function (e) {
                                    (e.parent = s),
                                      (e.isPickable = !1),
                                      (e.doNotSyncBoundingInfo = !0),
                                      o.push(e);
                                  }),
                                $.current.set(
                                  null === (t = Ln.model) || void 0 === t
                                    ? void 0
                                    : t.name,
                                  {
                                    assetContainer: new G.TJ(h.current),
                                    meshList: o,
                                  }
                                ),
                                (x.current =
                                  null === (a = Ln.model) || void 0 === a
                                    ? void 0
                                    : a.name);
                              for (
                                var c = 0;
                                c < o[0].morphTargetManager.numTargets;
                                c++
                              )
                                Fe.current[
                                  o[0].morphTargetManager.getTarget(c).name
                                ] = c;
                              if (o.length > 0) {
                                for (
                                  var u = new D.O("eyeBlink", h.current),
                                    m = [
                                      { frame: 0, value: 0 },
                                      { frame: 294, value: 0 },
                                      { frame: 300, value: 1 },
                                      { frame: 330, value: 0 },
                                    ],
                                    p =
                                      "female" === r
                                        ? "Eye Blink"
                                        : "Blink eye",
                                    v = 0;
                                  v < o.length;
                                  v++
                                ) {
                                  var g = new R.f(
                                    "eyeBlink",
                                    "influence",
                                    60,
                                    R.f.ANIMATIONTYPE_FLOAT
                                  );
                                  g.setKeys(m);
                                  var f = o[v].morphTargetManager.getTarget(
                                    Fe.current[p]
                                  );
                                  u.addTargetedAnimation(g, f);
                                }
                                if ("female" === r) {
                                  var w = new R.f(
                                    "eyeLashesBlink",
                                    "influence",
                                    60,
                                    R.f.ANIMATIONTYPE_FLOAT
                                  );
                                  w.setKeys(m);
                                  var y = h.current
                                      .getTransformNodeByName("JinkoEyelashes")
                                      .getChildTransformNodes(!0),
                                    b = y[0].name;
                                  y[0].dispose();
                                  var k = h.current.getMeshByName(b);
                                  if (k) {
                                    var C = k.morphTargetManager.getTarget(0);
                                    u.addTargetedAnimation(w, C);
                                  }
                                }
                                u.play(!0);
                              }
                            }),
                            Ue.forEach(function (e) {
                              n.addMeshTask(
                                "".concat(e.animName),
                                "",
                                "../glb/animations/".concat(r, "/"),
                                "".concat(e.animName, ".glb")
                              ).onSuccess = function (n) {
                                var t = n;
                                t.loadedMeshes.length > 0 &&
                                  t.loadedMeshes[0].dispose(),
                                  (t.loadedAnimationGroups[0].name = "".concat(
                                    e.animName
                                  ));
                              };
                            }),
                            (n.onFinish = (function () {
                              var e = (0, l.Z)(
                                (0, s.Z)().mark(function e() {
                                  var n, t;
                                  return (0, s.Z)().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            Ue.forEach(function (e) {
                                              var n =
                                                  h.current.getAnimationGroupByName(
                                                    e.animName
                                                  ),
                                                t = [],
                                                a = [];
                                              t.push(n);
                                              var i =
                                                h.current.getTransformNodeByName(
                                                  "female" === r
                                                    ? "JinkoF"
                                                    : "JinkoM"
                                                );
                                              t.forEach(function (e) {
                                                var n = e.clone(
                                                  e.name,
                                                  function (e) {
                                                    return i.parent.getChildren(
                                                      function (n) {
                                                        return (
                                                          n.name === e.name
                                                        );
                                                      },
                                                      !1
                                                    )[0];
                                                  }
                                                );
                                                a.push(n);
                                              }),
                                                "neutral" === a[0].name
                                                  ? a[0].play(!0)
                                                  : a[0].onAnimationGroupEndObservable.add(
                                                      function () {
                                                        var e =
                                                          h.current.getAnimationGroupByName(
                                                            "neutral"
                                                          );
                                                        a[0].stop(), e.play(!0);
                                                      }
                                                    );
                                              for (
                                                var o = 0;
                                                o <
                                                a[0].targetedAnimations.length;
                                                o++
                                              )
                                                (a[0].targetedAnimations[
                                                  o
                                                ].animation.enableBlending = !0),
                                                  (a[0].targetedAnimations[
                                                    o
                                                  ].animation.blendingSpeed = 0.05);
                                              n.dispose();
                                            }),
                                            (t = $.current.get(
                                              null === (n = Ln.model) ||
                                                void 0 === n
                                                ? void 0
                                                : n.name
                                            ).assetContainer).moveAllFromScene(
                                              w.current
                                            ),
                                            t.addAllToScene(),
                                            (e.next = 6),
                                            new Promise(function (e) {
                                              return setTimeout(e, 1e3);
                                            })
                                          );
                                        case 6:
                                          h.current.getEngine().hideLoadingUI();
                                        case 7:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              );
                              return function () {
                                return e.apply(this, arguments);
                              };
                            })()),
                            n.load();
                        }
                      } catch (y) {
                        console.error(y);
                      }
                  return function () {
                    n.reset();
                  };
                }
              },
              [Ln, r, be]
            ),
            (0, u.useEffect)(
              function () {
                var e = (function () {
                  var e = (0, l.Z)(
                    (0, s.Z)().mark(function e() {
                      var n, t, a, i, l, d, c;
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.prev = 0), (e.next = 3), Ft();
                              case 3:
                                return e.sent, (e.next = 6), le();
                              case 6:
                                if (!(a = e.sent).error) {
                                  e.next = 9;
                                  break;
                                }
                                throw new Error(a.message);
                              case 9:
                                return (
                                  (i = a.data).map(function (e, n) {
                                    var t = e;
                                    return (t.id = n + 1), t;
                                  }),
                                  wn(i[0]),
                                  Tn(i),
                                  (e.next = 15),
                                  me(i[0].code, r)
                                );
                              case 15:
                                if (!(l = e.sent).error) {
                                  e.next = 18;
                                  break;
                                }
                                throw new Error(l.message);
                              case 18:
                                return (
                                  Sn(l.data[0]),
                                  On(l.data),
                                  null !== (n = l.data[0]) &&
                                    void 0 !== n &&
                                    n.greeting_prompt &&
                                    ((qe.current = [].concat(
                                      (0, o.Z)(qe.current),
                                      [
                                        {
                                          content:
                                            null === (d = l.data[0]) ||
                                            void 0 === d
                                              ? void 0
                                              : d.greeting_prompt,
                                          role: "assistant",
                                        },
                                      ]
                                    )),
                                    nn(function (e) {
                                      var n;
                                      return [].concat((0, o.Z)(e), [
                                        {
                                          content:
                                            null === (n = l.data[0]) ||
                                            void 0 === n
                                              ? void 0
                                              : n.greeting_prompt,
                                          role: "assistant",
                                          emotion: "joy",
                                          date: new Date(),
                                          id: (0, q.Z)(),
                                        },
                                      ]);
                                    })),
                                  (e.next = 23),
                                  ce(i[0].code, r)
                                );
                              case 23:
                                if (!(c = e.sent).error) {
                                  e.next = 26;
                                  break;
                                }
                                throw new Error(c.message);
                              case 26:
                                Fn(c.data),
                                  null !== (t = l.data[0]) &&
                                  void 0 !== t &&
                                  t.default_voice_id
                                    ? Cn(
                                        c.data.find(function (e) {
                                          return (
                                            e.id.toString() ===
                                            l.data[0].default_voice_id.toString()
                                          );
                                        })
                                      )
                                    : Cn(c.data[0]),
                                  (e.next = 33);
                                break;
                              case 30:
                                (e.prev = 30),
                                  (e.t0 = e.catch(0)),
                                  console.error(e.t0);
                              case 33:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 30]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
                e();
              },
              [le, Ft, r, me, ce]
            ),
            (0, u.useEffect)(
              function () {
                if (h.current) {
                  var e = h.current.getCameraByName("arc");
                  e &&
                    ((e.radius = cn.radius),
                    (e.lockedTarget = cn.target),
                    (e.lowerBetaLimit = cn.lowerBetaLimit),
                    (e.upperBetaLimit = cn.upperBetaLimit),
                    (e.lowerRadiusLimit = cn.lowerRadiusLimit),
                    (e.upperRadiusLimit = cn.upperRadiusLimit));
                }
              },
              [cn]
            ),
            (0, u.useEffect)(function () {
              var e = function () {
                var e,
                  n = document.getElementById("top-options-bar"),
                  t = document.getElementById("cs-navbar"),
                  r = document.getElementById("babylon-canvas"),
                  a = document.getElementById("babylon-loading");
                (r.style.width = "".concat(
                  window.innerWidth < 992 ? xe.current.offsetWidth : 500,
                  "px"
                )),
                  (r.style.height = "".concat(
                    window.innerHeight - t.clientHeight - n.clientHeight,
                    "px"
                  )),
                  (a.style.width = "".concat(
                    window.innerWidth < 992 ? xe.current.offsetWidth : 500,
                    "px"
                  )),
                  (a.style.height = "".concat(
                    window.innerHeight - t.clientHeight - n.clientHeight,
                    "px"
                  )),
                  (fe.current.style.width = "".concat(
                    window.innerWidth < 992 ? xe.current.offsetWidth : 500,
                    "px"
                  )),
                  h.current &&
                    (null === (e = h.current) ||
                      void 0 === e ||
                      e.getEngine().resize());
              };
              return (
                e(),
                window.addEventListener("resize", e),
                function () {
                  window.removeEventListener("resize", e);
                }
              );
            }, []),
            (0, u.useEffect)(
              function () {
                if (0 !== kt.length) {
                  var e =
                      kt.find(function (e) {
                        return "chat_exp" === e.task_key;
                      }) || null,
                    n =
                      kt.find(function (e) {
                        return "share" === e.task_key;
                      }) || null,
                    t =
                      kt.find(function (e) {
                        return "discord" === e.task_key;
                      }) || null,
                    r =
                      kt.find(function (e) {
                        return "airdrop" === e.task_key;
                      }) || null;
                  if (e && n && t) {
                    var a = 0;
                    return (
                      null !== e && void 0 !== e && e.is_done && (a += 1),
                      null !== n && void 0 !== n && n.is_done && (a += 1),
                      null !== t && void 0 !== t && t.is_done && (a += 1),
                      Lt({
                        max_exp: e.progress.max_progress,
                        exp: e.progress.progress,
                        is_max_exp: e.is_done,
                        is_share: n.is_done,
                        is_join_discord: t.is_done,
                        is_airdrop: !!r,
                        currTaskProgress: a,
                        totalTask: 3,
                      }),
                      function () {}
                    );
                  }
                }
              },
              [kt]
            ),
            (0, u.useEffect)(
              function () {
                h.current &&
                  P.D.audioEngine &&
                  (_t
                    ? P.D.audioEngine.setGlobalVolume(0)
                    : P.D.audioEngine.setGlobalVolume(1));
              },
              [_t]
            );
          var Rt = (function () {
              var e = (0, l.Z)(
                (0, s.Z)().mark(function e() {
                  return (0, s.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          Mt(!_t);
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Ht = (0, u.useCallback)(
              (function () {
                var e = (0, l.Z)(
                  (0, s.Z)().mark(function e(n) {
                    var t, a, i, l, d, c, u;
                    return (0, s.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = Object.values(n)[0]),
                                (a = Mn.find(function (e) {
                                  return e.id.toString() === t.toString();
                                })),
                                wn(a),
                                (qe.current = []),
                                nn([]),
                                (e.prev = 5),
                                (e.next = 8),
                                me(a.code, r)
                              );
                            case 8:
                              if (!(d = e.sent).error) {
                                e.next = 11;
                                break;
                              }
                              throw new Error(d.message);
                            case 11:
                              return (
                                Sn(d.data[0]),
                                null !== (i = d.data[0]) &&
                                  void 0 !== i &&
                                  i.greeting_prompt &&
                                  ((qe.current = [].concat(
                                    (0, o.Z)(qe.current),
                                    [
                                      {
                                        content:
                                          null === (c = d.data[0]) ||
                                          void 0 === c
                                            ? void 0
                                            : c.greeting_prompt,
                                        role: "assistant",
                                      },
                                    ]
                                  )),
                                  nn(function (e) {
                                    var n;
                                    return [].concat((0, o.Z)(e), [
                                      {
                                        content:
                                          null === (n = d.data[0]) ||
                                          void 0 === n
                                            ? void 0
                                            : n.greeting_prompt,
                                        role: "assistant",
                                        emotion: "joy",
                                        date: new Date(),
                                        id: (0, q.Z)(),
                                      },
                                    ]);
                                  })),
                                On(d.data),
                                (e.next = 16),
                                ce(a.code, r)
                              );
                            case 16:
                              if (!(u = e.sent).error) {
                                e.next = 19;
                                break;
                              }
                              throw new Error(u.message);
                            case 19:
                              null !== (l = d.data[0]) &&
                              void 0 !== l &&
                              l.default_voice_id
                                ? Cn(
                                    u.data.find(function (e) {
                                      return (
                                        e.id.toString() ===
                                        d.data[0].default_voice_id.toString()
                                      );
                                    })
                                  )
                                : Cn(u.data[0]),
                                Fn(u.data),
                                (e.next = 26);
                              break;
                            case 23:
                              (e.prev = 23),
                                (e.t0 = e.catch(5)),
                                console.error(e.t0);
                            case 26:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[5, 23]]
                    );
                  })
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })(),
              [Mn, me, ce, r]
            ),
            It = (0, u.useCallback)(
              function (e) {
                var n = Object.values(e)[0];
                Cn(
                  Bn.find(function (e) {
                    return e.id.toString() === n.toString();
                  })
                );
              },
              [Bn]
            ),
            Ot = (0, u.useCallback)(
              function (e) {
                var n = Object.values(e)[0],
                  t = In.find(function (e) {
                    return e.id.toString() === n.toString();
                  });
                Sn(t),
                  t.default_voice_id &&
                    Cn(
                      Bn.find(function (e) {
                        return (
                          e.id.toString() === t.default_voice_id.toString()
                        );
                      })
                    ),
                  (qe.current = []),
                  nn([]),
                  t.greeting_prompt &&
                    ((qe.current = [].concat((0, o.Z)(qe.current), [
                      { content: t.greeting_prompt, role: "assistant" },
                    ])),
                    nn(function (e) {
                      return [].concat((0, o.Z)(e), [
                        {
                          content: t.greeting_prompt,
                          role: "assistant",
                          emotion: "joy",
                          date: new Date(),
                          id: (0, q.Z)(),
                        },
                      ]);
                    }));
              },
              [In, Bn]
            ),
            Nt = (function () {
              var e = (0, l.Z)(
                (0, s.Z)().mark(function e() {
                  return (0, s.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          ht(!0);
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Wt = (0, u.useCallback)(
              (function () {
                var e = (0, l.Z)(
                  (0, s.Z)().mark(function e(n) {
                    var t, a, i, o, l;
                    return (0, s.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = Object.values(n)[0]),
                                (a = et.find(function (e) {
                                  return e.id.toString() === t.toString();
                                })),
                                Vn(a),
                                (e.prev = 3),
                                (e.next = 6),
                                me(a.code, r)
                              );
                            case 6:
                              if (!(o = e.sent).error) {
                                e.next = 9;
                                break;
                              }
                              throw new Error(o.message);
                            case 9:
                              return (
                                Qn(o.data[0]),
                                dt(o.data),
                                (e.next = 13),
                                ce(a.code, r)
                              );
                            case 13:
                              if (!(l = e.sent).error) {
                                e.next = 16;
                                break;
                              }
                              throw new Error(l.message);
                            case 16:
                              null !== (i = o.data[0]) &&
                              void 0 !== i &&
                              i.default_voice_id
                                ? Yn(
                                    l.data.find(function (e) {
                                      return (
                                        e.id.toString() ===
                                        o.data[0].default_voice_id.toString()
                                      );
                                    })
                                  )
                                : Yn(l.data[0]),
                                it(l.data),
                                (e.next = 23);
                              break;
                            case 20:
                              (e.prev = 20),
                                (e.t0 = e.catch(3)),
                                console.error(e.t0);
                            case 23:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[3, 20]]
                    );
                  })
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })(),
              [et, r, me, ce]
            ),
            Dt = (0, u.useCallback)(
              function (e) {
                var n = Object.values(e)[0];
                Yn(
                  at.find(function (e) {
                    return e.id.toString() === n.toString();
                  })
                );
              },
              [at]
            ),
            Vt = (0, u.useCallback)(
              function (e) {
                var n = Object.values(e)[0],
                  t = lt.find(function (e) {
                    return e.id.toString() === n.toString();
                  });
                Qn(t);
              },
              [lt]
            ),
            zt = (0, u.useCallback)(
              function () {
                Tn(et),
                  Fn(at),
                  On(lt),
                  wn(Dn),
                  Sn(Jn),
                  Jn.default_voice_id &&
                    Cn(
                      at.find(function (e) {
                        return (
                          e.id.toString() === Jn.default_voice_id.toString()
                        );
                      })
                    ),
                  (qe.current = []),
                  nn([]),
                  Jn.greeting_prompt &&
                    ((qe.current = [].concat((0, o.Z)(qe.current), [
                      { content: Jn.greeting_prompt, role: "assistant" },
                    ])),
                    nn(function (e) {
                      return [].concat((0, o.Z)(e), [
                        {
                          content: Jn.greeting_prompt,
                          role: "assistant",
                          emotion: "joy",
                          date: new Date(),
                          id: (0, q.Z)(),
                        },
                      ]);
                    })),
                  pt(!1);
              },
              [Dn, Jn, et, at, lt]
            );
          return (0, re.jsxs)("div", {
            style: { height: "100%" },
            children: [
              (0, re.jsx)(Qe, {
                show: mt,
                onClose: function () {
                  pt(!1);
                },
                handleOptionsLanguageListDropdown: Wt,
                handleOptionsVoiceListDropdown: Dt,
                handleOptionsModelListSelector: Vt,
                handleOptionsApplyButton: zt,
                optionsLanguageList: et,
                currentOptionsLanguage: Dn,
                optionsVoiceList: at,
                currentOptionsVoice: Un,
                optionsModelList: lt,
                currentOptionsModel: Jn,
              }),
              (0, re.jsx)(Te, {
                ref: m,
                children: (0, re.jsx)(g.W, {
                  style: { height: "100%" },
                  children: (0, re.jsx)("div", {
                    style: {
                      height: "100%",
                      position: "relative",
                      maxWidth: "100%",
                    },
                    children: (0, re.jsxs)(We, {
                      ref: xe,
                      gap: "10px",
                      justify: "center",
                      align: "start",
                      direction: "row",
                      children: [
                        (0, re.jsxs)(v.k, {
                          ref: fe,
                          justify: "center",
                          align: "center",
                          direction: "row",
                          wrap: "wrap",
                          style: { position: "relative" },
                          children: [
                            (0, re.jsxs)(Oe, {
                              id: "top-options-bar",
                              gap: "10px",
                              justify: "space-between",
                              direction: "row",
                              style: { width: "100%", height: "45px" },
                              children: [
                                (0, re.jsx)(Ie, {
                                  bg: "rgba(118, 118, 115, 0.5)",
                                  height: "35px",
                                  width: "35px",
                                  minwidth: "35px",
                                  padding: "0px",
                                  borderradius: "100%",
                                  onPress: function () {
                                    !(function () {
                                      var e;
                                      null === (e = h.current) ||
                                        void 0 === e ||
                                        e.getEngine().dispose(),
                                        n("../chat");
                                    })();
                                  },
                                  children: (0, re.jsx)("svg", {
                                    width: "20",
                                    height: "18",
                                    viewBox: "0 0 20 18",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, re.jsx)("path", {
                                      d: "M18.75 7.7152H3.925L8.4625 2.10999C8.67467 1.84745 8.77675 1.50898 8.74628 1.16903C8.7158 0.829086 8.55527 0.515513 8.3 0.297298C8.04473 0.0790819 7.71563 -0.0259025 7.3851 0.00544001C7.05456 0.0367826 6.74967 0.201885 6.5375 0.464426L0.2875 8.17802C0.245451 8.23937 0.207849 8.30383 0.175 8.37086C0.175 8.43514 0.175 8.47371 0.0875002 8.53799C0.0308421 8.68539 0.0011764 8.8423 0 9.0008C0.0011764 9.1593 0.0308421 9.31621 0.0875002 9.46362C0.0875002 9.5279 0.0874998 9.56647 0.175 9.63075C0.207849 9.69778 0.245451 9.76223 0.2875 9.82359L6.5375 17.5372C6.65503 17.6823 6.8022 17.799 6.96856 17.879C7.13491 17.959 7.31636 18.0003 7.5 18C7.79207 18.0006 8.07511 17.896 8.3 17.7043C8.42657 17.5964 8.5312 17.4638 8.60789 17.3143C8.68458 17.1647 8.73183 17.001 8.74692 16.8326C8.76202 16.6643 8.74466 16.4945 8.69586 16.333C8.64705 16.1715 8.56775 16.0215 8.4625 15.8916L3.925 10.2864H18.75C19.0815 10.2864 19.3995 10.151 19.6339 9.90986C19.8683 9.66876 20 9.34177 20 9.0008C20 8.65984 19.8683 8.33284 19.6339 8.09175C19.3995 7.85065 19.0815 7.7152 18.75 7.7152Z",
                                      fill: "white",
                                    }),
                                  }),
                                }),
                                (0, re.jsx)("div", {
                                  id: "exp-bar",
                                  style: {
                                    display: "flex",
                                    width: "100%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  },
                                  children: t
                                    ? Zt.is_max_exp &&
                                      Zt.is_share &&
                                      Zt.is_join_discord &&
                                      Zt.is_airdrop
                                      ? (0, re.jsxs)(re.Fragment, {
                                          children: [
                                            (0, re.jsxs)("div", {
                                              style: {
                                                minWidth: "120px",
                                                width: "100%",
                                                maxWidth: "140px",
                                                height: "22px",
                                                position: "relative",
                                                background:
                                                  "linear-gradient(180deg,rgba(54,56,41,0.50)0%,rgba(0,0,0,0.50)100%)",
                                                borderRadius: "5px",
                                                border: "0.50px #777E90 solid",
                                              },
                                              children: [
                                                (0, re.jsx)("div", {
                                                  style: {
                                                    width: "".concat(
                                                      (Zt.exp / Zt.max_exp) *
                                                        100,
                                                      "%"
                                                    ),
                                                    height: "100%",
                                                    position: "absolute",
                                                    background:
                                                      "linear-gradient(180deg, rgba(241.86,255,126.17,0.30)0%,rgba(229,255,0,0.50)100%)",
                                                    borderRadius: "4px",
                                                  },
                                                }),
                                                (0, re.jsxs)("div", {
                                                  style: {
                                                    width: "100%",
                                                    height: "100%",
                                                    textAlign: "center",
                                                    color: "white",
                                                    fontSize: "12px",
                                                    fontWeight: "900",
                                                    wordWrap: "break-word",
                                                  },
                                                  children: [
                                                    Zt.exp,
                                                    " / ",
                                                    Zt.max_exp,
                                                    " Exp",
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, re.jsx)(Ie, {
                                              padding: "0px",
                                              borderradius: "100%",
                                              bg: "transparent",
                                              height: "45px",
                                              width: "45px",
                                              minwidth: "45px",
                                              onPress: function () {
                                                Nt();
                                              },
                                              disabled: Pe || an,
                                              children: (0, re.jsx)("img", {
                                                alt: "airdrop completed anim",
                                                src: "/images/airdrop/airdrop-complete.png",
                                              }),
                                            }),
                                          ],
                                        })
                                      : !wt && Zt.max_exp > 0
                                      ? (0, re.jsxs)(re.Fragment, {
                                          children: [
                                            (0, re.jsxs)("div", {
                                              style: {
                                                minWidth: "120px",
                                                width: "100%",
                                                maxWidth: "140px",
                                                height: "22px",
                                                position: "relative",
                                                background:
                                                  "linear-gradient(180deg,rgba(54,56,41,0.50)0%,rgba(0,0,0,0.50)100%)",
                                                borderRadius: "5px",
                                                border: "0.50px #777E90 solid",
                                              },
                                              children: [
                                                (0, re.jsx)("div", {
                                                  style: {
                                                    width: "".concat(
                                                      (Zt.exp / Zt.max_exp) *
                                                        100,
                                                      "%"
                                                    ),
                                                    height: "100%",
                                                    position: "absolute",
                                                    background:
                                                      "linear-gradient(180deg, rgba(241.86,255,126.17,0.30)0%,rgba(229,255,0,0.50)100%)",
                                                    borderRadius: "4px",
                                                  },
                                                }),
                                                (0, re.jsxs)("div", {
                                                  style: {
                                                    width: "100%",
                                                    height: "100%",
                                                    textAlign: "center",
                                                    color: "white",
                                                    fontSize: "12px",
                                                    fontWeight: "900",
                                                    wordWrap: "break-word",
                                                  },
                                                  children: [
                                                    Zt.exp,
                                                    " / ",
                                                    Zt.max_exp,
                                                    " Exp",
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, re.jsx)(Ie, {
                                              padding: "0px",
                                              borderradius: "100%",
                                              bg: "transparent",
                                              height: "45px",
                                              width: "45px",
                                              minwidth: "45px",
                                              onPress: function () {
                                                Nt();
                                              },
                                              disabled: Pe || an,
                                              children: (0, re.jsx)("img", {
                                                alt: "airdrop anim",
                                                src: "/images/airdrop/airdrop-animation.gif",
                                              }),
                                            }),
                                          ],
                                        })
                                      : null
                                    : null,
                                }),
                                (0, re.jsx)(v.k, {
                                  gap: "10px",
                                  align: "end",
                                  direction: "row",
                                  style: { flexBasis: "0%" },
                                  children: c
                                    ? (0, re.jsx)(Ie, {
                                        bg: "var(--yellowColor))",
                                        height: "35px",
                                        width: "35px",
                                        minwidth: "35px",
                                        padding: "0px",
                                        borderradius: "100%",
                                        onPress: function () {
                                          Vn(xn),
                                            Yn(kn),
                                            Qn(Ln),
                                            nt(Mn),
                                            it(Bn),
                                            dt(In),
                                            pt(!0);
                                        },
                                        disabled: Pe || an,
                                        children: (0, re.jsxs)("svg", {
                                          width: "18",
                                          height: "20",
                                          viewBox: "0 0 18 20",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: [
                                            (0, re.jsx)("path", {
                                              d: "M8.42105 11.5789V19.9999H0C2.53776e-05 17.8121 0.851513 15.7102 2.37418 14.1392C3.89684 12.5682 5.97115 11.6514 8.1579 11.5831L8.42105 11.5789Z",
                                              fill: "black",
                                            }),
                                            (0, re.jsx)("path", {
                                              d: "M17.0343 16.3854C17.1103 15.9908 17.1103 15.5879 17.0343 15.1934L17.7885 14.7765C17.8762 14.7289 17.9142 14.6309 17.885 14.5386C17.6891 13.9342 17.3529 13.3858 16.9144 12.9325C16.8472 12.8625 16.739 12.8457 16.6513 12.8933L15.8971 13.3102C15.5785 13.05 15.2131 12.8485 14.8184 12.7142V11.8804C14.8184 11.7852 14.7482 11.7013 14.6518 11.6817C13.9999 11.5418 13.3363 11.5474 12.7165 11.6817C12.6201 11.7013 12.5499 11.7852 12.5499 11.8804V12.7142C12.1553 12.8485 11.7899 13.05 11.4712 13.3102L10.717 12.8933C10.6322 12.8457 10.5211 12.8625 10.4539 12.9325C10.0154 13.3858 9.67922 13.9342 9.48335 14.5386C9.45412 14.6309 9.49505 14.7289 9.57982 14.7765L10.334 15.1934C10.258 15.5879 10.258 15.9908 10.334 16.3854L9.57982 16.8023C9.49212 16.8499 9.45412 16.9478 9.48335 17.0402C9.67922 17.6446 10.0154 18.1902 10.4539 18.6463C10.5211 18.7162 10.6293 18.733 10.717 18.6855L11.4712 18.2685C11.7899 18.5288 12.1553 18.7302 12.5499 18.8646V19.6984C12.5499 19.7935 12.6201 19.8775 12.7165 19.8971C13.3684 20.037 14.032 20.0314 14.6518 19.8971C14.7482 19.8775 14.8184 19.7935 14.8184 19.6984V18.8646C15.2131 18.7302 15.5785 18.5288 15.8971 18.2685L16.6513 18.6855C16.7361 18.733 16.8472 18.7162 16.9144 18.6463C17.3529 18.193 17.6891 17.6446 17.885 17.0402C17.9142 16.9478 17.8733 16.8499 17.7885 16.8023L17.0343 16.3854ZM13.6871 17.1465C12.9036 17.1465 12.2693 16.5365 12.2693 15.7894C12.2693 15.0423 12.9066 14.4323 13.6871 14.4323C14.4676 14.4323 15.1049 15.0423 15.1049 15.7894C15.1049 16.5365 14.4705 17.1465 13.6871 17.1465Z",
                                              fill: "black",
                                            }),
                                            (0, re.jsx)("path", {
                                              d: "M14.7368 5.26316C14.7368 2.35526 12.3815 0 9.47361 0C6.56571 0 4.21045 2.35526 4.21045 5.26316C4.21045 8.17105 6.56571 10.5263 9.47361 10.5263C12.3815 10.5263 14.7368 8.17105 14.7368 5.26316Z",
                                              fill: "black",
                                            }),
                                          ],
                                        }),
                                      })
                                    : null,
                                }),
                              ],
                            }),
                            (0, re.jsx)("div", {
                              id: "babylon-loading",
                              style: {
                                display: "none",
                                position: "absolute",
                                background: "var(--blackColor)",
                                textAlign: "center",
                                opacity: "1",
                                zIndex: 998,
                                bottom: 0,
                              },
                              children: (0, re.jsx)("div", {
                                style: {
                                  position: "relative",
                                  left: "50%",
                                  top: "50%",
                                  transform: "translate(-50%,-50%)",
                                },
                                children: (0, re.jsx)(v.k, {
                                  justify: "center",
                                  align: "center",
                                  direction: "column",
                                  wrap: "wrap",
                                  children: (0, re.jsx)(ae, {
                                    name: "babylon-loading-icon",
                                  }),
                                }),
                              }),
                            }),
                            (0, re.jsx)(Ae, {
                              ref: he,
                              id: "canvas-wrapper",
                              children: (0, re.jsx)(A.D4V, {
                                antialias: !0,
                                adaptToDeviceRatio: !0,
                                observeCanvasResize: !1,
                                touchActionNone: !1,
                                canvasId: "babylon-canvas",
                                style: { outline: "none" },
                                engineOptions: { preserveDrawingBuffer: !0 },
                                children: (0, re.jsx)(A.xsS, {
                                  onSceneMount: function (e) {
                                    h.current = e.scene;
                                    var n = new U.yw(60);
                                    n.addOptimization(new U.fr(0, 1));
                                    new U.GY(h.current, n);
                                    (h.current.freezeWorldMatrix = !0),
                                      (h.current.skipPointerMovePicking = !0),
                                      h.current.clearCachedVertexData(),
                                      (h.current.clearColor = new F.HE(
                                        0,
                                        0,
                                        0,
                                        0
                                      )),
                                      (P.D.audioEngine.useCustomUnlockedButton =
                                        !0);
                                    var t = new I.Y(
                                      "arc",
                                      Ye[0].alpha,
                                      Ye[0].beta,
                                      Ye[0].radius,
                                      Ye[0].target,
                                      h.current
                                    );
                                    (t.lowerBetaLimit = Ye[0].lowerBetaLimit),
                                      (t.upperBetaLimit = Ye[0].upperBetaLimit),
                                      (t.lowerRadiusLimit =
                                        Ye[0].lowerRadiusLimit),
                                      (t.upperRadiusLimit =
                                        Ye[0].upperRadiusLimit),
                                      (t.wheelPrecision = 50),
                                      (t.panningSensibility = 0),
                                      (t.fov = Ye[0].fov),
                                      (t.useFramingBehavior = !0),
                                      t.inputs.removeByType(
                                        "ArcRotateCameraMouseWheelInput"
                                      ),
                                      (t.inputs.attached.pointers.pinchZoom =
                                        !1),
                                      t.attachControl(
                                        h.current
                                          .getEngine()
                                          .getRenderingCanvas(),
                                        !0
                                      ),
                                      h.current.onPointerObservable.add(
                                        function (e) {
                                          e.event.preventDefault();
                                          var n = 0;
                                          if (e.type === W.kD.POINTERWHEEL)
                                            e.event.wheelDelta
                                              ? (n = e.event.wheelDelta)
                                              : e.event.detail &&
                                                (n = -e.event.detail),
                                              n > 0 &&
                                              sn.current < Ye.length - 1
                                                ? ((sn.current += 1),
                                                  un(Ye[sn.current]))
                                                : n <= 0 &&
                                                  sn.current > 0 &&
                                                  ((sn.current -= 1),
                                                  un(Ye[sn.current]));
                                        }
                                      );
                                    var r = new O.O(
                                      "lightFront",
                                      new B.P(0, 1, -2),
                                      h.current
                                    );
                                    (r.position = new B.P(3, 3, 3)),
                                      (r.intensity = 3);
                                    var a = new O.O(
                                      "lightBack",
                                      new B.P(0, -1, 2),
                                      h.current
                                    );
                                    (a.position = new B.P(-3, -3, -3)),
                                      (a.intensity = 3);
                                    var i = new O.O(
                                      "lightTop",
                                      new B.P(0, -1, 0),
                                      h.current
                                    );
                                    (i.position = new B.P(0, -2, 0)),
                                      (i.intensity = 1),
                                      ($.current = new Map()),
                                      (w.current = new G.fD()),
                                      w.current.cameras.push(t),
                                      w.current.lights.push(r),
                                      w.current.lights.push(a),
                                      w.current.lights.push(i);
                                    var o =
                                        document.getElementById(
                                          "babylon-canvas"
                                        ),
                                      s =
                                        document.getElementById(
                                          "babylon-loading"
                                        ),
                                      l =
                                        document.getElementById(
                                          "top-options-bar"
                                        ),
                                      d = document.getElementById("cs-navbar");
                                    (N.N.prototype.displayLoadingUI =
                                      function () {
                                        try {
                                          Be(!0),
                                            (s.style.width = "".concat(
                                              o.clientWidth,
                                              "px"
                                            )),
                                            (s.style.height = "".concat(
                                              o.clientHeight,
                                              "px"
                                            )),
                                            (s.style.display = "block"),
                                            (s.style.paddingBottom = "".concat(
                                              d.clientHeight + l.clientHeight,
                                              "px"
                                            ));
                                        } catch (e) {
                                          console.error(e);
                                        }
                                      }),
                                      (N.N.prototype.hideLoadingUI =
                                        function () {
                                          try {
                                            Be(!1), (s.style.display = "none");
                                          } catch (e) {
                                            console.error(e);
                                          }
                                        }),
                                      h.current.getEngine().resize(),
                                      ke(!0);
                                  },
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, re.jsx)(De, {
                          onSubmit: Bt.handleSubmit,
                          autoComplete: "off",
                          children: (0, re.jsxs)(Ve, {
                            gap: "10px",
                            justify: "center",
                            align: "start",
                            direction: "column",
                            style: { width: "100%" },
                            children: [
                              (0, re.jsx)(Ne, {
                                id: "desktop-options",
                                gap: "10px",
                                justify: "center",
                                align: "start",
                                direction: "column",
                                style: { width: "100%" },
                                children: (0, re.jsx)(Xe, {
                                  modelIsLoading: Pe || an,
                                  handleLanguageListDropdown: Ht,
                                  handleVoiceListDropdown: It,
                                  handleModelListSelector: Ot,
                                  languageList: Mn,
                                  voiceList: Bn,
                                  modelList: In,
                                  currentLanguage: xn,
                                  currentVoice: kn,
                                  currentModel: Ln,
                                }),
                              }),
                              (0, re.jsxs)(ze, {
                                gap: "10px",
                                direction: "column",
                                style: {
                                  width: "100%",
                                  position: "relative",
                                  height: "100%",
                                },
                                children: [
                                  (0, re.jsx)(Ge, {
                                    children: (0, re.jsx)(y.u, {
                                      children: (0, re.jsxs)(b.Z, {
                                        ref: f,
                                        children: [
                                          en.map(function (e, n) {
                                            return (0, re.jsxs)(
                                              k.v,
                                              {
                                                style: { width: "90%" },
                                                model: {
                                                  type: "custom",
                                                  sender: e.role,
                                                  position: "single",
                                                  direction:
                                                    "assistant" === e.role
                                                      ? "incoming"
                                                      : "outgoing",
                                                },
                                                children: [
                                                  "assistant" === e.role
                                                    ? (0, re.jsx)(C.q, {
                                                        name: "".concat(
                                                          (null === Ln ||
                                                          void 0 === Ln
                                                            ? void 0
                                                            : Ln.ai_name) ||
                                                            "AI"
                                                        ),
                                                        style: {
                                                          border:
                                                            "1px solid var(--yellowColor)",
                                                        },
                                                        children: (0, re.jsx)(
                                                          "img",
                                                          {
                                                            src:
                                                              "".concat(
                                                                ""
                                                                  .concat(
                                                                    Ln.image_url,
                                                                    "?v="
                                                                  )
                                                                  .concat(
                                                                    Date.now()
                                                                  )
                                                              ) ||
                                                              "./images/avatar.png",
                                                            alt:
                                                              null === Ln ||
                                                              void 0 === Ln
                                                                ? void 0
                                                                : Ln.name,
                                                            style: {
                                                              width: "100%",
                                                              height: "100%",
                                                            },
                                                            crossOrigin: "",
                                                          }
                                                        ),
                                                      })
                                                    : null,
                                                  (0, re.jsxs)(
                                                    k.v.CustomContent,
                                                    {
                                                      children: [
                                                        (0, re.jsxs)(v.k, {
                                                          align: "center",
                                                          children: [
                                                            (0, re.jsxs)(
                                                              "strong",
                                                              {
                                                                style: {
                                                                  color:
                                                                    "assistant" ===
                                                                    e.role
                                                                      ? "var(--yellowColor)"
                                                                      : "white",
                                                                  textTransform:
                                                                    "uppercase",
                                                                },
                                                                children: [
                                                                  "assistant" ===
                                                                  e.role
                                                                    ? "".concat(
                                                                        (null ===
                                                                          Ln ||
                                                                        void 0 ===
                                                                          Ln
                                                                          ? void 0
                                                                          : Ln.ai_name) ||
                                                                          "AI"
                                                                      )
                                                                    : "You",
                                                                  " ",
                                                                ],
                                                              }
                                                            ),
                                                            (0, re.jsx)(
                                                              "small",
                                                              {
                                                                style: {
                                                                  color:
                                                                    "assistant" ===
                                                                    e.role
                                                                      ? "var(--yellowColor)"
                                                                      : "white",
                                                                },
                                                                children: (0,
                                                                S.WU)(
                                                                  e.date,
                                                                  null !== xn &&
                                                                    void 0 !==
                                                                      xn &&
                                                                    xn.code
                                                                    ? null ===
                                                                        xn ||
                                                                      void 0 ===
                                                                        xn
                                                                      ? void 0
                                                                      : xn.code.replace(
                                                                          /-/g,
                                                                          "_"
                                                                        )
                                                                    : "en_US"
                                                                ),
                                                              }
                                                            ),
                                                          ],
                                                        }),
                                                        (0, re.jsx)(j.D, {
                                                          components: {
                                                            pre: function (e) {
                                                              e.node;
                                                              var n = (0, i.Z)(
                                                                e,
                                                                Le
                                                              );
                                                              return (0,
                                                              re.jsx)(
                                                                "pre",
                                                                (0, a.Z)(
                                                                  {
                                                                    style: {
                                                                      unicodeBidi:
                                                                        "inherit",
                                                                    },
                                                                  },
                                                                  n
                                                                )
                                                              );
                                                            },
                                                            code: function (e) {
                                                              e.node;
                                                              var n = (0, i.Z)(
                                                                e,
                                                                Se
                                                              );
                                                              return (0,
                                                              re.jsx)(
                                                                "code",
                                                                (0, a.Z)(
                                                                  {
                                                                    style: {
                                                                      background:
                                                                        "transparent",
                                                                    },
                                                                  },
                                                                  n
                                                                )
                                                              );
                                                            },
                                                            ol: function (e) {
                                                              e.node;
                                                              var n = (0, i.Z)(
                                                                e,
                                                                Ee
                                                              );
                                                              return (0,
                                                              re.jsx)(
                                                                "ol",
                                                                (0, a.Z)(
                                                                  {
                                                                    style: {
                                                                      color:
                                                                        "var(--whiteColor)",
                                                                    },
                                                                  },
                                                                  n
                                                                )
                                                              );
                                                            },
                                                            ul: function (e) {
                                                              e.node;
                                                              var n = (0, i.Z)(
                                                                e,
                                                                _e
                                                              );
                                                              return (0,
                                                              re.jsx)(
                                                                "ul",
                                                                (0, a.Z)(
                                                                  {
                                                                    style: {
                                                                      color:
                                                                        "var(--whiteColor)",
                                                                      padding:
                                                                        "0px",
                                                                    },
                                                                  },
                                                                  n
                                                                )
                                                              );
                                                            },
                                                            li: function (e) {
                                                              e.node;
                                                              var n = (0, i.Z)(
                                                                e,
                                                                Me
                                                              );
                                                              return (0,
                                                              re.jsx)(
                                                                "li",
                                                                (0, a.Z)(
                                                                  {
                                                                    style: {
                                                                      margin:
                                                                        "0px",
                                                                    },
                                                                  },
                                                                  n
                                                                )
                                                              );
                                                            },
                                                          },
                                                          remarkPlugins: [
                                                            Z.Z,
                                                            L.Z,
                                                          ],
                                                          children: "".concat(
                                                            e.content,
                                                            " "
                                                          ),
                                                        }),
                                                      ],
                                                    }
                                                  ),
                                                ],
                                              },
                                              e.id
                                            );
                                          }),
                                          an
                                            ? (0, re.jsxs)(k.v, {
                                                style: { width: "90%" },
                                                model: {
                                                  type: "custom",
                                                  sender: "assistant",
                                                  position: "single",
                                                  direction: "incoming",
                                                },
                                                children: [
                                                  (0, re.jsx)(C.q, {
                                                    name: "".concat(
                                                      (null === Ln ||
                                                      void 0 === Ln
                                                        ? void 0
                                                        : Ln.ai_name) || "AI"
                                                    ),
                                                    style: {
                                                      border:
                                                        "1px solid var(--yellowColor)",
                                                    },
                                                    children: (0, re.jsx)(
                                                      "img",
                                                      {
                                                        src:
                                                          "".concat(
                                                            ""
                                                              .concat(
                                                                Ln.image_url,
                                                                "?v="
                                                              )
                                                              .concat(
                                                                Date.now()
                                                              )
                                                          ) ||
                                                          "./images/avatar.png",
                                                        alt:
                                                          null === Ln ||
                                                          void 0 === Ln
                                                            ? void 0
                                                            : Ln.name,
                                                        style: {
                                                          width: "100%",
                                                          height: "100%",
                                                        },
                                                        crossOrigin: "",
                                                      }
                                                    ),
                                                  }),
                                                  "                                ",
                                                  (0, re.jsx)(
                                                    k.v.CustomContent,
                                                    {
                                                      children: (0, re.jsx)(
                                                        ee,
                                                        {
                                                          style: {
                                                            padding: "0px",
                                                          },
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                ],
                                              })
                                            : null,
                                        ],
                                      }),
                                    }),
                                  }),
                                  (0, re.jsxs)(v.k, {
                                    id: "send-a-message-bar",
                                    style: {
                                      width: "100%",
                                      alignItems: "center",
                                      gap: "5px",
                                    },
                                    children: [
                                      (0, re.jsx)(v.k, {
                                        gap: "10px",
                                        justify: "center",
                                        align: "start",
                                        direction: "column",
                                        style: {
                                          backgroundColor: "#2F3432",
                                          width: "100%",
                                          borderRadius: "25px",
                                          padding: "5px 10px",
                                        },
                                        children: Pt
                                          ? (0, re.jsx)(ie, {
                                              name: "waveform",
                                            })
                                          : (0, re.jsx)(X.Lg, {
                                              style: { width: "100%" },
                                              autoComplete: "off",
                                              autoCorrect: "off",
                                              className: "input-custom",
                                              fontColor: "white",
                                              bgColor: "transparent",
                                              name: "message",
                                              type: "text",
                                              role: "presentation",
                                              placeholder: "".concat(
                                                e.formatMessage({
                                                  id: "send-a-message",
                                                  defaultMessage:
                                                    "Send a message",
                                                }),
                                                "..."
                                              ),
                                              onChange: Bt.handleChange,
                                              onBlur: Bt.handleBlur,
                                              value: Bt.values.message,
                                              ref: Re,
                                            }),
                                      }),
                                      (0, re.jsx)(He, {
                                        height: "100%",
                                        width: "fit-content",
                                        disabled: an || Pe,
                                        type: "submit",
                                        animated: !1,
                                        onPress: Bt.handleSubmit,
                                        children: (0, re.jsx)("svg", {
                                          width: "18",
                                          height: "16",
                                          viewBox: "0 0 18 16",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: (0, re.jsx)("path", {
                                            d: "M7.70652 7.51655L0.5 5.61483V0.769381L16.7689 8L0.5 15.2306V10.3852L7.70652 8.48345L9.53855 8L7.70652 7.51655Z",
                                            stroke: "#E5FF00",
                                          }),
                                        }),
                                      }),
                                      null,
                                      _t
                                        ? (0, re.jsx)(Ie, {
                                            padding: "0px",
                                            borderradius: "100%",
                                            bg: "var(--yellowColor))",
                                            height: "35px",
                                            width: "35px",
                                            minwidth: "35px",
                                            onPress: function () {
                                              Rt();
                                            },
                                            children: (0, re.jsxs)("svg", {
                                              width: "26",
                                              height: "26",
                                              viewBox: "0 0 26 26",
                                              fill: "none",
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              children: [
                                                (0, re.jsx)("path", {
                                                  d: "M15.1096 4.09026C15.2162 4.15055 15.305 4.23807 15.3668 4.34388C15.4286 4.4497 15.4612 4.57002 15.4613 4.69255V21.3076C15.4613 21.4301 15.4288 21.5504 15.3672 21.6562C15.3055 21.762 15.2169 21.8496 15.1103 21.91C15.0037 21.9704 14.883 22.0014 14.7606 21.9999C14.6381 21.9985 14.5182 21.9645 14.4131 21.9015L7.65497 17.8461H5.07688C4.52605 17.8461 3.99779 17.6273 3.6083 17.2378C3.21881 16.8483 3 16.32 3 15.7692V10.2267C3.00037 9.67616 3.21934 9.14825 3.60879 8.75906C3.99824 8.36987 4.52629 8.15124 5.07688 8.15125H7.65497L14.4117 4.09857C14.5169 4.03551 14.6369 4.00151 14.7595 4.00005C14.8821 3.99859 15.0029 4.02972 15.1096 4.09026Z",
                                                  fill: "black",
                                                }),
                                                (0, re.jsx)("path", {
                                                  d: "M18 16L20.5 13.5M20.5 13.5L23 11M20.5 13.5L18 11M20.5 13.5L23 16",
                                                  stroke: "black",
                                                  strokeWidth: "1.5",
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                }),
                                              ],
                                            }),
                                          })
                                        : (0, re.jsx)(Ie, {
                                            padding: "0px",
                                            borderradius: "100%",
                                            bg: "var(--yellowColor))",
                                            height: "35px",
                                            width: "35px",
                                            minwidth: "35px",
                                            onPress: function () {
                                              Rt();
                                            },
                                            children: (0, re.jsxs)("svg", {
                                              width: "26",
                                              height: "26",
                                              viewBox: "0 0 26 26",
                                              fill: "none",
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              children: [
                                                (0, re.jsx)("path", {
                                                  d: "M15.1096 4.09026C15.2162 4.15055 15.305 4.23807 15.3668 4.34388C15.4286 4.4497 15.4612 4.57002 15.4613 4.69255V21.3076C15.4613 21.4301 15.4288 21.5504 15.3672 21.6562C15.3055 21.762 15.2169 21.8496 15.1103 21.91C15.0037 21.9704 14.883 22.0014 14.7606 21.9999C14.6381 21.9985 14.5182 21.9645 14.4131 21.9015L7.65497 17.8461H5.07688C4.52605 17.8461 3.99779 17.6273 3.6083 17.2378C3.21881 16.8483 3 16.32 3 15.7692V10.2267C3.00037 9.67616 3.21934 9.14825 3.60879 8.75906C3.99824 8.36987 4.52629 8.15124 5.07688 8.15125H7.65497L14.4117 4.09857C14.5169 4.03551 14.6369 4.00151 14.7595 4.00005C14.8821 3.99859 15.0029 4.02972 15.1096 4.09026Z",
                                                  fill: "black",
                                                }),
                                                (0, re.jsx)("path", {
                                                  d: "M18.2305 9.14298C18.2305 9.14298 19.3633 10.3298 19.3633 12.3077C19.3633 14.2857 18.2305 15.4725 18.2305 15.4725M20.4962 6.76941C20.4962 6.76941 22.3842 8.74739 22.3842 12.3077C22.3842 15.8681 20.4962 17.8461 20.4962 17.8461",
                                                  stroke: "black",
                                                  strokeWidth: "1.5",
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                }),
                                              ],
                                            }),
                                          }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=222.a3ed3653.chunk.js.map
