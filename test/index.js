'use strict';

var assert = require('assert');
var mongoose = require('mongoose');
var immutablePlugin = require('../');

var Schema = mongoose.Schema;

describe('ImmutableFieldPlugin', function() {
  var testModel;
  before(function() {
    var testSchema = new Schema({
      testField: {type: String, immutable: true},
      testDefaultField: {type: String, default: 'test', immutable: true}
    });
    testSchema.plugin(immutablePlugin);
    var Model = mongoose.model('Test', testSchema);
    testModel = new Model({
      testField: 'test'
    });
  });
  it('should avoid overriding an immutable field', function() {
    testModel.testField = 'updated';
    assert(testModel.testField === 'test');
  });
  it('should avoid overriding a default immutable field', function() {
    testModel.testDefaultField = 'updated';
    assert(testModel.testDefaultField === 'test');
  });
});
