const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '': ' '
};

const DECODE = {
    "10": '.',
    "00": '',
    "11": '-',
};

function decode(expr) {
    const chunks = expr.match(/.{10}/g);
    const decodedArray = chunks.map(chunk => {
        const pairs = chunk.match(/.{2}/g);
        const morseString = pairs.map(pair => DECODE[pair]).join('');
        return MORSE_TABLE[morseString];
    });
    return decodedArray.join('');
}

module.exports = {
    decode
}