'use strict';

describe('Feature test: ', function() {
    var plane, airport; // possibly declaring two variables

    beforeEach(function() {
        plane = new Plane();
        airport = new Airport();
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
