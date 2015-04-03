var startX = 0;
var offsetX = 0; 
var dragElement;
InitDragDrop();

function InitDragDrop() {
        document.onmousedown = OnMouseDown;
        document.onmouseup = OnMouseUp;
}


function OnMouseDown(e) {
        if (e == null) { e = window.event; }
        var target = e.target != null ? e.target : e.srcElement;

        if ((e.button == 1 && window.event != null || e.button == 0) && target.className == 'drag') {
                startX = e.clientX;
                offsetX = ExtractNumber(target.style.left);

                dragElement = target;
                document.onmousemove = OnMouseMove;	
                document.body.focus();		
                document.onselectstart = function () { return false; };
                target.ondragstart = function() { return false; };	
                return false;
        }
}


function ExtractNumber(value) {
        var n = parseInt(value);
        return n == null || isNaN(n) ? 0 : n;
}


function OnMouseMove(e) {
        var drag_end = 100;
        find_best_match(dragElement);
        if (e == null) { var e = window.event; }
                var sum = offsetX + (e.clientX - startX);
                if (sum > drag_end) { sum = drag_end; } if (sum < 0) { sum = 0; }
                dragElement.style.left = sum + 'px';
}


function OnMouseUp(e) {	
        if (dragElement != null) {
                document.onmousemove = null;
                document.onselectstart = null;
                dragElement.ondragstart = null;
                dragElement = null;	
        }
}