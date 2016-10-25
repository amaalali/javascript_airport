'use strict';

function Airport(weather) {
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
  this._MAXIMUM_CAPACITY = 200;
};

Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('cannot land during storm');
  } else if(this._hangar.length >= this._MAXIMUM_CAPACITY ) {
    throw new Error('Airport at maximum capacity');
  }
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeoff = function () {
  if(this._weather.isStormy()) {
    throw new Error('cannot take off during storm');
  }
  this._hangar = [];
};
