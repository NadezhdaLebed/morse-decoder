const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const symbolsArray = expr.match(/.{1,10}/g);
    const codedArray = symbolsArray.map(symbol => {
        if (symbol === '**********') {
            return ' ';
        }
        const rawArray = symbol.match(/.{1,2}/g);
        return rawArray.map(code => {
            switch (code) {
                case "00":
                    return '';
                case "10":
                    return '.';
                case "11":
                    return '-'
                default:
                    return '';
            }
        }).join('');
    });
    return codedArray.map(code => MORSE_TABLE[code] || code).join('');
}

module.exports = {
    decode
}