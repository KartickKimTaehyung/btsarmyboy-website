document.addEventListener("DOMContentLoaded", function() {
    // Add any JavaScript functionality here if needed
});






(function() {
    function t(t, n, i) {
        return t.call.apply(t.bind, arguments)
    }
    function n(t, n, i) {
        if (!t)
            throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function() {
                var i = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(i, e);
                return t.apply(n, i)
            }
        }
        return function() {
            return t.apply(n, arguments)
        }
    }
    function i(e, o, a) {
        i = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? t : n;
        return i.apply(null, arguments)
    }
    var e = Date.now || function() {
        return +new Date
    }
    ;
    function o(t, n) {
        this.a = t;
        this.o = n || t;
        this.c = this.o.document
    }
    var a = !!window.FontFace;
    function s(t, n, i, e) {
        n = t.c.createElement(n);
        if (i)
            for (var o in i)
                i.hasOwnProperty(o) && ("style" == o ? n.style.cssText = i[o] : n.setAttribute(o, i[o]));
        e && n.appendChild(t.c.createTextNode(e));
        return n
    }
    function r(t, n, i) {
        t = t.c.getElementsByTagName(n)[0];
        t || (t = document.documentElement);
        t.insertBefore(i, t.lastChild)
    }
    function f(t) {
        t.parentNode && t.parentNode.removeChild(t)
    }
    function c(t, n, i) {
        n = n || [];
        i = i || [];
        for (var e = t.className.split(/\s+/), o = 0; o < n.length; o += 1) {
            for (var a = !1, s = 0; s < e.length; s += 1)
                if (n[o] === e[s]) {
                    a = !0;
                    break
                }
            a || e.push(n[o])
        }
        n = [];
        for (o = 0; o < e.length; o += 1) {
            a = !1;
            for (s = 0; s < i.length; s += 1)
                if (e[o] === i[s]) {
                    a = !0;
                    break
                }
            a || n.push(e[o])
        }
        t.className = n.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }
    function h(t, n) {
        for (var i = t.className.split(/\s+/), e = 0, o = i.length; e < o; e++)
            if (i[e] == n)
                return !0;
        return !1
    }
    function l(t) {
        return t.o.location.hostname || t.a.location.hostname
    }
    function u(t, n, i) {
        function e() {
            h && o && f && (h(c),
            h = null)
        }
        n = s(t, "link", {
            rel: "stylesheet",
            href: n,
            media: "all"
        });
        var o = !1
          , f = !0
          , c = null
          , h = i || null;
        a ? (n.onload = function() {
            o = !0;
            e()
        }
        ,
        n.onerror = function() {
            o = !0;
            c = Error("Stylesheet failed to load");
            e()
        }
        ) : setTimeout(function() {
            o = !0;
            e()
        }, 0);
        r(t, "head", n)
    }
    function p(t, n, i, e) {
        var o = t.c.getElementsByTagName("head")[0];
        if (o) {
            var a = s(t, "script", {
                src: n
            })
              , r = !1;
            a.onload = a.onreadystatechange = function() {
                r || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (r = !0,
                i && i(null),
                a.onload = a.onreadystatechange = null,
                "HEAD" == a.parentNode.tagName && o.removeChild(a))
            }
            ;
            o.appendChild(a);
            setTimeout(function() {
                r || (r = !0,
                i && i(Error("Script load timeout")))
            }, e || 5e3);
            return a
        }
        return null
    }
    ;function d() {
        this.a = 0;
        this.c = null
    }
    function g(t) {
        t.a++;
        return function() {
            t.a--;
            w(t)
        }
    }
    function v(t, n) {
        t.c = n;
        w(t)
    }
    function w(t) {
        0 == t.a && t.c && (t.c(),
        t.c = null)
    }
    ;function m(t) {
        this.a = t || "-"
    }
    m.prototype.c = function(t) {
        for (var n = [], i = 0; i < arguments.length; i++)
            n.push(arguments[i].replace(/[\W_]+/g, "").toLowerCase());
        return n.join(this.a)
    }
    ;
    function y(t, n) {
        this.c = t;
        this.f = 4;
        this.a = "n";
        var i = (n || "n4").match(/^([nio])([1-9])$/i);
        i && (this.a = i[1],
        this.f = parseInt(i[2], 10))
    }
    function b(t) {
        return _(t) + " " + (t.f + "00") + " 300px " + x(t.c)
    }
    function x(t) {
        var n = [];
        t = t.split(/,\s*/);
        for (var i = 0; i < t.length; i++) {
            var e = t[i].replace(/['"]/g, "");
            -1 != e.indexOf(" ") || /^\d/.test(e) ? n.push("'" + e + "'") : n.push(e)
        }
        return n.join(",")
    }
    function j(t) {
        return t.a + t.f
    }
    function _(t) {
        var n = "normal";
        "o" === t.a ? n = "oblique" : "i" === t.a && (n = "italic");
        return n
    }
    function k(t) {
        var n = 4
          , i = "n"
          , e = null;
        t && ((e = t.match(/(normal|oblique|italic)/i)) && e[1] && (i = e[1].substr(0, 1).toLowerCase()),
        (e = t.match(/([1-9]00|normal|bold)/i)) && e[1] && (/bold/i.test(e[1]) ? n = 7 : /[1-9]00/.test(e[1]) && (n = parseInt(e[1].substr(0, 1), 10))));
        return i + n
    }
    ;function T(t, n) {
        this.c = t;
        this.f = t.o.document.documentElement;
        this.h = n;
        this.a = new m("-");
        this.j = !1 !== n.events;
        this.g = !1 !== n.classes
    }
    function S(t) {
        t.g && c(t.f, [t.a.c("wf", "loading")]);
        A(t, "loading")
    }
    function C(t) {
        if (t.g) {
            var n = h(t.f, t.a.c("wf", "active"))
              , i = []
              , e = [t.a.c("wf", "loading")];
            n || i.push(t.a.c("wf", "inactive"));
            c(t.f, i, e)
        }
        A(t, "inactive")
    }
    function A(t, n, i) {
        if (t.j && t.h[n])
            if (i)
                t.h[n](i.c, j(i));
            else
                t.h[n]()
    }
    ;function N() {
        this.c = {}
    }
    function E(t, n, i) {
        var e = [], o;
        for (o in n)
            if (n.hasOwnProperty(o)) {
                var a = t.c[o];
                a && e.push(a(n[o], i))
            }
        return e
    }
    ;function W(t, n) {
        this.c = t;
        this.f = n;
        this.a = s(this.c, "span", {
            "aria-hidden": "true"
        }, this.f)
    }
    function F(t) {
        r(t.c, "body", t.a)
    }
    function I(t) {
        return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + x(t.c) + ";" + ("font-style:" + _(t) + ";font-weight:" + (t.f + "00") + ";")
    }
    ;function O(t, n, i, e, o, a) {
        this.g = t;
        this.j = n;
        this.a = e;
        this.c = i;
        this.f = o || 3e3;
        this.h = a || void 0
    }
    O.prototype.start = function() {
        var t = this.c.o.document
          , n = this
          , i = e()
          , o = new Promise(function(o, a) {
            function s() {
                e() - i >= n.f ? a() : t.fonts.load(b(n.a), n.h).then(function(t) {
                    1 <= t.length ? o() : setTimeout(s, 25)
                }, function() {
                    a()
                })
            }
            s()
        }
        )
          , a = null
          , s = new Promise(function(t, i) {
            a = setTimeout(i, n.f)
        }
        );
        Promise.race([s, o]).then(function() {
            a && (clearTimeout(a),
            a = null);
            n.g(n.a)
        }, function() {
            n.j(n.a)
        })
    }
    ;
    function P(t, n, i, e, o, a, s) {
        this.v = t;
        this.B = n;
        this.c = i;
        this.a = e;
        this.s = s || "BESbswy";
        this.f = {};
        this.w = o || 3e3;
        this.u = a || null;
        this.m = this.j = this.h = this.g = null;
        this.g = new W(this.c,this.s);
        this.h = new W(this.c,this.s);
        this.j = new W(this.c,this.s);
        this.m = new W(this.c,this.s);
        t = new y(this.a.c + ",serif",j(this.a));
        t = I(t);
        this.g.a.style.cssText = t;
        t = new y(this.a.c + ",sans-serif",j(this.a));
        t = I(t);
        this.h.a.style.cssText = t;
        t = new y("serif",j(this.a));
        t = I(t);
        this.j.a.style.cssText = t;
        t = new y("sans-serif",j(this.a));
        t = I(t);
        this.m.a.style.cssText = t;
        F(this.g);
        F(this.h);
        F(this.j);
        F(this.m)
    }
    var B = {
        D: "serif",
        C: "sans-serif"
    }
      , L = null;
    function D() {
        if (null === L) {
            var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            L = !!t && (536 > parseInt(t[1], 10) || 536 === parseInt(t[1], 10) && 11 >= parseInt(t[2], 10))
        }
        return L
    }
    P.prototype.start = function() {
        this.f.serif = this.j.a.offsetWidth;
        this.f["sans-serif"] = this.m.a.offsetWidth;
        this.A = e();
        q(this)
    }
    ;
    function $(t, n, i) {
        for (var e in B)
            if (B.hasOwnProperty(e) && n === t.f[B[e]] && i === t.f[B[e]])
                return !0;
        return !1
    }
    function q(t) {
        var n = t.g.a.offsetWidth, i = t.h.a.offsetWidth, o;
        (o = n === t.f.serif && i === t.f["sans-serif"]) || (o = D() && $(t, n, i));
        o ? e() - t.A >= t.w ? D() && $(t, n, i) && (null === t.u || t.u.hasOwnProperty(t.a.c)) ? M(t, t.v) : M(t, t.B) : H(t) : M(t, t.v)
    }
    function H(t) {
        setTimeout(i(function() {
            q(this)
        }, t), 50)
    }
    function M(t, n) {
        setTimeout(i(function() {
            f(this.g.a);
            f(this.h.a);
            f(this.j.a);
            f(this.m.a);
            n(this.a)
        }, t), 0)
    }
    ;function z(t, n, i) {
        this.c = t;
        this.a = n;
        this.f = 0;
        this.m = this.j = !1;
        this.s = i
    }
    var G = null;
    z.prototype.g = function(t) {
        var n = this.a;
        n.g && c(n.f, [n.a.c("wf", t.c, j(t).toString(), "active")], [n.a.c("wf", t.c, j(t).toString(), "loading"), n.a.c("wf", t.c, j(t).toString(), "inactive")]);
        A(n, "fontactive", t);
        this.m = !0;
        K(this)
    }
    ;
    z.prototype.h = function(t) {
        var n = this.a;
        if (n.g) {
            var i = h(n.f, n.a.c("wf", t.c, j(t).toString(), "active"))
              , e = []
              , o = [n.a.c("wf", t.c, j(t).toString(), "loading")];
            i || e.push(n.a.c("wf", t.c, j(t).toString(), "inactive"));
            c(n.f, e, o)
        }
        A(n, "fontinactive", t);
        K(this)
    }
    ;
    function K(t) {
        0 == --t.f && t.j && (t.m ? (t = t.a,
        t.g && c(t.f, [t.a.c("wf", "active")], [t.a.c("wf", "loading"), t.a.c("wf", "inactive")]),
        A(t, "active")) : C(t.a))
    }
    ;function R(t) {
        this.j = t;
        this.a = new N;
        this.h = 0;
        this.f = this.g = !0
    }
    R.prototype.load = function(t) {
        this.c = new o(this.j,t.context || this.j);
        this.g = !1 !== t.events;
        this.f = !1 !== t.classes;
        V(this, new T(this.c,t), t)
    }
    ;
    function U(t, n, e, o, a) {
        var s = 0 == --t.h;
        (t.f || t.g) && setTimeout(function() {
            var t = a || null
              , r = o || null || {};
            if (0 === e.length && s)
                C(n.a);
            else {
                n.f += e.length;
                s && (n.j = s);
                var f, h = [];
                for (f = 0; f < e.length; f++) {
                    var l = e[f]
                      , u = r[l.c]
                      , p = n.a
                      , d = l;
                    p.g && c(p.f, [p.a.c("wf", d.c, j(d).toString(), "loading")]);
                    A(p, "fontloading", d);
                    p = null;
                    if (null === G)
                        if (window.FontFace) {
                            var d = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)
                              , g = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                            G = d ? 42 < parseInt(d[1], 10) : g ? !1 : !0
                        } else
                            G = !1;
                    G ? p = new O(i(n.g, n),i(n.h, n),n.c,l,n.s,u) : p = new P(i(n.g, n),i(n.h, n),n.c,l,n.s,t,u);
                    h.push(p)
                }
                for (f = 0; f < h.length; f++)
                    h[f].start()
            }
        }, 0)
    }
    function V(t, n, i) {
        var e = []
          , o = i.timeout;
        S(n);
        var e = E(t.a, i, t.c)
          , a = new z(t.c,n,o);
        t.h = e.length;
        n = 0;
        for (i = e.length; n < i; n++)
            e[n].load(function(n, i, e) {
                U(t, a, n, i, e)
            })
    }
    ;function X(t, n) {
        this.c = t;
        this.a = n
    }
    X.prototype.load = function(t) {
        function n() {
            if (a["__mti_fntLst" + e]) {
                var i = a["__mti_fntLst" + e](), o = [], s;
                if (i)
                    for (var r = 0; r < i.length; r++) {
                        var f = i[r].fontfamily;
                        void 0 != i[r].fontStyle && void 0 != i[r].fontWeight ? (s = i[r].fontStyle + i[r].fontWeight,
                        o.push(new y(f,s))) : o.push(new y(f))
                    }
                t(o)
            } else
                setTimeout(function() {
                    n()
                }, 50)
        }
        var i = this
          , e = i.a.projectId
          , o = i.a.version;
        if (e) {
            var a = i.c.o;
            p(this.c, (i.a.api || "https://fast.fonts.net/jsapi") + "/" + e + ".js" + (o ? "?v=" + o : ""), function(o) {
                o ? t([]) : (a["__MonotypeConfiguration__" + e] = function() {
                    return i.a
                }
                ,
                n())
            }).id = "__MonotypeAPIScript__" + e
        } else
            t([])
    }
    ;
    function J(t, n) {
        this.c = t;
        this.a = n
    }
    J.prototype.load = function(t) {
        var n, i, e = this.a.urls || [], o = this.a.families || [], a = this.a.testStrings || {}, s = new d;
        n = 0;
        for (i = e.length; n < i; n++)
            u(this.c, e[n], g(s));
        var r = [];
        n = 0;
        for (i = o.length; n < i; n++)
            if (e = o[n].split(":"),
            e[1])
                for (var f = e[1].split(","), c = 0; c < f.length; c += 1)
                    r.push(new y(e[0],f[c]));
            else
                r.push(new y(e[0]));
        v(s, function() {
            t(r, a)
        })
    }
    ;
    function Q(t, n) {
        t ? this.c = t : this.c = Y;
        this.a = [];
        this.f = [];
        this.g = n || ""
    }
    var Y = WebFontConfig.api_url;
    function Z(t, n) {
        for (var i = n.length, e = 0; e < i; e++) {
            var o = n[e].split(":");
            3 == o.length && t.f.push(o.pop());
            var a = "";
            2 == o.length && "" != o[1] && (a = ":");
            t.a.push(o.join(a))
        }
    }
    function tt(t) {
        if (0 == t.a.length)
            throw Error("No fonts to load!");
        if (-1 != t.c.indexOf("kit="))
            return t.c;
        for (var n = t.a.length, i = [], e = 0; e < n; e++)
            i.push(t.a[e].replace(/ /g, "+"));
        n = t.c + "?family=" + i.join("%7C");
        0 < t.f.length && (n += "&subset=" + t.f.join(","));
        0 < t.g.length && (n += "&text=" + encodeURIComponent(t.g));
        return n
    }
    ;function tn(t) {
        this.f = t;
        this.a = [];
        this.c = {}
    }
    var ti = {
        latin: "BESbswy",
        "latin-ext": "\xe7\xf6\xfcğş",
        cyrillic: "йяЖ",
        greek: "αβΣ",
        khmer: "កខគ",
        Hanuman: "កខគ"
    }
      , te = {
        thin: "1",
        extralight: "2",
        "extra-light": "2",
        ultralight: "2",
        "ultra-light": "2",
        light: "3",
        regular: "4",
        book: "4",
        medium: "5",
        "semi-bold": "6",
        semibold: "6",
        "demi-bold": "6",
        demibold: "6",
        bold: "7",
        "extra-bold": "8",
        extrabold: "8",
        "ultra-bold": "8",
        ultrabold: "8",
        black: "9",
        heavy: "9",
        l: "3",
        r: "4",
        b: "7"
    }
      , to = {
        i: "i",
        italic: "i",
        n: "n",
        normal: "n"
    }
      , ta = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
    function ts(t) {
        for (var n = t.f.length, i = 0; i < n; i++) {
            var e = t.f[i].split(":")
              , o = e[0].replace(/\+/g, " ")
              , a = ["n4"];
            if (2 <= e.length) {
                var s;
                var r = e[1];
                s = [];
                if (r)
                    for (var r = r.split(","), f = r.length, c = 0; c < f; c++) {
                        var h;
                        h = r[c];
                        if (h.match(/^[\w-]+$/)) {
                            var l = ta.exec(h.toLowerCase());
                            if (null == l)
                                h = "";
                            else {
                                h = l[2];
                                h = null == h || "" == h ? "n" : to[h];
                                l = l[1];
                                if (null == l || "" == l)
                                    l = "4";
                                else
                                    var u = te[l]
                                      , l = u ? u : isNaN(l) ? "4" : l.substr(0, 1);
                                h = [h, l].join("")
                            }
                        } else
                            h = "";
                        h && s.push(h)
                    }
                0 < s.length && (a = s);
                3 == e.length && (e = e[2],
                s = [],
                e = e ? e.split(",") : s,
                0 < e.length && (e = ti[e[0]]) && (t.c[o] = e))
            }
            t.c[o] || (e = ti[o]) && (t.c[o] = e);
            for (e = 0; e < a.length; e += 1)
                t.a.push(new y(o,a[e]))
        }
    }
    ;function tr(t, n) {
        this.c = t;
        this.a = n
    }
    var tf = {
        Arimo: !0,
        Cousine: !0,
        Tinos: !0
    };
    tr.prototype.load = function(t) {
        var n = new d
          , i = this.c
          , e = new Q(this.a.api,this.a.text)
          , o = this.a.families;
        Z(e, o);
        var a = new tn(o);
        ts(a);
        u(i, tt(e), g(n));
        v(n, function() {
            t(a.a, a.c, tf)
        })
    }
    ;
    function tc(t, n) {
        this.c = t;
        this.a = n
    }
    tc.prototype.load = function(t) {
        var n = this.a.id
          , i = this.c.o;
        n ? p(this.c, (this.a.api || "https://use.typekit.net") + "/" + n + ".js", function(n) {
            if (n)
                t([]);
            else if (i.Typekit && i.Typekit.config && i.Typekit.config.fn) {
                n = i.Typekit.config.fn;
                for (var e = [], o = 0; o < n.length; o += 2)
                    for (var a = n[o], s = n[o + 1], r = 0; r < s.length; r++)
                        e.push(new y(a,s[r]));
                try {
                    i.Typekit.load({
                        events: !1,
                        classes: !1,
                        async: !0
                    })
                } catch (t) {}
                t(e)
            }
        }, 2e3) : t([])
    }
    ;
    function th(t, n) {
        this.c = t;
        this.f = n;
        this.a = []
    }
    th.prototype.load = function(t) {
        var n = this.f.id
          , i = this.c.o
          , e = this;
        n ? (i.__webfontfontdeckmodule__ || (i.__webfontfontdeckmodule__ = {}),
        i.__webfontfontdeckmodule__[n] = function(n, i) {
            for (var o = 0, a = i.fonts.length; o < a; ++o) {
                var s = i.fonts[o];
                e.a.push(new y(s.name,k("font-weight:" + s.weight + ";font-style:" + s.style)))
            }
            t(e.a)
        }
        ,
        p(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + l(this.c) + "/" + n + ".js", function(n) {
            n && t([])
        })) : t([])
    }
    ;
    var tl = new R(window);
    tl.a.c.custom = function(t, n) {
        return new J(n,t)
    }
    ;
    tl.a.c.fontdeck = function(t, n) {
        return new th(n,t)
    }
    ;
    tl.a.c.monotype = function(t, n) {
        return new X(n,t)
    }
    ;
    tl.a.c.typekit = function(t, n) {
        return new tc(n,t)
    }
    ;
    tl.a.c.google = function(t, n) {
        return new tr(n,t)
    }
    ;
    var tu = {
        load: i(tl.load, tl)
    };
    "function" === typeof define && define.amd ? define(function() {
        return tu
    }) : "undefined" !== typeof module && module.exports ? module.exports = tu : (window.WebFont = tu,
    window.WebFontConfig && tl.load(window.WebFontConfig))
}
)();


