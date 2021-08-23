const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
    " ": " ",
  };
  
  function decode(expr) {
    
    let x = [];
    let slice = expr.match(/.{1,10}/g);
    for (let i = 0;i <= slice.length - 1; i++) {
      x[x.length] = slice[i]
        .replace(/11/g, "-")
        .replace(/10/g, ".")
        .replace(/\*\*\*\*\*\*\*\*\*\*/g, " ")
        .replace(/0/g, "");
    }
  
    let y = [];
    for (let j = 0; j<= x.length - 1; j++) {
      y[y.length] = MORSE_TABLE[x[j]];
    }
    return y.join("");
  }
  
  module.exports = {
    decode,
  };
  