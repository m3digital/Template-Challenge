// Click Handler Vanilla JS Method 1

// document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	// if (!event.target.matches('.click-me')) return;

	// Don't follow the link
	// event.preventDefault();

	// Log the clicked element in the console
// 	console.log(event.target);

// }, false);

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