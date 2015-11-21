/**
 * Created by Nader on 11/20/2015.
 */

var canvas = (function() {
    var canvasEl = document.getElementById('canvas')
        , ctx = canvasEl.getContext('2d');

    function init() {
        window.addEventListener('resize', resize, false);
        resize();
    }

    function clear() {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    }

    function resize() {
        var size = Math.min(window.innerHeight, window.innerWidth);
        canvasEl.height = size * 0.95;
        canvasEl.width = size * 0.95;
    }

    function rectPercent(x, y, width, height, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.rect(x*canvasEl.width/100, y*canvasEl.height/100, width*canvasEl.width/100, height*canvasEl.height/100);
        ctx.fill();
        ctx.closePath();
    }

    return {
        init: init
        , clear: clear
        , resize: resize
        , rectPercent: rectPercent
    }

})();