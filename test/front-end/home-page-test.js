'use strict';
var app = require('../../app/js/app.js');

describe('Home Page', function() {
  it('should have lodash', function() {;
    expect(window._).toBeDefined();
  });

  it('should have the object exported from app.js', function() {
    expect(app.foo).toMatch(/bar/);
  });
});
