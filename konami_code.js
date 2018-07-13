const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0
function init(e) {
  // your code here
  const keyCode = e.keyCode;
  
  if (keyCode === codes.length[index]){
    index++;
    if (index === codes.length) {
      alert ("Hurray!");
      index= 0;
    }
  }
  else {
    index = 0
  }
  
} 
