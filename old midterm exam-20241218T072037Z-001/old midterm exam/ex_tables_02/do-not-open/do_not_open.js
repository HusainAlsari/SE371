const instructions_block = document.getElementById("instructions");
instructions_block.innerHTML = `<div style="border: solid 5px red; padding: 10px;">
<h2 style=" font-weight: 800;">Instructions:</h2>
<p style="color: red;">!! All your answers have to be written in the styles.css file</p>
<ol>
  <li>In styles.css define three colors as three variables (primary-color, secondary-color, tertiary-color)</li>
  <li>Apply the primary color to the background of the table header and the secondary color to the first column (features column)</li>
  <li>Apply the tertiary color to the odd rows of the table</li>
  <li>Add a padding to table data cells</li>
  <li>Add a collapsed border between all table cells. It should have the same color as the table header background.</li>
</ol>
<h2 style=" font-weight: 800;">Expected result (colors can be different):</h2>
<div><img src="do-not-open/img/expected-result.jpg" alt="Expected result" style="width:80%;"></div>
</div>`;

const footer_block = document.getElementById("end");
footer_block.innerHTML = `<div style="margin-top: 40px; color: red; border: solid 5px red">
End of Exercise</div>`