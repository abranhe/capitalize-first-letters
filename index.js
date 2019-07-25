'use strict';

module.exports = input => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	return input.toLowerCase().replace(/\b[a-z](?=[a-z]{2})/g, letter => letter.toUpperCase());
};
