let expression = "";

const append = (value) => {
  expression += value;
  document.getElementById("resultado").value = expression;
}

const backspace = () => {
  expression = expression.slice(0, -1);
  document.getElementById("resultado").value = expression;
}

const clearResult = () => {
  expression = "";
  document.getElementById("resultado").value = expression;
}

const calculate = () => {
  try {
    const result = eval(expression);
    expression = result.toString();
    document.getElementById("resultado").value = expression;
  } catch (error) {
    alert(`Error en la expresión: ${error}`);
  }
}
