"use strict";
(self.webpackChunkjinko_frontend = self.webpackChunkjinko_frontend || []).push([
  [4567],
  {
    58028: function (e, t, n) {
      n.d(t, {
        b: function () {
          return o;
        },
        t: function () {
          return u;
        },
      });
      var a = n(74165),
        r = n(15861),
        s = n(72791),
        i = n(31243),
        o = function () {
          var e = (0, s.useCallback)(
            (function () {
              var e = (0, r.Z)(
                (0, a.Z)().mark(function e(t, n, r, s, o) {
                  var u, l, c, d, p, m, y;
                  return (0, a.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (u = {
                                headers: {
                                  accept: "application/json",
                                  Authorization: t,
                                },
                              }),
                              (e.next = 4),
                              i.Z.post(
                                "".concat(
                                  "https://generative-api.jinkoai.com/",
                                  "nft/claim"
                                ),
                                {
                                  nft_id: n,
                                  nft_contract: r,
                                  address: s,
                                  signature: o,
                                },
                                u
                              )
                            );
                          case 4:
                            return (l = e.sent), (e.next = 7), l;
                          case 7:
                            if (
                              ((c = e.sent),
                              (d = c.data),
                              (p = c.status),
                              (m = c.statusText),
                              200 === p)
                            ) {
                              e.next = 13;
                              break;
                            }
                            throw new Error(m);
                          case 13:
                            if (!d.error) {
                              e.next = 15;
                              break;
                            }
                            throw new Error(d.msg);
                          case 15:
                            return e.abrupt("return", {
                              error: !1,
                              data: d,
                              message: "",
                            });
                          case 18:
                            return (
                              (e.prev = 18),
                              (e.t0 = e.catch(0)),
                              (y = e.t0.message),
                              e.abrupt("return", {
                                error: !0,
                                data: "",
                                message: y,
                              })
                            );
                          case 22:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 18]]
                  );
                })
              );
              return function (t, n, a, r, s) {
                return e.apply(this, arguments);
              };
            })(),
            []
          );
          return { onClaimNft: e };
        },
        u = function () {
          var e = (0, s.useCallback)(
            (function () {
              var e = (0, r.Z)(
                (0, a.Z)().mark(function e(t, n) {
                  var r, s, o, u, l, c, d, p;
                  return (0, a.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (r = {
                                headers: {
                                  accept: "application/json",
                                  Authorization: t,
                                },
                              }),
                              (e.next = 4),
                              i.Z.get(
                                ""
                                  .concat(
                                    "https://generative-api.jinkoai.com/",
                                    "nft/claim?address="
                                  )
                                  .concat(n),
                                r
                              )
                            );
                          case 4:
                            return (s = e.sent), (e.next = 7), s;
                          case 7:
                            if (
                              ((o = e.sent),
                              (u = o.data),
                              (l = o.status),
                              (c = o.statusText),
                              200 === l)
                            ) {
                              e.next = 13;
                              break;
                            }
                            throw new Error(c);
                          case 13:
                            if (!u.error) {
                              e.next = 15;
                              break;
                            }
                            throw new Error(u.msg);
                          case 15:
                            return e.abrupt("return", {
                              error: !1,
                              data: u,
                              message: "",
                            });
                          case 18:
                            return (
                              (e.prev = 18),
                              (e.t0 = e.catch(0)),
                              (d = e.t0.message),
                              (p = void 0 === d ? "" : d),
                              e.abrupt("return", {
                                error: !0,
                                data: "",
                                message: p,
                              })
                            );
                          case 22:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 18]]
                  );
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
            []
          );
          return { onGetListOfNfts: e };
        };
    },
    4567: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return Q;
          },
        });
      var a,
        r = n(1413),
        s = n(74165),
        i = n(15861),
        o = n(30168),
        u = n(29439),
        l = n(72791),
        c = n(5330),
        d = n(42164),
        p = n(25587),
        m = n(59982),
        y = n(98296),
        f = n(86312),
        x = n(34143),
        h = n(8481),
        g = n(37540),
        k = n(3708),
        b = n(91580),
        v = n(16953),
        w = n(4349),
        j = n(93539),
        T = n(55705),
        Z = n(8007),
        M = n(37623),
        _ = n(64094),
        S = n(93920),
        C = n(84471),
        F = n(26088),
        L = n(31243),
        E = n(66003),
        A = n(69655),
        P = n(65370),
        D = n(938),
        U = JSON.parse(
          '[{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"claim_duration","type":"uint256"},{"internalType":"uint256","name":"max_stake_cap","type":"uint256"}],"name":"addPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"global_pool_id","type":"uint256"}],"name":"AddPool","type":"event"},{"inputs":[{"internalType":"uint256","name":"pool_id","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"pool_id","type":"uint256"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimable","type":"uint256"}],"name":"Claim","type":"event"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyCollectEth","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyCollectToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pool_id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"log_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pool_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stake_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"block_no","type":"uint256"}],"name":"Stake","type":"event"},{"inputs":[{"internalType":"address","name":"new_owner","type":"address"}],"name":"transferOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"new_owner","type":"address"}],"name":"TransferOwner","type":"event"},{"inputs":[{"internalType":"uint256","name":"pool_id","type":"uint256"},{"internalType":"uint256","name":"stake_id","type":"uint256"},{"internalType":"uint256","name":"capital","type":"uint256"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"log_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pool_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"capital","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stake_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"block_no","type":"uint256"}],"name":"Unstake","type":"event"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"updateAccessPermission","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"UpdateAccessPermission","type":"event"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"updateBypassClaimDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"bypass_claim_duration","type":"bool"}],"name":"UpdateBypassClaimDuration","type":"event"},{"inputs":[{"internalType":"uint256","name":"pool_id","type":"uint256"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"claim_duration","type":"uint256"},{"internalType":"uint256","name":"max_stake_cap","type":"uint256"},{"internalType":"uint256","name":"max_user_stake_cap","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"pool_id","type":"uint256"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"duration_second","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"max_stake_cap","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"max_user_stake_cap","type":"uint256"}],"name":"UpdatePool","type":"event"},{"inputs":[{"internalType":"uint256","name":"pool_id","type":"uint256"},{"internalType":"bool","name":"stake_paused","type":"bool"},{"internalType":"bool","name":"unstake_paused","type":"bool"},{"internalType":"bool","name":"claim_paused","type":"bool"}],"name":"updatePoolState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"pool_id","type":"uint256"},{"indexed":false,"internalType":"bool","name":"stake_paused","type":"bool"},{"indexed":false,"internalType":"bool","name":"unstake_paused","type":"bool"},{"indexed":false,"internalType":"bool","name":"claim_paused","type":"bool"}],"name":"UpdatePoolState","type":"event"},{"inputs":[{"internalType":"address","name":"_signer","type":"address"}],"name":"updateSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"signer","type":"address"}],"name":"UpdateSigner","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"access_permission","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bypass_claim_duration","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pool_id","type":"uint256"},{"internalType":"address","name":"_address","type":"address"}],"name":"getClaimable","outputs":[{"internalType":"uint256","name":"claimable","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pool_id","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"getUserPoolClaimList","outputs":[{"internalType":"uint256[][]","name":"","type":"uint256[][]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pool_id","type":"uint256"},{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getUserPoolStakeList","outputs":[{"components":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"stake_timestamp","type":"uint256"},{"internalType":"uint256","name":"block_no","type":"uint256"},{"internalType":"bool","name":"is_claimed","type":"bool"}],"internalType":"struct Staking.UserStakeInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"global_pool_id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"log_id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"logs","outputs":[{"internalType":"enum Staking.Actions","name":"action","type":"uint8"},{"internalType":"uint256","name":"pool_id","type":"uint256"},{"internalType":"uint256","name":"stake_id","type":"uint256"},{"internalType":"uint256","name":"capital","type":"uint256"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"block_no","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pools","outputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"total_staked","type":"uint256"},{"internalType":"uint256","name":"claim_duration","type":"uint256"},{"internalType":"uint256","name":"max_stake_cap","type":"uint256"},{"internalType":"uint256","name":"max_user_stake_cap","type":"uint256"},{"internalType":"bool","name":"is_stake_paused","type":"bool"},{"internalType":"bool","name":"is_unstake_paused","type":"bool"},{"internalType":"bool","name":"is_claim_paused","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"signer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"user_stake_id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"users","outputs":[{"internalType":"uint256","name":"staked_amount","type":"uint256"}],"stateMutability":"view","type":"function"}]'
        ),
        z = n(10467),
        I = n(96669),
        N = n(68263),
        O = n(35547),
        J = n(29275),
        B = n(40801),
        q = n(56666),
        Y = n(17303),
        V = n(41927),
        K = (function () {
          var e = (0, i.Z)(
            (0, s.Z)().mark(function e(t, n) {
              var a,
                r,
                i,
                o,
                l,
                c,
                d,
                p = arguments;
              return (0, s.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = p.length > 2 && void 0 !== p[2] ? p[2] : 56),
                        (r = (
                          p.length > 3 && void 0 !== p[3]
                            ? p[3]
                            : { requireSuccess: !0 }
                        ).requireSuccess),
                        (i = (0, V.tV)(a)),
                        (o = new Y.vU(t)),
                        (l = n.map(function (e) {
                          return [
                            e.address.toLowerCase(),
                            o.encodeFunctionData(e.name, e.params),
                          ];
                        })),
                        (e.next = 8),
                        i.tryAggregate(r, l)
                      );
                    case 8:
                      return (
                        (c = e.sent),
                        (d = c.map(function (e, t) {
                          var a = (0, u.Z)(e, 2),
                            r = a[0],
                            s = a[1];
                          return r
                            ? o.decodeFunctionResult(n[t].name, s)
                            : null;
                        })),
                        e.abrupt("return", d)
                      );
                    case 11:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        G = n(58028),
        R = n(80184),
        W = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 18,
            n = e.split("."),
            a = (0, u.Z)(n, 2),
            r = a[0],
            s = a[1];
          if (!s) return parseFloat(e) + "0".repeat(t);
          if (s.length > t) throw new Error("Too many decimal places");
          return parseFloat(r) + s + "0".repeat(t - s.length);
        },
        $ = F.Z.div(
          a ||
            (a = (0, o.Z)([
              "\n  display: grid;\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(100px, 1fr));\n    justify-items: center;\n    grid-column-gap: 30px;\n    grid-row-gap: 10px;\n    width: 100%;\n    align-items: center;\n  }\n  @media (min-width: 769px) {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    justify-items: center;\n    grid-column-gap: 30px;\n    row-gap: 10px;\n    width: 100%;\n    align-items: center;\n  }\n",
            ]))
        ),
        X = function (e) {
          e.id;
          var t = e.name,
            n = e.staked,
            a = e.apy,
            r = e.tvl,
            s = (e.maxStakeCap, e.nftCount);
          e.balance,
            e.paymentDetails,
            e.getPoolsDetailsFromContract,
            e.getUserStakeAmountByPoolFromContract,
            e.setIsOverlapLoading;
          return (0, R.jsx)(c.Z, {
            children: (0, R.jsxs)($, {
              children: [
                (0, R.jsxs)(d.k, {
                  direction: "column",
                  align: "center",
                  w: "100%",
                  children: [
                    (0, R.jsx)(p.q, {
                      src: "/images/tokens/0xE97dB8503dd3E3eB0286AAFC50327C598EFDb578.svg",
                      radius: "xl",
                      size: "45px",
                    }),
                    (0, R.jsx)(m.x, { size: "16px", weight: 200, children: t }),
                  ],
                }),
                (0, R.jsxs)(d.k, {
                  direction: "column",
                  align: "center",
                  w: "100%",
                  style: {
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    width: "100%",
                    whiteSpace: "nowrap",
                    textAlignLast: "center",
                  },
                  children: [
                    (0, R.jsxs)(m.x, {
                      size: "md",
                      weight: 700,
                      ff: "var(--fontFamily3)",
                      tt: "uppercase",
                      children: [
                        parseFloat(n).toFixed(4),
                        " ",
                        (0, R.jsx)(w.Z, {
                          id: "jinko",
                          defaultMessage: "Neko",
                        }),
                      ],
                    }),
                    (0, R.jsx)(m.x, {
                      size: "sm",
                      style: {
                        filter: "drop-shadow(var(--yellowColor) 0 0 8px)",
                      },
                      children: (0, R.jsx)(w.Z, {
                        id: "staked",
                        defaultMessage: "Staked",
                      }),
                    }),
                  ],
                }),
                (0, R.jsxs)(d.k, {
                  direction: "column",
                  align: "center",
                  w: "100%",
                  children: [
                    (0, R.jsx)(d.k, {
                      direction: "row",
                      align: "center",
                      w: "fit-content",
                      pos: "relative",
                      children: (0, R.jsxs)(m.x, {
                        size: "md",
                        weight: 700,
                        ff: "var(--fontFamily3)",
                        pos: "relative",
                        style: {
                          textOverflow: "ellipsis",
                          width: "100%",
                          whiteSpace: "nowrap",
                          textAlignLast: "center",
                        },
                        children: [
                          parseFloat(a.toString()).toFixed(2),
                          "%",
                          s > 0 &&
                            (0, R.jsx)(m.x, {
                              size: "10px",
                              weight: 700,
                              ff: "var(--fontFamily3)",
                              pos: "absolute",
                              top: "0px",
                              right: "-36px",
                              c: "yellow.8",
                              tt: "uppercase",
                              style: {
                                textShadow: "0 0 8px var(--yellowColor)",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textAlignLast: "center",
                              },
                              children: (0, R.jsx)(w.Z, {
                                id: "boost",
                                defaultMessage: "Boost",
                              }),
                            }),
                        ],
                      }),
                    }),
                    (0, R.jsx)(m.x, {
                      size: "sm",
                      style: {
                        filter: "drop-shadow(var(--yellowColor) 0 0 8px)",
                      },
                      children: (0, R.jsx)(w.Z, {
                        id: "apy",
                        defaultMessage: "APY",
                      }),
                    }),
                  ],
                }),
                (0, R.jsxs)(d.k, {
                  direction: "column",
                  align: "center",
                  w: "100%",
                  children: [
                    (0, R.jsxs)(m.x, {
                      size: "md",
                      weight: 700,
                      ff: "var(--fontFamily3)",
                      tt: "uppercase",
                      style: {
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        width: "100%",
                        whiteSpace: "nowrap",
                        textAlignLast: "center",
                      },
                      children: [
                        r,
                        " ",
                        (0, R.jsx)(w.Z, {
                          id: "jinko",
                          defaultMessage: "Neko",
                        }),
                      ],
                    }),
                    (0, R.jsx)(m.x, {
                      size: "sm",
                      style: {
                        filter: "drop-shadow(var(--yellowColor) 0 0 8px)",
                      },
                      children: (0, R.jsx)(w.Z, {
                        id: "tvl",
                        defaultMessage: "TVL",
                      }),
                    }),
                  ],
                }),
                (0, R.jsx)("div", {}),
              ],
            }),
          });
        },
        H = function (e) {
          var t = e.id,
            n = e.name,
            a = e.staked,
            r = e.apy,
            o = e.tvl,
            c = e.maxStakeCap,
            p = e.nftCount,
            b = e.balance,
            v = e.paymentDetails,
            F = e.getPoolsDetailsFromContract,
            E = e.getUserStakeAmountByPoolFromContract,
            P = e.setIsOverlapLoading,
            J = (0, j.Z)(),
            B = (0, A.zn)().notify,
            Y = (0, q.$)().currentLanguage.locale,
            V = (0, D.Z)().onGetTranslation,
            K = (0, I.Z)(),
            G = K.account,
            $ = K.chainId,
            H = v.value,
            Q = (v.decimals, (0, l.useState)("stake")),
            ee = (0, u.Z)(Q, 2),
            te = ee[0],
            ne = ee[1],
            ae = (0, l.useState)([]),
            re = (0, u.Z)(ae, 2),
            se = re[0],
            ie = re[1],
            oe = (0, l.useState)([]),
            ue = (0, u.Z)(oe, 2),
            le = ue[0],
            ce = ue[1],
            de = (0, l.useState)({ valid_: !1, amount: "0" }),
            pe = (0, u.Z)(de, 2),
            me = pe[0],
            ye = pe[1],
            fe = (0, l.useState)({ isLoading: !1, hash: "0x0", function: "" }),
            xe = (0, u.Z)(fe, 2),
            he = xe[0],
            ge = xe[1],
            ke = (0, l.useState)(
              J.formatMessage({ id: "stake", defaultMessage: "Stake" })
            ),
            be = (0, u.Z)(ke, 2),
            ve = be[0],
            we = be[1],
            je = Z.Ry().shape({
              amount: Z.Vo(function () {
                return Z.Z_()
                  .required("Amount is required")
                  .test("min", "Amount must be greater than 0", function (e) {
                    return parseFloat(e) > 0;
                  })
                  .test(
                    "max",
                    "Amount must be less than balance",
                    function (e) {
                      var t = new C.Z(e),
                        n = new C.Z(b),
                        a = t.comparedTo(n);
                      return -1 === a || 0 === a;
                    }
                  )
                  .test(
                    "is-decimal",
                    "Amount must be a decimal that less than 4 decimal places",
                    function (e) {
                      return /^[0-9]+(\.[0-9]{1,4})?$/.test(e);
                    }
                  );
              }),
            }),
            Te = (0, l.useCallback)(
              (function () {
                var e = (0, i.Z)(
                  (0, s.Z)().mark(function e(t, n, a, r) {
                    var i, o, u;
                    return (0, s.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (i = {
                                  address: n,
                                  abi: a,
                                  functionName: t,
                                  args: r,
                                }),
                                (e.next = 4),
                                (0, S.a4)(i)
                              );
                            case 4:
                              return (
                                (o = e.sent),
                                e.abrupt("return", { data: o, error: !1 })
                              );
                            case 8:
                              return (
                                (e.prev = 8),
                                (e.t0 = e.catch(0)),
                                console.error(e.t0),
                                (u = e.t0.message),
                                e.abrupt("return", { data: u, error: !0 })
                              );
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 8]]
                    );
                  })
                );
                return function (t, n, a, r) {
                  return e.apply(this, arguments);
                };
              })(),
              []
            ),
            Ze = (0, l.useCallback)(
              (function () {
                var e = (0, i.Z)(
                  (0, s.Z)().mark(function e(t, n, a, r) {
                    var i, o, u;
                    return (0, s.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                (0, S.$q)({
                                  address: n,
                                  abi: a,
                                  functionName: t,
                                  args: r,
                                })
                              );
                            case 3:
                              return (i = e.sent), (e.next = 6), (0, S.n9)(i);
                            case 6:
                              return (
                                (o = e.sent),
                                e.abrupt("return", { data: o.hash, error: !1 })
                              );
                            case 10:
                              return (
                                (e.prev = 10),
                                (e.t0 = e.catch(0)),
                                console.error(e.t0),
                                (u = e.t0.message),
                                e.abrupt("return", { data: u, error: !0 })
                              );
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 10]]
                    );
                  })
                );
                return function (t, n, a, r) {
                  return e.apply(this, arguments);
                };
              })(),
              []
            ),
            Me = (0, M.Z)(
              (0, i.Z)(
                (0, s.Z)().mark(function e() {
                  var n, a, r, i, o, u;
                  return (0, s.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = { headers: { accept: "application/json" } }),
                            (e.next = 3),
                            L.Z.get(
                              ""
                                .concat(
                                  "https://bitbull-api.jinkoai.com/",
                                  "api/staking/pool/"
                                )
                                .concat(t, "?address=")
                                .concat(G),
                              n
                            )
                          );
                        case 3:
                          return (a = e.sent), (e.next = 6), a;
                        case 6:
                          if (
                            ((r = e.sent),
                            (i = r.data),
                            (o = r.status),
                            (u = r.statusText),
                            200 === o)
                          ) {
                            e.next = 12;
                            break;
                          }
                          throw new Error(u);
                        case 12:
                          if (!i.error && 200 === i.status) {
                            e.next = 14;
                            break;
                          }
                          throw new Error(i.message);
                        case 14:
                          return e.abrupt("return", i.data);
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              {
                ready: "unstake" === te,
                loadingDelay: 300,
                onSuccess: function (e) {
                  ie(e.staked);
                },
                onError: function (e) {
                  console.error(e);
                },
              }
            ),
            _e = (0, M.Z)(
              (function () {
                var e = (0, i.Z)(
                  (0, s.Z)().mark(function e(t, n) {
                    var a, r, i, o, u, l, c, d;
                    return (0, s.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = { headers: { accept: "application/json" } }),
                              (e.next = 3),
                              L.Z.post(
                                ""
                                  .concat(
                                    "https://bitbull-api.jinkoai.com/",
                                    "api/staking/pool/"
                                  )
                                  .concat(t, "/unstake"),
                                { address: G, user_stake_id: n },
                                a
                              )
                            );
                          case 3:
                            return (r = e.sent), (e.next = 6), r;
                          case 6:
                            if (
                              ((i = e.sent),
                              (o = i.data),
                              (u = i.status),
                              (l = i.statusText),
                              200 === u)
                            ) {
                              e.next = 12;
                              break;
                            }
                            throw new Error(l);
                          case 12:
                            if (!o.error && 200 === o.status) {
                              e.next = 14;
                              break;
                            }
                            throw new Error(o.message);
                          case 14:
                            return (
                              (c = o.data),
                              (e.next = 17),
                              Ze("unstake", (0, O.vp)($), U, [
                                t,
                                c.stake_id,
                                c.capital,
                                c.reward,
                                c.signature,
                              ])
                            );
                          case 17:
                            if (!(d = e.sent).error) {
                              e.next = 20;
                              break;
                            }
                            throw new Error(d.data);
                          case 20:
                            return e.abrupt("return", d.data);
                          case 21:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              {
                manual: !0,
                ready: "unstake" === te,
                onBefore: function () {
                  P({
                    isLoading: !0,
                    title: { id: "loading", defaultMessage: "Loading..." },
                  });
                },
                onSuccess: (function () {
                  var e = (0, i.Z)(
                    (0, s.Z)().mark(function e(t) {
                      return (0, s.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              B(
                                J.formatMessage({
                                  id: "your-unstake-transaction-has-been-broadcasted",
                                  defaultMessage:
                                    "Your unstake transaction has been broadcasted. Please wait for the transaction to be confirmed in the network.",
                                }),
                                "success"
                              ),
                                ge({
                                  isLoading: !0,
                                  hash: t,
                                  function: "unstake",
                                });
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
                onError: function (e) {
                  console.error(e),
                    "User rejected request" === e.message
                      ? B(V(e.message), "error")
                      : B(
                          J.formatMessage({
                            id: "unbale-to-stake-at-the-moment",
                            defaultMessage:
                              "Unbale to stake at the moment. if you have perform unstake operation, please wait for the transaction to be confirmed and finalized in the network",
                          }),
                          "error"
                        );
                },
                onFinally: function () {
                  P({ isLoading: !1, title: { id: "", defaultMessage: "" } });
                },
              }
            ),
            Se = (0, M.Z)(
              (0, i.Z)(
                (0, s.Z)().mark(function e() {
                  var n;
                  return (0, s.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Te("getUserPoolClaimList", (0, O.vp)($), U, [t, G])
                          );
                        case 2:
                          if (!(n = e.sent).error && 0 !== n.data.status) {
                            e.next = 5;
                            break;
                          }
                          throw new Error(n.data);
                        case 5:
                          return e.abrupt("return", n.data);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              {
                ready: "claim" === te,
                loadingDelay: 300,
                onSuccess: function (e) {
                  ce(e);
                },
                onError: function (e) {
                  console.error(e);
                },
              }
            ),
            Ce =
              ((0, M.Z)(
                (0, i.Z)(
                  (0, s.Z)().mark(function e() {
                    var n;
                    return (0, s.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              Te("getClaimable", (0, O.vp)($), U, [t, G])
                            );
                          case 2:
                            if (!(n = e.sent).error && 0 !== n.data.status) {
                              e.next = 5;
                              break;
                            }
                            throw new Error(n.data);
                          case 5:
                            return e.abrupt("return", n.data);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
                {
                  pollingInterval: 6e4,
                  ready: "claim" === te,
                  loadingDelay: 300,
                  onSuccess: function (e) {
                    var t = new C.Z(e.toString()).isGreaterThan(0);
                    ye({ valid_: t, amount: (0, N.NJ)(e.toString(), 18) });
                  },
                  onError: function (e) {
                    console.error(e);
                  },
                }
              ),
              (0, M.Z)(
                (0, i.Z)(
                  (0, s.Z)().mark(function e() {
                    var n;
                    return (0, s.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), Ze("claim", (0, O.vp)($), U, [t])
                            );
                          case 2:
                            if (!(n = e.sent).error) {
                              e.next = 5;
                              break;
                            }
                            throw new Error(n.data);
                          case 5:
                            return e.abrupt("return", n.data);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
                {
                  manual: !0,
                  ready: "claim" === te,
                  onBefore: function () {
                    P({
                      isLoading: !0,
                      title: { id: "loading", defaultMessage: "Loading..." },
                    });
                  },
                  onSuccess: function (e) {
                    B(
                      J.formatMessage({
                        id: "your-claim-transaction-has-been-broadcasted",
                        defaultMessage:
                          "Your claim transaction has been broadcasted. Please wait for the transaction to be confirmed in the network.",
                      }),
                      "success"
                    ),
                      ge({ isLoading: !0, hash: e, function: "claim" });
                  },
                  onError: function (e) {
                    console.error(e), B(V(e.message), "error");
                  },
                  onFinally: function () {
                    P({ isLoading: !1, title: { id: "", defaultMessage: "" } });
                  },
                }
              ));
          (0, M.Z)(
            (0, i.Z)(
              (0, s.Z)().mark(function e() {
                return (0, s.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), (0, S.Mn)({ hash: he.hash });
                      case 2:
                        if (0 !== e.sent.status) {
                          e.next = 5;
                          break;
                        }
                        throw new Error(
                          J.formatMessage({
                            id: "errorMsgGeneral",
                            defaultMessage:
                              "Please try again. Confirm the transaction and make sure you are paying enough gas!",
                          })
                        );
                      case 5:
                        (e.t0 = he.function),
                          (e.next =
                            "approve" === e.t0
                              ? 8
                              : "stake" === e.t0
                              ? 10
                              : "unstake" === e.t0
                              ? 14
                              : "claim" === e.t0
                              ? 18
                              : 22);
                        break;
                      case 8:
                        return (
                          B(
                            J.formatMessage({
                              id: "you-have-successfully-approved-the-transaction",
                              defaultMessage:
                                "You have successfully approved the transaction",
                            }),
                            "success"
                          ),
                          e.abrupt("break", 23)
                        );
                      case 10:
                        return (
                          B(
                            J.formatMessage({
                              id: "you-have-successfully-staked",
                              defaultMessage: "You have successfully staked.",
                            }),
                            "success"
                          ),
                          F.run(),
                          E.run(),
                          e.abrupt("break", 23)
                        );
                      case 14:
                        return (
                          B(
                            J.formatMessage({
                              id: "you-have-successfully-unstaked",
                              defaultMessage: "You have successfully unstaked.",
                            }),
                            "success"
                          ),
                          Me.run(),
                          Se.run(),
                          e.abrupt("break", 23)
                        );
                      case 18:
                        return (
                          B(
                            J.formatMessage({
                              id: "you-have-successfully-claimed",
                              defaultMessage: "You have successfully claimed.",
                            }),
                            "success"
                          ),
                          Me.run(),
                          Se.run(),
                          e.abrupt("break", 23)
                        );
                      case 22:
                        return e.abrupt("break", 23);
                      case 23:
                        ge({ isLoading: !1, hash: "0x0", function: "" }),
                          Le(W(Ee.values.amount));
                      case 25:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            {
              ready: he.isLoading && "0x0" !== he.hash,
              onError: function (e) {
                console.error("error"), B(V(e.message), "error");
              },
            }
          );
          var Fe = (0, l.useMemo)(
              function () {
                return (
                  he.isLoading &&
                  "0x0" !== he.hash &&
                  ("stake" === he.function || "approve" === he.function)
                );
              },
              [he]
            ),
            Le = (0, l.useCallback)(
              (function () {
                var e = (0, i.Z)(
                  (0, s.Z)().mark(function e(t) {
                    var n, a, r, i;
                    return (0, s.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              Te("allowance", H, z, [G, (0, O.vp)($)])
                            );
                          case 2:
                            if (!(n = e.sent).error && 0 !== n.data.status) {
                              e.next = 5;
                              break;
                            }
                            throw new Error(n.data);
                          case 5:
                            (a = n.data.toString()),
                              (r = new C.Z(a)),
                              (i = new C.Z(t)),
                              r.isLessThan(i) || r.isEqualTo(0)
                                ? we(
                                    J.formatMessage({
                                      id: "approve",
                                      defaultMessage: "Approve",
                                    })
                                  )
                                : we(
                                    J.formatMessage({
                                      id: "stake",
                                      defaultMessage: "Stake",
                                    })
                                  );
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [G, $, Te, J, H]
            ),
            Ee = (0, T.TA)({
              initialValues: { amount: "0" },
              validationSchema: je,
              validateOnChange: !0,
              onSubmit: (function () {
                var e = (0, i.Z)(
                  (0, s.Z)().mark(function e(n, a) {
                    var r, i, o, u, l, c, d;
                    return (0, s.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = a.resetForm),
                                (e.prev = 1),
                                P({
                                  isLoading: !0,
                                  title: {
                                    id: "loading",
                                    defaultMessage: "Loading...",
                                  },
                                }),
                                B(
                                  J.formatMessage({
                                    id: "stake-in-progress",
                                    defaultMessage:
                                      "Staking in progress, please wait...",
                                  }),
                                  "info"
                                ),
                                (i = W(n.amount)),
                                (e.next = 7),
                                Te("allowance", H, z, [G, (0, O.vp)($)])
                              );
                            case 7:
                              if (!(o = e.sent).error && 0 !== o.data.status) {
                                e.next = 10;
                                break;
                              }
                              throw new Error(o.data);
                            case 10:
                              if (
                                ((u = (0, N.NJ)(new C.Z(o.data.toString()), 0)),
                                !(parseFloat(u) < parseFloat(i)))
                              ) {
                                e.next = 22;
                                break;
                              }
                              return (
                                B(
                                  J.formatMessage({
                                    id: "kindly-allows-us-to-spend-your",
                                    defaultMessage:
                                      "Kindly authorize the use of tokens to enable seamless interactions",
                                  }),
                                  "info"
                                ),
                                (e.next = 15),
                                Ze("approve", H, z, [(0, O.vp)($), i])
                              );
                            case 15:
                              if (!(l = e.sent).error) {
                                e.next = 18;
                                break;
                              }
                              throw new Error(l.data);
                            case 18:
                              return (
                                B(
                                  J.formatMessage({
                                    id: "your-approved-transaction-has-been-broadcasted",
                                    defaultMessage:
                                      "Your approved transaction has been broadcasted. Once the transaction is confirmed, you may proceed to stake.",
                                  }),
                                  "success"
                                ),
                                ge({
                                  isLoading: !0,
                                  hash: l.data,
                                  function: "approve",
                                }),
                                P({
                                  isLoading: !1,
                                  title: { id: "", defaultMessage: "" },
                                }),
                                e.abrupt("return")
                              );
                            case 22:
                              return (
                                B(
                                  J.formatMessage({
                                    id: "please-confirm-the-transaction-for-staking",
                                    defaultMessage:
                                      "Please confirm the transaction for staking",
                                  }),
                                  "info"
                                ),
                                (e.next = 25),
                                Ze("stake", (0, O.vp)($), U, [t, i])
                              );
                            case 25:
                              if (!(c = e.sent).error) {
                                e.next = 28;
                                break;
                              }
                              throw new Error(c.data);
                            case 28:
                              return (
                                B(
                                  J.formatMessage({
                                    id: "your-staking-transaction-has-been-broadcasted",
                                    defaultMessage:
                                      "Your staking transaction has been broadcasted. Please wait for the transaction to be confirmed in the network.",
                                  }),
                                  "success"
                                ),
                                r(),
                                P({
                                  isLoading: !1,
                                  title: { id: "", defaultMessage: "" },
                                }),
                                ge({
                                  isLoading: !0,
                                  hash: c.data,
                                  function: "stake",
                                }),
                                e.abrupt("return")
                              );
                            case 35:
                              (e.prev = 35),
                                (e.t0 = e.catch(1)),
                                (d = e.t0.message),
                                console.error(e.t0),
                                B(V(d), "error"),
                                P({
                                  isLoading: !1,
                                  title: { id: "", defaultMessage: "" },
                                });
                            case 41:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 35]]
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            }),
            Ae = (0, _.Z)(Ee.values.amount, { wait: 800 });
          (0, l.useEffect)(
            function () {
              Ae && Le(W(Ae));
            },
            [Ae, Le]
          );
          var Pe = se.map(function (e) {
              return (0, R.jsxs)(
                "tr",
                {
                  "aria-label": "".concat(e.stake_timestamp),
                  children: [
                    (0, R.jsx)("td", {
                      children: new Date(
                        1e3 * e.stake_timestamp
                      ).toLocaleDateString(Y, {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                      }),
                    }),
                    (0, R.jsx)("td", {
                      children: e.capital
                        ? parseFloat(e.capital).toFixed(4)
                        : 0,
                    }),
                    (0, R.jsx)("td", {
                      children: e.current_reward
                        ? e.current_reward.toFixed(4)
                        : 0,
                    }),
                    (0, R.jsx)("td", {
                      children:
                        0 === t
                          ? new Date().toLocaleDateString(Y, {
                              year: "numeric",
                              month: "numeric",
                              day: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                            })
                          : new Date(1e3 * e.can_unstake_at).toLocaleDateString(
                              Y,
                              {
                                year: "numeric",
                                month: "numeric",
                                day: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                              }
                            ),
                    }),
                    (0, R.jsx)("td", {
                      children: (0, R.jsx)(y.z, {
                        variant: "text",
                        disabled: !e.can_unstake,
                        onClick: function () {
                          _e.run(t, e.user_stake_id);
                        },
                        children: (0, R.jsx)(w.Z, {
                          id: "unstake",
                          defaultMessage: "Unstake",
                        }),
                      }),
                    }),
                  ],
                },
                e.stake_timestamp
              );
            }),
            De = le.map(function (e) {
              return (0,
              R.jsxs)("tr", { children: [(0, R.jsx)("td", { children: new Date(1e3 * e[0]).toLocaleDateString(Y, { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric" }) }), (0, R.jsx)("td", { children: (0, N.NJ)(e[1].toString(), 18, 4) })] });
            });
          return (0, R.jsxs)(
            f.U.Item,
            {
              value: t.toString(),
              children: [
                (0, R.jsx)(f.U.Control, {
                  children: (0, R.jsx)(X, {
                    id: t,
                    name: n,
                    staked: a,
                    apy: r,
                    tvl: o,
                    maxStakeCap: c,
                    nftCount: p,
                  }),
                }),
                (0, R.jsx)(f.U.Panel, {
                  children: (0, R.jsxs)(x.m, {
                    variant: "pills",
                    value: te,
                    onTabChange: ne,
                    children: [
                      (0, R.jsxs)(x.m.List, {
                        grow: !0,
                        children: [
                          (0, R.jsx)(x.m.Tab, {
                            value: "stake",
                            children: (0, R.jsx)(w.Z, {
                              id: "stake",
                              defaultMessage: "Stake",
                            }),
                          }),
                          (0, R.jsx)(x.m.Tab, {
                            value: "unstake",
                            children: (0, R.jsx)(w.Z, {
                              id: "unstake",
                              defaultMessage: "Unstake",
                            }),
                          }),
                          (0, R.jsx)(x.m.Tab, {
                            value: "claim",
                            children: (0, R.jsx)(w.Z, {
                              id: "claim",
                              defaultMessage: "Claim",
                            }),
                          }),
                        ],
                      }),
                      (0, R.jsx)(x.m.Panel, {
                        value: "stake",
                        pt: "20px",
                        children: (0, R.jsx)("form", {
                          onSubmit: Ee.handleSubmit,
                          autoComplete: "off",
                          style: {
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          },
                          children: (0, R.jsxs)(d.k, {
                            direction: "column",
                            gap: "20px",
                            maw: "625px",
                            w: "100%",
                            children: [
                              (0, R.jsxs)(d.k, {
                                direction: "column",
                                align: "center",
                                gap: "10px",
                                children: [
                                  (0, R.jsx)(m.x, {
                                    children: (0, R.jsx)(w.Z, {
                                      id: "disclaimer-stake",
                                      defaultMessage:
                                        "Disclaimer: you can claim your reward after unstaking for 7 days.",
                                    }),
                                  }),
                                  (0, R.jsx)(m.x, {
                                    children: (0, R.jsx)(w.Z, {
                                      id: "max-stake-cap-jinko",
                                      defaultMessage:
                                        "Max Stake Cap: {maxStakeCap} JINKO",
                                      values: { maxStakeCap: c },
                                    }),
                                  }),
                                  (0, R.jsxs)(d.k, {
                                    direction: "row",
                                    justify: "space-between",
                                    w: "100%",
                                    children: [
                                      (0, R.jsx)(m.x, {
                                        color: "yellow.8",
                                        children: (0, R.jsx)(w.Z, {
                                          id: "amount-jinko",
                                          defaultMessage: "Amount (JINKO)",
                                        }),
                                      }),
                                      (0, R.jsx)(m.x, {
                                        color: "yellow.8",
                                        children: (0, R.jsx)(w.Z, {
                                          id: "balance-staking",
                                          defaultMessage: "Balance: {balance}",
                                          values: { balance: b },
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, R.jsx)(h.I.Wrapper, {
                                    variant: "studio",
                                    error: Ee.errors.amount,
                                    children: (0, R.jsx)(h.I, {
                                      variant: "studio",
                                      required: !0,
                                      name: "amount",
                                      placeholder: J.formatMessage({
                                        id: "enter-amount",
                                        defaultMessage: "Enter Amount",
                                      }),
                                      onChange: (function () {
                                        var e = (0, i.Z)(
                                          (0, s.Z)().mark(function e(t) {
                                            return (0, s.Z)().wrap(function (
                                              e
                                            ) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    Ee.setFieldValue(
                                                      "amount",
                                                      t.target.value
                                                    );
                                                  case 1:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            },
                                            e);
                                          })
                                        );
                                        return function (t) {
                                          return e.apply(this, arguments);
                                        };
                                      })(),
                                      value: Ee.values.amount,
                                      defaultValue: Ee.initialValues.amount,
                                      type: "number",
                                      error: Ee.errors.amount,
                                      rightSection: (0, R.jsx)(y.z, {
                                        variant: "iconWithTransparentBg",
                                        uppercase: !0,
                                        onClick: function () {
                                          Ee.setFieldValue(
                                            "amount",
                                            "".concat(
                                              (function (e) {
                                                var t =
                                                    arguments.length > 1 &&
                                                    void 0 !== arguments[1]
                                                      ? arguments[1]
                                                      : 18,
                                                  n = e.split("."),
                                                  a = (0, u.Z)(n, 2),
                                                  r = a[0],
                                                  s = a[1];
                                                if (!s) return parseFloat(e);
                                                if (s.length > t) {
                                                  var i = s.slice(0, t);
                                                  return parseFloat(
                                                    "".concat(r, ".").concat(i)
                                                  );
                                                }
                                                return ""
                                                  .concat(parseFloat(r), ".")
                                                  .concat(s);
                                              })(b, 4)
                                            )
                                          );
                                        },
                                        onMouseUp: function () {
                                          Le(W(b));
                                        },
                                        styles: function (e) {
                                          return {
                                            root: {
                                              color: e.colors.yellow[8],
                                              backgroundColor: "transparent",
                                            },
                                          };
                                        },
                                        children: (0, R.jsx)(w.Z, {
                                          id: "max",
                                          defaultMessage: "Max",
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, R.jsx)(y.z, {
                                variant: "text",
                                type: "submit",
                                uppercase: !0,
                                disabled: Fe,
                                children: Fe
                                  ? (0, R.jsx)(g.a, {
                                      color: "black",
                                      size: "sm",
                                    })
                                  : ve,
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, R.jsx)(x.m.Panel, {
                        value: "unstake",
                        pt: "xs",
                        children: (0, R.jsx)(d.k, {
                          w: "100%",
                          h: "100%",
                          direction: "column",
                          gap: "10px",
                          children: (0, R.jsx)(d.k, {
                            direction: "column",
                            gap: "10px",
                            w: "100%",
                            style: { overflowX: "auto" },
                            children: (0, R.jsxs)(k.i, {
                              variant: "unstake",
                              children: [
                                (0, R.jsx)("thead", {
                                  children: (0, R.jsxs)("tr", {
                                    children: [
                                      (0, R.jsx)("th", {
                                        children: J.formatMessage({
                                          id: "stake-date",
                                          defaultMessage: "Stake Date",
                                        }),
                                      }),
                                      (0, R.jsx)("th", {
                                        children: J.formatMessage({
                                          id: "stake-amount-jinko",
                                          defaultMessage:
                                            "Stake Amount (JINKO)",
                                        }),
                                      }),
                                      (0, R.jsx)("th", {
                                        children: J.formatMessage({
                                          id: "reward-jinko",
                                          defaultMessage: "Reward (JINKO)",
                                        }),
                                      }),
                                      (0, R.jsx)("th", {
                                        children: J.formatMessage({
                                          id: "maturity-date",
                                          defaultMessage: "Maturity Date",
                                        }),
                                      }),
                                      (0, R.jsx)("th", {
                                        children: J.formatMessage({
                                          id: "unstake",
                                          defaultMessage: "Unstake",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                (0, R.jsx)("tbody", {
                                  children: Me.loading
                                    ? (0, R.jsx)("tr", {
                                        children: (0, R.jsx)("td", {
                                          colSpan: 5,
                                          style: { textAlignLast: "center" },
                                          children: (0, R.jsx)(g.a, {}),
                                        }),
                                      })
                                    : se.length > 0
                                    ? Pe
                                    : (0, R.jsx)("tr", {
                                        children: (0, R.jsx)("td", {
                                          colSpan: 5,
                                          style: { textAlignLast: "center" },
                                          children: (0, R.jsx)(m.x, {
                                            children: (0, R.jsx)(w.Z, {
                                              id: "no-stake-records",
                                              defaultMessage:
                                                "No stake records",
                                            }),
                                          }),
                                        }),
                                      }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                      (0, R.jsx)(x.m.Panel, {
                        value: "claim",
                        pt: "xs",
                        children: (0, R.jsxs)(d.k, {
                          w: "100%",
                          h: "100%",
                          direction: "column",
                          gap: "10px",
                          children: [
                            (0, R.jsx)(d.k, {
                              direction: "column",
                              gap: "10px",
                              w: "100%",
                              style: { overflowX: "auto" },
                              children: (0, R.jsxs)(k.i, {
                                variant: "unstake",
                                style: { textAlignLast: "center" },
                                children: [
                                  (0, R.jsx)("thead", {
                                    children: (0, R.jsxs)("tr", {
                                      children: [
                                        (0, R.jsx)("th", {
                                          children: J.formatMessage({
                                            id: "unlock-date",
                                            defaultMessage: "Unlock Date",
                                          }),
                                        }),
                                        (0, R.jsx)("th", {
                                          children: J.formatMessage({
                                            id: "amount-jinko",
                                            defaultMessage: "Amount (JINKO)",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, R.jsx)("tbody", {
                                    children: Se.loading
                                      ? (0, R.jsx)("tr", {
                                          children: (0, R.jsx)("td", {
                                            colSpan: 2,
                                            style: { textAlignLast: "center" },
                                            children: (0, R.jsx)(g.a, {}),
                                          }),
                                        })
                                      : De.length > 0
                                      ? De
                                      : (0, R.jsx)("tr", {
                                          children: (0, R.jsx)("td", {
                                            colSpan: 2,
                                            style: { textAlignLast: "center" },
                                            children: (0, R.jsx)(m.x, {
                                              children: (0, R.jsx)(w.Z, {
                                                id: "no-claim-records",
                                                defaultMessage:
                                                  "No claim records",
                                              }),
                                            }),
                                          }),
                                        }),
                                  }),
                                ],
                              }),
                            }),
                            (0, R.jsx)(y.z, {
                              variant: "text",
                              type: "submit",
                              uppercase: !0,
                              disabled: !me.valid_,
                              onClick: function () {
                                Ce.run();
                              },
                              children: (0, R.jsx)(w.Z, {
                                id: "claim-(amount)-jinko",
                                defaultMessage: "Claim ({amount} JINKO)",
                                values: {
                                  amount: parseFloat(me.amount).toFixed(4),
                                },
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            },
            t
          );
        },
        Q = function () {
          var e = (0, j.Z)(),
            t = (0, I.Z)(),
            n = t.account,
            a = t.chainId,
            o = (0, P.q)().content,
            c = (0, l.useContext)(J.C).jinkoBalance,
            p = (0, l.useState)({
              isLoading: !1,
              title: { id: "", defaultMessage: "" },
            }),
            y = (0, u.Z)(p, 2),
            x = y[0],
            h = y[1],
            g = (0, l.useState)([]),
            k = (0, u.Z)(g, 2),
            T = k[0],
            Z = k[1],
            _ = (0, l.useCallback)(
              function () {
                return (0, O.BP)(a).filter(function (e) {
                  return "Neko" === e.symbol;
                })[0];
              },
              [a]
            ),
            S = (0, G.t)().onGetListOfNfts,
            C = (0, l.useState)([]),
            F = (0, u.Z)(C, 2),
            A = F[0],
            D = F[1],
            z =
              ((0, M.Z)(
                function () {
                  return S(o.token, o.walletAddress);
                },
                {
                  ready:
                    void 0 !== (null === o || void 0 === o ? void 0 : o.token),
                  onSuccess: function (e) {
                    try {
                      if (e.error || e.data.error) throw new Error(e.message);
                      D(e.data.data.nfts);
                    } catch (t) {
                      console.error(t);
                    }
                  },
                  onError: function (e) {
                    D([]);
                  },
                }
              ),
              (0, M.Z)(
                (0, i.Z)(
                  (0, s.Z)().mark(function e() {
                    var t, n, a, r, i, o;
                    return (0, s.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = { headers: { accept: "application/json" } }),
                              (e.next = 3),
                              L.Z.get(
                                "".concat(
                                  "https://bitbull-api.jinkoai.com/",
                                  "api/staking/pools"
                                ),
                                t
                              )
                            );
                          case 3:
                            return (n = e.sent), (e.next = 6), n;
                          case 6:
                            if (
                              ((a = e.sent),
                              (r = a.data),
                              (i = a.status),
                              (o = a.statusText),
                              200 === i)
                            ) {
                              e.next = 12;
                              break;
                            }
                            throw new Error(o);
                          case 12:
                            if (!r.error && 200 === r.status) {
                              e.next = 14;
                              break;
                            }
                            throw new Error(r.message);
                          case 14:
                            return e.abrupt("return", r.data);
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
                {
                  ready:
                    void 0 !== (null === o || void 0 === o ? void 0 : o.token),
                  onSuccess: function (e) {
                    Z(e);
                  },
                  onError: function (e) {
                    console.error(e);
                  },
                }
              )),
            q = (0, M.Z)(
              (0, i.Z)(
                (0, s.Z)().mark(function e() {
                  var t, n;
                  return (0, s.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = T.map(function (e) {
                              return {
                                address: (0, O.vp)(a),
                                name: "pools",
                                params: [e.pool_id],
                              };
                            })),
                            (e.next = 3),
                            K(U, t, a)
                          );
                        case 3:
                          return (n = e.sent), e.abrupt("return", n);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              {
                pollingInterval: 6e4,
                ready:
                  void 0 !== (null === o || void 0 === o ? void 0 : o.token) &&
                  T.length > 0,
                onSuccess: function (e) {
                  var t = T.map(function (t, n) {
                    return (0,
                    r.Z)((0, r.Z)({}, t), {}, { tvl: (0, N.U4)(e[n].total_staked.toString(), 18).toFixed(4), maxStakeCap: new Intl.NumberFormat().format((0, N.U4)(e[n].max_stake_cap.toString(), 18).toNumber()) });
                  });
                  Z(t);
                },
                onError: function (e) {
                  console.error(e);
                },
              }
            ),
            Y = (0, M.Z)(
              (0, i.Z)(
                (0, s.Z)().mark(function e() {
                  var t, r;
                  return (0, s.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = T.map(function (e) {
                              return {
                                address: (0, O.vp)(a),
                                name: "users",
                                params: [n, e.pool_id],
                              };
                            })),
                            (e.next = 3),
                            K(U, t, a)
                          );
                        case 3:
                          return (r = e.sent), e.abrupt("return", r);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              {
                pollingInterval: 6e4,
                ready:
                  void 0 !== (null === o || void 0 === o ? void 0 : o.token) &&
                  T.length > 0,
                onSuccess: function (e) {
                  var t = T.map(function (t, n) {
                    return (0,
                    r.Z)((0, r.Z)({}, t), {}, { staked: (0, N.U4)(e[n].staked_amount.toString(), 18).toString() });
                  });
                  Z(t);
                },
                onError: function (e) {
                  console.error(e);
                },
              }
            );
          if (z.loading || 0 === T.length)
            return (0, R.jsx)(B.Z, {
              children: (0, R.jsx)(m.x, {
                size: "clamp(1.3rem,2vw,1.8rem)",
                color: "#FFFFFF",
                weight: "bold",
                children: (0, R.jsx)(w.Z, {
                  id: "loading",
                  defaultMessage: "Loading...",
                  values: { br: (0, R.jsx)("br", {}) },
                }),
              }),
            });
          var V =
            T.length > 0 &&
            T.map(function (t) {
              return (0, R.jsx)(H, {
                id: t.pool_id,
                name: (function () {
                  switch (t.pool_id) {
                    case 0:
                      return e.formatMessage({
                        id: "flexible",
                        defaultMessage: "Flexible",
                      });
                    case 1:
                      return e.formatMessage({
                        id: "30-days-lock",
                        defaultMessage: "30 Days Lock",
                      });
                    case 2:
                      return e.formatMessage({
                        id: "180-days-lock",
                        defaultMessage: "180 Days Lock",
                      });
                    case 3:
                      return e.formatMessage({
                        id: "360-days-lock",
                        defaultMessage: "360 Days Lock",
                      });
                    default:
                      return e.formatMessage(
                        { id: "pool-unknown", defaultMessage: "Pool {id}" },
                        { id: t.pool_id }
                      );
                  }
                })(),
                staked: t.staked || "0",
                apy: t.reward_apy,
                tvl: t.tvl || "0",
                maxStakeCap: t.maxStakeCap || "0",
                nftCount: A.length,
                balance: (0, N.NJ)(c.toString(), _().decimals[a]),
                paymentDetails: _(),
                getPoolsDetailsFromContract: q,
                getUserStakeAmountByPoolFromContract: Y,
                setIsOverlapLoading: h,
              });
            });
          return (0, R.jsxs)(R.Fragment, {
            children: [
              (0, R.jsx)(E.Z, {
                children: (0, R.jsx)(b.W, {
                  size: "md",
                  pb: "30px",
                  children: (0, R.jsxs)(d.k, {
                    direction: "column",
                    justify: "center",
                    align: "center",
                    children: [
                      (0, R.jsx)(m.x, {
                        align: "center",
                        size: "clamp(2.8rem, 1vw, 3.125rem)",
                        weight: 900,
                        color: "var(--yellowColor)",
                        transform: "uppercase",
                        lh: 1,
                        children: (0, R.jsx)(w.Z, {
                          id: "stake-jinko-token",
                          defaultMessage: "Stake Neko Token",
                        }),
                      }),
                      (0, R.jsx)(v.T, { h: "md" }),
                      (0, R.jsx)(f.U, {
                        chevronPosition: "right",
                        variant: "separated",
                        style: { width: "100%" },
                        children: V,
                      }),
                    ],
                  }),
                }),
              }),
              x.isLoading &&
                (0, R.jsx)(B.Z, {
                  children: (0, R.jsx)(m.x, {
                    size: "clamp(1.3rem,2vw,1.8rem)",
                    color: "#FFFFFF",
                    weight: "bold",
                    children:
                      x.title.id &&
                      (0, R.jsx)(
                        w.Z,
                        (0, r.Z)(
                          (0, r.Z)({}, x.title),
                          {},
                          { values: { br: (0, R.jsx)("br", {}) } }
                        )
                      ),
                  }),
                }),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=4567.61beb999.chunk.js.map
