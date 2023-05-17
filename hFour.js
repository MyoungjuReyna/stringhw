  var name = prompt('What is your name?');
  var promptAnswer = "Yesterday  " + name + "  entered the spaceship";


  // Now we have our function with two parameters

function paramters(input1, input2) {


// below we will create a piece of code for the answers to show up on the html page.

    var result = input1 + input2;
    document.getElementById("blankTwo").innerHTML = result;
}

// here we have a method that will run the function and we are entering the arguments to pass through.

paramters( promptAnswer , '  and yelled out  ', 'Ganoosh!!');
