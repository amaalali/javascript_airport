'use strict';

function Plane(){}

Plane.prototype.land = function () {
  airport.clearForLanding(this);
};
