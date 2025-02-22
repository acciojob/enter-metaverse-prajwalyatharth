// Select the button and counter elements
let enterButton = document.getElementById("enterBtn");
let statusElement = document.getElementById("status");

// Add a click event listener to the button
enterButton.addEventListener("click", function () {
    statusElement.innerHTML = "<h1>Entered Metaverse</h1>";

});
