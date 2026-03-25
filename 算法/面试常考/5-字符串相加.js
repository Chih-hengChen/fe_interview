var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;

    let ret = 0;
    const arr = [];
    while (i >= 0 || j >= 0) {
        const n1 = i >= 0 ? Number(num1[i--]) : 0;
        const n2 = j >= 0 ? Number(num2[j--]) : 0;
        let res = n1 + n2 + ret;
        ret = Math.floor(res / 10);
        res %= 10;
        arr.push(res);
    }
    if (ret !== 0) arr.push(ret);

    return arr.reverse().join('');
};