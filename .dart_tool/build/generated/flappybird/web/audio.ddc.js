define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const web_audio = dart_sdk.web_audio;
  const typed_data = dart_sdk.typed_data;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const browser_detect = Object.create(dart.library);
  const audio = Object.create(dart.library);
  const flappy_bird = Object.create(dart.library);
  const $_equals = dartx._equals;
  const $trim = dartx.trim;
  const $split = dartx.split;
  const $map = dartx.map;
  const $length = dartx.length;
  const $elementAt = dartx.elementAt;
  const $hashCode = dartx.hashCode;
  const $compareTo = dartx.compareTo;
  const $firstWhere = dartx.firstWhere;
  const $contains = dartx.contains;
  const $forEach = dartx.forEach;
  const $onLoad = dartx.onLoad;
  const $response = dartx.response;
  const $decodeAudioData = dartx.decodeAudioData;
  const $putIfAbsent = dartx.putIfAbsent;
  const $onError = dartx.onError;
  const $keys = dartx.keys;
  const $_get = dartx._get;
  const $connectNode = dartx.connectNode;
  const $requestAnimationFrame = dartx.requestAnimationFrame;
  const $toDouble = dartx.toDouble;
  const $_set = dartx._set;
  const $fillText = dartx.fillText;
  const $setFillColorRgb = dartx.setFillColorRgb;
  const $toString = dartx.toString;
  const $onClick = dartx.onClick;
  const $getContext = dartx.getContext;
  const $createElement = dartx.createElement;
  const $onKeyPress = dartx.onKeyPress;
  const $onTouchStart = dartx.onTouchStart;
  const $onResize = dartx.onResize;
  const $requestFullscreen = dartx.requestFullscreen;
  const $clear = dartx.clear;
  const $drawImageScaledFromSource = dartx.drawImageScaledFromSource;
  const $toInt = dartx.toInt;
  const $getImageData = dartx.getImageData;
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  let StringToint = () => (StringToint = dart.constFn(dart.fnType(core.int, [core.String])))();
  let BrowserTobool = () => (BrowserTobool = dart.constFn(dart.fnType(core.bool, [browser_detect.Browser])))();
  let VoidToBrowser = () => (VoidToBrowser = dart.constFn(dart.fnType(browser_detect.Browser, [])))();
  let JSArrayOfBrowser = () => (JSArrayOfBrowser = dart.constFn(_interceptors.JSArray$(browser_detect.Browser)))();
  let StringAndStringToNull = () => (StringAndStringToNull = dart.constFn(dart.fnType(core.Null, [core.String, core.String])))();
  let VoidToAudioBuffer = () => (VoidToAudioBuffer = dart.constFn(dart.fnType(web_audio.AudioBuffer, [])))();
  let AudioBufferToNull = () => (AudioBufferToNull = dart.constFn(dart.fnType(core.Null, [web_audio.AudioBuffer])))();
  let ProgressEventToNull = () => (ProgressEventToNull = dart.constFn(dart.fnType(core.Null, [html.ProgressEvent])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let LinkedMapOfString$AudioBuffer = () => (LinkedMapOfString$AudioBuffer = dart.constFn(_js_helper.LinkedMap$(core.String, web_audio.AudioBuffer)))();
  let numTovoid = () => (numTovoid = dart.constFn(dart.fnType(dart.void, [core.num])))();
  let EventTovoid = () => (EventTovoid = dart.constFn(dart.fnType(dart.void, [html.Event])))();
  let EventTovoid$ = () => (EventTovoid$ = dart.constFn(dart.fnType(dart.void, [], [html.Event])))();
  let VoidToCanvasElement = () => (VoidToCanvasElement = dart.constFn(dart.fnType(html.CanvasElement, [])))();
  let LinkedMapOfString$dynamic = () => (LinkedMapOfString$dynamic = dart.constFn(_js_helper.LinkedMap$(core.String, dart.dynamic)))();
  let VoidTodouble = () => (VoidTodouble = dart.constFn(dart.fnType(core.double, [])))();
  let VoidToint = () => (VoidToint = dart.constFn(dart.fnType(core.int, [])))();
  let JSArrayOfnum = () => (JSArrayOfnum = dart.constFn(_interceptors.JSArray$(core.num)))();
  let LinkedMapOfString$CanvasElement = () => (LinkedMapOfString$CanvasElement = dart.constFn(_js_helper.LinkedMap$(core.String, html.CanvasElement)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let _HashSetOfMapOfString$dynamic = () => (_HashSetOfMapOfString$dynamic = dart.constFn(collection._HashSet$(MapOfString$dynamic())))();
  const _matcher$ = dart.privateName(browser_detect, "_matcher");
  const _version$ = dart.privateName(browser_detect, "_version");
  browser_detect.Browser = class Browser extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get isChrome() {
      return this[$_equals](browser_detect._chrome);
    }
    get isSafari() {
      return this[$_equals](browser_detect._safari);
    }
    get isOpera() {
      return this[$_equals](browser_detect._opera);
    }
    get isIe() {
      return this[$_equals](browser_detect._ie);
    }
    get isFirefox() {
      return this[$_equals](browser_detect._firefox);
    }
    get version() {
      return new browser_detect.BrowserVersion.new(this[_version$]());
    }
    toString() {
      return (dart.str(this.name) + " " + dart.str(this.version))[$trim]();
    }
  };
  (browser_detect.Browser.new = function(name, _matcher, _version) {
    this[name$] = name;
    this[_matcher$] = _matcher;
    this[_version$] = _version;
    ;
  }).prototype = browser_detect.Browser.prototype;
  dart.addTypeTests(browser_detect.Browser);
  const name$ = Symbol("Browser.name");
  dart.setGetterSignature(browser_detect.Browser, () => ({
    __proto__: dart.getGetters(browser_detect.Browser.__proto__),
    isChrome: core.bool,
    isSafari: core.bool,
    isOpera: core.bool,
    isIe: core.bool,
    isFirefox: core.bool,
    version: browser_detect.BrowserVersion
  }));
  dart.setLibraryUri(browser_detect.Browser, "org-dartlang-app:///web/browser_detect.dart");
  dart.setFieldSignature(browser_detect.Browser, () => ({
    __proto__: dart.getFields(browser_detect.Browser.__proto__),
    name: dart.finalFieldType(core.String),
    [_matcher$]: dart.finalFieldType(dart.fnType(core.bool, [])),
    [_version$]: dart.finalFieldType(dart.fnType(core.String, []))
  }));
  dart.defineExtensionMethods(browser_detect.Browser, ['toString']);
  browser_detect._UnknownBrowser = class _UnknownBrowser extends browser_detect.Browser {};
  (browser_detect._UnknownBrowser.new = function() {
    browser_detect._UnknownBrowser.__proto__.new.call(this, "Unknown Browser", dart.fn(() => true, VoidTobool()), dart.fn(() => "", VoidToString()));
    ;
  }).prototype = browser_detect._UnknownBrowser.prototype;
  dart.addTypeTests(browser_detect._UnknownBrowser);
  dart.setLibraryUri(browser_detect._UnknownBrowser, "org-dartlang-app:///web/browser_detect.dart");
  const _elements = dart.privateName(browser_detect, "_elements");
  browser_detect.BrowserVersion = class BrowserVersion extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get elements() {
      if (this[_elements] == null) {
        this[_elements] = this.value[$split](".")[$map](core.int, dart.fn(value => core.int.parse(value, {onError: dart.fn(_ => 0, StringToint())}), StringToint()));
      }
      return this[_elements];
    }
    compareTo(other) {
      browser_detect.BrowserVersion._check(other);
      for (let i = 0; i < math.max(core.num, this.elements[$length], other.elements[$length]); i = i + 1) {
        let value1 = i < dart.notNull(this.elements[$length]) ? this.elements[$elementAt](i) : 0;
        let value2 = i < dart.notNull(other.elements[$length]) ? other.elements[$elementAt](i) : 0;
        let result = core.Comparable.compare(value1, value2);
        if (result !== 0) {
          return result;
        }
      }
      return 0;
    }
    ['>'](other) {
      other = typeof other == 'string' ? new browser_detect.BrowserVersion.new(other) : other;
      return browser_detect.BrowserVersion.is(other) ? dart.notNull(this.compareTo(other)) > 0 : false;
    }
    ['>='](other) {
      other = typeof other == 'string' ? new browser_detect.BrowserVersion.new(other) : other;
      return browser_detect.BrowserVersion.is(other) ? dart.notNull(this.compareTo(other)) >= 0 : false;
    }
    ['<'](other) {
      other = typeof other == 'string' ? new browser_detect.BrowserVersion.new(other) : other;
      return browser_detect.BrowserVersion.is(other) ? dart.notNull(this.compareTo(other)) < 0 : false;
    }
    ['<='](other) {
      other = typeof other == 'string' ? new browser_detect.BrowserVersion.new(other) : other;
      return browser_detect.BrowserVersion.is(other) ? dart.notNull(this.compareTo(other)) <= 0 : false;
    }
    _equals(other) {
      if (other == null) return false;
      other = typeof other == 'string' ? new browser_detect.BrowserVersion.new(other) : other;
      return browser_detect.BrowserVersion.is(other) ? this.compareTo(other) === 0 : false;
    }
    get hashCode() {
      return dart.hashCode(this.value);
    }
    toString() {
      return this.value;
    }
  };
  (browser_detect.BrowserVersion.new = function(value) {
    this[_elements] = null;
    this[value$] = value;
    ;
  }).prototype = browser_detect.BrowserVersion.prototype;
  dart.addTypeTests(browser_detect.BrowserVersion);
  const value$ = Symbol("BrowserVersion.value");
  browser_detect.BrowserVersion[dart.implements] = () => [core.Comparable$(browser_detect.BrowserVersion)];
  dart.setMethodSignature(browser_detect.BrowserVersion, () => ({
    __proto__: dart.getMethods(browser_detect.BrowserVersion.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object]),
    '>': dart.fnType(core.bool, [dart.dynamic]),
    '>=': dart.fnType(core.bool, [dart.dynamic]),
    '<': dart.fnType(core.bool, [dart.dynamic]),
    '<=': dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.setGetterSignature(browser_detect.BrowserVersion, () => ({
    __proto__: dart.getGetters(browser_detect.BrowserVersion.__proto__),
    elements: core.Iterable$(core.int)
  }));
  dart.setLibraryUri(browser_detect.BrowserVersion, "org-dartlang-app:///web/browser_detect.dart");
  dart.setFieldSignature(browser_detect.BrowserVersion, () => ({
    __proto__: dart.getFields(browser_detect.BrowserVersion.__proto__),
    value: dart.finalFieldType(core.String),
    [_elements]: dart.fieldType(core.Iterable$(core.int))
  }));
  dart.defineExtensionMethods(browser_detect.BrowserVersion, ['compareTo', '_equals', 'toString']);
  dart.defineExtensionAccessors(browser_detect.BrowserVersion, ['hashCode']);
  browser_detect._determineBrowser = function() {
    return browser_detect._browsers[$firstWhere](dart.fn(browser => browser[_matcher$](), BrowserTobool()), {orElse: dart.fn(() => browser_detect._unknown, VoidToBrowser())});
  };
  browser_detect._matchVendor = function(name) {
    let vendor = html.window.navigator.vendor;
    return vendor != null && vendor[$contains](name);
  };
  dart.defineLazy(browser_detect, {
    /*browser_detect.browser*/get browser() {
      return browser_detect._determineBrowser();
    },
    /*browser_detect._browsers*/get _browsers() {
      return JSArrayOfBrowser().of([browser_detect._chrome, browser_detect._safari, browser_detect._opera, browser_detect._ie, browser_detect._firefox]);
    },
    set _browsers(_) {},
    /*browser_detect._chrome*/get _chrome() {
      return new browser_detect.Browser.new("Chrome", dart.fn(() => browser_detect._matchVendor("Google"), VoidTobool()), dart.fn(() => core.RegExp.new("Chrome/(.*)\\s").firstMatch(html.window.navigator.appVersion).group(1), VoidToString()));
    },
    set _chrome(_) {},
    /*browser_detect._safari*/get _safari() {
      return new browser_detect.Browser.new("Safari", dart.fn(() => browser_detect._matchVendor("Apple"), VoidTobool()), dart.fn(() => core.RegExp.new("Version/(.*)\\s").firstMatch(html.window.navigator.appVersion).group(1), VoidToString()));
    },
    set _safari(_) {},
    /*browser_detect._opera*/get _opera() {
      return new browser_detect.Browser.new("Opera", dart.fn(() => browser_detect._matchVendor("Opera"), VoidTobool()), dart.fn(() => core.RegExp.new("OPR/(.*)\\s").firstMatch(html.window.navigator.appVersion).group(1), VoidToString()));
    },
    set _opera(_) {},
    /*browser_detect._ie*/get _ie() {
      return new browser_detect.Browser.new("IE", dart.fn(() => html.window.navigator.appName[$contains]("Microsoft"), VoidTobool()), dart.fn(() => core.RegExp.new("MSIE (.*);").firstMatch(html.window.navigator.appVersion).group(1), VoidToString()));
    },
    set _ie(_) {},
    /*browser_detect._firefox*/get _firefox() {
      return new browser_detect.Browser.new("Firefox", dart.fn(() => html.window.navigator.userAgent[$contains]("Firefox"), VoidTobool()), dart.fn(() => core.RegExp.new("rv:(.*)\\)").firstMatch(html.window.navigator.userAgent).group(1), VoidToString()));
    },
    set _firefox(_) {},
    /*browser_detect._unknown*/get _unknown() {
      return new browser_detect._UnknownBrowser.new();
    },
    set _unknown(_) {}
  });
  const _ctx = dart.privateName(audio, "_ctx");
  const _source = dart.privateName(audio, "_source");
  const _secondSource = dart.privateName(audio, "_secondSource");
  const _loadCount = dart.privateName(audio, "_loadCount");
  const _callback$ = dart.privateName(audio, "_callback");
  const _loadBuffers = dart.privateName(audio, "_loadBuffers");
  const _loadSingleBuffer = dart.privateName(audio, "_loadSingleBuffer");
  const _buffersLoaded = dart.privateName(audio, "_buffersLoaded");
  audio.Audio = class Audio extends core.Object {
    [_loadBuffers]() {
      audio.Audio._bufferList[$forEach](dart.fn((key, url) => {
        this[_loadSingleBuffer](key, url);
      }, StringAndStringToNull()));
    }
    [_loadSingleBuffer](key, url) {
      let request = html.HttpRequest.new();
      request.open("GET", url, {async: true});
      request.responseType = "arraybuffer";
      request[$onLoad].listen(dart.fn(e => {
        this[_ctx][$decodeAudioData](typed_data.ByteBuffer._check(request[$response])).then(dart.dynamic, dart.fn(buffer => {
          if (buffer == null) dart.throw(core.Exception.new("Audio: Failed to decode buffer " + dart.str(key)));
          audio.Audio._buffers[$putIfAbsent](key, dart.fn(() => buffer, VoidToAudioBuffer()));
          if ((this[_loadCount] = dart.notNull(this[_loadCount]) + 1) === audio.Audio._bufferList[$length]) this[_buffersLoaded]();
        }, AudioBufferToNull()));
      }, ProgressEventToNull()));
      request[$onError].listen(dart.fn(e => {
        dart.throw(core.Exception.new("Audio: Failes to send XHR!"));
      }, ProgressEventToNull()));
      request.send();
    }
    [_buffersLoaded]() {
      core.print("Audio: Loaded " + dart.str(dart.notNull(this[_loadCount]) + 1) + " buffers");
      this[_callback$]();
    }
    play(buffer, secondBuffer) {
      if (secondBuffer === void 0) secondBuffer = null;
      if (dart.test(audio.Audio._buffers[$keys][$contains](buffer))) {
        this[_source] = this[_ctx].createBufferSource();
        this[_source].buffer = audio.Audio._buffers[$_get](buffer);
        this[_source][$connectNode](this[_ctx].destination);
        this[_source].start(0);
        if (secondBuffer != null && dart.test(audio.Audio._buffers[$keys][$contains](secondBuffer))) {
          FutureOfvoid().delayed(new core.Duration.new({milliseconds: 400}), dart.fn(() => this.play(secondBuffer), VoidTovoid()));
        }
      }
    }
  };
  (audio.Audio.new = function(_callback) {
    this[_ctx] = null;
    this[_source] = null;
    this[_secondSource] = null;
    this[_loadCount] = 0;
    this[_callback$] = _callback;
    try {
      this[_ctx] = web_audio.AudioContext.new();
      this[_loadBuffers]();
    } catch (e$) {
      let e = dart.getThrown(e$);
      core.print(e);
    }
  }).prototype = audio.Audio.prototype;
  dart.addTypeTests(audio.Audio);
  dart.setMethodSignature(audio.Audio, () => ({
    __proto__: dart.getMethods(audio.Audio.__proto__),
    [_loadBuffers]: dart.fnType(dart.void, []),
    [_loadSingleBuffer]: dart.fnType(dart.void, [core.String, core.String]),
    [_buffersLoaded]: dart.fnType(dart.void, []),
    play: dart.fnType(dart.void, [core.String], [core.String])
  }));
  dart.setLibraryUri(audio.Audio, "org-dartlang-app:///web/audio.dart");
  dart.setFieldSignature(audio.Audio, () => ({
    __proto__: dart.getFields(audio.Audio.__proto__),
    [_ctx]: dart.fieldType(web_audio.AudioContext),
    [_source]: dart.fieldType(web_audio.AudioBufferSourceNode),
    [_secondSource]: dart.fieldType(web_audio.AudioBufferSourceNode),
    [_callback$]: dart.fieldType(dart.fnType(dart.void, [])),
    [_loadCount]: dart.fieldType(core.int)
  }));
  dart.defineLazy(audio.Audio, {
    /*audio.Audio._bufferList*/get _bufferList() {
      return dart.constMap(core.String, core.String, ["hit", "audio/sfx_hit.ogg", "die", "audio/sfx_die.ogg", "point", "audio/sfx_point.ogg", "wing", "audio/sfx_wing.ogg"]);
    },
    /*audio.Audio._buffers*/get _buffers() {
      return new (LinkedMapOfString$AudioBuffer()).new();
    },
    set _buffers(_) {}
  });
  flappy_bird.setGameState = function(state) {
    return flappy_bird.gameState = (dart.notNull(flappy_bird.gameState) | dart.notNull(state)) >>> 0;
  };
  flappy_bird.unSetGameState = function(state) {
    return flappy_bird.gameState = (dart.notNull(flappy_bird.gameState) & ~dart.notNull(state) >>> 0) >>> 0;
  };
  flappy_bird.main = function() {
    flappy_bird.initAudio();
  };
  flappy_bird.tick = function(time) {
    flappy_bird.currTime = time;
    html.window[$requestAnimationFrame](dart.fn(flappy_bird.tick, numTovoid()));
    flappy_bird.phisicTick();
    flappy_bird.redrawScene();
  };
  flappy_bird.phisicTick = function() {
    if ((dart.notNull(flappy_bird.gameState) & (dart.notNull(flappy_bird.STARTED) | (dart.notNull(flappy_bird.READY) & ~dart.notNull(flappy_bird.LOOSE) >>> 0) >>> 0) >>> 0) >>> 0 === (dart.notNull(flappy_bird.STARTED) | (dart.notNull(flappy_bird.READY) & ~dart.notNull(flappy_bird.LOOSE) >>> 0) >>> 0) >>> 0) {
      flappy_bird.animBackground();
      flappy_bird.animBird();
      flappy_bird.birdPhisic(flappy_bird.currTime);
      flappy_bird.movePipes();
      flappy_bird.garbageRegenPipes(flappy_bird.currTime);
      flappy_bird.checkScoreAndCollision();
    }
  };
  flappy_bird.redrawScene = function() {
    flappy_bird.ctx.clearRect(0, 0, flappy_bird.w, flappy_bird.h);
    flappy_bird.drawBackground();
    flappy_bird.renderPipes();
    flappy_bird.drawEarth(dart.notNull(flappy_bird.h) * dart.notNull(flappy_bird.groundHeight));
    flappy_bird.drawBird(flappy_bird.birdPosition, flappy_bird.birdHeight, flappy_bird.birdR);
    flappy_bird.drawScore();
    flappy_bird.drawSplash();
    if (dart.test(flappy_bird.loose) || flappy_bird.gameState === 0) {
      flappy_bird.drawPopup();
    }
    flappy_bird.swapBuff();
  };
  flappy_bird.birdPhisic = function(time) {
    let now = time;
    let delta = dart.notNull(now) - dart.notNull(flappy_bird.lastTime);
    if (dart.notNull(delta) > 450) delta = dart.notNull(delta) * 2;
    delta = dart.notNull(delta) * 0.5;
    if (dart.notNull(delta) > dart.notNull(flappy_bird.birdMaxSpeed)) delta = flappy_bird.birdMaxSpeed;
    if (dart.test(flappy_bird.isFall)) {
      flappy_bird.birdHeight = dart.notNull(flappy_bird.birdHeight) + dart.notNull(flappy_bird.G) * dart.notNull(delta);
    } else {
      if (dart.notNull(delta) > 70) delta = 50.0;
      flappy_bird.birdHeight = dart.notNull(flappy_bird.birdHeight) - dart.notNull(flappy_bird.G2) * dart.notNull(delta);
    }
    flappy_bird.correctBird();
  };
  flappy_bird.correctBird = function() {
    if (dart.notNull(flappy_bird.birdHeight) + dart.notNull(flappy_bird.birdRX) < -dart.notNull(flappy_bird.birdRX) * 2) {
      flappy_bird.birdHeight = -flappy_bird.birdRX[$toDouble]();
      flappy_bird.isFall = true;
      flappy_bird.lastTime = flappy_bird.currTime;
    }
    if (dart.notNull(flappy_bird.birdHeight) + dart.notNull(flappy_bird.birdR) > dart.notNull(flappy_bird.h) - dart.notNull(flappy_bird.h) * dart.notNull(flappy_bird.groundHeight)) {
      flappy_bird.birdHeight = dart.notNull(flappy_bird.h) - dart.notNull(flappy_bird.h) * dart.notNull(flappy_bird.groundHeight) - dart.notNull(flappy_bird.birdR);
      flappy_bird.gameLoose();
    }
    if (!dart.test(flappy_bird.isFall) && dart.notNull(flappy_bird.lastBirdHeight) - dart.notNull(flappy_bird.birdSwipeHeight) > dart.notNull(flappy_bird.birdHeight)) {
      flappy_bird.isFall = true;
      flappy_bird.lastTime = flappy_bird.currTime;
    }
  };
  flappy_bird.checkScoreAndCollision = function() {
    let scored = false;
    let collisioned = false;
    let vertCollision = null;
    let nearEdge = null;
    let farEdge = null;
    let topEdge = dart.notNull(flappy_bird.birdHeight) - dart.notNull(flappy_bird.birdR);
    let bottomEdge = dart.notNull(flappy_bird.birdHeight) + dart.notNull(flappy_bird.birdR);
    let birdPosPlusR = dart.notNull(flappy_bird.birdPosition) + dart.notNull(flappy_bird.birdR);
    let birdPosMinR = dart.notNull(flappy_bird.birdPosition) - dart.notNull(flappy_bird.birdR);
    for (let i = 0; i < dart.notNull(flappy_bird.pipes[$length]); i = i + 1) {
      nearEdge = core.double._check(dart.dsend(flappy_bird.pipes[$elementAt](i)[$_get]("center"), '-', [dart.notNull(flappy_bird.pipeWidth) / 2]));
      farEdge = core.double._check(dart.dsend(flappy_bird.pipes[$elementAt](i)[$_get]("center"), '+', [dart.notNull(flappy_bird.pipeWidth) / 2]));
      vertCollision = dart.dtest(dart.dsend(flappy_bird.pipes[$elementAt](i)[$_get]("top"), '>', [topEdge])) || dart.dtest(dart.dsend(dart.dsend(flappy_bird.pipes[$elementAt](i)[$_get]("top"), '+', [flappy_bird.pipeHeight]), '<', [bottomEdge]));
      if (!collisioned && dart.notNull(nearEdge) < birdPosPlusR && dart.notNull(farEdge) > birdPosMinR && dart.test(vertCollision)) {
        flappy_bird.gameLoose();
        collisioned = true;
      }
      if (!scored && !dart.dtest(flappy_bird.pipes[$elementAt](i)[$_get]("checked"))) {
        if (dart.dtest(dart.dsend(flappy_bird.pipes[$elementAt](i)[$_get]("center"), '<', [flappy_bird.birdPosition]))) {
          flappy_bird.audio.play("point");
          flappy_bird.pipes[$elementAt](i)[$_set]("checked", true);
          flappy_bird.gameScore = dart.notNull(flappy_bird.gameScore) + 1;
          scored = true;
        }
      }
      if (collisioned && scored) break;
    }
  };
  flappy_bird.movePipes = function() {
    let t2, t1;
    for (let i = 0; i < dart.notNull(flappy_bird.pipes[$length]); i = i + 1) {
      t1 = flappy_bird.pipes[$elementAt](i);
      t2 = "center";
      t1[$_set](t2, dart.dsend(t1[$_get](t2), '-', [flappy_bird.pipeSpeed]));
    }
  };
  flappy_bird.garbageRegenPipes = function(time) {
    if (!dart.test(flappy_bird.loose) && dart.notNull(time) - dart.notNull(flappy_bird.garbageLastTime) > dart.notNull(flappy_bird.garbageFreq)) {
      let deletedPipesCount = 0;
      for (let i = 0; i < dart.notNull(flappy_bird.pipes[$length]); i = i + 1) {
        if (dart.dtest(dart.dsend(dart.dsend(flappy_bird.pipes[$elementAt](i)[$_get]("center"), '+', [flappy_bird.pipeWidth]), '<', [0.0]))) {
          flappy_bird.pipes.remove(flappy_bird.pipes[$elementAt](i));
          deletedPipesCount = deletedPipesCount + 1;
          i = i - 1;
        }
      }
      let max = dart.notNull(flappy_bird.h) - dart.notNull(flappy_bird.h) * dart.notNull(flappy_bird.groundHeight) - dart.notNull(flappy_bird.pipeHeight) - dart.notNull(flappy_bird.pipeGap);
      let i = null;
      for (let t1 = i = 0; dart.notNull(i) < deletedPipesCount; i = dart.notNull(i) + 1) {
        flappy_bird.generateNewPipe(flappy_bird.pipes[$length], max);
      }
      core.print("Deleted pipes: " + dart.str(deletedPipesCount));
      core.print("Generated pipes: " + dart.str(i));
      flappy_bird.garbageLastTime = time;
    }
  };
  flappy_bird.animBackground = function() {
    flappy_bird.groundAnim = dart.notNull(flappy_bird.groundAnim) + dart.notNull(flappy_bird.pipeSpeed);
    if (dart.notNull(flappy_bird.groundAnim) >= 336.0) flappy_bird.groundAnim = 0.0;
  };
  flappy_bird.animBird = function() {
    if (!dart.test(flappy_bird.isFall) && dart.notNull(flappy_bird.birdAnimAngle) > -60.0) {
      if (dart.notNull(flappy_bird.birdAnimAngle) > 0.0) flappy_bird.birdAnimAngle = 0.0;
      flappy_bird.birdAnimAngle = dart.notNull(flappy_bird.birdAnimAngle) - 8.0;
      flappy_bird.birdAngelBackwise = true;
    }
    if (dart.notNull(flappy_bird.lastBirdHeight) < dart.notNull(flappy_bird.birdHeight) && dart.test(flappy_bird.isFall) && dart.notNull(flappy_bird.birdAnimAngle) < 90.0) {
      flappy_bird.birdAnimAngle = dart.notNull(flappy_bird.birdAnimAngle) + 4.0;
      flappy_bird.birdAngelBackwise = false;
      if (dart.notNull(flappy_bird.birdAnimAngle) > 90.0) flappy_bird.birdAnimAngle = 90.0;
    }
    if (!dart.test(flappy_bird.birdAngelBackwise) && dart.notNull(flappy_bird.birdAnimAngle) < 0.0) flappy_bird.birdAnimAngle = dart.notNull(flappy_bird.birdAnimAngle) + 8.0;
    if (dart.notNull(flappy_bird.birdAnimAngle) <= -60.0) flappy_bird.birdAngelBackwise = false;
    if (dart.notNull(flappy_bird.birdAnimAngle) > 10.0) {
      flappy_bird.birdAnimState = 2;
      return;
    }
    if (dart.notNull(flappy_bird.currTime) - dart.notNull(flappy_bird.birdAnimTime) > 75) {
      flappy_bird.birdAnimTime = flappy_bird.currTime;
      flappy_bird.birdAnimState = dart.notNull(flappy_bird.birdAnimState) + 1;
      if (flappy_bird.birdAnimState === 3) flappy_bird.birdAnimState = 0;
    }
  };
  flappy_bird.swapBuff = function() {
    flappy_bird.realCtx.clearRect(0, 0, flappy_bird.w, flappy_bird.h);
    flappy_bird.realCtx.drawImage(flappy_bird.canv, 0, 0);
  };
  flappy_bird.drawFps = function(fps) {
    flappy_bird.ctx.beginPath();
    flappy_bird.ctx.fillStyle = "#ffffff";
    flappy_bird.ctx.fillRect(10, 10, 50, 24);
    flappy_bird.ctx.fillStyle = "#000000";
    flappy_bird.ctx.font = "15px Arial";
    flappy_bird.ctx[$fillText](dart.str(fps) + " fps", 15, 26);
    flappy_bird.ctx.closePath();
  };
  flappy_bird.drawBackground = function() {
    flappy_bird.ctx.beginPath();
    flappy_bird.ctx[$setFillColorRgb](flappy_bird.backgroundColor[$_get](0), flappy_bird.backgroundColor[$_get](1), flappy_bird.backgroundColor[$_get](2));
    flappy_bird.ctx.fillRect(0, 0, flappy_bird.w, flappy_bird.h);
    flappy_bird.ctx.drawImage(flappy_bird.textures[$_get](flappy_bird.backgroundTexture), flappy_bird.backgroundAnim, dart.notNull(flappy_bird.h) - dart.notNull(flappy_bird.h) * dart.notNull(flappy_bird.groundHeight) - 402);
    flappy_bird.ctx.closePath();
  };
  flappy_bird.drawBird = function(x, y, R) {
    if (R === void 0) R = 10;
    flappy_bird.ctx.save();
    flappy_bird.ctx.beginPath();
    flappy_bird.ctx.translate(x, y);
    flappy_bird.ctx.rotate(flappy_bird.radians(flappy_bird.birdAnimAngle));
    flappy_bird.ctx.drawImage(flappy_bird.textures[$_get](dart.str(flappy_bird.birdTexture) + dart.str(flappy_bird.birdAnimState)), -dart.notNull(flappy_bird.birdRX) / 2, -dart.notNull(flappy_bird.birdRY) / 2);
    flappy_bird.ctx.translate(-dart.notNull(x), -dart.notNull(y));
    flappy_bird.ctx.closePath();
    flappy_bird.ctx.restore();
  };
  flappy_bird.drawPipe = function(center, top, height, width) {
    if (width === void 0) width = 40;
    let left = dart.notNull(center) - dart.notNull(width) / 2;
    flappy_bird.ctx.beginPath();
    flappy_bird.ctx.fillStyle = "#00ff00";
    flappy_bird.ctx.drawImage(flappy_bird.textures[$_get](dart.str(flappy_bird.pipeTexture) + "Top"), left, dart.notNull(top) - 320);
    if (dart.notNull(top) - 320 > 0) {
      flappy_bird.ctx.drawImage(flappy_bird.textures[$_get](dart.str(flappy_bird.pipeTexture) + "Filler"), left, dart.notNull(top) - 180 - dart.notNull(flappy_bird.h));
    }
    flappy_bird.ctx.drawImage(flappy_bird.textures[$_get](dart.str(flappy_bird.pipeTexture) + "Bottom"), left, dart.notNull(top) + dart.notNull(height));
    if (dart.notNull(top) + dart.notNull(height) + 320 < dart.notNull(flappy_bird.h) - dart.notNull(flappy_bird.h) * dart.notNull(flappy_bird.groundHeight)) {
      flappy_bird.ctx.drawImage(flappy_bird.textures[$_get](dart.str(flappy_bird.pipeTexture) + "Filler"), left, dart.notNull(top) + dart.notNull(height) + 320);
    }
    flappy_bird.ctx.closePath();
  };
  flappy_bird.drawEarth = function(height) {
    if (height === void 0) height = 125.0;
    let hy = dart.notNull(flappy_bird.h) - dart.notNull(height);
    flappy_bird.ctx.beginPath();
    flappy_bird.ctx.fillStyle = "#ded895";
    flappy_bird.ctx.fillRect(0, hy, flappy_bird.w, height);
    flappy_bird.ctx.drawImage(flappy_bird.textures[$_get]("ground"), -dart.notNull(flappy_bird.groundAnim), hy);
    flappy_bird.ctx.closePath();
  };
  flappy_bird.renderPipes = function() {
    for (let i = 0; i < dart.notNull(flappy_bird.pipes[$length]); i = i + 1) {
      if (dart.dtest(dart.dsend(dart.dsend(flappy_bird.pipes[$elementAt](i)[$_get]("center"), '+', [flappy_bird.pipeWidth]), '>', [0])) && dart.dtest(dart.dsend(dart.dsend(flappy_bird.pipes[$elementAt](i)[$_get]("center"), '-', [flappy_bird.pipeWidth]), '<', [flappy_bird.w]))) flappy_bird.drawPipe(core.double._check(flappy_bird.pipes[$elementAt](i)[$_get]("center")), core.int._check(flappy_bird.pipes[$elementAt](i)[$_get]("top")), flappy_bird.pipeHeight, flappy_bird.pipeWidth);
      if (dart.dtest(dart.dsend(dart.dsend(flappy_bird.pipes[$elementAt](i)[$_get]("center"), '-', [flappy_bird.pipeWidth]), '>', [flappy_bird.w]))) break;
    }
  };
  flappy_bird.drawScore = function() {
    let x = dart.notNull(flappy_bird.w) / 2;
    let y = dart.notNull(flappy_bird.h) * 1 / 6;
    flappy_bird.ctx.beginPath();
    flappy_bird.ctx.font = "60px Arial";
    flappy_bird.ctx.fillStyle = "#000000";
    flappy_bird.ctx[$fillText](dart.toString(flappy_bird.gameScore), x + 2, y + 2);
    flappy_bird.ctx[$fillText](dart.toString(flappy_bird.gameScore), x - 2, y - 2);
    flappy_bird.ctx[$fillText](dart.toString(flappy_bird.gameScore), x + 2, y - 2);
    flappy_bird.ctx[$fillText](dart.toString(flappy_bird.gameScore), x - 2, y + 2);
    flappy_bird.ctx.fillStyle = "#ffffff";
    flappy_bird.ctx[$fillText](dart.toString(flappy_bird.gameScore), x, y);
    flappy_bird.ctx.closePath();
  };
  flappy_bird.drawPopup = function() {
    let x = dart.notNull(flappy_bird.w) / 2;
    let y = dart.notNull(flappy_bird.h) / 2;
    let offsetX = 400.0;
    let offsetY = 200.0;
    flappy_bird.ctx.beginPath();
    flappy_bird.ctx.fillStyle = "#ffffff";
    flappy_bird.ctx.fillRect(x - offsetX / 2, y - offsetY / 2, offsetX, offsetY);
    flappy_bird.ctx.fillStyle = "#000000";
    flappy_bird.ctx.font = "60px Arial";
    if (!dart.test(flappy_bird.loose)) {
      flappy_bird.ctx[$fillText](flappy_bird.popupMsg, x - offsetX / 2 + 2 * flappy_bird.popupMsg.length, y - 20);
      let say2 = "Space or Click to fly!";
      flappy_bird.ctx.font = "30px Arial";
      flappy_bird.ctx[$fillText](say2, x - offsetX / 2 + 2 * say2.length + 25, y + 40);
      flappy_bird.ctx.font = "20px Arial";
      flappy_bird.ctx[$fillText]("Change dufficulty: [0-4]", x - offsetX / 2 + 5 * say2.length, y + 80);
    } else {
      flappy_bird.ctx[$fillText]("Score: " + dart.str(flappy_bird.gameScore), x - offsetX / 2 + 100 - 7 * dart.toString(flappy_bird.gameScore).length - 1, y - 40);
      flappy_bird.ctx.font = "40px Arial";
      flappy_bird.ctx[$fillText]("Difficulty: " + dart.str(flappy_bird.popupMsg), x - offsetX / 2 + 110, y + 30);
      let say2 = "Space or Click to start again!";
      flappy_bird.ctx.font = "30px Arial";
      flappy_bird.ctx[$fillText](say2, x - offsetX / 2 + 10, y + 80);
    }
    flappy_bird.ctx.strokeRect(x - offsetX / 2, y - offsetY / 2, offsetX, offsetY);
    flappy_bird.ctx.closePath();
  };
  flappy_bird.drawSplash = function() {
    if (dart.notNull(flappy_bird.splashValue) > 0.0 || dart.test(flappy_bird.splashReset)) {
      flappy_bird.ctx[$setFillColorRgb](dart.asInt(flappy_bird.splashInfo[$_get](0)), dart.asInt(flappy_bird.splashInfo[$_get](1)), dart.asInt(flappy_bird.splashInfo[$_get](2)), flappy_bird.splashValue);
      flappy_bird.ctx.fillRect(0, 0, flappy_bird.w, flappy_bird.h);
      if (dart.test(flappy_bird.resetToHigh)) {
        if (dart.notNull(flappy_bird.splashValue) < 1.0 - dart.notNull(flappy_bird.splashInfo[$_get](3)))
          flappy_bird.splashValue = dart.notNull(flappy_bird.splashValue) + dart.notNull(flappy_bird.splashInfo[$_get](3));
        else {
          flappy_bird.resetToHigh = false;
          flappy_bird.resetGame();
        }
      } else {
        if (dart.notNull(flappy_bird.splashValue) > dart.notNull(flappy_bird.splashInfo[$_get](3)) * 2)
          flappy_bird.splashValue = dart.notNull(flappy_bird.splashValue) - dart.notNull(flappy_bird.splashInfo[$_get](3));
        else {
          flappy_bird.splashValue = 0.0;
          if (dart.test(flappy_bird.splashReset)) {
            flappy_bird.splashReset = false;
          }
        }
      }
    }
  };
  flappy_bird.initRender = function() {
    html.querySelector("#fullscreen")[$onClick].listen(dart.fn(flappy_bird.goFullScreen, EventTovoid()));
    flappy_bird.realCanv = html.CanvasElement._check(html.querySelector("#render_area"));
    flappy_bird.realCtx = html.CanvasRenderingContext2D._check(flappy_bird.realCanv[$getContext]("2d"));
    flappy_bird.canv = html.CanvasElement.new();
    flappy_bird.ctx = html.CanvasRenderingContext2D._check(flappy_bird.canv[$getContext]("2d"));
    flappy_bird.bufferCanv = html.CanvasElement._check(html.document[$createElement]("canvas"));
    flappy_bird.bufferCtx = html.CanvasRenderingContext2D._check(flappy_bird.bufferCanv[$getContext]("2d"));
    if (flappy_bird.realCtx == null || flappy_bird.ctx == null || flappy_bird.bufferCtx == null) dart.throw(core.Exception.new("Failed to get 2D context!"));
    flappy_bird.realCtx.imageSmoothingEnabled = true;
    flappy_bird.ctx.imageSmoothingEnabled = true;
    flappy_bird.bufferCtx.imageSmoothingEnabled = true;
    flappy_bird.resize();
    flappy_bird.initTextures();
    flappy_bird.respawnTextures();
    flappy_bird.img[$onLoad].listen(dart.fn(flappy_bird.prepareTextures, EventTovoid$()));
    html.window[$onKeyPress].listen(dart.fn(flappy_bird.clickBird, EventTovoid()));
    if (dart.test(flappy_bird.isDesktopBrowser())) {
      flappy_bird.realCanv[$onClick].listen(dart.fn(flappy_bird.clickBird, EventTovoid()));
    } else {
      flappy_bird.realCanv[$onTouchStart].listen(dart.fn(flappy_bird.gameTouchStart, EventTovoid()));
    }
    html.window[$onResize].listen(dart.fn(flappy_bird.resize, EventTovoid$()));
  };
  flappy_bird.initAudio = function() {
    flappy_bird.audio = new audio.Audio.new(dart.fn(flappy_bird.audioLoaded, VoidTovoid()));
  };
  flappy_bird.audioLoaded = function() {
    flappy_bird.initRender();
    flappy_bird.generatePipes();
    flappy_bird.tick(0.0);
  };
  flappy_bird.isDesktopBrowser = function() {
    core.print("Browser is: " + dart.str(browser_detect.browser));
    let b = browser_detect.browser;
    return dart.test(b.isChrome) || dart.test(b.isFirefox) || dart.test(b.isIe) || dart.test(b.isOpera) || dart.test(b.isSafari);
  };
  flappy_bird.goFullScreen = function(e) {
    flappy_bird.realCanv[$requestFullscreen]();
  };
  flappy_bird.initTextures = function() {
    flappy_bird.textures[$putIfAbsent]("backgroundDay", dart.fn(() => html.CanvasElement.new(), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("backgroundNight", dart.fn(() => html.CanvasElement.new(), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("ground", dart.fn(() => html.CanvasElement.new(), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("birdYellow0", dart.fn(() => html.CanvasElement.new(), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("birdYellow1", dart.fn(() => html.CanvasElement.new(), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("birdYellow2", dart.fn(() => html.CanvasElement.new(), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("birdBlue0", dart.fn(() => html.CanvasElement.new(), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("birdBlue1", dart.fn(() => html.CanvasElement.new(), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("birdBlue2", dart.fn(() => html.CanvasElement.new(), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("birdRed0", dart.fn(() => html.CanvasElement.new(), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("birdRed1", dart.fn(() => html.CanvasElement.new(), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("birdRed2", dart.fn(() => html.CanvasElement.new(), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("pipeGreenTop", dart.fn(() => html.CanvasElement.new(), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("pipeGreenBottom", dart.fn(() => html.CanvasElement.new(), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("pipeGreenFiller", dart.fn(() => html.CanvasElement.new(), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("pipeRedTop", dart.fn(() => html.CanvasElement.new(), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("pipeRedBottom", dart.fn(() => html.CanvasElement.new(), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("pipeRedFiller", dart.fn(() => html.CanvasElement.new(), VoidToCanvasElement()));
  };
  flappy_bird.prepareTextures = function(e) {
    if (e === void 0) e = null;
    core.print("Textures chached!");
    flappy_bird.textures[$clear]();
    flappy_bird.textures[$putIfAbsent]("backgroundDay", dart.fn(() => flappy_bird.setBufferFromTexture(0, 0, 288, 512, "repeat-x", dart.notNull(flappy_bird.w) + 288, 512), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("backgroundNight", dart.fn(() => flappy_bird.setBufferFromTexture(292, 0, 288, 512, "repeat-x", dart.notNull(flappy_bird.w) + 288, 512), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("ground", dart.fn(() => flappy_bird.setBufferFromTexture(584, 0, 336, 112, "repeat-x", dart.notNull(flappy_bird.w) + 336, 112), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("birdYellow0", dart.fn(() => flappy_bird.setBufferFromTexture(6, 982, 34, 24), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("birdYellow1", dart.fn(() => flappy_bird.setBufferFromTexture(62, 982, 34, 24), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("birdYellow2", dart.fn(() => flappy_bird.setBufferFromTexture(118, 982, 34, 24), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("birdBlue0", dart.fn(() => flappy_bird.setBufferFromTexture(174, 982, 34, 24), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("birdBlue1", dart.fn(() => flappy_bird.setBufferFromTexture(230, 658, 34, 24), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("birdBlue2", dart.fn(() => flappy_bird.setBufferFromTexture(230, 710, 34, 24), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("birdRed0", dart.fn(() => flappy_bird.setBufferFromTexture(230, 762, 34, 24), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("birdRed1", dart.fn(() => flappy_bird.setBufferFromTexture(230, 814, 34, 24), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("birdRed2", dart.fn(() => flappy_bird.setBufferFromTexture(230, 866, 34, 24), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("pipeGreenTop", dart.fn(() => flappy_bird.setBufferFromTexture(112, 646, 52, 320), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("pipeGreenBottom", dart.fn(() => flappy_bird.setBufferFromTexture(168, 646, 52, 320), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("pipeGreenFiller", dart.fn(() => flappy_bird.setBufferFromTexture(112, 646, 52, 294, "repeat-y", 52, flappy_bird.h), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("pipeRedTop", dart.fn(() => flappy_bird.setBufferFromTexture(0, 646, 52, 320), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("pipeRedBottom", dart.fn(() => flappy_bird.setBufferFromTexture(56, 646, 52, 320), VoidToCanvasElement()));
    flappy_bird.textures[$putIfAbsent]("pipeRedFiller", dart.fn(() => flappy_bird.setBufferFromTexture(0, 646, 52, 294, "repeat-y", 52, flappy_bird.h), VoidToCanvasElement()));
    flappy_bird.respawnTextures();
  };
  flappy_bird.resizeTextures = function(w, h) {
    flappy_bird.textures[$_set]("backgroundDay", flappy_bird.setBufferFromTexture(0, 0, 288, 512, "repeat-x", w, 512));
    flappy_bird.textures[$_set]("backgroundNight", flappy_bird.setBufferFromTexture(292, 0, 288, 512, "repeat-x", w, 512));
    flappy_bird.textures[$_set]("ground", flappy_bird.setBufferFromTexture(584, 0, 336, 112, "repeat-x", dart.notNull(w) + 336, 112));
    flappy_bird.textures[$_set]("pipeGreenFiller", flappy_bird.setBufferFromTexture(112, 646, 52, 294, "repeat-y", 52, h));
    flappy_bird.textures[$_set]("pipeRedFiller", flappy_bird.setBufferFromTexture(0, 646, 52, 294, "repeat-y", 52, h));
  };
  flappy_bird.setBufferFromTexture = function(x, y, width, height, repeat, rX, rY) {
    if (repeat === void 0) repeat = null;
    if (rX === void 0) rX = null;
    if (rY === void 0) rY = null;
    let buf = html.CanvasElement.new();
    let bufCtx = html.CanvasRenderingContext2D._check(buf[$getContext]("2d"));
    if (bufCtx == null) dart.throw(core.Exception.new("Failed to get 2D context for texture buffer!"));
    bufCtx.imageSmoothingEnabled = true;
    buf.width = repeat != null ? rX : width;
    buf.height = repeat != null ? rY : height;
    if (repeat != null) {
      flappy_bird.bufferCanv.width = width;
      flappy_bird.bufferCanv.height = height;
      flappy_bird.bufferCtx.clearRect(0, 0, width, height);
      flappy_bird.bufferCtx[$drawImageScaledFromSource](flappy_bird.img, x, y, width, height, 0, 0, width, height);
      bufCtx.rect(0, 0, rX, rY);
      bufCtx.fillStyle = bufCtx.createPattern(flappy_bird.bufferCanv, repeat);
      bufCtx.fill();
    } else {
      bufCtx[$drawImageScaledFromSource](flappy_bird.img, x, y, width, height, 0, 0, width, height);
    }
    return buf;
  };
  flappy_bird.resize = function(e) {
    if (e === void 0) e = null;
    flappy_bird.w = html.window.innerWidth;
    flappy_bird.h = html.window.innerHeight;
    flappy_bird.aspect = dart.notNull(flappy_bird.w) / dart.notNull(flappy_bird.h);
    flappy_bird.realCanv.width = flappy_bird.w;
    flappy_bird.realCanv.height = flappy_bird.h;
    flappy_bird.canv.width = flappy_bird.w;
    flappy_bird.canv.height = flappy_bird.h;
    flappy_bird.birdPosition = dart.notNull(flappy_bird.w) * 1 / 4;
    core.print("Render size: " + dart.str(flappy_bird.w) + "x" + dart.str(flappy_bird.h));
    flappy_bird.resizeTextures(flappy_bird.w, flappy_bird.h);
  };
  flappy_bird.clickBird = function(e) {
    e.preventDefault();
    if (e.type === "click") {
      if ((dart.notNull(flappy_bird.gameState) & (dart.notNull(flappy_bird.STARTED) | (dart.notNull(flappy_bird.READY) & ~dart.notNull(flappy_bird.LOOSE) >>> 0) >>> 0) >>> 0) >>> 0 === (dart.notNull(flappy_bird.STARTED) | (dart.notNull(flappy_bird.READY) & ~dart.notNull(flappy_bird.LOOSE) >>> 0) >>> 0) >>> 0) {
        flappy_bird.swipeBird();
      } else {
        if (dart.test(flappy_bird.loose) && dart.notNull(flappy_bird.currTime) - dart.notNull(flappy_bird.pauseAfterLoose) < dart.notNull(flappy_bird.timeAfterLoose) || dart.test(flappy_bird.resetToHigh)) return;
        if ((dart.notNull(flappy_bird.gameState) & dart.notNull(flappy_bird.STARTED)) >>> 0 === flappy_bird.STARTED)
          flappy_bird.resetWithSplash();
        else
          flappy_bird.stratGame();
      }
    } else if (e.type === "keypress") {
      let kbe = html.KeyboardEvent._check(e);
      switch (kbe.keyCode) {
        case 32:
        {
          if ((dart.notNull(flappy_bird.gameState) & (dart.notNull(flappy_bird.STARTED) | (dart.notNull(flappy_bird.READY) & ~dart.notNull(flappy_bird.LOOSE) >>> 0) >>> 0) >>> 0) >>> 0 === (dart.notNull(flappy_bird.STARTED) | (dart.notNull(flappy_bird.READY) & ~dart.notNull(flappy_bird.LOOSE) >>> 0) >>> 0) >>> 0) {
            flappy_bird.swipeBird();
          } else {
            if (dart.test(flappy_bird.loose) && dart.notNull(flappy_bird.currTime) - dart.notNull(flappy_bird.pauseAfterLoose) < dart.notNull(flappy_bird.timeAfterLoose) || dart.test(flappy_bird.resetToHigh)) return;
            if ((dart.notNull(flappy_bird.gameState) & dart.notNull(flappy_bird.STARTED)) >>> 0 === flappy_bird.STARTED)
              flappy_bird.resetWithSplash();
            else
              flappy_bird.stratGame();
          }
          break;
        }
        case 27:
        {
          break;
        }
        case 48:
        {
          flappy_bird.changeGameLevel(0);
          break;
        }
        case 49:
        {
          flappy_bird.changeGameLevel(1);
          break;
        }
        case 50:
        {
          flappy_bird.changeGameLevel(2);
          break;
        }
        case 51:
        {
          flappy_bird.changeGameLevel(3);
          break;
        }
        case 52:
        {
          flappy_bird.changeGameLevel(4);
          break;
        }
      }
    }
  };
  flappy_bird.stratGame = function() {
    flappy_bird.setGameState((dart.notNull(flappy_bird.STARTED) | (dart.notNull(flappy_bird.READY) & ~dart.notNull(flappy_bird.LOOSE) >>> 0) >>> 0) >>> 0);
    flappy_bird.swipeBird();
  };
  flappy_bird.swipeBird = function() {
    flappy_bird.audio.play("wing");
    flappy_bird.isFall = false;
    flappy_bird.lastBirdHeight = flappy_bird.birdHeight;
    flappy_bird.lastTime = flappy_bird.currTime;
  };
  flappy_bird.generatePipes = function(count) {
    if (count === void 0) count = 20;
    if (dart.notNull(count) < 1) dart.throw(core.Exception.new("Invalid argument!"));
    if (flappy_bird.pipes != null) flappy_bird.pipes.clear();
    let max = dart.notNull(flappy_bird.h) - dart.notNull(flappy_bird.h) * dart.notNull(flappy_bird.groundHeight) - dart.notNull(flappy_bird.pipeHeight) - dart.notNull(flappy_bird.pipeGap);
    for (let i = 0; i < dart.notNull(count); i = i + 1) {
      flappy_bird.generateNewPipe(i, max);
    }
  };
  flappy_bird.generateNewPipe = function(i, max) {
    let top = null;
    let previewTop = null;
    let previewCenter = null;
    let topMin = null;
    let topMax = null;
    let pipe = new (LinkedMapOfString$dynamic()).new();
    pipe[$putIfAbsent]("checked", dart.fn(() => false, VoidTobool()));
    if (i === 0) {
      pipe[$putIfAbsent]("center", dart.fn(() => dart.notNull(flappy_bird.w) / 2 + dart.notNull(i) * (dart.notNull(flappy_bird.pipeDistance) + dart.notNull(flappy_bird.pipeWidth)), VoidTodouble()));
      top = flappy_bird.randMinMax(flappy_bird.pipeGap, max);
    } else {
      previewCenter = core.double._check(flappy_bird.pipes[$elementAt](dart.notNull(i) - 1)[$_get]("center"));
      pipe[$putIfAbsent]("center", dart.fn(() => dart.notNull(previewCenter) + dart.notNull(flappy_bird.pipeWidth) + dart.notNull(flappy_bird.pipeDistance), VoidTodouble()));
      previewTop = core.int._check(flappy_bird.pipes[$elementAt](dart.notNull(i) - 1)[$_get]("top"));
      topMin = (dart.notNull(previewTop) - dart.notNull(flappy_bird.pipeRange))[$toDouble]();
      topMax = (dart.notNull(previewTop) + dart.notNull(flappy_bird.pipeRange))[$toDouble]();
      if (dart.notNull(topMin) < dart.notNull(flappy_bird.pipeGap)) {
        topMin = flappy_bird.pipeGap[$toDouble]();
      }
      if (dart.notNull(topMax) + dart.notNull(flappy_bird.pipeHeight) > dart.notNull(max)) {
        topMax = max;
      }
      top = flappy_bird.randMinMax(topMin[$toInt](), topMax);
    }
    pipe[$putIfAbsent]("top", dart.fn(() => top, VoidToint()));
    flappy_bird.pipes.add(pipe);
  };
  flappy_bird.randMinMax = function(min, max) {
    return dart.notNull(min) + dart.notNull(flappy_bird.rnd.nextInt(max[$toInt]() - dart.notNull(min)));
  };
  flappy_bird.radians = function(degrees) {
    return dart.notNull(degrees) * dart.notNull(math.pi) / 180.0;
  };
  flappy_bird.respawnTextures = function() {
    flappy_bird.backgroundTexture = flappy_bird.randMinMax(0, 2.0) === 0 ? "backgroundDay" : "backgroundNight";
    flappy_bird.pipeTexture = flappy_bird.randMinMax(0, 2.0) === 0 ? "pipeGreen" : "pipeRed";
    switch (flappy_bird.randMinMax(0, 3.0)) {
      case 0:
      {
        flappy_bird.birdTexture = "birdYellow";
        break;
      }
      case 1:
      {
        flappy_bird.birdTexture = "birdBlue";
        break;
      }
      case 2:
      {
        flappy_bird.birdTexture = "birdRed";
        break;
      }
    }
    let ctx = html.CanvasRenderingContext2D._check(flappy_bird.textures[$_get](flappy_bird.backgroundTexture)[$getContext]("2d"));
    let iData = ctx[$getImageData](0, 0, 1, 1);
    flappy_bird.backgroundColor = iData.data;
  };
  flappy_bird.resetGame = function() {
    flappy_bird.birdHeight = dart.notNull(flappy_bird.h) * 1 / 3;
    flappy_bird.birdAnimAngle = 0.0;
    flappy_bird.birdAngelBackwise = true;
    flappy_bird.gameScore = 0;
    flappy_bird.pauseAfterLoose = flappy_bird.currTime;
    flappy_bird.garbageLastTime = flappy_bird.currTime;
    flappy_bird.loose = false;
    if (!dart.test(flappy_bird.levelChanged)) {
      flappy_bird.generatePipes();
    }
    flappy_bird.respawnTextures();
    flappy_bird.levelChanged = false;
    flappy_bird.popupMsg = "Click to play!";
    flappy_bird.gameState = 0;
  };
  flappy_bird.resetWithSplash = function() {
    flappy_bird.splashReset = true;
    flappy_bird.resetToHigh = true;
    flappy_bird.splashValue = 0.0;
    flappy_bird.splashInfo = JSArrayOfnum().of([0, 0, 0, 0.02]);
  };
  flappy_bird.gameLoose = function() {
    flappy_bird.audio.play("hit", "die");
    flappy_bird.unSetGameState((dart.notNull(flappy_bird.READY) | dart.notNull(flappy_bird.LOOSE)) >>> 0);
    flappy_bird.loose = true;
    flappy_bird.pauseAfterLoose = flappy_bird.currTime;
    flappy_bird.popupMsg = dart.toString(flappy_bird.gameLevel);
    flappy_bird.splashValue = 1.0;
    flappy_bird.splashInfo = JSArrayOfnum().of([255, 255, 255, 0.05]);
  };
  flappy_bird.gameTogglePause = function() {
    if ((dart.notNull(flappy_bird.gameState) & dart.notNull(flappy_bird.STARTED)) >>> 0 === flappy_bird.STARTED)
      flappy_bird.unSetGameState(flappy_bird.STARTED);
    else
      flappy_bird.setGameState(flappy_bird.STARTED);
  };
  flappy_bird.changeGameLevel = function(lvl) {
    if ((dart.notNull(flappy_bird.gameState) & (dart.notNull(flappy_bird.STARTED) | (dart.notNull(flappy_bird.READY) & ~dart.notNull(flappy_bird.LOOSE) >>> 0) >>> 0) >>> 0) >>> 0 !== (dart.notNull(flappy_bird.STARTED) | (dart.notNull(flappy_bird.READY) & ~dart.notNull(flappy_bird.LOOSE) >>> 0) >>> 0) >>> 0) {
      flappy_bird.gameLevel = lvl;
      flappy_bird.pipeRange = dart.notNull(flappy_bird.gameLevel) * 50 + 1;
      flappy_bird.levelChanged = true;
      flappy_bird.birdHeight = dart.notNull(flappy_bird.h) * 1 / 3;
      flappy_bird.birdAnimAngle = 0.0;
      flappy_bird.generatePipes();
    }
  };
  flappy_bird.gameTouchStart = function(e) {
    e.preventDefault();
    flappy_bird.swipeBird();
    flappy_bird.gameIsTouch = true;
  };
  flappy_bird.gameTouchEnd = function(e) {
    e.preventDefault();
    flappy_bird.gameIsTouch = false;
  };
  dart.defineLazy(flappy_bird, {
    /*flappy_bird.G*/get G() {
      return 0.012;
    },
    /*flappy_bird.G2*/get G2() {
      return dart.notNull(flappy_bird.G) * 10;
    },
    /*flappy_bird.groundHeight*/get groundHeight() {
      return 1 / 5;
    },
    /*flappy_bird.birdMaxSpeed*/get birdMaxSpeed() {
      return 700.0;
    },
    /*flappy_bird.birdR*/get birdR() {
      return 10;
    },
    /*flappy_bird.birdRX*/get birdRX() {
      return 34;
    },
    /*flappy_bird.birdRY*/get birdRY() {
      return 24;
    },
    /*flappy_bird.birdSwipeHeight*/get birdSwipeHeight() {
      return 60;
    },
    /*flappy_bird.pipeWidth*/get pipeWidth() {
      return 52;
    },
    /*flappy_bird.pipeHeight*/get pipeHeight() {
      return 110;
    },
    /*flappy_bird.pipeDistance*/get pipeDistance() {
      return dart.notNull(flappy_bird.pipeWidth) * 3.0;
    },
    /*flappy_bird.pipeSpeed*/get pipeSpeed() {
      return dart.notNull(flappy_bird.G) * 250;
    },
    /*flappy_bird.pipeGap*/get pipeGap() {
      return 50;
    },
    /*flappy_bird.garbagePipesCount*/get garbagePipesCount() {
      return 10;
    },
    /*flappy_bird.garbageFreq*/get garbageFreq() {
      return dart.notNull(flappy_bird.pipeSpeed) * 275 * dart.notNull(flappy_bird.garbagePipesCount);
    },
    /*flappy_bird.timeAfterLoose*/get timeAfterLoose() {
      return 500;
    },
    /*flappy_bird.backgroundSpeed*/get backgroundSpeed() {
      return dart.notNull(flappy_bird.pipeSpeed) / 2;
    },
    /*flappy_bird.w*/get w() {
      return null;
    },
    set w(_) {},
    /*flappy_bird.h*/get h() {
      return null;
    },
    set h(_) {},
    /*flappy_bird.aspect*/get aspect() {
      return null;
    },
    set aspect(_) {},
    /*flappy_bird.canv*/get canv() {
      return null;
    },
    set canv(_) {},
    /*flappy_bird.realCanv*/get realCanv() {
      return null;
    },
    set realCanv(_) {},
    /*flappy_bird.bufferCanv*/get bufferCanv() {
      return null;
    },
    set bufferCanv(_) {},
    /*flappy_bird.ctx*/get ctx() {
      return null;
    },
    set ctx(_) {},
    /*flappy_bird.realCtx*/get realCtx() {
      return null;
    },
    set realCtx(_) {},
    /*flappy_bird.bufferCtx*/get bufferCtx() {
      return null;
    },
    set bufferCtx(_) {},
    /*flappy_bird.img*/get img() {
      return html.ImageElement.new({src: "img/atlas.png"});
    },
    set img(_) {},
    /*flappy_bird.textures*/get textures() {
      return new (LinkedMapOfString$CanvasElement()).new();
    },
    set textures(_) {},
    /*flappy_bird.audio*/get audio() {
      return null;
    },
    set audio(_) {},
    /*flappy_bird.gameLevel*/get gameLevel() {
      return 3;
    },
    set gameLevel(_) {},
    /*flappy_bird.pipeRange*/get pipeRange() {
      return dart.notNull(flappy_bird.gameLevel) * 50 + 1;
    },
    set pipeRange(_) {},
    /*flappy_bird.gameScore*/get gameScore() {
      return 0;
    },
    set gameScore(_) {},
    /*flappy_bird.gameIsTouch*/get gameIsTouch() {
      return false;
    },
    set gameIsTouch(_) {},
    /*flappy_bird.pauseAfterLoose*/get pauseAfterLoose() {
      return 0.0;
    },
    set pauseAfterLoose(_) {},
    /*flappy_bird.popupMsg*/get popupMsg() {
      return "Click to play!";
    },
    set popupMsg(_) {},
    /*flappy_bird.loose*/get loose() {
      return false;
    },
    set loose(_) {},
    /*flappy_bird.levelChanged*/get levelChanged() {
      return false;
    },
    set levelChanged(_) {},
    /*flappy_bird.lastPhisicTime*/get lastPhisicTime() {
      return 0.0;
    },
    set lastPhisicTime(_) {},
    /*flappy_bird.lastTime*/get lastTime() {
      return 0.0;
    },
    set lastTime(_) {},
    /*flappy_bird.currTime*/get currTime() {
      return 0.0;
    },
    set currTime(_) {},
    /*flappy_bird.garbageLastTime*/get garbageLastTime() {
      return 0.0;
    },
    set garbageLastTime(_) {},
    /*flappy_bird.backgroundAnim*/get backgroundAnim() {
      return 0.0;
    },
    set backgroundAnim(_) {},
    /*flappy_bird.groundAnim*/get groundAnim() {
      return 0.0;
    },
    set groundAnim(_) {},
    /*flappy_bird.rnd*/get rnd() {
      return math.Random.new();
    },
    set rnd(_) {},
    /*flappy_bird.dateTime*/get dateTime() {
      return new core.DateTime.now();
    },
    set dateTime(_) {},
    /*flappy_bird.lastAnimationTime*/get lastAnimationTime() {
      return flappy_bird.dateTime.millisecondsSinceEpoch;
    },
    set lastAnimationTime(_) {},
    /*flappy_bird.backgroundTexture*/get backgroundTexture() {
      return null;
    },
    set backgroundTexture(_) {},
    /*flappy_bird.pipeTexture*/get pipeTexture() {
      return null;
    },
    set pipeTexture(_) {},
    /*flappy_bird.birdTexture*/get birdTexture() {
      return null;
    },
    set birdTexture(_) {},
    /*flappy_bird.backgroundColor*/get backgroundColor() {
      return JSArrayOfint().of([]);
    },
    set backgroundColor(_) {},
    /*flappy_bird.splashValue*/get splashValue() {
      return 1.0;
    },
    set splashValue(_) {},
    /*flappy_bird.splashInfo*/get splashInfo() {
      return JSArrayOfnum().of([0, 0, 0, 0.02]);
    },
    set splashInfo(_) {},
    /*flappy_bird.splashReset*/get splashReset() {
      return false;
    },
    set splashReset(_) {},
    /*flappy_bird.resetToHigh*/get resetToHigh() {
      return false;
    },
    set resetToHigh(_) {},
    /*flappy_bird.gameState*/get gameState() {
      return 0;
    },
    set gameState(_) {},
    /*flappy_bird.STARTED*/get STARTED() {
      return 1;
    },
    /*flappy_bird.NOT_STARTED*/get NOT_STARTED() {
      return ~dart.notNull(flappy_bird.STARTED) >>> 0;
    },
    /*flappy_bird.READY*/get READY() {
      return 1 << 1;
    },
    /*flappy_bird.NOT_READY*/get NOT_READY() {
      return ~dart.notNull(flappy_bird.READY) >>> 0;
    },
    /*flappy_bird.LOOSE*/get LOOSE() {
      return 1 << 2;
    },
    /*flappy_bird.NOT_LOOSE*/get NOT_LOOSE() {
      return ~dart.notNull(flappy_bird.LOOSE) >>> 0;
    },
    /*flappy_bird.FULL_STATE*/get FULL_STATE() {
      return (dart.notNull(flappy_bird.STARTED) | dart.notNull(flappy_bird.READY) | dart.notNull(flappy_bird.LOOSE)) >>> 0;
    },
    /*flappy_bird.birdPosition*/get birdPosition() {
      return dart.notNull(flappy_bird.w) * 1 / 4;
    },
    set birdPosition(_) {},
    /*flappy_bird.birdHeight*/get birdHeight() {
      return dart.notNull(flappy_bird.h) * 1 / 3;
    },
    set birdHeight(_) {},
    /*flappy_bird.isFall*/get isFall() {
      return true;
    },
    set isFall(_) {},
    /*flappy_bird.birdBack*/get birdBack() {
      return false;
    },
    set birdBack(_) {},
    /*flappy_bird.lastBirdHeight*/get lastBirdHeight() {
      return 0.0;
    },
    set lastBirdHeight(_) {},
    /*flappy_bird.birdAnimTime*/get birdAnimTime() {
      return 0.0;
    },
    set birdAnimTime(_) {},
    /*flappy_bird.birdAnimState*/get birdAnimState() {
      return 0;
    },
    set birdAnimState(_) {},
    /*flappy_bird.birdAnimAngle*/get birdAnimAngle() {
      return 0.0;
    },
    set birdAnimAngle(_) {},
    /*flappy_bird.birdAngelBackwise*/get birdAngelBackwise() {
      return true;
    },
    set birdAngelBackwise(_) {},
    /*flappy_bird.currPipe*/get currPipe() {
      return new (LinkedMapOfString$dynamic()).new();
    },
    set currPipe(_) {},
    /*flappy_bird.pipes*/get pipes() {
      return new (_HashSetOfMapOfString$dynamic()).new();
    },
    set pipes(_) {}
  });
  dart.trackLibraries("web/audio", {
    "org-dartlang-app:///web/browser_detect.dart": browser_detect,
    "org-dartlang-app:///web/audio.dart": audio,
    "org-dartlang-app:///web/flappy_bird.dart": flappy_bird
  }, {
    "org-dartlang-app:///web/browser_detect.dart": ["browser.dart", "browser_version.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///web/browser.dart","org-dartlang-app:///web/browser_version.dart","org-dartlang-app:///web/browser_detect.dart","org-dartlang-app:///web/audio.dart","org-dartlang-app:///web/flappy_bird.dart"],"names":[],"mappings":"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","file":"audio.ddc.js"}');
  // Exports:
  return {
    browser_detect: browser_detect,
    audio: audio,
    flappy_bird: flappy_bird
  };
});

//# sourceMappingURL=audio.ddc.js.map
