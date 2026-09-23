//your code here
let draggedDiv = null;

let divs = document.querySelectorAll(".image");

divs.forEach(function (div) {

  // When dragging starts
  div.addEventListener("dragstart", function () {
    draggedDiv = this;
  });

  // Allow dropping
  div.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  // When dropped
  div.addEventListener("drop", function (event) {
    event.preventDefault();

    if (draggedDiv !== this) {
      let temp = this.style.backgroundImage;

      this.style.backgroundImage = draggedDiv.style.backgroundImage;
      draggedDiv.style.backgroundImage = temp;
    }
  });
});
```
