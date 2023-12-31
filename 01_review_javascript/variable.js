let let_name = "LET NAME";
const const_name = "CONST NAME";
var var_name = "VAR_NAME";

console.log(let_name);
console.log(const_name);
console.log(var_name);

try {
    let_name = "UPDATE_LET_NAME";
    var_name = "UPDATE_VAR_NAME";
    const_name = "UPDATE_CONST_NAME";    
} catch (e) {
    console.log("\n### CONST IS NOT UPDATABLE ###");
    console.log(e);
}

if (true) {
    var x = 123;
    let y = 456;
}
console.log("\n### VAR HAS NOT SCOPE ###")
console.log("x=" + x);
console.log("\n### LET HAS SCOPE ###");
console.log("y=" + y);
