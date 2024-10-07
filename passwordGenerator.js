const minLength = 6;
const maxLength = 32;
const passwordLength = 12;
const lowerCaseIncluded = true; // by default the lowercase chars are included
const upperCaseIncluded = true;
const numbersIncluded = true;
const symbolIncluded = true;

// Character sets
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

/**
 * Generate a random password of a specified length, which is a combination of
 * a subset of the above character sets.
 **/
const generatePassword = () => {
    let charCodes = lowercaseChars
    charCodes += upperCaseIncluded ? uppercaseChars : "";
    charCodes += numbersIncluded ? numberChars : "";
    charCodes += symbolIncluded ? symbolChars : "";
    const charSetLength = charCodes.length;
    
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charSetLength);
        password += charCodes[randomIndex];
    }

    return password;
}
console.log('Generated Password:',generatePassword());