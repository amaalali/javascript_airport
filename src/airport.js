
function Airport() {
}

Airport.prototype.landedPlanes = []

//Airport.prototype.capacity = 10

Airport.prototype.land = function(plane) {
	if (this.landedPlanes.length < 10) {
		Airport.prototype.landedPlanes.push(plane)
		return "Plane landed"
	}
	else {return "Airport full"}
}

Airport.prototype.takeOff = function(plane) {
	Airport.prototype.landedPlanes.splice(plane)
}
