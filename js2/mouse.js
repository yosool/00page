$(document).ready(function(){
var bee = document.getElementById("bee");
     var bee2 = document.getElementById("bee2");
     var bee3 = document.getElementById("bee3");
        
		document.addEventListener("mousemove", getMouse); 


		bee.style.position = "absolute"; //css		
		var beepos = {x:0, y:0};
		var beepos2 = {x:0, y:0};
		var beepos3 = {x:0, y:0};

		setInterval(followMouse, 50);
		
		var mouse = {x:0, y:0}; //mouse.x, mouse.y
		
		var dir = "right";
		function getMouse(e){
			mouse.x = e.pageX;
			mouse.y = e.pageY;
        //Checking directional change
        if(mouse.x > beepos.x){
          dir = "right";
        } else {
          dir = "left";
        }
            
            if(mouse.x > beepos2.x){
          dir = "right";
        } else {
          dir = "left";
        }
            
            if(mouse.x > beepos3.x){
          dir = "right";
        } else {
          dir = "left";
        }
		}
		
		function followMouse(){
			//1. find distance X , distance Y
			var distX = mouse.x - beepos.x;
			var distY = mouse.y - beepos.y;
            
            var distX2 = mouse.x - beepos2.x;
			var distY2 = mouse.y - beepos2.y;
            
            var distX3 = mouse.x - beepos3.x;
			var distY3 = mouse.y - beepos3.y;
			//Easing motion
       //Progressive reduction of distance 
			beepos.x += distX/5;
			beepos.y += distY/2;
            
            beepos2.x += distX2/8;
			beepos2.y += distY2/1;
            
            beepos3.x += distX3/7;
			beepos3.y += distY3/4;
			
			bee.style.left = beepos.x + 10 + "px";
			bee.style.top = beepos.y + 10 + "px";
            
            bee2.style.left = beepos2.x + 10 + "px";
			bee2.style.top = beepos2.y + 10 + "px";
            
            bee3.style.left = beepos3.x + 10 + "px";
			bee3.style.top = beepos3.y + 10 + "px";
      
      
        //Apply css class 
        if (dir == "right"){
          bee.setAttribute("class", "right");
          bee2.setAttribute("class", "right");
          bee3.setAttribute("class", "right");
        } else {
          bee.setAttribute("class", "left");        
          bee2.setAttribute("class", "left");        
          bee3.setAttribute("class", "left");        
        }
			
		}
})