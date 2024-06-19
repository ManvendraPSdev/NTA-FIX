// /Checking the crypto module
const crypto = require('crypto');


const PROBLEM_STATEMENT = "What is 2+2" ;
const option1 = "5" ;
const option2 = "6" ;
const option3 = "4" ;
const option4 = "Non of the above" ;

//Encrypting text
function encrypt(text , key , iv){
    const algorithm = 'aes-256-cbc'; 
    const cipher = crypto.createCipheriv(algorithm , key , iv) ; // Use to create the cipher object Which provides methods to perform the encryption process.
    let encrypted = cipher.update(text ,  'utf8', 'hex') ;
    encrypted += cipher.final('hex') ;
    return encrypted ; 
}

function decrypt(text , key , iv){
    const algorithm = 'aes-256-cbc' ;
    // Creating the decipher object for decrypting the text 
    const decipher = crypto.createDecipheriv(algorithm , key , iv) ; 
    let decrypted = decipher.update(text , 'hex' , 'utf8') ;
    decrypted += decipher.final('utf8') ;
    return decrypted ;
}

const key = crypto.randomBytes(32); // IIT BOMBAY SECRET 223
const iv = crypto.randomBytes(16);

const encryptedProblem = encrypt(PROBLEM_STATEMENT, key, iv);
const encryptedOption1 = encrypt(option1, key, iv);
const encryptedOption2 = encrypt(option2, key, iv);
const encryptedOption3 = encrypt(option3, key, iv);
const encryptedOption4 = encrypt(option4, key, iv);

console.log('Problem statement:', encryptedProblem);
console.log('Option 1:', encryptedOption1);
console.log('Option 2:', encryptedOption2);
console.log('Option 3:', encryptedOption3);
console.log('Option 4:', encryptedOption4);


const decryptedProblem = decrypt(encryptedProblem, key, iv);
const decryptedOption1 = decrypt(encryptedOption1, key, iv);
const decryptedOption2 = decrypt(encryptedOption2, key, iv);
const decryptedOption3 = decrypt(encryptedOption3, key, iv);
const decryptedOption4 = decrypt(encryptedOption4, key, iv);

console.log('Problem statement:', decryptedProblem);
console.log('Option 1:', decryptedOption1);
console.log('Option 2:', decryptedOption2);
console.log('Option 3:', decryptedOption3);
console.log('Option 4:', decryptedOption4); 