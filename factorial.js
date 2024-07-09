  // By Arnold Weasly Bolongo & Valentine Kiguli
  
  export function factorial(n) {
    if (n<0 || n>125)
      return -1;
        if (n === 0 || n === 1)
        return 1;
      return n * factorial(n - 1);
    }
  

// console.log(factorial(-1))