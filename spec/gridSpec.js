describe("the grid", function() {

	var grid, cell

	beforeEach(function() {
		grid = new Grid
	})

	it("should be defined", function() {
		expect(Grid).toBeDefined()
	})

	it("should have size 900 by default when initialized", function() {
		expect(grid.size).toEqual(900)
	})

	it("should be made with the object is passed to the factory", function() {
		function Obj() {}
		grid.factory(Obj)
		expect(grid['1:2']).toEqual(new Obj)
	})

	it("should be able to hold a pacman", function() {
		grid['1:1'] = new Pacman
		expect(grid['1:1']).toEqual(new Pacman)
	})

	
})
