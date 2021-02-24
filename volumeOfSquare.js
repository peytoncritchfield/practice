let getValues = function () {
    let x1 = document.getElementById("x1").value;
    let x2 = document.getElementById("x2").value;
    let y1 = document.getElementById("y1").value;
    let y2 = document.getElementById("y2").value;
    let z1 = document.getElementById("z1").value;
    let z2 = document.getElementById("z2").value;
    let output1 = document.getElementById("output1");
    
 let answer = volumeOfSquare (x1, x2, y1, y2, z1, z2);
     output1.innerHTML = answer;
 }

 let volumeOfSquare = function (x1, x2, y1 ,y2, z1, z2) {
     heightOfSquare = y2 - y1;
     widthOfSquare = x2 - x1;
     depthOfSquare = z2 - z1;
     volume = heightOfSquare * widthOfSquare * depthOfSquare;
     if (volume >= 0) {
         return volume;
     }
     else {
         return -volume;
     }
 }



