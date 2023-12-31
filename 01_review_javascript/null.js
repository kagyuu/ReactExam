const str1 = `abcdefg`;

console.log("str1=" + str1.substring(0,3));

const str2 = null;
try {
    console.log("str2.substring(0,3)=" + str2.substring(0,3));
} catch(e) {
    console.log(e.message);
}
console.log("str2?.substring(0,3)=" + str2?.substring(0,3));

const str3 = null;
console.log("str3=" + (str3 ?? `未設定`));

let str4 = null;
str4 ??= '----'; // eq. str4 = (str4 ?? '----')
console.log("str4=" + str4);
