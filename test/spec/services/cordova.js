'use strict';

describe('Service: phoneGap', function () {

  // load the service's module
  beforeEach(module('angularCordovaApp'));

  // instantiate service
  var phoneGap;
  beforeEach(inject(function (_phoneGap_) {
    phoneGap = _phoneGap_;
  }));

  it('should do something', function () {
    expect(!!phoneGap).toBe(true);
  });

});
