(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global['kirby-strings'] = {})));
}(this, (function (exports) { 'use strict';

const kirby = "(>'')>";
const metaKnight = "<(*^*)>";
const modernKirby = "༼ つ ◕_◕ ༽つ";

const createKirbyizer = delimiter => input => {
	if (input instanceof Array) {
		return input.join(delimiter);
	}
	return input.length ? input.split(delimiter) : input;
};

const kirbyizer = createKirbyizer(kirby);
const metaKnightizer = createKirbyizer(metaKnight);
const modernKirbyizer = createKirbyizer(modernKirby);

exports['default'] = kirbyizer;
exports.kirby = kirbyizer;
exports.metaKnight = metaKnightizer;
exports.modernKirby = modernKirbyizer;

Object.defineProperty(exports, '__esModule', { value: true });

})));
