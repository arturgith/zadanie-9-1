// scripts.js
function getTriangleArea(a, h) {
    if (a<=0 || h<=0) {
    	return "Nieprawidłowe dane";
    } else {
		return a * h / 2; 
    }	
    }

var triangle1Area = getTriangleArea(10, 15);
var triangleArea = getTriangleArea(10, 5);
var triangle2Area = getTriangleArea(10, 0);
console.log(getTriangleArea(10, 6))
console.log(triangle1Area)
console.log(triangleArea)
console.log(triangle2Area)