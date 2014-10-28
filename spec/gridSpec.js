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

	
})
