 
 
 export function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);   
  
  }
  



 /**
  ** explanation of n
  * */ 
  //
  /**
   **  0(!) = 1 ****
   **  1(!) = 1 ****
   */
  
  //  2(!) = 2 x 1
  //  3(!) = 3 x 2 x 1
  //  4(!) = 4 x 3 x 2 x 1
  //  5(!) = 5 x 4 x 3 x 2 x 1
