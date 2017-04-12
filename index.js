/**
 * @module
 */

/**
 * @typedef {Object} FooData
 * @property {String} foo
 */

/**
 * @typedef {Object} BarData
 * @property {String} bar
 */

/**
 * When referencing a local typedef by "name" it doesn't link.
 * @param {FooData} fooData
 */
exports.Foo = function(fooData) {

};

/**
 * When referencing a local typedef by "module:" it links.
 * @param {module:index~BarData} barData
 */
exports.Bar = function(barData) {

};
