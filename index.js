
const operator = prompt('enter operator (+. -, *, or /): ');

let firstnumber = Number(prompt('Enter your first number: '));
let secondnumber = Number(prompt('Enter your Second number: '));

let result;
if (operator == '+') {
    window.alert(result = firstnumber + secondnumber);

}
else if  (operator == '-') {
  window. alert(result = firstnumber - secondnumber);
}
else if  (operator == '*') {
    window.alert(result = firstnumber * secondnumber);
}
else if(operator == '/') {
   window,alert(result = firstnumber / secondnumber);
}
else {
window.alert("invalid");
}