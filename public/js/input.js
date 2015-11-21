/**
* Created by Nader on 11/20/2015.
 */

var input = (function () {

    function bindEvents(snake) {
        window.addEventListener('keydown', keyDownHandler.bind(snake), false);
        window.addEventListener('touchstart', touchStartHandler.bind(snake), false);
    }

    /**
     * Keydown event (Keyboard)
     */
    function keyDownHandler(e) {
        e = e || window.event;
        switch (e.keyCode) {
            case 'w'.charCodeAt(0):
            case 'W'.charCodeAt(0):
            case 38: // up
                if ((this.direction.x === 0 && this.direction.y === 1) === false) {
                    this.direction = {x: 0, y: -1};
                }
                break;
            case 's'.charCodeAt(0):
            case 'S'.charCodeAt(0):
            case 40: // down
                if ((this.direction.x === 0 && this.direction.y === -1) === false) {
                    this.direction = {x: 0, y: 1};
                }
                break;
            case 'a'.charCodeAt(0):
            case 'A'.charCodeAt(0):
            case 37: // left
                if ((this.direction.x === 1 && this.direction.y === 0) === false) {
                    this.direction = {x: -1, y: 0};
                }
                break;
            case 'd'.charCodeAt(0):
            case 'D'.charCodeAt(0):
            case 39: // right
                if ((this.direction.x === -1 && this.direction.y === 0) === false) {
                    this.direction = {x: 1, y: 0};
                }
                break;
        }
    }

    /**
     * touchStart event (Mobile)
     */
    function touchStartHandler(e) {
        var x = e.targetTouches[0].pageX
            , y = e.targetTouches[0].pageY;

        x = x / window.innerWidth * 100;
        y = y / window.innerHeight * 100;

        // up
        if (x > 25 && x < 75 && y < 50) {
            if ((this.direction.x === 0 && this.direction.y === 1) === false) {
                this.direction = {x: 0, y: -1};
            }
        }
        // down
        if (x >= 25 && x <= 75 && y >= 50) {
            if ((this.direction.x === 0 && this.direction.y === -1) === false) {
                this.direction = {x: 0, y: 1};
            }
        }
        // left
        if (x < 50 && y > 25 && y < 75) {
            if ((this.direction.x === 1 && this.direction.y === 0) === false) {
                this.direction = {x: -1, y: 0};
            }
        }
        // right
        if (x >= 50 && y > 25 && y < 75) {
            if ((this.direction.x === -1 && this.direction.y === 0) === false) {
                this.direction = {x: 1, y: 0};
            }
        }
    }

    return {
        bindEvents: bindEvents
    }
})();