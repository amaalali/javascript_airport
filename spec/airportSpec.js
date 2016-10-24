describe("airport", function() {

	describe('Land', function() {
		it('instructs plane to', function() {
			var airport = new Airport();
			var plane = new Plane();
			expect(airport.land(plane)).toEqual("Plane landed")
			expect(airport.landedPlanes.length).toBe(1)
		});
	});

	describe('takeOff', function() {
		it('instructs a plane to take off', function() {
			var airport = new Airport();
			var plane = new Plane();
			airport.land(plane)
			landedPlanes = airport.landedPlanes.length
			airport.takeOff(plane)
			expect(airport.landedPlanes.length).toBe(0)
		});
	});

})
