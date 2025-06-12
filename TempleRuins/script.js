body {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f0f0f0;
}

#gameCanvas {
  border: 2px solid #333;
  background-color: #ffffff;
  max-width: 100%;
  touch-action: none; /* Prevent default touch behaviors */
}

#story, #hand {
  margin: 20px;
  max-width: 800px;
  text-align: center;
}

#storyText {
  font-style: italic;
}

#hand button {
  margin: 5px;
  padding: 5px;
  font-size: 8px;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
}

#hand button:hover {
  background-color: #45a049;
}

#hand button.selected {
  background-color: #ff9800;
}document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const dropdownBtn = document.querySelector(".dropdown-btn");
    dropdownBtn.addEventListener("click", () => {
        dropdown.classList.toggle("active");
    });
});