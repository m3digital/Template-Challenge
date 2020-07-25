// Global variables
var box1 = document.getElementById("inlineCheckbox1");
var box2 = document.getElementById("inlineCheckbox2");
var box3 = document.getElementById("inlineCheckbox3");
var div1 = document.getElementById("hiddenDiv1")
var div2 = document.getElementById("hiddenDiv2")
var div3 = document.getElementById("hiddenDiv3")

// Click Handler Vanilla JS Method 2
document.getElementById('submit').addEventListener('click', function () {
    event.preventDefault();
    console.log("You clicked without jQuery!");
    // Display Div 1 if Box 1 is Checked
    if (box1.checked == true){
        div1.style.display = "block";
      } else {
        div1.style.display = "none";
      }
    // Display Div 2 if Box 2 is Checked
    if (box2.checked == true){
        div2.style.display = "block";
      } else {
        div2.style.display = "none";
      }
    // Display Div 3 if Box 3 is Checked
    if (box3.checked == true){
        div3.style.display = "block";
      } else {
        div3.style.display = "none";
      }
  });

//   Remove button functionality
document.getElementById('remove1').addEventListener('click', function () {
    event.preventDefault();
    console.log("You tried to remove this div!");
    div1.style.display = "none";
  });
document.getElementById('remove2').addEventListener('click', function () {
    event.preventDefault();
    console.log("You tried to remove this div!");
    div2.style.display = "none";
  });
document.getElementById('remove3').addEventListener('click', function () {
    event.preventDefault();
    console.log("You tried to remove this div!");
    div3.style.display = "none";
  });