window.onload = function() {
    let webview = document.getElementById("foo");
    let indicator = document.querySelector(".indicator");

    let loadstart = function() {
        indicator.innerText = "loading...";
    };
    let loadstop = function() {
        indicator.innerText = "";
    };

    //webview.addEventListener("did-start-loading", loadstart);
    webview.addEventListener("did-stop-loading", loadstop);
    webview.addEventListener("dom-ready", function() {
        // webview.openDevTools();
        console.log(webview.getTitle());
        // alert('haha');
    });

};