
//! Fibonacci(Fn) 
//!Sequence = 0,  1,  1,       2,       3,         5,         8,        13,  (13*1.618)= 21.034 , (21*1.618)= 33.97 ..... (1.618 * previous summmation)

//! ratio = 1/1=1,  2/1=2,  3/2=1.5, 5/3=1.667, 8/5=1.60, 13/8=1.625, 21/13=1.615  

//golden ratio in the fibonacci sequence,
//* when n >= 8, n x 1.618 for the next number

//?*  fibonacci(Fn) formula; 
//?  Fn = Fn-1 + Fn-2  where n>=2



//* fo = 0** , f1= 1** ,  (0+1) ,  (1+1) ,  (1+2) , (1+1 + 1+2), (1+2)+(1+1 + 1+2)
//? F(0)= 0
//? F(1)= 1
//? F(2)= F(1) + F(0) = 1 + 0 = 1
//? F(3)= F(2) + F(1) = 1 + 1 = 2
//? F(4)= F(3) + F(2) = 2 + 1 = 3
//? F(5)= F(4) + F(3) = 3 + 2 = 5
//? F(6)= F(5) + F(4) = 5 + 3 = 8
//? F(7)= F(6) + F(5) = 8 + 5 = 13
//? F(8)= F(7) + F(6) = 13 + 8 = 21
//? F(9)= F(8) + F(7) = 21 + 13 = 34



export function fibonacci(n) { // n is the nth number in the Fibonacci sequence
    try{
        if(n < 0 || n > 1476)  
          throw new Error("Operation not feasible"); // Handling the error caused by numbers less than 0 and greater than 1476
    }
    catch(error){
          console.error(error)
    }
      if (n < 1 || n > 1476) return 0; 
    let previous = 1; // second number in the fibonacci sequence
    let current = 1; // third number in the fibonacci sequence

    for (let i = 2; i < n; i++){
        const next = previous + current;
        previous = current;
        current = next;
    }
    return current;
}

//console.log(fibonacci(1476)); (1.3069892237633987e+308) // checking the output of the function









 