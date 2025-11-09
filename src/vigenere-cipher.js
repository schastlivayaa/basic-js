const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    message = message.toUpperCase();
    key = key.toUpperCase();

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    let i = 0;

    for (const char of message) {
      if (alphabet.includes(char)) {
        const mIndex = alphabet.indexOf(char);
        const kIndex = alphabet.indexOf(key[i % key.length]);
        const newChar = alphabet[(mIndex + kIndex) % 26];

        result += newChar;
        i += 1;
      } else {
        result += char;
      }
    }

    if (!this.isDirect) result = result.split("").reverse().join("");

    return result;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    let i = 0;

    for (const char of encryptedMessage) {
      if (alphabet.includes(char)) {
        const mIndex = alphabet.indexOf(char);
        const kIndex = alphabet.indexOf(key[i % key.length]);
        const newChar = alphabet[(mIndex - kIndex + 26) % 26];

        result += newChar;
        i += 1;
      } else {
        result += char;
      }
    }

    if (!this.isDirect) result = result.split("").reverse().join("");

    return result;
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
