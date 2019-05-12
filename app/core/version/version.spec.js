'use strict';

describe('hatomi.version module', function() {
  beforeEach(module('hatomi.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
