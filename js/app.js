(function() {
    var selfBoard = function(width, height) {
        this.width = width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars = []; //
}

selfBoard.prototype = {
    get elements(){
        var elements = this.bars;
        elements.push(ball);
        return elements;
    }
}


})();
function main(){

}