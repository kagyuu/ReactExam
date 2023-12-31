export default class ZoneCalc {
    add(a, b) {
        return zoneAdd(a,b);
    }
    sub(a,b) {
        return zoneSub(a,b);
    }
}

/**
 * 文字列の数値(ゾーン表現)同士の加算.
 * ASCIIコードの数値は 0 = 0x30, 1=0x31, ..., 9=0x39 なので、文字コード同士で加算して
 * 0x60を引けば合計値になる。
 * 後は繰上りを考慮しつつ、最下位桁から一桁ずつ足していけば、文字列の数値同士の加算ができる
 * @param {string} a NumberA
 * @param {string} b NumberB
 * @return {String} aとbの合計値
 */
const zoneAdd = (a, b) => {
    const len = Math.max(a.length, b.length);
    const aa = fillZero(a, len);
    const bb = fillZero(b, len);
    let sum = "";
    let cc = 0;
    let overflow = 0;

    for (let idx = (len-1); idx > -1; idx--) {
        cc = overflow + aa.charCodeAt(idx) + bb.charCodeAt(idx) - 0x60;
        if (cc > 9) {
            overflow = 1;
            cc = cc - 10;
        } else {
            overflow = 0;
        }
        sum = String.fromCharCode(cc + 0x30) + sum;
    }
    return sum;
}

/**
 * 文字列の数値(ゾーン表現)同士の減算.
 * ASCIIコードの数値は 0 = 0x30, 1=0x31, ..., 9=0x39 なので、文字コード同士で減算すれば
 * そのまま減算結果になる。
 * 後は繰上り(上の桁から10を借りる)を考慮しつつ、最下位桁から一桁ずつ減算していけば、
 * 文字列の数値同士の減算ができる
 * @param {string} a NumberA
 * @param {string} b NumberB
 * @return {String} aとbの減算結果
 */
const zoneSub = (a, b) => {
    const len = Math.max(a.length, b.length);
    const aa = fillZero(a, len);
    const bb = fillZero(b, len);
    let sum = "";
    let cc = 0;
    let overflow = 0;

    for (let idx = (len-1); idx > -1; idx--) {
        cc = overflow + aa.charCodeAt(idx) - bb.charCodeAt(idx);
        if (cc < 0) {
            overflow = -1;
            cc = cc + 10;
        } else {
            overflow = 0;
        }
        sum = String.fromCharCode(cc + 0x30) + sum;
    }
    return sum;
}

/**
 * str を len桁になるように 左から0埋めする
 * @param {String} str 
 * @param {Number} len 
 * @returns 0埋めされた結果
 */
const fillZero = (str, len) => {
    return ( Array(len).join('0') + str ).slice( -len );    
}
