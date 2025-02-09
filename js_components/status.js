let status_button = document.getElementById("statusButton");
let stat = document.getElementById("status");

let on_btn = "background-color: var(--online);";
let off_btn = "background-color: var(--offline);";

let on_text = "color: var(--online);";
let off_text = "color: var(--offline);";

status_button.addEventListener("click", function () {
    if (status_button.innerText === "OFF") {
        if (emergencyActivated) {
            emergencyActivated = false;
            speed = 0;
        }

        console.log("ON");
        status_button.innerText = "ON";
        stat.innerText = "●ONLINE";
        stat.style.cssText = on_text;
        status_button.style.cssText = on_btn;  // Green when ON

    } else {
        console.log("OFF");
        status_button.innerText = "OFF";
        stat.innerText = "●OFFLINE";
        stat.style.cssText = off_text;
        status_button.style.cssText = off_btn; // Red when OFF
    }
});

