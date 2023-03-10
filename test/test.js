let assert = require('assert');
const GFormat = require('../index.js');

describe('test underscore2CamelCase', function () {
  it('id to id', function () {
    assert.equal(GFormat.underscore2CamelCase('id'), 'id');
  });
  it('my_name to Myname', function () {
    assert.equal(GFormat.underscore2CamelCase('my_name'), 'myName');
  });
  it('my_real_name to myRealName', function () {
    assert.equal(GFormat.underscore2CamelCase('my_real_name'), 'myRealName');
  });
});

describe('test camelCase2underscore', function () {
  it('id to id', function () {
    assert.equal(GFormat.camelCase2underscore('id'), 'id');
  });
  it('myName to my_name', function () {
    assert.equal(GFormat.camelCase2underscore('myName'), 'my_name');
  });
  it('myRealName to my_real_name', function () {
    assert.equal(GFormat.camelCase2underscore('myRealName'), 'my_real_name');
  });
});

describe('test formatObject', function () {
  let underscoreObj = {
    'id': 1,
    'my_name': 'siria',
    'my_real_name': 'dog',
  };
  let camelCaseObj = {
    'id': 1,
    'myName': 'siria',
    'myRealName': 'dog',
  }
  it('underscore to camelCase', function () {
    const json1 = JSON.stringify(GFormat.getCamelCase({...underscoreObj}));
    const json2 = JSON.stringify(camelCaseObj);
    assert.equal(json1 === json2, true);
  });
  it('camelCase to underscore', function () {
    const json1 = JSON.stringify(GFormat.getUndersocre({...camelCaseObj}));
    const json2 = JSON.stringify(underscoreObj);
    assert.equal(json1 === json2, true);
  });
  it('underscore to underscore', function () {
    const json1 = JSON.stringify(GFormat.getUndersocre({...underscoreObj}));
    const json2 = JSON.stringify(underscoreObj);
    assert.equal(json1 === json2, true);
  });
  it('camelCase to camelCase', function () {
    const json1 = JSON.stringify(GFormat.getCamelCase({...camelCaseObj}));
    const json2 = JSON.stringify(camelCaseObj);
    assert.equal(json1 === json2, true);
  });
});
