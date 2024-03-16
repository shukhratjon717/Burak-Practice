interface SquareMaker {
  Number: number;
  Square: number;
}

function getSquare(arr: number[]): SquareMaker[] {
  let result: SquareMaker[] = [];
  for (let i = 0; i < arr.length; i++) {
    const step2 = arr[i] * arr[i];
    const step3: SquareMaker = {
      Number: arr[i],
      Square: step2
    };
    result.push(step3);
  }
  return result;
}

const squares = getSquare([1, 2, 3]);
console.log(squares);



/* 
Traditional FrontEnd Development (FD) => BSSR = SSR (Admin) => EJS
Modern FrontEnd development (FD)      => SPA( Single Page Application) (USER's appications) => REACT
*/


/* Cookies: 
request: join,
self destroy

*/ 

/* Validaton
FrontEnd validation
Backend validation
Database validation

*/
