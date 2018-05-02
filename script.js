menubar.onclick = function menuFunction() {
    var x = document.getElementById ("navigation");

    if (x.className === "main_nav") {
        x.className += " responsive";
    }

    else {
        x.className = "maim_nav";
    }
}