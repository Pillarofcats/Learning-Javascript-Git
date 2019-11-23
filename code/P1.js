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

//Memoization function ex  (memoization)
document.getElementById("memoize_b").onclick = memoize = () => {
  
    prism_vol.cache = {};
  
    function prism_vol (l,w,h) {
      let key_vol = l + " * " + w + " * " + h;
      
      if(key_vol in prism_vol.cache) {
        document.getElementById("memoize_output").innerHTML += " exists already: " + key_vol + "<br>";
      }
  
      else{
        let volume = l*w*h;
        prism_vol.cache[key_vol] = volume;
        document.getElementById("memoize_output").innerHTML += key_vol + " = " + volume + "<br>";
      }
    }
  
    prism_vol(2,3,4);
    prism_vol(1,2,3);
    prism_vol(1,2,3);
    prism_vol(2,4,6);
    prism_vol(1,3,5);
    prism_vol(2,4,6);
}

//Call and Apply methods for CHANGING this object in a function equal to the argument passed invoking the call/apply method
document.getElementById("call_app_b").onclick = call_app = () => {

    function call_this (arg_1, arg_2) {
        document.getElementById("call_app_output").innerHTML += "<br>CALL METHOD:<br>";
        document.getElementById("call_app_output").innerHTML += "Arg_1 = " + arg_1 + "<br>" + "Arg_2 = " + arg_2 + "<br>" + "this object = " + this + "<br>";
    }

    function apply_this (arg_1, arg_2) {
        document.getElementById("call_app_output").innerHTML += "<br>APPLY METHOD:<br>";
        document.getElementById("call_app_output").innerHTML += "Arg_1 = " + arg_1 + "<br>" + "Arg_2 = " + arg_2 + "<br>" + "this object = " + this + "<br>";
    }
    //Value of this before using call/apply methods
    call_this(1,2);
    apply_this(3,4);

    //Call method takes a NORMAL ARGUMENT, [THIS MUST BE FIRST ARGUMENT]
    call_this.call("this object using call.",1,2);
    //Apply method takes an ARRAY AS AN ARGUMENT, [THIS MUST BE FIRST ARGUMENT], [Each element in the array counts for 1 argument when function is invoked]
    apply_this.apply("this object using apply.",[3,4]);
}

//Create a Constructor function to make new animal objects with their own properties and store them in an object array
var animal_array = [];

document.getElementById("construct_b").onclick = construct = () => {

    //Constructor
    function Animal (name, type, can_pet) {
        //this refers to new object to be created
        this.name = name;
        this.type = type;
        this.can_pet = can_pet;
        this.output_animal(); //Uses inheritance from Parent prototype, Animal.prototype.output_animal
    }
    //Parent inheritance of constructor Animal method
    Animal.prototype.output_animal = function() {
        document.getElementById("construct_output").innerHTML += "Made a " + this.type + " named " + this.name + ", but will you pet it? " + this.can_pet + "!<br>";
    }

    //Factory Function
    function new_animal (name, type, can_pet) {
        //Object literal
        let animal = {
            name: name,
            type: type,
            can_pet: can_pet
        };
        document.getElementById("construct_output").innerHTML += "Made a " + type + " named " + name + ", but will you pet it? " + can_pet + "!<br>";
        return animal;
    }

    let a_name = prompt("What is the animal's name? ");
    let a_type = prompt("What type of animal is this? ");
    let a_cp = prompt("Would you pet this animal? ");
    let pick;
    let make_animal;

    //Select object creation method Factory Function OR Constructor
    do {
        pick = prompt("1: Factory Function\n2: Constructor");
    } while (!(pick === "1" || pick === "2"));

    if (pick === "1") {
        //Make an animal using the Factory function
        make_animal = new_animal(a_name, a_type, a_cp);
    }
    else{
        //Making an animal using the Constructor
        make_animal = new Animal(a_name, a_type, a_cp);
    }

    animal_array.push(make_animal);

    let json_animal_str = null;
    document.getElementById("construct_output").innerHTML += "We have made " + animal_array.length + " animal(s): "

    for (let z = 0; z < animal_array.length; z++) {
        json_animal_str = JSON.stringify(animal_array[z]);
        document.getElementById("construct_output").innerHTML += "[" + json_animal_str + "] ";
    }
    document.getElementById("construct_output").innerHTML += "<br><br>";
}

//Change prototype inheritance of objects
document.getElementById("inherit_obj_b").onclick = inherit = () => {
   
    //object literal
    let teacher = {
        species: "human",
        classroom: 101,
    };

    //object literal
    let student = {
       gpa: 3.0,
       classes: ["math", "science","english"],
   };

   //Student object literal inherits ALL of the properties of the teacher object literal
   Object.setPrototypeOf(student, teacher);
   document.getElementById("inherit_obj_output").innerHTML += "Changed STUDENT object literal to receive TEACHER object literal PROPERTIES using PROTOTYPE INHERITANCE<br><br>";
   
   //Shows student inherited properties of teacher
   console.log("Teacher: ",teacher,"\nStudent: ",student,"\n");
   console.log("Student Species: ",student.species + "\nstudentclassroom: ",student.classroom);
   
   //Convert javascript objects to strings that can be displayed through .innerHTML
   let t = JSON.stringify(teacher);
   let s = JSON.stringify(student);
   let tp = JSON.stringify(teacher.__proto__);
   let sp = JSON.stringify(student.__proto__);

   //Print teacher and student objects then teacher and student prototype objects from inheritance
   document.getElementById("inherit_obj_output").innerHTML += "Teacher object - proto : " + t + "<br>Teacher object + proto: " + t + " " + tp + "<br>";
   document.getElementById("inherit_obj_output").innerHTML += "<br>Student object - proto : " + s + "<br>Student object + proto: " + s + " " + sp + "<br>";
}

//Console log ex.
console.log("HELLO!");

//Variable scope ex.
let x = 10; //Can't be seen by window object nor is it globally accessible
var y = 5;  //Can be seen by window object and is globally accessible
console.log("Using let:", x, "\nUsing var:", y);
