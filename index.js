const {createHmac} = require('crypto');
const salt = 'ADM@o2amdmdoiqiao dfa2d /,,,.;';
const hash = createHmac('sha512', salt)
    .update('Tekst do zhashowania')
    .digest('hex');
console.log(hash);

