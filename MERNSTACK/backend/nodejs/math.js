let sum=(a,b)=> a+b;
let sub=(a,b)=> a-b;
let multiply=(a,b)=> a*b;
let divide=(a,b)=> a/b;

//exporting file.
module.exports={
    sum:sum,
    sub:sub,
    multiply:multiply,
    divide:divide
};

/**Approach One
 * let obj={
    sum:sum,
    sub:sub,
    multiply:multiply,
    divide:divide
};
module.exports=obj;
 */

/**Approach two
 * module.exports={
    sum:sum,
    sub:sub,
    multiply:multiply,
    divide:divide
};
 */
/**Approach three
module.exports sum=(a,b)=> a+b;
module.exports sub=(a,b)=> a-b;
module.exports multiply=(a,b)=> a*b;
module.exports=divide=(a,b)=> a/b;
};
 */

/**Approach four
exports sum=(a,b)=> a+b;
exports sub=(a,b)=> a-b;
exports multiply=(a,b)=> a*b;
exports=divide=(a,b)=> a/b;
};
 */

