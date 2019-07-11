function eatHamburgers(string _name, uint _amount) {

}
//This is a function named eatHamburgers that takes 2 parameters: a string and a uint. For now the body of the function is empty.

//Note: It's convention (but not required) to start function parameter variable names with an underscore (_) in order to differentiate them from global variables. We'll use that convention throughout our tutorial.


// private function

function _addToArray(uint _number) private {
  numbers.push(_number);
}

// view function
string greeting = "What's up dog";

function sayHello() public view returns (string) {
  return greeting;
}

// pure functions
// also note that below is a private func with a diff naming convention
function _multiply(uint a, uint b) private pure returns (uint) {
  return a * b;
}

