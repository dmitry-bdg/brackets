module.exports = function check(str, bracketsConfig) {
    let breckets_main = [];
    let bracket = Array.from(str);
    let result = true;
    if (bracket.length % 2 !== 0) {
        return false;
    }
    bracket.forEach((mainBracket) => {
        bracketsConfig.forEach((checkBracket, i) => {
            if (checkBracket[0] === mainBracket && checkBracket[0] !== checkBracket[1]) {
                breckets_main.push(i);
            } else if (checkBracket[1] === mainBracket && breckets_main[breckets_main.length - 1] === i) {
                breckets_main.pop();
            } else if (checkBracket[0] === mainBracket && checkBracket[0] === checkBracket[1]) {
                breckets_main.push(i);
            }
        });
    });
    if (breckets_main.length > 0) {
        result = false;
    }
    return result;
};