function convertStringToNumber(string, x=10) {
    let chars = string.split('');
    let _ = '';
    if (string.startsWith('-')) {
        chars.shift();
        _ = '-'
    }

    let reg = /e|E/;
    let number = 0;
    let letters = {
        'a': '10',
        'b': '11',
        'c': '12',
        'd': '13',
        'e': '14',
    }
    let i = 0;
      // 小数
      if (x === 10) {
        while (i < chars.length && !reg.test(i)) {
            fraction = fraction / x;
            number += (chars[i].codePointAt(0) - '0'.codePointAt(0))
            i++;
        }
        // 指数计算
        let newChars = chars.join('');
        if (reg.test(newChars)) {
            newChars.replace(reg, ',').split(',');
            number = (+newChars[0]) ** (+newChars[1])
        }
        return _ ? -number : +number;
    }

    if (x === 16) {
        while (letters[chars[i]]) {
            number *= x;
            number += letters[chars[i]]
            i++;
        }
        return _ ? -number : +number;
    }

    while (i < chars.length && chars[i] !== '.' && !letters[chars[i]]) {
        number = number * x;
        number += (chars[i].codePointAt(0) - '0'.codePointAt(0))
        i++;
    }

    if (chars[i] === '') i++;
    let fraction = 1;
    while (i < chars.length) {
        fraction = fraction / x;
        number += (chars[i].codePointAt(0) - '0'.codePointAt(0))
        i++;
    }

    return _ ? -number : +number;
}

let result1 = convertStringToNumber('11', 2);
let result2 = convertStringToNumber('abc', 16);
let result3 = convertStringToNumber('2.3e3', 2);
let result4 = convertStringToNumber('23.45', 2);
let result5 = convertStringToNumber('-11', 2);

function test(result, string, x) {
    console.log(result);
    return string === result.toString(x);
}

console.log(test(result1, '11', 2));
// 有 bug
console.log(test(result2, 'abc', 16));
console.log(test(result3, '2.3e3', 2));
console.log(test(result4, '23.45', 2));