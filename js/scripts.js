// scripts.js
var triangle1Area = getTriangleArea(10, 15);
var triangleArea = getTriangleArea(10, 5);
var triangle2Area = getTriangleArea(10, 2);

function getTriangleArea(a, h) {
    if (a<=0 || h<=0) {
    	console.log("Nieprawidłowe dane");
    } else {
		return('Pole trójkta wynosi '+ a * h / 2); 
    }	
    }
console.log(getTriangleArea(10, 0))
console.log(triangle1Area)
console.log(triangleArea)
console.log(triangle2Area)