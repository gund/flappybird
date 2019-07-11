library audio_loader;

import 'dart:html';
import 'dart:web_audio';
export 'audio_loader.dart';

typedef void AudioCallback();

class Audio {
  AudioContext _ctx;
  static const Map<String, String> _bufferList = const {
    "hit": "audio/sfx_hit.ogg",
    "die": "audio/sfx_die.ogg",
    "point": "audio/sfx_point.ogg",
    "wing": "audio/sfx_wing.ogg"
  };
  static Map<String, AudioBuffer> _buffers = new Map<String, AudioBuffer>();
  AudioBufferSourceNode _source, _secondSource;
  AudioCallback _callback;
  int _loadCount = 0;

  Audio(this._callback) {
    try {
      _ctx = new AudioContext();
      _loadBuffers();
    } catch (e) {
      print(e);
    }
  }

  void _loadBuffers() {
    _bufferList.forEach((String key, String url) {
      _loadSingleBuffer(key, url);
    });
  }

  void _loadSingleBuffer(String key, String url) {
    HttpRequest request = new HttpRequest();
    request.open("GET", url, async: true);
    request.responseType = "arraybuffer";
    request.onLoad.listen((e) {
      _ctx.decodeAudioData(request.response).then((AudioBuffer buffer) {
        if (buffer == null)
          throw new Exception("Audio: Failed to decode buffer $key");
        _buffers.putIfAbsent(key, () => buffer);
        if (++_loadCount == _bufferList.length) _buffersLoaded();
      });
    });
    request.onError.listen((e) {
      throw new Exception("Audio: Failes to send XHR!");
    });
    request.send();
  }

  void _buffersLoaded() {
    print("Audio: Loaded ${_loadCount + 1} buffers");
    _callback();
  }

  void play(String buffer, [String secondBuffer]) {
    if (_buffers.keys.contains(buffer)) {
      _source = _ctx.createBufferSource();
      _source.buffer = _buffers[buffer];
      _source.connectNode(_ctx.destination);
      _source.start(0);
      if (secondBuffer != null && _buffers.keys.contains(secondBuffer)) {
        new Future.delayed(
            new Duration(milliseconds: 400), () => play(secondBuffer));
      }
    }
  }
}
