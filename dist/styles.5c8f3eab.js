// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scss/styles.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../fonts/ProzaLibre-Regular.woff2":[["ProzaLibre-Regular.e0e3af86.woff2","fonts/ProzaLibre-Regular.woff2"],"fonts/ProzaLibre-Regular.woff2"],"./../fonts/ProzaLibre-Regular.woff":[["ProzaLibre-Regular.d2a1034d.woff","fonts/ProzaLibre-Regular.woff"],"fonts/ProzaLibre-Regular.woff"],"./../fonts/ProzaLibre-Italic.woff2":[["ProzaLibre-Italic.b75f32e4.woff2","fonts/ProzaLibre-Italic.woff2"],"fonts/ProzaLibre-Italic.woff2"],"./../fonts/ProzaLibre-Italic.woff":[["ProzaLibre-Italic.38c65a01.woff","fonts/ProzaLibre-Italic.woff"],"fonts/ProzaLibre-Italic.woff"],"./../fonts/ProzaLibre-Bold.woff2":[["ProzaLibre-Bold.cfe39ef0.woff2","fonts/ProzaLibre-Bold.woff2"],"fonts/ProzaLibre-Bold.woff2"],"./../fonts/ProzaLibre-Bold.woff":[["ProzaLibre-Bold.adbf2e6a.woff","fonts/ProzaLibre-Bold.woff"],"fonts/ProzaLibre-Bold.woff"],"./../fonts/ProzaLibre-ExtraBold.woff2":[["ProzaLibre-ExtraBold.0ab571b7.woff2","fonts/ProzaLibre-ExtraBold.woff2"],"fonts/ProzaLibre-ExtraBold.woff2"],"./../fonts/ProzaLibre-ExtraBold.woff":[["ProzaLibre-ExtraBold.3a0557a1.woff","fonts/ProzaLibre-ExtraBold.woff"],"fonts/ProzaLibre-ExtraBold.woff"],"./../fonts/ProzaLibre-MediumItalic.woff2":[["ProzaLibre-MediumItalic.3134ddb1.woff2","fonts/ProzaLibre-MediumItalic.woff2"],"fonts/ProzaLibre-MediumItalic.woff2"],"./../fonts/ProzaLibre-MediumItalic.woff":[["ProzaLibre-MediumItalic.f4974ead.woff","fonts/ProzaLibre-MediumItalic.woff"],"fonts/ProzaLibre-MediumItalic.woff"],"./../fonts/ProzaLibre-SemiBoldItalic.woff2":[["ProzaLibre-SemiBoldItalic.7ae0c641.woff2","fonts/ProzaLibre-SemiBoldItalic.woff2"],"fonts/ProzaLibre-SemiBoldItalic.woff2"],"./../fonts/ProzaLibre-SemiBoldItalic.woff":[["ProzaLibre-SemiBoldItalic.7f9649f3.woff","fonts/ProzaLibre-SemiBoldItalic.woff"],"fonts/ProzaLibre-SemiBoldItalic.woff"],"./../fonts/ProzaLibre-ExtraBoldItalic.woff2":[["ProzaLibre-ExtraBoldItalic.de658788.woff2","fonts/ProzaLibre-ExtraBoldItalic.woff2"],"fonts/ProzaLibre-ExtraBoldItalic.woff2"],"./../fonts/ProzaLibre-ExtraBoldItalic.woff":[["ProzaLibre-ExtraBoldItalic.58ffca9b.woff","fonts/ProzaLibre-ExtraBoldItalic.woff"],"fonts/ProzaLibre-ExtraBoldItalic.woff"],"./../fonts/ProzaLibre-BoldItalic.woff2":[["ProzaLibre-BoldItalic.c2d63d49.woff2","fonts/ProzaLibre-BoldItalic.woff2"],"fonts/ProzaLibre-BoldItalic.woff2"],"./../fonts/ProzaLibre-BoldItalic.woff":[["ProzaLibre-BoldItalic.97dfc441.woff","fonts/ProzaLibre-BoldItalic.woff"],"fonts/ProzaLibre-BoldItalic.woff"],"./../fonts/ProzaLibre-Medium.woff2":[["ProzaLibre-Medium.b2e49491.woff2","fonts/ProzaLibre-Medium.woff2"],"fonts/ProzaLibre-Medium.woff2"],"./../fonts/ProzaLibre-Medium.woff":[["ProzaLibre-Medium.2623b78c.woff","fonts/ProzaLibre-Medium.woff"],"fonts/ProzaLibre-Medium.woff"],"./../fonts/ProzaLibre-SemiBold.woff2":[["ProzaLibre-SemiBold.a3e57694.woff2","fonts/ProzaLibre-SemiBold.woff2"],"fonts/ProzaLibre-SemiBold.woff2"],"./../fonts/ProzaLibre-SemiBold.woff":[["ProzaLibre-SemiBold.c28cee46.woff","fonts/ProzaLibre-SemiBold.woff"],"fonts/ProzaLibre-SemiBold.woff"],"./../fonts/OpenSans-Bold.woff2":[["OpenSans-Bold.e2e672bd.woff2","fonts/OpenSans-Bold.woff2"],"fonts/OpenSans-Bold.woff2"],"./../fonts/OpenSans-Bold.woff":[["OpenSans-Bold.ef4dedc9.woff","fonts/OpenSans-Bold.woff"],"fonts/OpenSans-Bold.woff"],"./../fonts/OpenSans-ExtraBoldItalic.woff2":[["OpenSans-ExtraBoldItalic.9c95c1e6.woff2","fonts/OpenSans-ExtraBoldItalic.woff2"],"fonts/OpenSans-ExtraBoldItalic.woff2"],"./../fonts/OpenSans-ExtraBoldItalic.woff":[["OpenSans-ExtraBoldItalic.a7d0efb1.woff","fonts/OpenSans-ExtraBoldItalic.woff"],"fonts/OpenSans-ExtraBoldItalic.woff"],"./../fonts/OpenSans-SemiBold.woff2":[["OpenSans-SemiBold.d6de5e7d.woff2","fonts/OpenSans-SemiBold.woff2"],"fonts/OpenSans-SemiBold.woff2"],"./../fonts/OpenSans-SemiBold.woff":[["OpenSans-SemiBold.6bea6f8c.woff","fonts/OpenSans-SemiBold.woff"],"fonts/OpenSans-SemiBold.woff"],"./../fonts/OpenSans-Light.woff2":[["OpenSans-Light.3fc7e126.woff2","fonts/OpenSans-Light.woff2"],"fonts/OpenSans-Light.woff2"],"./../fonts/OpenSans-Light.woff":[["OpenSans-Light.d8a458ad.woff","fonts/OpenSans-Light.woff"],"fonts/OpenSans-Light.woff"],"./../fonts/OpenSans-Regular.woff2":[["OpenSans-Regular.dfa32dce.woff2","fonts/OpenSans-Regular.woff2"],"fonts/OpenSans-Regular.woff2"],"./../fonts/OpenSans-Regular.woff":[["OpenSans-Regular.5d698a25.woff","fonts/OpenSans-Regular.woff"],"fonts/OpenSans-Regular.woff"],"./../fonts/OpenSans-Italic.woff2":[["OpenSans-Italic.2d3db502.woff2","fonts/OpenSans-Italic.woff2"],"fonts/OpenSans-Italic.woff2"],"./../fonts/OpenSans-Italic.woff":[["OpenSans-Italic.37c67cdb.woff","fonts/OpenSans-Italic.woff"],"fonts/OpenSans-Italic.woff"],"./../fonts/OpenSans-BoldItalic.woff2":[["OpenSans-BoldItalic.3ff632ae.woff2","fonts/OpenSans-BoldItalic.woff2"],"fonts/OpenSans-BoldItalic.woff2"],"./../fonts/OpenSans-BoldItalic.woff":[["OpenSans-BoldItalic.696a7406.woff","fonts/OpenSans-BoldItalic.woff"],"fonts/OpenSans-BoldItalic.woff"],"./../fonts/OpenSans-LightItalic.woff2":[["OpenSans-LightItalic.d5167651.woff2","fonts/OpenSans-LightItalic.woff2"],"fonts/OpenSans-LightItalic.woff2"],"./../fonts/OpenSans-LightItalic.woff":[["OpenSans-LightItalic.52717de1.woff","fonts/OpenSans-LightItalic.woff"],"fonts/OpenSans-LightItalic.woff"],"./../fonts/OpenSans-SemiBoldItalic.woff2":[["OpenSans-SemiBoldItalic.098dc74e.woff2","fonts/OpenSans-SemiBoldItalic.woff2"],"fonts/OpenSans-SemiBoldItalic.woff2"],"./../fonts/OpenSans-SemiBoldItalic.woff":[["OpenSans-SemiBoldItalic.1a2232ea.woff","fonts/OpenSans-SemiBoldItalic.woff"],"fonts/OpenSans-SemiBoldItalic.woff"],"./../fonts/OpenSans-ExtraBold.woff2":[["OpenSans-ExtraBold.e77bab9e.woff2","fonts/OpenSans-ExtraBold.woff2"],"fonts/OpenSans-ExtraBold.woff2"],"./../fonts/OpenSans-ExtraBold.woff":[["OpenSans-ExtraBold.7a233feb.woff","fonts/OpenSans-ExtraBold.woff"],"fonts/OpenSans-ExtraBold.woff"],"./../assets/Fullscreen/events.png":[["events.dbca86cd.png","assets/Fullscreen/events.png"],"assets/Fullscreen/events.png"],"./../assets/Fullscreen/fashion.jpg":[["fashion.07b37737.jpg","assets/Fullscreen/fashion.jpg"],"assets/Fullscreen/fashion.jpg"],"./../assets/Fullscreen/voyage.png":[["voyage.bc75a1e7.png","assets/Fullscreen/voyage.png"],"assets/Fullscreen/voyage.png"],"./../assets/Fullscreen/vie.jpg":[["vie.670c6617.jpg","assets/Fullscreen/vie.jpg"],"assets/Fullscreen/vie.jpg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64362" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;

    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("../node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([]);
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/styles.5c8f3eab.js.map