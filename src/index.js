//importing all the js files
import add from "./js/add.js";
import subtract from "./js/subtract.js";
import multiply from "./js/multiply.js";
import division from "./js/division.js";
import styles from "./index.css";
document.getElementById("add_button").addEventListener("click", add);
document.getElementById("subtract_button").addEventListener("click", subtract);
document.getElementById("multiply_button").addEventListener("click", multiply);
document.getElementById("divide_button").addEventListener("click", division);
