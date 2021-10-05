//zdecydowanie najlepszy
const {hash, compare} = require('bcrypt');
hash('Hello, World!', 10, (err, hash) => {
    if(err){
        console.log(err);
    }else{
        console.log(hash);
        //Czy dobrze się dekoduje
        compare('Hello, World!', hash, (err,res) => {
            if(res){
                //Dobrze się dekoduje
                console.log('+');
            }else{
                //Źle się dekoduje
                console.log('-');
            }
        })
    }


})
