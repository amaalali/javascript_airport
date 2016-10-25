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

});