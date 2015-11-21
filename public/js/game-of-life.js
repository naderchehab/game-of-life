/**
 * Created by Nader on 11/20/2015.
 */

 'use strict';

var gameOfLife = (function () {

    var world = [];
    var cellSize = 1;
    for (var i = 0; i < 100; i++) {
        world[i] = [];
        for (var j = 0; j < 100; j++) {
            world[i][j] = false;
        }
    }

    /**
     * Init
     */
    function init() {
        input.bindEvents(gameOfLife);
        populateRandom(800);
        evolve();
        animate();
    }

    /**
     * Evolve world to the next generation
     */
    function evolve() {

        var liveNeighbors;

        for (var i = 0; i < 100; i++) {
            for (var j = 0; j < 100; j++) {
                liveNeighbors = getLiveNeighbors(i, j);
                
                // Any live cell with fewer than two live neighbours dies, as if caused by under-population.
                if (world[i][j] === true && liveNeighbors < 2) {
                    world[i][j] = false;
                }

                // Any live cell with more than three live neighbours dies, as if by over-population.
                else if (world[i][j] === true && liveNeighbors > 3) {
                    world[i][j] = false;
                }

                // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
                else if (world[i][j] === false && liveNeighbors === 3) {
                    world[i][j] = true;
                }
            }
        }

        window.setTimeout(evolve, 0);
    }

    /**
     * Populate n cells randomly
     */
    function populateRandom(n) {
        var x, y;
        for (var i = 0; i < n; i++) {
            do {
                x = Math.floor(Math.random() * 100);
                y = Math.floor(Math.random() * 100);
            } while (world[x][y]);
            world[x][y] = true;
        }
    }

    function getLiveNeighbors(i, j) {
        var count = 0;
        var smallerI = i === 0 ? 0 : i-1;
        var largerI = i === 99 ? 99 : i+1;
        var smallerJ = j === 0 ? 0 : j-1;
        var largerJ = j === 99 ? 0 : j+1;

        count += world[i][smallerJ] ? 1 : 0;
        count += world[i][largerJ] ? 1 : 0;
        count += world[smallerI][j] ? 1 : 0;
        count += world[smallerI][largerJ] ? 1 : 0;
        count += world[smallerI][smallerJ] ? 1 : 0;
        count += world[largerI][j] ? 1 : 0;
        count += world[largerI][largerJ] ? 1 : 0;
        count += world[largerI][smallerJ] ? 1 : 0;
        return count;
    }

    /**
     * Draw
     */
    function animate() {
        canvas.clear();

        for (var i = 0; i < 100; i++) {
            for (var j = 0; j < 100; j++) {
                if (world[i][j] === true) {
                    canvas.rectPercent(i, j, cellSize, cellSize, '#25a233');
                }
                else {
                    canvas.rectPercent(i, j, cellSize, cellSize, '#000000');
                }
            }
        }

        window.requestAnimationFrame(animate);
    }

    return {
        init: init
    }
})();