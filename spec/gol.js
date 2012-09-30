(function() {
    
    tick = function(board) 
    {
        return [[1, 2, 3],[1, 2, 3],[1, 2, 3]];
    };
    
    var board = [
        [1, 0, 1], 
        [1, 1, 1], 
        [1, 0, 1]];

    describe("board", function() {
        it("should return a new board", function() 
        {
            
            var newBoard = tick(board);
            
            expect(Array.isArray(newBoard)).toBeTruthy();
        });
        
        it("should have same dimensions", function() {
            var newBoard = tick(board);
            
            expect(newBoard.length).toEqual(board.length);
            for (var i = 0, l = newBoard.length; i < l; i++) 
            {
                expect(newBoard[i].length).toEqual(board[i].length);
            }
        });

        it("should set cells to 0 if overpopulation (>3 neighbour)", function() {
            var newBoard = tick(board);

            expect(newBoard[1][1]).toEqual(0);
            //expect(newBoard[])
        });

        it("should set cells to 0 if underpopulation (<2 neighbour)", function() {

        });

    });

    describe("cell", function() {
        it("should count its neighbour", function() {
            
        });
    });



})();
