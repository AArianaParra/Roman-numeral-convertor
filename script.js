/*Poner evento change*/
/* Creating variables*/
const convertBtn = document.getElementById("convert-btn");
const number = document.getElementById("number");
const output = document.getElementById("output");

/*Preventing from mistaken values*/
const checkUserInput = () => {
 const inputInt = parseInt(number.value); 
if (!number.value  || isNaN(inputInt)) { 
  output.innerHTML = "";
  output.style.padding = "20.8px"
    output.innerHTML = `<p style="color:red; font-size:1.8rem"; margin:auto auto >Please enter a valid number</p>`
    }  

    else if ( inputInt < 1) {
      output.innerHTML = "";
 output.innerHTML = `<p style="color:red; font-size:1.8rem; margin-top:-6px" >Please enter a number greater than or equal to 1</p>`
    }

else if ( inputInt >= 4000) {
      output.innerHTML = "";
 output.innerHTML = `<p style="color:red; font-size:1.8rem; margin-top:-6px" >Please enter a number less than or equal to 3999</p>`
    }

else {
    convertToRomanNum(inputInt);
}
}

/*Events*/
convertBtn.addEventListener("click",
checkUserInput);

number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});

/*Converter function*/
function convertToRomanNum(num) {
  output.innerHTML = "";
    const romanDigits = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    const arabicValues = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

    let result = '';
    for (let i = arabicValues.length - 1; i >= 0; i--) {
        while (num >= arabicValues[i]) {
            result += romanDigits[i];
            num -= arabicValues[i];
        }
    }
    output.innerHTML = `<p style=" font-size:2.7rem"; >${result}</p>`
    }
        
