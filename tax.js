
// x is earnings
  export function tax(x) {
  
    if (x < 12000) {
       return 0;
    }
    else if (x > 12000 || x < 36000) {
        return 0.2 * x;
    } 
    
        return 0.4 * x;
}