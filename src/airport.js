
function Airport() {
}

Airport.prototype.landedPlanes = []

Airport.prototype.land = function(plane) {
	Airport.prototype.landedPlanes.push(plane)
	return "Plane landed"
}

Airport.prototype.takeOff = function(plane) {
	Airport.prototype.landedPlanes.splice(plane)
}
