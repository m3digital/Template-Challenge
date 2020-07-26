// Global variables
var box1 = document.getElementById("inlineCheckbox1");
var box2 = document.getElementById("inlineCheckbox2");
var box3 = document.getElementById("inlineCheckbox3");
var div1 = document.getElementById("hiddenDiv1")
var div2 = document.getElementById("hiddenDiv2")
var div3 = document.getElementById("hiddenDiv3")
var base = document.getElementById("noTemplates")

// Vanilla JS Submit Button Click Handler 
document.getElementById('submit').addEventListener('click', function () {
    console.log("You clicked without jQuery!");
    // Display Div 1 if Box 1 is Checked
    if (box1.checked == true) {
        // If any of the divs are showing, hide noTemplates div
        div1.style.display = "block";
        base.style.display = "none";
    } else {
        // Otherwise display remains 'none' (instead of 'hidden' !important)
        div1.style.display = "none";
    }
    // Display Div 2 if Box 2 is Checked
    if (box2.checked == true) {
        div2.style.display = "block";
        base.style.display = "none";
    } else {
        div2.style.display = "none";
    }
    // Display Div 3 if Box 3 is Checked
    if (box3.checked == true) {
        div3.style.display = "block";
        base.style.display = "none";
    } else {
        div3.style.display = "none";
    }
});

// If no other divs are showing, show "No Templates Selected"
function checkIf() {
    if (div2.style.display == "none" && div1.style.display == "none" && div3.style.display == "none") {
        base.style.display = "block";
    }
}

//   Remove button functionality
document.getElementById('remove1').addEventListener('click', function () {
    // Initial Testing
    console.log("You removed checkbox 1!");
    // Hide div once remove is clicked
    div1.style.display = "none";
    // Run our conditional for showing 'No Templates Selected' div
    checkIf()
});
document.getElementById('remove2').addEventListener('click', function () {
    console.log("You removed checkbox 2!");
    div2.style.display = "none";
    checkIf()
});
document.getElementById('remove3').addEventListener('click', function () {
    console.log("You removed checkbox 3!");
    div3.style.display = "none";
    checkIf()
});