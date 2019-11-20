//Login to account button prompt function ex.
document.getElementById("login_b").onclick = login =() => {
    let username = prompt("Username.");
    let password = prompt("Password.");
    console.log("Username: " + username + "\nPassword: " + password);
    document.getElementById("login_output").innerHTML += "Username: " + username + "<br>";
    document.getElementById("login_output").innerHTML += "Password: " + password + "<br>";
}

//Confirm purchase button output function ex.
document.getElementById("confirm_b").onclick = confirm =() => {
    document.getElementById("confirm").innerHTML = "Order Placed, check email for confirmation.";
    document.getElementById("confirm_b").style.display = "hide";
}

//Convert number input to other base values button prompt function ex.
document.getElementById("convert_b").onclick = convert =() => {
    //String converted to number then converted to string again for conversion
    let convertInput = Number(prompt("Input number to be converted."));
    console.log("Decimal  :", convertInput);
    console.log("Binary   :", convertInput.toString(2));
    console.log("Octal    :", convertInput.toString(8));
    console.log("Hex      :", convertInput.toString(16));

    document.getElementById("convert_output").innerHTML += "Decimal  : " + convertInput + "<br>";
    document.getElementById("convert_output").innerHTML += "Binary   : " + convertInput.toString(2) + "<br>";;
    document.getElementById("convert_output").innerHTML += "Octal    : " + convertInput.toString(8) + "<br>";
    document.getElementById("convert_output").innerHTML += "Hex      : " + convertInput.toString(16) + "<br>";


}

//Password loop check function ex.
document.getElementById("password_b").onclick = password = () => {
    let pass;
    let guess = 0;
    do{
        pass = prompt("What is the password?");
        if(guess === 2) alert("The password is: password");
        guess++;
    }while(pass !== "password");
    guess = 0;
}

//Make a pyramid with nested loops function ex.
document.getElementById("triangle_b").onclick = triangle =() => {
    
    for (let j = 9; j >= 0; j--) {
        for(let i = 0; i <= j; i++) {
            document.getElementById("triangle_d").innerHTML += "&nbsp&nbsp";
        }
        for (let k = 9; k >= j; k--) {
            document.getElementById("triangle_d").innerHTML += "&nbsp&nbsp" + k;

        }
        document.getElementById("triangle_d").innerHTML += "<br>";
    }
}

//Make a finite array of numbers using a button function ex.
document.getElementById("array_b").onclick = m_array = () => {
    let f_input = [];

    //Clear element id <p id>
    document.getElementById("arrayOutput").innerHTML = "";

    while(true) {
        let input = prompt("Input a number to add to an array. If input is not a number redo. Press Q/q to quit.");
    
        if (input === "Q" || input === "q") {
            break;
        }
        else if (isNaN(input) === true && (input !== "Q" ||  input !== "q")) {
            alert("Input a number, please!");
        }
        else {
            f_input.push(Number(input));
        }
    }
    console.log(f_input);

    //Sorting the Number array from low to high 
    let biggestNum = null;
    let bigInd = null;

    for (let i = 0; i < f_input.length; i++) {
            biggestNum = f_input[i];
            
            console.log("index i: ", i);

        for (let j = i; j < f_input.length; j++) {
            if(f_input[j] >= biggestNum) { //if next index has bigger number make new biggest number
                biggestNum = f_input[j];
                bigInd = j;

                console.log("biggest num: ", biggestNum, "\nbig index: ", bigInd);
            }
        }
        f_input.splice(bigInd,1); //remove last biggest number from array
        f_input.unshift(biggestNum); //put last biggest removed number at start of array
    }
    console.log(f_input);

    //Print using foreach call back function ex
    document.getElementById("arrayOutput").innerHTML += "Sorted Array: [ ";

    f_input.forEach(function(element, index) {
        console.log(`element: ${element} \nindex: ${index}`);     //print in console
        document.getElementById("arrayOutput").innerHTML += element + " "; //print on page
    });

    document.getElementById("arrayOutput").innerHTML += "]";;
}

//Print a multi-array using eachOf
document.getElementById("multi_array_b").onclick = multi_array = () => {
    let m_array = [[0,1,2],[4,5,6,7,8],[9,10]];

    document.getElementById("multi_array_print").innerHTML += "[ ";
    m_array.forEach(function(row) {
        document.getElementById("multi_array_print").innerHTML += "[ ";
        row.forEach(function(col) {
            document.getElementById("multi_array_print").innerHTML += " " + col;
        });
        document.getElementById("multi_array_print").innerHTML += " ]";
    });
    document.getElementById("multi_array_print").innerHTML += " ]";
}

//Call function within another function and store a function array example
let f_1 = function (x) {
    return x*x;
}

let f_2 = function (x,y) {
    return x*y;
}

let f_3 = function (x,y,z) {
    return x*y*z;
}

document.getElementById("func_array_b").onclick = func_array = () => {

    let num1 = f_1(2);
    document.getElementById("func_array_output").innerHTML += "2 * 2 = " + num1 + "<br>";
    let num2 = f_2(2,3);
    document.getElementById("func_array_output").innerHTML += "2 * 3 = " + num2 + "<br>";
    let num3 = f_3(2,3,4);
    document.getElementById("func_array_output").innerHTML += "2 * 3 * 4 = " + num3 + "<br>";

    //Store functions in an array and print
    let f_array = [f_1, f_2, f_3];
    document.getElementById("func_array_output").innerHTML += "Function element [0]: " + f_array[0](2) + "<br>";
    document.getElementById("func_array_output").innerHTML += "Function element [1]: " + f_array[1](2,3) + "<br>";
    document.getElementById("func_array_output").innerHTML += "Function element [2]: " + f_array[2](2,3,4) + "<br>";
    
    console.log("Function element [0]: ", f_array[0](2));
    console.log("Function element [1]: ", f_array[1](2,3));
    console.log("Function element [2]: ", f_array[2](2,3,4));
}

//Print a callback function
document.getElementById("callback_b").onclick = callback_func = () => {
    let inner_func = f_1;

    function callback_func (x) {
        let i_f = x(5);
        document.getElementById("callback_output").innerHTML += "Inner function value: " + i_f + "<br>";
        console.log("Inner function value:", i_f);
        return i_f*2;
    }
    //Callback function taking another function with a argument
    let cbf = callback_func(inner_func);
    document.getElementById("callback_output").innerHTML += "Callback function value: " + cbf + "<br>";
    console.log("Callback function value:", cbf);
}

//Console log ex.
console.log("HELLO!");

//Variable scope ex.
let x = 10; //Can't be seen by window object nor is it globally accessible
var y = 5;  //Can be seen by window object and is globally accessible
console.log("Using let:", x, "\nUsing var:", y);
