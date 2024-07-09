
//* fo = 0, f1= 1,  (0+1) ,  (1+1) ,  (1+2) , (1+1 + 1+2), (1+2)+(1+1 + 1+2)
//! Fibonacci(Fn) 
//!Sequence = 0,  1,  1,       2,       3,         5,         8,        13,  21 .....

//?  fibonacci(Fn) formula; 
//?*  Fn = Fn-1 + Fn-2  where n>=2



  export function fibonacci(n){
    if (n === 0 || n === 1) {
        return 1;
    }  
    else {
        return fibonacci(n-1)+ fibonacci(n-2);
    }
}
