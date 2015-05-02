'use strict';

function immutableField(field) {
  return function(value) {
    return this[field] || value;
  };
}

module.exports = exports = function immutableFieldPlugin(schema) {
  var props = schema.tree;
  Object.keys(props).forEach(function(prop) {
    if (props[prop].immutable) {
      schema.path(prop).set(immutableField(prop));
    }
  });
};
