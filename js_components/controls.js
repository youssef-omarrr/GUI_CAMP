let container = document.querySelector("#controls-container");

///////////////  INITS  ///////////////////////
let upHead = "\u02C4";    // ˄
let downHead = "\u02C5";  // ˅
let leftHead = "\u02C2";  // ˂
let rightHead = "\u02C3"; // ˃

let buttons = ["up", "left", "down", "right"];
let arrows = [upHead, leftHead, downHead, rightHead];

let buttonElements = {}; // Store references to buttons

// create the up button separately
let upButton = document.createElement("button");
upButton.classList.add("up");
upButton.innerText = upHead;
container.appendChild(upButton);
buttonElements["up"] = upButton;

// a div for the bottom row (left, down, right)
let bottomRow = document.createElement("div");
bottomRow.classList.add("bottom-row");
container.appendChild(bottomRow);

// slice 1 to skip the first element
buttons.slice(1).forEach((direction, index) => {
    let button = document.createElement("button");
    button.classList.add(direction);
    button.innerText = arrows[index + 1];
    bottomRow.appendChild(button);
    buttonElements[direction] = button;
});



///////////////  FUNCTIONS  ///////////////////////

// func to simulate button press effect
function activateButton(selector) {
    let button = document.querySelector(selector);
    if (button) {
        button.classList.add("active");
        button.click();
    }
}

// Keybinds
document.addEventListener("keydown", function (event) {
    let direction = null;

    switch (event.key.toLowerCase()) {
        case "arrowup":
        case "w":
            direction = "up";
            activateButton(".up");
            break;

        case "arrowdown":
        case "s":
            direction = "down";
            activateButton(".down");
            break;

        case "arrowleft":
        case "a":
            direction = "left";
            activateButton(".left");
            break;

        case "arrowright":
        case "d":
            direction = "right";
            activateButton(".right");
            break;
    }

    if (direction) {
        startSpeedChange(direction);
    }
});

// remove active class when key is released
document.addEventListener("keyup", function (event) {
    stopSpeedChange();
    let activeButtons = document.querySelectorAll(".active");
    activeButtons.forEach(button => button.classList.remove("active"));
});


// func to start changing speed
let speedInterval;
function startSpeedChange(direction) {
    clearInterval(speedInterval); // Prevent multiple intervals

    speedInterval = setInterval(() => {
        switch (direction) {
            case "up":
                speed += 10;
                break;
            case "down":
                speed -= 10;
                break;
            case "left":
            case "right":
                speed += 5;
                break;
        }
        console.log(`Speed: ${speed}`);
    }, 100);
}

// func to stop speed change
function stopSpeedChange() {
    clearInterval(speedInterval);
}


// Handle button press and release
Object.keys(buttonElements).forEach(direction => {
    buttonElements[direction].addEventListener("mousedown", function () {
        console.log(`${direction} button clicked`);
        startSpeedChange(direction);
    });

    buttonElements[direction].addEventListener("mouseup", stopSpeedChange);
    buttonElements[direction].addEventListener("mouseleave", stopSpeedChange);
    buttonElements[direction].addEventListener("touchstart", function () {
        startSpeedChange(direction);
    });
    buttonElements[direction].addEventListener("touchend", stopSpeedChange);
});