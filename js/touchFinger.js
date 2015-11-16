/**
 * Created by mahmutduva on 15/11/15.
 */
window.addEventListener('load', function () {

    var box1 = document.getElementById('target');
    var touchA = {}, touchB = {}, touchC = {}, touchD = {}, touchE = {};

    box1.addEventListener('touchstart', function (e) {
        if (e.touches.length == 1) {

            box1.style.background = '#fa0505';
            touchA.x = e.changedTouches[0].pageX;
            touchA.y = e.changedTouches[0].pageY;
            console.log(touchA)
        }
        else if (e.touches.length == 2) {
            box1.style.background = '#fd8a03';
            touchB.x = e.changedTouches[1].pageX;
            touchB.y = e.changedTouches[1].pageY;
        }
        else if (e.touches.length == 3) {
            box1.style.background = '#fdbf03';
            touchC.x = e.changedTouches[2].pageX;
            touchC.y = e.changedTouches[2].pageY;
            console.log(touchA)

            $(".angle").html("Angele of points : " + find_angle(touchA, touchB, touchC));


        }
        else if (e.touches.length == 4) {
            box1.style.background = '#eefd03';
            touchD.x = e.changedTouches[3].pageX
            touchD.y = e.changedTouches[3].pageY
        }
        else if (e.touches.length == 5) {

            box1.style.background = '#aefd03';
            window.location.href = locationUrl;
            touchE.x = e.changedTouches[4].pageX
            touchE.y = e.changedTouches[4].pageY
        }
        e.preventDefault()
    }, false)

    box1.addEventListener('touchend', function(e){
        box1.style.background = '#ffffff';
        e.preventDefault()
    }, false);

    function find_angle(A, B, C) {
        var AB = Math.sqrt(Math.pow(B.x - A.x, 2) + Math.pow(B.y - A.y, 2));
        var BC = Math.sqrt(Math.pow(B.x - C.x, 2) + Math.pow(B.y - C.y, 2));
        var AC = Math.sqrt(Math.pow(C.x - A.x, 2) + Math.pow(C.y - A.y, 2));
        return Math.acos((BC * BC + AB * AB - AC * AC) / (2 * BC * AB));
        console.log(A)
    }

}, false);
