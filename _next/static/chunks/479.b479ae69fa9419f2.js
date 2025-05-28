(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [479],
  {
    895: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Animation = void 0);
      let n = r(9649),
        i = r(5329),
        a =
          n.glob.performance && n.glob.performance.now
            ? function () {
                return n.glob.performance.now();
              }
            : function () {
                return new Date().getTime();
              };
      class o {
        constructor(t, e) {
          (this.id = o.animIdCounter++),
            (this.frame = {
              time: 0,
              timeDiff: 0,
              lastTime: a(),
              frameRate: 0,
            }),
            (this.func = t),
            this.setLayers(e);
        }
        setLayers(t) {
          let e = [];
          return t && (e = Array.isArray(t) ? t : [t]), (this.layers = e), this;
        }
        getLayers() {
          return this.layers;
        }
        addLayer(t) {
          let e = this.layers,
            r = e.length;
          for (let n = 0; n < r; n++) if (e[n]._id === t._id) return !1;
          return this.layers.push(t), !0;
        }
        isRunning() {
          let t = o.animations,
            e = t.length;
          for (let r = 0; r < e; r++) if (t[r].id === this.id) return !0;
          return !1;
        }
        start() {
          return (
            this.stop(),
            (this.frame.timeDiff = 0),
            (this.frame.lastTime = a()),
            o._addAnimation(this),
            this
          );
        }
        stop() {
          return o._removeAnimation(this), this;
        }
        _updateFrameObject(t) {
          (this.frame.timeDiff = t - this.frame.lastTime),
            (this.frame.lastTime = t),
            (this.frame.time += this.frame.timeDiff),
            (this.frame.frameRate = 1e3 / this.frame.timeDiff);
        }
        static _addAnimation(t) {
          this.animations.push(t), this._handleAnimation();
        }
        static _removeAnimation(t) {
          let e = t.id,
            r = this.animations,
            n = r.length;
          for (let t = 0; t < n; t++)
            if (r[t].id === e) {
              this.animations.splice(t, 1);
              break;
            }
        }
        static _runFrames() {
          let t = {},
            e = this.animations;
          for (let r = 0; r < e.length; r++) {
            let n = e[r],
              i = n.layers,
              o = n.func;
            n._updateFrameObject(a());
            let s = i.length;
            if (!o || !1 !== o.call(n, n.frame))
              for (let e = 0; e < s; e++) {
                let r = i[e];
                void 0 !== r._id && (t[r._id] = r);
              }
          }
          for (let e in t) t.hasOwnProperty(e) && t[e].batchDraw();
        }
        static _animationLoop() {
          o.animations.length
            ? (o._runFrames(), i.Util.requestAnimFrame(o._animationLoop))
            : (o.animRunning = !1);
        }
        static _handleAnimation() {
          this.animRunning ||
            ((this.animRunning = !0),
            i.Util.requestAnimFrame(this._animationLoop));
        }
      }
      (e.Animation = o),
        (o.animations = []),
        (o.animIdCounter = 0),
        (o.animRunning = !1);
    },
    6962: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.t2length =
          e.getQuadraticArcLength =
          e.getCubicArcLength =
          e.binomialCoefficients =
          e.cValues =
          e.tValues =
            void 0),
        (e.tValues = [
          [],
          [],
          [-0.5773502691896257, 0.5773502691896257],
          [0, -0.7745966692414834, 0.7745966692414834],
          [
            -0.33998104358485626, 0.33998104358485626, -0.8611363115940526,
            0.8611363115940526,
          ],
          [
            0, -0.5384693101056831, 0.5384693101056831, -0.906179845938664,
            0.906179845938664,
          ],
          [
            0.6612093864662645, -0.6612093864662645, -0.2386191860831969,
            0.2386191860831969, -0.932469514203152, 0.932469514203152,
          ],
          [
            0, 0.4058451513773972, -0.4058451513773972, -0.7415311855993945,
            0.7415311855993945, -0.9491079123427585, 0.9491079123427585,
          ],
          [
            -0.1834346424956498, 0.1834346424956498, -0.525532409916329,
            0.525532409916329, -0.7966664774136267, 0.7966664774136267,
            -0.9602898564975363, 0.9602898564975363,
          ],
          [
            0, -0.8360311073266358, 0.8360311073266358, -0.9681602395076261,
            0.9681602395076261, -0.3242534234038089, 0.3242534234038089,
            -0.6133714327005904, 0.6133714327005904,
          ],
          [
            -0.14887433898163122, 0.14887433898163122, -0.4333953941292472,
            0.4333953941292472, -0.6794095682990244, 0.6794095682990244,
            -0.8650633666889845, 0.8650633666889845, -0.9739065285171717,
            0.9739065285171717,
          ],
          [
            0, -0.26954315595234496, 0.26954315595234496, -0.5190961292068118,
            0.5190961292068118, -0.7301520055740494, 0.7301520055740494,
            -0.8870625997680953, 0.8870625997680953, -0.978228658146057,
            0.978228658146057,
          ],
          [
            -0.1252334085114689, 0.1252334085114689, -0.3678314989981802,
            0.3678314989981802, -0.5873179542866175, 0.5873179542866175,
            -0.7699026741943047, 0.7699026741943047, -0.9041172563704749,
            0.9041172563704749, -0.9815606342467192, 0.9815606342467192,
          ],
          [
            0, -0.2304583159551348, 0.2304583159551348, -0.44849275103644687,
            0.44849275103644687, -0.6423493394403402, 0.6423493394403402,
            -0.8015780907333099, 0.8015780907333099, -0.9175983992229779,
            0.9175983992229779, -0.9841830547185881, 0.9841830547185881,
          ],
          [
            -0.10805494870734367, 0.10805494870734367, -0.31911236892788974,
            0.31911236892788974, -0.5152486363581541, 0.5152486363581541,
            -0.6872929048116855, 0.6872929048116855, -0.827201315069765,
            0.827201315069765, -0.9284348836635735, 0.9284348836635735,
            -0.9862838086968123, 0.9862838086968123,
          ],
          [
            0, -0.20119409399743451, 0.20119409399743451, -0.3941513470775634,
            0.3941513470775634, -0.5709721726085388, 0.5709721726085388,
            -0.7244177313601701, 0.7244177313601701, -0.8482065834104272,
            0.8482065834104272, -0.937273392400706, 0.937273392400706,
            -0.9879925180204854, 0.9879925180204854,
          ],
          [
            -0.09501250983763744, 0.09501250983763744, -0.2816035507792589,
            0.2816035507792589, -0.45801677765722737, 0.45801677765722737,
            -0.6178762444026438, 0.6178762444026438, -0.755404408355003,
            0.755404408355003, -0.8656312023878318, 0.8656312023878318,
            -0.9445750230732326, 0.9445750230732326, -0.9894009349916499,
            0.9894009349916499,
          ],
          [
            0, -0.17848418149584785, 0.17848418149584785, -0.3512317634538763,
            0.3512317634538763, -0.5126905370864769, 0.5126905370864769,
            -0.6576711592166907, 0.6576711592166907, -0.7815140038968014,
            0.7815140038968014, -0.8802391537269859, 0.8802391537269859,
            -0.9506755217687678, 0.9506755217687678, -0.9905754753144174,
            0.9905754753144174,
          ],
          [
            -0.0847750130417353, 0.0847750130417353, -0.2518862256915055,
            0.2518862256915055, -0.41175116146284263, 0.41175116146284263,
            -0.5597708310739475, 0.5597708310739475, -0.6916870430603532,
            0.6916870430603532, -0.8037049589725231, 0.8037049589725231,
            -0.8926024664975557, 0.8926024664975557, -0.9558239495713977,
            0.9558239495713977, -0.9915651684209309, 0.9915651684209309,
          ],
          [
            0, -0.16035864564022537, 0.16035864564022537, -0.31656409996362983,
            0.31656409996362983, -0.46457074137596094, 0.46457074137596094,
            -0.600545304661681, 0.600545304661681, -0.7209661773352294,
            0.7209661773352294, -0.8227146565371428, 0.8227146565371428,
            -0.9031559036148179, 0.9031559036148179, -0.96020815213483,
            0.96020815213483, -0.9924068438435844, 0.9924068438435844,
          ],
          [
            -0.07652652113349734, 0.07652652113349734, -0.22778585114164507,
            0.22778585114164507, -0.37370608871541955, 0.37370608871541955,
            -0.5108670019508271, 0.5108670019508271, -0.636053680726515,
            0.636053680726515, -0.7463319064601508, 0.7463319064601508,
            -0.8391169718222188, 0.8391169718222188, -0.912234428251326,
            0.912234428251326, -0.9639719272779138, 0.9639719272779138,
            -0.9931285991850949, 0.9931285991850949,
          ],
          [
            0, -0.1455618541608951, 0.1455618541608951, -0.2880213168024011,
            0.2880213168024011, -0.4243421202074388, 0.4243421202074388,
            -0.5516188358872198, 0.5516188358872198, -0.6671388041974123,
            0.6671388041974123, -0.7684399634756779, 0.7684399634756779,
            -0.8533633645833173, 0.8533633645833173, -0.9200993341504008,
            0.9200993341504008, -0.9672268385663063, 0.9672268385663063,
            -0.9937521706203895, 0.9937521706203895,
          ],
          [
            -0.06973927331972223, 0.06973927331972223, -0.20786042668822127,
            0.20786042668822127, -0.34193582089208424, 0.34193582089208424,
            -0.469355837986757, 0.469355837986757, -0.5876404035069116,
            0.5876404035069116, -0.6944872631866827, 0.6944872631866827,
            -0.7878168059792081, 0.7878168059792081, -0.8658125777203002,
            0.8658125777203002, -0.926956772187174, 0.926956772187174,
            -0.9700604978354287, 0.9700604978354287, -0.9942945854823992,
            0.9942945854823992,
          ],
          [
            0, -0.1332568242984661, 0.1332568242984661, -0.26413568097034495,
            0.26413568097034495, -0.3903010380302908, 0.3903010380302908,
            -0.5095014778460075, 0.5095014778460075, -0.6196098757636461,
            0.6196098757636461, -0.7186613631319502, 0.7186613631319502,
            -0.8048884016188399, 0.8048884016188399, -0.8767523582704416,
            0.8767523582704416, -0.9329710868260161, 0.9329710868260161,
            -0.9725424712181152, 0.9725424712181152, -0.9947693349975522,
            0.9947693349975522,
          ],
          [
            -0.06405689286260563, 0.06405689286260563, -0.1911188674736163,
            0.1911188674736163, -0.3150426796961634, 0.3150426796961634,
            -0.4337935076260451, 0.4337935076260451, -0.5454214713888396,
            0.5454214713888396, -0.6480936519369755, 0.6480936519369755,
            -0.7401241915785544, 0.7401241915785544, -0.820001985973903,
            0.820001985973903, -0.8864155270044011, 0.8864155270044011,
            -0.9382745520027328, 0.9382745520027328, -0.9747285559713095,
            0.9747285559713095, -0.9951872199970213, 0.9951872199970213,
          ],
        ]),
        (e.cValues = [
          [],
          [],
          [1, 1],
          [0.8888888888888888, 0.5555555555555556, 0.5555555555555556],
          [
            0.6521451548625461, 0.6521451548625461, 0.34785484513745385,
            0.34785484513745385,
          ],
          [
            0.5688888888888889, 0.47862867049936647, 0.47862867049936647,
            0.23692688505618908, 0.23692688505618908,
          ],
          [
            0.3607615730481386, 0.3607615730481386, 0.46791393457269104,
            0.46791393457269104, 0.17132449237917036, 0.17132449237917036,
          ],
          [
            0.4179591836734694, 0.3818300505051189, 0.3818300505051189,
            0.27970539148927664, 0.27970539148927664, 0.1294849661688697,
            0.1294849661688697,
          ],
          [
            0.362683783378362, 0.362683783378362, 0.31370664587788727,
            0.31370664587788727, 0.22238103445337448, 0.22238103445337448,
            0.10122853629037626, 0.10122853629037626,
          ],
          [
            0.3302393550012598, 0.1806481606948574, 0.1806481606948574,
            0.08127438836157441, 0.08127438836157441, 0.31234707704000286,
            0.31234707704000286, 0.26061069640293544, 0.26061069640293544,
          ],
          [
            0.29552422471475287, 0.29552422471475287, 0.26926671930999635,
            0.26926671930999635, 0.21908636251598204, 0.21908636251598204,
            0.1494513491505806, 0.1494513491505806, 0.06667134430868814,
            0.06667134430868814,
          ],
          [
            0.2729250867779006, 0.26280454451024665, 0.26280454451024665,
            0.23319376459199048, 0.23319376459199048, 0.18629021092773426,
            0.18629021092773426, 0.1255803694649046, 0.1255803694649046,
            0.05566856711617366, 0.05566856711617366,
          ],
          [
            0.24914704581340277, 0.24914704581340277, 0.2334925365383548,
            0.2334925365383548, 0.20316742672306592, 0.20316742672306592,
            0.16007832854334622, 0.16007832854334622, 0.10693932599531843,
            0.10693932599531843, 0.04717533638651183, 0.04717533638651183,
          ],
          [
            0.2325515532308739, 0.22628318026289723, 0.22628318026289723,
            0.2078160475368885, 0.2078160475368885, 0.17814598076194574,
            0.17814598076194574, 0.13887351021978725, 0.13887351021978725,
            0.09212149983772845, 0.09212149983772845, 0.04048400476531588,
            0.04048400476531588,
          ],
          [
            0.2152638534631578, 0.2152638534631578, 0.2051984637212956,
            0.2051984637212956, 0.18553839747793782, 0.18553839747793782,
            0.15720316715819355, 0.15720316715819355, 0.12151857068790319,
            0.12151857068790319, 0.08015808715976021, 0.08015808715976021,
            0.03511946033175186, 0.03511946033175186,
          ],
          [
            0.2025782419255613, 0.19843148532711158, 0.19843148532711158,
            0.1861610000155622, 0.1861610000155622, 0.16626920581699392,
            0.16626920581699392, 0.13957067792615432, 0.13957067792615432,
            0.10715922046717194, 0.10715922046717194, 0.07036604748810812,
            0.07036604748810812, 0.03075324199611727, 0.03075324199611727,
          ],
          [
            0.1894506104550685, 0.1894506104550685, 0.18260341504492358,
            0.18260341504492358, 0.16915651939500254, 0.16915651939500254,
            0.14959598881657674, 0.14959598881657674, 0.12462897125553388,
            0.12462897125553388, 0.09515851168249279, 0.09515851168249279,
            0.062253523938647894, 0.062253523938647894, 0.027152459411754096,
            0.027152459411754096,
          ],
          [
            0.17944647035620653, 0.17656270536699264, 0.17656270536699264,
            0.16800410215645004, 0.16800410215645004, 0.15404576107681028,
            0.15404576107681028, 0.13513636846852548, 0.13513636846852548,
            0.11188384719340397, 0.11188384719340397, 0.08503614831717918,
            0.08503614831717918, 0.0554595293739872, 0.0554595293739872,
            0.02414830286854793, 0.02414830286854793,
          ],
          [
            0.1691423829631436, 0.1691423829631436, 0.16427648374583273,
            0.16427648374583273, 0.15468467512626524, 0.15468467512626524,
            0.14064291467065065, 0.14064291467065065, 0.12255520671147846,
            0.12255520671147846, 0.10094204410628717, 0.10094204410628717,
            0.07642573025488905, 0.07642573025488905, 0.0497145488949698,
            0.0497145488949698, 0.02161601352648331, 0.02161601352648331,
          ],
          [
            0.1610544498487837, 0.15896884339395434, 0.15896884339395434,
            0.15276604206585967, 0.15276604206585967, 0.1426067021736066,
            0.1426067021736066, 0.12875396253933621, 0.12875396253933621,
            0.11156664554733399, 0.11156664554733399, 0.09149002162245,
            0.09149002162245, 0.06904454273764123, 0.06904454273764123,
            0.0448142267656996, 0.0448142267656996, 0.019461788229726478,
            0.019461788229726478,
          ],
          [
            0.15275338713072584, 0.15275338713072584, 0.14917298647260374,
            0.14917298647260374, 0.14209610931838204, 0.14209610931838204,
            0.13168863844917664, 0.13168863844917664, 0.11819453196151841,
            0.11819453196151841, 0.10193011981724044, 0.10193011981724044,
            0.08327674157670475, 0.08327674157670475, 0.06267204833410907,
            0.06267204833410907, 0.04060142980038694, 0.04060142980038694,
            0.017614007139152118, 0.017614007139152118,
          ],
          [
            0.14608113364969041, 0.14452440398997005, 0.14452440398997005,
            0.13988739479107315, 0.13988739479107315, 0.13226893863333747,
            0.13226893863333747, 0.12183141605372853, 0.12183141605372853,
            0.10879729916714838, 0.10879729916714838, 0.09344442345603386,
            0.09344442345603386, 0.0761001136283793, 0.0761001136283793,
            0.057134425426857205, 0.057134425426857205, 0.036953789770852494,
            0.036953789770852494, 0.016017228257774335, 0.016017228257774335,
          ],
          [
            0.13925187285563198, 0.13925187285563198, 0.13654149834601517,
            0.13654149834601517, 0.13117350478706238, 0.13117350478706238,
            0.12325237681051242, 0.12325237681051242, 0.11293229608053922,
            0.11293229608053922, 0.10041414444288096, 0.10041414444288096,
            0.08594160621706773, 0.08594160621706773, 0.06979646842452049,
            0.06979646842452049, 0.052293335152683286, 0.052293335152683286,
            0.03377490158481415, 0.03377490158481415, 0.0146279952982722,
            0.0146279952982722,
          ],
          [
            0.13365457218610619, 0.1324620394046966, 0.1324620394046966,
            0.12890572218808216, 0.12890572218808216, 0.12304908430672953,
            0.12304908430672953, 0.11499664022241136, 0.11499664022241136,
            0.10489209146454141, 0.10489209146454141, 0.09291576606003515,
            0.09291576606003515, 0.07928141177671895, 0.07928141177671895,
            0.06423242140852585, 0.06423242140852585, 0.04803767173108467,
            0.04803767173108467, 0.030988005856979445, 0.030988005856979445,
            0.013411859487141771, 0.013411859487141771,
          ],
          [
            0.12793819534675216, 0.12793819534675216, 0.1258374563468283,
            0.1258374563468283, 0.12167047292780339, 0.12167047292780339,
            0.1155056680537256, 0.1155056680537256, 0.10744427011596563,
            0.10744427011596563, 0.09761865210411388, 0.09761865210411388,
            0.08619016153195327, 0.08619016153195327, 0.0733464814110803,
            0.0733464814110803, 0.05929858491543678, 0.05929858491543678,
            0.04427743881741981, 0.04427743881741981, 0.028531388628933663,
            0.028531388628933663, 0.0123412297999872, 0.0123412297999872,
          ],
        ]),
        (e.binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]),
        (e.getCubicArcLength = (t, n, i) => {
          let a, o, s;
          (a = i / 2), (o = 0);
          for (let i = 0; i < 20; i++)
            (s = a * e.tValues[20][i] + a),
              (o +=
                e.cValues[20][i] *
                (function (t, e, n) {
                  let i = r(1, n, t),
                    a = r(1, n, e);
                  return Math.sqrt(i * i + a * a);
                })(t, n, s));
          return a * o;
        }),
        (e.getQuadraticArcLength = (t, e, r) => {
          void 0 === r && (r = 1);
          let n = t[0] - 2 * t[1] + t[2],
            i = e[0] - 2 * e[1] + e[2],
            a = 2 * t[1] - 2 * t[0],
            o = 2 * e[1] - 2 * e[0],
            s = 4 * (n * n + i * i);
          if (0 === s)
            return (
              r * Math.sqrt(Math.pow(t[2] - t[0], 2) + Math.pow(e[2] - e[0], 2))
            );
          let l = (4 * (n * a + i * o)) / (2 * s),
            h = r + l,
            u = (a * a + o * o) / s - l * l,
            d = h * h + u > 0 ? Math.sqrt(h * h + u) : 0,
            c = l * l + u > 0 ? Math.sqrt(l * l + u) : 0;
          return (
            (Math.sqrt(s) / 2) *
            (h * d -
              l * c +
              (l + Math.sqrt(l * l + u) !== 0
                ? u * Math.log(Math.abs((h + d) / (l + c)))
                : 0))
          );
        });
      let r = (t, n, i) => {
        let a, o;
        let s = i.length - 1;
        if (0 === s) return 0;
        if (0 === t) {
          o = 0;
          for (let t = 0; t <= s; t++)
            o +=
              e.binomialCoefficients[s][t] *
              Math.pow(1 - n, s - t) *
              Math.pow(n, t) *
              i[t];
          return o;
        }
        a = Array(s);
        for (let t = 0; t < s; t++) a[t] = s * (i[t + 1] - i[t]);
        return r(t - 1, n, a);
      };
      e.t2length = (t, e, r) => {
        let n = 1,
          i = t / e,
          a = (t - r(i)) / e,
          o = 0;
        for (; n > 0.001; ) {
          let s = Math.abs(t - r(i + a)) / e;
          if (s < n) (n = s), (i += a);
          else {
            let o = Math.abs(t - r(i - a)) / e;
            o < n ? ((n = o), (i -= a)) : (a /= 2);
          }
          if (++o > 500) break;
        }
        return i;
      };
    },
    7193: function (t, e, r) {
      "use strict";
      var n;
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.HitCanvas = e.SceneCanvas = e.Canvas = void 0);
      let i = r(5329),
        a = r(966),
        o = r(9649),
        s = r(1027),
        l = r(7367);
      class h {
        constructor(t) {
          (this.pixelRatio = 1),
            (this.width = 0),
            (this.height = 0),
            (this.isCache = !1);
          var e =
            (t || {}).pixelRatio ||
            o.Konva.pixelRatio ||
            (function () {
              if (n) return n;
              var t = i.Util.createCanvasElement(),
                e = t.getContext("2d");
              return (
                (n =
                  (o.Konva._global.devicePixelRatio || 1) /
                  (e.webkitBackingStorePixelRatio ||
                    e.mozBackingStorePixelRatio ||
                    e.msBackingStorePixelRatio ||
                    e.oBackingStorePixelRatio ||
                    e.backingStorePixelRatio ||
                    1)),
                i.Util.releaseCanvas(t),
                n
              );
            })();
          (this.pixelRatio = e),
            (this._canvas = i.Util.createCanvasElement()),
            (this._canvas.style.padding = "0"),
            (this._canvas.style.margin = "0"),
            (this._canvas.style.border = "0"),
            (this._canvas.style.background = "transparent"),
            (this._canvas.style.position = "absolute"),
            (this._canvas.style.top = "0"),
            (this._canvas.style.left = "0");
        }
        getContext() {
          return this.context;
        }
        getPixelRatio() {
          return this.pixelRatio;
        }
        setPixelRatio(t) {
          var e = this.pixelRatio;
          (this.pixelRatio = t),
            this.setSize(this.getWidth() / e, this.getHeight() / e);
        }
        setWidth(t) {
          (this.width = this._canvas.width = t * this.pixelRatio),
            (this._canvas.style.width = t + "px");
          var e = this.pixelRatio;
          this.getContext()._context.scale(e, e);
        }
        setHeight(t) {
          (this.height = this._canvas.height = t * this.pixelRatio),
            (this._canvas.style.height = t + "px");
          var e = this.pixelRatio;
          this.getContext()._context.scale(e, e);
        }
        getWidth() {
          return this.width;
        }
        getHeight() {
          return this.height;
        }
        setSize(t, e) {
          this.setWidth(t || 0), this.setHeight(e || 0);
        }
        toDataURL(t, e) {
          try {
            return this._canvas.toDataURL(t, e);
          } catch (t) {
            try {
              return this._canvas.toDataURL();
            } catch (t) {
              return (
                i.Util.error(
                  "Unable to get data URL. " +
                    t.message +
                    " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."
                ),
                ""
              );
            }
          }
        }
      }
      (e.Canvas = h),
        s.Factory.addGetterSetter(
          h,
          "pixelRatio",
          void 0,
          (0, l.getNumberValidator)()
        );
      class u extends h {
        constructor(
          t = {
            width: 0,
            height: 0,
            willReadFrequently: !1,
          }
        ) {
          super(t),
            (this.context = new a.SceneContext(this, {
              willReadFrequently: t.willReadFrequently,
            })),
            this.setSize(t.width, t.height);
        }
      }
      e.SceneCanvas = u;
      class d extends h {
        constructor(
          t = {
            width: 0,
            height: 0,
          }
        ) {
          super(t),
            (this.hitCanvas = !0),
            (this.context = new a.HitContext(this)),
            this.setSize(t.width, t.height);
        }
      }
      e.HitCanvas = d;
    },
    9682: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Container = void 0);
      let n = r(1027),
        i = r(4667),
        a = r(7367);
      class o extends i.Node {
        constructor() {
          super(...arguments), (this.children = []);
        }
        getChildren(t) {
          if (!t) return this.children || [];
          let e = this.children || [];
          var r = [];
          return (
            e.forEach(function (e) {
              t(e) && r.push(e);
            }),
            r
          );
        }
        hasChildren() {
          return this.getChildren().length > 0;
        }
        removeChildren() {
          return (
            this.getChildren().forEach((t) => {
              (t.parent = null), (t.index = 0), t.remove();
            }),
            (this.children = []),
            this._requestDraw(),
            this
          );
        }
        destroyChildren() {
          return (
            this.getChildren().forEach((t) => {
              (t.parent = null), (t.index = 0), t.destroy();
            }),
            (this.children = []),
            this._requestDraw(),
            this
          );
        }
        add(...t) {
          if (0 === t.length) return this;
          if (t.length > 1) {
            for (var e = 0; e < t.length; e++) this.add(t[e]);
            return this;
          }
          let r = t[0];
          return (
            r.getParent()
              ? r.moveTo(this)
              : (this._validateAdd(r),
                (r.index = this.getChildren().length),
                (r.parent = this),
                r._clearCaches(),
                this.getChildren().push(r),
                this._fire("add", {
                  child: r,
                }),
                this._requestDraw()),
            this
          );
        }
        destroy() {
          return (
            this.hasChildren() && this.destroyChildren(), super.destroy(), this
          );
        }
        find(t) {
          return this._generalFind(t, !1);
        }
        findOne(t) {
          var e = this._generalFind(t, !0);
          return e.length > 0 ? e[0] : void 0;
        }
        _generalFind(t, e) {
          var r = [];
          return (
            this._descendants((n) => {
              let i = n._isMatch(t);
              return i && r.push(n), !!i && !!e;
            }),
            r
          );
        }
        _descendants(t) {
          for (let e of this.getChildren())
            if (t(e) || (e.hasChildren() && e._descendants(t))) return !0;
          return !1;
        }
        toObject() {
          var t = i.Node.prototype.toObject.call(this);
          return (
            (t.children = []),
            this.getChildren().forEach((e) => {
              t.children.push(e.toObject());
            }),
            t
          );
        }
        isAncestorOf(t) {
          for (var e = t.getParent(); e; ) {
            if (e._id === this._id) return !0;
            e = e.getParent();
          }
          return !1;
        }
        clone(t) {
          var e = i.Node.prototype.clone.call(this, t);
          return (
            this.getChildren().forEach(function (t) {
              e.add(t.clone());
            }),
            e
          );
        }
        getAllIntersections(t) {
          var e = [];
          return (
            this.find("Shape").forEach((r) => {
              r.isVisible() && r.intersects(t) && e.push(r);
            }),
            e
          );
        }
        _clearSelfAndDescendantCache(t) {
          var e;
          super._clearSelfAndDescendantCache(t),
            this.isCached() ||
              null === (e = this.children) ||
              void 0 === e ||
              e.forEach(function (e) {
                e._clearSelfAndDescendantCache(t);
              });
        }
        _setChildrenIndices() {
          var t;
          null === (t = this.children) ||
            void 0 === t ||
            t.forEach(function (t, e) {
              t.index = e;
            }),
            this._requestDraw();
        }
        drawScene(t, e, r) {
          var n = this.getLayer(),
            i = t || (n && n.getCanvas()),
            a = i && i.getContext(),
            o = this._getCanvasCache(),
            s = o && o.scene,
            l = i && i.isCache;
          if (!this.isVisible() && !l) return this;
          if (s) {
            a.save();
            var h = this.getAbsoluteTransform(e).getMatrix();
            a.transform(h[0], h[1], h[2], h[3], h[4], h[5]),
              this._drawCachedSceneCanvas(a),
              a.restore();
          } else this._drawChildren("drawScene", i, e, r);
          return this;
        }
        drawHit(t, e) {
          if (!this.shouldDrawHit(e)) return this;
          var r = this.getLayer(),
            n = t || (r && r.hitCanvas),
            i = n && n.getContext(),
            a = this._getCanvasCache();
          if (a && a.hit) {
            i.save();
            var o = this.getAbsoluteTransform(e).getMatrix();
            i.transform(o[0], o[1], o[2], o[3], o[4], o[5]),
              this._drawCachedHitCanvas(i),
              i.restore();
          } else this._drawChildren("drawHit", n, e);
          return this;
        }
        _drawChildren(t, e, r, n) {
          var i,
            a = e && e.getContext(),
            o = this.clipWidth(),
            s = this.clipHeight(),
            l = this.clipFunc(),
            h = ("number" == typeof o && "number" == typeof s) || l;
          let u = r === this;
          if (h) {
            let t;
            a.save();
            var d = this.getAbsoluteTransform(r),
              c = d.getMatrix();
            if (
              (a.transform(c[0], c[1], c[2], c[3], c[4], c[5]),
              a.beginPath(),
              l)
            )
              t = l.call(this, a, this);
            else {
              var f = this.clipX(),
                g = this.clipY();
              a.rect(f || 0, g || 0, o, s);
            }
            a.clip.apply(a, t),
              (c = d.copy().invert().getMatrix()),
              a.transform(c[0], c[1], c[2], c[3], c[4], c[5]);
          }
          var p =
            !u &&
            "source-over" !== this.globalCompositeOperation() &&
            "drawScene" === t;
          p && (a.save(), a._applyGlobalCompositeOperation(this)),
            null === (i = this.children) ||
              void 0 === i ||
              i.forEach(function (i) {
                i[t](e, r, n);
              }),
            p && a.restore(),
            h && a.restore();
        }
        getClientRect(t = {}) {
          var e,
            r,
            n,
            i,
            a,
            o = t.skipTransform,
            s = t.relativeTo,
            l = {
              x: 1 / 0,
              y: 1 / 0,
              width: 0,
              height: 0,
            },
            h = this;
          null === (e = this.children) ||
            void 0 === e ||
            e.forEach(function (e) {
              if (e.visible()) {
                var o = e.getClientRect({
                  relativeTo: h,
                  skipShadow: t.skipShadow,
                  skipStroke: t.skipStroke,
                });
                (0 !== o.width || 0 !== o.height) &&
                  (void 0 === r
                    ? ((r = o.x),
                      (n = o.y),
                      (i = o.x + o.width),
                      (a = o.y + o.height))
                    : ((r = Math.min(r, o.x)),
                      (n = Math.min(n, o.y)),
                      (i = Math.max(i, o.x + o.width)),
                      (a = Math.max(a, o.y + o.height))));
              }
            });
          for (var u = this.find("Shape"), d = !1, c = 0; c < u.length; c++)
            if (u[c]._isVisible(this)) {
              d = !0;
              break;
            }
          return ((l =
            d && void 0 !== r
              ? {
                  x: r,
                  y: n,
                  width: i - r,
                  height: a - n,
                }
              : {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0,
                }),
          o)
            ? l
            : this._transformedRect(l, s);
        }
      }
      (e.Container = o),
        n.Factory.addComponentsGetterSetter(o, "clip", [
          "x",
          "y",
          "width",
          "height",
        ]),
        n.Factory.addGetterSetter(
          o,
          "clipX",
          void 0,
          (0, a.getNumberValidator)()
        ),
        n.Factory.addGetterSetter(
          o,
          "clipY",
          void 0,
          (0, a.getNumberValidator)()
        ),
        n.Factory.addGetterSetter(
          o,
          "clipWidth",
          void 0,
          (0, a.getNumberValidator)()
        ),
        n.Factory.addGetterSetter(
          o,
          "clipHeight",
          void 0,
          (0, a.getNumberValidator)()
        ),
        n.Factory.addGetterSetter(o, "clipFunc");
    },
    966: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.HitContext = e.SceneContext = e.Context = void 0);
      let n = r(5329),
        i = r(9649);
      var a = [
        "arc",
        "arcTo",
        "beginPath",
        "bezierCurveTo",
        "clearRect",
        "clip",
        "closePath",
        "createLinearGradient",
        "createPattern",
        "createRadialGradient",
        "drawImage",
        "ellipse",
        "fill",
        "fillText",
        "getImageData",
        "createImageData",
        "lineTo",
        "moveTo",
        "putImageData",
        "quadraticCurveTo",
        "rect",
        "roundRect",
        "restore",
        "rotate",
        "save",
        "scale",
        "setLineDash",
        "setTransform",
        "stroke",
        "strokeText",
        "transform",
        "translate",
      ];
      class o {
        constructor(t) {
          (this.canvas = t),
            i.Konva.enableTrace && ((this.traceArr = []), this._enableTrace());
        }
        fillShape(t) {
          t.fillEnabled() && this._fill(t);
        }
        _fill(t) {}
        strokeShape(t) {
          t.hasStroke() && this._stroke(t);
        }
        _stroke(t) {}
        fillStrokeShape(t) {
          t.attrs.fillAfterStrokeEnabled
            ? (this.strokeShape(t), this.fillShape(t))
            : (this.fillShape(t), this.strokeShape(t));
        }
        getTrace(t, e) {
          var r,
            i,
            a,
            o,
            s = this.traceArr,
            l = s.length,
            h = "";
          for (r = 0; r < l; r++)
            (a = (i = s[r]).method)
              ? ((o = i.args),
                (h += a),
                t
                  ? (h += "()")
                  : n.Util._isArray(o[0])
                  ? (h += "([" + o.join(",") + "])")
                  : (e &&
                      (o = o.map((t) =>
                        "number" == typeof t ? Math.floor(t) : t
                      )),
                    (h += "(" + o.join(",") + ")")))
              : ((h += i.property), t || (h += "=" + i.val)),
              (h += ";");
          return h;
        }
        clearTrace() {
          this.traceArr = [];
        }
        _trace(t) {
          var e = this.traceArr;
          e.push(t), e.length >= 100 && e.shift();
        }
        reset() {
          var t = this.getCanvas().getPixelRatio();
          this.setTransform(1 * t, 0, 0, 1 * t, 0, 0);
        }
        getCanvas() {
          return this.canvas;
        }
        clear(t) {
          var e = this.getCanvas();
          t
            ? this.clearRect(t.x || 0, t.y || 0, t.width || 0, t.height || 0)
            : this.clearRect(
                0,
                0,
                e.getWidth() / e.pixelRatio,
                e.getHeight() / e.pixelRatio
              );
        }
        _applyLineCap(t) {
          let e = t.attrs.lineCap;
          e && this.setAttr("lineCap", e);
        }
        _applyOpacity(t) {
          var e = t.getAbsoluteOpacity();
          1 !== e && this.setAttr("globalAlpha", e);
        }
        _applyLineJoin(t) {
          let e = t.attrs.lineJoin;
          e && this.setAttr("lineJoin", e);
        }
        setAttr(t, e) {
          this._context[t] = e;
        }
        arc(t, e, r, n, i, a) {
          this._context.arc(t, e, r, n, i, a);
        }
        arcTo(t, e, r, n, i) {
          this._context.arcTo(t, e, r, n, i);
        }
        beginPath() {
          this._context.beginPath();
        }
        bezierCurveTo(t, e, r, n, i, a) {
          this._context.bezierCurveTo(t, e, r, n, i, a);
        }
        clearRect(t, e, r, n) {
          this._context.clearRect(t, e, r, n);
        }
        clip(...t) {
          this._context.clip.apply(this._context, t);
        }
        closePath() {
          this._context.closePath();
        }
        createImageData(t, e) {
          var r = arguments;
          return 2 === r.length
            ? this._context.createImageData(t, e)
            : 1 === r.length
            ? this._context.createImageData(t)
            : void 0;
        }
        createLinearGradient(t, e, r, n) {
          return this._context.createLinearGradient(t, e, r, n);
        }
        createPattern(t, e) {
          return this._context.createPattern(t, e);
        }
        createRadialGradient(t, e, r, n, i, a) {
          return this._context.createRadialGradient(t, e, r, n, i, a);
        }
        drawImage(t, e, r, n, i, a, o, s, l) {
          var h = arguments,
            u = this._context;
          3 === h.length
            ? u.drawImage(t, e, r)
            : 5 === h.length
            ? u.drawImage(t, e, r, n, i)
            : 9 === h.length && u.drawImage(t, e, r, n, i, a, o, s, l);
        }
        ellipse(t, e, r, n, i, a, o, s) {
          this._context.ellipse(t, e, r, n, i, a, o, s);
        }
        isPointInPath(t, e, r, n) {
          return r
            ? this._context.isPointInPath(r, t, e, n)
            : this._context.isPointInPath(t, e, n);
        }
        fill(...t) {
          this._context.fill.apply(this._context, t);
        }
        fillRect(t, e, r, n) {
          this._context.fillRect(t, e, r, n);
        }
        strokeRect(t, e, r, n) {
          this._context.strokeRect(t, e, r, n);
        }
        fillText(t, e, r, n) {
          n
            ? this._context.fillText(t, e, r, n)
            : this._context.fillText(t, e, r);
        }
        measureText(t) {
          return this._context.measureText(t);
        }
        getImageData(t, e, r, n) {
          return this._context.getImageData(t, e, r, n);
        }
        lineTo(t, e) {
          this._context.lineTo(t, e);
        }
        moveTo(t, e) {
          this._context.moveTo(t, e);
        }
        rect(t, e, r, n) {
          this._context.rect(t, e, r, n);
        }
        roundRect(t, e, r, n, i) {
          this._context.roundRect(t, e, r, n, i);
        }
        putImageData(t, e, r) {
          this._context.putImageData(t, e, r);
        }
        quadraticCurveTo(t, e, r, n) {
          this._context.quadraticCurveTo(t, e, r, n);
        }
        restore() {
          this._context.restore();
        }
        rotate(t) {
          this._context.rotate(t);
        }
        save() {
          this._context.save();
        }
        scale(t, e) {
          this._context.scale(t, e);
        }
        setLineDash(t) {
          this._context.setLineDash
            ? this._context.setLineDash(t)
            : "mozDash" in this._context
            ? (this._context.mozDash = t)
            : "webkitLineDash" in this._context &&
              (this._context.webkitLineDash = t);
        }
        getLineDash() {
          return this._context.getLineDash();
        }
        setTransform(t, e, r, n, i, a) {
          this._context.setTransform(t, e, r, n, i, a);
        }
        stroke(t) {
          t ? this._context.stroke(t) : this._context.stroke();
        }
        strokeText(t, e, r, n) {
          this._context.strokeText(t, e, r, n);
        }
        transform(t, e, r, n, i, a) {
          this._context.transform(t, e, r, n, i, a);
        }
        translate(t, e) {
          this._context.translate(t, e);
        }
        _enableTrace() {
          var t,
            e,
            r = this,
            i = a.length,
            o = this.setAttr,
            s = function (t) {
              var i,
                a = r[t];
              r[t] = function () {
                return (
                  (e = (function (t) {
                    var e,
                      r,
                      i = [],
                      a = t.length,
                      o = n.Util;
                    for (e = 0; e < a; e++)
                      (r = t[e]),
                        o._isNumber(r)
                          ? (r = Math.round(1e3 * r) / 1e3)
                          : o._isString(r) || (r += ""),
                        i.push(r);
                    return i;
                  })(Array.prototype.slice.call(arguments, 0))),
                  (i = a.apply(r, arguments)),
                  r._trace({
                    method: t,
                    args: e,
                  }),
                  i
                );
              };
            };
          for (t = 0; t < i; t++) s(a[t]);
          r.setAttr = function () {
            o.apply(r, arguments);
            var t = arguments[0],
              e = arguments[1];
            ("shadowOffsetX" === t ||
              "shadowOffsetY" === t ||
              "shadowBlur" === t) &&
              (e /= this.canvas.getPixelRatio()),
              r._trace({
                property: t,
                val: e,
              });
          };
        }
        _applyGlobalCompositeOperation(t) {
          let e = t.attrs.globalCompositeOperation;
          e &&
            "source-over" !== e &&
            this.setAttr("globalCompositeOperation", e);
        }
      }
      (e.Context = o),
        [
          "fillStyle",
          "strokeStyle",
          "shadowColor",
          "shadowBlur",
          "shadowOffsetX",
          "shadowOffsetY",
          "letterSpacing",
          "lineCap",
          "lineDashOffset",
          "lineJoin",
          "lineWidth",
          "miterLimit",
          "direction",
          "font",
          "textAlign",
          "textBaseline",
          "globalAlpha",
          "globalCompositeOperation",
          "imageSmoothingEnabled",
        ].forEach(function (t) {
          Object.defineProperty(o.prototype, t, {
            get() {
              return this._context[t];
            },
            set(e) {
              this._context[t] = e;
            },
          });
        });
      class s extends o {
        constructor(t, { willReadFrequently: e = !1 } = {}) {
          super(t),
            (this._context = t._canvas.getContext("2d", {
              willReadFrequently: e,
            }));
        }
        _fillColor(t) {
          var e = t.fill();
          this.setAttr("fillStyle", e), t._fillFunc(this);
        }
        _fillPattern(t) {
          this.setAttr("fillStyle", t._getFillPattern()), t._fillFunc(this);
        }
        _fillLinearGradient(t) {
          var e = t._getLinearGradient();
          e && (this.setAttr("fillStyle", e), t._fillFunc(this));
        }
        _fillRadialGradient(t) {
          let e = t._getRadialGradient();
          e && (this.setAttr("fillStyle", e), t._fillFunc(this));
        }
        _fill(t) {
          let e = t.fill(),
            r = t.getFillPriority();
          if (e && "color" === r) {
            this._fillColor(t);
            return;
          }
          let n = t.getFillPatternImage();
          if (n && "pattern" === r) {
            this._fillPattern(t);
            return;
          }
          let i = t.getFillLinearGradientColorStops();
          if (i && "linear-gradient" === r) {
            this._fillLinearGradient(t);
            return;
          }
          let a = t.getFillRadialGradientColorStops();
          if (a && "radial-gradient" === r) {
            this._fillRadialGradient(t);
            return;
          }
          e
            ? this._fillColor(t)
            : n
            ? this._fillPattern(t)
            : i
            ? this._fillLinearGradient(t)
            : a && this._fillRadialGradient(t);
        }
        _strokeLinearGradient(t) {
          let e = t.getStrokeLinearGradientStartPoint(),
            r = t.getStrokeLinearGradientEndPoint(),
            n = t.getStrokeLinearGradientColorStops(),
            i = this.createLinearGradient(e.x, e.y, r.x, r.y);
          if (n) {
            for (var a = 0; a < n.length; a += 2)
              i.addColorStop(n[a], n[a + 1]);
            this.setAttr("strokeStyle", i);
          }
        }
        _stroke(t) {
          var e = t.dash(),
            r = t.getStrokeScaleEnabled();
          if (t.hasStroke()) {
            if (!r) {
              this.save();
              var n = this.getCanvas().getPixelRatio();
              this.setTransform(n, 0, 0, n, 0, 0);
            }
            this._applyLineCap(t),
              e &&
                t.dashEnabled() &&
                (this.setLineDash(e),
                this.setAttr("lineDashOffset", t.dashOffset())),
              this.setAttr("lineWidth", t.strokeWidth()),
              t.getShadowForStrokeEnabled() ||
                this.setAttr("shadowColor", "rgba(0,0,0,0)"),
              t.getStrokeLinearGradientColorStops()
                ? this._strokeLinearGradient(t)
                : this.setAttr("strokeStyle", t.stroke()),
              t._strokeFunc(this),
              r || this.restore();
          }
        }
        _applyShadow(t) {
          var e,
            r,
            n,
            i = null !== (e = t.getShadowRGBA()) && void 0 !== e ? e : "black",
            a = null !== (r = t.getShadowBlur()) && void 0 !== r ? r : 5,
            o =
              null !== (n = t.getShadowOffset()) && void 0 !== n
                ? n
                : {
                    x: 0,
                    y: 0,
                  },
            s = t.getAbsoluteScale(),
            l = this.canvas.getPixelRatio(),
            h = s.x * l,
            u = s.y * l;
          this.setAttr("shadowColor", i),
            this.setAttr("shadowBlur", a * Math.min(Math.abs(h), Math.abs(u))),
            this.setAttr("shadowOffsetX", o.x * h),
            this.setAttr("shadowOffsetY", o.y * u);
        }
      }
      e.SceneContext = s;
      class l extends o {
        constructor(t) {
          super(t),
            (this._context = t._canvas.getContext("2d", {
              willReadFrequently: !0,
            }));
        }
        _fill(t) {
          this.save(),
            this.setAttr("fillStyle", t.colorKey),
            t._fillFuncHit(this),
            this.restore();
        }
        strokeShape(t) {
          t.hasHitStroke() && this._stroke(t);
        }
        _stroke(t) {
          if (t.hasHitStroke()) {
            let i = t.getStrokeScaleEnabled();
            if (!i) {
              this.save();
              var e = this.getCanvas().getPixelRatio();
              this.setTransform(e, 0, 0, e, 0, 0);
            }
            this._applyLineCap(t);
            var r = t.hitStrokeWidth(),
              n = "auto" === r ? t.strokeWidth() : r;
            this.setAttr("lineWidth", n),
              this.setAttr("strokeStyle", t.colorKey),
              t._strokeFuncHit(this),
              i || this.restore();
          }
        }
      }
      e.HitContext = l;
    },
    6301: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Konva = void 0);
      var n = r(9842);
      Object.defineProperty(e, "Konva", {
        enumerable: !0,
        get: function () {
          return n.Konva;
        },
      });
      let i = r(9842);
      t.exports = i.Konva;
    },
    8790: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.DD = void 0);
      let n = r(9649),
        i = r(5329);
      (e.DD = {
        get isDragging() {
          var a = !1;
          return (
            e.DD._dragElements.forEach((t) => {
              "dragging" === t.dragStatus && (a = !0);
            }),
            a
          );
        },
        justDragged: !1,
        get node() {
          var o;
          return (
            e.DD._dragElements.forEach((t) => {
              o = t.node;
            }),
            o
          );
        },
        _dragElements: new Map(),
        _drag(t) {
          let r = [];
          e.DD._dragElements.forEach((e, n) => {
            let { node: a } = e,
              o = a.getStage();
            o.setPointersPositions(t),
              void 0 === e.pointerId &&
                (e.pointerId = i.Util._getFirstPointerId(t));
            let s = o._changedPointerPositions.find(
              (t) => t.id === e.pointerId
            );
            if (s) {
              if ("dragging" !== e.dragStatus) {
                var l = a.dragDistance();
                if (
                  Math.max(
                    Math.abs(s.x - e.startPointerPos.x),
                    Math.abs(s.y - e.startPointerPos.y)
                  ) < l ||
                  (a.startDrag({
                    evt: t,
                  }),
                  !a.isDragging())
                )
                  return;
              }
              a._setDragPosition(t, e), r.push(a);
            }
          }),
            r.forEach((e) => {
              e.fire(
                "dragmove",
                {
                  type: "dragmove",
                  target: e,
                  evt: t,
                },
                !0
              );
            });
        },
        _endDragBefore(t) {
          let r = [];
          e.DD._dragElements.forEach((i) => {
            let { node: a } = i,
              o = a.getStage();
            if (
              (t && o.setPointersPositions(t),
              !o._changedPointerPositions.find((t) => t.id === i.pointerId))
            )
              return;
            ("dragging" === i.dragStatus || "stopped" === i.dragStatus) &&
              ((e.DD.justDragged = !0),
              (n.Konva._mouseListenClick = !1),
              (n.Konva._touchListenClick = !1),
              (n.Konva._pointerListenClick = !1),
              (i.dragStatus = "stopped"));
            let s =
              i.node.getLayer() || (i.node instanceof n.Konva.Stage && i.node);
            s && -1 === r.indexOf(s) && r.push(s);
          }),
            r.forEach((t) => {
              t.draw();
            });
        },
        _endDragAfter(t) {
          e.DD._dragElements.forEach((r, n) => {
            "stopped" === r.dragStatus &&
              r.node.fire(
                "dragend",
                {
                  type: "dragend",
                  target: r.node,
                  evt: t,
                },
                !0
              ),
              "dragging" !== r.dragStatus && e.DD._dragElements.delete(n);
          });
        },
      }),
        n.Konva.isBrowser &&
          (window.addEventListener("mouseup", e.DD._endDragBefore, !0),
          window.addEventListener("touchend", e.DD._endDragBefore, !0),
          window.addEventListener("mousemove", e.DD._drag),
          window.addEventListener("touchmove", e.DD._drag),
          window.addEventListener("mouseup", e.DD._endDragAfter, !1),
          window.addEventListener("touchend", e.DD._endDragAfter, !1));
    },
    1027: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Factory = void 0);
      let n = r(5329),
        i = r(7367);
      e.Factory = {
        addGetterSetter(t, r, n, i, a) {
          e.Factory.addGetter(t, r, n),
            e.Factory.addSetter(t, r, i, a),
            e.Factory.addOverloadedGetterSetter(t, r);
        },
        addGetter(t, e, r) {
          var i = "get" + n.Util._capitalize(e);
          t.prototype[i] =
            t.prototype[i] ||
            function () {
              var t = this.attrs[e];
              return void 0 === t ? r : t;
            };
        },
        addSetter(t, r, i, a) {
          var o = "set" + n.Util._capitalize(r);
          t.prototype[o] || e.Factory.overWriteSetter(t, r, i, a);
        },
        overWriteSetter(t, e, r, i) {
          var a = "set" + n.Util._capitalize(e);
          t.prototype[a] = function (t) {
            return (
              r && null != t && (t = r.call(this, t, e)),
              this._setAttr(e, t),
              i && i.call(this),
              this
            );
          };
        },
        addComponentsGetterSetter(t, r, a, o, s) {
          var l,
            h,
            u = a.length,
            d = n.Util._capitalize,
            c = "get" + d(r),
            f = "set" + d(r);
          t.prototype[c] = function () {
            var t = {};
            for (l = 0; l < u; l++) t[(h = a[l])] = this.getAttr(r + d(h));
            return t;
          };
          var g = (0, i.getComponentValidator)(a);
          (t.prototype[f] = function (t) {
            var e,
              n = this.attrs[r];
            for (e in (o && (t = o.call(this, t)), g && g.call(this, t, r), t))
              t.hasOwnProperty(e) && this._setAttr(r + d(e), t[e]);
            return (
              t ||
                a.forEach((t) => {
                  this._setAttr(r + d(t), void 0);
                }),
              this._fireChangeEvent(r, n, t),
              s && s.call(this),
              this
            );
          }),
            e.Factory.addOverloadedGetterSetter(t, r);
        },
        addOverloadedGetterSetter(t, e) {
          var r = n.Util._capitalize(e),
            i = "set" + r,
            a = "get" + r;
          t.prototype[e] = function () {
            return arguments.length ? (this[i](arguments[0]), this) : this[a]();
          };
        },
        addDeprecatedGetterSetter(t, r, i, a) {
          n.Util.error("Adding deprecated " + r);
          var o = "get" + n.Util._capitalize(r),
            s =
              r +
              " property is deprecated and will be removed soon. Look at Konva change log for more information.";
          (t.prototype[o] = function () {
            n.Util.error(s);
            var t = this.attrs[r];
            return void 0 === t ? i : t;
          }),
            e.Factory.addSetter(t, r, a, function () {
              n.Util.error(s);
            }),
            e.Factory.addOverloadedGetterSetter(t, r);
        },
        backCompat(t, e) {
          n.Util.each(e, function (e, r) {
            var i = t.prototype[r],
              a = "get" + n.Util._capitalize(e),
              o = "set" + n.Util._capitalize(e);
            function s() {
              i.apply(this, arguments),
                n.Util.error(
                  '"' +
                    e +
                    '" method is deprecated and will be removed soon. Use ""' +
                    r +
                    '" instead.'
                );
            }
            (t.prototype[e] = s), (t.prototype[a] = s), (t.prototype[o] = s);
          });
        },
        afterSetFilter() {
          this._filterUpToDate = !1;
        },
      };
    },
    3006: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.FastLayer = void 0);
      let n = r(5329),
        i = r(6665),
        a = r(9649);
      class o extends i.Layer {
        constructor(t) {
          super(t),
            this.listening(!1),
            n.Util.warn(
              'Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.'
            );
        }
      }
      (e.FastLayer = o),
        (o.prototype.nodeType = "FastLayer"),
        (0, a._registerNode)(o);
    },
    9649: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e._registerNode = e.Konva = e.glob = void 0);
      let n = Math.PI / 180;
      (e.glob =
        void 0 !== r.g
          ? r.g
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof WorkerGlobalScope
          ? self
          : {}),
        (e.Konva = {
          _global: e.glob,
          version: "9.3.14",
          isBrowser:
            "undefined" != typeof window &&
            ("[object Window]" === {}.toString.call(window) ||
              "[object global]" === {}.toString.call(window)),
          isUnminified: /param/.test(function (t) {}.toString()),
          dblClickWindow: 400,
          getAngle: (t) => (e.Konva.angleDeg ? t * n : t),
          enableTrace: !1,
          pointerEventsEnabled: !0,
          autoDrawEnabled: !0,
          hitOnDragEnabled: !1,
          capturePointerEventsEnabled: !1,
          _mouseListenClick: !1,
          _touchListenClick: !1,
          _pointerListenClick: !1,
          _mouseInDblClickWindow: !1,
          _touchInDblClickWindow: !1,
          _pointerInDblClickWindow: !1,
          _mouseDblClickPointerId: null,
          _touchDblClickPointerId: null,
          _pointerDblClickPointerId: null,
          _fixTextRendering: !1,
          pixelRatio:
            ("undefined" != typeof window && window.devicePixelRatio) || 1,
          dragDistance: 3,
          angleDeg: !0,
          showWarnings: !0,
          dragButtons: [0, 1],
          isDragging: () => e.Konva.DD.isDragging,
          isTransforming() {
            var t;
            return null === (t = e.Konva.Transformer) || void 0 === t
              ? void 0
              : t.isTransforming();
          },
          isDragReady: () => !!e.Konva.DD.node,
          releaseCanvasOnDestroy: !0,
          document: e.glob.document,
          _injectGlobal(t) {
            e.glob.Konva = t;
          },
        }),
        (e._registerNode = (t) => {
          e.Konva[t.prototype.getClassName()] = t;
        }),
        e.Konva._injectGlobal(e.Konva);
    },
    2853: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Group = void 0);
      let n = r(5329),
        i = r(9682),
        a = r(9649);
      class o extends i.Container {
        _validateAdd(t) {
          var e = t.getType();
          "Group" !== e &&
            "Shape" !== e &&
            n.Util.throw("You may only add groups and shapes to groups.");
        }
      }
      (e.Group = o), (o.prototype.nodeType = "Group"), (0, a._registerNode)(o);
    },
    6665: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Layer = void 0);
      let n = r(5329),
        i = r(9682),
        a = r(4667),
        o = r(1027),
        s = r(7193),
        l = r(7367),
        h = r(7439),
        u = r(9649);
      var d = [
          {
            x: 0,
            y: 0,
          },
          {
            x: -1,
            y: -1,
          },
          {
            x: 1,
            y: -1,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: -1,
            y: 1,
          },
        ],
        c = d.length;
      class f extends i.Container {
        constructor(t) {
          super(t),
            (this.canvas = new s.SceneCanvas()),
            (this.hitCanvas = new s.HitCanvas({
              pixelRatio: 1,
            })),
            (this._waitingForDraw = !1),
            this.on("visibleChange.konva", this._checkVisibility),
            this._checkVisibility(),
            this.on(
              "imageSmoothingEnabledChange.konva",
              this._setSmoothEnabled
            ),
            this._setSmoothEnabled();
        }
        createPNGStream() {
          return this.canvas._canvas.createPNGStream();
        }
        getCanvas() {
          return this.canvas;
        }
        getNativeCanvasElement() {
          return this.canvas._canvas;
        }
        getHitCanvas() {
          return this.hitCanvas;
        }
        getContext() {
          return this.getCanvas().getContext();
        }
        clear(t) {
          return (
            this.getContext().clear(t),
            this.getHitCanvas().getContext().clear(t),
            this
          );
        }
        setZIndex(t) {
          super.setZIndex(t);
          var e = this.getStage();
          return (
            e &&
              e.content &&
              (e.content.removeChild(this.getNativeCanvasElement()),
              t < e.children.length - 1
                ? e.content.insertBefore(
                    this.getNativeCanvasElement(),
                    e.children[t + 1].getCanvas()._canvas
                  )
                : e.content.appendChild(this.getNativeCanvasElement())),
            this
          );
        }
        moveToTop() {
          a.Node.prototype.moveToTop.call(this);
          var t = this.getStage();
          return (
            t &&
              t.content &&
              (t.content.removeChild(this.getNativeCanvasElement()),
              t.content.appendChild(this.getNativeCanvasElement())),
            !0
          );
        }
        moveUp() {
          if (!a.Node.prototype.moveUp.call(this)) return !1;
          var t = this.getStage();
          return (
            !!t &&
            !!t.content &&
            (t.content.removeChild(this.getNativeCanvasElement()),
            this.index < t.children.length - 1
              ? t.content.insertBefore(
                  this.getNativeCanvasElement(),
                  t.children[this.index + 1].getCanvas()._canvas
                )
              : t.content.appendChild(this.getNativeCanvasElement()),
            !0)
          );
        }
        moveDown() {
          if (a.Node.prototype.moveDown.call(this)) {
            var t = this.getStage();
            if (t) {
              var e = t.children;
              t.content &&
                (t.content.removeChild(this.getNativeCanvasElement()),
                t.content.insertBefore(
                  this.getNativeCanvasElement(),
                  e[this.index + 1].getCanvas()._canvas
                ));
            }
            return !0;
          }
          return !1;
        }
        moveToBottom() {
          if (a.Node.prototype.moveToBottom.call(this)) {
            var t = this.getStage();
            if (t) {
              var e = t.children;
              t.content &&
                (t.content.removeChild(this.getNativeCanvasElement()),
                t.content.insertBefore(
                  this.getNativeCanvasElement(),
                  e[1].getCanvas()._canvas
                ));
            }
            return !0;
          }
          return !1;
        }
        getLayer() {
          return this;
        }
        remove() {
          var t = this.getNativeCanvasElement();
          return (
            a.Node.prototype.remove.call(this),
            t &&
              t.parentNode &&
              n.Util._isInDocument(t) &&
              t.parentNode.removeChild(t),
            this
          );
        }
        getStage() {
          return this.parent;
        }
        setSize({ width: t, height: e }) {
          return (
            this.canvas.setSize(t, e),
            this.hitCanvas.setSize(t, e),
            this._setSmoothEnabled(),
            this
          );
        }
        _validateAdd(t) {
          var e = t.getType();
          "Group" !== e &&
            "Shape" !== e &&
            n.Util.throw("You may only add groups and shapes to a layer.");
        }
        _toKonvaCanvas(t) {
          return (
            ((t = t || {}).width = t.width || this.getWidth()),
            (t.height = t.height || this.getHeight()),
            (t.x = void 0 !== t.x ? t.x : this.x()),
            (t.y = void 0 !== t.y ? t.y : this.y()),
            a.Node.prototype._toKonvaCanvas.call(this, t)
          );
        }
        _checkVisibility() {
          this.visible()
            ? (this.canvas._canvas.style.display = "block")
            : (this.canvas._canvas.style.display = "none");
        }
        _setSmoothEnabled() {
          this.getContext()._context.imageSmoothingEnabled =
            this.imageSmoothingEnabled();
        }
        getWidth() {
          if (this.parent) return this.parent.width();
        }
        setWidth() {
          n.Util.warn(
            'Can not change width of layer. Use "stage.width(value)" function instead.'
          );
        }
        getHeight() {
          if (this.parent) return this.parent.height();
        }
        setHeight() {
          n.Util.warn(
            'Can not change height of layer. Use "stage.height(value)" function instead.'
          );
        }
        batchDraw() {
          return (
            this._waitingForDraw ||
              ((this._waitingForDraw = !0),
              n.Util.requestAnimFrame(() => {
                this.draw(), (this._waitingForDraw = !1);
              })),
            this
          );
        }
        getIntersection(t) {
          if (!this.isListening() || !this.isVisible()) return null;
          for (var e = 1, r = !1; ; ) {
            for (let n = 0; n < c; n++) {
              let i = d[n],
                a = this._getIntersection({
                  x: t.x + i.x * e,
                  y: t.y + i.y * e,
                }),
                o = a.shape;
              if (o) return o;
              if (((r = !!a.antialiased), !a.antialiased)) break;
            }
            if (!r) return null;
            e += 1;
          }
        }
        _getIntersection(t) {
          let e = this.hitCanvas.pixelRatio,
            r = this.hitCanvas.context.getImageData(
              Math.round(t.x * e),
              Math.round(t.y * e),
              1,
              1
            ).data,
            i = r[3];
          if (255 === i) {
            let t = n.Util._rgbToHex(r[0], r[1], r[2]),
              e = h.shapes["#" + t];
            return e
              ? {
                  shape: e,
                }
              : {
                  antialiased: !0,
                };
          }
          return i > 0
            ? {
                antialiased: !0,
              }
            : {};
        }
        drawScene(t, e) {
          var r = this.getLayer(),
            n = t || (r && r.getCanvas());
          return (
            this._fire("beforeDraw", {
              node: this,
            }),
            this.clearBeforeDraw() && n.getContext().clear(),
            i.Container.prototype.drawScene.call(this, n, e),
            this._fire("draw", {
              node: this,
            }),
            this
          );
        }
        drawHit(t, e) {
          var r = this.getLayer(),
            n = t || (r && r.hitCanvas);
          return (
            r && r.clearBeforeDraw() && r.getHitCanvas().getContext().clear(),
            i.Container.prototype.drawHit.call(this, n, e),
            this
          );
        }
        enableHitGraph() {
          return this.hitGraphEnabled(!0), this;
        }
        disableHitGraph() {
          return this.hitGraphEnabled(!1), this;
        }
        setHitGraphEnabled(t) {
          n.Util.warn(
            "hitGraphEnabled method is deprecated. Please use layer.listening() instead."
          ),
            this.listening(t);
        }
        getHitGraphEnabled(t) {
          return (
            n.Util.warn(
              "hitGraphEnabled method is deprecated. Please use layer.listening() instead."
            ),
            this.listening()
          );
        }
        toggleHitCanvas() {
          if (this.parent && this.parent.content) {
            var t = this.parent;
            this.hitCanvas._canvas.parentNode
              ? t.content.removeChild(this.hitCanvas._canvas)
              : t.content.appendChild(this.hitCanvas._canvas);
          }
        }
        destroy() {
          return (
            n.Util.releaseCanvas(
              this.getNativeCanvasElement(),
              this.getHitCanvas()._canvas
            ),
            super.destroy()
          );
        }
      }
      (e.Layer = f),
        (f.prototype.nodeType = "Layer"),
        (0, u._registerNode)(f),
        o.Factory.addGetterSetter(f, "imageSmoothingEnabled", !0),
        o.Factory.addGetterSetter(f, "clearBeforeDraw", !0),
        o.Factory.addGetterSetter(
          f,
          "hitGraphEnabled",
          !0,
          (0, l.getBooleanValidator)()
        );
    },
    4667: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Node = void 0);
      let n = r(5329),
        i = r(1027),
        a = r(7193),
        o = r(9649),
        s = r(8790),
        l = r(7367);
      var h = "absoluteOpacity",
        u = "allEventListeners",
        d = "absoluteTransform",
        c = "absoluteScale",
        f = "canvas",
        g = "listening",
        p = "mouseenter",
        v = "mouseleave",
        m = "Shape",
        y = "stage",
        b = "transform",
        _ = "visible";
      let S = 1;
      class x {
        constructor(t) {
          (this._id = S++),
            (this.eventListeners = {}),
            (this.attrs = {}),
            (this.index = 0),
            (this._allEventListeners = null),
            (this.parent = null),
            (this._cache = new Map()),
            (this._attachedDepsListeners = new Map()),
            (this._lastPos = null),
            (this._batchingTransformChange = !1),
            (this._needClearTransformCache = !1),
            (this._filterUpToDate = !1),
            (this._isUnderCache = !1),
            (this._dragEventId = null),
            (this._shouldFireChangeEvents = !1),
            this.setAttrs(t),
            (this._shouldFireChangeEvents = !0);
        }
        hasChildren() {
          return !1;
        }
        _clearCache(t) {
          (t === b || t === d) && this._cache.get(t)
            ? (this._cache.get(t).dirty = !0)
            : t
            ? this._cache.delete(t)
            : this._cache.clear();
        }
        _getCache(t, e) {
          var r = this._cache.get(t),
            n = t === b || t === d;
          return (
            (void 0 === r || (n && !0 === r.dirty)) &&
              ((r = e.call(this)), this._cache.set(t, r)),
            r
          );
        }
        _calculate(t, e, r) {
          if (!this._attachedDepsListeners.get(t)) {
            let r = e.map((t) => t + "Change.konva").join(" ");
            this.on(r, () => {
              this._clearCache(t);
            }),
              this._attachedDepsListeners.set(t, !0);
          }
          return this._getCache(t, r);
        }
        _getCanvasCache() {
          return this._cache.get(f);
        }
        _clearSelfAndDescendantCache(t) {
          this._clearCache(t), t === d && this.fire("absoluteTransformChange");
        }
        clearCache() {
          if (this._cache.has(f)) {
            let { scene: t, filter: e, hit: r } = this._cache.get(f);
            n.Util.releaseCanvas(t, e, r), this._cache.delete(f);
          }
          return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
        }
        cache(t) {
          var e = t || {},
            r = {};
          (void 0 === e.x ||
            void 0 === e.y ||
            void 0 === e.width ||
            void 0 === e.height) &&
            (r = this.getClientRect({
              skipTransform: !0,
              relativeTo: this.getParent() || void 0,
            }));
          var i = Math.ceil(e.width || r.width),
            o = Math.ceil(e.height || r.height),
            s = e.pixelRatio,
            l = void 0 === e.x ? Math.floor(r.x) : e.x,
            u = void 0 === e.y ? Math.floor(r.y) : e.y,
            d = e.offset || 0,
            g = e.drawBorder || !1,
            p = e.hitCanvasPixelRatio || 1;
          if (!i || !o) {
            n.Util.error(
              "Can not cache the node. Width or height of the node equals 0. Caching is skipped."
            );
            return;
          }
          let v = Math.abs(Math.round(r.x) - l) > 0.5 ? 1 : 0,
            m = Math.abs(Math.round(r.y) - u) > 0.5 ? 1 : 0;
          (i += 2 * d + v), (o += 2 * d + m), (l -= d), (u -= d);
          var y = new a.SceneCanvas({
              pixelRatio: s,
              width: i,
              height: o,
            }),
            b = new a.SceneCanvas({
              pixelRatio: s,
              width: 0,
              height: 0,
              willReadFrequently: !0,
            }),
            _ = new a.HitCanvas({
              pixelRatio: p,
              width: i,
              height: o,
            }),
            S = y.getContext(),
            x = _.getContext();
          return (
            (_.isCache = !0),
            (y.isCache = !0),
            this._cache.delete(f),
            (this._filterUpToDate = !1),
            !1 === e.imageSmoothingEnabled &&
              ((y.getContext()._context.imageSmoothingEnabled = !1),
              (b.getContext()._context.imageSmoothingEnabled = !1)),
            S.save(),
            x.save(),
            S.translate(-l, -u),
            x.translate(-l, -u),
            (this._isUnderCache = !0),
            this._clearSelfAndDescendantCache(h),
            this._clearSelfAndDescendantCache(c),
            this.drawScene(y, this),
            this.drawHit(_, this),
            (this._isUnderCache = !1),
            S.restore(),
            x.restore(),
            g &&
              (S.save(),
              S.beginPath(),
              S.rect(0, 0, i, o),
              S.closePath(),
              S.setAttr("strokeStyle", "red"),
              S.setAttr("lineWidth", 5),
              S.stroke(),
              S.restore()),
            this._cache.set(f, {
              scene: y,
              filter: b,
              hit: _,
              x: l,
              y: u,
            }),
            this._requestDraw(),
            this
          );
        }
        isCached() {
          return this._cache.has(f);
        }
        getClientRect(t) {
          throw Error('abstract "getClientRect" method call');
        }
        _transformedRect(t, e) {
          var r = [
              {
                x: t.x,
                y: t.y,
              },
              {
                x: t.x + t.width,
                y: t.y,
              },
              {
                x: t.x + t.width,
                y: t.y + t.height,
              },
              {
                x: t.x,
                y: t.y + t.height,
              },
            ],
            n = 1 / 0,
            i = 1 / 0,
            a = -1 / 0,
            o = -1 / 0,
            s = this.getAbsoluteTransform(e);
          return (
            r.forEach(function (t) {
              var e = s.point(t);
              void 0 === n && ((n = a = e.x), (i = o = e.y)),
                (n = Math.min(n, e.x)),
                (i = Math.min(i, e.y)),
                (a = Math.max(a, e.x)),
                (o = Math.max(o, e.y));
            }),
            {
              x: n,
              y: i,
              width: a - n,
              height: o - i,
            }
          );
        }
        _drawCachedSceneCanvas(t) {
          t.save(),
            t._applyOpacity(this),
            t._applyGlobalCompositeOperation(this);
          let e = this._getCanvasCache();
          t.translate(e.x, e.y);
          var r = this._getCachedSceneCanvas(),
            n = r.pixelRatio;
          t.drawImage(r._canvas, 0, 0, r.width / n, r.height / n), t.restore();
        }
        _drawCachedHitCanvas(t) {
          var e = this._getCanvasCache(),
            r = e.hit;
          t.save(),
            t.translate(e.x, e.y),
            t.drawImage(
              r._canvas,
              0,
              0,
              r.width / r.pixelRatio,
              r.height / r.pixelRatio
            ),
            t.restore();
        }
        _getCachedSceneCanvas() {
          var t,
            e,
            r,
            i,
            a = this.filters(),
            o = this._getCanvasCache(),
            s = o.scene,
            l = o.filter,
            h = l.getContext();
          if (a) {
            if (!this._filterUpToDate) {
              var u = s.pixelRatio;
              l.setSize(s.width / s.pixelRatio, s.height / s.pixelRatio);
              try {
                for (
                  t = a.length,
                    h.clear(),
                    h.drawImage(
                      s._canvas,
                      0,
                      0,
                      s.getWidth() / u,
                      s.getHeight() / u
                    ),
                    e = h.getImageData(0, 0, l.getWidth(), l.getHeight()),
                    r = 0;
                  r < t;
                  r++
                ) {
                  if (((i = a[r]), "function" != typeof i)) {
                    n.Util.error(
                      "Filter should be type of function, but got " +
                        typeof i +
                        " instead. Please check correct filters"
                    );
                    continue;
                  }
                  i.call(this, e), h.putImageData(e, 0, 0);
                }
              } catch (t) {
                n.Util.error(
                  "Unable to apply filter. " +
                    t.message +
                    " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html."
                );
              }
              this._filterUpToDate = !0;
            }
            return l;
          }
          return s;
        }
        on(t, e) {
          if ((this._cache && this._cache.delete(u), 3 == arguments.length))
            return this._delegate.apply(this, arguments);
          var r,
            n,
            i,
            a,
            o = t.split(" "),
            s = o.length;
          for (r = 0; r < s; r++)
            (i = (n = o[r].split("."))[0]),
              (a = n[1] || ""),
              this.eventListeners[i] || (this.eventListeners[i] = []),
              this.eventListeners[i].push({
                name: a,
                handler: e,
              });
          return this;
        }
        off(t, e) {
          var r,
            n,
            i,
            a,
            o,
            s = (t || "").split(" "),
            l = s.length;
          if ((this._cache && this._cache.delete(u), !t))
            for (n in this.eventListeners) this._off(n);
          for (r = 0; r < l; r++)
            if (((a = (i = s[r].split("."))[0]), (o = i[1]), a))
              this.eventListeners[a] && this._off(a, o, e);
            else for (n in this.eventListeners) this._off(n, o, e);
          return this;
        }
        dispatchEvent(t) {
          var e = {
            target: this,
            type: t.type,
            evt: t,
          };
          return this.fire(t.type, e), this;
        }
        addEventListener(t, e) {
          return (
            this.on(t, function (t) {
              e.call(this, t.evt);
            }),
            this
          );
        }
        removeEventListener(t) {
          return this.off(t), this;
        }
        _delegate(t, e, r) {
          var i = this;
          this.on(t, function (t) {
            for (
              var a = t.target.findAncestors(e, !0, i), o = 0;
              o < a.length;
              o++
            )
              ((t = n.Util.cloneObject(t)).currentTarget = a[o]),
                r.call(a[o], t);
          });
        }
        remove() {
          return (
            this.isDragging() && this.stopDrag(),
            s.DD._dragElements.delete(this._id),
            this._remove(),
            this
          );
        }
        _clearCaches() {
          this._clearSelfAndDescendantCache(d),
            this._clearSelfAndDescendantCache(h),
            this._clearSelfAndDescendantCache(c),
            this._clearSelfAndDescendantCache(y),
            this._clearSelfAndDescendantCache(_),
            this._clearSelfAndDescendantCache(g);
        }
        _remove() {
          this._clearCaches();
          var t = this.getParent();
          t &&
            t.children &&
            (t.children.splice(this.index, 1),
            t._setChildrenIndices(),
            (this.parent = null));
        }
        destroy() {
          return this.remove(), this.clearCache(), this;
        }
        getAttr(t) {
          var e = "get" + n.Util._capitalize(t);
          return n.Util._isFunction(this[e]) ? this[e]() : this.attrs[t];
        }
        getAncestors() {
          for (var t = this.getParent(), e = []; t; )
            e.push(t), (t = t.getParent());
          return e;
        }
        getAttrs() {
          return this.attrs || {};
        }
        setAttrs(t) {
          return (
            this._batchTransformChanges(() => {
              var e, r;
              if (!t) return this;
              for (e in t)
                "children" !== e &&
                  ((r = "set" + n.Util._capitalize(e)),
                  n.Util._isFunction(this[r])
                    ? this[r](t[e])
                    : this._setAttr(e, t[e]));
            }),
            this
          );
        }
        isListening() {
          return this._getCache(g, this._isListening);
        }
        _isListening(t) {
          if (!this.listening()) return !1;
          let e = this.getParent();
          return !e || e === t || this === t || e._isListening(t);
        }
        isVisible() {
          return this._getCache(_, this._isVisible);
        }
        _isVisible(t) {
          if (!this.visible()) return !1;
          let e = this.getParent();
          return !e || e === t || this === t || e._isVisible(t);
        }
        shouldDrawHit(t, e = !1) {
          if (t) return this._isVisible(t) && this._isListening(t);
          var r = this.getLayer(),
            n = !1;
          s.DD._dragElements.forEach((t) => {
            "dragging" === t.dragStatus &&
              ("Stage" === t.node.nodeType
                ? (n = !0)
                : t.node.getLayer() === r && (n = !0));
          });
          var i =
            !e && !o.Konva.hitOnDragEnabled && (n || o.Konva.isTransforming());
          return this.isListening() && this.isVisible() && !i;
        }
        show() {
          return this.visible(!0), this;
        }
        hide() {
          return this.visible(!1), this;
        }
        getZIndex() {
          return this.index || 0;
        }
        getAbsoluteZIndex() {
          var t,
            e,
            r,
            n,
            i = this.getDepth(),
            a = this,
            o = 0;
          let s = this.getStage();
          return (
            "Stage" !== a.nodeType &&
              s &&
              (function s(l) {
                for (r = 0, t = [], e = l.length; r < e; r++)
                  (n = l[r]),
                    o++,
                    n.nodeType !== m && (t = t.concat(n.getChildren().slice())),
                    n._id === a._id && (r = e);
                t.length > 0 && t[0].getDepth() <= i && s(t);
              })(s.getChildren()),
            o
          );
        }
        getDepth() {
          for (var t = 0, e = this.parent; e; ) t++, (e = e.parent);
          return t;
        }
        _batchTransformChanges(t) {
          (this._batchingTransformChange = !0),
            t(),
            (this._batchingTransformChange = !1),
            this._needClearTransformCache &&
              (this._clearCache(b), this._clearSelfAndDescendantCache(d)),
            (this._needClearTransformCache = !1);
        }
        setPosition(t) {
          return (
            this._batchTransformChanges(() => {
              this.x(t.x), this.y(t.y);
            }),
            this
          );
        }
        getPosition() {
          return {
            x: this.x(),
            y: this.y(),
          };
        }
        getRelativePointerPosition() {
          let t = this.getStage();
          if (!t) return null;
          var e = t.getPointerPosition();
          if (!e) return null;
          var r = this.getAbsoluteTransform().copy();
          return r.invert(), r.point(e);
        }
        getAbsolutePosition(t) {
          let e = !1,
            r = this.parent;
          for (; r; ) {
            if (r.isCached()) {
              e = !0;
              break;
            }
            r = r.parent;
          }
          e && !t && (t = !0);
          var i = this.getAbsoluteTransform(t).getMatrix(),
            a = new n.Transform(),
            o = this.offset();
          return (a.m = i.slice()), a.translate(o.x, o.y), a.getTranslation();
        }
        setAbsolutePosition(t) {
          let { x: e, y: r, ...n } = this._clearTransform();
          (this.attrs.x = e), (this.attrs.y = r), this._clearCache(b);
          var i = this._getAbsoluteTransform().copy();
          return (
            i.invert(),
            i.translate(t.x, t.y),
            (t = {
              x: this.attrs.x + i.getTranslation().x,
              y: this.attrs.y + i.getTranslation().y,
            }),
            this._setTransform(n),
            this.setPosition({
              x: t.x,
              y: t.y,
            }),
            this._clearCache(b),
            this._clearSelfAndDescendantCache(d),
            this
          );
        }
        _setTransform(t) {
          var e;
          for (e in t) this.attrs[e] = t[e];
        }
        _clearTransform() {
          var t = {
            x: this.x(),
            y: this.y(),
            rotation: this.rotation(),
            scaleX: this.scaleX(),
            scaleY: this.scaleY(),
            offsetX: this.offsetX(),
            offsetY: this.offsetY(),
            skewX: this.skewX(),
            skewY: this.skewY(),
          };
          return (
            (this.attrs.x = 0),
            (this.attrs.y = 0),
            (this.attrs.rotation = 0),
            (this.attrs.scaleX = 1),
            (this.attrs.scaleY = 1),
            (this.attrs.offsetX = 0),
            (this.attrs.offsetY = 0),
            (this.attrs.skewX = 0),
            (this.attrs.skewY = 0),
            t
          );
        }
        move(t) {
          var e = t.x,
            r = t.y,
            n = this.x(),
            i = this.y();
          return (
            void 0 !== e && (n += e),
            void 0 !== r && (i += r),
            this.setPosition({
              x: n,
              y: i,
            }),
            this
          );
        }
        _eachAncestorReverse(t, e) {
          var r,
            n,
            i = [],
            a = this.getParent();
          if (!e || e._id !== this._id) {
            for (i.unshift(this); a && (!e || a._id !== e._id); )
              i.unshift(a), (a = a.parent);
            for (n = 0, r = i.length; n < r; n++) t(i[n]);
          }
        }
        rotate(t) {
          return this.rotation(this.rotation() + t), this;
        }
        moveToTop() {
          if (!this.parent)
            return (
              n.Util.warn("Node has no parent. moveToTop function is ignored."),
              !1
            );
          var t = this.index;
          return (
            t < this.parent.getChildren().length - 1 &&
            (this.parent.children.splice(t, 1),
            this.parent.children.push(this),
            this.parent._setChildrenIndices(),
            !0)
          );
        }
        moveUp() {
          if (!this.parent)
            return (
              n.Util.warn("Node has no parent. moveUp function is ignored."), !1
            );
          var t = this.index;
          return (
            t < this.parent.getChildren().length - 1 &&
            (this.parent.children.splice(t, 1),
            this.parent.children.splice(t + 1, 0, this),
            this.parent._setChildrenIndices(),
            !0)
          );
        }
        moveDown() {
          if (!this.parent)
            return (
              n.Util.warn("Node has no parent. moveDown function is ignored."),
              !1
            );
          var t = this.index;
          return (
            t > 0 &&
            (this.parent.children.splice(t, 1),
            this.parent.children.splice(t - 1, 0, this),
            this.parent._setChildrenIndices(),
            !0)
          );
        }
        moveToBottom() {
          if (!this.parent)
            return (
              n.Util.warn(
                "Node has no parent. moveToBottom function is ignored."
              ),
              !1
            );
          var t = this.index;
          return (
            t > 0 &&
            (this.parent.children.splice(t, 1),
            this.parent.children.unshift(this),
            this.parent._setChildrenIndices(),
            !0)
          );
        }
        setZIndex(t) {
          if (!this.parent)
            return (
              n.Util.warn("Node has no parent. zIndex parameter is ignored."),
              this
            );
          (t < 0 || t >= this.parent.children.length) &&
            n.Util.warn(
              "Unexpected value " +
                t +
                " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " +
                (this.parent.children.length - 1) +
                "."
            );
          var e = this.index;
          return (
            this.parent.children.splice(e, 1),
            this.parent.children.splice(t, 0, this),
            this.parent._setChildrenIndices(),
            this
          );
        }
        getAbsoluteOpacity() {
          return this._getCache(h, this._getAbsoluteOpacity);
        }
        _getAbsoluteOpacity() {
          var t = this.opacity(),
            e = this.getParent();
          return e && !e._isUnderCache && (t *= e.getAbsoluteOpacity()), t;
        }
        moveTo(t) {
          return this.getParent() !== t && (this._remove(), t.add(this)), this;
        }
        toObject() {
          var t,
            e,
            r,
            i,
            a = this.getAttrs();
          let o = {
            attrs: {},
            className: this.getClassName(),
          };
          for (t in a)
            (e = a[t]),
              (!n.Util.isObject(e) ||
                n.Util._isPlainObject(e) ||
                n.Util._isArray(e)) &&
                ((r = "function" == typeof this[t] && this[t]),
                delete a[t],
                (i = r ? r.call(this) : null),
                (a[t] = e),
                i !== e && (o.attrs[t] = e));
          return n.Util._prepareToStringify(o);
        }
        toJSON() {
          return JSON.stringify(this.toObject());
        }
        getParent() {
          return this.parent;
        }
        findAncestors(t, e, r) {
          var n = [];
          e && this._isMatch(t) && n.push(this);
          for (var i = this.parent; i && i !== r; )
            i._isMatch(t) && n.push(i), (i = i.parent);
          return n;
        }
        isAncestorOf(t) {
          return !1;
        }
        findAncestor(t, e, r) {
          return this.findAncestors(t, e, r)[0];
        }
        _isMatch(t) {
          if (!t) return !1;
          if ("function" == typeof t) return t(this);
          var e,
            r,
            i = t.replace(/ /g, "").split(","),
            a = i.length;
          for (e = 0; e < a; e++)
            if (
              ((r = i[e]),
              n.Util.isValidSelector(r) ||
                (n.Util.warn(
                  'Selector "' +
                    r +
                    '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'
                ),
                n.Util.warn(
                  'If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'
                ),
                n.Util.warn("Konva is awesome, right?")),
              "#" === r.charAt(0))
            ) {
              if (this.id() === r.slice(1)) return !0;
            } else if ("." === r.charAt(0)) {
              if (this.hasName(r.slice(1))) return !0;
            } else if (this.className === r || this.nodeType === r) return !0;
          return !1;
        }
        getLayer() {
          var t = this.getParent();
          return t ? t.getLayer() : null;
        }
        getStage() {
          return this._getCache(y, this._getStage);
        }
        _getStage() {
          var t = this.getParent();
          return t ? t.getStage() : null;
        }
        fire(t, e = {}, r) {
          return (
            (e.target = e.target || this),
            r ? this._fireAndBubble(t, e) : this._fire(t, e),
            this
          );
        }
        getAbsoluteTransform(t) {
          return t
            ? this._getAbsoluteTransform(t)
            : this._getCache(d, this._getAbsoluteTransform);
        }
        _getAbsoluteTransform(t) {
          if (t)
            return (
              (e = new n.Transform()),
              this._eachAncestorReverse(function (t) {
                var r = t.transformsEnabled();
                "all" === r
                  ? e.multiply(t.getTransform())
                  : "position" === r &&
                    e.translate(t.x() - t.offsetX(), t.y() - t.offsetY());
              }, t),
              e
            );
          (e = this._cache.get(d) || new n.Transform()),
            this.parent
              ? this.parent.getAbsoluteTransform().copyInto(e)
              : e.reset();
          var e,
            r = this.transformsEnabled();
          if ("all" === r) e.multiply(this.getTransform());
          else if ("position" === r) {
            let t = this.attrs.x || 0,
              r = this.attrs.y || 0,
              n = this.attrs.offsetX || 0,
              i = this.attrs.offsetY || 0;
            e.translate(t - n, r - i);
          }
          return (e.dirty = !1), e;
        }
        getAbsoluteScale(t) {
          for (var e = this; e; )
            e._isUnderCache && (t = e), (e = e.getParent());
          let r = this.getAbsoluteTransform(t).decompose();
          return {
            x: r.scaleX,
            y: r.scaleY,
          };
        }
        getAbsoluteRotation() {
          return this.getAbsoluteTransform().decompose().rotation;
        }
        getTransform() {
          return this._getCache(b, this._getTransform);
        }
        _getTransform() {
          var t,
            e,
            r = this._cache.get(b) || new n.Transform();
          r.reset();
          var i = this.x(),
            a = this.y(),
            s = o.Konva.getAngle(this.rotation()),
            l = null !== (t = this.attrs.scaleX) && void 0 !== t ? t : 1,
            h = null !== (e = this.attrs.scaleY) && void 0 !== e ? e : 1,
            u = this.attrs.skewX || 0,
            d = this.attrs.skewY || 0,
            c = this.attrs.offsetX || 0,
            f = this.attrs.offsetY || 0;
          return (
            (0 !== i || 0 !== a) && r.translate(i, a),
            0 !== s && r.rotate(s),
            (0 !== u || 0 !== d) && r.skew(u, d),
            (1 !== l || 1 !== h) && r.scale(l, h),
            (0 !== c || 0 !== f) && r.translate(-1 * c, -1 * f),
            (r.dirty = !1),
            r
          );
        }
        clone(t) {
          var e,
            r,
            i,
            a,
            o,
            s = n.Util.cloneObject(this.attrs);
          for (e in t) s[e] = t[e];
          var l = new this.constructor(s);
          for (e in this.eventListeners)
            for (a = 0, i = (r = this.eventListeners[e]).length; a < i; a++)
              0 > (o = r[a]).name.indexOf("konva") &&
                (l.eventListeners[e] || (l.eventListeners[e] = []),
                l.eventListeners[e].push(o));
          return l;
        }
        _toKonvaCanvas(t) {
          t = t || {};
          var e = this.getClientRect(),
            r = this.getStage(),
            n = void 0 !== t.x ? t.x : Math.floor(e.x),
            i = void 0 !== t.y ? t.y : Math.floor(e.y),
            o = t.pixelRatio || 1,
            s = new a.SceneCanvas({
              width: t.width || Math.ceil(e.width) || (r ? r.width() : 0),
              height: t.height || Math.ceil(e.height) || (r ? r.height() : 0),
              pixelRatio: o,
            }),
            l = s.getContext();
          let h = new a.SceneCanvas({
            width: s.width / s.pixelRatio + Math.abs(n),
            height: s.height / s.pixelRatio + Math.abs(i),
            pixelRatio: s.pixelRatio,
          });
          return (
            !1 === t.imageSmoothingEnabled &&
              (l._context.imageSmoothingEnabled = !1),
            l.save(),
            (n || i) && l.translate(-1 * n, -1 * i),
            this.drawScene(s, void 0, h),
            l.restore(),
            s
          );
        }
        toCanvas(t) {
          return this._toKonvaCanvas(t)._canvas;
        }
        toDataURL(t) {
          var e = (t = t || {}).mimeType || null,
            r = t.quality || null,
            n = this._toKonvaCanvas(t).toDataURL(e, r);
          return t.callback && t.callback(n), n;
        }
        toImage(t) {
          return new Promise((e, r) => {
            try {
              let r = null == t ? void 0 : t.callback;
              r && delete t.callback,
                n.Util._urlToImage(this.toDataURL(t), function (t) {
                  e(t), null == r || r(t);
                });
            } catch (t) {
              r(t);
            }
          });
        }
        toBlob(t) {
          return new Promise((e, r) => {
            try {
              let r = null == t ? void 0 : t.callback;
              r && delete t.callback,
                this.toCanvas(t).toBlob(
                  (t) => {
                    e(t), null == r || r(t);
                  },
                  null == t ? void 0 : t.mimeType,
                  null == t ? void 0 : t.quality
                );
            } catch (t) {
              r(t);
            }
          });
        }
        setSize(t) {
          return this.width(t.width), this.height(t.height), this;
        }
        getSize() {
          return {
            width: this.width(),
            height: this.height(),
          };
        }
        getClassName() {
          return this.className || this.nodeType;
        }
        getType() {
          return this.nodeType;
        }
        getDragDistance() {
          return void 0 !== this.attrs.dragDistance
            ? this.attrs.dragDistance
            : this.parent
            ? this.parent.getDragDistance()
            : o.Konva.dragDistance;
        }
        _off(t, e, r) {
          var n,
            i,
            a,
            o = this.eventListeners[t];
          for (n = 0; n < o.length; n++)
            if (
              ((i = o[n].name),
              (a = o[n].handler),
              ("konva" !== i || "konva" === e) &&
                (!e || i === e) &&
                (!r || r === a))
            ) {
              if ((o.splice(n, 1), 0 === o.length)) {
                delete this.eventListeners[t];
                break;
              }
              n--;
            }
        }
        _fireChangeEvent(t, e, r) {
          this._fire(t + "Change", {
            oldVal: e,
            newVal: r,
          });
        }
        addName(t) {
          if (!this.hasName(t)) {
            var e = this.name();
            this.name(e ? e + " " + t : t);
          }
          return this;
        }
        hasName(t) {
          if (!t) return !1;
          let e = this.name();
          return !!e && -1 !== (e || "").split(/\s/g).indexOf(t);
        }
        removeName(t) {
          var e = (this.name() || "").split(/\s/g),
            r = e.indexOf(t);
          return -1 !== r && (e.splice(r, 1), this.name(e.join(" "))), this;
        }
        setAttr(t, e) {
          var r = this["set" + n.Util._capitalize(t)];
          return (
            n.Util._isFunction(r) ? r.call(this, e) : this._setAttr(t, e), this
          );
        }
        _requestDraw() {
          if (o.Konva.autoDrawEnabled) {
            let t = this.getLayer() || this.getStage();
            null == t || t.batchDraw();
          }
        }
        _setAttr(t, e) {
          var r = this.attrs[t];
          (r !== e || n.Util.isObject(e)) &&
            (null == e ? delete this.attrs[t] : (this.attrs[t] = e),
            this._shouldFireChangeEvents && this._fireChangeEvent(t, r, e),
            this._requestDraw());
        }
        _setComponentAttr(t, e, r) {
          var n;
          void 0 !== r &&
            ((n = this.attrs[t]) || (this.attrs[t] = this.getAttr(t)),
            (this.attrs[t][e] = r),
            this._fireChangeEvent(t, n, r));
        }
        _fireAndBubble(t, e, r) {
          if (
            (e && this.nodeType === m && (e.target = this),
            !(
              (t === p || t === v) &&
              ((r &&
                (this === r || (this.isAncestorOf && this.isAncestorOf(r)))) ||
                ("Stage" === this.nodeType && !r))
            ))
          ) {
            this._fire(t, e);
            var n =
              (t === p || t === v) &&
              r &&
              r.isAncestorOf &&
              r.isAncestorOf(this) &&
              !r.isAncestorOf(this.parent);
            ((e && !e.cancelBubble) || !e) &&
              this.parent &&
              this.parent.isListening() &&
              !n &&
              (r && r.parent
                ? this._fireAndBubble.call(this.parent, t, e, r)
                : this._fireAndBubble.call(this.parent, t, e));
          }
        }
        _getProtoListeners(t) {
          var e, r, n;
          let i = null !== (e = this._cache.get(u)) && void 0 !== e ? e : {},
            a = null == i ? void 0 : i[t];
          if (void 0 === a) {
            a = [];
            let e = Object.getPrototypeOf(this);
            for (; e; ) {
              let i =
                null !==
                  (n =
                    null === (r = e.eventListeners) || void 0 === r
                      ? void 0
                      : r[t]) && void 0 !== n
                  ? n
                  : [];
              a.push(...i), (e = Object.getPrototypeOf(e));
            }
            (i[t] = a), this._cache.set(u, i);
          }
          return a;
        }
        _fire(t, e) {
          ((e = e || {}).currentTarget = this), (e.type = t);
          let r = this._getProtoListeners(t);
          if (r) for (var n = 0; n < r.length; n++) r[n].handler.call(this, e);
          let i = this.eventListeners[t];
          if (i) for (var n = 0; n < i.length; n++) i[n].handler.call(this, e);
        }
        draw() {
          return this.drawScene(), this.drawHit(), this;
        }
        _createDragElement(t) {
          var e = t ? t.pointerId : void 0,
            r = this.getStage(),
            n = this.getAbsolutePosition();
          if (r) {
            var i = r._getPointerById(e) || r._changedPointerPositions[0] || n;
            s.DD._dragElements.set(this._id, {
              node: this,
              startPointerPos: i,
              offset: {
                x: i.x - n.x,
                y: i.y - n.y,
              },
              dragStatus: "ready",
              pointerId: e,
            });
          }
        }
        startDrag(t, e = !0) {
          s.DD._dragElements.has(this._id) || this._createDragElement(t),
            (s.DD._dragElements.get(this._id).dragStatus = "dragging"),
            this.fire(
              "dragstart",
              {
                type: "dragstart",
                target: this,
                evt: t && t.evt,
              },
              e
            );
        }
        _setDragPosition(t, e) {
          let r = this.getStage()._getPointerById(e.pointerId);
          if (r) {
            var i = {
                x: r.x - e.offset.x,
                y: r.y - e.offset.y,
              },
              a = this.dragBoundFunc();
            if (void 0 !== a) {
              let e = a.call(this, i, t);
              e
                ? (i = e)
                : n.Util.warn(
                    "dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc."
                  );
            }
            (this._lastPos &&
              this._lastPos.x === i.x &&
              this._lastPos.y === i.y) ||
              (this.setAbsolutePosition(i), this._requestDraw()),
              (this._lastPos = i);
          }
        }
        stopDrag(t) {
          let e = s.DD._dragElements.get(this._id);
          e && (e.dragStatus = "stopped"),
            s.DD._endDragBefore(t),
            s.DD._endDragAfter(t);
        }
        setDraggable(t) {
          this._setAttr("draggable", t), this._dragChange();
        }
        isDragging() {
          let t = s.DD._dragElements.get(this._id);
          return !!t && "dragging" === t.dragStatus;
        }
        _listenDrag() {
          this._dragCleanup(),
            this.on("mousedown.konva touchstart.konva", function (t) {
              if (
                !(
                  !(
                    !(void 0 !== t.evt.button) ||
                    o.Konva.dragButtons.indexOf(t.evt.button) >= 0
                  ) || this.isDragging()
                )
              ) {
                var e = !1;
                s.DD._dragElements.forEach((t) => {
                  this.isAncestorOf(t.node) && (e = !0);
                }),
                  e || this._createDragElement(t);
              }
            });
        }
        _dragChange() {
          if (this.attrs.draggable) this._listenDrag();
          else {
            if ((this._dragCleanup(), !this.getStage())) return;
            let t = s.DD._dragElements.get(this._id),
              e = t && "dragging" === t.dragStatus,
              r = t && "ready" === t.dragStatus;
            e ? this.stopDrag() : r && s.DD._dragElements.delete(this._id);
          }
        }
        _dragCleanup() {
          this.off("mousedown.konva"), this.off("touchstart.konva");
        }
        isClientRectOnScreen(
          t = {
            x: 0,
            y: 0,
          }
        ) {
          let e = this.getStage();
          if (!e) return !1;
          let r = {
            x: -t.x,
            y: -t.y,
            width: e.width() + 2 * t.x,
            height: e.height() + 2 * t.y,
          };
          return n.Util.haveIntersection(r, this.getClientRect());
        }
        static create(t, e) {
          return (
            n.Util._isString(t) && (t = JSON.parse(t)), this._createNode(t, e)
          );
        }
        static _createNode(t, e) {
          var r,
            i,
            a,
            s = x.prototype.getClassName.call(t),
            l = t.children;
          if (
            (e && (t.attrs.container = e),
            o.Konva[s] ||
              (n.Util.warn(
                'Can not find a node with class name "' +
                  s +
                  '". Fallback to "Shape".'
              ),
              (s = "Shape")),
            (r = new o.Konva[s](t.attrs)),
            l)
          )
            for (a = 0, i = l.length; a < i; a++) r.add(x._createNode(l[a]));
          return r;
        }
      }
      (e.Node = x),
        (x.prototype.nodeType = "Node"),
        (x.prototype._attrsAffectingSize = []),
        (x.prototype.eventListeners = {}),
        x.prototype.on.call(
          x.prototype,
          "xChange.konva yChange.konva scaleXChange.konva scaleYChange.konva skewXChange.konva skewYChange.konva rotationChange.konva offsetXChange.konva offsetYChange.konva transformsEnabledChange.konva",
          function () {
            if (this._batchingTransformChange) {
              this._needClearTransformCache = !0;
              return;
            }
            this._clearCache(b), this._clearSelfAndDescendantCache(d);
          }
        ),
        x.prototype.on.call(x.prototype, "visibleChange.konva", function () {
          this._clearSelfAndDescendantCache(_);
        }),
        x.prototype.on.call(x.prototype, "listeningChange.konva", function () {
          this._clearSelfAndDescendantCache(g);
        }),
        x.prototype.on.call(x.prototype, "opacityChange.konva", function () {
          this._clearSelfAndDescendantCache(h);
        });
      let w = i.Factory.addGetterSetter;
      w(x, "zIndex"),
        w(x, "absolutePosition"),
        w(x, "position"),
        w(x, "x", 0, (0, l.getNumberValidator)()),
        w(x, "y", 0, (0, l.getNumberValidator)()),
        w(
          x,
          "globalCompositeOperation",
          "source-over",
          (0, l.getStringValidator)()
        ),
        w(x, "opacity", 1, (0, l.getNumberValidator)()),
        w(x, "name", "", (0, l.getStringValidator)()),
        w(x, "id", "", (0, l.getStringValidator)()),
        w(x, "rotation", 0, (0, l.getNumberValidator)()),
        i.Factory.addComponentsGetterSetter(x, "scale", ["x", "y"]),
        w(x, "scaleX", 1, (0, l.getNumberValidator)()),
        w(x, "scaleY", 1, (0, l.getNumberValidator)()),
        i.Factory.addComponentsGetterSetter(x, "skew", ["x", "y"]),
        w(x, "skewX", 0, (0, l.getNumberValidator)()),
        w(x, "skewY", 0, (0, l.getNumberValidator)()),
        i.Factory.addComponentsGetterSetter(x, "offset", ["x", "y"]),
        w(x, "offsetX", 0, (0, l.getNumberValidator)()),
        w(x, "offsetY", 0, (0, l.getNumberValidator)()),
        w(x, "dragDistance", null, (0, l.getNumberValidator)()),
        w(x, "width", 0, (0, l.getNumberValidator)()),
        w(x, "height", 0, (0, l.getNumberValidator)()),
        w(x, "listening", !0, (0, l.getBooleanValidator)()),
        w(x, "preventDefault", !0, (0, l.getBooleanValidator)()),
        w(x, "filters", null, function (t) {
          return (this._filterUpToDate = !1), t;
        }),
        w(x, "visible", !0, (0, l.getBooleanValidator)()),
        w(x, "transformsEnabled", "all", (0, l.getStringValidator)()),
        w(x, "size"),
        w(x, "dragBoundFunc"),
        w(x, "draggable", !1, (0, l.getBooleanValidator)()),
        i.Factory.backCompat(x, {
          rotateDeg: "rotate",
          setRotationDeg: "setRotation",
          getRotationDeg: "getRotation",
        });
    },
    6453: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.releaseCapture =
          e.setPointerCapture =
          e.hasPointerCapture =
          e.createEvent =
          e.getCapturedShape =
            void 0);
      let n = r(9649),
        i = new Map(),
        a = void 0 !== n.Konva._global.PointerEvent;
      function o(t) {
        return {
          evt: t,
          pointerId: t.pointerId,
        };
      }
      function s(t, e) {
        let r = i.get(t);
        if (!r) return;
        let n = r.getStage();
        n && n.content,
          i.delete(t),
          a &&
            r._fire(
              "lostpointercapture",
              o(new PointerEvent("lostpointercapture"))
            );
      }
      (e.getCapturedShape = function (t) {
        return i.get(t);
      }),
        (e.createEvent = o),
        (e.hasPointerCapture = function (t, e) {
          return i.get(t) === e;
        }),
        (e.setPointerCapture = function (t, e) {
          s(t),
            e.getStage() &&
              (i.set(t, e),
              a &&
                e._fire(
                  "gotpointercapture",
                  o(new PointerEvent("gotpointercapture"))
                ));
        }),
        (e.releaseCapture = s);
    },
    7439: function (t, e, r) {
      "use strict";
      let n;
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Shape = e.shapes = void 0);
      let i = r(9649),
        a = r(5329),
        o = r(1027),
        s = r(4667),
        l = r(7367),
        h = r(9649),
        u = r(6453);
      var d = "hasShadow",
        c = "shadowRGBA",
        f = "patternImage",
        g = "linearGradient",
        p = "radialGradient";
      function v() {
        return n || (n = a.Util.createCanvasElement().getContext("2d"));
      }
      e.shapes = {};
      class m extends s.Node {
        constructor(t) {
          let r;
          for (super(t); !(r = a.Util.getRandomColor()) || r in e.shapes; );
          (this.colorKey = r), (e.shapes[r] = this);
        }
        getContext() {
          return (
            a.Util.warn(
              "shape.getContext() method is deprecated. Please do not use it."
            ),
            this.getLayer().getContext()
          );
        }
        getCanvas() {
          return (
            a.Util.warn(
              "shape.getCanvas() method is deprecated. Please do not use it."
            ),
            this.getLayer().getCanvas()
          );
        }
        getSceneFunc() {
          return this.attrs.sceneFunc || this._sceneFunc;
        }
        getHitFunc() {
          return this.attrs.hitFunc || this._hitFunc;
        }
        hasShadow() {
          return this._getCache(d, this._hasShadow);
        }
        _hasShadow() {
          return (
            this.shadowEnabled() &&
            0 !== this.shadowOpacity() &&
            !!(
              this.shadowColor() ||
              this.shadowBlur() ||
              this.shadowOffsetX() ||
              this.shadowOffsetY()
            )
          );
        }
        _getFillPattern() {
          return this._getCache(f, this.__getFillPattern);
        }
        __getFillPattern() {
          if (this.fillPatternImage()) {
            let t = v().createPattern(
              this.fillPatternImage(),
              this.fillPatternRepeat() || "repeat"
            );
            if (t && t.setTransform) {
              let e = new a.Transform();
              e.translate(this.fillPatternX(), this.fillPatternY()),
                e.rotate(i.Konva.getAngle(this.fillPatternRotation())),
                e.scale(this.fillPatternScaleX(), this.fillPatternScaleY()),
                e.translate(
                  -1 * this.fillPatternOffsetX(),
                  -1 * this.fillPatternOffsetY()
                );
              let r = e.getMatrix(),
                n =
                  "undefined" == typeof DOMMatrix
                    ? {
                        a: r[0],
                        b: r[1],
                        c: r[2],
                        d: r[3],
                        e: r[4],
                        f: r[5],
                      }
                    : new DOMMatrix(r);
              t.setTransform(n);
            }
            return t;
          }
        }
        _getLinearGradient() {
          return this._getCache(g, this.__getLinearGradient);
        }
        __getLinearGradient() {
          var t = this.fillLinearGradientColorStops();
          if (t) {
            for (
              var e = v(),
                r = this.fillLinearGradientStartPoint(),
                n = this.fillLinearGradientEndPoint(),
                i = e.createLinearGradient(r.x, r.y, n.x, n.y),
                a = 0;
              a < t.length;
              a += 2
            )
              i.addColorStop(t[a], t[a + 1]);
            return i;
          }
        }
        _getRadialGradient() {
          return this._getCache(p, this.__getRadialGradient);
        }
        __getRadialGradient() {
          var t = this.fillRadialGradientColorStops();
          if (t) {
            for (
              var e = v(),
                r = this.fillRadialGradientStartPoint(),
                n = this.fillRadialGradientEndPoint(),
                i = e.createRadialGradient(
                  r.x,
                  r.y,
                  this.fillRadialGradientStartRadius(),
                  n.x,
                  n.y,
                  this.fillRadialGradientEndRadius()
                ),
                a = 0;
              a < t.length;
              a += 2
            )
              i.addColorStop(t[a], t[a + 1]);
            return i;
          }
        }
        getShadowRGBA() {
          return this._getCache(c, this._getShadowRGBA);
        }
        _getShadowRGBA() {
          if (this.hasShadow()) {
            var t = a.Util.colorToRGBA(this.shadowColor());
            if (t)
              return (
                "rgba(" +
                t.r +
                "," +
                t.g +
                "," +
                t.b +
                "," +
                t.a * (this.shadowOpacity() || 1) +
                ")"
              );
          }
        }
        hasFill() {
          return this._calculate(
            "hasFill",
            [
              "fillEnabled",
              "fill",
              "fillPatternImage",
              "fillLinearGradientColorStops",
              "fillRadialGradientColorStops",
            ],
            () =>
              this.fillEnabled() &&
              !!(
                this.fill() ||
                this.fillPatternImage() ||
                this.fillLinearGradientColorStops() ||
                this.fillRadialGradientColorStops()
              )
          );
        }
        hasStroke() {
          return this._calculate(
            "hasStroke",
            [
              "strokeEnabled",
              "strokeWidth",
              "stroke",
              "strokeLinearGradientColorStops",
            ],
            () =>
              this.strokeEnabled() &&
              this.strokeWidth() &&
              !!(this.stroke() || this.strokeLinearGradientColorStops())
          );
        }
        hasHitStroke() {
          let t = this.hitStrokeWidth();
          return "auto" === t ? this.hasStroke() : this.strokeEnabled() && !!t;
        }
        intersects(t) {
          var e = this.getStage();
          if (!e) return !1;
          let r = e.bufferHitCanvas;
          return (
            r.getContext().clear(),
            this.drawHit(r, void 0, !0),
            r.context.getImageData(Math.round(t.x), Math.round(t.y), 1, 1)
              .data[3] > 0
          );
        }
        destroy() {
          return (
            s.Node.prototype.destroy.call(this),
            delete e.shapes[this.colorKey],
            delete this.colorKey,
            this
          );
        }
        _useBufferCanvas(t) {
          var e;
          if (
            !(null === (e = this.attrs.perfectDrawEnabled) || void 0 === e || e)
          )
            return !1;
          let r = t || this.hasFill(),
            n = this.hasStroke(),
            i = 1 !== this.getAbsoluteOpacity();
          if (r && n && i) return !0;
          let a = this.hasShadow(),
            o = this.shadowForStrokeEnabled();
          return !!r && !!n && !!a && !!o;
        }
        setStrokeHitEnabled(t) {
          a.Util.warn(
            "strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."
          ),
            t ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
        }
        getStrokeHitEnabled() {
          return 0 !== this.hitStrokeWidth();
        }
        getSelfRect() {
          var t = this.size();
          return {
            x: this._centroid ? -t.width / 2 : 0,
            y: this._centroid ? -t.height / 2 : 0,
            width: t.width,
            height: t.height,
          };
        }
        getClientRect(t = {}) {
          let e = !1,
            r = this.getParent();
          for (; r; ) {
            if (r.isCached()) {
              e = !0;
              break;
            }
            r = r.getParent();
          }
          let n = t.skipTransform,
            i = t.relativeTo || (e && this.getStage()) || void 0,
            a = this.getSelfRect(),
            o = (!t.skipStroke && this.hasStroke() && this.strokeWidth()) || 0,
            s = a.width + o,
            l = a.height + o,
            h = !t.skipShadow && this.hasShadow(),
            u = h ? this.shadowOffsetX() : 0,
            d = h ? this.shadowOffsetY() : 0,
            c = (h && this.shadowBlur()) || 0,
            f = {
              width: s + Math.abs(u) + 2 * c,
              height: l + Math.abs(d) + 2 * c,
              x: -(o / 2 + c) + Math.min(u, 0) + a.x,
              y: -(o / 2 + c) + Math.min(d, 0) + a.y,
            };
          return n ? f : this._transformedRect(f, i);
        }
        drawScene(t, e, r) {
          var n,
            i,
            a = this.getLayer(),
            o = t || a.getCanvas(),
            s = o.getContext(),
            l = this._getCanvasCache(),
            h = this.getSceneFunc(),
            u = this.hasShadow(),
            d = o.isCache,
            c = e === this;
          if (!this.isVisible() && !c) return this;
          if (l) {
            s.save();
            var f = this.getAbsoluteTransform(e).getMatrix();
            return (
              s.transform(f[0], f[1], f[2], f[3], f[4], f[5]),
              this._drawCachedSceneCanvas(s),
              s.restore(),
              this
            );
          }
          if (!h) return this;
          if ((s.save(), this._useBufferCanvas() && !d)) {
            n = this.getStage();
            let t = r || n.bufferCanvas;
            (i = t.getContext()).clear(), i.save(), i._applyLineJoin(this);
            var g = this.getAbsoluteTransform(e).getMatrix();
            i.transform(g[0], g[1], g[2], g[3], g[4], g[5]),
              h.call(this, i, this),
              i.restore();
            var p = t.pixelRatio;
            u && s._applyShadow(this),
              s._applyOpacity(this),
              s._applyGlobalCompositeOperation(this),
              s.drawImage(t._canvas, 0, 0, t.width / p, t.height / p);
          } else {
            if ((s._applyLineJoin(this), !c)) {
              var g = this.getAbsoluteTransform(e).getMatrix();
              s.transform(g[0], g[1], g[2], g[3], g[4], g[5]),
                s._applyOpacity(this),
                s._applyGlobalCompositeOperation(this);
            }
            u && s._applyShadow(this), h.call(this, s, this);
          }
          return s.restore(), this;
        }
        drawHit(t, e, r = !1) {
          if (!this.shouldDrawHit(e, r)) return this;
          var n = this.getLayer(),
            i = t || n.hitCanvas,
            o = i && i.getContext(),
            s = this.hitFunc() || this.sceneFunc(),
            l = this._getCanvasCache(),
            h = l && l.hit;
          if (
            (this.colorKey ||
              a.Util.warn(
                "Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"
              ),
            h)
          ) {
            o.save();
            var u = this.getAbsoluteTransform(e).getMatrix();
            return (
              o.transform(u[0], u[1], u[2], u[3], u[4], u[5]),
              this._drawCachedHitCanvas(o),
              o.restore(),
              this
            );
          }
          if (!s) return this;
          if ((o.save(), o._applyLineJoin(this), this !== e)) {
            var d = this.getAbsoluteTransform(e).getMatrix();
            o.transform(d[0], d[1], d[2], d[3], d[4], d[5]);
          }
          return s.call(this, o, this), o.restore(), this;
        }
        drawHitFromCache(t = 0) {
          var e,
            r,
            n,
            i,
            o,
            s = this._getCanvasCache(),
            l = this._getCachedSceneCanvas(),
            h = s.hit,
            u = h.getContext(),
            d = h.getWidth(),
            c = h.getHeight();
          u.clear(), u.drawImage(l._canvas, 0, 0, d, c);
          try {
            for (
              o = 0,
                n = (r = (e = u.getImageData(0, 0, d, c)).data).length,
                i = a.Util._hexToRgb(this.colorKey);
              o < n;
              o += 4
            )
              r[o + 3] > t
                ? ((r[o] = i.r),
                  (r[o + 1] = i.g),
                  (r[o + 2] = i.b),
                  (r[o + 3] = 255))
                : (r[o + 3] = 0);
            u.putImageData(e, 0, 0);
          } catch (t) {
            a.Util.error(
              "Unable to draw hit graph from cached scene canvas. " + t.message
            );
          }
          return this;
        }
        hasPointerCapture(t) {
          return u.hasPointerCapture(t, this);
        }
        setPointerCapture(t) {
          u.setPointerCapture(t, this);
        }
        releaseCapture(t) {
          u.releaseCapture(t, this);
        }
      }
      (e.Shape = m),
        (m.prototype._fillFunc = function (t) {
          let e = this.attrs.fillRule;
          e ? t.fill(e) : t.fill();
        }),
        (m.prototype._strokeFunc = function (t) {
          t.stroke();
        }),
        (m.prototype._fillFuncHit = function (t) {
          let e = this.attrs.fillRule;
          e ? t.fill(e) : t.fill();
        }),
        (m.prototype._strokeFuncHit = function (t) {
          t.stroke();
        }),
        (m.prototype._centroid = !1),
        (m.prototype.nodeType = "Shape"),
        (0, h._registerNode)(m),
        (m.prototype.eventListeners = {}),
        m.prototype.on.call(
          m.prototype,
          "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva",
          function () {
            this._clearCache(d);
          }
        ),
        m.prototype.on.call(
          m.prototype,
          "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva",
          function () {
            this._clearCache(c);
          }
        ),
        m.prototype.on.call(
          m.prototype,
          "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva",
          function () {
            this._clearCache(f);
          }
        ),
        m.prototype.on.call(
          m.prototype,
          "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva",
          function () {
            this._clearCache(g);
          }
        ),
        m.prototype.on.call(
          m.prototype,
          "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva",
          function () {
            this._clearCache(p);
          }
        ),
        o.Factory.addGetterSetter(
          m,
          "stroke",
          void 0,
          (0, l.getStringOrGradientValidator)()
        ),
        o.Factory.addGetterSetter(
          m,
          "strokeWidth",
          2,
          (0, l.getNumberValidator)()
        ),
        o.Factory.addGetterSetter(m, "fillAfterStrokeEnabled", !1),
        o.Factory.addGetterSetter(
          m,
          "hitStrokeWidth",
          "auto",
          (0, l.getNumberOrAutoValidator)()
        ),
        o.Factory.addGetterSetter(
          m,
          "strokeHitEnabled",
          !0,
          (0, l.getBooleanValidator)()
        ),
        o.Factory.addGetterSetter(
          m,
          "perfectDrawEnabled",
          !0,
          (0, l.getBooleanValidator)()
        ),
        o.Factory.addGetterSetter(
          m,
          "shadowForStrokeEnabled",
          !0,
          (0, l.getBooleanValidator)()
        ),
        o.Factory.addGetterSetter(m, "lineJoin"),
        o.Factory.addGetterSetter(m, "lineCap"),
        o.Factory.addGetterSetter(m, "sceneFunc"),
        o.Factory.addGetterSetter(m, "hitFunc"),
        o.Factory.addGetterSetter(m, "dash"),
        o.Factory.addGetterSetter(
          m,
          "dashOffset",
          0,
          (0, l.getNumberValidator)()
        ),
        o.Factory.addGetterSetter(
          m,
          "shadowColor",
          void 0,
          (0, l.getStringValidator)()
        ),
        o.Factory.addGetterSetter(
          m,
          "shadowBlur",
          0,
          (0, l.getNumberValidator)()
        ),
        o.Factory.addGetterSetter(
          m,
          "shadowOpacity",
          1,
          (0, l.getNumberValidator)()
        ),
        o.Factory.addComponentsGetterSetter(m, "shadowOffset", ["x", "y"]),
        o.Factory.addGetterSetter(
          m,
          "shadowOffsetX",
          0,
          (0, l.getNumberValidator)()
        ),
        o.Factory.addGetterSetter(
          m,
          "shadowOffsetY",
          0,
          (0, l.getNumberValidator)()
        ),
        o.Factory.addGetterSetter(m, "fillPatternImage"),
        o.Factory.addGetterSetter(
          m,
          "fill",
          void 0,
          (0, l.getStringOrGradientValidator)()
        ),
        o.Factory.addGetterSetter(
          m,
          "fillPatternX",
          0,
          (0, l.getNumberValidator)()
        ),
        o.Factory.addGetterSetter(
          m,
          "fillPatternY",
          0,
          (0, l.getNumberValidator)()
        ),
        o.Factory.addGetterSetter(m, "fillLinearGradientColorStops"),
        o.Factory.addGetterSetter(m, "strokeLinearGradientColorStops"),
        o.Factory.addGetterSetter(m, "fillRadialGradientStartRadius", 0),
        o.Factory.addGetterSetter(m, "fillRadialGradientEndRadius", 0),
        o.Factory.addGetterSetter(m, "fillRadialGradientColorStops"),
        o.Factory.addGetterSetter(m, "fillPatternRepeat", "repeat"),
        o.Factory.addGetterSetter(m, "fillEnabled", !0),
        o.Factory.addGetterSetter(m, "strokeEnabled", !0),
        o.Factory.addGetterSetter(m, "shadowEnabled", !0),
        o.Factory.addGetterSetter(m, "dashEnabled", !0),
        o.Factory.addGetterSetter(m, "strokeScaleEnabled", !0),
        o.Factory.addGetterSetter(m, "fillPriority", "color"),
        o.Factory.addComponentsGetterSetter(m, "fillPatternOffset", ["x", "y"]),
        o.Factory.addGetterSetter(
          m,
          "fillPatternOffsetX",
          0,
          (0, l.getNumberValidator)()
        ),
        o.Factory.addGetterSetter(
          m,
          "fillPatternOffsetY",
          0,
          (0, l.getNumberValidator)()
        ),
        o.Factory.addComponentsGetterSetter(m, "fillPatternScale", ["x", "y"]),
        o.Factory.addGetterSetter(
          m,
          "fillPatternScaleX",
          1,
          (0, l.getNumberValidator)()
        ),
        o.Factory.addGetterSetter(
          m,
          "fillPatternScaleY",
          1,
          (0, l.getNumberValidator)()
        ),
        o.Factory.addComponentsGetterSetter(m, "fillLinearGradientStartPoint", [
          "x",
          "y",
        ]),
        o.Factory.addComponentsGetterSetter(
          m,
          "strokeLinearGradientStartPoint",
          ["x", "y"]
        ),
        o.Factory.addGetterSetter(m, "fillLinearGradientStartPointX", 0),
        o.Factory.addGetterSetter(m, "strokeLinearGradientStartPointX", 0),
        o.Factory.addGetterSetter(m, "fillLinearGradientStartPointY", 0),
        o.Factory.addGetterSetter(m, "strokeLinearGradientStartPointY", 0),
        o.Factory.addComponentsGetterSetter(m, "fillLinearGradientEndPoint", [
          "x",
          "y",
        ]),
        o.Factory.addComponentsGetterSetter(m, "strokeLinearGradientEndPoint", [
          "x",
          "y",
        ]),
        o.Factory.addGetterSetter(m, "fillLinearGradientEndPointX", 0),
        o.Factory.addGetterSetter(m, "strokeLinearGradientEndPointX", 0),
        o.Factory.addGetterSetter(m, "fillLinearGradientEndPointY", 0),
        o.Factory.addGetterSetter(m, "strokeLinearGradientEndPointY", 0),
        o.Factory.addComponentsGetterSetter(m, "fillRadialGradientStartPoint", [
          "x",
          "y",
        ]),
        o.Factory.addGetterSetter(m, "fillRadialGradientStartPointX", 0),
        o.Factory.addGetterSetter(m, "fillRadialGradientStartPointY", 0),
        o.Factory.addComponentsGetterSetter(m, "fillRadialGradientEndPoint", [
          "x",
          "y",
        ]),
        o.Factory.addGetterSetter(m, "fillRadialGradientEndPointX", 0),
        o.Factory.addGetterSetter(m, "fillRadialGradientEndPointY", 0),
        o.Factory.addGetterSetter(m, "fillPatternRotation", 0),
        o.Factory.addGetterSetter(
          m,
          "fillRule",
          void 0,
          (0, l.getStringValidator)()
        ),
        o.Factory.backCompat(m, {
          dashArray: "dash",
          getDashArray: "getDash",
          setDashArray: "getDash",
          drawFunc: "sceneFunc",
          getDrawFunc: "getSceneFunc",
          setDrawFunc: "setSceneFunc",
          drawHitFunc: "hitFunc",
          getDrawHitFunc: "getHitFunc",
          setDrawHitFunc: "setHitFunc",
        });
    },
    9144: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Stage = e.stages = void 0);
      let n = r(5329),
        i = r(1027),
        a = r(9682),
        o = r(9649),
        s = r(7193),
        l = r(8790),
        h = r(9649),
        u = r(6453);
      var d = "mouseleave",
        c = "mouseover",
        f = "mouseenter",
        g = "mousemove",
        p = "mousedown",
        v = "mouseup",
        m = "pointermove",
        y = "pointerdown",
        b = "pointerup",
        _ = "pointercancel",
        S = "pointerout",
        x = "pointerleave",
        w = "pointerover",
        C = "pointerenter",
        k = "contextmenu",
        P = "touchstart",
        T = "touchend",
        E = "touchmove",
        F = "touchcancel",
        M = "wheel",
        N = [
          [f, "_pointerenter"],
          [p, "_pointerdown"],
          [g, "_pointermove"],
          [v, "_pointerup"],
          [d, "_pointerleave"],
          [P, "_pointerdown"],
          [E, "_pointermove"],
          [T, "_pointerup"],
          [F, "_pointercancel"],
          [c, "_pointerover"],
          [M, "_wheel"],
          [k, "_contextmenu"],
          [y, "_pointerdown"],
          [m, "_pointermove"],
          [b, "_pointerup"],
          [_, "_pointercancel"],
          ["lostpointercapture", "_lostpointercapture"],
        ];
      let A = {
          mouse: {
            [S]: "mouseout",
            [x]: d,
            [w]: c,
            [C]: f,
            [m]: g,
            [y]: p,
            [b]: v,
            [_]: "mousecancel",
            pointerclick: "click",
            pointerdblclick: "dblclick",
          },
          touch: {
            [S]: "touchout",
            [x]: "touchleave",
            [w]: "touchover",
            [C]: "touchenter",
            [m]: E,
            [y]: P,
            [b]: T,
            [_]: F,
            pointerclick: "tap",
            pointerdblclick: "dbltap",
          },
          pointer: {
            [S]: S,
            [x]: x,
            [w]: w,
            [C]: C,
            [m]: m,
            [y]: y,
            [b]: b,
            [_]: _,
            pointerclick: "pointerclick",
            pointerdblclick: "pointerdblclick",
          },
        },
        R = (t) =>
          t.indexOf("pointer") >= 0
            ? "pointer"
            : t.indexOf("touch") >= 0
            ? "touch"
            : "mouse",
        D = (t) => {
          let e = R(t);
          return "pointer" === e
            ? o.Konva.pointerEventsEnabled && A.pointer
            : "touch" === e
            ? A.touch
            : "mouse" === e
            ? A.mouse
            : void 0;
        };
      function L(t = {}) {
        return (
          (t.clipFunc || t.clipWidth || t.clipHeight) &&
            n.Util.warn(
              "Stage does not support clipping. Please use clip for Layers or Groups."
            ),
          t
        );
      }
      e.stages = [];
      class I extends a.Container {
        constructor(t) {
          super(L(t)),
            (this._pointerPositions = []),
            (this._changedPointerPositions = []),
            this._buildDOM(),
            this._bindContentEvents(),
            e.stages.push(this),
            this.on("widthChange.konva heightChange.konva", this._resizeDOM),
            this.on("visibleChange.konva", this._checkVisibility),
            this.on(
              "clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva",
              () => {
                L(this.attrs);
              }
            ),
            this._checkVisibility();
        }
        _validateAdd(t) {
          let e = "Layer" === t.getType(),
            r = "FastLayer" === t.getType();
          e || r || n.Util.throw("You may only add layers to the stage.");
        }
        _checkVisibility() {
          if (!this.content) return;
          let t = this.visible() ? "" : "none";
          this.content.style.display = t;
        }
        setContainer(t) {
          if ("string" == typeof t) {
            if ("." === t.charAt(0)) {
              var e,
                r = t.slice(1);
              t = document.getElementsByClassName(r)[0];
            } else
              (e = "#" !== t.charAt(0) ? t : t.slice(1)),
                (t = document.getElementById(e));
            if (!t) throw "Can not find container in document with id " + e;
          }
          return (
            this._setAttr("container", t),
            this.content &&
              (this.content.parentElement &&
                this.content.parentElement.removeChild(this.content),
              t.appendChild(this.content)),
            this
          );
        }
        shouldDrawHit() {
          return !0;
        }
        clear() {
          var t,
            e = this.children,
            r = e.length;
          for (t = 0; t < r; t++) e[t].clear();
          return this;
        }
        clone(t) {
          return (
            t || (t = {}),
            (t.container =
              "undefined" != typeof document && document.createElement("div")),
            a.Container.prototype.clone.call(this, t)
          );
        }
        destroy() {
          super.destroy();
          var t = this.content;
          t && n.Util._isInDocument(t) && this.container().removeChild(t);
          var r = e.stages.indexOf(this);
          return (
            r > -1 && e.stages.splice(r, 1),
            n.Util.releaseCanvas(
              this.bufferCanvas._canvas,
              this.bufferHitCanvas._canvas
            ),
            this
          );
        }
        getPointerPosition() {
          let t = this._pointerPositions[0] || this._changedPointerPositions[0];
          return t
            ? {
                x: t.x,
                y: t.y,
              }
            : (n.Util.warn(
                "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);"
              ),
              null);
        }
        _getPointerById(t) {
          return this._pointerPositions.find((e) => e.id === t);
        }
        getPointersPositions() {
          return this._pointerPositions;
        }
        getStage() {
          return this;
        }
        getContent() {
          return this.content;
        }
        _toKonvaCanvas(t) {
          ((t = t || {}).x = t.x || 0),
            (t.y = t.y || 0),
            (t.width = t.width || this.width()),
            (t.height = t.height || this.height());
          var e = new s.SceneCanvas({
              width: t.width,
              height: t.height,
              pixelRatio: t.pixelRatio || 1,
            }),
            r = e.getContext()._context,
            n = this.children;
          return (
            (t.x || t.y) && r.translate(-1 * t.x, -1 * t.y),
            n.forEach(function (e) {
              if (e.isVisible()) {
                var n = e._toKonvaCanvas(t);
                r.drawImage(
                  n._canvas,
                  t.x,
                  t.y,
                  n.getWidth() / n.getPixelRatio(),
                  n.getHeight() / n.getPixelRatio()
                );
              }
            }),
            e
          );
        }
        getIntersection(t) {
          if (!t) return null;
          var e,
            r = this.children;
          for (e = r.length - 1; e >= 0; e--) {
            let n = r[e].getIntersection(t);
            if (n) return n;
          }
          return null;
        }
        _resizeDOM() {
          var t = this.width(),
            e = this.height();
          this.content &&
            ((this.content.style.width = t + "px"),
            (this.content.style.height = e + "px")),
            this.bufferCanvas.setSize(t, e),
            this.bufferHitCanvas.setSize(t, e),
            this.children.forEach((r) => {
              r.setSize({
                width: t,
                height: e,
              }),
                r.draw();
            });
        }
        add(t, ...e) {
          if (arguments.length > 1) {
            for (var r = 0; r < arguments.length; r++) this.add(arguments[r]);
            return this;
          }
          super.add(t);
          var i = this.children.length;
          return (
            i > 5 &&
              n.Util.warn(
                "The stage has " +
                  i +
                  " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."
              ),
            t.setSize({
              width: this.width(),
              height: this.height(),
            }),
            t.draw(),
            o.Konva.isBrowser && this.content.appendChild(t.canvas._canvas),
            this
          );
        }
        getParent() {
          return null;
        }
        getLayer() {
          return null;
        }
        hasPointerCapture(t) {
          return u.hasPointerCapture(t, this);
        }
        setPointerCapture(t) {
          u.setPointerCapture(t, this);
        }
        releaseCapture(t) {
          u.releaseCapture(t, this);
        }
        getLayers() {
          return this.children;
        }
        _bindContentEvents() {
          o.Konva.isBrowser &&
            N.forEach(([t, e]) => {
              this.content.addEventListener(
                t,
                (t) => {
                  this[e](t);
                },
                {
                  passive: !1,
                }
              );
            });
        }
        _pointerenter(t) {
          this.setPointersPositions(t);
          let e = D(t.type);
          e &&
            this._fire(e.pointerenter, {
              evt: t,
              target: this,
              currentTarget: this,
            });
        }
        _pointerover(t) {
          this.setPointersPositions(t);
          let e = D(t.type);
          e &&
            this._fire(e.pointerover, {
              evt: t,
              target: this,
              currentTarget: this,
            });
        }
        _getTargetShape(t) {
          let e = this[t + "targetShape"];
          return e && !e.getStage() && (e = null), e;
        }
        _pointerleave(t) {
          let e = D(t.type),
            r = R(t.type);
          if (e) {
            this.setPointersPositions(t);
            var n = this._getTargetShape(r),
              i =
                !(o.Konva.isDragging() || o.Konva.isTransforming()) ||
                o.Konva.hitOnDragEnabled;
            n && i
              ? (n._fireAndBubble(e.pointerout, {
                  evt: t,
                }),
                n._fireAndBubble(e.pointerleave, {
                  evt: t,
                }),
                this._fire(e.pointerleave, {
                  evt: t,
                  target: this,
                  currentTarget: this,
                }),
                (this[r + "targetShape"] = null))
              : i &&
                (this._fire(e.pointerleave, {
                  evt: t,
                  target: this,
                  currentTarget: this,
                }),
                this._fire(e.pointerout, {
                  evt: t,
                  target: this,
                  currentTarget: this,
                })),
              (this.pointerPos = null),
              (this._pointerPositions = []);
          }
        }
        _pointerdown(t) {
          let e = D(t.type),
            r = R(t.type);
          if (e) {
            this.setPointersPositions(t);
            var n = !1;
            this._changedPointerPositions.forEach((i) => {
              var a = this.getIntersection(i);
              if (
                ((l.DD.justDragged = !1),
                (o.Konva["_" + r + "ListenClick"] = !0),
                !a || !a.isListening())
              ) {
                this[r + "ClickStartShape"] = void 0;
                return;
              }
              o.Konva.capturePointerEventsEnabled && a.setPointerCapture(i.id),
                (this[r + "ClickStartShape"] = a),
                a._fireAndBubble(e.pointerdown, {
                  evt: t,
                  pointerId: i.id,
                }),
                (n = !0);
              let s = t.type.indexOf("touch") >= 0;
              a.preventDefault() && t.cancelable && s && t.preventDefault();
            }),
              n ||
                this._fire(e.pointerdown, {
                  evt: t,
                  target: this,
                  currentTarget: this,
                  pointerId: this._pointerPositions[0].id,
                });
          }
        }
        _pointermove(t) {
          let e = D(t.type),
            r = R(t.type);
          if (
            !e ||
            (o.Konva.isDragging() &&
              l.DD.node.preventDefault() &&
              t.cancelable &&
              t.preventDefault(),
            this.setPointersPositions(t),
            !(
              !(o.Konva.isDragging() || o.Konva.isTransforming()) ||
              o.Konva.hitOnDragEnabled
            ))
          )
            return;
          var n = {};
          let i = !1;
          var a = this._getTargetShape(r);
          this._changedPointerPositions.forEach((o) => {
            let s = u.getCapturedShape(o.id) || this.getIntersection(o),
              l = o.id,
              h = {
                evt: t,
                pointerId: l,
              };
            var d = a !== s;
            if (
              (d &&
                a &&
                (a._fireAndBubble(
                  e.pointerout,
                  {
                    ...h,
                  },
                  s
                ),
                a._fireAndBubble(
                  e.pointerleave,
                  {
                    ...h,
                  },
                  s
                )),
              s)
            ) {
              if (n[s._id]) return;
              n[s._id] = !0;
            }
            s && s.isListening()
              ? ((i = !0),
                d &&
                  (s._fireAndBubble(
                    e.pointerover,
                    {
                      ...h,
                    },
                    a
                  ),
                  s._fireAndBubble(
                    e.pointerenter,
                    {
                      ...h,
                    },
                    a
                  ),
                  (this[r + "targetShape"] = s)),
                s._fireAndBubble(e.pointermove, {
                  ...h,
                }))
              : a &&
                (this._fire(e.pointerover, {
                  evt: t,
                  target: this,
                  currentTarget: this,
                  pointerId: l,
                }),
                (this[r + "targetShape"] = null));
          }),
            i ||
              this._fire(e.pointermove, {
                evt: t,
                target: this,
                currentTarget: this,
                pointerId: this._changedPointerPositions[0].id,
              });
        }
        _pointerup(t) {
          let e = D(t.type),
            r = R(t.type);
          if (!e) return;
          this.setPointersPositions(t);
          let n = this[r + "ClickStartShape"],
            i = this[r + "ClickEndShape"];
          var a = {};
          let s = !1;
          this._changedPointerPositions.forEach((h) => {
            let d = u.getCapturedShape(h.id) || this.getIntersection(h);
            if (d) {
              if ((d.releaseCapture(h.id), a[d._id])) return;
              a[d._id] = !0;
            }
            let c = h.id,
              f = {
                evt: t,
                pointerId: c,
              },
              g = !1;
            o.Konva["_" + r + "InDblClickWindow"]
              ? ((g = !0), clearTimeout(this[r + "DblTimeout"]))
              : l.DD.justDragged ||
                ((o.Konva["_" + r + "InDblClickWindow"] = !0),
                clearTimeout(this[r + "DblTimeout"])),
              (this[r + "DblTimeout"] = setTimeout(function () {
                o.Konva["_" + r + "InDblClickWindow"] = !1;
              }, o.Konva.dblClickWindow)),
              d && d.isListening()
                ? ((s = !0),
                  (this[r + "ClickEndShape"] = d),
                  d._fireAndBubble(e.pointerup, {
                    ...f,
                  }),
                  o.Konva["_" + r + "ListenClick"] &&
                    n &&
                    n === d &&
                    (d._fireAndBubble(e.pointerclick, {
                      ...f,
                    }),
                    g &&
                      i &&
                      i === d &&
                      d._fireAndBubble(e.pointerdblclick, {
                        ...f,
                      })))
                : ((this[r + "ClickEndShape"] = null),
                  o.Konva["_" + r + "ListenClick"] &&
                    this._fire(e.pointerclick, {
                      evt: t,
                      target: this,
                      currentTarget: this,
                      pointerId: c,
                    }),
                  g &&
                    this._fire(e.pointerdblclick, {
                      evt: t,
                      target: this,
                      currentTarget: this,
                      pointerId: c,
                    }));
          }),
            s ||
              this._fire(e.pointerup, {
                evt: t,
                target: this,
                currentTarget: this,
                pointerId: this._changedPointerPositions[0].id,
              }),
            (o.Konva["_" + r + "ListenClick"] = !1),
            t.cancelable && "touch" !== r && t.preventDefault();
        }
        _contextmenu(t) {
          this.setPointersPositions(t);
          var e = this.getIntersection(this.getPointerPosition());
          e && e.isListening()
            ? e._fireAndBubble(k, {
                evt: t,
              })
            : this._fire(k, {
                evt: t,
                target: this,
                currentTarget: this,
              });
        }
        _wheel(t) {
          this.setPointersPositions(t);
          var e = this.getIntersection(this.getPointerPosition());
          e && e.isListening()
            ? e._fireAndBubble(M, {
                evt: t,
              })
            : this._fire(M, {
                evt: t,
                target: this,
                currentTarget: this,
              });
        }
        _pointercancel(t) {
          this.setPointersPositions(t);
          let e =
            u.getCapturedShape(t.pointerId) ||
            this.getIntersection(this.getPointerPosition());
          e && e._fireAndBubble(b, u.createEvent(t)),
            u.releaseCapture(t.pointerId);
        }
        _lostpointercapture(t) {
          u.releaseCapture(t.pointerId);
        }
        setPointersPositions(t) {
          var e = this._getContentPosition(),
            r = null,
            i = null;
          void 0 !== (t = t || window.event).touches
            ? ((this._pointerPositions = []),
              (this._changedPointerPositions = []),
              Array.prototype.forEach.call(t.touches, (t) => {
                this._pointerPositions.push({
                  id: t.identifier,
                  x: (t.clientX - e.left) / e.scaleX,
                  y: (t.clientY - e.top) / e.scaleY,
                });
              }),
              Array.prototype.forEach.call(
                t.changedTouches || t.touches,
                (t) => {
                  this._changedPointerPositions.push({
                    id: t.identifier,
                    x: (t.clientX - e.left) / e.scaleX,
                    y: (t.clientY - e.top) / e.scaleY,
                  });
                }
              ))
            : ((r = (t.clientX - e.left) / e.scaleX),
              (i = (t.clientY - e.top) / e.scaleY),
              (this.pointerPos = {
                x: r,
                y: i,
              }),
              (this._pointerPositions = [
                {
                  x: r,
                  y: i,
                  id: n.Util._getFirstPointerId(t),
                },
              ]),
              (this._changedPointerPositions = [
                {
                  x: r,
                  y: i,
                  id: n.Util._getFirstPointerId(t),
                },
              ]));
        }
        _setPointerPosition(t) {
          n.Util.warn(
            'Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'
          ),
            this.setPointersPositions(t);
        }
        _getContentPosition() {
          if (!this.content || !this.content.getBoundingClientRect)
            return {
              top: 0,
              left: 0,
              scaleX: 1,
              scaleY: 1,
            };
          var t = this.content.getBoundingClientRect();
          return {
            top: t.top,
            left: t.left,
            scaleX: t.width / this.content.clientWidth || 1,
            scaleY: t.height / this.content.clientHeight || 1,
          };
        }
        _buildDOM() {
          if (
            ((this.bufferCanvas = new s.SceneCanvas({
              width: this.width(),
              height: this.height(),
            })),
            (this.bufferHitCanvas = new s.HitCanvas({
              pixelRatio: 1,
              width: this.width(),
              height: this.height(),
            })),
            o.Konva.isBrowser)
          ) {
            var t = this.container();
            if (!t) throw "Stage has no container. A container is required.";
            (t.innerHTML = ""),
              (this.content = document.createElement("div")),
              (this.content.style.position = "relative"),
              (this.content.style.userSelect = "none"),
              (this.content.className = "konvajs-content"),
              this.content.setAttribute("role", "presentation"),
              t.appendChild(this.content),
              this._resizeDOM();
          }
        }
        cache() {
          return (
            n.Util.warn(
              "Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."
            ),
            this
          );
        }
        clearCache() {
          return this;
        }
        batchDraw() {
          return (
            this.getChildren().forEach(function (t) {
              t.batchDraw();
            }),
            this
          );
        }
      }
      (e.Stage = I),
        (I.prototype.nodeType = "Stage"),
        (0, h._registerNode)(I),
        i.Factory.addGetterSetter(I, "container"),
        o.Konva.isBrowser &&
          document.addEventListener("visibilitychange", () => {
            e.stages.forEach((t) => {
              t.batchDraw();
            });
          });
    },
    7658: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Easings = e.Tween = void 0);
      let n = r(5329),
        i = r(895),
        a = r(4667),
        o = r(9649);
      var s = {
          node: 1,
          duration: 1,
          easing: 1,
          onFinish: 1,
          yoyo: 1,
        },
        l = 0,
        h = ["fill", "stroke", "shadowColor"];
      class u {
        constructor(t, e, r, n, i, a, o) {
          (this.prop = t),
            (this.propFunc = e),
            (this.begin = n),
            (this._pos = n),
            (this.duration = a),
            (this._change = 0),
            (this.prevPos = 0),
            (this.yoyo = o),
            (this._time = 0),
            (this._position = 0),
            (this._startTime = 0),
            (this._finish = 0),
            (this.func = r),
            (this._change = i - this.begin),
            this.pause();
        }
        fire(t) {
          var e = this[t];
          e && e();
        }
        setTime(t) {
          t > this.duration
            ? this.yoyo
              ? ((this._time = this.duration), this.reverse())
              : this.finish()
            : t < 0
            ? this.yoyo
              ? ((this._time = 0), this.play())
              : this.reset()
            : ((this._time = t), this.update());
        }
        getTime() {
          return this._time;
        }
        setPosition(t) {
          (this.prevPos = this._pos), this.propFunc(t), (this._pos = t);
        }
        getPosition(t) {
          return (
            void 0 === t && (t = this._time),
            this.func(t, this.begin, this._change, this.duration)
          );
        }
        play() {
          (this.state = 2),
            (this._startTime = this.getTimer() - this._time),
            this.onEnterFrame(),
            this.fire("onPlay");
        }
        reverse() {
          (this.state = 3),
            (this._time = this.duration - this._time),
            (this._startTime = this.getTimer() - this._time),
            this.onEnterFrame(),
            this.fire("onReverse");
        }
        seek(t) {
          this.pause(), (this._time = t), this.update(), this.fire("onSeek");
        }
        reset() {
          this.pause(), (this._time = 0), this.update(), this.fire("onReset");
        }
        finish() {
          this.pause(),
            (this._time = this.duration),
            this.update(),
            this.fire("onFinish");
        }
        update() {
          this.setPosition(this.getPosition(this._time)), this.fire("onUpdate");
        }
        onEnterFrame() {
          var t = this.getTimer() - this._startTime;
          2 === this.state
            ? this.setTime(t)
            : 3 === this.state && this.setTime(this.duration - t);
        }
        pause() {
          (this.state = 1), this.fire("onPause");
        }
        getTimer() {
          return new Date().getTime();
        }
      }
      class d {
        constructor(t) {
          var r,
            a,
            h = this,
            c = t.node,
            f = c._id,
            g = t.easing || e.Easings.Linear,
            p = !!t.yoyo;
          (r =
            void 0 === t.duration
              ? 0.3
              : 0 === t.duration
              ? 0.001
              : t.duration),
            (this.node = c),
            (this._id = l++);
          var v =
            c.getLayer() || (c instanceof o.Konva.Stage ? c.getLayers() : null);
          for (a in (v ||
            n.Util.error(
              "Tween constructor have `node` that is not in a layer. Please add node into layer first."
            ),
          (this.anim = new i.Animation(function () {
            h.tween.onEnterFrame();
          }, v)),
          (this.tween = new u(
            a,
            function (t) {
              h._tweenFunc(t);
            },
            g,
            0,
            1,
            1e3 * r,
            p
          )),
          this._addListeners(),
          d.attrs[f] || (d.attrs[f] = {}),
          d.attrs[f][this._id] || (d.attrs[f][this._id] = {}),
          d.tweens[f] || (d.tweens[f] = {}),
          t))
            void 0 === s[a] && this._addAttr(a, t[a]);
          this.reset(),
            (this.onFinish = t.onFinish),
            (this.onReset = t.onReset),
            (this.onUpdate = t.onUpdate);
        }
        _addAttr(t, e) {
          var r,
            i,
            a,
            o,
            s,
            l,
            u,
            c,
            f = this.node,
            g = f._id;
          if (
            ((a = d.tweens[g][t]) && delete d.attrs[g][a][t],
            (r = f.getAttr(t)),
            n.Util._isArray(e))
          ) {
            if (
              ((i = []),
              (s = Math.max(e.length, r.length)),
              "points" === t &&
                e.length !== r.length &&
                (e.length > r.length
                  ? ((u = r),
                    (r = n.Util._prepareArrayForTween(r, e, f.closed())))
                  : ((l = e),
                    (e = n.Util._prepareArrayForTween(e, r, f.closed())))),
              0 === t.indexOf("fill"))
            )
              for (o = 0; o < s; o++)
                if (o % 2 == 0) i.push(e[o] - r[o]);
                else {
                  var p = n.Util.colorToRGBA(r[o]);
                  (c = n.Util.colorToRGBA(e[o])),
                    (r[o] = p),
                    i.push({
                      r: c.r - p.r,
                      g: c.g - p.g,
                      b: c.b - p.b,
                      a: c.a - p.a,
                    });
                }
            else for (o = 0; o < s; o++) i.push(e[o] - r[o]);
          } else
            -1 !== h.indexOf(t)
              ? ((r = n.Util.colorToRGBA(r)),
                (i = {
                  r: (c = n.Util.colorToRGBA(e)).r - r.r,
                  g: c.g - r.g,
                  b: c.b - r.b,
                  a: c.a - r.a,
                }))
              : (i = e - r);
          (d.attrs[g][this._id][t] = {
            start: r,
            diff: i,
            end: e,
            trueEnd: l,
            trueStart: u,
          }),
            (d.tweens[g][t] = this._id);
        }
        _tweenFunc(t) {
          var e,
            r,
            i,
            a,
            o,
            s,
            l,
            u,
            c = this.node,
            f = d.attrs[c._id][this._id];
          for (e in f) {
            if (
              ((i = (r = f[e]).start),
              (a = r.diff),
              (u = r.end),
              n.Util._isArray(i))
            ) {
              if (
                ((o = []),
                (l = Math.max(i.length, u.length)),
                0 === e.indexOf("fill"))
              )
                for (s = 0; s < l; s++)
                  s % 2 == 0
                    ? o.push((i[s] || 0) + a[s] * t)
                    : o.push(
                        "rgba(" +
                          Math.round(i[s].r + a[s].r * t) +
                          "," +
                          Math.round(i[s].g + a[s].g * t) +
                          "," +
                          Math.round(i[s].b + a[s].b * t) +
                          "," +
                          (i[s].a + a[s].a * t) +
                          ")"
                      );
              else for (s = 0; s < l; s++) o.push((i[s] || 0) + a[s] * t);
            } else
              o =
                -1 !== h.indexOf(e)
                  ? "rgba(" +
                    Math.round(i.r + a.r * t) +
                    "," +
                    Math.round(i.g + a.g * t) +
                    "," +
                    Math.round(i.b + a.b * t) +
                    "," +
                    (i.a + a.a * t) +
                    ")"
                  : i + a * t;
            c.setAttr(e, o);
          }
        }
        _addListeners() {
          (this.tween.onPlay = () => {
            this.anim.start();
          }),
            (this.tween.onReverse = () => {
              this.anim.start();
            }),
            (this.tween.onPause = () => {
              this.anim.stop();
            }),
            (this.tween.onFinish = () => {
              var t = this.node,
                e = d.attrs[t._id][this._id];
              e.points &&
                e.points.trueEnd &&
                t.setAttr("points", e.points.trueEnd),
                this.onFinish && this.onFinish.call(this);
            }),
            (this.tween.onReset = () => {
              var t = this.node,
                e = d.attrs[t._id][this._id];
              e.points && e.points.trueStart && t.points(e.points.trueStart),
                this.onReset && this.onReset();
            }),
            (this.tween.onUpdate = () => {
              this.onUpdate && this.onUpdate.call(this);
            });
        }
        play() {
          return this.tween.play(), this;
        }
        reverse() {
          return this.tween.reverse(), this;
        }
        reset() {
          return this.tween.reset(), this;
        }
        seek(t) {
          return this.tween.seek(1e3 * t), this;
        }
        pause() {
          return this.tween.pause(), this;
        }
        finish() {
          return this.tween.finish(), this;
        }
        destroy() {
          var t,
            e = this.node._id,
            r = this._id,
            n = d.tweens[e];
          for (t in (this.pause(), n)) delete d.tweens[e][t];
          delete d.attrs[e][r];
        }
      }
      (e.Tween = d),
        (d.attrs = {}),
        (d.tweens = {}),
        (a.Node.prototype.to = function (t) {
          var e = t.onFinish;
          (t.node = this),
            (t.onFinish = function () {
              this.destroy(), e && e();
            }),
            new d(t).play();
        }),
        (e.Easings = {
          BackEaseIn: (t, e, r, n) =>
            r * (t /= n) * t * (2.70158 * t - 1.70158) + e,
          BackEaseOut: (t, e, r, n) =>
            r * ((t = t / n - 1) * t * (2.70158 * t + 1.70158) + 1) + e,
          BackEaseInOut(t, e, r, n) {
            var i = 1.70158;
            return (t /= n / 2) < 1
              ? (r / 2) * (t * t * (((i *= 1.525) + 1) * t - i)) + e
              : (r / 2) * ((t -= 2) * t * (((i *= 1.525) + 1) * t + i) + 2) + e;
          },
          ElasticEaseIn(t, e, r, n, i, a) {
            var o = 0;
            return 0 === t
              ? e
              : 1 == (t /= n)
              ? e + r
              : (a || (a = 0.3 * n),
                !i || i < Math.abs(r)
                  ? ((i = r), (o = a / 4))
                  : (o = (a / (2 * Math.PI)) * Math.asin(r / i)),
                -(
                  i *
                  Math.pow(2, 10 * (t -= 1)) *
                  Math.sin((2 * Math.PI * (t * n - o)) / a)
                ) + e);
          },
          ElasticEaseOut(t, e, r, n, i, a) {
            var o = 0;
            return 0 === t
              ? e
              : 1 == (t /= n)
              ? e + r
              : (a || (a = 0.3 * n),
                !i || i < Math.abs(r)
                  ? ((i = r), (o = a / 4))
                  : (o = (a / (2 * Math.PI)) * Math.asin(r / i)),
                i *
                  Math.pow(2, -10 * t) *
                  Math.sin((2 * Math.PI * (t * n - o)) / a) +
                  r +
                  e);
          },
          ElasticEaseInOut(t, e, r, n, i, a) {
            var o = 0;
            return 0 === t
              ? e
              : 2 == (t /= n / 2)
              ? e + r
              : (a || (a = 0.3 * 1.5 * n),
                !i || i < Math.abs(r)
                  ? ((i = r), (o = a / 4))
                  : (o = (a / (2 * Math.PI)) * Math.asin(r / i)),
                t < 1)
              ? -(
                  i *
                  Math.pow(2, 10 * (t -= 1)) *
                  Math.sin((2 * Math.PI * (t * n - o)) / a) *
                  0.5
                ) + e
              : i *
                  Math.pow(2, -10 * (t -= 1)) *
                  Math.sin((2 * Math.PI * (t * n - o)) / a) *
                  0.5 +
                r +
                e;
          },
          BounceEaseOut: (t, e, r, n) =>
            (t /= n) < 1 / 2.75
              ? 7.5625 * t * t * r + e
              : t < 2 / 2.75
              ? r * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + e
              : t < 2.5 / 2.75
              ? r * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + e
              : r * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + e,
          BounceEaseIn: (t, r, n, i) =>
            n - e.Easings.BounceEaseOut(i - t, 0, n, i) + r,
          BounceEaseInOut: (t, r, n, i) =>
            t < i / 2
              ? 0.5 * e.Easings.BounceEaseIn(2 * t, 0, n, i) + r
              : 0.5 * e.Easings.BounceEaseOut(2 * t - i, 0, n, i) + 0.5 * n + r,
          EaseIn: (t, e, r, n) => r * (t /= n) * t + e,
          EaseOut: (t, e, r, n) => -r * (t /= n) * (t - 2) + e,
          EaseInOut: (t, e, r, n) =>
            (t /= n / 2) < 1
              ? (r / 2) * t * t + e
              : (-r / 2) * (--t * (t - 2) - 1) + e,
          StrongEaseIn: (t, e, r, n) => r * (t /= n) * t * t * t * t + e,
          StrongEaseOut: (t, e, r, n) =>
            r * ((t = t / n - 1) * t * t * t * t + 1) + e,
          StrongEaseInOut: (t, e, r, n) =>
            (t /= n / 2) < 1
              ? (r / 2) * t * t * t * t * t + e
              : (r / 2) * ((t -= 2) * t * t * t * t + 2) + e,
          Linear: (t, e, r, n) => (r * t) / n + e,
        });
    },
    5329: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Util = e.Transform = void 0);
      let n = r(9649);
      class i {
        constructor(t = [1, 0, 0, 1, 0, 0]) {
          (this.dirty = !1), (this.m = (t && t.slice()) || [1, 0, 0, 1, 0, 0]);
        }
        reset() {
          (this.m[0] = 1),
            (this.m[1] = 0),
            (this.m[2] = 0),
            (this.m[3] = 1),
            (this.m[4] = 0),
            (this.m[5] = 0);
        }
        copy() {
          return new i(this.m);
        }
        copyInto(t) {
          (t.m[0] = this.m[0]),
            (t.m[1] = this.m[1]),
            (t.m[2] = this.m[2]),
            (t.m[3] = this.m[3]),
            (t.m[4] = this.m[4]),
            (t.m[5] = this.m[5]);
        }
        point(t) {
          var e = this.m;
          return {
            x: e[0] * t.x + e[2] * t.y + e[4],
            y: e[1] * t.x + e[3] * t.y + e[5],
          };
        }
        translate(t, e) {
          return (
            (this.m[4] += this.m[0] * t + this.m[2] * e),
            (this.m[5] += this.m[1] * t + this.m[3] * e),
            this
          );
        }
        scale(t, e) {
          return (
            (this.m[0] *= t),
            (this.m[1] *= t),
            (this.m[2] *= e),
            (this.m[3] *= e),
            this
          );
        }
        rotate(t) {
          var e = Math.cos(t),
            r = Math.sin(t),
            n = this.m[0] * e + this.m[2] * r,
            i = this.m[1] * e + this.m[3] * r,
            a = -(this.m[0] * r) + this.m[2] * e,
            o = -(this.m[1] * r) + this.m[3] * e;
          return (
            (this.m[0] = n),
            (this.m[1] = i),
            (this.m[2] = a),
            (this.m[3] = o),
            this
          );
        }
        getTranslation() {
          return {
            x: this.m[4],
            y: this.m[5],
          };
        }
        skew(t, e) {
          var r = this.m[0] + this.m[2] * e,
            n = this.m[1] + this.m[3] * e,
            i = this.m[2] + this.m[0] * t,
            a = this.m[3] + this.m[1] * t;
          return (
            (this.m[0] = r),
            (this.m[1] = n),
            (this.m[2] = i),
            (this.m[3] = a),
            this
          );
        }
        multiply(t) {
          var e = this.m[0] * t.m[0] + this.m[2] * t.m[1],
            r = this.m[1] * t.m[0] + this.m[3] * t.m[1],
            n = this.m[0] * t.m[2] + this.m[2] * t.m[3],
            i = this.m[1] * t.m[2] + this.m[3] * t.m[3],
            a = this.m[0] * t.m[4] + this.m[2] * t.m[5] + this.m[4],
            o = this.m[1] * t.m[4] + this.m[3] * t.m[5] + this.m[5];
          return (
            (this.m[0] = e),
            (this.m[1] = r),
            (this.m[2] = n),
            (this.m[3] = i),
            (this.m[4] = a),
            (this.m[5] = o),
            this
          );
        }
        invert() {
          var t = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]),
            e = this.m[3] * t,
            r = -this.m[1] * t,
            n = -this.m[2] * t,
            i = this.m[0] * t,
            a = t * (this.m[2] * this.m[5] - this.m[3] * this.m[4]),
            o = t * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
          return (
            (this.m[0] = e),
            (this.m[1] = r),
            (this.m[2] = n),
            (this.m[3] = i),
            (this.m[4] = a),
            (this.m[5] = o),
            this
          );
        }
        getMatrix() {
          return this.m;
        }
        decompose() {
          var t = this.m[0],
            r = this.m[1],
            n = this.m[2],
            i = this.m[3],
            a = this.m[4],
            o = this.m[5],
            s = t * i - r * n;
          let l = {
            x: a,
            y: o,
            rotation: 0,
            scaleX: 0,
            scaleY: 0,
            skewX: 0,
            skewY: 0,
          };
          if (0 != t || 0 != r) {
            var h = Math.sqrt(t * t + r * r);
            (l.rotation = r > 0 ? Math.acos(t / h) : -Math.acos(t / h)),
              (l.scaleX = h),
              (l.scaleY = s / h),
              (l.skewX = (t * n + r * i) / s),
              (l.skewY = 0);
          } else if (0 != n || 0 != i) {
            var u = Math.sqrt(n * n + i * i);
            (l.rotation =
              Math.PI / 2 - (i > 0 ? Math.acos(-n / u) : -Math.acos(n / u))),
              (l.scaleX = s / u),
              (l.scaleY = u),
              (l.skewX = 0),
              (l.skewY = (t * n + r * i) / s);
          }
          return (l.rotation = e.Util._getRotation(l.rotation)), l;
        }
      }
      e.Transform = i;
      var a = Math.PI / 180,
        o = 180 / Math.PI,
        s = "Konva error: ",
        l = {
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 132, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 255, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          grey: [128, 128, 128],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 203],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          rebeccapurple: [102, 51, 153],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [119, 128, 144],
          slategrey: [119, 128, 144],
          snow: [255, 255, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          transparent: [255, 255, 255, 0],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 5],
        },
        h = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/,
        u = [];
      let d =
        ("undefined" != typeof requestAnimationFrame &&
          requestAnimationFrame) ||
        function (t) {
          setTimeout(t, 60);
        };
      e.Util = {
        _isElement: (t) => !!(t && 1 == t.nodeType),
        _isFunction: (t) => !!(t && t.constructor && t.call && t.apply),
        _isPlainObject: (t) => !!t && t.constructor === Object,
        _isArray: (t) => "[object Array]" === Object.prototype.toString.call(t),
        _isNumber: (t) =>
          "[object Number]" === Object.prototype.toString.call(t) &&
          !isNaN(t) &&
          isFinite(t),
        _isString: (t) =>
          "[object String]" === Object.prototype.toString.call(t),
        _isBoolean: (t) =>
          "[object Boolean]" === Object.prototype.toString.call(t),
        isObject: (t) => t instanceof Object,
        isValidSelector(t) {
          if ("string" != typeof t) return !1;
          var e = t[0];
          return "#" === e || "." === e || e === e.toUpperCase();
        },
        _sign: (t) => (0 === t ? 1 : t > 0 ? 1 : -1),
        requestAnimFrame(t) {
          u.push(t),
            1 === u.length &&
              d(function () {
                let t = u;
                (u = []),
                  t.forEach(function (t) {
                    t();
                  });
              });
        },
        createCanvasElement() {
          var t = document.createElement("canvas");
          try {
            t.style = t.style || {};
          } catch (t) {}
          return t;
        },
        createImageElement: () => document.createElement("img"),
        _isInDocument(t) {
          for (; (t = t.parentNode); ) if (t == document) return !0;
          return !1;
        },
        _urlToImage(t, r) {
          var n = e.Util.createImageElement();
          (n.onload = function () {
            r(n);
          }),
            (n.src = t);
        },
        _rgbToHex: (t, e, r) =>
          (16777216 + (t << 16) + (e << 8) + r).toString(16).slice(1),
        _hexToRgb(t) {
          var e = parseInt((t = t.replace("#", "")), 16);
          return {
            r: (e >> 16) & 255,
            g: (e >> 8) & 255,
            b: 255 & e,
          };
        },
        getRandomColor() {
          for (
            var t = ((16777215 * Math.random()) << 0).toString(16);
            t.length < 6;

          )
            t = "0" + t;
          return "#" + t;
        },
        getRGB(t) {
          var e;
          return t in l
            ? {
                r: (e = l[t])[0],
                g: e[1],
                b: e[2],
              }
            : "#" === t[0]
            ? this._hexToRgb(t.substring(1))
            : "rgb(" === t.substr(0, 4)
            ? {
                r: parseInt((e = h.exec(t.replace(/ /g, "")))[1], 10),
                g: parseInt(e[2], 10),
                b: parseInt(e[3], 10),
              }
            : {
                r: 0,
                g: 0,
                b: 0,
              };
        },
        colorToRGBA: (t) => (
          (t = t || "black"),
          e.Util._namedColorToRBA(t) ||
            e.Util._hex3ColorToRGBA(t) ||
            e.Util._hex4ColorToRGBA(t) ||
            e.Util._hex6ColorToRGBA(t) ||
            e.Util._hex8ColorToRGBA(t) ||
            e.Util._rgbColorToRGBA(t) ||
            e.Util._rgbaColorToRGBA(t) ||
            e.Util._hslColorToRGBA(t)
        ),
        _namedColorToRBA(t) {
          var e = l[t.toLowerCase()];
          return e
            ? {
                r: e[0],
                g: e[1],
                b: e[2],
                a: 1,
              }
            : null;
        },
        _rgbColorToRGBA(t) {
          if (0 === t.indexOf("rgb(")) {
            var e = (t = t.match(/rgb\(([^)]+)\)/)[1])
              .split(/ *, */)
              .map(Number);
            return {
              r: e[0],
              g: e[1],
              b: e[2],
              a: 1,
            };
          }
        },
        _rgbaColorToRGBA(t) {
          if (0 === t.indexOf("rgba(")) {
            var e = (t = t.match(/rgba\(([^)]+)\)/)[1])
              .split(/ *, */)
              .map((t, e) =>
                "%" === t.slice(-1)
                  ? 3 === e
                    ? parseInt(t) / 100
                    : (parseInt(t) / 100) * 255
                  : Number(t)
              );
            return {
              r: e[0],
              g: e[1],
              b: e[2],
              a: e[3],
            };
          }
        },
        _hex8ColorToRGBA(t) {
          if ("#" === t[0] && 9 === t.length)
            return {
              r: parseInt(t.slice(1, 3), 16),
              g: parseInt(t.slice(3, 5), 16),
              b: parseInt(t.slice(5, 7), 16),
              a: parseInt(t.slice(7, 9), 16) / 255,
            };
        },
        _hex6ColorToRGBA(t) {
          if ("#" === t[0] && 7 === t.length)
            return {
              r: parseInt(t.slice(1, 3), 16),
              g: parseInt(t.slice(3, 5), 16),
              b: parseInt(t.slice(5, 7), 16),
              a: 1,
            };
        },
        _hex4ColorToRGBA(t) {
          if ("#" === t[0] && 5 === t.length)
            return {
              r: parseInt(t[1] + t[1], 16),
              g: parseInt(t[2] + t[2], 16),
              b: parseInt(t[3] + t[3], 16),
              a: parseInt(t[4] + t[4], 16) / 255,
            };
        },
        _hex3ColorToRGBA(t) {
          if ("#" === t[0] && 4 === t.length)
            return {
              r: parseInt(t[1] + t[1], 16),
              g: parseInt(t[2] + t[2], 16),
              b: parseInt(t[3] + t[3], 16),
              a: 1,
            };
        },
        _hslColorToRGBA(t) {
          if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(t)) {
            let e, r, n;
            let [i, ...a] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t),
              o = Number(a[0]) / 360,
              s = Number(a[1]) / 100,
              l = Number(a[2]) / 100;
            if (0 === s)
              return {
                r: Math.round((n = 255 * l)),
                g: Math.round(n),
                b: Math.round(n),
                a: 1,
              };
            e = l < 0.5 ? l * (1 + s) : l + s - l * s;
            let h = 2 * l - e,
              u = [0, 0, 0];
            for (let t = 0; t < 3; t++)
              (r = o + -((1 / 3) * (t - 1))) < 0 && r++,
                r > 1 && r--,
                (n =
                  6 * r < 1
                    ? h + (e - h) * 6 * r
                    : 2 * r < 1
                    ? e
                    : 3 * r < 2
                    ? h + (e - h) * (2 / 3 - r) * 6
                    : h),
                (u[t] = 255 * n);
            return {
              r: Math.round(u[0]),
              g: Math.round(u[1]),
              b: Math.round(u[2]),
              a: 1,
            };
          }
        },
        haveIntersection: (t, e) =>
          !(
            e.x > t.x + t.width ||
            e.x + e.width < t.x ||
            e.y > t.y + t.height ||
            e.y + e.height < t.y
          ),
        cloneObject(t) {
          var e = {};
          for (var r in t)
            this._isPlainObject(t[r])
              ? (e[r] = this.cloneObject(t[r]))
              : this._isArray(t[r])
              ? (e[r] = this.cloneArray(t[r]))
              : (e[r] = t[r]);
          return e;
        },
        cloneArray: (t) => t.slice(0),
        degToRad: (t) => t * a,
        radToDeg: (t) => t * o,
        _degToRad: (t) => (
          e.Util.warn(
            "Util._degToRad is removed. Please use public Util.degToRad instead."
          ),
          e.Util.degToRad(t)
        ),
        _radToDeg: (t) => (
          e.Util.warn(
            "Util._radToDeg is removed. Please use public Util.radToDeg instead."
          ),
          e.Util.radToDeg(t)
        ),
        _getRotation: (t) => (n.Konva.angleDeg ? e.Util.radToDeg(t) : t),
        _capitalize: (t) => t.charAt(0).toUpperCase() + t.slice(1),
        throw(t) {
          throw Error(s + t);
        },
        error(t) {
          console.error(s + t);
        },
        warn(t) {
          n.Konva.showWarnings && console.warn("Konva warning: " + t);
        },
        each(t, e) {
          for (var r in t) e(r, t[r]);
        },
        _inRange: (t, e, r) => e <= t && t < r,
        _getProjectionToSegment(t, e, r, n, i, a) {
          var o,
            s,
            l,
            h = (t - r) * (t - r) + (e - n) * (e - n);
          if (0 == h)
            (o = t), (s = e), (l = (i - r) * (i - r) + (a - n) * (a - n));
          else {
            var u = ((i - t) * (r - t) + (a - e) * (n - e)) / h;
            u < 0
              ? ((o = t), (s = e), (l = (t - i) * (t - i) + (e - a) * (e - a)))
              : u > 1
              ? ((o = r), (s = n), (l = (r - i) * (r - i) + (n - a) * (n - a)))
              : (l =
                  ((o = t + u * (r - t)) - i) * (o - i) +
                  ((s = e + u * (n - e)) - a) * (s - a));
          }
          return [o, s, l];
        },
        _getProjectionToLine(t, r, n) {
          var i = e.Util.cloneObject(t),
            a = Number.MAX_VALUE;
          return (
            r.forEach(function (o, s) {
              if (n || s !== r.length - 1) {
                var l = r[(s + 1) % r.length],
                  h = e.Util._getProjectionToSegment(
                    o.x,
                    o.y,
                    l.x,
                    l.y,
                    t.x,
                    t.y
                  ),
                  u = h[0],
                  d = h[1],
                  c = h[2];
                c < a && ((i.x = u), (i.y = d), (a = c));
              }
            }),
            i
          );
        },
        _prepareArrayForTween(t, r, n) {
          var i,
            a = [],
            o = [];
          if (t.length > r.length) {
            var s = r;
            (r = t), (t = s);
          }
          for (i = 0; i < t.length; i += 2)
            a.push({
              x: t[i],
              y: t[i + 1],
            });
          for (i = 0; i < r.length; i += 2)
            o.push({
              x: r[i],
              y: r[i + 1],
            });
          var l = [];
          return (
            o.forEach(function (t) {
              var r = e.Util._getProjectionToLine(t, a, n);
              l.push(r.x), l.push(r.y);
            }),
            l
          );
        },
        _prepareToStringify(t) {
          var r;
          for (var n in ((t.visitedByCircularReferenceRemoval = !0), t))
            if (t.hasOwnProperty(n) && t[n] && "object" == typeof t[n]) {
              if (
                ((r = Object.getOwnPropertyDescriptor(t, n)),
                t[n].visitedByCircularReferenceRemoval ||
                  e.Util._isElement(t[n]))
              ) {
                if (!r.configurable) return null;
                delete t[n];
              } else if (null === e.Util._prepareToStringify(t[n])) {
                if (!r.configurable) return null;
                delete t[n];
              }
            }
          return delete t.visitedByCircularReferenceRemoval, t;
        },
        _assign(t, e) {
          for (var r in e) t[r] = e[r];
          return t;
        },
        _getFirstPointerId: (t) =>
          t.touches ? t.changedTouches[0].identifier : t.pointerId || 999,
        releaseCanvas(...t) {
          n.Konva.releaseCanvasOnDestroy &&
            t.forEach((t) => {
              (t.width = 0), (t.height = 0);
            });
        },
        drawRoundedRectPath(t, e, r, n) {
          let i = 0,
            a = 0,
            o = 0,
            s = 0;
          "number" == typeof n
            ? (i = a = o = s = Math.min(n, e / 2, r / 2))
            : ((i = Math.min(n[0] || 0, e / 2, r / 2)),
              (a = Math.min(n[1] || 0, e / 2, r / 2)),
              (s = Math.min(n[2] || 0, e / 2, r / 2)),
              (o = Math.min(n[3] || 0, e / 2, r / 2))),
            t.moveTo(i, 0),
            t.lineTo(e - a, 0),
            t.arc(e - a, a, a, (3 * Math.PI) / 2, 0, !1),
            t.lineTo(e, r - s),
            t.arc(e - s, r - s, s, 0, Math.PI / 2, !1),
            t.lineTo(o, r),
            t.arc(o, r - o, o, Math.PI / 2, Math.PI, !1),
            t.lineTo(0, i),
            t.arc(i, i, i, Math.PI, (3 * Math.PI) / 2, !1);
        },
      };
    },
    7367: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.getComponentValidator =
          e.getBooleanValidator =
          e.getNumberArrayValidator =
          e.getFunctionValidator =
          e.getStringOrGradientValidator =
          e.getStringValidator =
          e.getNumberOrAutoValidator =
          e.getNumberOrArrayOfNumbersValidator =
          e.getNumberValidator =
          e.alphaComponent =
          e.RGBComponent =
            void 0);
      let n = r(9649),
        i = r(5329);
      function a(t) {
        return i.Util._isString(t)
          ? '"' + t + '"'
          : "[object Number]" === Object.prototype.toString.call(t) ||
            i.Util._isBoolean(t)
          ? t
          : Object.prototype.toString.call(t);
      }
      (e.RGBComponent = function (t) {
        return t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
      }),
        (e.alphaComponent = function (t) {
          return t > 1 ? 1 : t < 1e-4 ? 1e-4 : t;
        }),
        (e.getNumberValidator = function () {
          if (n.Konva.isUnminified)
            return function (t, e) {
              return (
                i.Util._isNumber(t) ||
                  i.Util.warn(
                    a(t) +
                      ' is a not valid value for "' +
                      e +
                      '" attribute. The value should be a number.'
                  ),
                t
              );
            };
        }),
        (e.getNumberOrArrayOfNumbersValidator = function (t) {
          if (n.Konva.isUnminified)
            return function (e, r) {
              let n = i.Util._isNumber(e),
                o = i.Util._isArray(e) && e.length == t;
              return (
                n ||
                  o ||
                  i.Util.warn(
                    a(e) +
                      ' is a not valid value for "' +
                      r +
                      '" attribute. The value should be a number or Array<number>(' +
                      t +
                      ")"
                  ),
                e
              );
            };
        }),
        (e.getNumberOrAutoValidator = function () {
          if (n.Konva.isUnminified)
            return function (t, e) {
              var r = i.Util._isNumber(t),
                n = "auto" === t;
              return (
                r ||
                  n ||
                  i.Util.warn(
                    a(t) +
                      ' is a not valid value for "' +
                      e +
                      '" attribute. The value should be a number or "auto".'
                  ),
                t
              );
            };
        }),
        (e.getStringValidator = function () {
          if (n.Konva.isUnminified)
            return function (t, e) {
              return (
                i.Util._isString(t) ||
                  i.Util.warn(
                    a(t) +
                      ' is a not valid value for "' +
                      e +
                      '" attribute. The value should be a string.'
                  ),
                t
              );
            };
        }),
        (e.getStringOrGradientValidator = function () {
          if (n.Konva.isUnminified)
            return function (t, e) {
              let r = i.Util._isString(t),
                n =
                  "[object CanvasGradient]" ===
                    Object.prototype.toString.call(t) ||
                  (t && t.addColorStop);
              return (
                r ||
                  n ||
                  i.Util.warn(
                    a(t) +
                      ' is a not valid value for "' +
                      e +
                      '" attribute. The value should be a string or a native gradient.'
                  ),
                t
              );
            };
        }),
        (e.getFunctionValidator = function () {
          if (n.Konva.isUnminified)
            return function (t, e) {
              return (
                i.Util._isFunction(t) ||
                  i.Util.warn(
                    a(t) +
                      ' is a not valid value for "' +
                      e +
                      '" attribute. The value should be a function.'
                  ),
                t
              );
            };
        }),
        (e.getNumberArrayValidator = function () {
          if (n.Konva.isUnminified)
            return function (t, e) {
              let r = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
              return (
                (r && t instanceof r) ||
                  (i.Util._isArray(t)
                    ? t.forEach(function (t) {
                        i.Util._isNumber(t) ||
                          i.Util.warn(
                            '"' +
                              e +
                              '" attribute has non numeric element ' +
                              t +
                              ". Make sure that all elements are numbers."
                          );
                      })
                    : i.Util.warn(
                        a(t) +
                          ' is a not valid value for "' +
                          e +
                          '" attribute. The value should be a array of numbers.'
                      )),
                t
              );
            };
        }),
        (e.getBooleanValidator = function () {
          if (n.Konva.isUnminified)
            return function (t, e) {
              return (
                !0 === t ||
                  !1 === t ||
                  i.Util.warn(
                    a(t) +
                      ' is a not valid value for "' +
                      e +
                      '" attribute. The value should be a boolean.'
                  ),
                t
              );
            };
        }),
        (e.getComponentValidator = function (t) {
          if (n.Konva.isUnminified)
            return function (e, r) {
              return (
                null == e ||
                  i.Util.isObject(e) ||
                  i.Util.warn(
                    a(e) +
                      ' is a not valid value for "' +
                      r +
                      '" attribute. The value should be an object with properties ' +
                      t
                  ),
                e
              );
            };
        });
    },
    9842: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Konva = void 0);
      let n = r(9649),
        i = r(5329),
        a = r(4667),
        o = r(9682),
        s = r(9144),
        l = r(6665),
        h = r(3006),
        u = r(2853),
        d = r(8790),
        c = r(7439),
        f = r(895),
        g = r(7658),
        p = r(966),
        v = r(7193);
      (e.Konva = i.Util._assign(n.Konva, {
        Util: i.Util,
        Transform: i.Transform,
        Node: a.Node,
        Container: o.Container,
        Stage: s.Stage,
        stages: s.stages,
        Layer: l.Layer,
        FastLayer: h.FastLayer,
        Group: u.Group,
        DD: d.DD,
        Shape: c.Shape,
        shapes: c.shapes,
        Animation: f.Animation,
        Tween: g.Tween,
        Easings: g.Easings,
        Context: p.Context,
        Canvas: v.Canvas,
      })),
        (e.default = e.Konva);
    },
    4097: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Konva = void 0);
      let n = r(9842),
        i = r(121),
        a = r(7270),
        o = r(7184),
        s = r(2689),
        l = r(4582),
        h = r(6218),
        u = r(64),
        d = r(7771),
        c = r(8294),
        f = r(9870),
        g = r(7827),
        p = r(706),
        v = r(3371),
        m = r(1588),
        y = r(1735),
        b = r(6740),
        _ = r(1020),
        S = r(375),
        x = r(6797),
        w = r(2613),
        C = r(4898),
        k = r(5073),
        P = r(5640),
        T = r(9133),
        E = r(3785),
        F = r(3123),
        M = r(206),
        N = r(8962),
        A = r(6990),
        R = r(5812),
        D = r(7142),
        L = r(6497),
        I = r(5492),
        G = r(3186),
        O = r(5639),
        z = r(1940);
      e.Konva = n.Konva.Util._assign(n.Konva, {
        Arc: i.Arc,
        Arrow: a.Arrow,
        Circle: o.Circle,
        Ellipse: s.Ellipse,
        Image: l.Image,
        Label: h.Label,
        Tag: h.Tag,
        Line: u.Line,
        Path: d.Path,
        Rect: c.Rect,
        RegularPolygon: f.RegularPolygon,
        Ring: g.Ring,
        Sprite: p.Sprite,
        Star: v.Star,
        Text: m.Text,
        TextPath: y.TextPath,
        Transformer: b.Transformer,
        Wedge: _.Wedge,
        Filters: {
          Blur: S.Blur,
          Brighten: x.Brighten,
          Contrast: w.Contrast,
          Emboss: C.Emboss,
          Enhance: k.Enhance,
          Grayscale: P.Grayscale,
          HSL: T.HSL,
          HSV: E.HSV,
          Invert: F.Invert,
          Kaleidoscope: M.Kaleidoscope,
          Mask: N.Mask,
          Noise: A.Noise,
          Pixelate: R.Pixelate,
          Posterize: D.Posterize,
          RGB: L.RGB,
          RGBA: I.RGBA,
          Sepia: G.Sepia,
          Solarize: O.Solarize,
          Threshold: z.Threshold,
        },
      });
    },
    375: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Blur = void 0);
      let n = r(1027),
        i = r(4667),
        a = r(7367);
      function o() {
        (this.r = 0),
          (this.g = 0),
          (this.b = 0),
          (this.a = 0),
          (this.next = null);
      }
      var s = [
          512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335,
          292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335,
          312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298,
          284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335,
          323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428,
          417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298,
          291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437,
          428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335,
          329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265,
          261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428,
          422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354,
          350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298,
          294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507,
          501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437,
          433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381,
          377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335,
          332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297,
          294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265,
          263, 261, 259,
        ],
        l = [
          9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17,
          17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19,
          19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20,
          20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21,
          21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
          21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        ];
      (e.Blur = function (t) {
        var e = Math.round(this.blurRadius());
        e > 0 &&
          (function (t, e) {
            var r,
              n,
              i,
              a,
              h,
              u,
              d,
              c,
              f,
              g,
              p,
              v,
              m,
              y,
              b,
              _,
              S,
              x,
              w,
              C,
              k,
              P,
              T,
              E,
              F = t.data,
              M = t.width,
              N = t.height,
              A = e + e + 1,
              R = M - 1,
              D = N - 1,
              L = e + 1,
              I = (L * (L + 1)) / 2,
              G = new o(),
              O = null,
              z = G,
              U = null,
              B = null,
              H = s[e],
              V = l[e];
            for (i = 1; i < A; i++) (z = z.next = new o()), i === L && (O = z);
            for (n = 0, z.next = G, d = u = 0; n < N; n++) {
              for (
                _ = S = x = w = c = f = g = p = 0,
                  v = L * (C = F[u]),
                  m = L * (k = F[u + 1]),
                  y = L * (P = F[u + 2]),
                  b = L * (T = F[u + 3]),
                  c += I * C,
                  f += I * k,
                  g += I * P,
                  p += I * T,
                  z = G,
                  i = 0;
                i < L;
                i++
              )
                (z.r = C), (z.g = k), (z.b = P), (z.a = T), (z = z.next);
              for (i = 1; i < L; i++)
                (a = u + ((R < i ? R : i) << 2)),
                  (c += (z.r = C = F[a]) * (E = L - i)),
                  (f += (z.g = k = F[a + 1]) * E),
                  (g += (z.b = P = F[a + 2]) * E),
                  (p += (z.a = T = F[a + 3]) * E),
                  (_ += C),
                  (S += k),
                  (x += P),
                  (w += T),
                  (z = z.next);
              for (r = 0, U = G, B = O; r < M; r++)
                (F[u + 3] = T = (p * H) >> V),
                  0 !== T
                    ? ((T = 255 / T),
                      (F[u] = ((c * H) >> V) * T),
                      (F[u + 1] = ((f * H) >> V) * T),
                      (F[u + 2] = ((g * H) >> V) * T))
                    : (F[u] = F[u + 1] = F[u + 2] = 0),
                  (c -= v),
                  (f -= m),
                  (g -= y),
                  (p -= b),
                  (v -= U.r),
                  (m -= U.g),
                  (y -= U.b),
                  (b -= U.a),
                  (a = (d + ((a = r + e + 1) < R ? a : R)) << 2),
                  (_ += U.r = F[a]),
                  (S += U.g = F[a + 1]),
                  (x += U.b = F[a + 2]),
                  (w += U.a = F[a + 3]),
                  (c += _),
                  (f += S),
                  (g += x),
                  (p += w),
                  (U = U.next),
                  (v += C = B.r),
                  (m += k = B.g),
                  (y += P = B.b),
                  (b += T = B.a),
                  (_ -= C),
                  (S -= k),
                  (x -= P),
                  (w -= T),
                  (B = B.next),
                  (u += 4);
              d += M;
            }
            for (r = 0; r < M; r++) {
              for (
                S = x = w = _ = f = g = p = c = 0,
                  v = L * (C = F[(u = r << 2)]),
                  m = L * (k = F[u + 1]),
                  y = L * (P = F[u + 2]),
                  b = L * (T = F[u + 3]),
                  c += I * C,
                  f += I * k,
                  g += I * P,
                  p += I * T,
                  z = G,
                  i = 0;
                i < L;
                i++
              )
                (z.r = C), (z.g = k), (z.b = P), (z.a = T), (z = z.next);
              for (i = 1, h = M; i <= e; i++)
                (u = (h + r) << 2),
                  (c += (z.r = C = F[u]) * (E = L - i)),
                  (f += (z.g = k = F[u + 1]) * E),
                  (g += (z.b = P = F[u + 2]) * E),
                  (p += (z.a = T = F[u + 3]) * E),
                  (_ += C),
                  (S += k),
                  (x += P),
                  (w += T),
                  (z = z.next),
                  i < D && (h += M);
              for (n = 0, u = r, U = G, B = O; n < N; n++)
                (F[(a = u << 2) + 3] = T = (p * H) >> V),
                  T > 0
                    ? ((T = 255 / T),
                      (F[a] = ((c * H) >> V) * T),
                      (F[a + 1] = ((f * H) >> V) * T),
                      (F[a + 2] = ((g * H) >> V) * T))
                    : (F[a] = F[a + 1] = F[a + 2] = 0),
                  (c -= v),
                  (f -= m),
                  (g -= y),
                  (p -= b),
                  (v -= U.r),
                  (m -= U.g),
                  (y -= U.b),
                  (b -= U.a),
                  (a = (r + ((a = n + L) < D ? a : D) * M) << 2),
                  (c += _ += U.r = F[a]),
                  (f += S += U.g = F[a + 1]),
                  (g += x += U.b = F[a + 2]),
                  (p += w += U.a = F[a + 3]),
                  (U = U.next),
                  (v += C = B.r),
                  (m += k = B.g),
                  (y += P = B.b),
                  (b += T = B.a),
                  (_ -= C),
                  (S -= k),
                  (x -= P),
                  (w -= T),
                  (B = B.next),
                  (u += M);
            }
          })(t, e);
      }),
        n.Factory.addGetterSetter(
          i.Node,
          "blurRadius",
          0,
          (0, a.getNumberValidator)(),
          n.Factory.afterSetFilter
        );
    },
    6797: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Brighten = void 0);
      let n = r(1027),
        i = r(4667),
        a = r(7367);
      (e.Brighten = function (t) {
        var e,
          r = 255 * this.brightness(),
          n = t.data,
          i = n.length;
        for (e = 0; e < i; e += 4)
          (n[e] += r), (n[e + 1] += r), (n[e + 2] += r);
      }),
        n.Factory.addGetterSetter(
          i.Node,
          "brightness",
          0,
          (0, a.getNumberValidator)(),
          n.Factory.afterSetFilter
        );
    },
    2613: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Contrast = void 0);
      let n = r(1027),
        i = r(4667),
        a = r(7367);
      (e.Contrast = function (t) {
        var e,
          r = Math.pow((this.contrast() + 100) / 100, 2),
          n = t.data,
          i = n.length,
          a = 150,
          o = 150,
          s = 150;
        for (e = 0; e < i; e += 4)
          (a = n[e]),
            (o = n[e + 1]),
            (s = n[e + 2]),
            (a /= 255),
            (a -= 0.5),
            (a *= r),
            (a += 0.5),
            (a *= 255),
            (o /= 255),
            (o -= 0.5),
            (o *= r),
            (o += 0.5),
            (o *= 255),
            (s /= 255),
            (s -= 0.5),
            (s *= r),
            (s += 0.5),
            (s *= 255),
            (a = a < 0 ? 0 : a > 255 ? 255 : a),
            (o = o < 0 ? 0 : o > 255 ? 255 : o),
            (s = s < 0 ? 0 : s > 255 ? 255 : s),
            (n[e] = a),
            (n[e + 1] = o),
            (n[e + 2] = s);
      }),
        n.Factory.addGetterSetter(
          i.Node,
          "contrast",
          0,
          (0, a.getNumberValidator)(),
          n.Factory.afterSetFilter
        );
    },
    4898: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Emboss = void 0);
      let n = r(1027),
        i = r(4667),
        a = r(5329),
        o = r(7367);
      (e.Emboss = function (t) {
        var e = 10 * this.embossStrength(),
          r = 255 * this.embossWhiteLevel(),
          n = this.embossDirection(),
          i = this.embossBlend(),
          o = 0,
          s = 0,
          l = t.data,
          h = t.width,
          u = t.height,
          d = 4 * h,
          c = u;
        switch (n) {
          case "top-left":
            (o = -1), (s = -1);
            break;
          case "top":
            (o = -1), (s = 0);
            break;
          case "top-right":
            (o = -1), (s = 1);
            break;
          case "right":
            (o = 0), (s = 1);
            break;
          case "bottom-right":
            (o = 1), (s = 1);
            break;
          case "bottom":
            (o = 1), (s = 0);
            break;
          case "bottom-left":
            (o = 1), (s = -1);
            break;
          case "left":
            (o = 0), (s = -1);
            break;
          default:
            a.Util.error("Unknown emboss direction: " + n);
        }
        do {
          var f = (c - 1) * d,
            g = o;
          c + g < 1 && (g = 0), c + g > u && (g = 0);
          var p = (c - 1 + g) * h * 4,
            v = h;
          do {
            var m = f + (v - 1) * 4,
              y = s;
            v + y < 1 && (y = 0), v + y > h && (y = 0);
            var b = p + (v - 1 + y) * 4,
              _ = l[m] - l[b],
              S = l[m + 1] - l[b + 1],
              x = l[m + 2] - l[b + 2],
              w = _,
              C = w > 0 ? w : -w,
              k = x > 0 ? x : -x;
            if (
              ((S > 0 ? S : -S) > C && (w = S), k > C && (w = x), (w *= e), i)
            ) {
              var P = l[m] + w,
                T = l[m + 1] + w,
                E = l[m + 2] + w;
              (l[m] = P > 255 ? 255 : P < 0 ? 0 : P),
                (l[m + 1] = T > 255 ? 255 : T < 0 ? 0 : T),
                (l[m + 2] = E > 255 ? 255 : E < 0 ? 0 : E);
            } else {
              var F = r - w;
              F < 0 ? (F = 0) : F > 255 && (F = 255),
                (l[m] = l[m + 1] = l[m + 2] = F);
            }
          } while (--v);
        } while (--c);
      }),
        n.Factory.addGetterSetter(
          i.Node,
          "embossStrength",
          0.5,
          (0, o.getNumberValidator)(),
          n.Factory.afterSetFilter
        ),
        n.Factory.addGetterSetter(
          i.Node,
          "embossWhiteLevel",
          0.5,
          (0, o.getNumberValidator)(),
          n.Factory.afterSetFilter
        ),
        n.Factory.addGetterSetter(
          i.Node,
          "embossDirection",
          "top-left",
          null,
          n.Factory.afterSetFilter
        ),
        n.Factory.addGetterSetter(
          i.Node,
          "embossBlend",
          !1,
          null,
          n.Factory.afterSetFilter
        );
    },
    5073: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Enhance = void 0);
      let n = r(1027),
        i = r(4667),
        a = r(7367);
      function o(t, e, r, n, i) {
        var a = r - e,
          o = i - n;
        return 0 === a ? n + o / 2 : 0 === o ? n : ((t - e) / a) * o + n;
      }
      (e.Enhance = function (t) {
        var e,
          r,
          n,
          i,
          a,
          s,
          l,
          h,
          u,
          d,
          c,
          f,
          g,
          p = t.data,
          v = p.length,
          m = p[0],
          y = m,
          b = p[1],
          _ = b,
          S = p[2],
          x = S,
          w = this.enhance();
        if (0 !== w) {
          for (g = 0; g < v; g += 4)
            (d = p[g + 0]) < m ? (m = d) : d > y && (y = d),
              (c = p[g + 1]) < b ? (b = c) : c > _ && (_ = c),
              (f = p[g + 2]) < S ? (S = f) : f > x && (x = f);
          for (
            y === m && ((y = 255), (m = 0)),
              _ === b && ((_ = 255), (b = 0)),
              x === S && ((x = 255), (S = 0)),
              w > 0
                ? ((r = y + w * (255 - y)),
                  (n = m - w * (m - 0)),
                  (a = _ + w * (255 - _)),
                  (s = b - w * (b - 0)),
                  (h = x + w * (255 - x)),
                  (u = S - w * (S - 0)))
                : ((e = (y + m) * 0.5),
                  (r = y + w * (y - e)),
                  (n = m + w * (m - e)),
                  (i = (_ + b) * 0.5),
                  (a = _ + w * (_ - i)),
                  (s = b + w * (b - i)),
                  (l = (x + S) * 0.5),
                  (h = x + w * (x - l)),
                  (u = S + w * (S - l))),
              g = 0;
            g < v;
            g += 4
          )
            (p[g + 0] = o(p[g + 0], m, y, n, r)),
              (p[g + 1] = o(p[g + 1], b, _, s, a)),
              (p[g + 2] = o(p[g + 2], S, x, u, h));
        }
      }),
        n.Factory.addGetterSetter(
          i.Node,
          "enhance",
          0,
          (0, a.getNumberValidator)(),
          n.Factory.afterSetFilter
        );
    },
    5640: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Grayscale = void 0),
        (e.Grayscale = function (t) {
          var e,
            r,
            n = t.data,
            i = n.length;
          for (e = 0; e < i; e += 4)
            (r = 0.34 * n[e] + 0.5 * n[e + 1] + 0.16 * n[e + 2]),
              (n[e] = r),
              (n[e + 1] = r),
              (n[e + 2] = r);
        });
    },
    9133: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.HSL = void 0);
      let n = r(1027),
        i = r(4667),
        a = r(7367);
      n.Factory.addGetterSetter(
        i.Node,
        "hue",
        0,
        (0, a.getNumberValidator)(),
        n.Factory.afterSetFilter
      ),
        n.Factory.addGetterSetter(
          i.Node,
          "saturation",
          0,
          (0, a.getNumberValidator)(),
          n.Factory.afterSetFilter
        ),
        n.Factory.addGetterSetter(
          i.Node,
          "luminance",
          0,
          (0, a.getNumberValidator)(),
          n.Factory.afterSetFilter
        ),
        (e.HSL = function (t) {
          var e,
            r,
            n,
            i,
            a,
            o = t.data,
            s = o.length,
            l = Math.pow(2, this.saturation()),
            h = Math.abs(this.hue() + 360) % 360,
            u = 127 * this.luminance(),
            d = 1 * l * Math.cos((h * Math.PI) / 180),
            c = 1 * l * Math.sin((h * Math.PI) / 180),
            f = 0.299 + 0.701 * d + 0.167 * c,
            g = 0.587 - 0.587 * d + 0.33 * c,
            p = 0.114 - 0.114 * d - 0.497 * c,
            v = 0.299 - 0.299 * d - 0.328 * c,
            m = 0.587 + 0.413 * d + 0.035 * c,
            y = 0.114 - 0.114 * d + 0.293 * c,
            b = 0.299 - 0.3 * d + 1.25 * c,
            _ = 0.587 - 0.586 * d - 1.05 * c,
            S = 0.114 + 0.886 * d - 0.2 * c;
          for (a = 0; a < s; a += 4)
            (e = o[a + 0]),
              (r = o[a + 1]),
              (n = o[a + 2]),
              (i = o[a + 3]),
              (o[a + 0] = f * e + g * r + p * n + u),
              (o[a + 1] = v * e + m * r + y * n + u),
              (o[a + 2] = b * e + _ * r + S * n + u),
              (o[a + 3] = i);
        });
    },
    3785: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.HSV = void 0);
      let n = r(1027),
        i = r(4667),
        a = r(7367);
      (e.HSV = function (t) {
        var e,
          r,
          n,
          i,
          a,
          o = t.data,
          s = o.length,
          l = Math.pow(2, this.value()),
          h = Math.pow(2, this.saturation()),
          u = Math.abs(this.hue() + 360) % 360,
          d = l * h * Math.cos((u * Math.PI) / 180),
          c = l * h * Math.sin((u * Math.PI) / 180),
          f = 0.299 * l + 0.701 * d + 0.167 * c,
          g = 0.587 * l - 0.587 * d + 0.33 * c,
          p = 0.114 * l - 0.114 * d - 0.497 * c,
          v = 0.299 * l - 0.299 * d - 0.328 * c,
          m = 0.587 * l + 0.413 * d + 0.035 * c,
          y = 0.114 * l - 0.114 * d + 0.293 * c,
          b = 0.299 * l - 0.3 * d + 1.25 * c,
          _ = 0.587 * l - 0.586 * d - 1.05 * c,
          S = 0.114 * l + 0.886 * d - 0.2 * c;
        for (a = 0; a < s; a += 4)
          (e = o[a + 0]),
            (r = o[a + 1]),
            (n = o[a + 2]),
            (i = o[a + 3]),
            (o[a + 0] = f * e + g * r + p * n),
            (o[a + 1] = v * e + m * r + y * n),
            (o[a + 2] = b * e + _ * r + S * n),
            (o[a + 3] = i);
      }),
        n.Factory.addGetterSetter(
          i.Node,
          "hue",
          0,
          (0, a.getNumberValidator)(),
          n.Factory.afterSetFilter
        ),
        n.Factory.addGetterSetter(
          i.Node,
          "saturation",
          0,
          (0, a.getNumberValidator)(),
          n.Factory.afterSetFilter
        ),
        n.Factory.addGetterSetter(
          i.Node,
          "value",
          0,
          (0, a.getNumberValidator)(),
          n.Factory.afterSetFilter
        );
    },
    3123: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Invert = void 0),
        (e.Invert = function (t) {
          var e,
            r = t.data,
            n = r.length;
          for (e = 0; e < n; e += 4)
            (r[e] = 255 - r[e]),
              (r[e + 1] = 255 - r[e + 1]),
              (r[e + 2] = 255 - r[e + 2]);
        });
    },
    206: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Kaleidoscope = void 0);
      let n = r(1027),
        i = r(4667),
        a = r(5329),
        o = r(7367);
      var s = function (t, e, r) {
          var n,
            i,
            a,
            o,
            s = t.data,
            l = e.data,
            h = t.width,
            u = t.height,
            d = r.polarCenterX || h / 2,
            c = r.polarCenterY || u / 2,
            f = 0,
            g = 0,
            p = 0,
            v = 0,
            m = Math.sqrt(d * d + c * c);
          m = (o = Math.sqrt((i = h - d) * i + (a = u - c) * a)) > m ? o : m;
          var y,
            b,
            _,
            S,
            x = ((360 / h) * Math.PI) / 180;
          for (b = 0; b < h; b += 1)
            for (y = 0, _ = Math.sin(b * x), S = Math.cos(b * x); y < u; y += 1)
              (i = Math.floor(d + ((m * y) / u) * S)),
                (f =
                  s[
                    (n =
                      ((a = Math.floor(c + ((m * y) / u) * _)) * h + i) * 4) + 0
                  ]),
                (g = s[n + 1]),
                (p = s[n + 2]),
                (v = s[n + 3]),
                (l[(n = (b + y * h) * 4) + 0] = f),
                (l[n + 1] = g),
                (l[n + 2] = p),
                (l[n + 3] = v);
        },
        l = function (t, e, r) {
          var n,
            i,
            a,
            o,
            s,
            l,
            h,
            u = t.data,
            d = e.data,
            c = t.width,
            f = t.height,
            g = r.polarCenterX || c / 2,
            p = r.polarCenterY || f / 2,
            v = 0,
            m = 0,
            y = 0,
            b = 0,
            _ = Math.sqrt(g * g + p * p);
          _ = (h = Math.sqrt((a = c - g) * a + (o = f - p) * o)) > _ ? h : _;
          var S,
            x = r.polarRotation || 0;
          for (a = 0; a < c; a += 1)
            for (o = 0; o < f; o += 1)
              (S = (Math.sqrt((s = a - g) * s + (l = o - p) * l) * f) / _),
                (n = Math.floor(
                  ((((180 * Math.atan2(l, s)) / Math.PI + 360 + x) % 360) * c) /
                    360
                )),
                (v = u[(i = (Math.floor(S) * c + n) * 4) + 0]),
                (m = u[i + 1]),
                (y = u[i + 2]),
                (b = u[i + 3]),
                (d[(i = (o * c + a) * 4) + 0] = v),
                (d[i + 1] = m),
                (d[i + 2] = y),
                (d[i + 3] = b);
        };
      (e.Kaleidoscope = function (t) {
        var e,
          r,
          n,
          i,
          o,
          h,
          u,
          d,
          c,
          f,
          g = t.width,
          p = t.height,
          v = Math.round(this.kaleidoscopePower()),
          m = Math.floor(
            ((Math.round(this.kaleidoscopeAngle()) % 360) * g) / 360
          );
        if (!(v < 1)) {
          var y = a.Util.createCanvasElement();
          (y.width = g), (y.height = p);
          var b = y.getContext("2d").getImageData(0, 0, g, p);
          a.Util.releaseCanvas(y),
            s(t, b, {
              polarCenterX: g / 2,
              polarCenterY: p / 2,
            });
          for (var _ = g / Math.pow(2, v); _ <= 8; ) (_ *= 2), (v -= 1);
          var S = (_ = Math.ceil(_)),
            x = 0,
            w = S,
            C = 1;
          for (m + _ > g && ((x = S), (w = 0), (C = -1)), r = 0; r < p; r += 1)
            for (e = x; e !== w; e += C)
              (n = Math.round(e + m) % g),
                (c = (g * r + n) * 4),
                (o = b.data[c + 0]),
                (h = b.data[c + 1]),
                (u = b.data[c + 2]),
                (d = b.data[c + 3]),
                (f = (g * r + e) * 4),
                (b.data[f + 0] = o),
                (b.data[f + 1] = h),
                (b.data[f + 2] = u),
                (b.data[f + 3] = d);
          for (r = 0; r < p; r += 1)
            for (i = 0, S = Math.floor(_); i < v; i += 1) {
              for (e = 0; e < S + 1; e += 1)
                (c = (g * r + e) * 4),
                  (o = b.data[c + 0]),
                  (h = b.data[c + 1]),
                  (u = b.data[c + 2]),
                  (d = b.data[c + 3]),
                  (f = (g * r + 2 * S - e - 1) * 4),
                  (b.data[f + 0] = o),
                  (b.data[f + 1] = h),
                  (b.data[f + 2] = u),
                  (b.data[f + 3] = d);
              S *= 2;
            }
          l(b, t, {
            polarRotation: 0,
          });
        }
      }),
        n.Factory.addGetterSetter(
          i.Node,
          "kaleidoscopePower",
          2,
          (0, o.getNumberValidator)(),
          n.Factory.afterSetFilter
        ),
        n.Factory.addGetterSetter(
          i.Node,
          "kaleidoscopeAngle",
          0,
          (0, o.getNumberValidator)(),
          n.Factory.afterSetFilter
        );
    },
    8962: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Mask = void 0);
      let n = r(1027),
        i = r(4667),
        a = r(7367);
      function o(t, e, r) {
        var n = (r * t.width + e) * 4,
          i = [];
        return i.push(t.data[n++], t.data[n++], t.data[n++], t.data[n++]), i;
      }
      function s(t, e) {
        return Math.sqrt(
          Math.pow(t[0] - e[0], 2) +
            Math.pow(t[1] - e[1], 2) +
            Math.pow(t[2] - e[2], 2)
        );
      }
      (e.Mask = function (t) {
        var e = (function (t, e) {
          var r = o(t, 0, 0),
            n = o(t, t.width - 1, 0),
            i = o(t, 0, t.height - 1),
            a = o(t, t.width - 1, t.height - 1),
            l = e || 10;
          if (s(r, n) < l && s(n, a) < l && s(a, i) < l && s(i, r) < l) {
            for (
              var h = (function (t) {
                  for (var e = [0, 0, 0], r = 0; r < t.length; r++)
                    (e[0] += t[r][0]), (e[1] += t[r][1]), (e[2] += t[r][2]);
                  return (
                    (e[0] /= t.length),
                    (e[1] /= t.length),
                    (e[2] /= t.length),
                    e
                  );
                })([n, r, a, i]),
                u = [],
                d = 0;
              d < t.width * t.height;
              d++
            ) {
              var c = s(h, [
                t.data[4 * d],
                t.data[4 * d + 1],
                t.data[4 * d + 2],
              ]);
              u[d] = c < l ? 0 : 255;
            }
            return u;
          }
        })(t, this.threshold());
        return (
          e &&
            ((e = (function (t, e, r) {
              for (
                var n = [
                    1 / 9,
                    1 / 9,
                    1 / 9,
                    1 / 9,
                    1 / 9,
                    1 / 9,
                    1 / 9,
                    1 / 9,
                    1 / 9,
                  ],
                  i = Math.round(Math.sqrt(n.length)),
                  a = Math.floor(i / 2),
                  o = [],
                  s = 0;
                s < r;
                s++
              )
                for (var l = 0; l < e; l++) {
                  for (var h = s * e + l, u = 0, d = 0; d < i; d++)
                    for (var c = 0; c < i; c++) {
                      var f = s + d - a,
                        g = l + c - a;
                      if (f >= 0 && f < r && g >= 0 && g < e) {
                        var p = f * e + g,
                          v = n[d * i + c];
                        u += t[p] * v;
                      }
                    }
                  o[h] = u;
                }
              return o;
            })(
              (e = (function (t, e, r) {
                for (
                  var n = [1, 1, 1, 1, 1, 1, 1, 1, 1],
                    i = Math.round(Math.sqrt(n.length)),
                    a = Math.floor(i / 2),
                    o = [],
                    s = 0;
                  s < r;
                  s++
                )
                  for (var l = 0; l < e; l++) {
                    for (var h = s * e + l, u = 0, d = 0; d < i; d++)
                      for (var c = 0; c < i; c++) {
                        var f = s + d - a,
                          g = l + c - a;
                        if (f >= 0 && f < r && g >= 0 && g < e) {
                          var p = f * e + g,
                            v = n[d * i + c];
                          u += t[p] * v;
                        }
                      }
                    o[h] = u >= 1020 ? 255 : 0;
                  }
                return o;
              })(
                (e = (function (t, e, r) {
                  for (
                    var n = [1, 1, 1, 1, 0, 1, 1, 1, 1],
                      i = Math.round(Math.sqrt(n.length)),
                      a = Math.floor(i / 2),
                      o = [],
                      s = 0;
                    s < r;
                    s++
                  )
                    for (var l = 0; l < e; l++) {
                      for (var h = s * e + l, u = 0, d = 0; d < i; d++)
                        for (var c = 0; c < i; c++) {
                          var f = s + d - a,
                            g = l + c - a;
                          if (f >= 0 && f < r && g >= 0 && g < e) {
                            var p = f * e + g,
                              v = n[d * i + c];
                            u += t[p] * v;
                          }
                        }
                      o[h] = 2040 === u ? 255 : 0;
                    }
                  return o;
                })(e, t.width, t.height)),
                t.width,
                t.height
              )),
              t.width,
              t.height
            )),
            (function (t, e) {
              for (var r = 0; r < t.width * t.height; r++)
                t.data[4 * r + 3] = e[r];
            })(t, e)),
          t
        );
      }),
        n.Factory.addGetterSetter(
          i.Node,
          "threshold",
          0,
          (0, a.getNumberValidator)(),
          n.Factory.afterSetFilter
        );
    },
    6990: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Noise = void 0);
      let n = r(1027),
        i = r(4667),
        a = r(7367);
      (e.Noise = function (t) {
        var e,
          r = 255 * this.noise(),
          n = t.data,
          i = n.length,
          a = r / 2;
        for (e = 0; e < i; e += 4)
          (n[e + 0] += a - 2 * a * Math.random()),
            (n[e + 1] += a - 2 * a * Math.random()),
            (n[e + 2] += a - 2 * a * Math.random());
      }),
        n.Factory.addGetterSetter(
          i.Node,
          "noise",
          0.2,
          (0, a.getNumberValidator)(),
          n.Factory.afterSetFilter
        );
    },
    5812: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Pixelate = void 0);
      let n = r(1027),
        i = r(5329),
        a = r(4667),
        o = r(7367);
      (e.Pixelate = function (t) {
        var e,
          r,
          n,
          a,
          o,
          s,
          l,
          h,
          u,
          d,
          c,
          f,
          g,
          p,
          v = Math.ceil(this.pixelSize()),
          m = t.width,
          y = t.height,
          b = Math.ceil(m / v),
          _ = Math.ceil(y / v),
          S = t.data;
        if (v <= 0) {
          i.Util.error("pixelSize value can not be <= 0");
          return;
        }
        for (f = 0; f < b; f += 1)
          for (g = 0; g < _; g += 1) {
            for (
              a = 0,
                o = 0,
                s = 0,
                l = 0,
                u = (h = f * v) + v,
                c = (d = g * v) + v,
                p = 0,
                e = h;
              e < u;
              e += 1
            )
              if (!(e >= m))
                for (r = d; r < c; r += 1)
                  r >= y ||
                    ((a += S[(n = (m * r + e) * 4) + 0]),
                    (o += S[n + 1]),
                    (s += S[n + 2]),
                    (l += S[n + 3]),
                    (p += 1));
            for (a /= p, o /= p, s /= p, l /= p, e = h; e < u; e += 1)
              if (!(e >= m))
                for (r = d; r < c; r += 1)
                  r >= y ||
                    ((S[(n = (m * r + e) * 4) + 0] = a),
                    (S[n + 1] = o),
                    (S[n + 2] = s),
                    (S[n + 3] = l));
          }
      }),
        n.Factory.addGetterSetter(
          a.Node,
          "pixelSize",
          8,
          (0, o.getNumberValidator)(),
          n.Factory.afterSetFilter
        );
    },
    7142: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Posterize = void 0);
      let n = r(1027),
        i = r(4667),
        a = r(7367);
      (e.Posterize = function (t) {
        var e,
          r = Math.round(254 * this.levels()) + 1,
          n = t.data,
          i = n.length,
          a = 255 / r;
        for (e = 0; e < i; e += 1) n[e] = Math.floor(n[e] / a) * a;
      }),
        n.Factory.addGetterSetter(
          i.Node,
          "levels",
          0.5,
          (0, a.getNumberValidator)(),
          n.Factory.afterSetFilter
        );
    },
    6497: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.RGB = void 0);
      let n = r(1027),
        i = r(4667),
        a = r(7367);
      (e.RGB = function (t) {
        var e,
          r,
          n = t.data,
          i = n.length,
          a = this.red(),
          o = this.green(),
          s = this.blue();
        for (e = 0; e < i; e += 4)
          (r = (0.34 * n[e] + 0.5 * n[e + 1] + 0.16 * n[e + 2]) / 255),
            (n[e] = r * a),
            (n[e + 1] = r * o),
            (n[e + 2] = r * s),
            (n[e + 3] = n[e + 3]);
      }),
        n.Factory.addGetterSetter(i.Node, "red", 0, function (t) {
          return ((this._filterUpToDate = !1), t > 255)
            ? 255
            : t < 0
            ? 0
            : Math.round(t);
        }),
        n.Factory.addGetterSetter(i.Node, "green", 0, function (t) {
          return ((this._filterUpToDate = !1), t > 255)
            ? 255
            : t < 0
            ? 0
            : Math.round(t);
        }),
        n.Factory.addGetterSetter(
          i.Node,
          "blue",
          0,
          a.RGBComponent,
          n.Factory.afterSetFilter
        );
    },
    5492: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.RGBA = void 0);
      let n = r(1027),
        i = r(4667),
        a = r(7367);
      (e.RGBA = function (t) {
        var e,
          r,
          n = t.data,
          i = n.length,
          a = this.red(),
          o = this.green(),
          s = this.blue(),
          l = this.alpha();
        for (e = 0; e < i; e += 4)
          (r = 1 - l),
            (n[e] = a * l + n[e] * r),
            (n[e + 1] = o * l + n[e + 1] * r),
            (n[e + 2] = s * l + n[e + 2] * r);
      }),
        n.Factory.addGetterSetter(i.Node, "red", 0, function (t) {
          return ((this._filterUpToDate = !1), t > 255)
            ? 255
            : t < 0
            ? 0
            : Math.round(t);
        }),
        n.Factory.addGetterSetter(i.Node, "green", 0, function (t) {
          return ((this._filterUpToDate = !1), t > 255)
            ? 255
            : t < 0
            ? 0
            : Math.round(t);
        }),
        n.Factory.addGetterSetter(
          i.Node,
          "blue",
          0,
          a.RGBComponent,
          n.Factory.afterSetFilter
        ),
        n.Factory.addGetterSetter(i.Node, "alpha", 1, function (t) {
          return ((this._filterUpToDate = !1), t > 1) ? 1 : t < 0 ? 0 : t;
        });
    },
    3186: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Sepia = void 0),
        (e.Sepia = function (t) {
          var e,
            r,
            n,
            i,
            a = t.data,
            o = a.length;
          for (e = 0; e < o; e += 4)
            (r = a[e + 0]),
              (n = a[e + 1]),
              (i = a[e + 2]),
              (a[e + 0] = Math.min(255, 0.393 * r + 0.769 * n + 0.189 * i)),
              (a[e + 1] = Math.min(255, 0.349 * r + 0.686 * n + 0.168 * i)),
              (a[e + 2] = Math.min(255, 0.272 * r + 0.534 * n + 0.131 * i));
        });
    },
    5639: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Solarize = void 0),
        (e.Solarize = function (t) {
          var e = t.data,
            r = t.width,
            n = t.height,
            i = 4 * r,
            a = n;
          do {
            var o = (a - 1) * i,
              s = r;
            do {
              var l = o + (s - 1) * 4,
                h = e[l],
                u = e[l + 1],
                d = e[l + 2];
              h > 127 && (h = 255 - h),
                u > 127 && (u = 255 - u),
                d > 127 && (d = 255 - d),
                (e[l] = h),
                (e[l + 1] = u),
                (e[l + 2] = d);
            } while (--s);
          } while (--a);
        });
    },
    1940: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Threshold = void 0);
      let n = r(1027),
        i = r(4667),
        a = r(7367);
      (e.Threshold = function (t) {
        var e,
          r = 255 * this.threshold(),
          n = t.data,
          i = n.length;
        for (e = 0; e < i; e += 1) n[e] = n[e] < r ? 0 : 255;
      }),
        n.Factory.addGetterSetter(
          i.Node,
          "threshold",
          0.5,
          (0, a.getNumberValidator)(),
          n.Factory.afterSetFilter
        );
    },
    1235: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      });
      let n = r(4097);
      t.exports = n.Konva;
    },
    121: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Arc = void 0);
      let n = r(1027),
        i = r(7439),
        a = r(9649),
        o = r(7367),
        s = r(9649);
      class l extends i.Shape {
        _sceneFunc(t) {
          var e = a.Konva.getAngle(this.angle()),
            r = this.clockwise();
          t.beginPath(),
            t.arc(0, 0, this.outerRadius(), 0, e, r),
            t.arc(0, 0, this.innerRadius(), e, 0, !r),
            t.closePath(),
            t.fillStrokeShape(this);
        }
        getWidth() {
          return 2 * this.outerRadius();
        }
        getHeight() {
          return 2 * this.outerRadius();
        }
        setWidth(t) {
          this.outerRadius(t / 2);
        }
        setHeight(t) {
          this.outerRadius(t / 2);
        }
        getSelfRect() {
          let t = this.innerRadius(),
            e = this.outerRadius(),
            r = this.clockwise(),
            n = a.Konva.getAngle(r ? 360 - this.angle() : this.angle()),
            i = Math.cos(Math.min(n, Math.PI)),
            o = Math.sin(Math.min(Math.max(Math.PI, n), (3 * Math.PI) / 2)),
            s = Math.sin(Math.min(n, Math.PI / 2)),
            l = i * (i > 0 ? t : e),
            h = o * (o > 0 ? t : e),
            u = s * (s > 0 ? e : t);
          return {
            x: l,
            y: r ? -1 * u : h,
            width: 1 * e - l,
            height: u - h,
          };
        }
      }
      (e.Arc = l),
        (l.prototype._centroid = !0),
        (l.prototype.className = "Arc"),
        (l.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"]),
        (0, s._registerNode)(l),
        n.Factory.addGetterSetter(
          l,
          "innerRadius",
          0,
          (0, o.getNumberValidator)()
        ),
        n.Factory.addGetterSetter(
          l,
          "outerRadius",
          0,
          (0, o.getNumberValidator)()
        ),
        n.Factory.addGetterSetter(l, "angle", 0, (0, o.getNumberValidator)()),
        n.Factory.addGetterSetter(
          l,
          "clockwise",
          !1,
          (0, o.getBooleanValidator)()
        );
    },
    7270: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Arrow = void 0);
      let n = r(1027),
        i = r(64),
        a = r(7367),
        o = r(9649),
        s = r(7771);
      class l extends i.Line {
        _sceneFunc(t) {
          super._sceneFunc(t);
          var e,
            r,
            n = 2 * Math.PI,
            i = this.points(),
            a = i,
            o = 0 !== this.tension() && i.length > 4;
          o && (a = this.getTensionPoints());
          var l = this.pointerLength(),
            h = i.length;
          if (o) {
            let t = [
                a[a.length - 4],
                a[a.length - 3],
                a[a.length - 2],
                a[a.length - 1],
                i[h - 2],
                i[h - 1],
              ],
              n = s.Path.calcLength(a[a.length - 4], a[a.length - 3], "C", t),
              o = s.Path.getPointOnQuadraticBezier(
                Math.min(1, 1 - l / n),
                t[0],
                t[1],
                t[2],
                t[3],
                t[4],
                t[5]
              );
            (e = i[h - 2] - o.x), (r = i[h - 1] - o.y);
          } else (e = i[h - 2] - i[h - 4]), (r = i[h - 1] - i[h - 3]);
          var u = (Math.atan2(r, e) + n) % n,
            d = this.pointerWidth();
          this.pointerAtEnding() &&
            (t.save(),
            t.beginPath(),
            t.translate(i[h - 2], i[h - 1]),
            t.rotate(u),
            t.moveTo(0, 0),
            t.lineTo(-l, d / 2),
            t.lineTo(-l, -d / 2),
            t.closePath(),
            t.restore(),
            this.__fillStroke(t)),
            this.pointerAtBeginning() &&
              (t.save(),
              t.beginPath(),
              t.translate(i[0], i[1]),
              o
                ? ((e = (a[0] + a[2]) / 2 - i[0]),
                  (r = (a[1] + a[3]) / 2 - i[1]))
                : ((e = i[2] - i[0]), (r = i[3] - i[1])),
              t.rotate((Math.atan2(-r, -e) + n) % n),
              t.moveTo(0, 0),
              t.lineTo(-l, d / 2),
              t.lineTo(-l, -d / 2),
              t.closePath(),
              t.restore(),
              this.__fillStroke(t));
        }
        __fillStroke(t) {
          var e = this.dashEnabled();
          e && ((this.attrs.dashEnabled = !1), t.setLineDash([])),
            t.fillStrokeShape(this),
            e && (this.attrs.dashEnabled = !0);
        }
        getSelfRect() {
          let t = super.getSelfRect(),
            e = this.pointerWidth() / 2;
          return {
            x: t.x - e,
            y: t.y - e,
            width: t.width + 2 * e,
            height: t.height + 2 * e,
          };
        }
      }
      (e.Arrow = l),
        (l.prototype.className = "Arrow"),
        (0, o._registerNode)(l),
        n.Factory.addGetterSetter(
          l,
          "pointerLength",
          10,
          (0, a.getNumberValidator)()
        ),
        n.Factory.addGetterSetter(
          l,
          "pointerWidth",
          10,
          (0, a.getNumberValidator)()
        ),
        n.Factory.addGetterSetter(l, "pointerAtBeginning", !1),
        n.Factory.addGetterSetter(l, "pointerAtEnding", !0);
    },
    7184: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Circle = void 0);
      let n = r(1027),
        i = r(7439),
        a = r(7367),
        o = r(9649);
      class s extends i.Shape {
        _sceneFunc(t) {
          t.beginPath(),
            t.arc(0, 0, this.attrs.radius || 0, 0, 2 * Math.PI, !1),
            t.closePath(),
            t.fillStrokeShape(this);
        }
        getWidth() {
          return 2 * this.radius();
        }
        getHeight() {
          return 2 * this.radius();
        }
        setWidth(t) {
          this.radius() !== t / 2 && this.radius(t / 2);
        }
        setHeight(t) {
          this.radius() !== t / 2 && this.radius(t / 2);
        }
      }
      (e.Circle = s),
        (s.prototype._centroid = !0),
        (s.prototype.className = "Circle"),
        (s.prototype._attrsAffectingSize = ["radius"]),
        (0, o._registerNode)(s),
        n.Factory.addGetterSetter(s, "radius", 0, (0, a.getNumberValidator)());
    },
    2689: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Ellipse = void 0);
      let n = r(1027),
        i = r(7439),
        a = r(7367),
        o = r(9649);
      class s extends i.Shape {
        _sceneFunc(t) {
          var e = this.radiusX(),
            r = this.radiusY();
          t.beginPath(),
            t.save(),
            e !== r && t.scale(1, r / e),
            t.arc(0, 0, e, 0, 2 * Math.PI, !1),
            t.restore(),
            t.closePath(),
            t.fillStrokeShape(this);
        }
        getWidth() {
          return 2 * this.radiusX();
        }
        getHeight() {
          return 2 * this.radiusY();
        }
        setWidth(t) {
          this.radiusX(t / 2);
        }
        setHeight(t) {
          this.radiusY(t / 2);
        }
      }
      (e.Ellipse = s),
        (s.prototype.className = "Ellipse"),
        (s.prototype._centroid = !0),
        (s.prototype._attrsAffectingSize = ["radiusX", "radiusY"]),
        (0, o._registerNode)(s),
        n.Factory.addComponentsGetterSetter(s, "radius", ["x", "y"]),
        n.Factory.addGetterSetter(s, "radiusX", 0, (0, a.getNumberValidator)()),
        n.Factory.addGetterSetter(s, "radiusY", 0, (0, a.getNumberValidator)());
    },
    4582: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Image = void 0);
      let n = r(5329),
        i = r(1027),
        a = r(7439),
        o = r(9649),
        s = r(7367);
      class l extends a.Shape {
        constructor(t) {
          super(t),
            this.on("imageChange.konva", () => {
              this._setImageLoad();
            }),
            this._setImageLoad();
        }
        _setImageLoad() {
          let t = this.image();
          (t && t.complete) ||
            (t && 4 === t.readyState) ||
            !t ||
            !t.addEventListener ||
            t.addEventListener("load", () => {
              this._requestDraw();
            });
        }
        _useBufferCanvas() {
          let t = !!this.cornerRadius(),
            e = this.hasShadow();
          return (!!t && !!e) || super._useBufferCanvas(!0);
        }
        _sceneFunc(t) {
          let e;
          let r = this.getWidth(),
            i = this.getHeight(),
            a = this.cornerRadius(),
            o = this.attrs.image;
          if (o) {
            let t = this.attrs.cropWidth,
              n = this.attrs.cropHeight;
            e =
              t && n
                ? [o, this.cropX(), this.cropY(), t, n, 0, 0, r, i]
                : [o, 0, 0, r, i];
          }
          (this.hasFill() || this.hasStroke() || a) &&
            (t.beginPath(),
            a ? n.Util.drawRoundedRectPath(t, r, i, a) : t.rect(0, 0, r, i),
            t.closePath(),
            t.fillStrokeShape(this)),
            o && (a && t.clip(), t.drawImage.apply(t, e));
        }
        _hitFunc(t) {
          var e = this.width(),
            r = this.height(),
            i = this.cornerRadius();
          t.beginPath(),
            i ? n.Util.drawRoundedRectPath(t, e, r, i) : t.rect(0, 0, e, r),
            t.closePath(),
            t.fillStrokeShape(this);
        }
        getWidth() {
          var t, e;
          return null !== (t = this.attrs.width) && void 0 !== t
            ? t
            : null === (e = this.image()) || void 0 === e
            ? void 0
            : e.width;
        }
        getHeight() {
          var t, e;
          return null !== (t = this.attrs.height) && void 0 !== t
            ? t
            : null === (e = this.image()) || void 0 === e
            ? void 0
            : e.height;
        }
        static fromURL(t, e, r = null) {
          var i = n.Util.createImageElement();
          (i.onload = function () {
            e(
              new l({
                image: i,
              })
            );
          }),
            (i.onerror = r),
            (i.crossOrigin = "Anonymous"),
            (i.src = t);
        }
      }
      (e.Image = l),
        (l.prototype.className = "Image"),
        (0, o._registerNode)(l),
        i.Factory.addGetterSetter(
          l,
          "cornerRadius",
          0,
          (0, s.getNumberOrArrayOfNumbersValidator)(4)
        ),
        i.Factory.addGetterSetter(l, "image"),
        i.Factory.addComponentsGetterSetter(l, "crop", [
          "x",
          "y",
          "width",
          "height",
        ]),
        i.Factory.addGetterSetter(l, "cropX", 0, (0, s.getNumberValidator)()),
        i.Factory.addGetterSetter(l, "cropY", 0, (0, s.getNumberValidator)()),
        i.Factory.addGetterSetter(
          l,
          "cropWidth",
          0,
          (0, s.getNumberValidator)()
        ),
        i.Factory.addGetterSetter(
          l,
          "cropHeight",
          0,
          (0, s.getNumberValidator)()
        );
    },
    6218: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Tag = e.Label = void 0);
      let n = r(1027),
        i = r(7439),
        a = r(2853),
        o = r(7367),
        s = r(9649);
      var l = [
          "fontFamily",
          "fontSize",
          "fontStyle",
          "padding",
          "lineHeight",
          "text",
          "width",
          "height",
          "pointerDirection",
          "pointerWidth",
          "pointerHeight",
        ],
        h = "right",
        u = "down",
        d = "left",
        c = l.length;
      class f extends a.Group {
        constructor(t) {
          super(t),
            this.on("add.konva", function (t) {
              this._addListeners(t.child), this._sync();
            });
        }
        getText() {
          return this.find("Text")[0];
        }
        getTag() {
          return this.find("Tag")[0];
        }
        _addListeners(t) {
          var e,
            r = this,
            n = function () {
              r._sync();
            };
          for (e = 0; e < c; e++) t.on(l[e] + "Change.konva", n);
        }
        getWidth() {
          return this.getText().width();
        }
        getHeight() {
          return this.getText().height();
        }
        _sync() {
          var t,
            e,
            r,
            n,
            i,
            a,
            o,
            s = this.getText(),
            l = this.getTag();
          if (s && l) {
            switch (
              ((t = s.width()),
              (e = s.height()),
              (r = l.pointerDirection()),
              (n = l.pointerWidth()),
              (o = l.pointerHeight()),
              (i = 0),
              (a = 0),
              r)
            ) {
              case "up":
                (i = t / 2), (a = -1 * o);
                break;
              case h:
                (i = t + n), (a = e / 2);
                break;
              case u:
                (i = t / 2), (a = e + o);
                break;
              case d:
                (i = -1 * n), (a = e / 2);
            }
            l.setAttrs({
              x: -1 * i,
              y: -1 * a,
              width: t,
              height: e,
            }),
              s.setAttrs({
                x: -1 * i,
                y: -1 * a,
              });
          }
        }
      }
      (e.Label = f), (f.prototype.className = "Label"), (0, s._registerNode)(f);
      class g extends i.Shape {
        _sceneFunc(t) {
          var e = this.width(),
            r = this.height(),
            n = this.pointerDirection(),
            i = this.pointerWidth(),
            a = this.pointerHeight(),
            o = this.cornerRadius();
          let s = 0,
            l = 0,
            c = 0,
            f = 0;
          "number" == typeof o
            ? (s = l = c = f = Math.min(o, e / 2, r / 2))
            : ((s = Math.min(o[0] || 0, e / 2, r / 2)),
              (l = Math.min(o[1] || 0, e / 2, r / 2)),
              (f = Math.min(o[2] || 0, e / 2, r / 2)),
              (c = Math.min(o[3] || 0, e / 2, r / 2))),
            t.beginPath(),
            t.moveTo(s, 0),
            "up" === n &&
              (t.lineTo((e - i) / 2, 0),
              t.lineTo(e / 2, -1 * a),
              t.lineTo((e + i) / 2, 0)),
            t.lineTo(e - l, 0),
            t.arc(e - l, l, l, (3 * Math.PI) / 2, 0, !1),
            n === h &&
              (t.lineTo(e, (r - a) / 2),
              t.lineTo(e + i, r / 2),
              t.lineTo(e, (r + a) / 2)),
            t.lineTo(e, r - f),
            t.arc(e - f, r - f, f, 0, Math.PI / 2, !1),
            n === u &&
              (t.lineTo((e + i) / 2, r),
              t.lineTo(e / 2, r + a),
              t.lineTo((e - i) / 2, r)),
            t.lineTo(c, r),
            t.arc(c, r - c, c, Math.PI / 2, Math.PI, !1),
            n === d &&
              (t.lineTo(0, (r + a) / 2),
              t.lineTo(-1 * i, r / 2),
              t.lineTo(0, (r - a) / 2)),
            t.lineTo(0, s),
            t.arc(s, s, s, Math.PI, (3 * Math.PI) / 2, !1),
            t.closePath(),
            t.fillStrokeShape(this);
        }
        getSelfRect() {
          var t = 0,
            e = 0,
            r = this.pointerWidth(),
            n = this.pointerHeight(),
            i = this.pointerDirection(),
            a = this.width(),
            o = this.height();
          return (
            "up" === i
              ? ((e -= n), (o += n))
              : i === u
              ? (o += n)
              : i === d
              ? ((t -= 1.5 * r), (a += r))
              : i === h && (a += 1.5 * r),
            {
              x: t,
              y: e,
              width: a,
              height: o,
            }
          );
        }
      }
      (e.Tag = g),
        (g.prototype.className = "Tag"),
        (0, s._registerNode)(g),
        n.Factory.addGetterSetter(g, "pointerDirection", "none"),
        n.Factory.addGetterSetter(
          g,
          "pointerWidth",
          0,
          (0, o.getNumberValidator)()
        ),
        n.Factory.addGetterSetter(
          g,
          "pointerHeight",
          0,
          (0, o.getNumberValidator)()
        ),
        n.Factory.addGetterSetter(
          g,
          "cornerRadius",
          0,
          (0, o.getNumberOrArrayOfNumbersValidator)(4)
        );
    },
    64: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Line = void 0);
      let n = r(1027),
        i = r(7439),
        a = r(7367),
        o = r(9649);
      function s(t, e, r, n, i, a, o) {
        var s = Math.sqrt(Math.pow(r - t, 2) + Math.pow(n - e, 2)),
          l = Math.sqrt(Math.pow(i - r, 2) + Math.pow(a - n, 2)),
          h = (o * s) / (s + l),
          u = (o * l) / (s + l);
        return [
          r - h * (i - t),
          n - h * (a - e),
          r + u * (i - t),
          n + u * (a - e),
        ];
      }
      function l(t, e) {
        var r,
          n,
          i = t.length,
          a = [];
        for (r = 2; r < i - 2; r += 2)
          isNaN(
            (n = s(
              t[r - 2],
              t[r - 1],
              t[r],
              t[r + 1],
              t[r + 2],
              t[r + 3],
              e
            ))[0]
          ) ||
            (a.push(n[0]),
            a.push(n[1]),
            a.push(t[r]),
            a.push(t[r + 1]),
            a.push(n[2]),
            a.push(n[3]));
        return a;
      }
      class h extends i.Shape {
        constructor(t) {
          super(t),
            this.on(
              "pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva",
              function () {
                this._clearCache("tensionPoints");
              }
            );
        }
        _sceneFunc(t) {
          var e,
            r,
            n,
            i = this.points(),
            a = i.length,
            o = this.tension(),
            s = this.closed(),
            l = this.bezier();
          if (a) {
            if ((t.beginPath(), t.moveTo(i[0], i[1]), 0 !== o && a > 4)) {
              for (
                r = (e = this.getTensionPoints()).length,
                  n = s ? 0 : 4,
                  s || t.quadraticCurveTo(e[0], e[1], e[2], e[3]);
                n < r - 2;

              )
                t.bezierCurveTo(e[n++], e[n++], e[n++], e[n++], e[n++], e[n++]);
              s || t.quadraticCurveTo(e[r - 2], e[r - 1], i[a - 2], i[a - 1]);
            } else if (l)
              for (n = 2; n < a; )
                t.bezierCurveTo(i[n++], i[n++], i[n++], i[n++], i[n++], i[n++]);
            else for (n = 2; n < a; n += 2) t.lineTo(i[n], i[n + 1]);
            s ? (t.closePath(), t.fillStrokeShape(this)) : t.strokeShape(this);
          }
        }
        getTensionPoints() {
          return this._getCache("tensionPoints", this._getTensionPoints);
        }
        _getTensionPoints() {
          return this.closed()
            ? this._getTensionPointsClosed()
            : l(this.points(), this.tension());
        }
        _getTensionPointsClosed() {
          var t = this.points(),
            e = t.length,
            r = this.tension(),
            n = s(t[e - 2], t[e - 1], t[0], t[1], t[2], t[3], r),
            i = s(t[e - 4], t[e - 3], t[e - 2], t[e - 1], t[0], t[1], r),
            a = l(t, r);
          return [n[2], n[3]]
            .concat(a)
            .concat([
              i[0],
              i[1],
              t[e - 2],
              t[e - 1],
              i[2],
              i[3],
              n[0],
              n[1],
              t[0],
              t[1],
            ]);
        }
        getWidth() {
          return this.getSelfRect().width;
        }
        getHeight() {
          return this.getSelfRect().height;
        }
        getSelfRect() {
          var t,
            e,
            r = this.points();
          if (r.length < 4)
            return {
              x: r[0] || 0,
              y: r[1] || 0,
              width: 0,
              height: 0,
            };
          for (
            var n = (r =
                0 !== this.tension()
                  ? [
                      r[0],
                      r[1],
                      ...this._getTensionPoints(),
                      r[r.length - 2],
                      r[r.length - 1],
                    ]
                  : this.points())[0],
              i = r[0],
              a = r[1],
              o = r[1],
              s = 0;
            s < r.length / 2;
            s++
          )
            (t = r[2 * s]),
              (e = r[2 * s + 1]),
              (n = Math.min(n, t)),
              (i = Math.max(i, t)),
              (a = Math.min(a, e)),
              (o = Math.max(o, e));
          return {
            x: n,
            y: a,
            width: i - n,
            height: o - a,
          };
        }
      }
      (e.Line = h),
        (h.prototype.className = "Line"),
        (h.prototype._attrsAffectingSize = ["points", "bezier", "tension"]),
        (0, o._registerNode)(h),
        n.Factory.addGetterSetter(h, "closed", !1),
        n.Factory.addGetterSetter(h, "bezier", !1),
        n.Factory.addGetterSetter(h, "tension", 0, (0, a.getNumberValidator)()),
        n.Factory.addGetterSetter(
          h,
          "points",
          [],
          (0, a.getNumberArrayValidator)()
        );
    },
    7771: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Path = void 0);
      let n = r(1027),
        i = r(7439),
        a = r(9649),
        o = r(6962);
      class s extends i.Shape {
        constructor(t) {
          super(t),
            (this.dataArray = []),
            (this.pathLength = 0),
            this._readDataAttribute(),
            this.on("dataChange.konva", function () {
              this._readDataAttribute();
            });
        }
        _readDataAttribute() {
          (this.dataArray = s.parsePathData(this.data())),
            (this.pathLength = s.getPathLength(this.dataArray));
        }
        _sceneFunc(t) {
          var e = this.dataArray;
          t.beginPath();
          for (var r = !1, n = 0; n < e.length; n++) {
            var i = e[n].command,
              a = e[n].points;
            switch (i) {
              case "L":
                t.lineTo(a[0], a[1]);
                break;
              case "M":
                t.moveTo(a[0], a[1]);
                break;
              case "C":
                t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
                break;
              case "Q":
                t.quadraticCurveTo(a[0], a[1], a[2], a[3]);
                break;
              case "A":
                var o = a[0],
                  s = a[1],
                  l = a[2],
                  h = a[3],
                  u = a[4],
                  d = a[5],
                  c = a[6],
                  f = a[7],
                  g = l > h ? l : h,
                  p = l > h ? 1 : l / h,
                  v = l > h ? h / l : 1;
                t.translate(o, s),
                  t.rotate(c),
                  t.scale(p, v),
                  t.arc(0, 0, g, u, u + d, 1 - f),
                  t.scale(1 / p, 1 / v),
                  t.rotate(-c),
                  t.translate(-o, -s);
                break;
              case "z":
                (r = !0), t.closePath();
            }
          }
          r || this.hasFill() ? t.fillStrokeShape(this) : t.strokeShape(this);
        }
        getSelfRect() {
          var t,
            e,
            r = [];
          this.dataArray.forEach(function (t) {
            if ("A" === t.command) {
              var e = t.points[4],
                n = t.points[5],
                i = t.points[4] + n,
                a = Math.PI / 180;
              if ((Math.abs(e - i) < a && (a = Math.abs(e - i)), n < 0))
                for (let n = e - a; n > i; n -= a) {
                  let e = s.getPointOnEllipticalArc(
                    t.points[0],
                    t.points[1],
                    t.points[2],
                    t.points[3],
                    n,
                    0
                  );
                  r.push(e.x, e.y);
                }
              else
                for (let n = e + a; n < i; n += a) {
                  let e = s.getPointOnEllipticalArc(
                    t.points[0],
                    t.points[1],
                    t.points[2],
                    t.points[3],
                    n,
                    0
                  );
                  r.push(e.x, e.y);
                }
            } else if ("C" === t.command)
              for (let e = 0; e <= 1; e += 0.01) {
                let n = s.getPointOnCubicBezier(
                  e,
                  t.start.x,
                  t.start.y,
                  t.points[0],
                  t.points[1],
                  t.points[2],
                  t.points[3],
                  t.points[4],
                  t.points[5]
                );
                r.push(n.x, n.y);
              }
            else r = r.concat(t.points);
          });
          for (
            var n = r[0], i = r[0], a = r[1], o = r[1], l = 0;
            l < r.length / 2;
            l++
          )
            (t = r[2 * l]),
              (e = r[2 * l + 1]),
              isNaN(t) || ((n = Math.min(n, t)), (i = Math.max(i, t))),
              isNaN(e) || ((a = Math.min(a, e)), (o = Math.max(o, e)));
          return {
            x: n,
            y: a,
            width: i - n,
            height: o - a,
          };
        }
        getLength() {
          return this.pathLength;
        }
        getPointAtLength(t) {
          return s.getPointAtLengthOfDataArray(t, this.dataArray);
        }
        static getLineLength(t, e, r, n) {
          return Math.sqrt((r - t) * (r - t) + (n - e) * (n - e));
        }
        static getPathLength(t) {
          let e = 0;
          for (var r = 0; r < t.length; ++r) e += t[r].pathLength;
          return e;
        }
        static getPointAtLengthOfDataArray(t, e) {
          var r,
            n = 0,
            i = e.length;
          if (!i) return null;
          for (; n < i && t > e[n].pathLength; ) (t -= e[n].pathLength), ++n;
          if (n === i)
            return {
              x: (r = e[n - 1].points.slice(-2))[0],
              y: r[1],
            };
          if (t < 0.01)
            return {
              x: (r = e[n].points.slice(0, 2))[0],
              y: r[1],
            };
          var a = e[n],
            l = a.points;
          switch (a.command) {
            case "L":
              return s.getPointOnLine(t, a.start.x, a.start.y, l[0], l[1]);
            case "C":
              return s.getPointOnCubicBezier(
                (0, o.t2length)(t, s.getPathLength(e), (t) =>
                  (0, o.getCubicArcLength)(
                    [a.start.x, l[0], l[2], l[4]],
                    [a.start.y, l[1], l[3], l[5]],
                    t
                  )
                ),
                a.start.x,
                a.start.y,
                l[0],
                l[1],
                l[2],
                l[3],
                l[4],
                l[5]
              );
            case "Q":
              return s.getPointOnQuadraticBezier(
                (0, o.t2length)(t, s.getPathLength(e), (t) =>
                  (0, o.getQuadraticArcLength)(
                    [a.start.x, l[0], l[2]],
                    [a.start.y, l[1], l[3]],
                    t
                  )
                ),
                a.start.x,
                a.start.y,
                l[0],
                l[1],
                l[2],
                l[3]
              );
            case "A":
              var h = l[0],
                u = l[1],
                d = l[2],
                c = l[3],
                f = l[4],
                g = l[5],
                p = l[6];
              return (
                (f += (g * t) / a.pathLength),
                s.getPointOnEllipticalArc(h, u, d, c, f, p)
              );
          }
          return null;
        }
        static getPointOnLine(t, e, r, n, i, a, o) {
          (a = null != a ? a : e), (o = null != o ? o : r);
          let s = this.getLineLength(e, r, n, i);
          if (s < 1e-10)
            return {
              x: e,
              y: r,
            };
          if (n === e)
            return {
              x: a,
              y: o + (i > r ? t : -t),
            };
          let l = (i - r) / (n - e),
            h = Math.sqrt((t * t) / (1 + l * l)) * (n < e ? -1 : 1);
          if (1e-10 > Math.abs(o - r - l * (a - e)))
            return {
              x: a + h,
              y: o + l * h,
            };
          let u = ((a - e) * (n - e) + (o - r) * (i - r)) / (s * s),
            d = e + u * (n - e),
            c = r + u * (i - r),
            f = this.getLineLength(a, o, d, c),
            g = Math.sqrt(t * t - f * f),
            p = Math.sqrt((g * g) / (1 + l * l)) * (n < e ? -1 : 1);
          return {
            x: d + p,
            y: c + l * p,
          };
        }
        static getPointOnCubicBezier(t, e, r, n, i, a, o, s, l) {
          function h(t) {
            return 3 * t * (1 - t) * (1 - t);
          }
          return {
            x:
              t * t * t * s +
              3 * t * t * (1 - t) * a +
              n * h(t) +
              (1 - t) * (1 - t) * (1 - t) * e,
            y:
              t * t * t * l +
              3 * t * t * (1 - t) * o +
              i * h(t) +
              (1 - t) * (1 - t) * (1 - t) * r,
          };
        }
        static getPointOnQuadraticBezier(t, e, r, n, i, a, o) {
          return {
            x: t * t * a + 2 * t * (1 - t) * n + (1 - t) * (1 - t) * e,
            y: t * t * o + 2 * t * (1 - t) * i + (1 - t) * (1 - t) * r,
          };
        }
        static getPointOnEllipticalArc(t, e, r, n, i, a) {
          var o = Math.cos(a),
            s = Math.sin(a),
            l = {
              x: r * Math.cos(i),
              y: n * Math.sin(i),
            };
          return {
            x: t + (l.x * o - l.y * s),
            y: e + (l.x * s + l.y * o),
          };
        }
        static parsePathData(t) {
          if (!t) return [];
          var e = t,
            r = [
              "m",
              "M",
              "l",
              "L",
              "v",
              "V",
              "h",
              "H",
              "z",
              "Z",
              "c",
              "C",
              "q",
              "Q",
              "t",
              "T",
              "s",
              "S",
              "a",
              "A",
            ];
          e = e.replace(RegExp(" ", "g"), ",");
          for (var n = 0; n < r.length; n++)
            e = e.replace(RegExp(r[n], "g"), "|" + r[n]);
          var i = e.split("|"),
            a = [],
            o = [],
            s = 0,
            l = 0,
            h = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
          for (n = 1; n < i.length; n++) {
            var u = i[n],
              d = u.charAt(0);
            for (u = u.slice(1), o.length = 0; (v = h.exec(u)); ) o.push(v[0]);
            for (var c = [], f = 0, g = o.length; f < g; f++) {
              if ("00" === o[f]) {
                c.push(0, 0);
                continue;
              }
              var p = parseFloat(o[f]);
              isNaN(p) ? c.push(0) : c.push(p);
            }
            for (; c.length > 0 && !isNaN(c[0]); ) {
              var v,
                m,
                y,
                b,
                _,
                S,
                x,
                w,
                C,
                k,
                P,
                T = "",
                E = [],
                F = s,
                M = l;
              switch (d) {
                case "l":
                  (s += c.shift()), (l += c.shift()), (T = "L"), E.push(s, l);
                  break;
                case "L":
                  (s = c.shift()), (l = c.shift()), E.push(s, l);
                  break;
                case "m":
                  var N = c.shift(),
                    A = c.shift();
                  if (
                    ((s += N),
                    (l += A),
                    (T = "M"),
                    a.length > 2 && "z" === a[a.length - 1].command)
                  ) {
                    for (var R = a.length - 2; R >= 0; R--)
                      if ("M" === a[R].command) {
                        (s = a[R].points[0] + N), (l = a[R].points[1] + A);
                        break;
                      }
                  }
                  E.push(s, l), (d = "l");
                  break;
                case "M":
                  (s = c.shift()),
                    (l = c.shift()),
                    (T = "M"),
                    E.push(s, l),
                    (d = "L");
                  break;
                case "h":
                  (s += c.shift()), (T = "L"), E.push(s, l);
                  break;
                case "H":
                  (s = c.shift()), (T = "L"), E.push(s, l);
                  break;
                case "v":
                  (l += c.shift()), (T = "L"), E.push(s, l);
                  break;
                case "V":
                  (l = c.shift()), (T = "L"), E.push(s, l);
                  break;
                case "C":
                  E.push(c.shift(), c.shift(), c.shift(), c.shift()),
                    (s = c.shift()),
                    (l = c.shift()),
                    E.push(s, l);
                  break;
                case "c":
                  E.push(
                    s + c.shift(),
                    l + c.shift(),
                    s + c.shift(),
                    l + c.shift()
                  ),
                    (s += c.shift()),
                    (l += c.shift()),
                    (T = "C"),
                    E.push(s, l);
                  break;
                case "S":
                  (y = s),
                    (b = l),
                    "C" === (m = a[a.length - 1]).command &&
                      ((y = s + (s - m.points[2])),
                      (b = l + (l - m.points[3]))),
                    E.push(y, b, c.shift(), c.shift()),
                    (s = c.shift()),
                    (l = c.shift()),
                    (T = "C"),
                    E.push(s, l);
                  break;
                case "s":
                  (y = s),
                    (b = l),
                    "C" === (m = a[a.length - 1]).command &&
                      ((y = s + (s - m.points[2])),
                      (b = l + (l - m.points[3]))),
                    E.push(y, b, s + c.shift(), l + c.shift()),
                    (s += c.shift()),
                    (l += c.shift()),
                    (T = "C"),
                    E.push(s, l);
                  break;
                case "Q":
                  E.push(c.shift(), c.shift()),
                    (s = c.shift()),
                    (l = c.shift()),
                    E.push(s, l);
                  break;
                case "q":
                  E.push(s + c.shift(), l + c.shift()),
                    (s += c.shift()),
                    (l += c.shift()),
                    (T = "Q"),
                    E.push(s, l);
                  break;
                case "T":
                  (y = s),
                    (b = l),
                    "Q" === (m = a[a.length - 1]).command &&
                      ((y = s + (s - m.points[0])),
                      (b = l + (l - m.points[1]))),
                    (s = c.shift()),
                    (l = c.shift()),
                    (T = "Q"),
                    E.push(y, b, s, l);
                  break;
                case "t":
                  (y = s),
                    (b = l),
                    "Q" === (m = a[a.length - 1]).command &&
                      ((y = s + (s - m.points[0])),
                      (b = l + (l - m.points[1]))),
                    (s += c.shift()),
                    (l += c.shift()),
                    (T = "Q"),
                    E.push(y, b, s, l);
                  break;
                case "A":
                  (_ = c.shift()),
                    (S = c.shift()),
                    (x = c.shift()),
                    (w = c.shift()),
                    (C = c.shift()),
                    (k = s),
                    (P = l),
                    (s = c.shift()),
                    (l = c.shift()),
                    (T = "A"),
                    (E = this.convertEndpointToCenterParameterization(
                      k,
                      P,
                      s,
                      l,
                      w,
                      C,
                      _,
                      S,
                      x
                    ));
                  break;
                case "a":
                  (_ = c.shift()),
                    (S = c.shift()),
                    (x = c.shift()),
                    (w = c.shift()),
                    (C = c.shift()),
                    (k = s),
                    (P = l),
                    (s += c.shift()),
                    (l += c.shift()),
                    (T = "A"),
                    (E = this.convertEndpointToCenterParameterization(
                      k,
                      P,
                      s,
                      l,
                      w,
                      C,
                      _,
                      S,
                      x
                    ));
              }
              a.push({
                command: T || d,
                points: E,
                start: {
                  x: F,
                  y: M,
                },
                pathLength: this.calcLength(F, M, T || d, E),
              });
            }
            ("z" === d || "Z" === d) &&
              a.push({
                command: "z",
                points: [],
                start: void 0,
                pathLength: 0,
              });
          }
          return a;
        }
        static calcLength(t, e, r, n) {
          var i, a, l, h;
          switch (r) {
            case "L":
              return s.getLineLength(t, e, n[0], n[1]);
            case "C":
              return (0, o.getCubicArcLength)(
                [t, n[0], n[2], n[4]],
                [e, n[1], n[3], n[5]],
                1
              );
            case "Q":
              return (0, o.getQuadraticArcLength)(
                [t, n[0], n[2]],
                [e, n[1], n[3]],
                1
              );
            case "A":
              i = 0;
              var u = n[4],
                d = n[5],
                c = n[4] + d,
                f = Math.PI / 180;
              if (
                (Math.abs(u - c) < f && (f = Math.abs(u - c)),
                (a = s.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], u, 0)),
                d < 0)
              )
                for (h = u - f; h > c; h -= f)
                  (l = s.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], h, 0)),
                    (i += s.getLineLength(a.x, a.y, l.x, l.y)),
                    (a = l);
              else
                for (h = u + f; h < c; h += f)
                  (l = s.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], h, 0)),
                    (i += s.getLineLength(a.x, a.y, l.x, l.y)),
                    (a = l);
              return (
                (l = s.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], c, 0)),
                (i += s.getLineLength(a.x, a.y, l.x, l.y))
              );
          }
          return 0;
        }
        static convertEndpointToCenterParameterization(
          t,
          e,
          r,
          n,
          i,
          a,
          o,
          s,
          l
        ) {
          var h = (Math.PI / 180) * l,
            u = (Math.cos(h) * (t - r)) / 2 + (Math.sin(h) * (e - n)) / 2,
            d = (-1 * Math.sin(h) * (t - r)) / 2 + (Math.cos(h) * (e - n)) / 2,
            c = (u * u) / (o * o) + (d * d) / (s * s);
          c > 1 && ((o *= Math.sqrt(c)), (s *= Math.sqrt(c)));
          var f = Math.sqrt(
            (o * o * (s * s) - o * o * (d * d) - s * s * (u * u)) /
              (o * o * (d * d) + s * s * (u * u))
          );
          i === a && (f *= -1), isNaN(f) && (f = 0);
          var g = (f * o * d) / s,
            p = (-(f * s) * u) / o,
            v = function (t) {
              return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
            },
            m = function (t, e) {
              return (t[0] * e[0] + t[1] * e[1]) / (v(t) * v(e));
            },
            y = function (t, e) {
              return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(m(t, e));
            },
            b = y([1, 0], [(u - g) / o, (d - p) / s]),
            _ = [(u - g) / o, (d - p) / s],
            S = [(-1 * u - g) / o, (-1 * d - p) / s],
            x = y(_, S);
          return (
            -1 >= m(_, S) && (x = Math.PI),
            m(_, S) >= 1 && (x = 0),
            0 === a && x > 0 && (x -= 2 * Math.PI),
            1 === a && x < 0 && (x += 2 * Math.PI),
            [
              (t + r) / 2 + Math.cos(h) * g - Math.sin(h) * p,
              (e + n) / 2 + Math.sin(h) * g + Math.cos(h) * p,
              o,
              s,
              b,
              x,
              h,
              a,
            ]
          );
        }
      }
      (e.Path = s),
        (s.prototype.className = "Path"),
        (s.prototype._attrsAffectingSize = ["data"]),
        (0, a._registerNode)(s),
        n.Factory.addGetterSetter(s, "data");
    },
    8294: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Rect = void 0);
      let n = r(1027),
        i = r(7439),
        a = r(9649),
        o = r(5329),
        s = r(7367);
      class l extends i.Shape {
        _sceneFunc(t) {
          var e = this.cornerRadius(),
            r = this.width(),
            n = this.height();
          t.beginPath(),
            e ? o.Util.drawRoundedRectPath(t, r, n, e) : t.rect(0, 0, r, n),
            t.closePath(),
            t.fillStrokeShape(this);
        }
      }
      (e.Rect = l),
        (l.prototype.className = "Rect"),
        (0, a._registerNode)(l),
        n.Factory.addGetterSetter(
          l,
          "cornerRadius",
          0,
          (0, s.getNumberOrArrayOfNumbersValidator)(4)
        );
    },
    9870: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.RegularPolygon = void 0);
      let n = r(1027),
        i = r(7439),
        a = r(7367),
        o = r(9649);
      class s extends i.Shape {
        _sceneFunc(t) {
          let e = this._getPoints();
          t.beginPath(), t.moveTo(e[0].x, e[0].y);
          for (var r = 1; r < e.length; r++) t.lineTo(e[r].x, e[r].y);
          t.closePath(), t.fillStrokeShape(this);
        }
        _getPoints() {
          let t = this.attrs.sides,
            e = this.attrs.radius || 0,
            r = [];
          for (var n = 0; n < t; n++)
            r.push({
              x: e * Math.sin((2 * n * Math.PI) / t),
              y: -1 * e * Math.cos((2 * n * Math.PI) / t),
            });
          return r;
        }
        getSelfRect() {
          let t = this._getPoints();
          var e = t[0].x,
            r = t[0].y,
            n = t[0].x,
            i = t[0].y;
          return (
            t.forEach((t) => {
              (e = Math.min(e, t.x)),
                (r = Math.max(r, t.x)),
                (n = Math.min(n, t.y)),
                (i = Math.max(i, t.y));
            }),
            {
              x: e,
              y: n,
              width: r - e,
              height: i - n,
            }
          );
        }
        getWidth() {
          return 2 * this.radius();
        }
        getHeight() {
          return 2 * this.radius();
        }
        setWidth(t) {
          this.radius(t / 2);
        }
        setHeight(t) {
          this.radius(t / 2);
        }
      }
      (e.RegularPolygon = s),
        (s.prototype.className = "RegularPolygon"),
        (s.prototype._centroid = !0),
        (s.prototype._attrsAffectingSize = ["radius"]),
        (0, o._registerNode)(s),
        n.Factory.addGetterSetter(s, "radius", 0, (0, a.getNumberValidator)()),
        n.Factory.addGetterSetter(s, "sides", 0, (0, a.getNumberValidator)());
    },
    7827: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Ring = void 0);
      let n = r(1027),
        i = r(7439),
        a = r(7367),
        o = r(9649);
      var s = 2 * Math.PI;
      class l extends i.Shape {
        _sceneFunc(t) {
          t.beginPath(),
            t.arc(0, 0, this.innerRadius(), 0, s, !1),
            t.moveTo(this.outerRadius(), 0),
            t.arc(0, 0, this.outerRadius(), s, 0, !0),
            t.closePath(),
            t.fillStrokeShape(this);
        }
        getWidth() {
          return 2 * this.outerRadius();
        }
        getHeight() {
          return 2 * this.outerRadius();
        }
        setWidth(t) {
          this.outerRadius(t / 2);
        }
        setHeight(t) {
          this.outerRadius(t / 2);
        }
      }
      (e.Ring = l),
        (l.prototype.className = "Ring"),
        (l.prototype._centroid = !0),
        (l.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"]),
        (0, o._registerNode)(l),
        n.Factory.addGetterSetter(
          l,
          "innerRadius",
          0,
          (0, a.getNumberValidator)()
        ),
        n.Factory.addGetterSetter(
          l,
          "outerRadius",
          0,
          (0, a.getNumberValidator)()
        );
    },
    706: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Sprite = void 0);
      let n = r(1027),
        i = r(7439),
        a = r(895),
        o = r(7367),
        s = r(9649);
      class l extends i.Shape {
        constructor(t) {
          super(t),
            (this._updated = !0),
            (this.anim = new a.Animation(() => {
              var t = this._updated;
              return (this._updated = !1), t;
            })),
            this.on("animationChange.konva", function () {
              this.frameIndex(0);
            }),
            this.on("frameIndexChange.konva", function () {
              this._updated = !0;
            }),
            this.on("frameRateChange.konva", function () {
              this.anim.isRunning() &&
                (clearInterval(this.interval), this._setInterval());
            });
        }
        _sceneFunc(t) {
          var e = this.animation(),
            r = this.frameIndex(),
            n = 4 * r,
            i = this.animations()[e],
            a = this.frameOffsets(),
            o = i[n + 0],
            s = i[n + 1],
            l = i[n + 2],
            h = i[n + 3],
            u = this.image();
          if (
            ((this.hasFill() || this.hasStroke()) &&
              (t.beginPath(),
              t.rect(0, 0, l, h),
              t.closePath(),
              t.fillStrokeShape(this)),
            u)
          ) {
            if (a) {
              var d = a[e],
                c = 2 * r;
              t.drawImage(u, o, s, l, h, d[c + 0], d[c + 1], l, h);
            } else t.drawImage(u, o, s, l, h, 0, 0, l, h);
          }
        }
        _hitFunc(t) {
          var e = this.animation(),
            r = this.frameIndex(),
            n = 4 * r,
            i = this.animations()[e],
            a = this.frameOffsets(),
            o = i[n + 2],
            s = i[n + 3];
          if ((t.beginPath(), a)) {
            var l = a[e],
              h = 2 * r;
            t.rect(l[h + 0], l[h + 1], o, s);
          } else t.rect(0, 0, o, s);
          t.closePath(), t.fillShape(this);
        }
        _useBufferCanvas() {
          return super._useBufferCanvas(!0);
        }
        _setInterval() {
          var t = this;
          this.interval = setInterval(function () {
            t._updateIndex();
          }, 1e3 / this.frameRate());
        }
        start() {
          if (!this.isRunning()) {
            var t = this.getLayer();
            this.anim.setLayers(t), this._setInterval(), this.anim.start();
          }
        }
        stop() {
          this.anim.stop(), clearInterval(this.interval);
        }
        isRunning() {
          return this.anim.isRunning();
        }
        _updateIndex() {
          var t = this.frameIndex(),
            e = this.animation();
          t < this.animations()[e].length / 4 - 1
            ? this.frameIndex(t + 1)
            : this.frameIndex(0);
        }
      }
      (e.Sprite = l),
        (l.prototype.className = "Sprite"),
        (0, s._registerNode)(l),
        n.Factory.addGetterSetter(l, "animation"),
        n.Factory.addGetterSetter(l, "animations"),
        n.Factory.addGetterSetter(l, "frameOffsets"),
        n.Factory.addGetterSetter(l, "image"),
        n.Factory.addGetterSetter(
          l,
          "frameIndex",
          0,
          (0, o.getNumberValidator)()
        ),
        n.Factory.addGetterSetter(
          l,
          "frameRate",
          17,
          (0, o.getNumberValidator)()
        ),
        n.Factory.backCompat(l, {
          index: "frameIndex",
          getIndex: "getFrameIndex",
          setIndex: "setFrameIndex",
        });
    },
    3371: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Star = void 0);
      let n = r(1027),
        i = r(7439),
        a = r(7367),
        o = r(9649);
      class s extends i.Shape {
        _sceneFunc(t) {
          var e = this.innerRadius(),
            r = this.outerRadius(),
            n = this.numPoints();
          t.beginPath(), t.moveTo(0, 0 - r);
          for (var i = 1; i < 2 * n; i++) {
            var a = i % 2 == 0 ? r : e,
              o = a * Math.sin((i * Math.PI) / n),
              s = -1 * a * Math.cos((i * Math.PI) / n);
            t.lineTo(o, s);
          }
          t.closePath(), t.fillStrokeShape(this);
        }
        getWidth() {
          return 2 * this.outerRadius();
        }
        getHeight() {
          return 2 * this.outerRadius();
        }
        setWidth(t) {
          this.outerRadius(t / 2);
        }
        setHeight(t) {
          this.outerRadius(t / 2);
        }
      }
      (e.Star = s),
        (s.prototype.className = "Star"),
        (s.prototype._centroid = !0),
        (s.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"]),
        (0, o._registerNode)(s),
        n.Factory.addGetterSetter(
          s,
          "numPoints",
          5,
          (0, a.getNumberValidator)()
        ),
        n.Factory.addGetterSetter(
          s,
          "innerRadius",
          0,
          (0, a.getNumberValidator)()
        ),
        n.Factory.addGetterSetter(
          s,
          "outerRadius",
          0,
          (0, a.getNumberValidator)()
        );
    },
    1588: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Text = e.stringToArray = void 0);
      let n = r(5329),
        i = r(1027),
        a = r(7439),
        o = r(9649),
        s = r(7367),
        l = r(9649);
      function h(t) {
        return Array.from(t);
      }
      e.stringToArray = h;
      var u,
        d = "auto",
        c = "inherit",
        f = "justify",
        g = "left",
        p = "middle",
        v = "normal",
        m = "none",
        y = [
          "direction",
          "fontFamily",
          "fontSize",
          "fontStyle",
          "fontVariant",
          "padding",
          "align",
          "verticalAlign",
          "lineHeight",
          "text",
          "width",
          "height",
          "wrap",
          "ellipsis",
          "letterSpacing",
        ],
        b = y.length;
      function _() {
        return u || (u = n.Util.createCanvasElement().getContext("2d"));
      }
      class S extends a.Shape {
        constructor(t) {
          var e;
          super(
            ((e = (e = t) || {}).fillLinearGradientColorStops ||
              e.fillRadialGradientColorStops ||
              e.fillPatternImage ||
              (e.fill = e.fill || "black"),
            e)
          ),
            (this._partialTextX = 0),
            (this._partialTextY = 0);
          for (var r = 0; r < b; r++)
            this.on(y[r] + "Change.konva", this._setTextData);
          this._setTextData();
        }
        _sceneFunc(t) {
          var e = this.textArr,
            r = e.length;
          if (this.text()) {
            var n,
              i = this.padding(),
              a = this.fontSize(),
              s = this.lineHeight() * a,
              l = this.verticalAlign(),
              u = this.direction(),
              d = 0,
              v = this.align(),
              m = this.getWidth(),
              y = this.letterSpacing(),
              b = this.fill(),
              _ = this.textDecoration(),
              S = -1 !== _.indexOf("underline"),
              x = -1 !== _.indexOf("line-through");
            u = u === c ? t.direction : u;
            var w = s / 2,
              C = p;
            if (o.Konva._fixTextRendering) {
              var k = this.measureSize("M");
              (C = "alphabetic"),
                (w =
                  (k.fontBoundingBoxAscent - k.fontBoundingBoxDescent) / 2 +
                  s / 2);
            }
            var P = 0,
              T = 0;
            for (
              "rtl" === u && t.setAttr("direction", u),
                t.setAttr("font", this._getContextFont()),
                t.setAttr("textBaseline", C),
                t.setAttr("textAlign", g),
                l === p
                  ? (d = (this.getHeight() - r * s - 2 * i) / 2)
                  : "bottom" === l && (d = this.getHeight() - r * s - 2 * i),
                t.translate(i, d + i),
                n = 0;
              n < r;
              n++
            ) {
              var E,
                F,
                M,
                P = 0,
                T = 0,
                N = e[n],
                A = N.text,
                R = N.width,
                D = N.lastInParagraph;
              if (
                (t.save(),
                "right" === v
                  ? (P += m - R - 2 * i)
                  : "center" === v && (P += (m - R - 2 * i) / 2),
                S)
              ) {
                t.save(), t.beginPath();
                let e = o.Konva._fixTextRendering
                    ? Math.round(a / 4)
                    : Math.round(a / 2),
                  r = P,
                  n = w + T + e;
                t.moveTo(r, n),
                  (F = 0 == (E = A.split(" ").length - 1)),
                  (M = v !== f || D ? R : m - 2 * i),
                  t.lineTo(r + Math.round(M), n),
                  (t.lineWidth = a / 15);
                let s = this._getLinearGradient();
                (t.strokeStyle = s || b), t.stroke(), t.restore();
              }
              if (x) {
                t.save(), t.beginPath();
                let e = o.Konva._fixTextRendering ? -Math.round(a / 4) : 0;
                t.moveTo(P, w + T + e),
                  (F = 0 == (E = A.split(" ").length - 1)),
                  (M = v === f && D && !F ? m - 2 * i : R),
                  t.lineTo(P + Math.round(M), w + T + e),
                  (t.lineWidth = a / 15);
                let r = this._getLinearGradient();
                (t.strokeStyle = r || b), t.stroke(), t.restore();
              }
              if ("rtl" !== u && (0 !== y || v === f)) {
                E = A.split(" ").length - 1;
                for (var L = h(A), I = 0; I < L.length; I++) {
                  var G = L[I];
                  " " !== G || D || v !== f || (P += (m - 2 * i - R) / E),
                    (this._partialTextX = P),
                    (this._partialTextY = w + T),
                    (this._partialText = G),
                    t.fillStrokeShape(this),
                    (P += this.measureSize(G).width + y);
                }
              } else
                0 !== y && t.setAttr("letterSpacing", `${y}px`),
                  (this._partialTextX = P),
                  (this._partialTextY = w + T),
                  (this._partialText = A),
                  t.fillStrokeShape(this);
              t.restore(), r > 1 && (w += s);
            }
          }
        }
        _hitFunc(t) {
          var e = this.getWidth(),
            r = this.getHeight();
          t.beginPath(),
            t.rect(0, 0, e, r),
            t.closePath(),
            t.fillStrokeShape(this);
        }
        setText(t) {
          var e = n.Util._isString(t) ? t : null == t ? "" : t + "";
          return this._setAttr("text", e), this;
        }
        getWidth() {
          return this.attrs.width === d || void 0 === this.attrs.width
            ? this.getTextWidth() + 2 * this.padding()
            : this.attrs.width;
        }
        getHeight() {
          return this.attrs.height === d || void 0 === this.attrs.height
            ? this.fontSize() * this.textArr.length * this.lineHeight() +
                2 * this.padding()
            : this.attrs.height;
        }
        getTextWidth() {
          return this.textWidth;
        }
        getTextHeight() {
          return (
            n.Util.warn(
              "text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."
            ),
            this.textHeight
          );
        }
        measureSize(t) {
          var e,
            r,
            n,
            i,
            a,
            o,
            s,
            l,
            h,
            u,
            d,
            c,
            f = _(),
            g = this.fontSize();
          f.save(),
            (f.font = this._getContextFont()),
            (c = f.measureText(t)),
            f.restore();
          let p = g / 100;
          return {
            actualBoundingBoxAscent:
              null !== (e = c.actualBoundingBoxAscent) && void 0 !== e
                ? e
                : 71.58203125 * p,
            actualBoundingBoxDescent:
              null !== (r = c.actualBoundingBoxDescent) && void 0 !== r ? r : 0,
            actualBoundingBoxLeft:
              null !== (n = c.actualBoundingBoxLeft) && void 0 !== n
                ? n
                : -7.421875 * p,
            actualBoundingBoxRight:
              null !== (i = c.actualBoundingBoxRight) && void 0 !== i
                ? i
                : 75.732421875 * p,
            alphabeticBaseline:
              null !== (a = c.alphabeticBaseline) && void 0 !== a ? a : 0,
            emHeightAscent:
              null !== (o = c.emHeightAscent) && void 0 !== o ? o : 100 * p,
            emHeightDescent:
              null !== (s = c.emHeightDescent) && void 0 !== s ? s : -20 * p,
            fontBoundingBoxAscent:
              null !== (l = c.fontBoundingBoxAscent) && void 0 !== l
                ? l
                : 91 * p,
            fontBoundingBoxDescent:
              null !== (h = c.fontBoundingBoxDescent) && void 0 !== h
                ? h
                : 21 * p,
            hangingBaseline:
              null !== (u = c.hangingBaseline) && void 0 !== u
                ? u
                : 72.80000305175781 * p,
            ideographicBaseline:
              null !== (d = c.ideographicBaseline) && void 0 !== d
                ? d
                : -21 * p,
            width: c.width,
            height: g,
          };
        }
        _getContextFont() {
          return (
            this.fontStyle() +
            " " +
            this.fontVariant() +
            " " +
            this.fontSize() +
            "px " +
            this.fontFamily()
              .split(",")
              .map((t) => {
                let e = (t = t.trim()).indexOf(" ") >= 0,
                  r = t.indexOf('"') >= 0 || t.indexOf("'") >= 0;
                return e && !r && (t = `"${t}"`), t;
              })
              .join(", ")
          );
        }
        _addTextLine(t) {
          this.align() === f && (t = t.trim());
          var e = this._getTextWidth(t);
          return this.textArr.push({
            text: t,
            width: e,
            lastInParagraph: !1,
          });
        }
        _getTextWidth(t) {
          var e = this.letterSpacing(),
            r = t.length;
          return _().measureText(t).width + (r ? e * (r - 1) : 0);
        }
        _setTextData() {
          var t = this.text().split("\n"),
            e = +this.fontSize(),
            r = 0,
            n = this.lineHeight() * e,
            i = this.attrs.width,
            a = this.attrs.height,
            o = i !== d && void 0 !== i,
            s = a !== d && void 0 !== a,
            l = this.padding(),
            h = i - 2 * l,
            u = a - 2 * l,
            c = 0,
            f = this.wrap(),
            g = "char" !== f && f !== m,
            p = this.ellipsis();
          (this.textArr = []), (_().font = this._getContextFont());
          for (
            var v = p ? this._getTextWidth("…") : 0, y = 0, b = t.length;
            y < b;
            ++y
          ) {
            var S = t[y],
              x = this._getTextWidth(S);
            if (o && x > h)
              for (; S.length > 0; ) {
                for (var w = 0, C = S.length, k = "", P = 0; w < C; ) {
                  var T = (w + C) >>> 1,
                    E = S.slice(0, T + 1),
                    F = this._getTextWidth(E) + v;
                  F <= h ? ((w = T + 1), (k = E), (P = F)) : (C = T);
                }
                if (k) {
                  if (g) {
                    var M,
                      N = S[k.length];
                    (M =
                      (" " === N || "-" === N) && P <= h
                        ? k.length
                        : Math.max(k.lastIndexOf(" "), k.lastIndexOf("-")) +
                          1) > 0 &&
                      ((w = M),
                      (k = k.slice(0, w)),
                      (P = this._getTextWidth(k)));
                  }
                  if (
                    ((k = k.trimRight()),
                    this._addTextLine(k),
                    (r = Math.max(r, P)),
                    (c += n),
                    this._shouldHandleEllipsis(c))
                  ) {
                    this._tryToAddEllipsisToLastLine();
                    break;
                  }
                  if (
                    (S = (S = S.slice(w)).trimLeft()).length > 0 &&
                    (x = this._getTextWidth(S)) <= h
                  ) {
                    this._addTextLine(S), (c += n), (r = Math.max(r, x));
                    break;
                  }
                } else break;
              }
            else
              this._addTextLine(S),
                (c += n),
                (r = Math.max(r, x)),
                this._shouldHandleEllipsis(c) &&
                  y < b - 1 &&
                  this._tryToAddEllipsisToLastLine();
            if (
              (this.textArr[this.textArr.length - 1] &&
                (this.textArr[this.textArr.length - 1].lastInParagraph = !0),
              s && c + n > u)
            )
              break;
          }
          (this.textHeight = e), (this.textWidth = r);
        }
        _shouldHandleEllipsis(t) {
          var e = +this.fontSize(),
            r = this.lineHeight() * e,
            n = this.attrs.height,
            i = this.padding();
          return (
            !(this.wrap() !== m) ||
            (n !== d && void 0 !== n && t + r > n - 2 * i)
          );
        }
        _tryToAddEllipsisToLastLine() {
          var t = this.attrs.width,
            e = this.padding(),
            r = this.ellipsis(),
            n = this.textArr[this.textArr.length - 1];
          n &&
            r &&
            (t === d ||
              void 0 === t ||
              this._getTextWidth(n.text + "…") < t - 2 * e ||
              (n.text = n.text.slice(0, n.text.length - 3)),
            this.textArr.splice(this.textArr.length - 1, 1),
            this._addTextLine(n.text + "…"));
        }
        getStrokeScaleEnabled() {
          return !0;
        }
        _useBufferCanvas() {
          let t =
              -1 !== this.textDecoration().indexOf("underline") ||
              -1 !== this.textDecoration().indexOf("line-through"),
            e = this.hasShadow();
          return (!!t && !!e) || super._useBufferCanvas();
        }
      }
      (e.Text = S),
        (S.prototype._fillFunc = function (t) {
          t.fillText(this._partialText, this._partialTextX, this._partialTextY);
        }),
        (S.prototype._strokeFunc = function (t) {
          t.setAttr("miterLimit", 2),
            t.strokeText(
              this._partialText,
              this._partialTextX,
              this._partialTextY
            );
        }),
        (S.prototype.className = "Text"),
        (S.prototype._attrsAffectingSize = [
          "text",
          "fontSize",
          "padding",
          "wrap",
          "lineHeight",
          "letterSpacing",
        ]),
        (0, l._registerNode)(S),
        i.Factory.overWriteSetter(
          S,
          "width",
          (0, s.getNumberOrAutoValidator)()
        ),
        i.Factory.overWriteSetter(
          S,
          "height",
          (0, s.getNumberOrAutoValidator)()
        ),
        i.Factory.addGetterSetter(S, "direction", c),
        i.Factory.addGetterSetter(S, "fontFamily", "Arial"),
        i.Factory.addGetterSetter(
          S,
          "fontSize",
          12,
          (0, s.getNumberValidator)()
        ),
        i.Factory.addGetterSetter(S, "fontStyle", v),
        i.Factory.addGetterSetter(S, "fontVariant", v),
        i.Factory.addGetterSetter(S, "padding", 0, (0, s.getNumberValidator)()),
        i.Factory.addGetterSetter(S, "align", g),
        i.Factory.addGetterSetter(S, "verticalAlign", "top"),
        i.Factory.addGetterSetter(
          S,
          "lineHeight",
          1,
          (0, s.getNumberValidator)()
        ),
        i.Factory.addGetterSetter(S, "wrap", "word"),
        i.Factory.addGetterSetter(
          S,
          "ellipsis",
          !1,
          (0, s.getBooleanValidator)()
        ),
        i.Factory.addGetterSetter(
          S,
          "letterSpacing",
          0,
          (0, s.getNumberValidator)()
        ),
        i.Factory.addGetterSetter(S, "text", "", (0, s.getStringValidator)()),
        i.Factory.addGetterSetter(S, "textDecoration", "");
    },
    1735: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.TextPath = void 0);
      let n = r(5329),
        i = r(1027),
        a = r(7439),
        o = r(7771),
        s = r(1588),
        l = r(7367),
        h = r(9649);
      var u = "normal";
      function d(t) {
        t.fillText(this.partialText, 0, 0);
      }
      function c(t) {
        t.strokeText(this.partialText, 0, 0);
      }
      class f extends a.Shape {
        constructor(t) {
          super(t),
            (this.dummyCanvas = n.Util.createCanvasElement()),
            (this.dataArray = []),
            this._readDataAttribute(),
            this.on("dataChange.konva", function () {
              this._readDataAttribute(), this._setTextData();
            }),
            this.on(
              "textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva",
              this._setTextData
            ),
            this._setTextData();
        }
        _getTextPathLength() {
          return o.Path.getPathLength(this.dataArray);
        }
        _getPointAtLength(t) {
          return !this.attrs.data || t - 1 > this.pathLength
            ? null
            : o.Path.getPointAtLengthOfDataArray(t, this.dataArray);
        }
        _readDataAttribute() {
          (this.dataArray = o.Path.parsePathData(this.attrs.data)),
            (this.pathLength = this._getTextPathLength());
        }
        _sceneFunc(t) {
          t.setAttr("font", this._getContextFont()),
            t.setAttr("textBaseline", this.textBaseline()),
            t.setAttr("textAlign", "left"),
            t.save();
          var e = this.textDecoration(),
            r = this.fill(),
            n = this.fontSize(),
            i = this.glyphInfo;
          "underline" === e && t.beginPath();
          for (var a = 0; a < i.length; a++) {
            t.save();
            var o = i[a].p0;
            t.translate(o.x, o.y),
              t.rotate(i[a].rotation),
              (this.partialText = i[a].text),
              t.fillStrokeShape(this),
              "underline" === e &&
                (0 === a && t.moveTo(0, n / 2 + 1), t.lineTo(n, n / 2 + 1)),
              t.restore();
          }
          "underline" === e &&
            ((t.strokeStyle = r), (t.lineWidth = n / 20), t.stroke()),
            t.restore();
        }
        _hitFunc(t) {
          t.beginPath();
          var e = this.glyphInfo;
          if (e.length >= 1) {
            var r = e[0].p0;
            t.moveTo(r.x, r.y);
          }
          for (var n = 0; n < e.length; n++) {
            var i = e[n].p1;
            t.lineTo(i.x, i.y);
          }
          t.setAttr("lineWidth", this.fontSize()),
            t.setAttr("strokeStyle", this.colorKey),
            t.stroke();
        }
        getTextWidth() {
          return this.textWidth;
        }
        getTextHeight() {
          return (
            n.Util.warn(
              "text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."
            ),
            this.textHeight
          );
        }
        setText(t) {
          return s.Text.prototype.setText.call(this, t);
        }
        _getContextFont() {
          return s.Text.prototype._getContextFont.call(this);
        }
        _getTextSize(t) {
          var e = this.dummyCanvas.getContext("2d");
          e.save(), (e.font = this._getContextFont());
          var r = e.measureText(t);
          return (
            e.restore(),
            {
              width: r.width,
              height: parseInt(`${this.fontSize()}`, 10),
            }
          );
        }
        _setTextData() {
          let { width: t, height: e } = this._getTextSize(this.attrs.text);
          if (
            ((this.textWidth = t),
            (this.textHeight = e),
            (this.glyphInfo = []),
            !this.attrs.data)
          )
            return null;
          let r = this.letterSpacing(),
            n = this.align(),
            i = this.kerningFunc(),
            a = Math.max(
              this.textWidth + ((this.attrs.text || "").length - 1) * r,
              0
            ),
            l = 0;
          "center" === n && (l = Math.max(0, this.pathLength / 2 - a / 2)),
            "right" === n && (l = Math.max(0, this.pathLength - a));
          let h = (0, s.stringToArray)(this.text()),
            u = l;
          for (var d = 0; d < h.length; d++) {
            let t = this._getPointAtLength(u);
            if (!t) return;
            let e = this._getTextSize(h[d]).width + r;
            if (" " === h[d] && "justify" === n) {
              let t = this.text().split(" ").length - 1;
              e += (this.pathLength - a) / t;
            }
            let s = this._getPointAtLength(u + e);
            if (!s) return;
            let l = o.Path.getLineLength(t.x, t.y, s.x, s.y),
              c = 0;
            if (i)
              try {
                c = i(h[d - 1], h[d]) * this.fontSize();
              } catch (t) {
                c = 0;
              }
            (t.x += c), (s.x += c), (this.textWidth += c);
            let f = o.Path.getPointOnLine(c + l / 2, t.x, t.y, s.x, s.y),
              g = Math.atan2(s.y - t.y, s.x - t.x);
            this.glyphInfo.push({
              transposeX: f.x,
              transposeY: f.y,
              text: h[d],
              rotation: g,
              p0: t,
              p1: s,
            }),
              (u += e);
          }
        }
        getSelfRect() {
          if (!this.glyphInfo.length)
            return {
              x: 0,
              y: 0,
              width: 0,
              height: 0,
            };
          var t,
            e,
            r = [];
          this.glyphInfo.forEach(function (t) {
            r.push(t.p0.x), r.push(t.p0.y), r.push(t.p1.x), r.push(t.p1.y);
          });
          for (
            var n = r[0] || 0,
              i = r[0] || 0,
              a = r[1] || 0,
              o = r[1] || 0,
              s = 0;
            s < r.length / 2;
            s++
          )
            (t = r[2 * s]),
              (e = r[2 * s + 1]),
              (n = Math.min(n, t)),
              (i = Math.max(i, t)),
              (a = Math.min(a, e)),
              (o = Math.max(o, e));
          var l = this.fontSize();
          return {
            x: n - l / 2,
            y: a - l / 2,
            width: i - n + l,
            height: o - a + l,
          };
        }
        destroy() {
          return n.Util.releaseCanvas(this.dummyCanvas), super.destroy();
        }
      }
      (e.TextPath = f),
        (f.prototype._fillFunc = d),
        (f.prototype._strokeFunc = c),
        (f.prototype._fillFuncHit = d),
        (f.prototype._strokeFuncHit = c),
        (f.prototype.className = "TextPath"),
        (f.prototype._attrsAffectingSize = ["text", "fontSize", "data"]),
        (0, h._registerNode)(f),
        i.Factory.addGetterSetter(f, "data"),
        i.Factory.addGetterSetter(f, "fontFamily", "Arial"),
        i.Factory.addGetterSetter(
          f,
          "fontSize",
          12,
          (0, l.getNumberValidator)()
        ),
        i.Factory.addGetterSetter(f, "fontStyle", u),
        i.Factory.addGetterSetter(f, "align", "left"),
        i.Factory.addGetterSetter(
          f,
          "letterSpacing",
          0,
          (0, l.getNumberValidator)()
        ),
        i.Factory.addGetterSetter(f, "textBaseline", "middle"),
        i.Factory.addGetterSetter(f, "fontVariant", u),
        i.Factory.addGetterSetter(f, "text", ""),
        i.Factory.addGetterSetter(f, "textDecoration", null),
        i.Factory.addGetterSetter(f, "kerningFunc", null);
    },
    6740: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Transformer = void 0);
      let n = r(5329),
        i = r(1027),
        a = r(4667),
        o = r(7439),
        s = r(8294),
        l = r(2853),
        h = r(9649),
        u = r(7367),
        d = r(9649);
      var c = "tr-konva",
        f = [
          "resizeEnabledChange",
          "rotateAnchorOffsetChange",
          "rotateEnabledChange",
          "enabledAnchorsChange",
          "anchorSizeChange",
          "borderEnabledChange",
          "borderStrokeChange",
          "borderStrokeWidthChange",
          "borderDashChange",
          "anchorStrokeChange",
          "anchorStrokeWidthChange",
          "anchorFillChange",
          "anchorCornerRadiusChange",
          "ignoreStrokeChange",
          "anchorStyleFuncChange",
        ]
          .map((t) => t + `.${c}`)
          .join(" "),
        g = "nodesRect",
        p = [
          "widthChange",
          "heightChange",
          "scaleXChange",
          "scaleYChange",
          "skewXChange",
          "skewYChange",
          "rotationChange",
          "offsetXChange",
          "offsetYChange",
          "transformsEnabledChange",
          "strokeWidthChange",
        ],
        v = {
          "top-left": -45,
          "top-center": 0,
          "top-right": 45,
          "middle-right": -90,
          "middle-left": 90,
          "bottom-left": -135,
          "bottom-center": 180,
          "bottom-right": 135,
        };
      let m = "ontouchstart" in h.Konva._global;
      var y = [
        "top-left",
        "top-center",
        "top-right",
        "middle-right",
        "middle-left",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ];
      function b(t, e, r) {
        let n = r.x + (t.x - r.x) * Math.cos(e) - (t.y - r.y) * Math.sin(e),
          i = r.y + (t.x - r.x) * Math.sin(e) + (t.y - r.y) * Math.cos(e);
        return {
          ...t,
          rotation: t.rotation + e,
          x: n,
          y: i,
        };
      }
      let _ = 0;
      class S extends l.Group {
        constructor(t) {
          super(t),
            (this._movingAnchorName = null),
            (this._transforming = !1),
            this._createElements(),
            (this._handleMouseMove = this._handleMouseMove.bind(this)),
            (this._handleMouseUp = this._handleMouseUp.bind(this)),
            (this.update = this.update.bind(this)),
            this.on(f, this.update),
            this.getNode() && this.update();
        }
        attachTo(t) {
          return this.setNode(t), this;
        }
        setNode(t) {
          return (
            n.Util.warn(
              "tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."
            ),
            this.setNodes([t])
          );
        }
        getNode() {
          return this._nodes && this._nodes[0];
        }
        _getEventNamespace() {
          return c + this._id;
        }
        setNodes(t = []) {
          this._nodes && this._nodes.length && this.detach();
          let e = t.filter(
            (t) =>
              !t.isAncestorOf(this) ||
              (n.Util.error(
                "Konva.Transformer cannot be an a child of the node you are trying to attach"
              ),
              !1)
          );
          return (
            (this._nodes = t = e),
            1 === t.length && this.useSingleNodeRotation()
              ? this.rotation(t[0].getAbsoluteRotation())
              : this.rotation(0),
            this._nodes.forEach((t) => {
              let e = () => {
                  1 === this.nodes().length &&
                    this.useSingleNodeRotation() &&
                    this.rotation(this.nodes()[0].getAbsoluteRotation()),
                    this._resetTransformCache(),
                    this._transforming || this.isDragging() || this.update();
                },
                r = t._attrsAffectingSize
                  .map((t) => t + "Change." + this._getEventNamespace())
                  .join(" ");
              t.on(r, e),
                t.on(
                  p.map((t) => t + `.${this._getEventNamespace()}`).join(" "),
                  e
                ),
                t.on(`absoluteTransformChange.${this._getEventNamespace()}`, e),
                this._proxyDrag(t);
            }),
            this._resetTransformCache(),
            this.findOne(".top-left") && this.update(),
            this
          );
        }
        _proxyDrag(t) {
          let e;
          t.on(`dragstart.${this._getEventNamespace()}`, (r) => {
            (e = t.getAbsolutePosition()),
              this.isDragging() ||
                t === this.findOne(".back") ||
                this.startDrag(r, !1);
          }),
            t.on(`dragmove.${this._getEventNamespace()}`, (r) => {
              if (!e) return;
              let n = t.getAbsolutePosition(),
                i = n.x - e.x,
                a = n.y - e.y;
              this.nodes().forEach((e) => {
                if (e === t || e.isDragging()) return;
                let n = e.getAbsolutePosition();
                e.setAbsolutePosition({
                  x: n.x + i,
                  y: n.y + a,
                }),
                  e.startDrag(r);
              }),
                (e = null);
            });
        }
        getNodes() {
          return this._nodes || [];
        }
        getActiveAnchor() {
          return this._movingAnchorName;
        }
        detach() {
          this._nodes &&
            this._nodes.forEach((t) => {
              t.off("." + this._getEventNamespace());
            }),
            (this._nodes = []),
            this._resetTransformCache();
        }
        _resetTransformCache() {
          this._clearCache(g),
            this._clearCache("transform"),
            this._clearSelfAndDescendantCache("absoluteTransform");
        }
        _getNodeRect() {
          return this._getCache(g, this.__getNodeRect);
        }
        __getNodeShape(t, e = this.rotation(), r) {
          var n = t.getClientRect({
              skipTransform: !0,
              skipShadow: !0,
              skipStroke: this.ignoreStroke(),
            }),
            i = t.getAbsoluteScale(r),
            a = t.getAbsolutePosition(r),
            o = n.x * i.x - t.offsetX() * i.x,
            s = n.y * i.y - t.offsetY() * i.y;
          let l =
            (h.Konva.getAngle(t.getAbsoluteRotation()) + 2 * Math.PI) %
            (2 * Math.PI);
          return b(
            {
              x: a.x + o * Math.cos(l) + s * Math.sin(-l),
              y: a.y + s * Math.cos(l) + o * Math.sin(l),
              width: n.width * i.x,
              height: n.height * i.y,
              rotation: l,
            },
            -h.Konva.getAngle(e),
            {
              x: 0,
              y: 0,
            }
          );
        }
        __getNodeRect() {
          if (!this.getNode())
            return {
              x: -1e8,
              y: -1e8,
              width: 0,
              height: 0,
              rotation: 0,
            };
          let t = [];
          this.nodes().map((e) => {
            let r = e.getClientRect({
              skipTransform: !0,
              skipShadow: !0,
              skipStroke: this.ignoreStroke(),
            });
            var n = [
                {
                  x: r.x,
                  y: r.y,
                },
                {
                  x: r.x + r.width,
                  y: r.y,
                },
                {
                  x: r.x + r.width,
                  y: r.y + r.height,
                },
                {
                  x: r.x,
                  y: r.y + r.height,
                },
              ],
              i = e.getAbsoluteTransform();
            n.forEach(function (e) {
              var r = i.point(e);
              t.push(r);
            });
          });
          let e = new n.Transform();
          e.rotate(-h.Konva.getAngle(this.rotation()));
          var r = 1 / 0,
            i = 1 / 0,
            a = -1 / 0,
            o = -1 / 0;
          t.forEach(function (t) {
            var n = e.point(t);
            void 0 === r && ((r = a = n.x), (i = o = n.y)),
              (r = Math.min(r, n.x)),
              (i = Math.min(i, n.y)),
              (a = Math.max(a, n.x)),
              (o = Math.max(o, n.y));
          }),
            e.invert();
          let s = e.point({
            x: r,
            y: i,
          });
          return {
            x: s.x,
            y: s.y,
            width: a - r,
            height: o - i,
            rotation: h.Konva.getAngle(this.rotation()),
          };
        }
        getX() {
          return this._getNodeRect().x;
        }
        getY() {
          return this._getNodeRect().y;
        }
        getWidth() {
          return this._getNodeRect().width;
        }
        getHeight() {
          return this._getNodeRect().height;
        }
        _createElements() {
          this._createBack(),
            y.forEach((t) => {
              this._createAnchor(t);
            }),
            this._createAnchor("rotater");
        }
        _createAnchor(t) {
          var e = new s.Rect({
              stroke: "rgb(0, 161, 255)",
              fill: "white",
              strokeWidth: 1,
              name: t + " _anchor",
              dragDistance: 0,
              draggable: !0,
              hitStrokeWidth: m ? 10 : "auto",
            }),
            r = this;
          e.on("mousedown touchstart", function (t) {
            r._handleMouseDown(t);
          }),
            e.on("dragstart", (t) => {
              e.stopDrag(), (t.cancelBubble = !0);
            }),
            e.on("dragend", (t) => {
              t.cancelBubble = !0;
            }),
            e.on("mouseenter", () => {
              var r = (function (t, e, r) {
                if ("rotater" === t) return r;
                e += n.Util.degToRad(v[t] || 0);
                var i = ((n.Util.radToDeg(e) % 360) + 360) % 360;
                if (
                  n.Util._inRange(i, 337.5, 360) ||
                  n.Util._inRange(i, 0, 22.5)
                )
                  return "ns-resize";
                if (n.Util._inRange(i, 22.5, 67.5)) return "nesw-resize";
                if (n.Util._inRange(i, 67.5, 112.5)) return "ew-resize";
                if (n.Util._inRange(i, 112.5, 157.5)) return "nwse-resize";
                if (n.Util._inRange(i, 157.5, 202.5)) return "ns-resize";
                if (n.Util._inRange(i, 202.5, 247.5)) return "nesw-resize";
                if (n.Util._inRange(i, 247.5, 292.5)) return "ew-resize";
                else if (n.Util._inRange(i, 292.5, 337.5)) return "nwse-resize";
                else
                  return (
                    n.Util.error(
                      "Transformer has unknown angle for cursor detection: " + i
                    ),
                    "pointer"
                  );
              })(
                t,
                h.Konva.getAngle(this.rotation()),
                this.rotateAnchorCursor()
              );
              e.getStage().content && (e.getStage().content.style.cursor = r),
                (this._cursorChange = !0);
            }),
            e.on("mouseout", () => {
              e.getStage().content && (e.getStage().content.style.cursor = ""),
                (this._cursorChange = !1);
            }),
            this.add(e);
        }
        _createBack() {
          var t = new o.Shape({
            name: "back",
            width: 0,
            height: 0,
            draggable: !0,
            sceneFunc(t, e) {
              var r = e.getParent(),
                i = r.padding();
              t.beginPath(),
                t.rect(-i, -i, e.width() + 2 * i, e.height() + 2 * i),
                t.moveTo(e.width() / 2, -i),
                r.rotateEnabled() &&
                  r.rotateLineVisible() &&
                  t.lineTo(
                    e.width() / 2,
                    -r.rotateAnchorOffset() * n.Util._sign(e.height()) - i
                  ),
                t.fillStrokeShape(e);
            },
            hitFunc: (t, e) => {
              if (this.shouldOverdrawWholeArea()) {
                var r = this.padding();
                t.beginPath(),
                  t.rect(-r, -r, e.width() + 2 * r, e.height() + 2 * r),
                  t.fillStrokeShape(e);
              }
            },
          });
          this.add(t),
            this._proxyDrag(t),
            t.on("dragstart", (t) => {
              t.cancelBubble = !0;
            }),
            t.on("dragmove", (t) => {
              t.cancelBubble = !0;
            }),
            t.on("dragend", (t) => {
              t.cancelBubble = !0;
            }),
            this.on("dragmove", (t) => {
              this.update();
            });
        }
        _handleMouseDown(t) {
          if (!this._transforming) {
            this._movingAnchorName = t.target.name().split(" ")[0];
            var e = this._getNodeRect(),
              r = e.width,
              n = e.height,
              i = Math.sqrt(Math.pow(r, 2) + Math.pow(n, 2));
            (this.sin = Math.abs(n / i)),
              (this.cos = Math.abs(r / i)),
              "undefined" != typeof window &&
                (window.addEventListener("mousemove", this._handleMouseMove),
                window.addEventListener("touchmove", this._handleMouseMove),
                window.addEventListener("mouseup", this._handleMouseUp, !0),
                window.addEventListener("touchend", this._handleMouseUp, !0)),
              (this._transforming = !0);
            var a = t.target.getAbsolutePosition(),
              o = t.target.getStage().getPointerPosition();
            (this._anchorDragOffset = {
              x: o.x - a.x,
              y: o.y - a.y,
            }),
              _++,
              this._fire("transformstart", {
                evt: t.evt,
                target: this.getNode(),
              }),
              this._nodes.forEach((e) => {
                e._fire("transformstart", {
                  evt: t.evt,
                  target: e,
                });
              });
          }
        }
        _handleMouseMove(t) {
          var e,
            r,
            n,
            i,
            a = this.findOne("." + this._movingAnchorName),
            o = a.getStage();
          o.setPointersPositions(t);
          let s = o.getPointerPosition(),
            l = {
              x: s.x - this._anchorDragOffset.x,
              y: s.y - this._anchorDragOffset.y,
            },
            u = a.getAbsolutePosition();
          this.anchorDragBoundFunc() &&
            (l = this.anchorDragBoundFunc()(u, l, t)),
            a.setAbsolutePosition(l);
          let d = a.getAbsolutePosition();
          if (u.x !== d.x || u.y !== d.y) {
            if ("rotater" === this._movingAnchorName) {
              var c = this._getNodeRect();
              e = a.x() - c.width / 2;
              let n = Math.atan2(-(r = -a.y() + c.height / 2), e) + Math.PI / 2;
              c.height < 0 && (n -= Math.PI);
              let i = h.Konva.getAngle(this.rotation()) + n,
                o = h.Konva.getAngle(this.rotationSnapTolerance()),
                s =
                  (function (t, e, r) {
                    let n = e;
                    for (let i = 0; i < t.length; i++) {
                      let a = h.Konva.getAngle(t[i]),
                        o = Math.abs(a - e) % (2 * Math.PI);
                      Math.min(o, 2 * Math.PI - o) < r && (n = a);
                    }
                    return n;
                  })(this.rotationSnaps(), i, o) - c.rotation,
                l = (function (t, e) {
                  let r = {
                    x:
                      t.x +
                      (t.width / 2) * Math.cos(t.rotation) +
                      (t.height / 2) * Math.sin(-t.rotation),
                    y:
                      t.y +
                      (t.height / 2) * Math.cos(t.rotation) +
                      (t.width / 2) * Math.sin(t.rotation),
                  };
                  return b(t, e, r);
                })(c, s);
              this._fitNodesInto(l, t);
              return;
            }
            var f = this.shiftBehavior();
            i =
              "inverted" === f
                ? this.keepRatio() && !t.shiftKey
                : "none" === f
                ? this.keepRatio()
                : this.keepRatio() || t.shiftKey;
            var g = this.centeredScaling() || t.altKey;
            if ("top-left" === this._movingAnchorName) {
              if (i) {
                var p = g
                  ? {
                      x: this.width() / 2,
                      y: this.height() / 2,
                    }
                  : {
                      x: this.findOne(".bottom-right").x(),
                      y: this.findOne(".bottom-right").y(),
                    };
                n = Math.sqrt(
                  Math.pow(p.x - a.x(), 2) + Math.pow(p.y - a.y(), 2)
                );
                var v = this.findOne(".top-left").x() > p.x ? -1 : 1,
                  m = this.findOne(".top-left").y() > p.y ? -1 : 1;
                (e = n * this.cos * v),
                  (r = n * this.sin * m),
                  this.findOne(".top-left").x(p.x - e),
                  this.findOne(".top-left").y(p.y - r);
              }
            } else if ("top-center" === this._movingAnchorName)
              this.findOne(".top-left").y(a.y());
            else if ("top-right" === this._movingAnchorName) {
              if (i) {
                var p = g
                  ? {
                      x: this.width() / 2,
                      y: this.height() / 2,
                    }
                  : {
                      x: this.findOne(".bottom-left").x(),
                      y: this.findOne(".bottom-left").y(),
                    };
                n = Math.sqrt(
                  Math.pow(a.x() - p.x, 2) + Math.pow(p.y - a.y(), 2)
                );
                var v = this.findOne(".top-right").x() < p.x ? -1 : 1,
                  m = this.findOne(".top-right").y() > p.y ? -1 : 1;
                (e = n * this.cos * v),
                  (r = n * this.sin * m),
                  this.findOne(".top-right").x(p.x + e),
                  this.findOne(".top-right").y(p.y - r);
              }
              var y = a.position();
              this.findOne(".top-left").y(y.y),
                this.findOne(".bottom-right").x(y.x);
            } else if ("middle-left" === this._movingAnchorName)
              this.findOne(".top-left").x(a.x());
            else if ("middle-right" === this._movingAnchorName)
              this.findOne(".bottom-right").x(a.x());
            else if ("bottom-left" === this._movingAnchorName) {
              if (i) {
                var p = g
                  ? {
                      x: this.width() / 2,
                      y: this.height() / 2,
                    }
                  : {
                      x: this.findOne(".top-right").x(),
                      y: this.findOne(".top-right").y(),
                    };
                n = Math.sqrt(
                  Math.pow(p.x - a.x(), 2) + Math.pow(a.y() - p.y, 2)
                );
                var v = p.x < a.x() ? -1 : 1,
                  m = a.y() < p.y ? -1 : 1;
                (e = n * this.cos * v),
                  (r = n * this.sin * m),
                  a.x(p.x - e),
                  a.y(p.y + r);
              }
              (y = a.position()),
                this.findOne(".top-left").x(y.x),
                this.findOne(".bottom-right").y(y.y);
            } else if ("bottom-center" === this._movingAnchorName)
              this.findOne(".bottom-right").y(a.y());
            else if ("bottom-right" === this._movingAnchorName) {
              if (i) {
                var p = g
                  ? {
                      x: this.width() / 2,
                      y: this.height() / 2,
                    }
                  : {
                      x: this.findOne(".top-left").x(),
                      y: this.findOne(".top-left").y(),
                    };
                n = Math.sqrt(
                  Math.pow(a.x() - p.x, 2) + Math.pow(a.y() - p.y, 2)
                );
                var v = this.findOne(".bottom-right").x() < p.x ? -1 : 1,
                  m = this.findOne(".bottom-right").y() < p.y ? -1 : 1;
                (e = n * this.cos * v),
                  (r = n * this.sin * m),
                  this.findOne(".bottom-right").x(p.x + e),
                  this.findOne(".bottom-right").y(p.y + r);
              }
            } else
              console.error(
                Error(
                  "Wrong position argument of selection resizer: " +
                    this._movingAnchorName
                )
              );
            var g = this.centeredScaling() || t.altKey;
            if (g) {
              var _ = this.findOne(".top-left"),
                S = this.findOne(".bottom-right"),
                x = _.x(),
                w = _.y(),
                C = this.getWidth() - S.x(),
                k = this.getHeight() - S.y();
              S.move({
                x: -x,
                y: -w,
              }),
                _.move({
                  x: C,
                  y: k,
                });
            }
            var P = this.findOne(".top-left").getAbsolutePosition();
            (e = P.x), (r = P.y);
            var T =
                this.findOne(".bottom-right").x() -
                this.findOne(".top-left").x(),
              E =
                this.findOne(".bottom-right").y() -
                this.findOne(".top-left").y();
            this._fitNodesInto(
              {
                x: e,
                y: r,
                width: T,
                height: E,
                rotation: h.Konva.getAngle(this.rotation()),
              },
              t
            );
          }
        }
        _handleMouseUp(t) {
          this._removeEvents(t);
        }
        getAbsoluteTransform() {
          return this.getTransform();
        }
        _removeEvents(t) {
          var e;
          if (this._transforming) {
            (this._transforming = !1),
              "undefined" != typeof window &&
                (window.removeEventListener("mousemove", this._handleMouseMove),
                window.removeEventListener("touchmove", this._handleMouseMove),
                window.removeEventListener("mouseup", this._handleMouseUp, !0),
                window.removeEventListener(
                  "touchend",
                  this._handleMouseUp,
                  !0
                ));
            var r = this.getNode();
            _--,
              this._fire("transformend", {
                evt: t,
                target: r,
              }),
              null === (e = this.getLayer()) || void 0 === e || e.batchDraw(),
              r &&
                this._nodes.forEach((e) => {
                  var r;
                  e._fire("transformend", {
                    evt: t,
                    target: e,
                  }),
                    null === (r = e.getLayer()) ||
                      void 0 === r ||
                      r.batchDraw();
                }),
              (this._movingAnchorName = null);
          }
        }
        _fitNodesInto(t, e) {
          var r = this._getNodeRect();
          if (
            n.Util._inRange(t.width, -(2 * this.padding()) - 1, 1) ||
            n.Util._inRange(t.height, -(2 * this.padding()) - 1, 1)
          ) {
            this.update();
            return;
          }
          var i = new n.Transform();
          if (
            (i.rotate(h.Konva.getAngle(this.rotation())),
            this._movingAnchorName &&
              t.width < 0 &&
              this._movingAnchorName.indexOf("left") >= 0)
          ) {
            let e = i.point({
              x: -(2 * this.padding()),
              y: 0,
            });
            (t.x += e.x),
              (t.y += e.y),
              (t.width += 2 * this.padding()),
              (this._movingAnchorName = this._movingAnchorName.replace(
                "left",
                "right"
              )),
              (this._anchorDragOffset.x -= e.x),
              (this._anchorDragOffset.y -= e.y);
          } else if (
            this._movingAnchorName &&
            t.width < 0 &&
            this._movingAnchorName.indexOf("right") >= 0
          ) {
            let e = i.point({
              x: 2 * this.padding(),
              y: 0,
            });
            (this._movingAnchorName = this._movingAnchorName.replace(
              "right",
              "left"
            )),
              (this._anchorDragOffset.x -= e.x),
              (this._anchorDragOffset.y -= e.y),
              (t.width += 2 * this.padding());
          }
          if (
            this._movingAnchorName &&
            t.height < 0 &&
            this._movingAnchorName.indexOf("top") >= 0
          ) {
            let e = i.point({
              x: 0,
              y: -(2 * this.padding()),
            });
            (t.x += e.x),
              (t.y += e.y),
              (this._movingAnchorName = this._movingAnchorName.replace(
                "top",
                "bottom"
              )),
              (this._anchorDragOffset.x -= e.x),
              (this._anchorDragOffset.y -= e.y),
              (t.height += 2 * this.padding());
          } else if (
            this._movingAnchorName &&
            t.height < 0 &&
            this._movingAnchorName.indexOf("bottom") >= 0
          ) {
            let e = i.point({
              x: 0,
              y: 2 * this.padding(),
            });
            (this._movingAnchorName = this._movingAnchorName.replace(
              "bottom",
              "top"
            )),
              (this._anchorDragOffset.x -= e.x),
              (this._anchorDragOffset.y -= e.y),
              (t.height += 2 * this.padding());
          }
          if (this.boundBoxFunc()) {
            let e = this.boundBoxFunc()(r, t);
            e
              ? (t = e)
              : n.Util.warn(
                  "boundBoxFunc returned falsy. You should return new bound rect from it!"
                );
          }
          let a = new n.Transform();
          a.translate(r.x, r.y),
            a.rotate(r.rotation),
            a.scale(r.width / 1e7, r.height / 1e7);
          let o = new n.Transform(),
            s = t.width / 1e7,
            l = t.height / 1e7;
          !1 === this.flipEnabled()
            ? (o.translate(t.x, t.y),
              o.rotate(t.rotation),
              o.translate(
                t.width < 0 ? t.width : 0,
                t.height < 0 ? t.height : 0
              ),
              o.scale(Math.abs(s), Math.abs(l)))
            : (o.translate(t.x, t.y), o.rotate(t.rotation), o.scale(s, l));
          let u = o.multiply(a.invert());
          this._nodes.forEach((t) => {
            var e;
            let r = t.getParent().getAbsoluteTransform(),
              i = t.getTransform().copy();
            i.translate(t.offsetX(), t.offsetY());
            let a = new n.Transform();
            a.multiply(r.copy().invert()).multiply(u).multiply(r).multiply(i);
            let o = a.decompose();
            t.setAttrs(o),
              null === (e = t.getLayer()) || void 0 === e || e.batchDraw();
          }),
            this.rotation(n.Util._getRotation(t.rotation)),
            this._nodes.forEach((t) => {
              this._fire("transform", {
                evt: e,
                target: t,
              }),
                t._fire("transform", {
                  evt: e,
                  target: t,
                });
            }),
            this._resetTransformCache(),
            this.update(),
            this.getLayer().batchDraw();
        }
        forceUpdate() {
          this._resetTransformCache(), this.update();
        }
        _batchChangeChild(t, e) {
          this.findOne(t).setAttrs(e);
        }
        update() {
          var t,
            e = this._getNodeRect();
          this.rotation(n.Util._getRotation(e.rotation));
          var r = e.width,
            i = e.height,
            a = this.enabledAnchors(),
            o = this.resizeEnabled(),
            s = this.padding(),
            l = this.anchorSize();
          let h = this.find("._anchor");
          h.forEach((t) => {
            t.setAttrs({
              width: l,
              height: l,
              offsetX: l / 2,
              offsetY: l / 2,
              stroke: this.anchorStroke(),
              strokeWidth: this.anchorStrokeWidth(),
              fill: this.anchorFill(),
              cornerRadius: this.anchorCornerRadius(),
            });
          }),
            this._batchChangeChild(".top-left", {
              x: 0,
              y: 0,
              offsetX: l / 2 + s,
              offsetY: l / 2 + s,
              visible: o && a.indexOf("top-left") >= 0,
            }),
            this._batchChangeChild(".top-center", {
              x: r / 2,
              y: 0,
              offsetY: l / 2 + s,
              visible: o && a.indexOf("top-center") >= 0,
            }),
            this._batchChangeChild(".top-right", {
              x: r,
              y: 0,
              offsetX: l / 2 - s,
              offsetY: l / 2 + s,
              visible: o && a.indexOf("top-right") >= 0,
            }),
            this._batchChangeChild(".middle-left", {
              x: 0,
              y: i / 2,
              offsetX: l / 2 + s,
              visible: o && a.indexOf("middle-left") >= 0,
            }),
            this._batchChangeChild(".middle-right", {
              x: r,
              y: i / 2,
              offsetX: l / 2 - s,
              visible: o && a.indexOf("middle-right") >= 0,
            }),
            this._batchChangeChild(".bottom-left", {
              x: 0,
              y: i,
              offsetX: l / 2 + s,
              offsetY: l / 2 - s,
              visible: o && a.indexOf("bottom-left") >= 0,
            }),
            this._batchChangeChild(".bottom-center", {
              x: r / 2,
              y: i,
              offsetY: l / 2 - s,
              visible: o && a.indexOf("bottom-center") >= 0,
            }),
            this._batchChangeChild(".bottom-right", {
              x: r,
              y: i,
              offsetX: l / 2 - s,
              offsetY: l / 2 - s,
              visible: o && a.indexOf("bottom-right") >= 0,
            }),
            this._batchChangeChild(".rotater", {
              x: r / 2,
              y: -this.rotateAnchorOffset() * n.Util._sign(i) - s,
              visible: this.rotateEnabled(),
            }),
            this._batchChangeChild(".back", {
              width: r,
              height: i,
              visible: this.borderEnabled(),
              stroke: this.borderStroke(),
              strokeWidth: this.borderStrokeWidth(),
              dash: this.borderDash(),
              x: 0,
              y: 0,
            });
          let u = this.anchorStyleFunc();
          u &&
            h.forEach((t) => {
              u(t);
            }),
            null === (t = this.getLayer()) || void 0 === t || t.batchDraw();
        }
        isTransforming() {
          return this._transforming;
        }
        stopTransform() {
          if (this._transforming) {
            this._removeEvents();
            var t = this.findOne("." + this._movingAnchorName);
            t && t.stopDrag();
          }
        }
        destroy() {
          return (
            this.getStage() &&
              this._cursorChange &&
              this.getStage().content &&
              (this.getStage().content.style.cursor = ""),
            l.Group.prototype.destroy.call(this),
            this.detach(),
            this._removeEvents(),
            this
          );
        }
        toObject() {
          return a.Node.prototype.toObject.call(this);
        }
        clone(t) {
          return a.Node.prototype.clone.call(this, t);
        }
        getClientRect() {
          return this.nodes().length > 0
            ? super.getClientRect()
            : {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
              };
        }
      }
      (e.Transformer = S),
        (S.isTransforming = () => _ > 0),
        (S.prototype.className = "Transformer"),
        (0, d._registerNode)(S),
        i.Factory.addGetterSetter(S, "enabledAnchors", y, function (t) {
          return (
            t instanceof Array ||
              n.Util.warn("enabledAnchors value should be an array"),
            t instanceof Array &&
              t.forEach(function (t) {
                -1 === y.indexOf(t) &&
                  n.Util.warn(
                    "Unknown anchor name: " +
                      t +
                      ". Available names are: " +
                      y.join(", ")
                  );
              }),
            t || []
          );
        }),
        i.Factory.addGetterSetter(
          S,
          "flipEnabled",
          !0,
          (0, u.getBooleanValidator)()
        ),
        i.Factory.addGetterSetter(S, "resizeEnabled", !0),
        i.Factory.addGetterSetter(
          S,
          "anchorSize",
          10,
          (0, u.getNumberValidator)()
        ),
        i.Factory.addGetterSetter(S, "rotateEnabled", !0),
        i.Factory.addGetterSetter(S, "rotateLineVisible", !0),
        i.Factory.addGetterSetter(S, "rotationSnaps", []),
        i.Factory.addGetterSetter(
          S,
          "rotateAnchorOffset",
          50,
          (0, u.getNumberValidator)()
        ),
        i.Factory.addGetterSetter(S, "rotateAnchorCursor", "crosshair"),
        i.Factory.addGetterSetter(
          S,
          "rotationSnapTolerance",
          5,
          (0, u.getNumberValidator)()
        ),
        i.Factory.addGetterSetter(S, "borderEnabled", !0),
        i.Factory.addGetterSetter(S, "anchorStroke", "rgb(0, 161, 255)"),
        i.Factory.addGetterSetter(
          S,
          "anchorStrokeWidth",
          1,
          (0, u.getNumberValidator)()
        ),
        i.Factory.addGetterSetter(S, "anchorFill", "white"),
        i.Factory.addGetterSetter(
          S,
          "anchorCornerRadius",
          0,
          (0, u.getNumberValidator)()
        ),
        i.Factory.addGetterSetter(S, "borderStroke", "rgb(0, 161, 255)"),
        i.Factory.addGetterSetter(
          S,
          "borderStrokeWidth",
          1,
          (0, u.getNumberValidator)()
        ),
        i.Factory.addGetterSetter(S, "borderDash"),
        i.Factory.addGetterSetter(S, "keepRatio", !0),
        i.Factory.addGetterSetter(S, "shiftBehavior", "default"),
        i.Factory.addGetterSetter(S, "centeredScaling", !1),
        i.Factory.addGetterSetter(S, "ignoreStroke", !1),
        i.Factory.addGetterSetter(S, "padding", 0, (0, u.getNumberValidator)()),
        i.Factory.addGetterSetter(S, "node"),
        i.Factory.addGetterSetter(S, "nodes"),
        i.Factory.addGetterSetter(S, "boundBoxFunc"),
        i.Factory.addGetterSetter(S, "anchorDragBoundFunc"),
        i.Factory.addGetterSetter(S, "anchorStyleFunc"),
        i.Factory.addGetterSetter(S, "shouldOverdrawWholeArea", !1),
        i.Factory.addGetterSetter(S, "useSingleNodeRotation", !0),
        i.Factory.backCompat(S, {
          lineEnabled: "borderEnabled",
          rotateHandlerOffset: "rotateAnchorOffset",
          enabledHandlers: "enabledAnchors",
        });
    },
    1020: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Wedge = void 0);
      let n = r(1027),
        i = r(7439),
        a = r(9649),
        o = r(7367),
        s = r(9649);
      class l extends i.Shape {
        _sceneFunc(t) {
          t.beginPath(),
            t.arc(
              0,
              0,
              this.radius(),
              0,
              a.Konva.getAngle(this.angle()),
              this.clockwise()
            ),
            t.lineTo(0, 0),
            t.closePath(),
            t.fillStrokeShape(this);
        }
        getWidth() {
          return 2 * this.radius();
        }
        getHeight() {
          return 2 * this.radius();
        }
        setWidth(t) {
          this.radius(t / 2);
        }
        setHeight(t) {
          this.radius(t / 2);
        }
      }
      (e.Wedge = l),
        (l.prototype.className = "Wedge"),
        (l.prototype._centroid = !0),
        (l.prototype._attrsAffectingSize = ["radius"]),
        (0, s._registerNode)(l),
        n.Factory.addGetterSetter(l, "radius", 0, (0, o.getNumberValidator)()),
        n.Factory.addGetterSetter(l, "angle", 0, (0, o.getNumberValidator)()),
        n.Factory.addGetterSetter(l, "clockwise", !1),
        n.Factory.backCompat(l, {
          angleDeg: "angle",
          getAngleDeg: "getAngle",
          setAngleDeg: "setAngle",
        });
    },
    2466: function (t, e, r) {
      "use strict";
      r.d(e, {
        Ee: function () {
          return tx;
        },
        mh: function () {
          return tS;
        },
        Hf: function () {
          return tk;
        },
        $T: function () {
          return tw;
        },
      });
      var n,
        i,
        a = {};
      r.r(a),
        r.d(a, {
          appendChild: function () {
            return W;
          },
          appendChildToContainer: function () {
            return K;
          },
          appendInitialChild: function () {
            return k;
          },
          cancelTimeout: function () {
            return z;
          },
          clearContainer: function () {
            return ti;
          },
          commitMount: function () {
            return J;
          },
          commitTextUpdate: function () {
            return $;
          },
          commitUpdate: function () {
            return Z;
          },
          createInstance: function () {
            return P;
          },
          createTextInstance: function () {
            return T;
          },
          detachDeletedInstance: function () {
            return ta;
          },
          finalizeInitialChildren: function () {
            return E;
          },
          getChildHostContext: function () {
            return G;
          },
          getCurrentEventPriority: function () {
            return to;
          },
          getPublicInstance: function () {
            return F;
          },
          getRootHostContext: function () {
            return I;
          },
          hideInstance: function () {
            return tt;
          },
          hideTextInstance: function () {
            return te;
          },
          idlePriority: function () {
            return x.unstable_IdlePriority;
          },
          insertBefore: function () {
            return Y;
          },
          insertInContainerBefore: function () {
            return q;
          },
          isPrimaryRenderer: function () {
            return H;
          },
          noTimeout: function () {
            return U;
          },
          now: function () {
            return x.unstable_now;
          },
          prepareForCommit: function () {
            return M;
          },
          preparePortalMount: function () {
            return N;
          },
          prepareUpdate: function () {
            return A;
          },
          removeChild: function () {
            return X;
          },
          removeChildFromContainer: function () {
            return Q;
          },
          resetAfterCommit: function () {
            return R;
          },
          resetTextContent: function () {
            return D;
          },
          run: function () {
            return x.unstable_runWithPriority;
          },
          scheduleTimeout: function () {
            return O;
          },
          shouldDeprioritizeSubtree: function () {
            return L;
          },
          shouldSetTextContent: function () {
            return B;
          },
          supportsMutation: function () {
            return j;
          },
          unhideInstance: function () {
            return tr;
          },
          unhideTextInstance: function () {
            return tn;
          },
          warnsIfNotActing: function () {
            return V;
          },
        }),
        r(1235);
      var o = r(2265),
        s = r(6301),
        l = r.n(s),
        h = r(1543),
        u = r.n(h),
        d = r(2777),
        c = r(9649);
      let f = {
          children: !0,
          ref: !0,
          key: !0,
          style: !0,
          forwardedRef: !0,
          unstable_applyCache: !0,
          unstable_applyDrawHitFromCache: !0,
        },
        g = !1,
        p = !1,
        v = ".react-konva-event",
        m = `ReactKonva: You have a Konva node with draggable = true and position defined but no onDragMove or onDragEnd events are handled.
Position of a node will be changed during drag&drop, so you should update state of the react app as well.
Consider to add onDragMove or onDragEnd events.
For more info see: https://github.com/konvajs/react-konva/issues/256
`,
        y = `ReactKonva: You are using "zIndex" attribute for a Konva node.
react-konva may get confused with ordering. Just define correct order of elements in your render function of a component.
For more info see: https://github.com/konvajs/react-konva/issues/194
`,
        b = {};
      function _(t, e, r = b) {
        if (
          (!g && "zIndex" in e && (console.warn(y), (g = !0)),
          !p && e.draggable)
        ) {
          var n = void 0 !== e.x || void 0 !== e.y,
            i = e.onDragEnd || e.onDragMove;
          n && !i && (console.warn(m), (p = !0));
        }
        for (var a in r)
          if (!f[a]) {
            var o = "on" === a.slice(0, 2),
              s = r[a] !== e[a];
            if (o && s) {
              var l = a.substr(2).toLowerCase();
              "content" === l.substr(0, 7) &&
                (l = "content" + l.substr(7, 1).toUpperCase() + l.substr(8)),
                t.off(l, r[a]);
            }
            e.hasOwnProperty(a) || t.setAttr(a, void 0);
          }
        var h = e._useStrictMode,
          u = {},
          d = !1;
        let c = {};
        for (var a in e)
          if (!f[a]) {
            var o = "on" === a.slice(0, 2),
              _ = r[a] !== e[a];
            if (o && _) {
              var l = a.substr(2).toLowerCase();
              "content" === l.substr(0, 7) &&
                (l = "content" + l.substr(7, 1).toUpperCase() + l.substr(8)),
                e[a] && (c[l] = e[a]);
            }
            !o &&
              (e[a] !== r[a] || (h && e[a] !== t.getAttr(a))) &&
              ((d = !0), (u[a] = e[a]));
          }
        for (var l in (d && (t.setAttrs(u), S(t)), c)) t.on(l + v, c[l]);
      }
      function S(t) {
        if (!c.Konva.autoDrawEnabled) {
          var e = t.getLayer() || t.getStage();
          e && e.batchDraw();
        }
      }
      var x = r(7494);
      let w = {},
        C = {};
      function k(t, e) {
        if ("string" == typeof e) {
          console.error(
            `Do not use plain text as child of Konva.Node. You are using text: ${e}`
          );
          return;
        }
        t.add(e), S(t);
      }
      function P(t, e, r) {
        let n = l()[t];
        n ||
          (console.error(
            `Konva has no node with the type ${t}. Group will be used instead. If you use minimal version of react-konva, just import required nodes into Konva: "import "konva/lib/shapes/${t}"  If you want to render DOM elements as part of canvas tree take a look into this demo: https://konvajs.github.io/docs/react/DOM_Portal.html`
          ),
          (n = l().Group));
        let i = {},
          a = {};
        for (var o in e) "on" === o.slice(0, 2) ? (a[o] = e[o]) : (i[o] = e[o]);
        let s = new n(i);
        return _(s, a), s;
      }
      function T(t, e, r) {
        console.error(
          `Text components are not supported for now in ReactKonva. Your text is: "${t}"`
        );
      }
      function E(t, e, r) {
        return !1;
      }
      function F(t) {
        return t;
      }
      function M() {
        return null;
      }
      function N() {
        return null;
      }
      function A(t, e, r, n) {
        return C;
      }
      function R() {}
      function D(t) {}
      function L(t, e) {
        return !1;
      }
      function I() {
        return w;
      }
      function G() {
        return w;
      }
      l().Node.prototype._applyProps = _;
      let O = setTimeout,
        z = clearTimeout,
        U = -1;
      function B(t, e) {
        return !1;
      }
      let H = !1,
        V = !0,
        j = !0;
      function W(t, e) {
        e.parent === t ? e.moveToTop() : t.add(e), S(t);
      }
      function K(t, e) {
        e.parent === t ? e.moveToTop() : t.add(e), S(t);
      }
      function Y(t, e, r) {
        e._remove(), t.add(e), e.setZIndex(r.getZIndex()), S(t);
      }
      function q(t, e, r) {
        Y(t, e, r);
      }
      function X(t, e) {
        e.destroy(), e.off(v), S(t);
      }
      function Q(t, e) {
        e.destroy(), e.off(v), S(t);
      }
      function $(t, e, r) {
        console.error(
          `Text components are not yet supported in ReactKonva. You text is: "${r}"`
        );
      }
      function J(t, e, r) {}
      function Z(t, e, r, n, i) {
        _(t, i, n);
      }
      function tt(t) {
        t.hide(), S(t);
      }
      function te(t) {}
      function tr(t, e) {
        (null == e.visible || e.visible) && t.show();
      }
      function tn(t, e) {}
      function ti(t) {}
      function ta() {}
      let to = () => d.DefaultEventPriority;
      var ts = Object.defineProperty,
        tl = Object.defineProperties,
        th = Object.getOwnPropertyDescriptors,
        tu = Object.getOwnPropertySymbols,
        td = Object.prototype.hasOwnProperty,
        tc = Object.prototype.propertyIsEnumerable,
        tf = (t, e, r) =>
          e in t
            ? ts(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        tg = (t, e) => {
          for (var r in e || (e = {})) td.call(e, r) && tf(t, r, e[r]);
          if (tu) for (var r of tu(e)) tc.call(e, r) && tf(t, r, e[r]);
          return t;
        },
        tp = (t, e) => tl(t, th(e));
      function tv(t) {
        try {
          return Object.defineProperties(t, {
            _currentRenderer: {
              get: () => null,
              set() {},
            },
            _currentRenderer2: {
              get: () => null,
              set() {},
            },
          });
        } catch (e) {
          return t;
        }
      }
      "undefined" != typeof window &&
      ((null == (n = window.document) ? void 0 : n.createElement) ||
        (null == (i = window.navigator) ? void 0 : i.product) === "ReactNative")
        ? o.useLayoutEffect
        : o.useEffect;
      let tm = console.error;
      console.error = function () {
        let t = [...arguments].join("");
        if (
          (null == t ? void 0 : t.startsWith("Warning:")) &&
          t.includes("useContext")
        ) {
          console.error = tm;
          return;
        }
        return tm.apply(this, arguments);
      };
      let ty = tv(o.createContext(null));
      class tb extends o.Component {
        render() {
          return o.createElement(
            ty.Provider,
            {
              value: this._reactInternals,
            },
            this.props.children
          );
        }
      }
      let t_ = (t) => {
          let e = o.useRef(),
            r = o.useRef(),
            n = o.useRef(),
            i = (function (t) {
              let e = o.useRef({});
              return (
                o.useLayoutEffect(() => {
                  e.current = t;
                }),
                o.useLayoutEffect(
                  () => () => {
                    e.current = {};
                  },
                  []
                ),
                e.current
              );
            })(t),
            a = (function () {
              let t = (function () {
                let t = (function () {
                    let t = o.useContext(ty);
                    if (null === t)
                      throw Error(
                        "its-fine: useFiber must be called within a <FiberProvider />!"
                      );
                    let e = o.useId();
                    return o.useMemo(() => {
                      for (let r of [t, null == t ? void 0 : t.alternate]) {
                        if (!r) continue;
                        let t = (function t(e, r, n) {
                          if (!e) return;
                          if (!0 === n(e)) return e;
                          let i = r ? e.return : e.child;
                          for (; i; ) {
                            let e = t(i, r, n);
                            if (e) return e;
                            i = r ? null : i.sibling;
                          }
                        })(r, !1, (t) => {
                          let r = t.memoizedState;
                          for (; r; ) {
                            if (r.memoizedState === e) return !0;
                            r = r.next;
                          }
                        });
                        if (t) return t;
                      }
                    }, [t, e]);
                  })(),
                  [e] = o.useState(() => new Map());
                e.clear();
                let r = t;
                for (; r; ) {
                  if (r.type && "object" == typeof r.type) {
                    let t =
                      void 0 === r.type._context && r.type.Provider === r.type
                        ? r.type
                        : r.type._context;
                    t && t !== ty && !e.has(t) && e.set(t, o.useContext(tv(t)));
                  }
                  r = r.return;
                }
                return e;
              })();
              return o.useMemo(
                () =>
                  Array.from(t.keys()).reduce(
                    (e, r) => (n) =>
                      o.createElement(
                        e,
                        null,
                        o.createElement(
                          r.Provider,
                          tp(tg({}, n), {
                            value: t.get(r),
                          })
                        )
                      ),
                    (t) => o.createElement(tb, tg({}, t))
                  ),
                [t]
              );
            })(),
            s = (e) => {
              let { forwardedRef: r } = t;
              r && ("function" == typeof r ? r(e) : (r.current = e));
            };
          return (
            o.useLayoutEffect(
              () => (
                (r.current = new (l().Stage)({
                  width: t.width,
                  height: t.height,
                  container: e.current,
                })),
                s(r.current),
                (n.current = tC.createContainer(
                  r.current,
                  d.LegacyRoot,
                  !1,
                  null
                )),
                tC.updateContainer(
                  o.createElement(a, {}, t.children),
                  n.current
                ),
                () => {
                  l().isBrowser &&
                    (s(null),
                    tC.updateContainer(null, n.current, null),
                    r.current.destroy());
                }
              ),
              []
            ),
            o.useLayoutEffect(() => {
              s(r.current),
                _(r.current, t, i),
                tC.updateContainer(
                  o.createElement(a, {}, t.children),
                  n.current,
                  null
                );
            }),
            o.createElement("div", {
              ref: e,
              id: t.id,
              accessKey: t.accessKey,
              className: t.className,
              role: t.role,
              style: t.style,
              tabIndex: t.tabIndex,
              title: t.title,
            })
          );
        },
        tS = "Layer",
        tx = "Image",
        tw = "Transformer",
        tC = u()(a);
      tC.injectIntoDevTools({
        findHostInstanceByFiber: () => null,
        bundleType: 0,
        version: o.version,
        rendererPackageName: "react-konva",
      });
      let tk = o.forwardRef((t, e) =>
        o.createElement(
          tb,
          {},
          o.createElement(t_, {
            ...t,
            forwardedRef: e,
          })
        )
      );
    },
    4008: function (t, e) {
      "use strict";
      (e.DefaultEventPriority = 16), (e.LegacyRoot = 0);
    },
    4185: function (t, e, r) {
      /**
       * @license React
       * react-reconciler.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      t.exports = function (t) {
        "use strict";
        var e,
          n,
          i,
          a,
          o,
          s = {},
          l = r(2265),
          h = r(7494),
          u = Object.assign;
        function d(t) {
          for (
            var e =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + t,
              r = 1;
            r < arguments.length;
            r++
          )
            e += "&args[]=" + encodeURIComponent(arguments[r]);
          return (
            "Minified React error #" +
            t +
            "; visit " +
            e +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var c = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          f = Symbol.for("react.element"),
          g = Symbol.for("react.portal"),
          p = Symbol.for("react.fragment"),
          v = Symbol.for("react.strict_mode"),
          m = Symbol.for("react.profiler"),
          y = Symbol.for("react.provider"),
          b = Symbol.for("react.context"),
          _ = Symbol.for("react.forward_ref"),
          S = Symbol.for("react.suspense"),
          x = Symbol.for("react.suspense_list"),
          w = Symbol.for("react.memo"),
          C = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var k = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var P = Symbol.iterator;
        function T(t) {
          return null === t || "object" != typeof t
            ? null
            : "function" == typeof (t = (P && t[P]) || t["@@iterator"])
            ? t
            : null;
        }
        function E(t) {
          if (null == t) return null;
          if ("function" == typeof t) return t.displayName || t.name || null;
          if ("string" == typeof t) return t;
          switch (t) {
            case p:
              return "Fragment";
            case g:
              return "Portal";
            case m:
              return "Profiler";
            case v:
              return "StrictMode";
            case S:
              return "Suspense";
            case x:
              return "SuspenseList";
          }
          if ("object" == typeof t)
            switch (t.$$typeof) {
              case b:
                return (t.displayName || "Context") + ".Consumer";
              case y:
                return (t._context.displayName || "Context") + ".Provider";
              case _:
                var e = t.render;
                return (
                  (t = t.displayName) ||
                    (t =
                      "" !== (t = e.displayName || e.name || "")
                        ? "ForwardRef(" + t + ")"
                        : "ForwardRef"),
                  t
                );
              case w:
                return null !== (e = t.displayName || null)
                  ? e
                  : E(t.type) || "Memo";
              case C:
                (e = t._payload), (t = t._init);
                try {
                  return E(t(e));
                } catch (t) {}
            }
          return null;
        }
        function F(t) {
          var e = t,
            r = t;
          if (t.alternate) for (; e.return; ) e = e.return;
          else {
            t = e;
            do 0 != (4098 & (e = t).flags) && (r = e.return), (t = e.return);
            while (t);
          }
          return 3 === e.tag ? r : null;
        }
        function M(t) {
          if (F(t) !== t) throw Error(d(188));
        }
        function N(t) {
          var e = t.alternate;
          if (!e) {
            if (null === (e = F(t))) throw Error(d(188));
            return e !== t ? null : t;
          }
          for (var r = t, n = e; ; ) {
            var i = r.return;
            if (null === i) break;
            var a = i.alternate;
            if (null === a) {
              if (null !== (n = i.return)) {
                r = n;
                continue;
              }
              break;
            }
            if (i.child === a.child) {
              for (a = i.child; a; ) {
                if (a === r) return M(i), t;
                if (a === n) return M(i), e;
                a = a.sibling;
              }
              throw Error(d(188));
            }
            if (r.return !== n.return) (r = i), (n = a);
            else {
              for (var o = !1, s = i.child; s; ) {
                if (s === r) {
                  (o = !0), (r = i), (n = a);
                  break;
                }
                if (s === n) {
                  (o = !0), (n = i), (r = a);
                  break;
                }
                s = s.sibling;
              }
              if (!o) {
                for (s = a.child; s; ) {
                  if (s === r) {
                    (o = !0), (r = a), (n = i);
                    break;
                  }
                  if (s === n) {
                    (o = !0), (n = a), (r = i);
                    break;
                  }
                  s = s.sibling;
                }
                if (!o) throw Error(d(189));
              }
            }
            if (r.alternate !== n) throw Error(d(190));
          }
          if (3 !== r.tag) throw Error(d(188));
          return r.stateNode.current === r ? t : e;
        }
        function A(t) {
          return null !== (t = N(t))
            ? (function t(e) {
                if (5 === e.tag || 6 === e.tag) return e;
                for (e = e.child; null !== e; ) {
                  var r = t(e);
                  if (null !== r) return r;
                  e = e.sibling;
                }
                return null;
              })(t)
            : null;
        }
        var R,
          D = Array.isArray,
          L = t.getPublicInstance,
          I = t.getRootHostContext,
          G = t.getChildHostContext,
          O = t.prepareForCommit,
          z = t.resetAfterCommit,
          U = t.createInstance,
          B = t.appendInitialChild,
          H = t.finalizeInitialChildren,
          V = t.prepareUpdate,
          j = t.shouldSetTextContent,
          W = t.createTextInstance,
          K = t.scheduleTimeout,
          Y = t.cancelTimeout,
          q = t.noTimeout,
          X = t.isPrimaryRenderer,
          Q = t.supportsMutation,
          $ = t.supportsPersistence,
          J = t.supportsHydration,
          Z = t.getInstanceFromNode,
          tt = t.preparePortalMount,
          te = t.getCurrentEventPriority,
          tr = t.detachDeletedInstance,
          tn = t.supportsMicrotasks,
          ti = t.scheduleMicrotask,
          ta = t.supportsTestSelectors,
          to = t.findFiberRoot,
          ts = t.getBoundingRect,
          tl = t.getTextContent,
          th = t.isHiddenSubtree,
          tu = t.matchAccessibilityRole,
          td = t.setFocusIfFocusable,
          tc = t.setupIntersectionObserver,
          tf = t.appendChild,
          tg = t.appendChildToContainer,
          tp = t.commitTextUpdate,
          tv = t.commitMount,
          tm = t.commitUpdate,
          ty = t.insertBefore,
          tb = t.insertInContainerBefore,
          t_ = t.removeChild,
          tS = t.removeChildFromContainer,
          tx = t.resetTextContent,
          tw = t.hideInstance,
          tC = t.hideTextInstance,
          tk = t.unhideInstance,
          tP = t.unhideTextInstance,
          tT = t.clearContainer,
          tE = t.cloneInstance,
          tF = t.createContainerChildSet,
          tM = t.appendChildToContainerChildSet,
          tN = t.finalizeContainerChildren,
          tA = t.replaceContainerChildren,
          tR = t.cloneHiddenInstance,
          tD = t.cloneHiddenTextInstance,
          tL = t.canHydrateInstance,
          tI = t.canHydrateTextInstance,
          tG = t.canHydrateSuspenseInstance,
          tO = t.isSuspenseInstancePending,
          tz = t.isSuspenseInstanceFallback,
          tU = t.getSuspenseInstanceFallbackErrorDetails,
          tB = t.registerSuspenseInstanceRetry,
          tH = t.getNextHydratableSibling,
          tV = t.getFirstHydratableChild,
          tj = t.getFirstHydratableChildWithinContainer,
          tW = t.getFirstHydratableChildWithinSuspenseInstance,
          tK = t.hydrateInstance,
          tY = t.hydrateTextInstance,
          tq = t.hydrateSuspenseInstance,
          tX = t.getNextHydratableInstanceAfterSuspenseInstance,
          tQ = t.commitHydratedContainer,
          t$ = t.commitHydratedSuspenseInstance,
          tJ = t.clearSuspenseBoundary,
          tZ = t.clearSuspenseBoundaryFromContainer,
          t0 = t.shouldDeleteUnhydratedTailInstances,
          t1 = t.didNotMatchHydratedContainerTextInstance,
          t2 = t.didNotMatchHydratedTextInstance;
        function t4(t) {
          if (void 0 === R)
            try {
              throw Error();
            } catch (t) {
              var e = t.stack.trim().match(/\n( *(at )?)/);
              R = (e && e[1]) || "";
            }
          return "\n" + R + t;
        }
        var t5 = !1;
        function t3(t, e) {
          if (!t || t5) return "";
          t5 = !0;
          var r = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (e) {
              if (
                ((e = function () {
                  throw Error();
                }),
                Object.defineProperty(e.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(e, []);
                } catch (t) {
                  var n = t;
                }
                Reflect.construct(t, [], e);
              } else {
                try {
                  e.call();
                } catch (t) {
                  n = t;
                }
                t.call(e.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (t) {
                n = t;
              }
              t();
            }
          } catch (e) {
            if (e && n && "string" == typeof e.stack) {
              for (
                var i = e.stack.split("\n"),
                  a = n.stack.split("\n"),
                  o = i.length - 1,
                  s = a.length - 1;
                1 <= o && 0 <= s && i[o] !== a[s];

              )
                s--;
              for (; 1 <= o && 0 <= s; o--, s--)
                if (i[o] !== a[s]) {
                  if (1 !== o || 1 !== s)
                    do
                      if ((o--, 0 > --s || i[o] !== a[s])) {
                        var l = "\n" + i[o].replace(" at new ", " at ");
                        return (
                          t.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", t.displayName)),
                          l
                        );
                      }
                    while (1 <= o && 0 <= s);
                  break;
                }
            }
          } finally {
            (t5 = !1), (Error.prepareStackTrace = r);
          }
          return (t = t ? t.displayName || t.name : "") ? t4(t) : "";
        }
        var t6 = Object.prototype.hasOwnProperty,
          t8 = [],
          t7 = -1;
        function t9(t) {
          return {
            current: t,
          };
        }
        function et(t) {
          0 > t7 || ((t.current = t8[t7]), (t8[t7] = null), t7--);
        }
        function ee(t, e) {
          (t8[++t7] = t.current), (t.current = e);
        }
        var er = {},
          en = t9(er),
          ei = t9(!1),
          ea = er;
        function eo(t, e) {
          var r = t.type.contextTypes;
          if (!r) return er;
          var n = t.stateNode;
          if (n && n.__reactInternalMemoizedUnmaskedChildContext === e)
            return n.__reactInternalMemoizedMaskedChildContext;
          var i,
            a = {};
          for (i in r) a[i] = e[i];
          return (
            n &&
              (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                e),
              (t.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function es(t) {
          return null != (t = t.childContextTypes);
        }
        function el() {
          et(ei), et(en);
        }
        function eh(t, e, r) {
          if (en.current !== er) throw Error(d(168));
          ee(en, e), ee(ei, r);
        }
        function eu(t, e, r) {
          var n = t.stateNode;
          if (
            ((e = e.childContextTypes), "function" != typeof n.getChildContext)
          )
            return r;
          for (var i in (n = n.getChildContext()))
            if (!(i in e))
              throw Error(
                d(
                  108,
                  (function (t) {
                    var e = t.type;
                    switch (t.tag) {
                      case 24:
                        return "Cache";
                      case 9:
                        return (e.displayName || "Context") + ".Consumer";
                      case 10:
                        return (
                          (e._context.displayName || "Context") + ".Provider"
                        );
                      case 18:
                        return "DehydratedFragment";
                      case 11:
                        return (
                          (t = (t = e.render).displayName || t.name || ""),
                          e.displayName ||
                            ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                        );
                      case 7:
                        return "Fragment";
                      case 5:
                        return e;
                      case 4:
                        return "Portal";
                      case 3:
                        return "Root";
                      case 6:
                        return "Text";
                      case 16:
                        return E(e);
                      case 8:
                        return e === v ? "StrictMode" : "Mode";
                      case 22:
                        return "Offscreen";
                      case 12:
                        return "Profiler";
                      case 21:
                        return "Scope";
                      case 13:
                        return "Suspense";
                      case 19:
                        return "SuspenseList";
                      case 25:
                        return "TracingMarker";
                      case 1:
                      case 0:
                      case 17:
                      case 2:
                      case 14:
                      case 15:
                        if ("function" == typeof e)
                          return e.displayName || e.name || null;
                        if ("string" == typeof e) return e;
                    }
                    return null;
                  })(t) || "Unknown",
                  i
                )
              );
          return u({}, r, n);
        }
        function ed(t) {
          return (
            (t =
              ((t = t.stateNode) &&
                t.__reactInternalMemoizedMergedChildContext) ||
              er),
            (ea = en.current),
            ee(en, t),
            ee(ei, ei.current),
            !0
          );
        }
        function ec(t, e, r) {
          var n = t.stateNode;
          if (!n) throw Error(d(169));
          r
            ? ((t = eu(t, e, ea)),
              (n.__reactInternalMemoizedMergedChildContext = t),
              et(ei),
              et(en),
              ee(en, t))
            : et(ei),
            ee(ei, r);
        }
        var ef = Math.clz32
            ? Math.clz32
            : function (t) {
                return 0 == (t >>>= 0) ? 32 : (31 - ((eg(t) / ep) | 0)) | 0;
              },
          eg = Math.log,
          ep = Math.LN2,
          ev = 64,
          em = 4194304;
        function ey(t) {
          switch (t & -t) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & t;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & t;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return t;
          }
        }
        function eb(t, e) {
          var r = t.pendingLanes;
          if (0 === r) return 0;
          var n = 0,
            i = t.suspendedLanes,
            a = t.pingedLanes,
            o = 268435455 & r;
          if (0 !== o) {
            var s = o & ~i;
            0 !== s ? (n = ey(s)) : 0 != (a &= o) && (n = ey(a));
          } else 0 != (o = r & ~i) ? (n = ey(o)) : 0 !== a && (n = ey(a));
          if (0 === n) return 0;
          if (
            0 !== e &&
            e !== n &&
            0 == (e & i) &&
            ((i = n & -n) >= (a = e & -e) || (16 === i && 0 != (4194240 & a)))
          )
            return e;
          if ((0 != (4 & n) && (n |= 16 & r), 0 !== (e = t.entangledLanes)))
            for (t = t.entanglements, e &= n; 0 < e; )
              (i = 1 << (r = 31 - ef(e))), (n |= t[r]), (e &= ~i);
          return n;
        }
        function e_(t) {
          return 0 != (t = -1073741825 & t.pendingLanes)
            ? t
            : 1073741824 & t
            ? 1073741824
            : 0;
        }
        function eS() {
          var t = ev;
          return 0 == (4194240 & (ev <<= 1)) && (ev = 64), t;
        }
        function ex(t) {
          for (var e = [], r = 0; 31 > r; r++) e.push(t);
          return e;
        }
        function ew(t, e, r) {
          (t.pendingLanes |= e),
            536870912 !== e && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
            ((t = t.eventTimes)[(e = 31 - ef(e))] = r);
        }
        function eC(t, e) {
          var r = (t.entangledLanes |= e);
          for (t = t.entanglements; r; ) {
            var n = 31 - ef(r),
              i = 1 << n;
            (i & e) | (t[n] & e) && (t[n] |= e), (r &= ~i);
          }
        }
        var ek = 0;
        function eP(t) {
          return 1 < (t &= -t)
            ? 4 < t
              ? 0 != (268435455 & t)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var eT = h.unstable_scheduleCallback,
          eE = h.unstable_cancelCallback,
          eF = h.unstable_shouldYield,
          eM = h.unstable_requestPaint,
          eN = h.unstable_now,
          eA = h.unstable_ImmediatePriority,
          eR = h.unstable_UserBlockingPriority,
          eD = h.unstable_NormalPriority,
          eL = h.unstable_IdlePriority,
          eI = null,
          eG = null,
          eO =
            "function" == typeof Object.is
              ? Object.is
              : function (t, e) {
                  return (
                    (t === e && (0 !== t || 1 / t == 1 / e)) ||
                    (t != t && e != e)
                  );
                },
          ez = null,
          eU = !1,
          eB = !1;
        function eH(t) {
          null === ez ? (ez = [t]) : ez.push(t);
        }
        function eV() {
          if (!eB && null !== ez) {
            eB = !0;
            var t = 0,
              e = ek;
            try {
              var r = ez;
              for (ek = 1; t < r.length; t++) {
                var n = r[t];
                do n = n(!0);
                while (null !== n);
              }
              (ez = null), (eU = !1);
            } catch (e) {
              throw (null !== ez && (ez = ez.slice(t + 1)), eT(eA, eV), e);
            } finally {
              (ek = e), (eB = !1);
            }
          }
          return null;
        }
        var ej = [],
          eW = 0,
          eK = null,
          eY = 0,
          eq = [],
          eX = 0,
          eQ = null,
          e$ = 1,
          eJ = "";
        function eZ(t, e) {
          (ej[eW++] = eY), (ej[eW++] = eK), (eK = t), (eY = e);
        }
        function e0(t, e, r) {
          (eq[eX++] = e$), (eq[eX++] = eJ), (eq[eX++] = eQ), (eQ = t);
          var n = e$;
          t = eJ;
          var i = 32 - ef(n) - 1;
          (n &= ~(1 << i)), (r += 1);
          var a = 32 - ef(e) + i;
          if (30 < a) {
            var o = i - (i % 5);
            (a = (n & ((1 << o) - 1)).toString(32)),
              (n >>= o),
              (i -= o),
              (e$ = (1 << (32 - ef(e) + i)) | (r << i) | n),
              (eJ = a + t);
          } else (e$ = (1 << a) | (r << i) | n), (eJ = t);
        }
        function e1(t) {
          null !== t.return && (eZ(t, 1), e0(t, 1, 0));
        }
        function e2(t) {
          for (; t === eK; )
            (eK = ej[--eW]), (ej[eW] = null), (eY = ej[--eW]), (ej[eW] = null);
          for (; t === eQ; )
            (eQ = eq[--eX]),
              (eq[eX] = null),
              (eJ = eq[--eX]),
              (eq[eX] = null),
              (e$ = eq[--eX]),
              (eq[eX] = null);
        }
        var e4 = null,
          e5 = null,
          e3 = !1,
          e6 = !1,
          e8 = null;
        function e7(t, e) {
          var r = aX(5, null, null, 0);
          (r.elementType = "DELETED"),
            (r.stateNode = e),
            (r.return = t),
            null === (e = t.deletions)
              ? ((t.deletions = [r]), (t.flags |= 16))
              : e.push(r);
        }
        function e9(t, e) {
          switch (t.tag) {
            case 5:
              return (
                null !== (e = tL(e, t.type, t.pendingProps)) &&
                ((t.stateNode = e), (e4 = t), (e5 = tV(e)), !0)
              );
            case 6:
              return (
                null !== (e = tI(e, t.pendingProps)) &&
                ((t.stateNode = e), (e4 = t), (e5 = null), !0)
              );
            case 13:
              if (null !== (e = tG(e))) {
                var r =
                  null !== eQ
                    ? {
                        id: e$,
                        overflow: eJ,
                      }
                    : null;
                return (
                  (t.memoizedState = {
                    dehydrated: e,
                    treeContext: r,
                    retryLane: 1073741824,
                  }),
                  ((r = aX(18, null, null, 0)).stateNode = e),
                  (r.return = t),
                  (t.child = r),
                  (e4 = t),
                  (e5 = null),
                  !0
                );
              }
              return !1;
            default:
              return !1;
          }
        }
        function rt(t) {
          return 0 != (1 & t.mode) && 0 == (128 & t.flags);
        }
        function re(t) {
          if (e3) {
            var e = e5;
            if (e) {
              var r = e;
              if (!e9(t, e)) {
                if (rt(t)) throw Error(d(418));
                e = tH(r);
                var n = e4;
                e && e9(t, e)
                  ? e7(n, r)
                  : ((t.flags = (-4097 & t.flags) | 2), (e3 = !1), (e4 = t));
              }
            } else {
              if (rt(t)) throw Error(d(418));
              (t.flags = (-4097 & t.flags) | 2), (e3 = !1), (e4 = t);
            }
          }
        }
        function rr(t) {
          for (
            t = t.return;
            null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;

          )
            t = t.return;
          e4 = t;
        }
        function rn(t) {
          if (!J || t !== e4) return !1;
          if (!e3) return rr(t), (e3 = !0), !1;
          if (
            3 !== t.tag &&
            (5 !== t.tag || (t0(t.type) && !j(t.type, t.memoizedProps)))
          ) {
            var e = e5;
            if (e) {
              if (rt(t)) throw (ri(), Error(d(418)));
              for (; e; ) e7(t, e), (e = tH(e));
            }
          }
          if ((rr(t), 13 === t.tag)) {
            if (!J) throw Error(d(316));
            if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null))
              throw Error(d(317));
            e5 = tX(t);
          } else e5 = e4 ? tH(t.stateNode) : null;
          return !0;
        }
        function ri() {
          for (var t = e5; t; ) t = tH(t);
        }
        function ra() {
          J && ((e5 = e4 = null), (e6 = e3 = !1));
        }
        function ro(t) {
          null === e8 ? (e8 = [t]) : e8.push(t);
        }
        var rs = c.ReactCurrentBatchConfig;
        function rl(t, e) {
          if (eO(t, e)) return !0;
          if (
            "object" != typeof t ||
            null === t ||
            "object" != typeof e ||
            null === e
          )
            return !1;
          var r = Object.keys(t),
            n = Object.keys(e);
          if (r.length !== n.length) return !1;
          for (n = 0; n < r.length; n++) {
            var i = r[n];
            if (!t6.call(e, i) || !eO(t[i], e[i])) return !1;
          }
          return !0;
        }
        function rh(t, e, r) {
          if (
            null !== (t = r.ref) &&
            "function" != typeof t &&
            "object" != typeof t
          ) {
            if (r._owner) {
              if ((r = r._owner)) {
                if (1 !== r.tag) throw Error(d(309));
                var n = r.stateNode;
              }
              if (!n) throw Error(d(147, t));
              var i = n,
                a = "" + t;
              return null !== e &&
                null !== e.ref &&
                "function" == typeof e.ref &&
                e.ref._stringRef === a
                ? e.ref
                : (((e = function (t) {
                    var e = i.refs;
                    null === t ? delete e[a] : (e[a] = t);
                  })._stringRef = a),
                  e);
            }
            if ("string" != typeof t) throw Error(d(284));
            if (!r._owner) throw Error(d(290, t));
          }
          return t;
        }
        function ru(t, e) {
          throw Error(
            d(
              31,
              "[object Object]" === (t = Object.prototype.toString.call(e))
                ? "object with keys {" + Object.keys(e).join(", ") + "}"
                : t
            )
          );
        }
        function rd(t) {
          return (0, t._init)(t._payload);
        }
        function rc(t) {
          function e(e, r) {
            if (t) {
              var n = e.deletions;
              null === n ? ((e.deletions = [r]), (e.flags |= 16)) : n.push(r);
            }
          }
          function r(r, n) {
            if (!t) return null;
            for (; null !== n; ) e(r, n), (n = n.sibling);
            return null;
          }
          function n(t, e) {
            for (t = new Map(); null !== e; )
              null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                (e = e.sibling);
            return t;
          }
          function i(t, e) {
            return ((t = a$(t, e)).index = 0), (t.sibling = null), t;
          }
          function a(e, r, n) {
            return ((e.index = n), t)
              ? null !== (n = e.alternate)
                ? (n = n.index) < r
                  ? ((e.flags |= 2), r)
                  : n
                : ((e.flags |= 2), r)
              : ((e.flags |= 1048576), r);
          }
          function o(e) {
            return t && null === e.alternate && (e.flags |= 2), e;
          }
          function s(t, e, r, n) {
            return (
              null === e || 6 !== e.tag
                ? ((e = a1(r, t.mode, n)).return = t)
                : ((e = i(e, r)).return = t),
              e
            );
          }
          function l(t, e, r, n) {
            var a = r.type;
            return a === p
              ? u(t, e, r.props.children, n, r.key)
              : (null !== e &&
                (e.elementType === a ||
                  ("object" == typeof a &&
                    null !== a &&
                    a.$$typeof === C &&
                    rd(a) === e.type))
                  ? ((n = i(e, r.props)).ref = rh(t, e, r))
                  : ((n = aJ(r.type, r.key, r.props, null, t.mode, n)).ref = rh(
                      t,
                      e,
                      r
                    )),
                (n.return = t),
                n);
          }
          function h(t, e, r, n) {
            return (
              null === e ||
              4 !== e.tag ||
              e.stateNode.containerInfo !== r.containerInfo ||
              e.stateNode.implementation !== r.implementation
                ? ((e = a2(r, t.mode, n)).return = t)
                : ((e = i(e, r.children || [])).return = t),
              e
            );
          }
          function u(t, e, r, n, a) {
            return (
              null === e || 7 !== e.tag
                ? ((e = aZ(r, t.mode, n, a)).return = t)
                : ((e = i(e, r)).return = t),
              e
            );
          }
          function c(t, e, r) {
            if (("string" == typeof e && "" !== e) || "number" == typeof e)
              return ((e = a1("" + e, t.mode, r)).return = t), e;
            if ("object" == typeof e && null !== e) {
              switch (e.$$typeof) {
                case f:
                  return (
                    ((r = aJ(e.type, e.key, e.props, null, t.mode, r)).ref = rh(
                      t,
                      null,
                      e
                    )),
                    (r.return = t),
                    r
                  );
                case g:
                  return ((e = a2(e, t.mode, r)).return = t), e;
                case C:
                  return c(t, (0, e._init)(e._payload), r);
              }
              if (D(e) || T(e))
                return ((e = aZ(e, t.mode, r, null)).return = t), e;
              ru(t, e);
            }
            return null;
          }
          function v(t, e, r, n) {
            var i = null !== e ? e.key : null;
            if (("string" == typeof r && "" !== r) || "number" == typeof r)
              return null !== i ? null : s(t, e, "" + r, n);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case f:
                  return r.key === i ? l(t, e, r, n) : null;
                case g:
                  return r.key === i ? h(t, e, r, n) : null;
                case C:
                  return v(t, e, (i = r._init)(r._payload), n);
              }
              if (D(r) || T(r)) return null !== i ? null : u(t, e, r, n, null);
              ru(t, r);
            }
            return null;
          }
          function m(t, e, r, n, i) {
            if (("string" == typeof n && "" !== n) || "number" == typeof n)
              return s(e, (t = t.get(r) || null), "" + n, i);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case f:
                  return l(
                    e,
                    (t = t.get(null === n.key ? r : n.key) || null),
                    n,
                    i
                  );
                case g:
                  return h(
                    e,
                    (t = t.get(null === n.key ? r : n.key) || null),
                    n,
                    i
                  );
                case C:
                  return m(t, e, r, (0, n._init)(n._payload), i);
              }
              if (D(n) || T(n)) return u(e, (t = t.get(r) || null), n, i, null);
              ru(e, n);
            }
            return null;
          }
          return function s(l, h, u, y) {
            if (
              ("object" == typeof u &&
                null !== u &&
                u.type === p &&
                null === u.key &&
                (u = u.props.children),
              "object" == typeof u && null !== u)
            ) {
              switch (u.$$typeof) {
                case f:
                  t: {
                    for (var b = u.key, _ = h; null !== _; ) {
                      if (_.key === b) {
                        if ((b = u.type) === p) {
                          if (7 === _.tag) {
                            r(l, _.sibling),
                              ((h = i(_, u.props.children)).return = l),
                              (l = h);
                            break t;
                          }
                        } else if (
                          _.elementType === b ||
                          ("object" == typeof b &&
                            null !== b &&
                            b.$$typeof === C &&
                            rd(b) === _.type)
                        ) {
                          r(l, _.sibling),
                            ((h = i(_, u.props)).ref = rh(l, _, u)),
                            (h.return = l),
                            (l = h);
                          break t;
                        }
                        r(l, _);
                        break;
                      }
                      e(l, _), (_ = _.sibling);
                    }
                    u.type === p
                      ? (((h = aZ(u.props.children, l.mode, y, u.key)).return =
                          l),
                        (l = h))
                      : (((y = aJ(
                          u.type,
                          u.key,
                          u.props,
                          null,
                          l.mode,
                          y
                        )).ref = rh(l, h, u)),
                        (y.return = l),
                        (l = y));
                  }
                  return o(l);
                case g:
                  t: {
                    for (_ = u.key; null !== h; ) {
                      if (h.key === _) {
                        if (
                          4 === h.tag &&
                          h.stateNode.containerInfo === u.containerInfo &&
                          h.stateNode.implementation === u.implementation
                        ) {
                          r(l, h.sibling),
                            ((h = i(h, u.children || [])).return = l),
                            (l = h);
                          break t;
                        }
                        r(l, h);
                        break;
                      }
                      e(l, h), (h = h.sibling);
                    }
                    ((h = a2(u, l.mode, y)).return = l), (l = h);
                  }
                  return o(l);
                case C:
                  return s(l, h, (_ = u._init)(u._payload), y);
              }
              if (D(u))
                return (function (i, o, s, l) {
                  for (
                    var h = null, u = null, d = o, f = (o = 0), g = null;
                    null !== d && f < s.length;
                    f++
                  ) {
                    d.index > f ? ((g = d), (d = null)) : (g = d.sibling);
                    var p = v(i, d, s[f], l);
                    if (null === p) {
                      null === d && (d = g);
                      break;
                    }
                    t && d && null === p.alternate && e(i, d),
                      (o = a(p, o, f)),
                      null === u ? (h = p) : (u.sibling = p),
                      (u = p),
                      (d = g);
                  }
                  if (f === s.length) return r(i, d), e3 && eZ(i, f), h;
                  if (null === d) {
                    for (; f < s.length; f++)
                      null !== (d = c(i, s[f], l)) &&
                        ((o = a(d, o, f)),
                        null === u ? (h = d) : (u.sibling = d),
                        (u = d));
                    return e3 && eZ(i, f), h;
                  }
                  for (d = n(i, d); f < s.length; f++)
                    null !== (g = m(d, i, f, s[f], l)) &&
                      (t &&
                        null !== g.alternate &&
                        d.delete(null === g.key ? f : g.key),
                      (o = a(g, o, f)),
                      null === u ? (h = g) : (u.sibling = g),
                      (u = g));
                  return (
                    t &&
                      d.forEach(function (t) {
                        return e(i, t);
                      }),
                    e3 && eZ(i, f),
                    h
                  );
                })(l, h, u, y);
              if (T(u))
                return (function (i, o, s, l) {
                  var h = T(s);
                  if ("function" != typeof h) throw Error(d(150));
                  if (null == (s = h.call(s))) throw Error(d(151));
                  for (
                    var u = (h = null),
                      f = o,
                      g = (o = 0),
                      p = null,
                      y = s.next();
                    null !== f && !y.done;
                    g++, y = s.next()
                  ) {
                    f.index > g ? ((p = f), (f = null)) : (p = f.sibling);
                    var b = v(i, f, y.value, l);
                    if (null === b) {
                      null === f && (f = p);
                      break;
                    }
                    t && f && null === b.alternate && e(i, f),
                      (o = a(b, o, g)),
                      null === u ? (h = b) : (u.sibling = b),
                      (u = b),
                      (f = p);
                  }
                  if (y.done) return r(i, f), e3 && eZ(i, g), h;
                  if (null === f) {
                    for (; !y.done; g++, y = s.next())
                      null !== (y = c(i, y.value, l)) &&
                        ((o = a(y, o, g)),
                        null === u ? (h = y) : (u.sibling = y),
                        (u = y));
                    return e3 && eZ(i, g), h;
                  }
                  for (f = n(i, f); !y.done; g++, y = s.next())
                    null !== (y = m(f, i, g, y.value, l)) &&
                      (t &&
                        null !== y.alternate &&
                        f.delete(null === y.key ? g : y.key),
                      (o = a(y, o, g)),
                      null === u ? (h = y) : (u.sibling = y),
                      (u = y));
                  return (
                    t &&
                      f.forEach(function (t) {
                        return e(i, t);
                      }),
                    e3 && eZ(i, g),
                    h
                  );
                })(l, h, u, y);
              ru(l, u);
            }
            return ("string" == typeof u && "" !== u) || "number" == typeof u
              ? ((u = "" + u),
                null !== h && 6 === h.tag
                  ? (r(l, h.sibling), ((h = i(h, u)).return = l))
                  : (r(l, h), ((h = a1(u, l.mode, y)).return = l)),
                o((l = h)))
              : r(l, h);
          };
        }
        var rf = rc(!0),
          rg = rc(!1),
          rp = t9(null),
          rv = null,
          rm = null,
          ry = null;
        function rb() {
          ry = rm = rv = null;
        }
        function r_(t, e, r) {
          X
            ? (ee(rp, e._currentValue), (e._currentValue = r))
            : (ee(rp, e._currentValue2), (e._currentValue2 = r));
        }
        function rS(t) {
          var e = rp.current;
          et(rp), X ? (t._currentValue = e) : (t._currentValue2 = e);
        }
        function rx(t, e, r) {
          for (; null !== t; ) {
            var n = t.alternate;
            if (
              ((t.childLanes & e) !== e
                ? ((t.childLanes |= e), null !== n && (n.childLanes |= e))
                : null !== n && (n.childLanes & e) !== e && (n.childLanes |= e),
              t === r)
            )
              break;
            t = t.return;
          }
        }
        function rw(t, e) {
          (rv = t),
            (ry = rm = null),
            null !== (t = t.dependencies) &&
              null !== t.firstContext &&
              (0 != (t.lanes & e) && (n2 = !0), (t.firstContext = null));
        }
        function rC(t) {
          var e = X ? t._currentValue : t._currentValue2;
          if (ry !== t) {
            if (
              ((t = {
                context: t,
                memoizedValue: e,
                next: null,
              }),
              null === rm)
            ) {
              if (null === rv) throw Error(d(308));
              (rm = t),
                (rv.dependencies = {
                  lanes: 0,
                  firstContext: t,
                });
            } else rm = rm.next = t;
          }
          return e;
        }
        var rk = null;
        function rP(t) {
          null === rk ? (rk = [t]) : rk.push(t);
        }
        function rT(t, e, r, n) {
          var i = e.interleaved;
          return (
            null === i
              ? ((r.next = r), rP(e))
              : ((r.next = i.next), (i.next = r)),
            (e.interleaved = r),
            rE(t, n)
          );
        }
        function rE(t, e) {
          t.lanes |= e;
          var r = t.alternate;
          for (null !== r && (r.lanes |= e), r = t, t = t.return; null !== t; )
            (t.childLanes |= e),
              null !== (r = t.alternate) && (r.childLanes |= e),
              (r = t),
              (t = t.return);
          return 3 === r.tag ? r.stateNode : null;
        }
        var rF = !1;
        function rM(t) {
          t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
              pending: null,
              interleaved: null,
              lanes: 0,
            },
            effects: null,
          };
        }
        function rN(t, e) {
          (t = t.updateQueue),
            e.updateQueue === t &&
              (e.updateQueue = {
                baseState: t.baseState,
                firstBaseUpdate: t.firstBaseUpdate,
                lastBaseUpdate: t.lastBaseUpdate,
                shared: t.shared,
                effects: t.effects,
              });
        }
        function rA(t, e) {
          return {
            eventTime: t,
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function rR(t, e, r) {
          var n = t.updateQueue;
          if (null === n) return null;
          if (((n = n.shared), 0 != (2 & i3))) {
            var i = n.pending;
            return (
              null === i ? (e.next = e) : ((e.next = i.next), (i.next = e)),
              (n.pending = e),
              rE(t, r)
            );
          }
          return (
            null === (i = n.interleaved)
              ? ((e.next = e), rP(n))
              : ((e.next = i.next), (i.next = e)),
            (n.interleaved = e),
            rE(t, r)
          );
        }
        function rD(t, e, r) {
          if (
            null !== (e = e.updateQueue) &&
            ((e = e.shared), 0 != (4194240 & r))
          ) {
            var n = e.lanes;
            (n &= t.pendingLanes), (r |= n), (e.lanes = r), eC(t, r);
          }
        }
        function rL(t, e) {
          var r = t.updateQueue,
            n = t.alternate;
          if (null !== n && r === (n = n.updateQueue)) {
            var i = null,
              a = null;
            if (null !== (r = r.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: r.eventTime,
                  lane: r.lane,
                  tag: r.tag,
                  payload: r.payload,
                  callback: r.callback,
                  next: null,
                };
                null === a ? (i = a = o) : (a = a.next = o), (r = r.next);
              } while (null !== r);
              null === a ? (i = a = e) : (a = a.next = e);
            } else i = a = e;
            (r = {
              baseState: n.baseState,
              firstBaseUpdate: i,
              lastBaseUpdate: a,
              shared: n.shared,
              effects: n.effects,
            }),
              (t.updateQueue = r);
            return;
          }
          null === (t = r.lastBaseUpdate)
            ? (r.firstBaseUpdate = e)
            : (t.next = e),
            (r.lastBaseUpdate = e);
        }
        function rI(t, e, r, n) {
          var i = t.updateQueue;
          rF = !1;
          var a = i.firstBaseUpdate,
            o = i.lastBaseUpdate,
            s = i.shared.pending;
          if (null !== s) {
            i.shared.pending = null;
            var l = s,
              h = l.next;
            (l.next = null), null === o ? (a = h) : (o.next = h), (o = l);
            var d = t.alternate;
            null !== d &&
              (s = (d = d.updateQueue).lastBaseUpdate) !== o &&
              (null === s ? (d.firstBaseUpdate = h) : (s.next = h),
              (d.lastBaseUpdate = l));
          }
          if (null !== a) {
            var c = i.baseState;
            for (o = 0, d = h = l = null, s = a; ; ) {
              var f = s.lane,
                g = s.eventTime;
              if ((n & f) === f) {
                null !== d &&
                  (d = d.next =
                    {
                      eventTime: g,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                t: {
                  var p = t,
                    v = s;
                  switch (((f = e), (g = r), v.tag)) {
                    case 1:
                      if ("function" == typeof (p = v.payload)) {
                        c = p.call(g, c, f);
                        break t;
                      }
                      c = p;
                      break t;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ==
                        (f =
                          "function" == typeof (p = v.payload)
                            ? p.call(g, c, f)
                            : p)
                      )
                        break t;
                      c = u({}, c, f);
                      break t;
                    case 2:
                      rF = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((t.flags |= 64),
                  null === (f = i.effects) ? (i.effects = [s]) : f.push(s));
              } else
                (g = {
                  eventTime: g,
                  lane: f,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === d ? ((h = d = g), (l = c)) : (d = d.next = g),
                  (o |= f);
              if (null === (s = s.next)) {
                if (null === (s = i.shared.pending)) break;
                (s = (f = s).next),
                  (f.next = null),
                  (i.lastBaseUpdate = f),
                  (i.shared.pending = null);
              }
            }
            if (
              (null === d && (l = c),
              (i.baseState = l),
              (i.firstBaseUpdate = h),
              (i.lastBaseUpdate = d),
              null !== (e = i.shared.interleaved))
            ) {
              i = e;
              do (o |= i.lane), (i = i.next);
              while (i !== e);
            } else null === a && (i.shared.lanes = 0);
            (an |= o), (t.lanes = o), (t.memoizedState = c);
          }
        }
        function rG(t, e, r) {
          if (((t = e.effects), (e.effects = null), null !== t))
            for (e = 0; e < t.length; e++) {
              var n = t[e],
                i = n.callback;
              if (null !== i) {
                if (((n.callback = null), (n = r), "function" != typeof i))
                  throw Error(d(191, i));
                i.call(n);
              }
            }
        }
        var rO = {},
          rz = t9(rO),
          rU = t9(rO),
          rB = t9(rO);
        function rH(t) {
          if (t === rO) throw Error(d(174));
          return t;
        }
        function rV(t, e) {
          ee(rB, e), ee(rU, t), ee(rz, rO), (t = I(e)), et(rz), ee(rz, t);
        }
        function rj() {
          et(rz), et(rU), et(rB);
        }
        function rW(t) {
          var e = rH(rB.current),
            r = rH(rz.current);
          (e = G(r, t.type, e)), r !== e && (ee(rU, t), ee(rz, e));
        }
        function rK(t) {
          rU.current === t && (et(rz), et(rU));
        }
        var rY = t9(0);
        function rq(t) {
          for (var e = t; null !== e; ) {
            if (13 === e.tag) {
              var r = e.memoizedState;
              if (null !== r && (null === (r = r.dehydrated) || tO(r) || tz(r)))
                return e;
            } else if (19 === e.tag && void 0 !== e.memoizedProps.revealOrder) {
              if (0 != (128 & e.flags)) return e;
            } else if (null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) return null;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
          return null;
        }
        var rX = [];
        function rQ() {
          for (var t = 0; t < rX.length; t++) {
            var e = rX[t];
            X
              ? (e._workInProgressVersionPrimary = null)
              : (e._workInProgressVersionSecondary = null);
          }
          rX.length = 0;
        }
        var r$ = c.ReactCurrentDispatcher,
          rJ = c.ReactCurrentBatchConfig,
          rZ = 0,
          r0 = null,
          r1 = null,
          r2 = null,
          r4 = !1,
          r5 = !1,
          r3 = 0,
          r6 = 0;
        function r8() {
          throw Error(d(321));
        }
        function r7(t, e) {
          if (null === e) return !1;
          for (var r = 0; r < e.length && r < t.length; r++)
            if (!eO(t[r], e[r])) return !1;
          return !0;
        }
        function r9(t, e, r, n, i, a) {
          if (
            ((rZ = a),
            (r0 = e),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.lanes = 0),
            (r$.current = null === t || null === t.memoizedState ? nI : nG),
            (t = r(n, i)),
            r5)
          ) {
            a = 0;
            do {
              if (((r5 = !1), (r3 = 0), 25 <= a)) throw Error(d(301));
              (a += 1),
                (r2 = r1 = null),
                (e.updateQueue = null),
                (r$.current = nO),
                (t = r(n, i));
            } while (r5);
          }
          if (
            ((r$.current = nL),
            (e = null !== r1 && null !== r1.next),
            (rZ = 0),
            (r2 = r1 = r0 = null),
            (r4 = !1),
            e)
          )
            throw Error(d(300));
          return t;
        }
        function nt() {
          var t = 0 !== r3;
          return (r3 = 0), t;
        }
        function ne() {
          var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === r2 ? (r0.memoizedState = r2 = t) : (r2 = r2.next = t), r2
          );
        }
        function nr() {
          if (null === r1) {
            var t = r0.alternate;
            t = null !== t ? t.memoizedState : null;
          } else t = r1.next;
          var e = null === r2 ? r0.memoizedState : r2.next;
          if (null !== e) (r2 = e), (r1 = t);
          else {
            if (null === t) throw Error(d(310));
            (t = {
              memoizedState: (r1 = t).memoizedState,
              baseState: r1.baseState,
              baseQueue: r1.baseQueue,
              queue: r1.queue,
              next: null,
            }),
              null === r2 ? (r0.memoizedState = r2 = t) : (r2 = r2.next = t);
          }
          return r2;
        }
        function nn(t, e) {
          return "function" == typeof e ? e(t) : e;
        }
        function ni(t) {
          var e = nr(),
            r = e.queue;
          if (null === r) throw Error(d(311));
          r.lastRenderedReducer = t;
          var n = r1,
            i = n.baseQueue,
            a = r.pending;
          if (null !== a) {
            if (null !== i) {
              var o = i.next;
              (i.next = a.next), (a.next = o);
            }
            (n.baseQueue = i = a), (r.pending = null);
          }
          if (null !== i) {
            (a = i.next), (n = n.baseState);
            var s = (o = null),
              l = null,
              h = a;
            do {
              var u = h.lane;
              if ((rZ & u) === u)
                null !== l &&
                  (l = l.next =
                    {
                      lane: 0,
                      action: h.action,
                      hasEagerState: h.hasEagerState,
                      eagerState: h.eagerState,
                      next: null,
                    }),
                  (n = h.hasEagerState ? h.eagerState : t(n, h.action));
              else {
                var c = {
                  lane: u,
                  action: h.action,
                  hasEagerState: h.hasEagerState,
                  eagerState: h.eagerState,
                  next: null,
                };
                null === l ? ((s = l = c), (o = n)) : (l = l.next = c),
                  (r0.lanes |= u),
                  (an |= u);
              }
              h = h.next;
            } while (null !== h && h !== a);
            null === l ? (o = n) : (l.next = s),
              eO(n, e.memoizedState) || (n2 = !0),
              (e.memoizedState = n),
              (e.baseState = o),
              (e.baseQueue = l),
              (r.lastRenderedState = n);
          }
          if (null !== (t = r.interleaved)) {
            i = t;
            do (a = i.lane), (r0.lanes |= a), (an |= a), (i = i.next);
            while (i !== t);
          } else null === i && (r.lanes = 0);
          return [e.memoizedState, r.dispatch];
        }
        function na(t) {
          var e = nr(),
            r = e.queue;
          if (null === r) throw Error(d(311));
          r.lastRenderedReducer = t;
          var n = r.dispatch,
            i = r.pending,
            a = e.memoizedState;
          if (null !== i) {
            r.pending = null;
            var o = (i = i.next);
            do (a = t(a, o.action)), (o = o.next);
            while (o !== i);
            eO(a, e.memoizedState) || (n2 = !0),
              (e.memoizedState = a),
              null === e.baseQueue && (e.baseState = a),
              (r.lastRenderedState = a);
          }
          return [a, n];
        }
        function no() {}
        function ns(t, e) {
          var r = r0,
            n = nr(),
            i = e(),
            a = !eO(n.memoizedState, i);
          if (
            (a && ((n.memoizedState = i), (n2 = !0)),
            (n = n.queue),
            nb(nu.bind(null, r, n, t), [t]),
            n.getSnapshot !== e ||
              a ||
              (null !== r2 && 1 & r2.memoizedState.tag))
          ) {
            if (
              ((r.flags |= 2048),
              ng(9, nh.bind(null, r, n, i, e), void 0, null),
              null === i6)
            )
              throw Error(d(349));
            0 != (30 & rZ) || nl(r, e, i);
          }
          return i;
        }
        function nl(t, e, r) {
          (t.flags |= 16384),
            (t = {
              getSnapshot: e,
              value: r,
            }),
            null === (e = r0.updateQueue)
              ? ((e = {
                  lastEffect: null,
                  stores: null,
                }),
                (r0.updateQueue = e),
                (e.stores = [t]))
              : null === (r = e.stores)
              ? (e.stores = [t])
              : r.push(t);
        }
        function nh(t, e, r, n) {
          (e.value = r), (e.getSnapshot = n), nd(e) && nc(t);
        }
        function nu(t, e, r) {
          return r(function () {
            nd(e) && nc(t);
          });
        }
        function nd(t) {
          var e = t.getSnapshot;
          t = t.value;
          try {
            var r = e();
            return !eO(t, r);
          } catch (t) {
            return !0;
          }
        }
        function nc(t) {
          var e = rE(t, 1);
          null !== e && aC(e, t, 1, -1);
        }
        function nf(t) {
          var e = ne();
          return (
            "function" == typeof t && (t = t()),
            (e.memoizedState = e.baseState = t),
            (t = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: nn,
              lastRenderedState: t,
            }),
            (e.queue = t),
            (t = t.dispatch = nN.bind(null, r0, t)),
            [e.memoizedState, t]
          );
        }
        function ng(t, e, r, n) {
          return (
            (t = {
              tag: t,
              create: e,
              destroy: r,
              deps: n,
              next: null,
            }),
            null === (e = r0.updateQueue)
              ? ((e = {
                  lastEffect: null,
                  stores: null,
                }),
                (r0.updateQueue = e),
                (e.lastEffect = t.next = t))
              : null === (r = e.lastEffect)
              ? (e.lastEffect = t.next = t)
              : ((n = r.next), (r.next = t), (t.next = n), (e.lastEffect = t)),
            t
          );
        }
        function np() {
          return nr().memoizedState;
        }
        function nv(t, e, r, n) {
          var i = ne();
          (r0.flags |= t),
            (i.memoizedState = ng(1 | e, r, void 0, void 0 === n ? null : n));
        }
        function nm(t, e, r, n) {
          var i = nr();
          n = void 0 === n ? null : n;
          var a = void 0;
          if (null !== r1) {
            var o = r1.memoizedState;
            if (((a = o.destroy), null !== n && r7(n, o.deps))) {
              i.memoizedState = ng(e, r, a, n);
              return;
            }
          }
          (r0.flags |= t), (i.memoizedState = ng(1 | e, r, a, n));
        }
        function ny(t, e) {
          return nv(8390656, 8, t, e);
        }
        function nb(t, e) {
          return nm(2048, 8, t, e);
        }
        function n_(t, e) {
          return nm(4, 2, t, e);
        }
        function nS(t, e) {
          return nm(4, 4, t, e);
        }
        function nx(t, e) {
          return "function" == typeof e
            ? (e((t = t())),
              function () {
                e(null);
              })
            : null != e
            ? ((t = t()),
              (e.current = t),
              function () {
                e.current = null;
              })
            : void 0;
        }
        function nw(t, e, r) {
          return (
            (r = null != r ? r.concat([t]) : null),
            nm(4, 4, nx.bind(null, e, t), r)
          );
        }
        function nC() {}
        function nk(t, e) {
          var r = nr();
          e = void 0 === e ? null : e;
          var n = r.memoizedState;
          return null !== n && null !== e && r7(e, n[1])
            ? n[0]
            : ((r.memoizedState = [t, e]), t);
        }
        function nP(t, e) {
          var r = nr();
          e = void 0 === e ? null : e;
          var n = r.memoizedState;
          return null !== n && null !== e && r7(e, n[1])
            ? n[0]
            : ((t = t()), (r.memoizedState = [t, e]), t);
        }
        function nT(t, e, r) {
          return 0 == (21 & rZ)
            ? (t.baseState && ((t.baseState = !1), (n2 = !0)),
              (t.memoizedState = r))
            : (eO(r, e) ||
                ((r = eS()), (r0.lanes |= r), (an |= r), (t.baseState = !0)),
              e);
        }
        function nE(t, e) {
          var r = ek;
          (ek = 0 !== r && 4 > r ? r : 4), t(!0);
          var n = rJ.transition;
          rJ.transition = {};
          try {
            t(!1), e();
          } finally {
            (ek = r), (rJ.transition = n);
          }
        }
        function nF() {
          return nr().memoizedState;
        }
        function nM(t, e, r) {
          var n = aw(t);
          (r = {
            lane: n,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            nA(t)
              ? nR(e, r)
              : null !== (r = rT(t, e, r, n)) &&
                (aC(r, t, n, ax()), nD(r, e, n));
        }
        function nN(t, e, r) {
          var n = aw(t),
            i = {
              lane: n,
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (nA(t)) nR(e, i);
          else {
            var a = t.alternate;
            if (
              0 === t.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = e.lastRenderedReducer)
            )
              try {
                var o = e.lastRenderedState,
                  s = a(o, r);
                if (((i.hasEagerState = !0), (i.eagerState = s), eO(s, o))) {
                  var l = e.interleaved;
                  null === l
                    ? ((i.next = i), rP(e))
                    : ((i.next = l.next), (l.next = i)),
                    (e.interleaved = i);
                  return;
                }
              } catch (t) {
              } finally {
              }
            null !== (r = rT(t, e, i, n)) &&
              (aC(r, t, n, (i = ax())), nD(r, e, n));
          }
        }
        function nA(t) {
          var e = t.alternate;
          return t === r0 || (null !== e && e === r0);
        }
        function nR(t, e) {
          r5 = r4 = !0;
          var r = t.pending;
          null === r ? (e.next = e) : ((e.next = r.next), (r.next = e)),
            (t.pending = e);
        }
        function nD(t, e, r) {
          if (0 != (4194240 & r)) {
            var n = e.lanes;
            (n &= t.pendingLanes), (r |= n), (e.lanes = r), eC(t, r);
          }
        }
        var nL = {
            readContext: rC,
            useCallback: r8,
            useContext: r8,
            useEffect: r8,
            useImperativeHandle: r8,
            useInsertionEffect: r8,
            useLayoutEffect: r8,
            useMemo: r8,
            useReducer: r8,
            useRef: r8,
            useState: r8,
            useDebugValue: r8,
            useDeferredValue: r8,
            useTransition: r8,
            useMutableSource: r8,
            useSyncExternalStore: r8,
            useId: r8,
            unstable_isNewReconciler: !1,
          },
          nI = {
            readContext: rC,
            useCallback: function (t, e) {
              return (ne().memoizedState = [t, void 0 === e ? null : e]), t;
            },
            useContext: rC,
            useEffect: ny,
            useImperativeHandle: function (t, e, r) {
              return (
                (r = null != r ? r.concat([t]) : null),
                nv(4194308, 4, nx.bind(null, e, t), r)
              );
            },
            useLayoutEffect: function (t, e) {
              return nv(4194308, 4, t, e);
            },
            useInsertionEffect: function (t, e) {
              return nv(4, 2, t, e);
            },
            useMemo: function (t, e) {
              var r = ne();
              return (
                (e = void 0 === e ? null : e),
                (t = t()),
                (r.memoizedState = [t, e]),
                t
              );
            },
            useReducer: function (t, e, r) {
              var n = ne();
              return (
                (e = void 0 !== r ? r(e) : e),
                (n.memoizedState = n.baseState = e),
                (t = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: t,
                  lastRenderedState: e,
                }),
                (n.queue = t),
                (t = t.dispatch = nM.bind(null, r0, t)),
                [n.memoizedState, t]
              );
            },
            useRef: function (t) {
              return (
                (t = {
                  current: t,
                }),
                (ne().memoizedState = t)
              );
            },
            useState: nf,
            useDebugValue: nC,
            useDeferredValue: function (t) {
              return (ne().memoizedState = t);
            },
            useTransition: function () {
              var t = nf(!1),
                e = t[0];
              return (
                (t = nE.bind(null, t[1])), (ne().memoizedState = t), [e, t]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (t, e, r) {
              var n = r0,
                i = ne();
              if (e3) {
                if (void 0 === r) throw Error(d(407));
                r = r();
              } else {
                if (((r = e()), null === i6)) throw Error(d(349));
                0 != (30 & rZ) || nl(n, e, r);
              }
              i.memoizedState = r;
              var a = {
                value: r,
                getSnapshot: e,
              };
              return (
                (i.queue = a),
                ny(nu.bind(null, n, a, t), [t]),
                (n.flags |= 2048),
                ng(9, nh.bind(null, n, a, r, e), void 0, null),
                r
              );
            },
            useId: function () {
              var t = ne(),
                e = i6.identifierPrefix;
              if (e3) {
                var r = eJ,
                  n = e$;
                (e =
                  ":" +
                  e +
                  "R" +
                  (r = (n & ~(1 << (32 - ef(n) - 1))).toString(32) + r)),
                  0 < (r = r3++) && (e += "H" + r.toString(32)),
                  (e += ":");
              } else e = ":" + e + "r" + (r = r6++).toString(32) + ":";
              return (t.memoizedState = e);
            },
            unstable_isNewReconciler: !1,
          },
          nG = {
            readContext: rC,
            useCallback: nk,
            useContext: rC,
            useEffect: nb,
            useImperativeHandle: nw,
            useInsertionEffect: n_,
            useLayoutEffect: nS,
            useMemo: nP,
            useReducer: ni,
            useRef: np,
            useState: function () {
              return ni(nn);
            },
            useDebugValue: nC,
            useDeferredValue: function (t) {
              return nT(nr(), r1.memoizedState, t);
            },
            useTransition: function () {
              return [ni(nn)[0], nr().memoizedState];
            },
            useMutableSource: no,
            useSyncExternalStore: ns,
            useId: nF,
            unstable_isNewReconciler: !1,
          },
          nO = {
            readContext: rC,
            useCallback: nk,
            useContext: rC,
            useEffect: nb,
            useImperativeHandle: nw,
            useInsertionEffect: n_,
            useLayoutEffect: nS,
            useMemo: nP,
            useReducer: na,
            useRef: np,
            useState: function () {
              return na(nn);
            },
            useDebugValue: nC,
            useDeferredValue: function (t) {
              var e = nr();
              return null === r1
                ? (e.memoizedState = t)
                : nT(e, r1.memoizedState, t);
            },
            useTransition: function () {
              return [na(nn)[0], nr().memoizedState];
            },
            useMutableSource: no,
            useSyncExternalStore: ns,
            useId: nF,
            unstable_isNewReconciler: !1,
          };
        function nz(t, e) {
          if (t && t.defaultProps)
            for (var r in ((e = u({}, e)), (t = t.defaultProps)))
              void 0 === e[r] && (e[r] = t[r]);
          return e;
        }
        function nU(t, e, r, n) {
          (r = null == (r = r(n, (e = t.memoizedState))) ? e : u({}, e, r)),
            (t.memoizedState = r),
            0 === t.lanes && (t.updateQueue.baseState = r);
        }
        var nB = {
          isMounted: function (t) {
            return !!(t = t._reactInternals) && F(t) === t;
          },
          enqueueSetState: function (t, e, r) {
            t = t._reactInternals;
            var n = ax(),
              i = aw(t),
              a = rA(n, i);
            (a.payload = e),
              null != r && (a.callback = r),
              null !== (e = rR(t, a, i)) && (aC(e, t, i, n), rD(e, t, i));
          },
          enqueueReplaceState: function (t, e, r) {
            t = t._reactInternals;
            var n = ax(),
              i = aw(t),
              a = rA(n, i);
            (a.tag = 1),
              (a.payload = e),
              null != r && (a.callback = r),
              null !== (e = rR(t, a, i)) && (aC(e, t, i, n), rD(e, t, i));
          },
          enqueueForceUpdate: function (t, e) {
            t = t._reactInternals;
            var r = ax(),
              n = aw(t),
              i = rA(r, n);
            (i.tag = 2),
              null != e && (i.callback = e),
              null !== (e = rR(t, i, n)) && (aC(e, t, n, r), rD(e, t, n));
          },
        };
        function nH(t, e, r, n, i, a, o) {
          return "function" == typeof (t = t.stateNode).shouldComponentUpdate
            ? t.shouldComponentUpdate(n, a, o)
            : !e.prototype ||
                !e.prototype.isPureReactComponent ||
                !rl(r, n) ||
                !rl(i, a);
        }
        function nV(t, e, r) {
          var n = !1,
            i = er,
            a = e.contextType;
          return (
            "object" == typeof a && null !== a
              ? (a = rC(a))
              : ((i = es(e) ? ea : en.current),
                (a = (n = null != (n = e.contextTypes)) ? eo(t, i) : er)),
            (e = new e(r, a)),
            (t.memoizedState =
              null !== e.state && void 0 !== e.state ? e.state : null),
            (e.updater = nB),
            (t.stateNode = e),
            (e._reactInternals = t),
            n &&
              (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (t.__reactInternalMemoizedMaskedChildContext = a)),
            e
          );
        }
        function nj(t, e, r, n) {
          (t = e.state),
            "function" == typeof e.componentWillReceiveProps &&
              e.componentWillReceiveProps(r, n),
            "function" == typeof e.UNSAFE_componentWillReceiveProps &&
              e.UNSAFE_componentWillReceiveProps(r, n),
            e.state !== t && nB.enqueueReplaceState(e, e.state, null);
        }
        function nW(t, e, r, n) {
          var i = t.stateNode;
          (i.props = r), (i.state = t.memoizedState), (i.refs = {}), rM(t);
          var a = e.contextType;
          "object" == typeof a && null !== a
            ? (i.context = rC(a))
            : ((a = es(e) ? ea : en.current), (i.context = eo(t, a))),
            (i.state = t.memoizedState),
            "function" == typeof (a = e.getDerivedStateFromProps) &&
              (nU(t, e, a, r), (i.state = t.memoizedState)),
            "function" == typeof e.getDerivedStateFromProps ||
              "function" == typeof i.getSnapshotBeforeUpdate ||
              ("function" != typeof i.UNSAFE_componentWillMount &&
                "function" != typeof i.componentWillMount) ||
              ((e = i.state),
              "function" == typeof i.componentWillMount &&
                i.componentWillMount(),
              "function" == typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              e !== i.state && nB.enqueueReplaceState(i, i.state, null),
              rI(t, r, i, n),
              (i.state = t.memoizedState)),
            "function" == typeof i.componentDidMount && (t.flags |= 4194308);
        }
        function nK(t, e) {
          try {
            var r = "",
              n = e;
            do
              (r += (function (t) {
                switch (t.tag) {
                  case 5:
                    return t4(t.type);
                  case 16:
                    return t4("Lazy");
                  case 13:
                    return t4("Suspense");
                  case 19:
                    return t4("SuspenseList");
                  case 0:
                  case 2:
                  case 15:
                    return (t = t3(t.type, !1));
                  case 11:
                    return (t = t3(t.type.render, !1));
                  case 1:
                    return (t = t3(t.type, !0));
                  default:
                    return "";
                }
              })(n)),
                (n = n.return);
            while (n);
            var i = r;
          } catch (t) {
            i = "\nError generating stack: " + t.message + "\n" + t.stack;
          }
          return {
            value: t,
            source: e,
            stack: i,
            digest: null,
          };
        }
        function nY(t, e, r) {
          return {
            value: t,
            source: null,
            stack: null != r ? r : null,
            digest: null != e ? e : null,
          };
        }
        function nq(t, e) {
          try {
            console.error(e.value);
          } catch (t) {
            setTimeout(function () {
              throw t;
            });
          }
        }
        var nX = "function" == typeof WeakMap ? WeakMap : Map;
        function nQ(t, e, r) {
          ((r = rA(-1, r)).tag = 3),
            (r.payload = {
              element: null,
            });
          var n = e.value;
          return (
            (r.callback = function () {
              ac || ((ac = !0), (af = n)), nq(t, e);
            }),
            r
          );
        }
        function n$(t, e, r) {
          (r = rA(-1, r)).tag = 3;
          var n = t.type.getDerivedStateFromError;
          if ("function" == typeof n) {
            var i = e.value;
            (r.payload = function () {
              return n(i);
            }),
              (r.callback = function () {
                nq(t, e);
              });
          }
          var a = t.stateNode;
          return (
            null !== a &&
              "function" == typeof a.componentDidCatch &&
              (r.callback = function () {
                nq(t, e),
                  "function" != typeof n &&
                    (null === ag ? (ag = new Set([this])) : ag.add(this));
                var r = e.stack;
                this.componentDidCatch(e.value, {
                  componentStack: null !== r ? r : "",
                });
              }),
            r
          );
        }
        function nJ(t, e, r) {
          var n = t.pingCache;
          if (null === n) {
            n = t.pingCache = new nX();
            var i = new Set();
            n.set(e, i);
          } else void 0 === (i = n.get(e)) && ((i = new Set()), n.set(e, i));
          i.has(r) || (i.add(r), (t = aj.bind(null, t, e, r)), e.then(t, t));
        }
        function nZ(t) {
          do {
            var e;
            if (
              ((e = 13 === t.tag) &&
                (e = null === (e = t.memoizedState) || null !== e.dehydrated),
              e)
            )
              return t;
            t = t.return;
          } while (null !== t);
          return null;
        }
        function n0(t, e, r, n, i) {
          return (
            0 == (1 & t.mode)
              ? t === e
                ? (t.flags |= 65536)
                : ((t.flags |= 128),
                  (r.flags |= 131072),
                  (r.flags &= -52805),
                  1 === r.tag &&
                    (null === r.alternate
                      ? (r.tag = 17)
                      : (((e = rA(-1, 1)).tag = 2), rR(r, e, 1))),
                  (r.lanes |= 1))
              : ((t.flags |= 65536), (t.lanes = i)),
            t
          );
        }
        var n1 = c.ReactCurrentOwner,
          n2 = !1;
        function n4(t, e, r, n) {
          e.child = null === t ? rg(e, null, r, n) : rf(e, t.child, r, n);
        }
        function n5(t, e, r, n, i) {
          r = r.render;
          var a = e.ref;
          return (rw(e, i),
          (n = r9(t, e, r, n, a, i)),
          (r = nt()),
          null === t || n2)
            ? (e3 && r && e1(e), (e.flags |= 1), n4(t, e, n, i), e.child)
            : ((e.updateQueue = t.updateQueue),
              (e.flags &= -2053),
              (t.lanes &= ~i),
              ip(t, e, i));
        }
        function n3(t, e, r, n, i) {
          if (null === t) {
            var a = r.type;
            return "function" != typeof a ||
              aQ(a) ||
              void 0 !== a.defaultProps ||
              null !== r.compare ||
              void 0 !== r.defaultProps
              ? (((t = aJ(r.type, null, n, e, e.mode, i)).ref = e.ref),
                (t.return = e),
                (e.child = t))
              : ((e.tag = 15), (e.type = a), n6(t, e, a, n, i));
          }
          if (((a = t.child), 0 == (t.lanes & i))) {
            var o = a.memoizedProps;
            if (
              (r = null !== (r = r.compare) ? r : rl)(o, n) &&
              t.ref === e.ref
            )
              return ip(t, e, i);
          }
          return (
            (e.flags |= 1),
            ((t = a$(a, n)).ref = e.ref),
            (t.return = e),
            (e.child = t)
          );
        }
        function n6(t, e, r, n, i) {
          if (null !== t) {
            var a = t.memoizedProps;
            if (rl(a, n) && t.ref === e.ref) {
              if (((n2 = !1), (e.pendingProps = n = a), 0 == (t.lanes & i)))
                return (e.lanes = t.lanes), ip(t, e, i);
              0 != (131072 & t.flags) && (n2 = !0);
            }
          }
          return n9(t, e, r, n, i);
        }
        function n8(t, e, r) {
          var n = e.pendingProps,
            i = n.children,
            a = null !== t ? t.memoizedState : null;
          if ("hidden" === n.mode) {
            if (0 == (1 & e.mode))
              (e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                ee(at, i9),
                (i9 |= r);
            else {
              if (0 == (1073741824 & r))
                return (
                  (t = null !== a ? a.baseLanes | r : r),
                  (e.lanes = e.childLanes = 1073741824),
                  (e.memoizedState = {
                    baseLanes: t,
                    cachePool: null,
                    transitions: null,
                  }),
                  (e.updateQueue = null),
                  ee(at, i9),
                  (i9 |= t),
                  null
                );
              (e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (n = null !== a ? a.baseLanes : r),
                ee(at, i9),
                (i9 |= n);
            }
          } else
            null !== a
              ? ((n = a.baseLanes | r), (e.memoizedState = null))
              : (n = r),
              ee(at, i9),
              (i9 |= n);
          return n4(t, e, i, r), e.child;
        }
        function n7(t, e) {
          var r = e.ref;
          ((null === t && null !== r) || (null !== t && t.ref !== r)) &&
            ((e.flags |= 512), (e.flags |= 2097152));
        }
        function n9(t, e, r, n, i) {
          var a = es(r) ? ea : en.current;
          return ((a = eo(e, a)),
          rw(e, i),
          (r = r9(t, e, r, n, a, i)),
          (n = nt()),
          null === t || n2)
            ? (e3 && n && e1(e), (e.flags |= 1), n4(t, e, r, i), e.child)
            : ((e.updateQueue = t.updateQueue),
              (e.flags &= -2053),
              (t.lanes &= ~i),
              ip(t, e, i));
        }
        function it(t, e, r, n, i) {
          if (es(r)) {
            var a = !0;
            ed(e);
          } else a = !1;
          if ((rw(e, i), null === e.stateNode))
            ig(t, e), nV(e, r, n), nW(e, r, n, i), (n = !0);
          else if (null === t) {
            var o = e.stateNode,
              s = e.memoizedProps;
            o.props = s;
            var l = o.context,
              h = r.contextType;
            h =
              "object" == typeof h && null !== h
                ? rC(h)
                : eo(e, (h = es(r) ? ea : en.current));
            var u = r.getDerivedStateFromProps,
              d =
                "function" == typeof u ||
                "function" == typeof o.getSnapshotBeforeUpdate;
            d ||
              ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
                "function" != typeof o.componentWillReceiveProps) ||
              ((s !== n || l !== h) && nj(e, o, n, h)),
              (rF = !1);
            var c = e.memoizedState;
            (o.state = c),
              rI(e, n, o, i),
              (l = e.memoizedState),
              s !== n || c !== l || ei.current || rF
                ? ("function" == typeof u &&
                    (nU(e, r, u, n), (l = e.memoizedState)),
                  (s = rF || nH(e, r, s, n, c, l, h))
                    ? (d ||
                        ("function" != typeof o.UNSAFE_componentWillMount &&
                          "function" != typeof o.componentWillMount) ||
                        ("function" == typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" == typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" == typeof o.componentDidMount &&
                        (e.flags |= 4194308))
                    : ("function" == typeof o.componentDidMount &&
                        (e.flags |= 4194308),
                      (e.memoizedProps = n),
                      (e.memoizedState = l)),
                  (o.props = n),
                  (o.state = l),
                  (o.context = h),
                  (n = s))
                : ("function" == typeof o.componentDidMount &&
                    (e.flags |= 4194308),
                  (n = !1));
          } else {
            (o = e.stateNode),
              rN(t, e),
              (s = e.memoizedProps),
              (h = e.type === e.elementType ? s : nz(e.type, s)),
              (o.props = h),
              (d = e.pendingProps),
              (c = o.context),
              (l =
                "object" == typeof (l = r.contextType) && null !== l
                  ? rC(l)
                  : eo(e, (l = es(r) ? ea : en.current)));
            var f = r.getDerivedStateFromProps;
            (u =
              "function" == typeof f ||
              "function" == typeof o.getSnapshotBeforeUpdate) ||
              ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
                "function" != typeof o.componentWillReceiveProps) ||
              ((s !== d || c !== l) && nj(e, o, n, l)),
              (rF = !1),
              (c = e.memoizedState),
              (o.state = c),
              rI(e, n, o, i);
            var g = e.memoizedState;
            s !== d || c !== g || ei.current || rF
              ? ("function" == typeof f &&
                  (nU(e, r, f, n), (g = e.memoizedState)),
                (h = rF || nH(e, r, h, n, c, g, l) || !1)
                  ? (u ||
                      ("function" != typeof o.UNSAFE_componentWillUpdate &&
                        "function" != typeof o.componentWillUpdate) ||
                      ("function" == typeof o.componentWillUpdate &&
                        o.componentWillUpdate(n, g, l),
                      "function" == typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(n, g, l)),
                    "function" == typeof o.componentDidUpdate && (e.flags |= 4),
                    "function" == typeof o.getSnapshotBeforeUpdate &&
                      (e.flags |= 1024))
                  : ("function" != typeof o.componentDidUpdate ||
                      (s === t.memoizedProps && c === t.memoizedState) ||
                      (e.flags |= 4),
                    "function" != typeof o.getSnapshotBeforeUpdate ||
                      (s === t.memoizedProps && c === t.memoizedState) ||
                      (e.flags |= 1024),
                    (e.memoizedProps = n),
                    (e.memoizedState = g)),
                (o.props = n),
                (o.state = g),
                (o.context = l),
                (n = h))
              : ("function" != typeof o.componentDidUpdate ||
                  (s === t.memoizedProps && c === t.memoizedState) ||
                  (e.flags |= 4),
                "function" != typeof o.getSnapshotBeforeUpdate ||
                  (s === t.memoizedProps && c === t.memoizedState) ||
                  (e.flags |= 1024),
                (n = !1));
          }
          return ie(t, e, r, n, a, i);
        }
        function ie(t, e, r, n, i, a) {
          n7(t, e);
          var o = 0 != (128 & e.flags);
          if (!n && !o) return i && ec(e, r, !1), ip(t, e, a);
          (n = e.stateNode), (n1.current = e);
          var s =
            o && "function" != typeof r.getDerivedStateFromError
              ? null
              : n.render();
          return (
            (e.flags |= 1),
            null !== t && o
              ? ((e.child = rf(e, t.child, null, a)),
                (e.child = rf(e, null, s, a)))
              : n4(t, e, s, a),
            (e.memoizedState = n.state),
            i && ec(e, r, !0),
            e.child
          );
        }
        function ir(t) {
          var e = t.stateNode;
          e.pendingContext
            ? eh(t, e.pendingContext, e.pendingContext !== e.context)
            : e.context && eh(t, e.context, !1),
            rV(t, e.containerInfo);
        }
        function ii(t, e, r, n, i) {
          return ra(), ro(i), (e.flags |= 256), n4(t, e, r, n), e.child;
        }
        var ia = {
          dehydrated: null,
          treeContext: null,
          retryLane: 0,
        };
        function io(t) {
          return {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          };
        }
        function is(t, e, r) {
          var n,
            i = e.pendingProps,
            a = rY.current,
            o = !1,
            s = 0 != (128 & e.flags);
          if (
            ((n = s) ||
              (n = (null === t || null !== t.memoizedState) && 0 != (2 & a)),
            n
              ? ((o = !0), (e.flags &= -129))
              : (null === t || null !== t.memoizedState) && (a |= 1),
            ee(rY, 1 & a),
            null === t)
          )
            return (re(e),
            null !== (t = e.memoizedState) && null !== (t = t.dehydrated))
              ? (0 == (1 & e.mode)
                  ? (e.lanes = 1)
                  : tz(t)
                  ? (e.lanes = 8)
                  : (e.lanes = 1073741824),
                null)
              : ((s = i.children),
                (t = i.fallback),
                o
                  ? ((i = e.mode),
                    (o = e.child),
                    (s = {
                      mode: "hidden",
                      children: s,
                    }),
                    0 == (1 & i) && null !== o
                      ? ((o.childLanes = 0), (o.pendingProps = s))
                      : (o = a0(s, i, 0, null)),
                    (t = aZ(t, i, r, null)),
                    (o.return = e),
                    (t.return = e),
                    (o.sibling = t),
                    (e.child = o),
                    (e.child.memoizedState = io(r)),
                    (e.memoizedState = ia),
                    t)
                  : il(e, s));
          if (null !== (a = t.memoizedState) && null !== (n = a.dehydrated))
            return (function (t, e, r, n, i, a, o) {
              if (r)
                return 256 & e.flags
                  ? ((e.flags &= -257), ih(t, e, o, (n = nY(Error(d(422))))))
                  : null !== e.memoizedState
                  ? ((e.child = t.child), (e.flags |= 128), null)
                  : ((a = n.fallback),
                    (i = e.mode),
                    (n = a0(
                      {
                        mode: "visible",
                        children: n.children,
                      },
                      i,
                      0,
                      null
                    )),
                    (a = aZ(a, i, o, null)),
                    (a.flags |= 2),
                    (n.return = e),
                    (a.return = e),
                    (n.sibling = a),
                    (e.child = n),
                    0 != (1 & e.mode) && rf(e, t.child, null, o),
                    (e.child.memoizedState = io(o)),
                    (e.memoizedState = ia),
                    a);
              if (0 == (1 & e.mode)) return ih(t, e, o, null);
              if (tz(i))
                return (
                  (n = tU(i).digest),
                  ih(t, e, o, (n = nY((a = Error(d(419))), n, void 0)))
                );
              if (((r = 0 != (o & t.childLanes)), n2 || r)) {
                if (null !== (n = i6)) {
                  switch (o & -o) {
                    case 4:
                      i = 2;
                      break;
                    case 16:
                      i = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      i = 32;
                      break;
                    case 536870912:
                      i = 268435456;
                      break;
                    default:
                      i = 0;
                  }
                  0 !== (i = 0 != (i & (n.suspendedLanes | o)) ? 0 : i) &&
                    i !== a.retryLane &&
                    ((a.retryLane = i), rE(t, i), aC(n, t, i, -1));
                }
                return aI(), ih(t, e, o, (n = nY(Error(d(421)))));
              }
              return tO(i)
                ? ((e.flags |= 128),
                  (e.child = t.child),
                  tB(i, (e = aK.bind(null, t))),
                  null)
                : ((t = a.treeContext),
                  J &&
                    ((e5 = tW(i)),
                    (e4 = e),
                    (e3 = !0),
                    (e8 = null),
                    (e6 = !1),
                    null !== t &&
                      ((eq[eX++] = e$),
                      (eq[eX++] = eJ),
                      (eq[eX++] = eQ),
                      (e$ = t.id),
                      (eJ = t.overflow),
                      (eQ = e))),
                  (e = il(e, n.children)),
                  (e.flags |= 4096),
                  e);
            })(t, e, s, i, n, a, r);
          if (o) {
            (o = i.fallback), (s = e.mode), (n = (a = t.child).sibling);
            var l = {
              mode: "hidden",
              children: i.children,
            };
            return (
              0 == (1 & s) && e.child !== a
                ? (((i = e.child).childLanes = 0),
                  (i.pendingProps = l),
                  (e.deletions = null))
                : ((i = a$(a, l)).subtreeFlags = 14680064 & a.subtreeFlags),
              null !== n
                ? (o = a$(n, o))
                : ((o = aZ(o, s, r, null)), (o.flags |= 2)),
              (o.return = e),
              (i.return = e),
              (i.sibling = o),
              (e.child = i),
              (i = o),
              (o = e.child),
              (s =
                null === (s = t.child.memoizedState)
                  ? io(r)
                  : {
                      baseLanes: s.baseLanes | r,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (o.memoizedState = s),
              (o.childLanes = t.childLanes & ~r),
              (e.memoizedState = ia),
              i
            );
          }
          return (
            (t = (o = t.child).sibling),
            (i = a$(o, {
              mode: "visible",
              children: i.children,
            })),
            0 == (1 & e.mode) && (i.lanes = r),
            (i.return = e),
            (i.sibling = null),
            null !== t &&
              (null === (r = e.deletions)
                ? ((e.deletions = [t]), (e.flags |= 16))
                : r.push(t)),
            (e.child = i),
            (e.memoizedState = null),
            i
          );
        }
        function il(t, e) {
          return (
            ((e = a0(
              {
                mode: "visible",
                children: e,
              },
              t.mode,
              0,
              null
            )).return = t),
            (t.child = e)
          );
        }
        function ih(t, e, r, n) {
          return (
            null !== n && ro(n),
            rf(e, t.child, null, r),
            (t = il(e, e.pendingProps.children)),
            (t.flags |= 2),
            (e.memoizedState = null),
            t
          );
        }
        function iu(t, e, r) {
          t.lanes |= e;
          var n = t.alternate;
          null !== n && (n.lanes |= e), rx(t.return, e, r);
        }
        function id(t, e, r, n, i) {
          var a = t.memoizedState;
          null === a
            ? (t.memoizedState = {
                isBackwards: e,
                rendering: null,
                renderingStartTime: 0,
                last: n,
                tail: r,
                tailMode: i,
              })
            : ((a.isBackwards = e),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = n),
              (a.tail = r),
              (a.tailMode = i));
        }
        function ic(t, e, r) {
          var n = e.pendingProps,
            i = n.revealOrder,
            a = n.tail;
          if ((n4(t, e, n.children, r), 0 != (2 & (n = rY.current))))
            (n = (1 & n) | 2), (e.flags |= 128);
          else {
            if (null !== t && 0 != (128 & t.flags))
              t: for (t = e.child; null !== t; ) {
                if (13 === t.tag) null !== t.memoizedState && iu(t, r, e);
                else if (19 === t.tag) iu(t, r, e);
                else if (null !== t.child) {
                  (t.child.return = t), (t = t.child);
                  continue;
                }
                if (t === e) break;
                for (; null === t.sibling; ) {
                  if (null === t.return || t.return === e) break t;
                  t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
              }
            n &= 1;
          }
          if ((ee(rY, n), 0 == (1 & e.mode))) e.memoizedState = null;
          else
            switch (i) {
              case "forwards":
                for (i = null, r = e.child; null !== r; )
                  null !== (t = r.alternate) && null === rq(t) && (i = r),
                    (r = r.sibling);
                null === (r = i)
                  ? ((i = e.child), (e.child = null))
                  : ((i = r.sibling), (r.sibling = null)),
                  id(e, !1, i, r, a);
                break;
              case "backwards":
                for (r = null, i = e.child, e.child = null; null !== i; ) {
                  if (null !== (t = i.alternate) && null === rq(t)) {
                    e.child = i;
                    break;
                  }
                  (t = i.sibling), (i.sibling = r), (r = i), (i = t);
                }
                id(e, !0, r, null, a);
                break;
              case "together":
                id(e, !1, null, null, void 0);
                break;
              default:
                e.memoizedState = null;
            }
          return e.child;
        }
        function ig(t, e) {
          0 == (1 & e.mode) &&
            null !== t &&
            ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
        }
        function ip(t, e, r) {
          if (
            (null !== t && (e.dependencies = t.dependencies),
            (an |= e.lanes),
            0 == (r & e.childLanes))
          )
            return null;
          if (null !== t && e.child !== t.child) throw Error(d(153));
          if (null !== e.child) {
            for (
              r = a$((t = e.child), t.pendingProps), e.child = r, r.return = e;
              null !== t.sibling;

            )
              (t = t.sibling),
                ((r = r.sibling = a$(t, t.pendingProps)).return = e);
            r.sibling = null;
          }
          return e.child;
        }
        function iv(t) {
          t.flags |= 4;
        }
        function im(t, e) {
          if (null !== t && t.child === e.child) return !0;
          if (0 != (16 & e.flags)) return !1;
          for (t = e.child; null !== t; ) {
            if (0 != (12854 & t.flags) || 0 != (12854 & t.subtreeFlags))
              return !1;
            t = t.sibling;
          }
          return !0;
        }
        if (Q)
          (e = function (t, e) {
            for (var r = e.child; null !== r; ) {
              if (5 === r.tag || 6 === r.tag) B(t, r.stateNode);
              else if (4 !== r.tag && null !== r.child) {
                (r.child.return = r), (r = r.child);
                continue;
              }
              if (r === e) break;
              for (; null === r.sibling; ) {
                if (null === r.return || r.return === e) return;
                r = r.return;
              }
              (r.sibling.return = r.return), (r = r.sibling);
            }
          }),
            (n = function () {}),
            (i = function (t, e, r, n, i) {
              (t = t.memoizedProps) !== n &&
                ((r = V(e.stateNode, r, t, n, i, rH(rz.current))),
                (e.updateQueue = r) && iv(e));
            }),
            (a = function (t, e, r, n) {
              r !== n && iv(e);
            });
        else if ($) {
          e = function (t, r, n, i) {
            for (var a = r.child; null !== a; ) {
              if (5 === a.tag) {
                var o = a.stateNode;
                n && i && (o = tR(o, a.type, a.memoizedProps, a)), B(t, o);
              } else if (6 === a.tag)
                (o = a.stateNode),
                  n && i && (o = tD(o, a.memoizedProps, a)),
                  B(t, o);
              else if (4 !== a.tag) {
                if (22 === a.tag && null !== a.memoizedState)
                  null !== (o = a.child) && (o.return = a), e(t, a, !0, !0);
                else if (null !== a.child) {
                  (a.child.return = a), (a = a.child);
                  continue;
                }
              }
              if (a === r) break;
              for (; null === a.sibling; ) {
                if (null === a.return || a.return === r) return;
                a = a.return;
              }
              (a.sibling.return = a.return), (a = a.sibling);
            }
          };
          var iy = function (t, e, r, n) {
            for (var i = e.child; null !== i; ) {
              if (5 === i.tag) {
                var a = i.stateNode;
                r && n && (a = tR(a, i.type, i.memoizedProps, i)), tM(t, a);
              } else if (6 === i.tag)
                (a = i.stateNode),
                  r && n && (a = tD(a, i.memoizedProps, i)),
                  tM(t, a);
              else if (4 !== i.tag) {
                if (22 === i.tag && null !== i.memoizedState)
                  null !== (a = i.child) && (a.return = i), iy(t, i, !0, !0);
                else if (null !== i.child) {
                  (i.child.return = i), (i = i.child);
                  continue;
                }
              }
              if (i === e) break;
              for (; null === i.sibling; ) {
                if (null === i.return || i.return === e) return;
                i = i.return;
              }
              (i.sibling.return = i.return), (i = i.sibling);
            }
          };
          (n = function (t, e) {
            var r = e.stateNode;
            if (!im(t, e)) {
              var n = tF((t = r.containerInfo));
              iy(n, e, !1, !1), (r.pendingChildren = n), iv(e), tN(t, n);
            }
          }),
            (i = function (t, r, n, i, a) {
              var o = t.stateNode,
                s = t.memoizedProps;
              if ((t = im(t, r)) && s === i) r.stateNode = o;
              else {
                var l = r.stateNode,
                  h = rH(rz.current),
                  u = null;
                s !== i && (u = V(l, n, s, i, a, h)),
                  t && null === u
                    ? (r.stateNode = o)
                    : (H((o = tE(o, u, n, s, i, r, t, l)), n, i, a, h) && iv(r),
                      (r.stateNode = o),
                      t ? iv(r) : e(o, r, !1, !1));
              }
            }),
            (a = function (t, e, r, n) {
              r !== n
                ? ((t = rH(rB.current)),
                  (r = rH(rz.current)),
                  (e.stateNode = W(n, t, r, e)),
                  iv(e))
                : (e.stateNode = t.stateNode);
            });
        } else (n = function () {}), (i = function () {}), (a = function () {});
        function ib(t, e) {
          if (!e3)
            switch (t.tailMode) {
              case "hidden":
                e = t.tail;
                for (var r = null; null !== e; )
                  null !== e.alternate && (r = e), (e = e.sibling);
                null === r ? (t.tail = null) : (r.sibling = null);
                break;
              case "collapsed":
                r = t.tail;
                for (var n = null; null !== r; )
                  null !== r.alternate && (n = r), (r = r.sibling);
                null === n
                  ? e || null === t.tail
                    ? (t.tail = null)
                    : (t.tail.sibling = null)
                  : (n.sibling = null);
            }
        }
        function i_(t) {
          var e = null !== t.alternate && t.alternate.child === t.child,
            r = 0,
            n = 0;
          if (e)
            for (var i = t.child; null !== i; )
              (r |= i.lanes | i.childLanes),
                (n |= 14680064 & i.subtreeFlags),
                (n |= 14680064 & i.flags),
                (i.return = t),
                (i = i.sibling);
          else
            for (i = t.child; null !== i; )
              (r |= i.lanes | i.childLanes),
                (n |= i.subtreeFlags),
                (n |= i.flags),
                (i.return = t),
                (i = i.sibling);
          return (t.subtreeFlags |= n), (t.childLanes = r), e;
        }
        var iS = !1,
          ix = !1,
          iw = "function" == typeof WeakSet ? WeakSet : Set,
          iC = null;
        function ik(t, e) {
          var r = t.ref;
          if (null !== r) {
            if ("function" == typeof r)
              try {
                r(null);
              } catch (r) {
                aV(t, e, r);
              }
            else r.current = null;
          }
        }
        function iP(t, e, r) {
          try {
            r();
          } catch (r) {
            aV(t, e, r);
          }
        }
        var iT = !1;
        function iE(t, e, r) {
          var n = e.updateQueue;
          if (null !== (n = null !== n ? n.lastEffect : null)) {
            var i = (n = n.next);
            do {
              if ((i.tag & t) === t) {
                var a = i.destroy;
                (i.destroy = void 0), void 0 !== a && iP(e, r, a);
              }
              i = i.next;
            } while (i !== n);
          }
        }
        function iF(t, e) {
          if (
            null !== (e = null !== (e = e.updateQueue) ? e.lastEffect : null)
          ) {
            var r = (e = e.next);
            do {
              if ((r.tag & t) === t) {
                var n = r.create;
                r.destroy = n();
              }
              r = r.next;
            } while (r !== e);
          }
        }
        function iM(t) {
          var e = t.ref;
          if (null !== e) {
            var r = t.stateNode;
            (t = 5 === t.tag ? L(r) : r),
              "function" == typeof e ? e(t) : (e.current = t);
          }
        }
        function iN(t) {
          return 5 === t.tag || 3 === t.tag || 4 === t.tag;
        }
        function iA(t) {
          t: for (;;) {
            for (; null === t.sibling; ) {
              if (null === t.return || iN(t.return)) return null;
              t = t.return;
            }
            for (
              t.sibling.return = t.return, t = t.sibling;
              5 !== t.tag && 6 !== t.tag && 18 !== t.tag;

            ) {
              if (2 & t.flags || null === t.child || 4 === t.tag) continue t;
              (t.child.return = t), (t = t.child);
            }
            if (!(2 & t.flags)) return t.stateNode;
          }
        }
        var iR = null,
          iD = !1;
        function iL(t, e, r) {
          for (r = r.child; null !== r; ) iI(t, e, r), (r = r.sibling);
        }
        function iI(t, e, r) {
          if (eG && "function" == typeof eG.onCommitFiberUnmount)
            try {
              eG.onCommitFiberUnmount(eI, r);
            } catch (t) {}
          switch (r.tag) {
            case 5:
              ix || ik(r, e);
            case 6:
              if (Q) {
                var n = iR,
                  i = iD;
                (iR = null),
                  iL(t, e, r),
                  (iR = n),
                  (iD = i),
                  null !== iR &&
                    (iD ? tS(iR, r.stateNode) : t_(iR, r.stateNode));
              } else iL(t, e, r);
              break;
            case 18:
              Q &&
                null !== iR &&
                (iD ? tZ(iR, r.stateNode) : tJ(iR, r.stateNode));
              break;
            case 4:
              Q
                ? ((n = iR),
                  (i = iD),
                  (iR = r.stateNode.containerInfo),
                  (iD = !0),
                  iL(t, e, r),
                  (iR = n),
                  (iD = i))
                : ($ && ((i = tF((n = r.stateNode.containerInfo))), tA(n, i)),
                  iL(t, e, r));
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !ix &&
                null !== (n = r.updateQueue) &&
                null !== (n = n.lastEffect)
              ) {
                i = n = n.next;
                do {
                  var a = i,
                    o = a.destroy;
                  (a = a.tag),
                    void 0 !== o &&
                      (0 != (2 & a)
                        ? iP(r, e, o)
                        : 0 != (4 & a) && iP(r, e, o)),
                    (i = i.next);
                } while (i !== n);
              }
              iL(t, e, r);
              break;
            case 1:
              if (
                !ix &&
                (ik(r, e),
                "function" == typeof (n = r.stateNode).componentWillUnmount)
              )
                try {
                  (n.props = r.memoizedProps),
                    (n.state = r.memoizedState),
                    n.componentWillUnmount();
                } catch (t) {
                  aV(r, e, t);
                }
              iL(t, e, r);
              break;
            case 21:
            default:
              iL(t, e, r);
              break;
            case 22:
              1 & r.mode
                ? ((ix = (n = ix) || null !== r.memoizedState),
                  iL(t, e, r),
                  (ix = n))
                : iL(t, e, r);
          }
        }
        function iG(t) {
          var e = t.updateQueue;
          if (null !== e) {
            t.updateQueue = null;
            var r = t.stateNode;
            null === r && (r = t.stateNode = new iw()),
              e.forEach(function (e) {
                var n = aY.bind(null, t, e);
                r.has(e) || (r.add(e), e.then(n, n));
              });
          }
        }
        function iO(t, e) {
          var r = e.deletions;
          if (null !== r)
            for (var n = 0; n < r.length; n++) {
              var i = r[n];
              try {
                var a = e;
                if (Q) {
                  var o = a;
                  t: for (; null !== o; ) {
                    switch (o.tag) {
                      case 5:
                        (iR = o.stateNode), (iD = !1);
                        break t;
                      case 3:
                      case 4:
                        (iR = o.stateNode.containerInfo), (iD = !0);
                        break t;
                    }
                    o = o.return;
                  }
                  if (null === iR) throw Error(d(160));
                  iI(t, a, i), (iR = null), (iD = !1);
                } else iI(t, a, i);
                var s = i.alternate;
                null !== s && (s.return = null), (i.return = null);
              } catch (t) {
                aV(i, e, t);
              }
            }
          if (12854 & e.subtreeFlags)
            for (e = e.child; null !== e; ) iz(e, t), (e = e.sibling);
        }
        function iz(t, e) {
          var r = t.alternate,
            n = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((iO(e, t), iU(t), 4 & n)) {
                try {
                  iE(3, t, t.return), iF(3, t);
                } catch (e) {
                  aV(t, t.return, e);
                }
                try {
                  iE(5, t, t.return);
                } catch (e) {
                  aV(t, t.return, e);
                }
              }
              break;
            case 1:
              iO(e, t), iU(t), 512 & n && null !== r && ik(r, r.return);
              break;
            case 5:
              if (
                (iO(e, t), iU(t), 512 & n && null !== r && ik(r, r.return), Q)
              ) {
                if (32 & t.flags) {
                  var i = t.stateNode;
                  try {
                    tx(i);
                  } catch (e) {
                    aV(t, t.return, e);
                  }
                }
                if (4 & n && null != (i = t.stateNode)) {
                  var a = t.memoizedProps;
                  if (
                    ((r = null !== r ? r.memoizedProps : a),
                    (n = t.type),
                    (e = t.updateQueue),
                    (t.updateQueue = null),
                    null !== e)
                  )
                    try {
                      tm(i, e, n, r, a, t);
                    } catch (e) {
                      aV(t, t.return, e);
                    }
                }
              }
              break;
            case 6:
              if ((iO(e, t), iU(t), 4 & n && Q)) {
                if (null === t.stateNode) throw Error(d(162));
                (i = t.stateNode),
                  (a = t.memoizedProps),
                  (r = null !== r ? r.memoizedProps : a);
                try {
                  tp(i, r, a);
                } catch (e) {
                  aV(t, t.return, e);
                }
              }
              break;
            case 3:
              if ((iO(e, t), iU(t), 4 & n)) {
                if (Q && J && null !== r && r.memoizedState.isDehydrated)
                  try {
                    tQ(e.containerInfo);
                  } catch (e) {
                    aV(t, t.return, e);
                  }
                if ($) {
                  (i = e.containerInfo), (a = e.pendingChildren);
                  try {
                    tA(i, a);
                  } catch (e) {
                    aV(t, t.return, e);
                  }
                }
              }
              break;
            case 4:
              if ((iO(e, t), iU(t), 4 & n && $)) {
                (i = (a = t.stateNode).containerInfo), (a = a.pendingChildren);
                try {
                  tA(i, a);
                } catch (e) {
                  aV(t, t.return, e);
                }
              }
              break;
            case 13:
              iO(e, t),
                iU(t),
                8192 & (i = t.child).flags &&
                  ((a = null !== i.memoizedState),
                  (i.stateNode.isHidden = a),
                  a &&
                    (null === i.alternate ||
                      null === i.alternate.memoizedState) &&
                    (al = eN())),
                4 & n && iG(t);
              break;
            case 22:
              var o = null !== r && null !== r.memoizedState;
              if (
                (1 & t.mode
                  ? ((ix = (r = ix) || o), iO(e, t), (ix = r))
                  : iO(e, t),
                iU(t),
                8192 & n)
              ) {
                if (
                  ((r = null !== t.memoizedState),
                  (t.stateNode.isHidden = r) && !o && 0 != (1 & t.mode))
                )
                  for (iC = t, n = t.child; null !== n; ) {
                    for (e = iC = n; null !== iC; ) {
                      var s = (o = iC).child;
                      switch (o.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          iE(4, o, o.return);
                          break;
                        case 1:
                          ik(o, o.return);
                          var l = o.stateNode;
                          if ("function" == typeof l.componentWillUnmount) {
                            var h = o,
                              u = o.return;
                            try {
                              (l.props = h.memoizedProps),
                                (l.state = h.memoizedState),
                                l.componentWillUnmount();
                            } catch (t) {
                              aV(h, u, t);
                            }
                          }
                          break;
                        case 5:
                          ik(o, o.return);
                          break;
                        case 22:
                          if (null !== o.memoizedState) {
                            iH(e);
                            continue;
                          }
                      }
                      null !== s ? ((s.return = o), (iC = s)) : iH(e);
                    }
                    n = n.sibling;
                  }
                if (Q) {
                  t: if (((n = null), Q))
                    for (e = t; ; ) {
                      if (5 === e.tag) {
                        if (null === n) {
                          n = e;
                          try {
                            (i = e.stateNode),
                              r ? tw(i) : tk(e.stateNode, e.memoizedProps);
                          } catch (e) {
                            aV(t, t.return, e);
                          }
                        }
                      } else if (6 === e.tag) {
                        if (null === n)
                          try {
                            (a = e.stateNode),
                              r ? tC(a) : tP(a, e.memoizedProps);
                          } catch (e) {
                            aV(t, t.return, e);
                          }
                      } else if (
                        ((22 !== e.tag && 23 !== e.tag) ||
                          null === e.memoizedState ||
                          e === t) &&
                        null !== e.child
                      ) {
                        (e.child.return = e), (e = e.child);
                        continue;
                      }
                      if (e === t) break t;
                      for (; null === e.sibling; ) {
                        if (null === e.return || e.return === t) break t;
                        n === e && (n = null), (e = e.return);
                      }
                      n === e && (n = null),
                        (e.sibling.return = e.return),
                        (e = e.sibling);
                    }
                }
              }
              break;
            case 19:
              iO(e, t), iU(t), 4 & n && iG(t);
              break;
            case 21:
              break;
            default:
              iO(e, t), iU(t);
          }
        }
        function iU(t) {
          var e = t.flags;
          if (2 & e) {
            try {
              if (Q) {
                e: {
                  for (var r = t.return; null !== r; ) {
                    if (iN(r)) {
                      var n = r;
                      break e;
                    }
                    r = r.return;
                  }
                  throw Error(d(160));
                }
                switch (n.tag) {
                  case 5:
                    var i = n.stateNode;
                    32 & n.flags && (tx(i), (n.flags &= -33));
                    var a = iA(t);
                    !(function t(e, r, n) {
                      var i = e.tag;
                      if (5 === i || 6 === i)
                        (e = e.stateNode), r ? ty(n, e, r) : tf(n, e);
                      else if (4 !== i && null !== (e = e.child))
                        for (t(e, r, n), e = e.sibling; null !== e; )
                          t(e, r, n), (e = e.sibling);
                    })(t, a, i);
                    break;
                  case 3:
                  case 4:
                    var o = n.stateNode.containerInfo,
                      s = iA(t);
                    !(function t(e, r, n) {
                      var i = e.tag;
                      if (5 === i || 6 === i)
                        (e = e.stateNode), r ? tb(n, e, r) : tg(n, e);
                      else if (4 !== i && null !== (e = e.child))
                        for (t(e, r, n), e = e.sibling; null !== e; )
                          t(e, r, n), (e = e.sibling);
                    })(t, s, o);
                    break;
                  default:
                    throw Error(d(161));
                }
              }
            } catch (e) {
              aV(t, t.return, e);
            }
            t.flags &= -3;
          }
          4096 & e && (t.flags &= -4097);
        }
        function iB(t) {
          for (; null !== iC; ) {
            var e = iC;
            if (0 != (8772 & e.flags)) {
              var r = e.alternate;
              try {
                if (0 != (8772 & e.flags))
                  switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ix || iF(5, e);
                      break;
                    case 1:
                      var n = e.stateNode;
                      if (4 & e.flags && !ix) {
                        if (null === r) n.componentDidMount();
                        else {
                          var i =
                            e.elementType === e.type
                              ? r.memoizedProps
                              : nz(e.type, r.memoizedProps);
                          n.componentDidUpdate(
                            i,
                            r.memoizedState,
                            n.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      }
                      var a = e.updateQueue;
                      null !== a && rG(e, a, n);
                      break;
                    case 3:
                      var o = e.updateQueue;
                      if (null !== o) {
                        if (((r = null), null !== e.child))
                          switch (e.child.tag) {
                            case 5:
                              r = L(e.child.stateNode);
                              break;
                            case 1:
                              r = e.child.stateNode;
                          }
                        rG(e, o, r);
                      }
                      break;
                    case 5:
                      var s = e.stateNode;
                      null === r &&
                        4 & e.flags &&
                        tv(s, e.type, e.memoizedProps, e);
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (J && null === e.memoizedState) {
                        var l = e.alternate;
                        if (null !== l) {
                          var h = l.memoizedState;
                          if (null !== h) {
                            var u = h.dehydrated;
                            null !== u && t$(u);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(d(163));
                  }
                ix || (512 & e.flags && iM(e));
              } catch (t) {
                aV(e, e.return, t);
              }
            }
            if (e === t) {
              iC = null;
              break;
            }
            if (null !== (r = e.sibling)) {
              (r.return = e.return), (iC = r);
              break;
            }
            iC = e.return;
          }
        }
        function iH(t) {
          for (; null !== iC; ) {
            var e = iC;
            if (e === t) {
              iC = null;
              break;
            }
            var r = e.sibling;
            if (null !== r) {
              (r.return = e.return), (iC = r);
              break;
            }
            iC = e.return;
          }
        }
        function iV(t) {
          for (; null !== iC; ) {
            var e = iC;
            try {
              switch (e.tag) {
                case 0:
                case 11:
                case 15:
                  var r = e.return;
                  try {
                    iF(4, e);
                  } catch (t) {
                    aV(e, r, t);
                  }
                  break;
                case 1:
                  var n = e.stateNode;
                  if ("function" == typeof n.componentDidMount) {
                    var i = e.return;
                    try {
                      n.componentDidMount();
                    } catch (t) {
                      aV(e, i, t);
                    }
                  }
                  var a = e.return;
                  try {
                    iM(e);
                  } catch (t) {
                    aV(e, a, t);
                  }
                  break;
                case 5:
                  var o = e.return;
                  try {
                    iM(e);
                  } catch (t) {
                    aV(e, o, t);
                  }
              }
            } catch (t) {
              aV(e, e.return, t);
            }
            if (e === t) {
              iC = null;
              break;
            }
            var s = e.sibling;
            if (null !== s) {
              (s.return = e.return), (iC = s);
              break;
            }
            iC = e.return;
          }
        }
        var ij = 0,
          iW = 1,
          iK = 2,
          iY = 3,
          iq = 4;
        if ("function" == typeof Symbol && Symbol.for) {
          var iX = Symbol.for;
          (ij = iX("selector.component")),
            (iW = iX("selector.has_pseudo_class")),
            (iK = iX("selector.role")),
            (iY = iX("selector.test_id")),
            (iq = iX("selector.text"));
        }
        function iQ(t) {
          var e = Z(t);
          if (null != e) {
            if ("string" != typeof e.memoizedProps["data-testname"])
              throw Error(d(364));
            return e;
          }
          if (null === (t = to(t))) throw Error(d(362));
          return t.stateNode.current;
        }
        function i$(t, e) {
          switch (e.$$typeof) {
            case ij:
              if (t.type === e.value) return !0;
              break;
            case iW:
              t: {
                (e = e.value), (t = [t, 0]);
                for (var r = 0; r < t.length; ) {
                  var n = t[r++],
                    i = t[r++],
                    a = e[i];
                  if (5 !== n.tag || !th(n)) {
                    for (; null != a && i$(n, a); ) a = e[++i];
                    if (i === e.length) {
                      e = !0;
                      break t;
                    }
                    for (n = n.child; null !== n; )
                      t.push(n, i), (n = n.sibling);
                  }
                }
                e = !1;
              }
              return e;
            case iK:
              if (5 === t.tag && tu(t.stateNode, e.value)) return !0;
              break;
            case iq:
              if (
                (5 === t.tag || 6 === t.tag) &&
                null !== (t = tl(t)) &&
                0 <= t.indexOf(e.value)
              )
                return !0;
              break;
            case iY:
              if (
                5 === t.tag &&
                "string" == typeof (t = t.memoizedProps["data-testname"]) &&
                t.toLowerCase() === e.value.toLowerCase()
              )
                return !0;
              break;
            default:
              throw Error(d(365));
          }
          return !1;
        }
        function iJ(t) {
          switch (t.$$typeof) {
            case ij:
              return "<" + (E(t.value) || "Unknown") + ">";
            case iW:
              return ":has(" + (iJ(t) || "") + ")";
            case iK:
              return '[role="' + t.value + '"]';
            case iq:
              return '"' + t.value + '"';
            case iY:
              return '[data-testname="' + t.value + '"]';
            default:
              throw Error(d(365));
          }
        }
        function iZ(t, e) {
          var r = [];
          t = [t, 0];
          for (var n = 0; n < t.length; ) {
            var i = t[n++],
              a = t[n++],
              o = e[a];
            if (5 !== i.tag || !th(i)) {
              for (; null != o && i$(i, o); ) o = e[++a];
              if (a === e.length) r.push(i);
              else
                for (i = i.child; null !== i; ) t.push(i, a), (i = i.sibling);
            }
          }
          return r;
        }
        function i0(t, e) {
          if (!ta) throw Error(d(363));
          (t = iZ((t = iQ(t)), e)), (e = []), (t = Array.from(t));
          for (var r = 0; r < t.length; ) {
            var n = t[r++];
            if (5 === n.tag) th(n) || e.push(n.stateNode);
            else for (n = n.child; null !== n; ) t.push(n), (n = n.sibling);
          }
          return e;
        }
        var i1 = Math.ceil,
          i2 = c.ReactCurrentDispatcher,
          i4 = c.ReactCurrentOwner,
          i5 = c.ReactCurrentBatchConfig,
          i3 = 0,
          i6 = null,
          i8 = null,
          i7 = 0,
          i9 = 0,
          at = t9(0),
          ae = 0,
          ar = null,
          an = 0,
          ai = 0,
          aa = 0,
          ao = null,
          as = null,
          al = 0,
          ah = 1 / 0,
          au = null;
        function ad() {
          ah = eN() + 500;
        }
        var ac = !1,
          af = null,
          ag = null,
          ap = !1,
          av = null,
          am = 0,
          ay = 0,
          ab = null,
          a_ = -1,
          aS = 0;
        function ax() {
          return 0 != (6 & i3) ? eN() : -1 !== a_ ? a_ : (a_ = eN());
        }
        function aw(t) {
          return 0 == (1 & t.mode)
            ? 1
            : 0 != (2 & i3) && 0 !== i7
            ? i7 & -i7
            : null !== rs.transition
            ? (0 === aS && (aS = eS()), aS)
            : 0 !== (t = ek)
            ? t
            : te();
        }
        function aC(t, e, r, n) {
          if (50 < ay) throw ((ay = 0), (ab = null), Error(d(185)));
          ew(t, r, n),
            (0 == (2 & i3) || t !== i6) &&
              (t === i6 && (0 == (2 & i3) && (ai |= r), 4 === ae && aF(t, i7)),
              ak(t, n),
              1 === r && 0 === i3 && 0 == (1 & e.mode) && (ad(), eU && eV()));
        }
        function ak(t, e) {
          var r,
            n = t.callbackNode;
          !(function (t, e) {
            for (
              var r = t.suspendedLanes,
                n = t.pingedLanes,
                i = t.expirationTimes,
                a = t.pendingLanes;
              0 < a;

            ) {
              var o = 31 - ef(a),
                s = 1 << o,
                l = i[o];
              -1 === l
                ? (0 == (s & r) || 0 != (s & n)) &&
                  (i[o] = (function (t, e) {
                    switch (t) {
                      case 1:
                      case 2:
                      case 4:
                        return e + 250;
                      case 8:
                      case 16:
                      case 32:
                      case 64:
                      case 128:
                      case 256:
                      case 512:
                      case 1024:
                      case 2048:
                      case 4096:
                      case 8192:
                      case 16384:
                      case 32768:
                      case 65536:
                      case 131072:
                      case 262144:
                      case 524288:
                      case 1048576:
                      case 2097152:
                        return e + 5e3;
                      default:
                        return -1;
                    }
                  })(s, e))
                : l <= e && (t.expiredLanes |= s),
                (a &= ~s);
            }
          })(t, e);
          var i = eb(t, t === i6 ? i7 : 0);
          if (0 === i)
            null !== n && eE(n),
              (t.callbackNode = null),
              (t.callbackPriority = 0);
          else if (((e = i & -i), t.callbackPriority !== e)) {
            if ((null != n && eE(n), 1 === e))
              0 === t.tag
                ? ((r = aM.bind(null, t)), (eU = !0), eH(r))
                : eH(aM.bind(null, t)),
                tn
                  ? ti(function () {
                      0 == (6 & i3) && eV();
                    })
                  : eT(eA, eV),
                (n = null);
            else {
              switch (eP(i)) {
                case 1:
                  n = eA;
                  break;
                case 4:
                  n = eR;
                  break;
                case 16:
                default:
                  n = eD;
                  break;
                case 536870912:
                  n = eL;
              }
              n = eT(n, aP.bind(null, t));
            }
            (t.callbackPriority = e), (t.callbackNode = n);
          }
        }
        function aP(t, e) {
          if (((a_ = -1), (aS = 0), 0 != (6 & i3))) throw Error(d(327));
          var r = t.callbackNode;
          if (aB() && t.callbackNode !== r) return null;
          var n = eb(t, t === i6 ? i7 : 0);
          if (0 === n) return null;
          if (0 != (30 & n) || 0 != (n & t.expiredLanes) || e) e = aG(t, n);
          else {
            e = n;
            var i = i3;
            i3 |= 2;
            var a = aL();
            for ((i6 !== t || i7 !== e) && ((au = null), ad(), aR(t, e)); ; )
              try {
                !(function () {
                  for (; null !== i8 && !eF(); ) aO(i8);
                })();
                break;
              } catch (e) {
                aD(t, e);
              }
            rb(),
              (i2.current = a),
              (i3 = i),
              null !== i8 ? (e = 0) : ((i6 = null), (i7 = 0), (e = ae));
          }
          if (0 !== e) {
            if (
              (2 === e && 0 !== (i = e_(t)) && ((n = i), (e = aT(t, i))),
              1 === e)
            )
              throw ((r = ar), aR(t, 0), aF(t, n), ak(t, eN()), r);
            if (6 === e) aF(t, n);
            else {
              if (
                ((i = t.current.alternate),
                0 == (30 & n) &&
                  !(function (t) {
                    for (var e = t; ; ) {
                      if (16384 & e.flags) {
                        var r = e.updateQueue;
                        if (null !== r && null !== (r = r.stores))
                          for (var n = 0; n < r.length; n++) {
                            var i = r[n],
                              a = i.getSnapshot;
                            i = i.value;
                            try {
                              if (!eO(a(), i)) return !1;
                            } catch (t) {
                              return !1;
                            }
                          }
                      }
                      if (((r = e.child), 16384 & e.subtreeFlags && null !== r))
                        (r.return = e), (e = r);
                      else {
                        if (e === t) break;
                        for (; null === e.sibling; ) {
                          if (null === e.return || e.return === t) return !0;
                          e = e.return;
                        }
                        (e.sibling.return = e.return), (e = e.sibling);
                      }
                    }
                    return !0;
                  })(i) &&
                  (2 === (e = aG(t, n)) &&
                    0 !== (a = e_(t)) &&
                    ((n = a), (e = aT(t, a))),
                  1 === e))
              )
                throw ((r = ar), aR(t, 0), aF(t, n), ak(t, eN()), r);
              switch (((t.finishedWork = i), (t.finishedLanes = n), e)) {
                case 0:
                case 1:
                  throw Error(d(345));
                case 2:
                case 5:
                  aU(t, as, au);
                  break;
                case 3:
                  if (
                    (aF(t, n),
                    (130023424 & n) === n && 10 < (e = al + 500 - eN()))
                  ) {
                    if (0 !== eb(t, 0)) break;
                    if (((i = t.suspendedLanes) & n) !== n) {
                      ax(), (t.pingedLanes |= t.suspendedLanes & i);
                      break;
                    }
                    t.timeoutHandle = K(aU.bind(null, t, as, au), e);
                    break;
                  }
                  aU(t, as, au);
                  break;
                case 4:
                  if ((aF(t, n), (4194240 & n) === n)) break;
                  for (i = -1, e = t.eventTimes; 0 < n; ) {
                    var o = 31 - ef(n);
                    (a = 1 << o), (o = e[o]) > i && (i = o), (n &= ~a);
                  }
                  if (
                    ((n = i),
                    10 <
                      (n =
                        (120 > (n = eN() - n)
                          ? 120
                          : 480 > n
                          ? 480
                          : 1080 > n
                          ? 1080
                          : 1920 > n
                          ? 1920
                          : 3e3 > n
                          ? 3e3
                          : 4320 > n
                          ? 4320
                          : 1960 * i1(n / 1960)) - n))
                  ) {
                    t.timeoutHandle = K(aU.bind(null, t, as, au), n);
                    break;
                  }
                  aU(t, as, au);
                  break;
                default:
                  throw Error(d(329));
              }
            }
          }
          return ak(t, eN()), t.callbackNode === r ? aP.bind(null, t) : null;
        }
        function aT(t, e) {
          var r = ao;
          return (
            t.current.memoizedState.isDehydrated && (aR(t, e).flags |= 256),
            2 !== (t = aG(t, e)) && ((e = as), (as = r), null !== e && aE(e)),
            t
          );
        }
        function aE(t) {
          null === as ? (as = t) : as.push.apply(as, t);
        }
        function aF(t, e) {
          for (
            e &= ~aa,
              e &= ~ai,
              t.suspendedLanes |= e,
              t.pingedLanes &= ~e,
              t = t.expirationTimes;
            0 < e;

          ) {
            var r = 31 - ef(e),
              n = 1 << r;
            (t[r] = -1), (e &= ~n);
          }
        }
        function aM(t) {
          if (0 != (6 & i3)) throw Error(d(327));
          aB();
          var e = eb(t, 0);
          if (0 == (1 & e)) return ak(t, eN()), null;
          var r = aG(t, e);
          if (0 !== t.tag && 2 === r) {
            var n = e_(t);
            0 !== n && ((e = n), (r = aT(t, n)));
          }
          if (1 === r) throw ((r = ar), aR(t, 0), aF(t, e), ak(t, eN()), r);
          if (6 === r) throw Error(d(345));
          return (
            (t.finishedWork = t.current.alternate),
            (t.finishedLanes = e),
            aU(t, as, au),
            ak(t, eN()),
            null
          );
        }
        function aN(t) {
          null !== av && 0 === av.tag && 0 == (6 & i3) && aB();
          var e = i3;
          i3 |= 1;
          var r = i5.transition,
            n = ek;
          try {
            if (((i5.transition = null), (ek = 1), t)) return t();
          } finally {
            (ek = n), (i5.transition = r), 0 == (6 & (i3 = e)) && eV();
          }
        }
        function aA() {
          (i9 = at.current), et(at);
        }
        function aR(t, e) {
          (t.finishedWork = null), (t.finishedLanes = 0);
          var r = t.timeoutHandle;
          if ((r !== q && ((t.timeoutHandle = q), Y(r)), null !== i8))
            for (r = i8.return; null !== r; ) {
              var n = r;
              switch ((e2(n), n.tag)) {
                case 1:
                  null != (n = n.type.childContextTypes) && el();
                  break;
                case 3:
                  rj(), et(ei), et(en), rQ();
                  break;
                case 5:
                  rK(n);
                  break;
                case 4:
                  rj();
                  break;
                case 13:
                case 19:
                  et(rY);
                  break;
                case 10:
                  rS(n.type._context);
                  break;
                case 22:
                case 23:
                  aA();
              }
              r = r.return;
            }
          if (
            ((i6 = t),
            (i8 = t = a$(t.current, null)),
            (i7 = i9 = e),
            (ae = 0),
            (ar = null),
            (aa = ai = an = 0),
            (as = ao = null),
            null !== rk)
          ) {
            for (e = 0; e < rk.length; e++)
              if (null !== (n = (r = rk[e]).interleaved)) {
                r.interleaved = null;
                var i = n.next,
                  a = r.pending;
                if (null !== a) {
                  var o = a.next;
                  (a.next = i), (n.next = o);
                }
                r.pending = n;
              }
            rk = null;
          }
          return t;
        }
        function aD(t, e) {
          for (;;) {
            var r = i8;
            try {
              if ((rb(), (r$.current = nL), r4)) {
                for (var n = r0.memoizedState; null !== n; ) {
                  var i = n.queue;
                  null !== i && (i.pending = null), (n = n.next);
                }
                r4 = !1;
              }
              if (
                ((rZ = 0),
                (r2 = r1 = r0 = null),
                (r5 = !1),
                (r3 = 0),
                (i4.current = null),
                null === r || null === r.return)
              ) {
                (ae = 1), (ar = e), (i8 = null);
                break;
              }
              t: {
                var a = t,
                  o = r.return,
                  s = r,
                  l = e;
                if (
                  ((e = i7),
                  (s.flags |= 32768),
                  null !== l &&
                    "object" == typeof l &&
                    "function" == typeof l.then)
                ) {
                  var h = l,
                    u = s,
                    c = u.tag;
                  if (0 == (1 & u.mode) && (0 === c || 11 === c || 15 === c)) {
                    var f = u.alternate;
                    f
                      ? ((u.updateQueue = f.updateQueue),
                        (u.memoizedState = f.memoizedState),
                        (u.lanes = f.lanes))
                      : ((u.updateQueue = null), (u.memoizedState = null));
                  }
                  var g = nZ(o);
                  if (null !== g) {
                    (g.flags &= -257),
                      n0(g, o, s, a, e),
                      1 & g.mode && nJ(a, h, e),
                      (e = g),
                      (l = h);
                    var p = e.updateQueue;
                    if (null === p) {
                      var v = new Set();
                      v.add(l), (e.updateQueue = v);
                    } else p.add(l);
                    break t;
                  }
                  if (0 == (1 & e)) {
                    nJ(a, h, e), aI();
                    break t;
                  }
                  l = Error(d(426));
                } else if (e3 && 1 & s.mode) {
                  var m = nZ(o);
                  if (null !== m) {
                    0 == (65536 & m.flags) && (m.flags |= 256),
                      n0(m, o, s, a, e),
                      ro(nK(l, s));
                    break t;
                  }
                }
                (a = l = nK(l, s)),
                  4 !== ae && (ae = 2),
                  null === ao ? (ao = [a]) : ao.push(a),
                  (a = o);
                do {
                  switch (a.tag) {
                    case 3:
                      (a.flags |= 65536), (e &= -e), (a.lanes |= e);
                      var y = nQ(a, l, e);
                      rL(a, y);
                      break t;
                    case 1:
                      s = l;
                      var b = a.type,
                        _ = a.stateNode;
                      if (
                        0 == (128 & a.flags) &&
                        ("function" == typeof b.getDerivedStateFromError ||
                          (null !== _ &&
                            "function" == typeof _.componentDidCatch &&
                            (null === ag || !ag.has(_))))
                      ) {
                        (a.flags |= 65536), (e &= -e), (a.lanes |= e);
                        var S = n$(a, s, e);
                        rL(a, S);
                        break t;
                      }
                  }
                  a = a.return;
                } while (null !== a);
              }
              az(r);
            } catch (t) {
              (e = t), i8 === r && null !== r && (i8 = r = r.return);
              continue;
            }
            break;
          }
        }
        function aL() {
          var t = i2.current;
          return (i2.current = nL), null === t ? nL : t;
        }
        function aI() {
          (0 === ae || 3 === ae || 2 === ae) && (ae = 4),
            null === i6 ||
              (0 == (268435455 & an) && 0 == (268435455 & ai)) ||
              aF(i6, i7);
        }
        function aG(t, e) {
          var r = i3;
          i3 |= 2;
          var n = aL();
          for ((i6 !== t || i7 !== e) && ((au = null), aR(t, e)); ; )
            try {
              !(function () {
                for (; null !== i8; ) aO(i8);
              })();
              break;
            } catch (e) {
              aD(t, e);
            }
          if ((rb(), (i3 = r), (i2.current = n), null !== i8))
            throw Error(d(261));
          return (i6 = null), (i7 = 0), ae;
        }
        function aO(t) {
          var e = o(t.alternate, t, i9);
          (t.memoizedProps = t.pendingProps),
            null === e ? az(t) : (i8 = e),
            (i4.current = null);
        }
        function az(t) {
          var r = t;
          do {
            var o = r.alternate;
            if (((t = r.return), 0 == (32768 & r.flags))) {
              if (
                null !==
                (o = (function (t, r, o) {
                  var s = r.pendingProps;
                  switch ((e2(r), r.tag)) {
                    case 2:
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                      return i_(r), null;
                    case 1:
                    case 17:
                      return es(r.type) && el(), i_(r), null;
                    case 3:
                      return (
                        (o = r.stateNode),
                        rj(),
                        et(ei),
                        et(en),
                        rQ(),
                        o.pendingContext &&
                          ((o.context = o.pendingContext),
                          (o.pendingContext = null)),
                        (null === t || null === t.child) &&
                          (rn(r)
                            ? iv(r)
                            : null === t ||
                              (t.memoizedState.isDehydrated &&
                                0 == (256 & r.flags)) ||
                              ((r.flags |= 1024),
                              null !== e8 && (aE(e8), (e8 = null)))),
                        n(t, r),
                        i_(r),
                        null
                      );
                    case 5:
                      rK(r), (o = rH(rB.current));
                      var l = r.type;
                      if (null !== t && null != r.stateNode)
                        i(t, r, l, s, o),
                          t.ref !== r.ref &&
                            ((r.flags |= 512), (r.flags |= 2097152));
                      else {
                        if (!s) {
                          if (null === r.stateNode) throw Error(d(166));
                          return i_(r), null;
                        }
                        if (((t = rH(rz.current)), rn(r))) {
                          if (!J) throw Error(d(175));
                          (t = tK(
                            r.stateNode,
                            r.type,
                            r.memoizedProps,
                            o,
                            t,
                            r,
                            !e6
                          )),
                            (r.updateQueue = t),
                            null !== t && iv(r);
                        } else {
                          var h = U(l, s, o, t, r);
                          e(h, r, !1, !1),
                            (r.stateNode = h),
                            H(h, l, s, o, t) && iv(r);
                        }
                        null !== r.ref &&
                          ((r.flags |= 512), (r.flags |= 2097152));
                      }
                      return i_(r), null;
                    case 6:
                      if (t && null != r.stateNode) a(t, r, t.memoizedProps, s);
                      else {
                        if ("string" != typeof s && null === r.stateNode)
                          throw Error(d(166));
                        if (
                          ((t = rH(rB.current)), (o = rH(rz.current)), rn(r))
                        ) {
                          if (!J) throw Error(d(176));
                          if (
                            (s = tY(
                              (t = r.stateNode),
                              (o = r.memoizedProps),
                              r,
                              !e6
                            )) &&
                            null !== (l = e4)
                          )
                            switch (l.tag) {
                              case 3:
                                t1(
                                  l.stateNode.containerInfo,
                                  t,
                                  o,
                                  0 != (1 & l.mode)
                                );
                                break;
                              case 5:
                                t2(
                                  l.type,
                                  l.memoizedProps,
                                  l.stateNode,
                                  t,
                                  o,
                                  0 != (1 & l.mode)
                                );
                            }
                          s && iv(r);
                        } else r.stateNode = W(s, t, o, r);
                      }
                      return i_(r), null;
                    case 13:
                      if (
                        (et(rY),
                        (s = r.memoizedState),
                        null === t ||
                          (null !== t.memoizedState &&
                            null !== t.memoizedState.dehydrated))
                      ) {
                        if (
                          e3 &&
                          null !== e5 &&
                          0 != (1 & r.mode) &&
                          0 == (128 & r.flags)
                        )
                          ri(), ra(), (r.flags |= 98560), (l = !1);
                        else if (
                          ((l = rn(r)), null !== s && null !== s.dehydrated)
                        ) {
                          if (null === t) {
                            if (!l) throw Error(d(318));
                            if (!J) throw Error(d(344));
                            if (
                              !(l =
                                null !== (l = r.memoizedState)
                                  ? l.dehydrated
                                  : null)
                            )
                              throw Error(d(317));
                            tq(l, r);
                          } else
                            ra(),
                              0 == (128 & r.flags) && (r.memoizedState = null),
                              (r.flags |= 4);
                          i_(r), (l = !1);
                        } else null !== e8 && (aE(e8), (e8 = null)), (l = !0);
                        if (!l) return 65536 & r.flags ? r : null;
                      }
                      if (0 != (128 & r.flags)) return (r.lanes = o), r;
                      return (
                        (o = null !== s) !=
                          (null !== t && null !== t.memoizedState) &&
                          o &&
                          ((r.child.flags |= 8192),
                          0 != (1 & r.mode) &&
                            (null === t || 0 != (1 & rY.current)
                              ? 0 === ae && (ae = 3)
                              : aI())),
                        null !== r.updateQueue && (r.flags |= 4),
                        i_(r),
                        null
                      );
                    case 4:
                      return (
                        rj(),
                        n(t, r),
                        null === t && tt(r.stateNode.containerInfo),
                        i_(r),
                        null
                      );
                    case 10:
                      return rS(r.type._context), i_(r), null;
                    case 19:
                      if ((et(rY), null === (l = r.memoizedState)))
                        return i_(r), null;
                      if (
                        ((s = 0 != (128 & r.flags)), null === (h = l.rendering))
                      ) {
                        if (s) ib(l, !1);
                        else {
                          if (0 !== ae || (null !== t && 0 != (128 & t.flags)))
                            for (t = r.child; null !== t; ) {
                              if (null !== (h = rq(t))) {
                                for (
                                  r.flags |= 128,
                                    ib(l, !1),
                                    null !== (t = h.updateQueue) &&
                                      ((r.updateQueue = t), (r.flags |= 4)),
                                    r.subtreeFlags = 0,
                                    t = o,
                                    o = r.child;
                                  null !== o;

                                )
                                  (s = o),
                                    (l = t),
                                    (s.flags &= 14680066),
                                    null === (h = s.alternate)
                                      ? ((s.childLanes = 0),
                                        (s.lanes = l),
                                        (s.child = null),
                                        (s.subtreeFlags = 0),
                                        (s.memoizedProps = null),
                                        (s.memoizedState = null),
                                        (s.updateQueue = null),
                                        (s.dependencies = null),
                                        (s.stateNode = null))
                                      : ((s.childLanes = h.childLanes),
                                        (s.lanes = h.lanes),
                                        (s.child = h.child),
                                        (s.subtreeFlags = 0),
                                        (s.deletions = null),
                                        (s.memoizedProps = h.memoizedProps),
                                        (s.memoizedState = h.memoizedState),
                                        (s.updateQueue = h.updateQueue),
                                        (s.type = h.type),
                                        (l = h.dependencies),
                                        (s.dependencies =
                                          null === l
                                            ? null
                                            : {
                                                lanes: l.lanes,
                                                firstContext: l.firstContext,
                                              })),
                                    (o = o.sibling);
                                return ee(rY, (1 & rY.current) | 2), r.child;
                              }
                              t = t.sibling;
                            }
                          null !== l.tail &&
                            eN() > ah &&
                            ((r.flags |= 128),
                            (s = !0),
                            ib(l, !1),
                            (r.lanes = 4194304));
                        }
                      } else {
                        if (!s) {
                          if (null !== (t = rq(h))) {
                            if (
                              ((r.flags |= 128),
                              (s = !0),
                              null !== (t = t.updateQueue) &&
                                ((r.updateQueue = t), (r.flags |= 4)),
                              ib(l, !0),
                              null === l.tail &&
                                "hidden" === l.tailMode &&
                                !h.alternate &&
                                !e3)
                            )
                              return i_(r), null;
                          } else
                            2 * eN() - l.renderingStartTime > ah &&
                              1073741824 !== o &&
                              ((r.flags |= 128),
                              (s = !0),
                              ib(l, !1),
                              (r.lanes = 4194304));
                        }
                        l.isBackwards
                          ? ((h.sibling = r.child), (r.child = h))
                          : (null !== (t = l.last)
                              ? (t.sibling = h)
                              : (r.child = h),
                            (l.last = h));
                      }
                      if (null !== l.tail)
                        return (
                          (r = l.tail),
                          (l.rendering = r),
                          (l.tail = r.sibling),
                          (l.renderingStartTime = eN()),
                          (r.sibling = null),
                          (t = rY.current),
                          ee(rY, s ? (1 & t) | 2 : 1 & t),
                          r
                        );
                      return i_(r), null;
                    case 22:
                    case 23:
                      return (
                        aA(),
                        (o = null !== r.memoizedState),
                        null !== t &&
                          (null !== t.memoizedState) !== o &&
                          (r.flags |= 8192),
                        o && 0 != (1 & r.mode)
                          ? 0 != (1073741824 & i9) &&
                            (i_(r),
                            Q && 6 & r.subtreeFlags && (r.flags |= 8192))
                          : i_(r),
                        null
                      );
                    case 24:
                    case 25:
                      return null;
                  }
                  throw Error(d(156, r.tag));
                })(o, r, i9))
              ) {
                i8 = o;
                return;
              }
            } else {
              if (
                null !==
                (o = (function (t, e) {
                  switch ((e2(e), e.tag)) {
                    case 1:
                      return (
                        es(e.type) && el(),
                        65536 & (t = e.flags)
                          ? ((e.flags = (-65537 & t) | 128), e)
                          : null
                      );
                    case 3:
                      return (
                        rj(),
                        et(ei),
                        et(en),
                        rQ(),
                        0 != (65536 & (t = e.flags)) && 0 == (128 & t)
                          ? ((e.flags = (-65537 & t) | 128), e)
                          : null
                      );
                    case 5:
                      return rK(e), null;
                    case 13:
                      if (
                        (et(rY),
                        null !== (t = e.memoizedState) && null !== t.dehydrated)
                      ) {
                        if (null === e.alternate) throw Error(d(340));
                        ra();
                      }
                      return 65536 & (t = e.flags)
                        ? ((e.flags = (-65537 & t) | 128), e)
                        : null;
                    case 19:
                      return et(rY), null;
                    case 4:
                      return rj(), null;
                    case 10:
                      return rS(e.type._context), null;
                    case 22:
                    case 23:
                      return aA(), null;
                    default:
                      return null;
                  }
                })(o, r))
              ) {
                (o.flags &= 32767), (i8 = o);
                return;
              }
              if (null !== t)
                (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
              else {
                (ae = 6), (i8 = null);
                return;
              }
            }
            if (null !== (r = r.sibling)) {
              i8 = r;
              return;
            }
            i8 = r = t;
          } while (null !== r);
          0 === ae && (ae = 5);
        }
        function aU(t, e, r) {
          var n = ek,
            i = i5.transition;
          try {
            (i5.transition = null),
              (ek = 1),
              (function (t, e, r, n) {
                do aB();
                while (null !== av);
                if (0 != (6 & i3)) throw Error(d(327));
                r = t.finishedWork;
                var i = t.finishedLanes;
                if (null !== r) {
                  if (
                    ((t.finishedWork = null),
                    (t.finishedLanes = 0),
                    r === t.current)
                  )
                    throw Error(d(177));
                  (t.callbackNode = null), (t.callbackPriority = 0);
                  var a = r.lanes | r.childLanes;
                  if (
                    ((function (t, e) {
                      var r = t.pendingLanes & ~e;
                      (t.pendingLanes = e),
                        (t.suspendedLanes = 0),
                        (t.pingedLanes = 0),
                        (t.expiredLanes &= e),
                        (t.mutableReadLanes &= e),
                        (t.entangledLanes &= e),
                        (e = t.entanglements);
                      var n = t.eventTimes;
                      for (t = t.expirationTimes; 0 < r; ) {
                        var i = 31 - ef(r),
                          a = 1 << i;
                        (e[i] = 0), (n[i] = -1), (t[i] = -1), (r &= ~a);
                      }
                    })(t, a),
                    t === i6 && ((i8 = i6 = null), (i7 = 0)),
                    (0 == (2064 & r.subtreeFlags) && 0 == (2064 & r.flags)) ||
                      ap ||
                      ((ap = !0),
                      (o = eD),
                      (s = function () {
                        return aB(), null;
                      }),
                      eT(o, s)),
                    (a = 0 != (15990 & r.flags)),
                    0 != (15990 & r.subtreeFlags) || a)
                  ) {
                    (a = i5.transition), (i5.transition = null);
                    var o,
                      s,
                      l,
                      h,
                      u,
                      c = ek;
                    ek = 1;
                    var f = i3;
                    (i3 |= 4),
                      (i4.current = null),
                      (function (t, e) {
                        for (O(t.containerInfo), iC = e; null !== iC; )
                          if (
                            ((e = (t = iC).child),
                            0 != (1028 & t.subtreeFlags) && null !== e)
                          )
                            (e.return = t), (iC = e);
                          else
                            for (; null !== iC; ) {
                              t = iC;
                              try {
                                var r = t.alternate;
                                if (0 != (1024 & t.flags))
                                  switch (t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                    case 5:
                                    case 6:
                                    case 4:
                                    case 17:
                                      break;
                                    case 1:
                                      if (null !== r) {
                                        var n = r.memoizedProps,
                                          i = r.memoizedState,
                                          a = t.stateNode,
                                          o = a.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                              ? n
                                              : nz(t.type, n),
                                            i
                                          );
                                        a.__reactInternalSnapshotBeforeUpdate =
                                          o;
                                      }
                                      break;
                                    case 3:
                                      Q && tT(t.stateNode.containerInfo);
                                      break;
                                    default:
                                      throw Error(d(163));
                                  }
                              } catch (e) {
                                aV(t, t.return, e);
                              }
                              if (null !== (e = t.sibling)) {
                                (e.return = t.return), (iC = e);
                                break;
                              }
                              iC = t.return;
                            }
                        (r = iT), (iT = !1);
                      })(t, r),
                      iz(r, t),
                      z(t.containerInfo),
                      (t.current = r),
                      (l = r),
                      (h = t),
                      (u = i),
                      (iC = l),
                      (function t(e, r, n) {
                        for (var i = 0 != (1 & e.mode); null !== iC; ) {
                          var a = iC,
                            o = a.child;
                          if (22 === a.tag && i) {
                            var s = null !== a.memoizedState || iS;
                            if (!s) {
                              var l = a.alternate,
                                h =
                                  (null !== l && null !== l.memoizedState) ||
                                  ix;
                              l = iS;
                              var u = ix;
                              if (((iS = s), (ix = h) && !u))
                                for (iC = a; null !== iC; )
                                  (h = (s = iC).child),
                                    22 === s.tag && null !== s.memoizedState
                                      ? iV(a)
                                      : null !== h
                                      ? ((h.return = s), (iC = h))
                                      : iV(a);
                              for (; null !== o; )
                                (iC = o), t(o, r, n), (o = o.sibling);
                              (iC = a), (iS = l), (ix = u);
                            }
                            iB(e, r, n);
                          } else
                            0 != (8772 & a.subtreeFlags) && null !== o
                              ? ((o.return = a), (iC = o))
                              : iB(e, r, n);
                        }
                      })(l, h, u),
                      eM(),
                      (i3 = f),
                      (ek = c),
                      (i5.transition = a);
                  } else t.current = r;
                  if (
                    (ap && ((ap = !1), (av = t), (am = i)),
                    0 === (a = t.pendingLanes) && (ag = null),
                    (function (t) {
                      if (eG && "function" == typeof eG.onCommitFiberRoot)
                        try {
                          eG.onCommitFiberRoot(
                            eI,
                            t,
                            void 0,
                            128 == (128 & t.current.flags)
                          );
                        } catch (t) {}
                    })(r.stateNode, n),
                    ak(t, eN()),
                    null !== e)
                  )
                    for (n = t.onRecoverableError, r = 0; r < e.length; r++)
                      n((i = e[r]).value, {
                        componentStack: i.stack,
                        digest: i.digest,
                      });
                  if (ac) throw ((ac = !1), (t = af), (af = null), t);
                  0 != (1 & am) && 0 !== t.tag && aB(),
                    0 != (1 & (a = t.pendingLanes))
                      ? t === ab
                        ? ay++
                        : ((ay = 0), (ab = t))
                      : (ay = 0),
                    eV();
                }
              })(t, e, r, n);
          } finally {
            (i5.transition = i), (ek = n);
          }
          return null;
        }
        function aB() {
          if (null !== av) {
            var t = eP(am),
              e = i5.transition,
              r = ek;
            try {
              if (((i5.transition = null), (ek = 16 > t ? 16 : t), null === av))
                var n = !1;
              else {
                if (((t = av), (av = null), (am = 0), 0 != (6 & i3)))
                  throw Error(d(331));
                var i = i3;
                for (i3 |= 4, iC = t.current; null !== iC; ) {
                  var a = iC,
                    o = a.child;
                  if (0 != (16 & iC.flags)) {
                    var s = a.deletions;
                    if (null !== s) {
                      for (var l = 0; l < s.length; l++) {
                        var h = s[l];
                        for (iC = h; null !== iC; ) {
                          var u = iC;
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              iE(8, u, a);
                          }
                          var c = u.child;
                          if (null !== c) (c.return = u), (iC = c);
                          else
                            for (; null !== iC; ) {
                              var f = (u = iC).sibling,
                                g = u.return;
                              if (
                                (!(function t(e) {
                                  var r = e.alternate;
                                  null !== r && ((e.alternate = null), t(r)),
                                    (e.child = null),
                                    (e.deletions = null),
                                    (e.sibling = null),
                                    5 === e.tag &&
                                      null !== (r = e.stateNode) &&
                                      tr(r),
                                    (e.stateNode = null),
                                    (e.return = null),
                                    (e.dependencies = null),
                                    (e.memoizedProps = null),
                                    (e.memoizedState = null),
                                    (e.pendingProps = null),
                                    (e.stateNode = null),
                                    (e.updateQueue = null);
                                })(u),
                                u === h)
                              ) {
                                iC = null;
                                break;
                              }
                              if (null !== f) {
                                (f.return = g), (iC = f);
                                break;
                              }
                              iC = g;
                            }
                        }
                      }
                      var p = a.alternate;
                      if (null !== p) {
                        var v = p.child;
                        if (null !== v) {
                          p.child = null;
                          do {
                            var m = v.sibling;
                            (v.sibling = null), (v = m);
                          } while (null !== v);
                        }
                      }
                      iC = a;
                    }
                  }
                  if (0 != (2064 & a.subtreeFlags) && null !== o)
                    (o.return = a), (iC = o);
                  else
                    for (; null !== iC; ) {
                      if (((a = iC), 0 != (2048 & a.flags)))
                        switch (a.tag) {
                          case 0:
                          case 11:
                          case 15:
                            iE(9, a, a.return);
                        }
                      var y = a.sibling;
                      if (null !== y) {
                        (y.return = a.return), (iC = y);
                        break;
                      }
                      iC = a.return;
                    }
                }
                var b = t.current;
                for (iC = b; null !== iC; ) {
                  var _ = (o = iC).child;
                  if (0 != (2064 & o.subtreeFlags) && null !== _)
                    (_.return = o), (iC = _);
                  else
                    for (o = b; null !== iC; ) {
                      if (((s = iC), 0 != (2048 & s.flags)))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              iF(9, s);
                          }
                        } catch (t) {
                          aV(s, s.return, t);
                        }
                      if (s === o) {
                        iC = null;
                        break;
                      }
                      var S = s.sibling;
                      if (null !== S) {
                        (S.return = s.return), (iC = S);
                        break;
                      }
                      iC = s.return;
                    }
                }
                if (
                  ((i3 = i),
                  eV(),
                  eG && "function" == typeof eG.onPostCommitFiberRoot)
                )
                  try {
                    eG.onPostCommitFiberRoot(eI, t);
                  } catch (t) {}
                n = !0;
              }
              return n;
            } finally {
              (ek = r), (i5.transition = e);
            }
          }
          return !1;
        }
        function aH(t, e, r) {
          (e = nQ(t, (e = nK(r, e)), 1)),
            (t = rR(t, e, 1)),
            (e = ax()),
            null !== t && (ew(t, 1, e), ak(t, e));
        }
        function aV(t, e, r) {
          if (3 === t.tag) aH(t, t, r);
          else
            for (; null !== e; ) {
              if (3 === e.tag) {
                aH(e, t, r);
                break;
              }
              if (1 === e.tag) {
                var n = e.stateNode;
                if (
                  "function" == typeof e.type.getDerivedStateFromError ||
                  ("function" == typeof n.componentDidCatch &&
                    (null === ag || !ag.has(n)))
                ) {
                  (t = n$(e, (t = nK(r, t)), 1)),
                    (e = rR(e, t, 1)),
                    (t = ax()),
                    null !== e && (ew(e, 1, t), ak(e, t));
                  break;
                }
              }
              e = e.return;
            }
        }
        function aj(t, e, r) {
          var n = t.pingCache;
          null !== n && n.delete(e),
            (e = ax()),
            (t.pingedLanes |= t.suspendedLanes & r),
            i6 === t &&
              (i7 & r) === r &&
              (4 === ae ||
              (3 === ae && (130023424 & i7) === i7 && 500 > eN() - al)
                ? aR(t, 0)
                : (aa |= r)),
            ak(t, e);
        }
        function aW(t, e) {
          0 === e &&
            (0 == (1 & t.mode)
              ? (e = 1)
              : ((e = em), 0 == (130023424 & (em <<= 1)) && (em = 4194304)));
          var r = ax();
          null !== (t = rE(t, e)) && (ew(t, e, r), ak(t, r));
        }
        function aK(t) {
          var e = t.memoizedState,
            r = 0;
          null !== e && (r = e.retryLane), aW(t, r);
        }
        function aY(t, e) {
          var r = 0;
          switch (t.tag) {
            case 13:
              var n = t.stateNode,
                i = t.memoizedState;
              null !== i && (r = i.retryLane);
              break;
            case 19:
              n = t.stateNode;
              break;
            default:
              throw Error(d(314));
          }
          null !== n && n.delete(e), aW(t, r);
        }
        function aq(t, e, r, n) {
          (this.tag = t),
            (this.key = r),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = e),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = n),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function aX(t, e, r, n) {
          return new aq(t, e, r, n);
        }
        function aQ(t) {
          return !(!(t = t.prototype) || !t.isReactComponent);
        }
        function a$(t, e) {
          var r = t.alternate;
          return (
            null === r
              ? (((r = aX(t.tag, e, t.key, t.mode)).elementType =
                  t.elementType),
                (r.type = t.type),
                (r.stateNode = t.stateNode),
                (r.alternate = t),
                (t.alternate = r))
              : ((r.pendingProps = e),
                (r.type = t.type),
                (r.flags = 0),
                (r.subtreeFlags = 0),
                (r.deletions = null)),
            (r.flags = 14680064 & t.flags),
            (r.childLanes = t.childLanes),
            (r.lanes = t.lanes),
            (r.child = t.child),
            (r.memoizedProps = t.memoizedProps),
            (r.memoizedState = t.memoizedState),
            (r.updateQueue = t.updateQueue),
            (e = t.dependencies),
            (r.dependencies =
              null === e
                ? null
                : {
                    lanes: e.lanes,
                    firstContext: e.firstContext,
                  }),
            (r.sibling = t.sibling),
            (r.index = t.index),
            (r.ref = t.ref),
            r
          );
        }
        function aJ(t, e, r, n, i, a) {
          var o = 2;
          if (((n = t), "function" == typeof t)) aQ(t) && (o = 1);
          else if ("string" == typeof t) o = 5;
          else
            t: switch (t) {
              case p:
                return aZ(r.children, i, a, e);
              case v:
                (o = 8), (i |= 8);
                break;
              case m:
                return (
                  ((t = aX(12, r, e, 2 | i)).elementType = m), (t.lanes = a), t
                );
              case S:
                return (
                  ((t = aX(13, r, e, i)).elementType = S), (t.lanes = a), t
                );
              case x:
                return (
                  ((t = aX(19, r, e, i)).elementType = x), (t.lanes = a), t
                );
              case k:
                return a0(r, i, a, e);
              default:
                if ("object" == typeof t && null !== t)
                  switch (t.$$typeof) {
                    case y:
                      o = 10;
                      break t;
                    case b:
                      o = 9;
                      break t;
                    case _:
                      o = 11;
                      break t;
                    case w:
                      o = 14;
                      break t;
                    case C:
                      (o = 16), (n = null);
                      break t;
                  }
                throw Error(d(130, null == t ? t : typeof t, ""));
            }
          return (
            ((e = aX(o, r, e, i)).elementType = t),
            (e.type = n),
            (e.lanes = a),
            e
          );
        }
        function aZ(t, e, r, n) {
          return ((t = aX(7, t, n, e)).lanes = r), t;
        }
        function a0(t, e, r, n) {
          return (
            ((t = aX(22, t, n, e)).elementType = k),
            (t.lanes = r),
            (t.stateNode = {
              isHidden: !1,
            }),
            t
          );
        }
        function a1(t, e, r) {
          return ((t = aX(6, t, null, e)).lanes = r), t;
        }
        function a2(t, e, r) {
          return (
            ((e = aX(
              4,
              null !== t.children ? t.children : [],
              t.key,
              e
            )).lanes = r),
            (e.stateNode = {
              containerInfo: t.containerInfo,
              pendingChildren: null,
              implementation: t.implementation,
            }),
            e
          );
        }
        function a4(t, e, r, n, i) {
          (this.tag = e),
            (this.containerInfo = t),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = q),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = ex(0)),
            (this.expirationTimes = ex(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = ex(0)),
            (this.identifierPrefix = n),
            (this.onRecoverableError = i),
            J && (this.mutableSourceEagerHydrationData = null);
        }
        function a5(t, e, r, n, i, a, o, s, l) {
          return (
            (t = new a4(t, e, r, s, l)),
            1 === e ? ((e = 1), !0 === a && (e |= 8)) : (e = 0),
            (a = aX(3, null, null, e)),
            (t.current = a),
            (a.stateNode = t),
            (a.memoizedState = {
              element: n,
              isDehydrated: r,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            rM(a),
            t
          );
        }
        function a3(t) {
          if (!t) return er;
          t = t._reactInternals;
          t: {
            if (F(t) !== t || 1 !== t.tag) throw Error(d(170));
            var e = t;
            do {
              switch (e.tag) {
                case 3:
                  e = e.stateNode.context;
                  break t;
                case 1:
                  if (es(e.type)) {
                    e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              e = e.return;
            } while (null !== e);
            throw Error(d(171));
          }
          if (1 === t.tag) {
            var r = t.type;
            if (es(r)) return eu(t, r, e);
          }
          return e;
        }
        function a6(t) {
          var e = t._reactInternals;
          if (void 0 === e) {
            if ("function" == typeof t.render) throw Error(d(188));
            throw Error(d(268, (t = Object.keys(t).join(","))));
          }
          return null === (t = A(e)) ? null : t.stateNode;
        }
        function a8(t, e) {
          if (null !== (t = t.memoizedState) && null !== t.dehydrated) {
            var r = t.retryLane;
            t.retryLane = 0 !== r && r < e ? r : e;
          }
        }
        function a7(t, e) {
          a8(t, e), (t = t.alternate) && a8(t, e);
        }
        function a9(t) {
          return null === (t = A(t)) ? null : t.stateNode;
        }
        function ot() {
          return null;
        }
        return (
          (o = function (t, e, r) {
            if (null !== t) {
              if (t.memoizedProps !== e.pendingProps || ei.current) n2 = !0;
              else {
                if (0 == (t.lanes & r) && 0 == (128 & e.flags))
                  return (
                    (n2 = !1),
                    (function (t, e, r) {
                      switch (e.tag) {
                        case 3:
                          ir(e), ra();
                          break;
                        case 5:
                          rW(e);
                          break;
                        case 1:
                          es(e.type) && ed(e);
                          break;
                        case 4:
                          rV(e, e.stateNode.containerInfo);
                          break;
                        case 10:
                          r_(e, e.type._context, e.memoizedProps.value);
                          break;
                        case 13:
                          var n = e.memoizedState;
                          if (null !== n) {
                            if (null !== n.dehydrated)
                              return (
                                ee(rY, 1 & rY.current), (e.flags |= 128), null
                              );
                            if (0 != (r & e.child.childLanes))
                              return is(t, e, r);
                            return (
                              ee(rY, 1 & rY.current),
                              null !== (t = ip(t, e, r)) ? t.sibling : null
                            );
                          }
                          ee(rY, 1 & rY.current);
                          break;
                        case 19:
                          if (
                            ((n = 0 != (r & e.childLanes)),
                            0 != (128 & t.flags))
                          ) {
                            if (n) return ic(t, e, r);
                            e.flags |= 128;
                          }
                          var i = e.memoizedState;
                          if (
                            (null !== i &&
                              ((i.rendering = null),
                              (i.tail = null),
                              (i.lastEffect = null)),
                            ee(rY, rY.current),
                            !n)
                          )
                            return null;
                          break;
                        case 22:
                        case 23:
                          return (e.lanes = 0), n8(t, e, r);
                      }
                      return ip(t, e, r);
                    })(t, e, r)
                  );
                n2 = 0 != (131072 & t.flags);
              }
            } else
              (n2 = !1), e3 && 0 != (1048576 & e.flags) && e0(e, eY, e.index);
            switch (((e.lanes = 0), e.tag)) {
              case 2:
                var n = e.type;
                ig(t, e), (t = e.pendingProps);
                var i = eo(e, en.current);
                rw(e, r), (i = r9(null, e, n, t, i, r));
                var a = nt();
                return (
                  (e.flags |= 1),
                  "object" == typeof i &&
                  null !== i &&
                  "function" == typeof i.render &&
                  void 0 === i.$$typeof
                    ? ((e.tag = 1),
                      (e.memoizedState = null),
                      (e.updateQueue = null),
                      es(n) ? ((a = !0), ed(e)) : (a = !1),
                      (e.memoizedState =
                        null !== i.state && void 0 !== i.state
                          ? i.state
                          : null),
                      rM(e),
                      (i.updater = nB),
                      (e.stateNode = i),
                      (i._reactInternals = e),
                      nW(e, n, t, r),
                      (e = ie(null, e, n, !0, a, r)))
                    : ((e.tag = 0),
                      e3 && a && e1(e),
                      n4(null, e, i, r),
                      (e = e.child)),
                  e
                );
              case 16:
                n = e.elementType;
                t: {
                  switch (
                    (ig(t, e),
                    (t = e.pendingProps),
                    (n = (i = n._init)(n._payload)),
                    (e.type = n),
                    (i = e.tag =
                      (function (t) {
                        if ("function" == typeof t) return aQ(t) ? 1 : 0;
                        if (null != t) {
                          if ((t = t.$$typeof) === _) return 11;
                          if (t === w) return 14;
                        }
                        return 2;
                      })(n)),
                    (t = nz(n, t)),
                    i)
                  ) {
                    case 0:
                      e = n9(null, e, n, t, r);
                      break t;
                    case 1:
                      e = it(null, e, n, t, r);
                      break t;
                    case 11:
                      e = n5(null, e, n, t, r);
                      break t;
                    case 14:
                      e = n3(null, e, n, nz(n.type, t), r);
                      break t;
                  }
                  throw Error(d(306, n, ""));
                }
                return e;
              case 0:
                return (
                  (n = e.type),
                  (i = e.pendingProps),
                  (i = e.elementType === n ? i : nz(n, i)),
                  n9(t, e, n, i, r)
                );
              case 1:
                return (
                  (n = e.type),
                  (i = e.pendingProps),
                  (i = e.elementType === n ? i : nz(n, i)),
                  it(t, e, n, i, r)
                );
              case 3:
                t: {
                  if ((ir(e), null === t)) throw Error(d(387));
                  (n = e.pendingProps),
                    (i = (a = e.memoizedState).element),
                    rN(t, e),
                    rI(e, n, null, r);
                  var o = e.memoizedState;
                  if (((n = o.element), J && a.isDehydrated)) {
                    if (
                      ((a = {
                        element: n,
                        isDehydrated: !1,
                        cache: o.cache,
                        pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                        transitions: o.transitions,
                      }),
                      (e.updateQueue.baseState = a),
                      (e.memoizedState = a),
                      256 & e.flags)
                    ) {
                      (i = nK(Error(d(423)), e)), (e = ii(t, e, n, r, i));
                      break t;
                    }
                    if (n !== i) {
                      (i = nK(Error(d(424)), e)), (e = ii(t, e, n, r, i));
                      break t;
                    }
                    for (
                      J &&
                        ((e5 = tj(e.stateNode.containerInfo)),
                        (e4 = e),
                        (e3 = !0),
                        (e8 = null),
                        (e6 = !1)),
                        r = rg(e, null, n, r),
                        e.child = r;
                      r;

                    )
                      (r.flags = (-3 & r.flags) | 4096), (r = r.sibling);
                  } else {
                    if ((ra(), n === i)) {
                      e = ip(t, e, r);
                      break t;
                    }
                    n4(t, e, n, r);
                  }
                  e = e.child;
                }
                return e;
              case 5:
                return (
                  rW(e),
                  null === t && re(e),
                  (n = e.type),
                  (i = e.pendingProps),
                  (a = null !== t ? t.memoizedProps : null),
                  (o = i.children),
                  j(n, i)
                    ? (o = null)
                    : null !== a && j(n, a) && (e.flags |= 32),
                  n7(t, e),
                  n4(t, e, o, r),
                  e.child
                );
              case 6:
                return null === t && re(e), null;
              case 13:
                return is(t, e, r);
              case 4:
                return (
                  rV(e, e.stateNode.containerInfo),
                  (n = e.pendingProps),
                  null === t ? (e.child = rf(e, null, n, r)) : n4(t, e, n, r),
                  e.child
                );
              case 11:
                return (
                  (n = e.type),
                  (i = e.pendingProps),
                  (i = e.elementType === n ? i : nz(n, i)),
                  n5(t, e, n, i, r)
                );
              case 7:
                return n4(t, e, e.pendingProps, r), e.child;
              case 8:
              case 12:
                return n4(t, e, e.pendingProps.children, r), e.child;
              case 10:
                t: {
                  if (
                    ((n = e.type._context),
                    (i = e.pendingProps),
                    (a = e.memoizedProps),
                    r_(e, n, (o = i.value)),
                    null !== a)
                  ) {
                    if (eO(a.value, o)) {
                      if (a.children === i.children && !ei.current) {
                        e = ip(t, e, r);
                        break t;
                      }
                    } else
                      for (
                        null !== (a = e.child) && (a.return = e);
                        null !== a;

                      ) {
                        var s = a.dependencies;
                        if (null !== s) {
                          o = a.child;
                          for (var l = s.firstContext; null !== l; ) {
                            if (l.context === n) {
                              if (1 === a.tag) {
                                (l = rA(-1, r & -r)).tag = 2;
                                var h = a.updateQueue;
                                if (null !== h) {
                                  var u = (h = h.shared).pending;
                                  null === u
                                    ? (l.next = l)
                                    : ((l.next = u.next), (u.next = l)),
                                    (h.pending = l);
                                }
                              }
                              (a.lanes |= r),
                                null !== (l = a.alternate) && (l.lanes |= r),
                                rx(a.return, r, e),
                                (s.lanes |= r);
                              break;
                            }
                            l = l.next;
                          }
                        } else if (10 === a.tag)
                          o = a.type === e.type ? null : a.child;
                        else if (18 === a.tag) {
                          if (null === (o = a.return)) throw Error(d(341));
                          (o.lanes |= r),
                            null !== (s = o.alternate) && (s.lanes |= r),
                            rx(o, r, e),
                            (o = a.sibling);
                        } else o = a.child;
                        if (null !== o) o.return = a;
                        else
                          for (o = a; null !== o; ) {
                            if (o === e) {
                              o = null;
                              break;
                            }
                            if (null !== (a = o.sibling)) {
                              (a.return = o.return), (o = a);
                              break;
                            }
                            o = o.return;
                          }
                        a = o;
                      }
                  }
                  n4(t, e, i.children, r), (e = e.child);
                }
                return e;
              case 9:
                return (
                  (i = e.type),
                  (n = e.pendingProps.children),
                  rw(e, r),
                  (n = n((i = rC(i)))),
                  (e.flags |= 1),
                  n4(t, e, n, r),
                  e.child
                );
              case 14:
                return (
                  (i = nz((n = e.type), e.pendingProps)),
                  (i = nz(n.type, i)),
                  n3(t, e, n, i, r)
                );
              case 15:
                return n6(t, e, e.type, e.pendingProps, r);
              case 17:
                return (
                  (n = e.type),
                  (i = e.pendingProps),
                  (i = e.elementType === n ? i : nz(n, i)),
                  ig(t, e),
                  (e.tag = 1),
                  es(n) ? ((t = !0), ed(e)) : (t = !1),
                  rw(e, r),
                  nV(e, n, i),
                  nW(e, n, i, r),
                  ie(null, e, n, !0, t, r)
                );
              case 19:
                return ic(t, e, r);
              case 22:
                return n8(t, e, r);
            }
            throw Error(d(156, e.tag));
          }),
          (s.attemptContinuousHydration = function (t) {
            if (13 === t.tag) {
              var e = rE(t, 134217728);
              null !== e && aC(e, t, 134217728, ax()), a7(t, 134217728);
            }
          }),
          (s.attemptDiscreteHydration = function (t) {
            if (13 === t.tag) {
              var e = rE(t, 1);
              null !== e && aC(e, t, 1, ax()), a7(t, 1);
            }
          }),
          (s.attemptHydrationAtCurrentPriority = function (t) {
            if (13 === t.tag) {
              var e = aw(t),
                r = rE(t, e);
              null !== r && aC(r, t, e, ax()), a7(t, e);
            }
          }),
          (s.attemptSynchronousHydration = function (t) {
            switch (t.tag) {
              case 3:
                var e = t.stateNode;
                if (e.current.memoizedState.isDehydrated) {
                  var r = ey(e.pendingLanes);
                  0 !== r &&
                    (eC(e, 1 | r), ak(e, eN()), 0 == (6 & i3) && (ad(), eV()));
                }
                break;
              case 13:
                aN(function () {
                  var e = rE(t, 1);
                  null !== e && aC(e, t, 1, ax());
                }),
                  a7(t, 1);
            }
          }),
          (s.batchedUpdates = function (t, e) {
            var r = i3;
            i3 |= 1;
            try {
              return t(e);
            } finally {
              0 === (i3 = r) && (ad(), eU && eV());
            }
          }),
          (s.createComponentSelector = function (t) {
            return {
              $$typeof: ij,
              value: t,
            };
          }),
          (s.createContainer = function (t, e, r, n, i, a, o) {
            return a5(t, e, !1, null, r, n, i, a, o);
          }),
          (s.createHasPseudoClassSelector = function (t) {
            return {
              $$typeof: iW,
              value: t,
            };
          }),
          (s.createHydrationContainer = function (t, e, r, n, i, a, o, s, l) {
            return (
              ((t = a5(r, n, !0, t, i, a, o, s, l)).context = a3(null)),
              (r = t.current),
              ((a = rA((n = ax()), (i = aw(r)))).callback =
                null != e ? e : null),
              rR(r, a, i),
              (t.current.lanes = i),
              ew(t, i, n),
              ak(t, n),
              t
            );
          }),
          (s.createPortal = function (t, e, r) {
            var n =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return {
              $$typeof: g,
              key: null == n ? null : "" + n,
              children: t,
              containerInfo: e,
              implementation: r,
            };
          }),
          (s.createRoleSelector = function (t) {
            return {
              $$typeof: iK,
              value: t,
            };
          }),
          (s.createTestNameSelector = function (t) {
            return {
              $$typeof: iY,
              value: t,
            };
          }),
          (s.createTextSelector = function (t) {
            return {
              $$typeof: iq,
              value: t,
            };
          }),
          (s.deferredUpdates = function (t) {
            var e = ek,
              r = i5.transition;
            try {
              return (i5.transition = null), (ek = 16), t();
            } finally {
              (ek = e), (i5.transition = r);
            }
          }),
          (s.discreteUpdates = function (t, e, r, n, i) {
            var a = ek,
              o = i5.transition;
            try {
              return (i5.transition = null), (ek = 1), t(e, r, n, i);
            } finally {
              (ek = a), (i5.transition = o), 0 === i3 && ad();
            }
          }),
          (s.findAllNodes = i0),
          (s.findBoundingRects = function (t, e) {
            if (!ta) throw Error(d(363));
            (e = i0(t, e)), (t = []);
            for (var r = 0; r < e.length; r++) t.push(ts(e[r]));
            for (e = t.length - 1; 0 < e; e--) {
              r = t[e];
              for (
                var n = r.x,
                  i = n + r.width,
                  a = r.y,
                  o = a + r.height,
                  s = e - 1;
                0 <= s;
                s--
              )
                if (e !== s) {
                  var l = t[s],
                    h = l.x,
                    u = h + l.width,
                    c = l.y,
                    f = c + l.height;
                  if (n >= h && a >= c && i <= u && o <= f) {
                    t.splice(e, 1);
                    break;
                  }
                  if (n !== h || r.width !== l.width || f < a || c > o) {
                    if (!(a !== c || r.height !== l.height || u < n || h > i)) {
                      h > n && ((l.width += h - n), (l.x = n)),
                        u < i && (l.width = i - h),
                        t.splice(e, 1);
                      break;
                    }
                  } else {
                    c > a && ((l.height += c - a), (l.y = a)),
                      f < o && (l.height = o - c),
                      t.splice(e, 1);
                    break;
                  }
                }
            }
            return t;
          }),
          (s.findHostInstance = a6),
          (s.findHostInstanceWithNoPortals = function (t) {
            return null ===
              (t =
                null !== (t = N(t))
                  ? (function t(e) {
                      if (5 === e.tag || 6 === e.tag) return e;
                      for (e = e.child; null !== e; ) {
                        if (4 !== e.tag) {
                          var r = t(e);
                          if (null !== r) return r;
                        }
                        e = e.sibling;
                      }
                      return null;
                    })(t)
                  : null)
              ? null
              : t.stateNode;
          }),
          (s.findHostInstanceWithWarning = function (t) {
            return a6(t);
          }),
          (s.flushControlled = function (t) {
            var e = i3;
            i3 |= 1;
            var r = i5.transition,
              n = ek;
            try {
              (i5.transition = null), (ek = 1), t();
            } finally {
              (ek = n), (i5.transition = r), 0 === (i3 = e) && (ad(), eV());
            }
          }),
          (s.flushPassiveEffects = aB),
          (s.flushSync = aN),
          (s.focusWithin = function (t, e) {
            if (!ta) throw Error(d(363));
            for (
              e = Array.from((e = iZ((t = iQ(t)), e))), t = 0;
              t < e.length;

            ) {
              var r = e[t++];
              if (!th(r)) {
                if (5 === r.tag && td(r.stateNode)) return !0;
                for (r = r.child; null !== r; ) e.push(r), (r = r.sibling);
              }
            }
            return !1;
          }),
          (s.getCurrentUpdatePriority = function () {
            return ek;
          }),
          (s.getFindAllNodesFailureDescription = function (t, e) {
            if (!ta) throw Error(d(363));
            var r = 0,
              n = [];
            t = [iQ(t), 0];
            for (var i = 0; i < t.length; ) {
              var a = t[i++],
                o = t[i++],
                s = e[o];
              if (
                (5 !== a.tag || !th(a)) &&
                (i$(a, s) && (n.push(iJ(s)), ++o > r && (r = o)), o < e.length)
              )
                for (a = a.child; null !== a; ) t.push(a, o), (a = a.sibling);
            }
            if (r < e.length) {
              for (t = []; r < e.length; r++) t.push(iJ(e[r]));
              return (
                "findAllNodes was able to match part of the selector:\n  " +
                n.join(" > ") +
                "\n\nNo matching component was found for:\n  " +
                t.join(" > ")
              );
            }
            return null;
          }),
          (s.getPublicRootInstance = function (t) {
            return (t = t.current).child
              ? 5 === t.child.tag
                ? L(t.child.stateNode)
                : t.child.stateNode
              : null;
          }),
          (s.injectIntoDevTools = function (t) {
            if (
              ((t = {
                bundleType: t.bundleType,
                version: t.version,
                rendererPackageName: t.rendererPackageName,
                rendererConfig: t.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: c.ReactCurrentDispatcher,
                findHostInstanceByFiber: a9,
                findFiberByHostInstance: t.findFiberByHostInstance || ot,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.3.1",
              }),
              "undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
            )
              t = !1;
            else {
              var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
              if (e.isDisabled || !e.supportsFiber) t = !0;
              else {
                try {
                  (eI = e.inject(t)), (eG = e);
                } catch (t) {}
                t = !!e.checkDCE;
              }
            }
            return t;
          }),
          (s.isAlreadyRendering = function () {
            return !1;
          }),
          (s.observeVisibleRects = function (t, e, r, n) {
            if (!ta) throw Error(d(363));
            var i = tc((t = i0(t, e)), r, n).disconnect;
            return {
              disconnect: function () {
                i();
              },
            };
          }),
          (s.registerMutableSourceForHydration = function (t, e) {
            var r = e._getVersion;
            (r = r(e._source)),
              null == t.mutableSourceEagerHydrationData
                ? (t.mutableSourceEagerHydrationData = [e, r])
                : t.mutableSourceEagerHydrationData.push(e, r);
          }),
          (s.runWithPriority = function (t, e) {
            var r = ek;
            try {
              return (ek = t), e();
            } finally {
              ek = r;
            }
          }),
          (s.shouldError = function () {
            return null;
          }),
          (s.shouldSuspend = function () {
            return !1;
          }),
          (s.updateContainer = function (t, e, r, n) {
            var i = e.current,
              a = ax(),
              o = aw(i);
            return (
              (r = a3(r)),
              null === e.context ? (e.context = r) : (e.pendingContext = r),
              ((e = rA(a, o)).payload = {
                element: t,
              }),
              null !== (n = void 0 === n ? null : n) && (e.callback = n),
              null !== (t = rR(i, e, o)) && (aC(t, i, o, a), rD(t, i, o)),
              o
            );
          }),
          s
        );
      };
    },
    2777: function (t, e, r) {
      "use strict";
      t.exports = r(4008);
    },
    1543: function (t, e, r) {
      "use strict";
      t.exports = r(4185);
    },
    2599: function (t, e) {
      "use strict";
      /**
       * @license React
       * scheduler.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      function r(t, e) {
        var r = t.length;
        for (t.push(e); 0 < r; ) {
          var n = (r - 1) >>> 1,
            i = t[n];
          if (0 < a(i, e)) (t[n] = e), (t[r] = i), (r = n);
          else break;
        }
      }
      function n(t) {
        return 0 === t.length ? null : t[0];
      }
      function i(t) {
        if (0 === t.length) return null;
        var e = t[0],
          r = t.pop();
        if (r !== e) {
          t[0] = r;
          for (var n = 0, i = t.length, o = i >>> 1; n < o; ) {
            var s = 2 * (n + 1) - 1,
              l = t[s],
              h = s + 1,
              u = t[h];
            if (0 > a(l, r))
              h < i && 0 > a(u, l)
                ? ((t[n] = u), (t[h] = r), (n = h))
                : ((t[n] = l), (t[s] = r), (n = s));
            else if (h < i && 0 > a(u, r)) (t[n] = u), (t[h] = r), (n = h);
            else break;
          }
        }
        return e;
      }
      function a(t, e) {
        var r = t.sortIndex - e.sortIndex;
        return 0 !== r ? r : t.id - e.id;
      }
      if (
        "object" == typeof performance &&
        "function" == typeof performance.now
      ) {
        var o,
          s = performance;
        e.unstable_now = function () {
          return s.now();
        };
      } else {
        var l = Date,
          h = l.now();
        e.unstable_now = function () {
          return l.now() - h;
        };
      }
      var u = [],
        d = [],
        c = 1,
        f = null,
        g = 3,
        p = !1,
        v = !1,
        m = !1,
        y = "function" == typeof setTimeout ? setTimeout : null,
        b = "function" == typeof clearTimeout ? clearTimeout : null,
        _ = "undefined" != typeof setImmediate ? setImmediate : null;
      function S(t) {
        for (var e = n(d); null !== e; ) {
          if (null === e.callback) i(d);
          else if (e.startTime <= t)
            i(d), (e.sortIndex = e.expirationTime), r(u, e);
          else break;
          e = n(d);
        }
      }
      function x(t) {
        if (((m = !1), S(t), !v)) {
          if (null !== n(u)) (v = !0), R(w);
          else {
            var e = n(d);
            null !== e && D(x, e.startTime - t);
          }
        }
      }
      function w(t, r) {
        (v = !1), m && ((m = !1), b(P), (P = -1)), (p = !0);
        var a = g;
        try {
          for (
            S(r), f = n(u);
            null !== f && (!(f.expirationTime > r) || (t && !F()));

          ) {
            var o = f.callback;
            if ("function" == typeof o) {
              (f.callback = null), (g = f.priorityLevel);
              var s = o(f.expirationTime <= r);
              (r = e.unstable_now()),
                "function" == typeof s ? (f.callback = s) : f === n(u) && i(u),
                S(r);
            } else i(u);
            f = n(u);
          }
          if (null !== f) var l = !0;
          else {
            var h = n(d);
            null !== h && D(x, h.startTime - r), (l = !1);
          }
          return l;
        } finally {
          (f = null), (g = a), (p = !1);
        }
      }
      "undefined" != typeof navigator &&
        void 0 !== navigator.scheduling &&
        void 0 !== navigator.scheduling.isInputPending &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
      var C = !1,
        k = null,
        P = -1,
        T = 5,
        E = -1;
      function F() {
        return !(e.unstable_now() - E < T);
      }
      function M() {
        if (null !== k) {
          var t = e.unstable_now();
          E = t;
          var r = !0;
          try {
            r = k(!0, t);
          } finally {
            r ? o() : ((C = !1), (k = null));
          }
        } else C = !1;
      }
      if ("function" == typeof _)
        o = function () {
          _(M);
        };
      else if ("undefined" != typeof MessageChannel) {
        var N = new MessageChannel(),
          A = N.port2;
        (N.port1.onmessage = M),
          (o = function () {
            A.postMessage(null);
          });
      } else
        o = function () {
          y(M, 0);
        };
      function R(t) {
        (k = t), C || ((C = !0), o());
      }
      function D(t, r) {
        P = y(function () {
          t(e.unstable_now());
        }, r);
      }
      (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (t) {
          t.callback = null;
        }),
        (e.unstable_continueExecution = function () {
          v || p || ((v = !0), R(w));
        }),
        (e.unstable_forceFrameRate = function (t) {
          0 > t || 125 < t
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
            : (T = 0 < t ? Math.floor(1e3 / t) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
          return g;
        }),
        (e.unstable_getFirstCallbackNode = function () {
          return n(u);
        }),
        (e.unstable_next = function (t) {
          switch (g) {
            case 1:
            case 2:
            case 3:
              var e = 3;
              break;
            default:
              e = g;
          }
          var r = g;
          g = e;
          try {
            return t();
          } finally {
            g = r;
          }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (t, e) {
          switch (t) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              t = 3;
          }
          var r = g;
          g = t;
          try {
            return e();
          } finally {
            g = r;
          }
        }),
        (e.unstable_scheduleCallback = function (t, i, a) {
          var o = e.unstable_now();
          switch (
            ((a =
              "object" == typeof a &&
              null !== a &&
              "number" == typeof (a = a.delay) &&
              0 < a
                ? o + a
                : o),
            t)
          ) {
            case 1:
              var s = -1;
              break;
            case 2:
              s = 250;
              break;
            case 5:
              s = 1073741823;
              break;
            case 4:
              s = 1e4;
              break;
            default:
              s = 5e3;
          }
          return (
            (s = a + s),
            (t = {
              id: c++,
              callback: i,
              priorityLevel: t,
              startTime: a,
              expirationTime: s,
              sortIndex: -1,
            }),
            a > o
              ? ((t.sortIndex = a),
                r(d, t),
                null === n(u) &&
                  t === n(d) &&
                  (m ? (b(P), (P = -1)) : (m = !0), D(x, a - o)))
              : ((t.sortIndex = s), r(u, t), v || p || ((v = !0), R(w))),
            t
          );
        }),
        (e.unstable_shouldYield = F),
        (e.unstable_wrapCallback = function (t) {
          var e = g;
          return function () {
            var r = g;
            g = e;
            try {
              return t.apply(this, arguments);
            } finally {
              g = r;
            }
          };
        });
    },
    7494: function (t, e, r) {
      "use strict";
      t.exports = r(2599);
    },
    140: function (t, e, r) {
      var n = r(2265);
      t.exports = function (t, e, r) {
        let i = n.useRef("loading"),
          a = n.useRef(),
          [o, s] = n.useState(0),
          l = n.useRef(),
          h = n.useRef(),
          u = n.useRef();
        return (
          (l.current !== t || h.current !== e || u.current !== r) &&
            ((i.current = "loading"),
            (a.current = void 0),
            (l.current = t),
            (h.current = e),
            (u.current = r)),
          n.useLayoutEffect(
            function () {
              if (t) {
                var n = document.createElement("img");
                return (
                  n.addEventListener("load", o),
                  n.addEventListener("error", l),
                  e && (n.crossOrigin = e),
                  r && (n.referrerPolicy = r),
                  (n.src = t),
                  function () {
                    n.removeEventListener("load", o),
                      n.removeEventListener("error", l);
                  }
                );
              }
              function o() {
                (i.current = "loaded"), (a.current = n), s(Math.random());
              }
              function l() {
                (i.current = "failed"), (a.current = void 0), s(Math.random());
              }
            },
            [t, e, r]
          ),
          [a.current, i.current]
        );
      };
    },
  },
]);
