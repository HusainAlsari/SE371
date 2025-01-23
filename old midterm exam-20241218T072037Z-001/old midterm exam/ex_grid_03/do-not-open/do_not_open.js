const instructions_block = document.getElementById("instructions");
instructions_block.innerHTML = `<div style="border: solid 5px red; padding: 10px">
<h2 style="font-weight: 800;">Instructions:</h2>
<p style="color: red">!! All your answers have to be written in the styles.css file, in the html you can add ids, classes, etc.</p>
<ol>
  <li>DO NOT MODIFY THE HTML STRUCTURE!!</li>
  <li>Display the content of each card vertically as a flex box.</li>
  <li>Center the content of each card.</li>
  <li>Add a border and spacing to each card.</li>
  <li>No elements inside a card (article) should touch each other: Add spacing.</li>
  <li>Style the button, set its width to 1/3 the size of the card.</li>
  <li>Using a CSS grid, for screens larger than 980 pixels, display three cards per row (3 columns).</li>
  <li>For screens smaller than 980 and larger than 680 pixels, display two cards per row (2 columns).</li>
  <li>For screens smaller than 680 pixels, display one card per row.</li>
</ol>
<h2 style="font-weight: 800">Expected result:</h2>
<div>
  <img
    src="do-not-open/img/expected-result.jpg"
    alt="Expected result"
    style="width: 80%"
  />
</div>
</div>`;

const footer_block = document.getElementById("end");
footer_block.innerHTML = `<div style="margin-top: 40px; color: red; border: solid 5px red">
End of Exercise</div>`