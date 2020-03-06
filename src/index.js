module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 != 0) return false;

    const leftBrackets = [];
    const rightBrackets = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        if (bracketsConfig[i][0] != bracketsConfig[i][1]) {
            leftBrackets.push(bracketsConfig[i][0]);
            rightBrackets.push(bracketsConfig[i][1]);
        }
    }

    const sameBrackets = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        if (bracketsConfig[i][0] == bracketsConfig[i][1]) {
            sameBrackets.push(bracketsConfig[i][0]);
        }
    }

    const bracketsBuffer = [];

    for (let i = 0; i < str.length; i++) {
        if (bracketsBuffer.length == 0 || leftBrackets.includes(str[i])) {
            bracketsBuffer.push(str[i]);
        } else {
            if (rightBrackets.includes(str[i])) {
                if (
                    leftBrackets.indexOf(bracketsBuffer.pop()) !=
                    rightBrackets.indexOf(str[i])
                ) {
                    return false;
                }
            } else {
                let lastSymbol = bracketsBuffer.pop();
                if (
                    sameBrackets.indexOf(lastSymbol) !=
                    sameBrackets.indexOf(str[i])
                ) {
                    bracketsBuffer.push(lastSymbol);
                    bracketsBuffer.push(str[i]);
                }
            }
        }
    }

    if (bracketsBuffer.length != 0) return false;

    return true;
};
