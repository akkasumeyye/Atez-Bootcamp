function printArguments(...args) {
    args.forEach((arg, index) => {
      console.log(`Argument ${index}:`, arg);
    });
  }
  
  console.log(printArguments('hello', 14,15,25,45 , 'naber'));