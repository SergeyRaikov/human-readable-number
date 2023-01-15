function toReadable(number) {
    const units = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];
    const tens = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ];

    const hundreds = Math.floor(number / 100);
    const tensOfNumber = number - hundreds * 100;
    const penultimateDigit = Math.floor(tensOfNumber / 10);
    const lastDigit = Math.floor(tensOfNumber % 10);

    let result = '';

    if (number === 0) return units[number];

    if (hundreds) result = units[hundreds] + ' hundred';

    if (tensOfNumber <= 19) {
       if (tensOfNumber !== 0) result += (hundreds > 0 ? ' ' : '') + units[tensOfNumber];
    } else {
        result += (hundreds > 0 ? ' ' : '') + tens[Math.floor(penultimateDigit)];
        if (lastDigit) {
            result += ' ' + units[lastDigit]
        }              
    }
    
    
    

    return result;
};

const test = toReadable(41);
console.log(test);
