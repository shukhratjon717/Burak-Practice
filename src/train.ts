interface reverser {
  str: string,
} 
function getReverse(str: string): reverser {
  const step1 = str.split("");
  const step2 = step1.reverse();
  const step3 = step2.join("")
  return {str: step3}
}
console.log(getReverse("hello world by Steve"))


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
