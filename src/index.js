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

  let exprArr = expr.split('');
  let exprArrNew = [];
  let arrMorse = [];
  let resArr = [];

  for(let i = 0; i < expr.length; i++) {
    exprArrNew.push(exprArr.slice(0, 10))
    exprArr = exprArr.splice(10, exprArr.length)
  }

  for(let i = 0; i < exprArrNew.length; i++) {
    for(let j = 0; j < exprArrNew[i].length; j++) {
      if(exprArrNew[i][j] === '0') {
        exprArrNew[i].shift()
        j--
      }
      if(exprArrNew[i][j] === '1' && exprArrNew[i][j + 1] === '0') {
        arrMorse.push('.')
        exprArrNew[i].shift()
        exprArrNew[i].shift()
        j -= 2

      }
      if(exprArrNew[i][j] === '1' && exprArrNew[i][j + 1] === '1') {
        arrMorse.push('-')
        exprArrNew[i].shift()
        exprArrNew[i].shift()
        j -= 2
      }
      if(exprArrNew[i][j] === '*') {
        arrMorse.push(' ')
        exprArrNew[i] = []
      }
    }
    arrMorse.push(';')
  }

 arrMorse = arrMorse.join('').split(';')
  arrMorse.pop()

  
  arrMorse.forEach(el => {
    if(el === ' ') {
      result.push(' ')
    }
    for (let key in MORSE_TABLE) {
      if(el === key) {
        resArr.push(MORSE_TABLE[key])
      }
    }
  })

  return resArr.join('')
}


module.exports = {
    decode
}