
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

 const body = document.querySelector('body');

function init() {
let index = 0;

body.addEventListener('keydown', function(e){

  const key = e.key;

  if (key === codes[index]) {
        index++;
         if (index === codes.length) {
          alert("Congratulations!");
          index = 0;
        }
      } else {
        index = 0;
      }
    });
    
}

