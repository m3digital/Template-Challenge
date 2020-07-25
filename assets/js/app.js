// Click Handler Vanilla JS Method 2
document.getElementById('submit').addEventListener('click', function () {
    event.preventDefault();
    console.log("You clicked without jQuery!");
    var box1 = document.getElementById("inlineCheckbox1");
    var div1 = document.getElementById("hiddenDiv")
    // console.log(box1)
    // console.log(text)

    // Display Div 1 if Box 1 is Checked
    if (box1.checked == true){
        div1.style.display = "block";
      } else {
        div1.style.display = "none";
      }
  });