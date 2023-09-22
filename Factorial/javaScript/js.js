//Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.

function factorial(n){
    if(n === 1) 
      return 1;
    else 
      return n * factorial((n-1));
  }