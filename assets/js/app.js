// Click Handler Vanilla JS Method 2
document.getElementById('submit').addEventListener('click', function () {
    event.preventDefault();
    console.log("You clicked without jQuery!");
    var box1 = document.getElementById("inlineCheckbox1");
    var text = document.getElementById("hiddenDiv")
    console.log(box1)
    console.log(text)
    // Display Div if Box is Checked
    if (box1.checked == true){
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
  });