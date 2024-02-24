const num = [12, 23, 34, 45]

// const finder = Math.max(...num)
// console.log(finder)

function counter(finder) {
    for (let i = 0; i < finder.length; i++) {   
    let finder2 = Math.max(...finder)
    if(finder2 > finder[i]) {
        let finder3 = finder2.toString();
        const last = parseInt(finder3[1])
        console.log(last)
        }
    }
}

counter([53,2,2,21]);

// if(typeof finder == 'number' ) {
//     console.log(finder.charAt(finder.length - 1))
// }