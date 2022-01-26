function fibonacci(input) {
  
    let seq = [0, 1, 1, 2];
    let count = 0
    for (let i = 3 ; i < input; i++){
      seq.push(seq[i] + seq[i-1])
    }return seq[input]
    
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
