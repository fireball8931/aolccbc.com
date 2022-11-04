// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"areZo":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "449bc555d1fcc4e4";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5BXwZ":[function(require,module,exports) {
/**
 * @popperjs/core v2.11.6 - MIT License
 */ !function(e, t) {
    t(exports);
}(this, function(e) {
    "use strict";
    function t(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return t && t.defaultView || window;
        }
        return e;
    }
    function n(e) {
        return e instanceof t(e).Element || e instanceof Element;
    }
    function r(e) {
        return e instanceof t(e).HTMLElement || e instanceof HTMLElement;
    }
    function o(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof t(e).ShadowRoot || e instanceof ShadowRoot);
    }
    var i = Math.max, a = Math.min, s = Math.round;
    function f() {
        var e = navigator.userAgentData;
        return null != e && e.brands ? e.brands.map(function(e) {
            return e.brand + "/" + e.version;
        }).join(" ") : navigator.userAgent;
    }
    function c() {
        return !/^((?!chrome|android).)*safari/i.test(f());
    }
    function p(e, o, i) {
        void 0 === o && (o = !1), void 0 === i && (i = !1);
        var a = e.getBoundingClientRect(), f = 1, p = 1;
        o && r(e) && (f = e.offsetWidth > 0 && s(a.width) / e.offsetWidth || 1, p = e.offsetHeight > 0 && s(a.height) / e.offsetHeight || 1);
        var u = (n(e) ? t(e) : window).visualViewport, l = !c() && i, d = (a.left + (l && u ? u.offsetLeft : 0)) / f, h = (a.top + (l && u ? u.offsetTop : 0)) / p, m = a.width / f, v = a.height / p;
        return {
            width: m,
            height: v,
            top: h,
            right: d + m,
            bottom: h + v,
            left: d,
            x: d,
            y: h
        };
    }
    function u(e) {
        var n = t(e);
        return {
            scrollLeft: n.pageXOffset,
            scrollTop: n.pageYOffset
        };
    }
    function l(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
    }
    function d(e) {
        return ((n(e) ? e.ownerDocument : e.document) || window.document).documentElement;
    }
    function h(e) {
        return p(d(e)).left + u(e).scrollLeft;
    }
    function m(e) {
        return t(e).getComputedStyle(e);
    }
    function v(e) {
        var t = m(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
    }
    function y(e, n, o) {
        void 0 === o && (o = !1);
        var i, a, f = r(n), c = r(n) && function(e) {
            var t = e.getBoundingClientRect(), n = s(t.width) / e.offsetWidth || 1, r = s(t.height) / e.offsetHeight || 1;
            return 1 !== n || 1 !== r;
        }(n), m = d(n), y = p(e, c, o), g = {
            scrollLeft: 0,
            scrollTop: 0
        }, b = {
            x: 0,
            y: 0
        };
        return (f || !f && !o) && (("body" !== l(n) || v(m)) && (g = (i = n) !== t(i) && r(i) ? {
            scrollLeft: (a = i).scrollLeft,
            scrollTop: a.scrollTop
        } : u(i)), r(n) ? ((b = p(n, !0)).x += n.clientLeft, b.y += n.clientTop) : m && (b.x = h(m))), {
            x: y.left + g.scrollLeft - b.x,
            y: y.top + g.scrollTop - b.y,
            width: y.width,
            height: y.height
        };
    }
    function g(e) {
        var t = p(e), n = e.offsetWidth, r = e.offsetHeight;
        return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: n,
            height: r
        };
    }
    function b(e) {
        return "html" === l(e) ? e : e.assignedSlot || e.parentNode || (o(e) ? e.host : null) || d(e);
    }
    function w(e) {
        return [
            "html",
            "body",
            "#document"
        ].indexOf(l(e)) >= 0 ? e.ownerDocument.body : r(e) && v(e) ? e : w(b(e));
    }
    function x(e, n) {
        var r;
        void 0 === n && (n = []);
        var o = w(e), i = o === (null == (r = e.ownerDocument) ? void 0 : r.body), a = t(o), s = i ? [
            a
        ].concat(a.visualViewport || [], v(o) ? o : []) : o, f = n.concat(s);
        return i ? f : f.concat(x(b(s)));
    }
    function O(e) {
        return [
            "table",
            "td",
            "th"
        ].indexOf(l(e)) >= 0;
    }
    function j(e) {
        return r(e) && "fixed" !== m(e).position ? e.offsetParent : null;
    }
    function E(e) {
        for(var n = t(e), i = j(e); i && O(i) && "static" === m(i).position;)i = j(i);
        return i && ("html" === l(i) || "body" === l(i) && "static" === m(i).position) ? n : i || function(e) {
            var t = /firefox/i.test(f());
            if (/Trident/i.test(f()) && r(e) && "fixed" === m(e).position) return null;
            var n = b(e);
            for(o(n) && (n = n.host); r(n) && [
                "html",
                "body"
            ].indexOf(l(n)) < 0;){
                var i = m(n);
                if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== [
                    "transform",
                    "perspective"
                ].indexOf(i.willChange) || t && "filter" === i.willChange || t && i.filter && "none" !== i.filter) return n;
                n = n.parentNode;
            }
            return null;
        }(e) || n;
    }
    var D = "top", A = "bottom", L = "right", P = "left", M = "auto", k = [
        D,
        A,
        L,
        P
    ], W = "start", B = "end", H = "viewport", T = "popper", R = k.reduce(function(e, t) {
        return e.concat([
            t + "-" + W,
            t + "-" + B
        ]);
    }, []), S = [].concat(k, [
        M
    ]).reduce(function(e, t) {
        return e.concat([
            t,
            t + "-" + W,
            t + "-" + B
        ]);
    }, []), V = [
        "beforeRead",
        "read",
        "afterRead",
        "beforeMain",
        "main",
        "afterMain",
        "beforeWrite",
        "write",
        "afterWrite"
    ];
    function q(e) {
        var t = new Map, n = new Set, r = [];
        function o(e) {
            n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
                if (!n.has(e)) {
                    var r = t.get(e);
                    r && o(r);
                }
            }), r.push(e);
        }
        return e.forEach(function(e) {
            t.set(e.name, e);
        }), e.forEach(function(e) {
            n.has(e.name) || o(e);
        }), r;
    }
    function C(e) {
        return e.split("-")[0];
    }
    function N(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && o(n)) {
            var r = t;
            do {
                if (r && e.isSameNode(r)) return !0;
                r = r.parentNode || r.host;
            }while (r);
        }
        return !1;
    }
    function I(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        });
    }
    function _(e, r, o) {
        return r === H ? I(function(e, n) {
            var r = t(e), o = d(e), i = r.visualViewport, a = o.clientWidth, s = o.clientHeight, f = 0, p = 0;
            if (i) {
                a = i.width, s = i.height;
                var u = c();
                (u || !u && "fixed" === n) && (f = i.offsetLeft, p = i.offsetTop);
            }
            return {
                width: a,
                height: s,
                x: f + h(e),
                y: p
            };
        }(e, o)) : n(r) ? function(e, t) {
            var n = p(e, !1, "fixed" === t);
            return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
        }(r, o) : I(function(e) {
            var t, n = d(e), r = u(e), o = null == (t = e.ownerDocument) ? void 0 : t.body, a = i(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = i(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), f = -r.scrollLeft + h(e), c = -r.scrollTop;
            return "rtl" === m(o || n).direction && (f += i(n.clientWidth, o ? o.clientWidth : 0) - a), {
                width: a,
                height: s,
                x: f,
                y: c
            };
        }(d(e)));
    }
    function F(e, t, o, s) {
        var f = "clippingParents" === t ? function(e) {
            var t = x(b(e)), o = [
                "absolute",
                "fixed"
            ].indexOf(m(e).position) >= 0 && r(e) ? E(e) : e;
            return n(o) ? t.filter(function(e) {
                return n(e) && N(e, o) && "body" !== l(e);
            }) : [];
        }(e) : [].concat(t), c = [].concat(f, [
            o
        ]), p = c[0], u = c.reduce(function(t, n) {
            var r = _(e, n, s);
            return t.top = i(r.top, t.top), t.right = a(r.right, t.right), t.bottom = a(r.bottom, t.bottom), t.left = i(r.left, t.left), t;
        }, _(e, p, s));
        return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
    }
    function U(e) {
        return e.split("-")[1];
    }
    function z(e) {
        return [
            "top",
            "bottom"
        ].indexOf(e) >= 0 ? "x" : "y";
    }
    function X(e) {
        var t, n = e.reference, r = e.element, o = e.placement, i = o ? C(o) : null, a = o ? U(o) : null, s = n.x + n.width / 2 - r.width / 2, f = n.y + n.height / 2 - r.height / 2;
        switch(i){
            case D:
                t = {
                    x: s,
                    y: n.y - r.height
                };
                break;
            case A:
                t = {
                    x: s,
                    y: n.y + n.height
                };
                break;
            case L:
                t = {
                    x: n.x + n.width,
                    y: f
                };
                break;
            case P:
                t = {
                    x: n.x - r.width,
                    y: f
                };
                break;
            default:
                t = {
                    x: n.x,
                    y: n.y
                };
        }
        var c = i ? z(i) : null;
        if (null != c) {
            var p = "y" === c ? "height" : "width";
            switch(a){
                case W:
                    t[c] = t[c] - (n[p] / 2 - r[p] / 2);
                    break;
                case B:
                    t[c] = t[c] + (n[p] / 2 - r[p] / 2);
            }
        }
        return t;
    }
    function Y(e) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, e);
    }
    function G(e, t) {
        return t.reduce(function(t, n) {
            return t[n] = e, t;
        }, {});
    }
    function J(e, t) {
        void 0 === t && (t = {});
        var r = t, o = r.placement, i = void 0 === o ? e.placement : o, a = r.strategy, s = void 0 === a ? e.strategy : a, f = r.boundary, c = void 0 === f ? "clippingParents" : f, u = r.rootBoundary, l = void 0 === u ? H : u, h = r.elementContext, m = void 0 === h ? T : h, v = r.altBoundary, y = void 0 !== v && v, g = r.padding, b = void 0 === g ? 0 : g, w = Y("number" != typeof b ? b : G(b, k)), x = m === T ? "reference" : T, O = e.rects.popper, j = e.elements[y ? x : m], E = F(n(j) ? j : j.contextElement || d(e.elements.popper), c, l, s), P = p(e.elements.reference), M = X({
            reference: P,
            element: O,
            strategy: "absolute",
            placement: i
        }), W = I(Object.assign({}, O, M)), B = m === T ? W : P, R = {
            top: E.top - B.top + w.top,
            bottom: B.bottom - E.bottom + w.bottom,
            left: E.left - B.left + w.left,
            right: B.right - E.right + w.right
        }, S = e.modifiersData.offset;
        if (m === T && S) {
            var V = S[i];
            Object.keys(R).forEach(function(e) {
                var t = [
                    L,
                    A
                ].indexOf(e) >= 0 ? 1 : -1, n = [
                    D,
                    A
                ].indexOf(e) >= 0 ? "y" : "x";
                R[e] += V[n] * t;
            });
        }
        return R;
    }
    var K = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function Q() {
        for(var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n];
        return !t.some(function(e) {
            return !(e && "function" == typeof e.getBoundingClientRect);
        });
    }
    function Z(e) {
        void 0 === e && (e = {});
        var t = e, r = t.defaultModifiers, o = void 0 === r ? [] : r, i = t.defaultOptions, a = void 0 === i ? K : i;
        return function(e, t, r) {
            void 0 === r && (r = a);
            var i, s, f = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, K, a),
                modifiersData: {},
                elements: {
                    reference: e,
                    popper: t
                },
                attributes: {},
                styles: {}
            }, c = [], p = !1, u = {
                state: f,
                setOptions: function(r) {
                    var i = "function" == typeof r ? r(f.options) : r;
                    l(), f.options = Object.assign({}, a, f.options, i), f.scrollParents = {
                        reference: n(e) ? x(e) : e.contextElement ? x(e.contextElement) : [],
                        popper: x(t)
                    };
                    var s, p, d = function(e) {
                        var t = q(e);
                        return V.reduce(function(e, n) {
                            return e.concat(t.filter(function(e) {
                                return e.phase === n;
                            }));
                        }, []);
                    }((s = [].concat(o, f.options.modifiers), p = s.reduce(function(e, t) {
                        var n = e[t.name];
                        return e[t.name] = n ? Object.assign({}, n, t, {
                            options: Object.assign({}, n.options, t.options),
                            data: Object.assign({}, n.data, t.data)
                        }) : t, e;
                    }, {}), Object.keys(p).map(function(e) {
                        return p[e];
                    })));
                    return f.orderedModifiers = d.filter(function(e) {
                        return e.enabled;
                    }), f.orderedModifiers.forEach(function(e) {
                        var t = e.name, n = e.options, r = void 0 === n ? {} : n, o = e.effect;
                        if ("function" == typeof o) {
                            var i = o({
                                state: f,
                                name: t,
                                instance: u,
                                options: r
                            }), a = function() {};
                            c.push(i || a);
                        }
                    }), u.update();
                },
                forceUpdate: function() {
                    if (!p) {
                        var e = f.elements, t = e.reference, n = e.popper;
                        if (Q(t, n)) {
                            f.rects = {
                                reference: y(t, E(n), "fixed" === f.options.strategy),
                                popper: g(n)
                            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(e) {
                                return f.modifiersData[e.name] = Object.assign({}, e.data);
                            });
                            for(var r = 0; r < f.orderedModifiers.length; r++)if (!0 !== f.reset) {
                                var o = f.orderedModifiers[r], i = o.fn, a = o.options, s = void 0 === a ? {} : a, c = o.name;
                                "function" == typeof i && (f = i({
                                    state: f,
                                    options: s,
                                    name: c,
                                    instance: u
                                }) || f);
                            } else f.reset = !1, r = -1;
                        }
                    }
                },
                update: (i = function() {
                    return new Promise(function(e) {
                        u.forceUpdate(), e(f);
                    });
                }, function() {
                    return s || (s = new Promise(function(e) {
                        Promise.resolve().then(function() {
                            s = void 0, e(i());
                        });
                    })), s;
                }),
                destroy: function() {
                    l(), p = !0;
                }
            };
            if (!Q(e, t)) return u;
            function l() {
                c.forEach(function(e) {
                    return e();
                }), c = [];
            }
            return u.setOptions(r).then(function(e) {
                !p && r.onFirstUpdate && r.onFirstUpdate(e);
            }), u;
        };
    }
    var $ = {
        passive: !0
    };
    var ee = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(e) {
            var n = e.state, r = e.instance, o = e.options, i = o.scroll, a = void 0 === i || i, s = o.resize, f = void 0 === s || s, c = t(n.elements.popper), p = [].concat(n.scrollParents.reference, n.scrollParents.popper);
            return a && p.forEach(function(e) {
                e.addEventListener("scroll", r.update, $);
            }), f && c.addEventListener("resize", r.update, $), function() {
                a && p.forEach(function(e) {
                    e.removeEventListener("scroll", r.update, $);
                }), f && c.removeEventListener("resize", r.update, $);
            };
        },
        data: {}
    };
    var te = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(e) {
            var t = e.state, n = e.name;
            t.modifiersData[n] = X({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement
            });
        },
        data: {}
    }, ne = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function re(e) {
        var n, r = e.popper, o = e.popperRect, i = e.placement, a = e.variation, f = e.offsets, c = e.position, p = e.gpuAcceleration, u = e.adaptive, l = e.roundOffsets, h = e.isFixed, v = f.x, y = void 0 === v ? 0 : v, g = f.y, b = void 0 === g ? 0 : g, w = "function" == typeof l ? l({
            x: y,
            y: b
        }) : {
            x: y,
            y: b
        };
        y = w.x, b = w.y;
        var x = f.hasOwnProperty("x"), O = f.hasOwnProperty("y"), j = P, M = D, k = window;
        if (u) {
            var W = E(r), H = "clientHeight", T = "clientWidth";
            if (W === t(r) && "static" !== m(W = d(r)).position && "absolute" === c && (H = "scrollHeight", T = "scrollWidth"), W, i === D || (i === P || i === L) && a === B) M = A, b -= (h && W === k && k.visualViewport ? k.visualViewport.height : W[H]) - o.height, b *= p ? 1 : -1;
            if (i === P || (i === D || i === A) && a === B) j = L, y -= (h && W === k && k.visualViewport ? k.visualViewport.width : W[T]) - o.width, y *= p ? 1 : -1;
        }
        var R, S = Object.assign({
            position: c
        }, u && ne), V = !0 === l ? function(e) {
            var t = e.x, n = e.y, r = window.devicePixelRatio || 1;
            return {
                x: s(t * r) / r || 0,
                y: s(n * r) / r || 0
            };
        }({
            x: y,
            y: b
        }) : {
            x: y,
            y: b
        };
        return y = V.x, b = V.y, p ? Object.assign({}, S, ((R = {})[M] = O ? "0" : "", R[j] = x ? "0" : "", R.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + b + "px)" : "translate3d(" + y + "px, " + b + "px, 0)", R)) : Object.assign({}, S, ((n = {})[M] = O ? b + "px" : "", n[j] = x ? y + "px" : "", n.transform = "", n));
    }
    var oe = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(e) {
            var t = e.state, n = e.options, r = n.gpuAcceleration, o = void 0 === r || r, i = n.adaptive, a = void 0 === i || i, s = n.roundOffsets, f = void 0 === s || s, c = {
                placement: C(t.placement),
                variation: U(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: o,
                isFixed: "fixed" === t.options.strategy
            };
            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, re(Object.assign({}, c, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: a,
                roundOffsets: f
            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, re(Object.assign({}, c, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: f
            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement
            });
        },
        data: {}
    };
    var ie = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(e) {
            var t = e.state;
            Object.keys(t.elements).forEach(function(e) {
                var n = t.styles[e] || {}, o = t.attributes[e] || {}, i = t.elements[e];
                r(i) && l(i) && (Object.assign(i.style, n), Object.keys(o).forEach(function(e) {
                    var t = o[e];
                    !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t);
                }));
            });
        },
        effect: function(e) {
            var t = e.state, n = {
                popper: {
                    position: t.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
                Object.keys(t.elements).forEach(function(e) {
                    var o = t.elements[e], i = t.attributes[e] || {}, a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
                        return e[t] = "", e;
                    }, {});
                    r(o) && l(o) && (Object.assign(o.style, a), Object.keys(i).forEach(function(e) {
                        o.removeAttribute(e);
                    }));
                });
            };
        },
        requires: [
            "computeStyles"
        ]
    };
    var ae = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: [
            "popperOffsets"
        ],
        fn: function(e) {
            var t = e.state, n = e.options, r = e.name, o = n.offset, i = void 0 === o ? [
                0,
                0
            ] : o, a = S.reduce(function(e, n) {
                return e[n] = function(e, t, n) {
                    var r = C(e), o = [
                        P,
                        D
                    ].indexOf(r) >= 0 ? -1 : 1, i = "function" == typeof n ? n(Object.assign({}, t, {
                        placement: e
                    })) : n, a = i[0], s = i[1];
                    return a = a || 0, s = (s || 0) * o, [
                        P,
                        L
                    ].indexOf(r) >= 0 ? {
                        x: s,
                        y: a
                    } : {
                        x: a,
                        y: s
                    };
                }(n, t.rects, i), e;
            }, {}), s = a[t.placement], f = s.x, c = s.y;
            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = a;
        }
    }, se = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function fe(e) {
        return e.replace(/left|right|bottom|top/g, function(e) {
            return se[e];
        });
    }
    var ce = {
        start: "end",
        end: "start"
    };
    function pe(e) {
        return e.replace(/start|end/g, function(e) {
            return ce[e];
        });
    }
    function ue(e, t) {
        void 0 === t && (t = {});
        var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, f = n.allowedAutoPlacements, c = void 0 === f ? S : f, p = U(r), u = p ? s ? R : R.filter(function(e) {
            return U(e) === p;
        }) : k, l = u.filter(function(e) {
            return c.indexOf(e) >= 0;
        });
        0 === l.length && (l = u);
        var d = l.reduce(function(t, n) {
            return t[n] = J(e, {
                placement: n,
                boundary: o,
                rootBoundary: i,
                padding: a
            })[C(n)], t;
        }, {});
        return Object.keys(d).sort(function(e, t) {
            return d[e] - d[t];
        });
    }
    var le = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t = e.state, n = e.options, r = e.name;
            if (!t.modifiersData[r]._skip) {
                for(var o = n.mainAxis, i = void 0 === o || o, a = n.altAxis, s = void 0 === a || a, f = n.fallbackPlacements, c = n.padding, p = n.boundary, u = n.rootBoundary, l = n.altBoundary, d = n.flipVariations, h = void 0 === d || d, m = n.allowedAutoPlacements, v = t.options.placement, y = C(v), g = f || (y === v || !h ? [
                    fe(v)
                ] : function(e) {
                    if (C(e) === M) return [];
                    var t = fe(e);
                    return [
                        pe(e),
                        t,
                        pe(t)
                    ];
                }(v)), b = [
                    v
                ].concat(g).reduce(function(e, n) {
                    return e.concat(C(n) === M ? ue(t, {
                        placement: n,
                        boundary: p,
                        rootBoundary: u,
                        padding: c,
                        flipVariations: h,
                        allowedAutoPlacements: m
                    }) : n);
                }, []), w = t.rects.reference, x = t.rects.popper, O = new Map, j = !0, E = b[0], k = 0; k < b.length; k++){
                    var B = b[k], H = C(B), T = U(B) === W, R = [
                        D,
                        A
                    ].indexOf(H) >= 0, S = R ? "width" : "height", V = J(t, {
                        placement: B,
                        boundary: p,
                        rootBoundary: u,
                        altBoundary: l,
                        padding: c
                    }), q = R ? T ? L : P : T ? A : D;
                    w[S] > x[S] && (q = fe(q));
                    var N = fe(q), I = [];
                    if (i && I.push(V[H] <= 0), s && I.push(V[q] <= 0, V[N] <= 0), I.every(function(e) {
                        return e;
                    })) {
                        E = B, j = !1;
                        break;
                    }
                    O.set(B, I);
                }
                if (j) for(var _ = function(e) {
                    var t = b.find(function(t) {
                        var n = O.get(t);
                        if (n) return n.slice(0, e).every(function(e) {
                            return e;
                        });
                    });
                    if (t) return E = t, "break";
                }, F = h ? 3 : 1; F > 0; F--){
                    if ("break" === _(F)) break;
                }
                t.placement !== E && (t.modifiersData[r]._skip = !0, t.placement = E, t.reset = !0);
            }
        },
        requiresIfExists: [
            "offset"
        ],
        data: {
            _skip: !1
        }
    };
    function de(e, t, n) {
        return i(e, a(t, n));
    }
    var he = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t = e.state, n = e.options, r = e.name, o = n.mainAxis, s = void 0 === o || o, f = n.altAxis, c = void 0 !== f && f, p = n.boundary, u = n.rootBoundary, l = n.altBoundary, d = n.padding, h = n.tether, m = void 0 === h || h, v = n.tetherOffset, y = void 0 === v ? 0 : v, b = J(t, {
                boundary: p,
                rootBoundary: u,
                padding: d,
                altBoundary: l
            }), w = C(t.placement), x = U(t.placement), O = !x, j = z(w), M = "x" === j ? "y" : "x", k = t.modifiersData.popperOffsets, B = t.rects.reference, H = t.rects.popper, T = "function" == typeof y ? y(Object.assign({}, t.rects, {
                placement: t.placement
            })) : y, R = "number" == typeof T ? {
                mainAxis: T,
                altAxis: T
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, T), S = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, V = {
                x: 0,
                y: 0
            };
            if (k) {
                if (s) {
                    var q, N = "y" === j ? D : P, I = "y" === j ? A : L, _ = "y" === j ? "height" : "width", F = k[j], X = F + b[N], Y = F - b[I], G = m ? -H[_] / 2 : 0, K = x === W ? B[_] : H[_], Q = x === W ? -H[_] : -B[_], Z = t.elements.arrow, $ = m && Z ? g(Z) : {
                        width: 0,
                        height: 0
                    }, ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, te = ee[N], ne = ee[I], re = de(0, B[_], $[_]), oe = O ? B[_] / 2 - G - re - te - R.mainAxis : K - re - te - R.mainAxis, ie = O ? -B[_] / 2 + G + re + ne + R.mainAxis : Q + re + ne + R.mainAxis, ae = t.elements.arrow && E(t.elements.arrow), se = ae ? "y" === j ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, fe = null != (q = null == S ? void 0 : S[j]) ? q : 0, ce = F + ie - fe, pe = de(m ? a(X, F + oe - fe - se) : X, F, m ? i(Y, ce) : Y);
                    k[j] = pe, V[j] = pe - F;
                }
                if (c) {
                    var ue, le = "x" === j ? D : P, he = "x" === j ? A : L, me = k[M], ve = "y" === M ? "height" : "width", ye = me + b[le], ge = me - b[he], be = -1 !== [
                        D,
                        P
                    ].indexOf(w), we = null != (ue = null == S ? void 0 : S[M]) ? ue : 0, xe = be ? ye : me - B[ve] - H[ve] - we + R.altAxis, Oe = be ? me + B[ve] + H[ve] - we - R.altAxis : ge, je = m && be ? function(e, t, n) {
                        var r = de(e, t, n);
                        return r > n ? n : r;
                    }(xe, me, Oe) : de(m ? xe : ye, me, m ? Oe : ge);
                    k[M] = je, V[M] = je - me;
                }
                t.modifiersData[r] = V;
            }
        },
        requiresIfExists: [
            "offset"
        ]
    };
    var me = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = C(n.placement), f = z(s), c = [
                P,
                L
            ].indexOf(s) >= 0 ? "height" : "width";
            if (i && a) {
                var p = function(e, t) {
                    return Y("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                        placement: t.placement
                    })) : e) ? e : G(e, k));
                }(o.padding, n), u = g(i), l = "y" === f ? D : P, d = "y" === f ? A : L, h = n.rects.reference[c] + n.rects.reference[f] - a[f] - n.rects.popper[c], m = a[f] - n.rects.reference[f], v = E(i), y = v ? "y" === f ? v.clientHeight || 0 : v.clientWidth || 0 : 0, b = h / 2 - m / 2, w = p[l], x = y - u[c] - p[d], O = y / 2 - u[c] / 2 + b, j = de(w, O, x), M = f;
                n.modifiersData[r] = ((t = {})[M] = j, t.centerOffset = j - O, t);
            }
        },
        effect: function(e) {
            var t = e.state, n = e.options.element, r = void 0 === n ? "[data-popper-arrow]" : n;
            null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && N(t.elements.popper, r) && (t.elements.arrow = r);
        },
        requires: [
            "popperOffsets"
        ],
        requiresIfExists: [
            "preventOverflow"
        ]
    };
    function ve(e, t, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }), {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
        };
    }
    function ye(e) {
        return [
            D,
            L,
            A,
            P
        ].some(function(t) {
            return e[t] >= 0;
        });
    }
    var ge = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: [
            "preventOverflow"
        ],
        fn: function(e) {
            var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = J(t, {
                elementContext: "reference"
            }), s = J(t, {
                altBoundary: !0
            }), f = ve(a, r), c = ve(s, o, i), p = ye(f), u = ye(c);
            t.modifiersData[n] = {
                referenceClippingOffsets: f,
                popperEscapeOffsets: c,
                isReferenceHidden: p,
                hasPopperEscaped: u
            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": p,
                "data-popper-escaped": u
            });
        }
    }, be = Z({
        defaultModifiers: [
            ee,
            te,
            oe,
            ie
        ]
    }), we = [
        ee,
        te,
        oe,
        ie,
        ae,
        le,
        he,
        me,
        ge
    ], xe = Z({
        defaultModifiers: we
    });
    e.applyStyles = ie, e.arrow = me, e.computeStyles = oe, e.createPopper = xe, e.createPopperLite = be, e.defaultModifiers = we, e.detectOverflow = J, e.eventListeners = ee, e.flip = le, e.hide = ge, e.offset = ae, e.popperGenerator = Z, e.popperOffsets = te, e.preventOverflow = he, Object.defineProperty(e, "__esModule", {
        value: !0
    });
}); //# sourceMappingURL=popper.min.js.map

},{}]},["areZo"], null, "parcelRequire1ad5")

//# sourceMappingURL=popper.min.d1fcc4e4.js.map
