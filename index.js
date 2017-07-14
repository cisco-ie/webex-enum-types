'use strict';
const types = require('./types');

module.exports = Object.assign({}, types, {
	list: () => {
		return Object.keys(types);
	}
});
