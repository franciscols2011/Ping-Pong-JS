(function() {
    var selfBoard = function(width, height) {
        this.width = width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars = [];
        this.ball = null; //
}

selfBoard.prototype = {
    get elements(){
        var elements = this.bars;
        elements.push(ball);
        return elements;
    }
}
})();
(function() {
    selfBar = function(x, y, width, height, board){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.board = board;
        this.board.bars.push(this);
        this.kind = "rectangle";

    }

    selfBoardPrototype = {
        down: function(){

        },
        up: function(){

        },
    }
})();

(function(){
    selfBoardView = function(canvas, board){
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.ctx = canvas.getContext("2d");
    }

    selfBoardViewPrototype = {
        draw: function(){
            for(var i = board.elements.length -1; i >= 0; i--) {
                board.elements[i];

            draw(this.ctx, el);
            };
        }
    };

    function draw(ctx, element){
        if(element !== null && element.hasOwnProperty("kind")){

        }
        switch(element.kind){
            case "square":
                ctx.fillRect(element.x, element.y, element.width, element.height);
                break;
        }
    }

})();

window.addEventListener("load", main);

function main() {
    var board = new board(800, 400);
    var bar = new selfBar(20,100,40,100);
    var bar = new selfBar(735,100,40,100);
    var canvas = document.getElementById('canvas');
    var board_view = new board_view(canvas, board);
    board_view.draw();
};
