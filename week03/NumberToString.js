function convertNumberToString(number, x=10) {
    if (number === 0) return 0; 
    let integer = Math.floor(number);
    let fraction = (number - integer).toString(x);
    let string = '';
    while (integer > 0) {
        string = String(integer % x) + string;
        integer = Math.floor(integer / x);
    }
     return fraction && fraction != '0' ? `${string}${fraction}` : string;
}

function test(result, number, x) {
    return result === number.toString(x);
}

let result1 = convertNumberToString(10, 2);
let result2 = convertNumberToString(0.23, 2);
let result3 = convertNumberToString(1.23e3, 2);


console.log(test(result1, 10, 2));
console.log(test(result2, 0.23, 2));
console.log(test(result3, 1.23e3, 2));