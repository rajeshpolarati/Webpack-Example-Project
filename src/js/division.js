//Function for division
const division = () => {
  const num1 = document.getElementById("first_box");
  const num2 = document.getElementById("second_box");
  const result = parseFloat(num1.value) / parseFloat(num2.value);
  document.getElementById("result_box").innerText = `Result: ${result}`;
};

export default division;
