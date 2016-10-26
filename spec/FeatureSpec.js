'use strict';

describe('Feature test: ', function() {
    var plane, airport, weather; // possibly declaring two variables

    beforeEach(function() {
        plane = new Plane();
        airport = new Airport();
    });

    describe('Under normal condition', function() {
      beforeEach(function() {
        spyOn(Math,'random').and.returnValue(0);
      });

      it('Planes can be instructed to land at an airport', function() {
          plane.land(airport);
          expect(airport.planes()).toContain(plane);
      });

      it('planes can be instructed to takeoff', function() {
          plane.land(airport);
          plane.takeoff();
          expect(airport.planes()).not.toContain(plane);
      });
    });

    describe('Under stormy condition', function() {
      it('blocks takeoff when weather is stormy', function() {
          spyOn(Math,'random').and.returnValue(0);
          plane.land(airport)
          spyOn(airport._weather,'isStormy').and.returnValue(true);
          expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm');
          expect(airport.planes()).toContain(plane);
      });

      it('blocks landing when weather is stormy', function() {
          spyOn(airport._weather, 'isStormy').and.returnValue(true);
          expect(function(){ plane.land(airport); }).toThrowError('cannot land during storm');
          expect(airport.planes()).not.toContain(plane);
      });
    });
});
