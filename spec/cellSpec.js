

describe("A cell", function() {

	var cell

	beforeEach(function() {
		cell = new Cell
	})

	it("should be defined", function() {
		expect(Cell).toBeDefined()
	})

	it("should be empty when intialized", function() {
		expect(cell.content).toBeUndefined()
	})

	it("should be available when intialized", function() {
		expect(cell.isAvailable).toBe(true)
	})

	it("should not be available when filled", function() {
		cell.changeContent(new Pacman)
		expect(cell.content).toEqual(new Pacman)
	})

})