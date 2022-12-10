// init function
function init() {
    var barOrgin = bar.offsetTop;
    var barOrginStyle = bar.style;
    // Add event listener to scroll
    window.addEventListener("scroll", function() {
        // Get absolute position of the scroll
        let scroll = window.pageYOffset;
        // Get bar
        let bar = document.getElementById("bar");
        // Get position of the bar
        let barPosition = bar.offsetTop;
        let offset = scroll;
        if (offset > barOrgin - 2) {
            bar.style.position = "fixed";
            bar.style.top = "2vh";
            bar.style.left = ".6vw";
        }
        else {
            bar.style.position = "relative";
            bar.style = barOrginStyle;
            bar.offsetTop = barOrgin;
        }
    });
}
init();