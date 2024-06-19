const sss = require('shamirs-secret-sharing') ;

const secret = Buffer.from('Manvendra') ;
const shares = sss.split(secret ,{shares : 3 , threshold : 2}) ;
const smallerShares = shares.slice(0 ,2) ;
const recover = sss.combine(smallerShares) ;

console.log(shares.map(x => x.toString('hex'))) ;
console.log(recover.toString());

