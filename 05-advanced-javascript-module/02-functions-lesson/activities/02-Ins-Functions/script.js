// Functions are reusable blocks of code that perform a specific task
// This is a function declaration 
function declareHello() { 
  console.log("Hello, I am a function declaration.");
  console.log("-----------------------------------");
  // Return stops the execution of a function
  return;
}

// This is a function expression
var expressHello = function() { 
  console.log("Hello, I am a function expression.");
  console.log("-----------------------------------");
  return;
};

// Functions must be called to execute
declareHello(); 
expressHello();

//Functions can be called again to make the block of code execute again
declareHello();
