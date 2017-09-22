'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
