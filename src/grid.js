function Grid() {
	this.size = 900
}

Grid.prototype.factory = function(object) {
	for(var i = 30; i < 30; i++) {
		for(var j = 30; j < 30; j++) {
			this[i,j] = new object
		}
	}
}

