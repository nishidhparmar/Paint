$(document).ready(()=>{

    var canvas = document.getElementById("c");
    var ctx = c.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  
    var paint = false;

    function start() {
        paint = true;
        // draw(e);
    }
    function stop() {
        paint = false;
        ctx.beginPath();
    }

    function draw(e) {
        if(!paint) return;
        ctx.lineWidth = $("#range").val();
        ctx.lineCap = "round";
        ctx.strokeStyle = $("#color").val();
        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX,e.clientY);
    }

    canvas.addEventListener("mousedown",start);
    canvas.addEventListener("mouseup",stop);
    canvas.addEventListener("mousemove",draw);

    $("#background").click(()=> { 
        $("body").css("background-color",$("#color").val());
        $("#background").css("background-color",$("#color").val());
        $("#clear").css("background-color",$("#color").val());
                
    });

    $("#clear").click(()=> { 
        location.reload(true);
        
    });
 









})
