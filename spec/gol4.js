describe("cell", function() {
	var cell = new Cell();

	it("should die if neighbours<2", function() {
		var newState = cell.nextState(1);

		expect(newState).toBe(false);
	});

	it("should live on if there are 2 or 3 neighbours ", function() {
		var newState = cell.nextState(2);

		expect(newState).toBe(true);
	});

	it("should die if neighbours > 3", function() {
		var newState = cell.nextState(4);

		expect(newState).toBe(false);
	});
});

describe("board", function() {

	it("should return empty board when init state is empty", function() {
		var board = new Board();

		var liveCellPositions = board.Tick();

		expect(liveCellPositions.length).toBe(0);
	});
	
	it("should kill the cells on the ends of a three-in-a-line setup", function() {
		var board = new Board();

		board.init([
			[4,5],
			[5,5],
			[6,5]
		]);

		var liveCellPositions = board.Tick();

		expect(liveCellPositions).toContain([5,5]);
		expect(liveCellPositions).not.toContain([4,5]);
		expect(liveCellPositions).not.toContain([6,5]);
	});

});

function Board()
{
	this.init = function(positions) {
		this.positions = positions;
	}

	this.Tick = function() {
		var newLifeCells = [],
			neighbours = 0,
			index,
			currentPos,
			x,
			y,
			cell = new Cell();

		for (index in this.positions) {
			currentPos = this.positions[index];

			x = currentPos[0] + 1;
			y = currentPos[1];

			if (this.isThereACell([x, y])) {
				neighbours++;
			}

			x = currentPos[0] - 1;

			if (this.isThereACell([x, y])) {
				neighbours++;
			}

			if (cell.nextState(neighbours)) { 
				newLifeCells[newLifeCells.length] = currentPos;
			}
		}

		return newLifeCells;
	}

    this.isThereACell = function(position) {
    	var i, l;

    	for(i = 0, l = this.positions.length; i < l; i++) {
    		if (this.positions[i][0] === position[0] && this.positions[i][1] === position[1]) {
    			return true;
    		}
    	}
    	return false;
    }
}

function Cell() {
	this.nextState = function(neighbours) {
		return neighbours > 1 && neighbours < 4;
	}
}