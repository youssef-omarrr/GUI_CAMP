function loadComponent(path, target, scriptPath, cssPath, callback) {
    $(target).load(path, function (response, status, xhr) {
        if (status === "error") {
            console.log("Error loading " + path + ": " + xhr.status + " " + xhr.statusText);
        } 
        
        else {
            // Load CSS if it hasn't been loaded already
            if (!$(`link[href="${cssPath}"]`).length) {
                let link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = cssPath;
                document.head.appendChild(link);
            }

            // Load JS script
            let script = document.createElement("script");
            script.src = scriptPath;
            script.onload = callback; // Run callback after script loads
            document.body.appendChild(script);
        }
    });
}

$(document).ready(function () {
    let componentsLoaded = 0;
    const totalComponents = 4;

    function componentLoaded() {
        componentsLoaded++;
        if (componentsLoaded === totalComponents) {
            console.log("All components loaded!");
            initializeApplication(); // Call this after all components are ready
        }
    }

    // load components
    loadComponent('html_components/status.html', '#status-container', 
        'js_components/status.js', 'css_components/status.css', componentLoaded);

    loadComponent('html_components/controls.html', '#controls-container', 
        'js_components/controls.js', 'css_components/controls.css', componentLoaded);

    loadComponent('html_components/camera.html', '#camera-container', 
        'js_components/camera.js', 'css_components/camera.css', componentLoaded);

    loadComponent('html_components/data.html', '#data-container', 
        'js_components/data.js', 'css_components/data.css', componentLoaded);
});




/////////////////////       E-BUTTON         ///////////////////////

function initializeApplication() {
    console.log("Initializing app...");

    if (e_button) {
        e_button.addEventListener("click", function () {
            emergencyActivated = true;
            alert("Emergency Button pressed!");

            // close the video
            video.pause();
            video.style.opacity = "0";  // Hide the video

            vid_container.style.backgroundColor = "black"; // Turn screen black
            vid_button.textContent = "Turn On";

            console.log("video OFF");

            // stop the speed
            document.getElementById("speed").innerHTML = `Speed: <br>0 km/h`;

            // make status offline
            console.log("OFF");
            status_button.innerText = "OFF";
            stat.innerText = "●OFFLINE";
            stat.style.cssText = off_text;
            status_button.style.cssText = off_btn; // Red when OFF
        });
    }
}
