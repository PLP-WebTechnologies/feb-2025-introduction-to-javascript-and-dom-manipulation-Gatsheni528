// Change text content
document.getElementById("text-btn").onclick = function () {
    document.getElementById("title").textContent = "Text Changed!";
  };
  
  // Change text color using style
  document.getElementById("style-btn").onclick = function () {
    document.getElementById("text").style.color = "blue";
  };
  
  // Add or remove a box element
  document.getElementById("toggle-btn").onclick = function () {
    const container = document.getElementById("box-container");
    const box = document.getElementById("box");
  
    if (box) {
      container.removeChild(box);
    } else {
      const newBox = document.createElement("div");
      newBox.id = "box";
      newBox.textContent = "I am a new box!";
      container.appendChild(newBox);
    }
  };
  