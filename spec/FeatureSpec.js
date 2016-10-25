'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;
  var weather;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  describe('under normal conditions', function(){
    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0);
    });

    it('planes can be instructed to land at airport', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it('planes can be instructed to take off from airport', function(){
      plane.land(airport);
      plane.takeoff();
      expect(airport.planes()).not.toContain(plane);
    });

    it('does not allow plane to land if hanger is at capacity', function() {
      var i;
      for( i = 0; i < airport._MAXIMUM_CAPACITY; i++) {
          plane.land(airport);
      }
      expect(function() { plane.land(airport); }).toThrowError('Airport at maximum capacity');
    });
  });

  describe('under stormy conditions', function(){

    it('blocks takeoff when weather is stormy', function() {
      spyOn(Math, 'random').and.returnValue(0);
      plane.land(airport);
      spyOn(airport._weather, 'isStormy').and.returnValue(true);
      expect(function(){ plane.takeoff(); }).toThrowError('cannot take off during storm');
      expect(airport.planes()).toContain(plane);
    });

    it('prevents landing when weather is stormy', function() {
      spyOn(Math, 'random').and.returnValue(1);
      expect(function(){ plane.land(airport); }).toThrowError('cannot land during storm');
      expect(airport.planes()).not.toContain(plane);
    });
  });
});
