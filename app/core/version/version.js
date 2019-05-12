'use strict';

angular.module('hatomi.version', [
  'hatomi.version.interpolate-filter',
  'hatomi.version.version-directive'
])

.value('version', '0.1');
