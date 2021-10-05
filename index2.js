const { pbkdf2 } = require('crypto');

pbkdf2('Tekst do zhashowania', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
    if(err) throw err;
    console.log(derivedKey.toString('hex'));
})