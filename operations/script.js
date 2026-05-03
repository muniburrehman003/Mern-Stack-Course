let fruits = ["apple","orange","cherry"];
let display = document.getElementById("output");

display.innerHTML += " start : " + fruits + "<br>";
 
//push (add last)
fruits.push("mango");
display.innerHTML += " After push : " + fruits +"<br>";
//pop (remove from end)
fruits.pop();
display.innerHTML += "After pop : " + fruits + "<br>";
//shift (remove from first)
fruits.shift();
display.innerHTML += "After shift : "  + fruits + "<br>";
//slice (copy middle)
let middle = fruits.slice(0,1);
display.innerHTML += "Slice : " + middle + "<br>";
//splice  (add "fruit" at index)
fruits.splice (1,0,"grapes");
display.innerHTML+= "splice : " + fruits;