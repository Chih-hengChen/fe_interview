// https://leetcode.cn/problems/compare-version-numbers/
var compareVersion = function(version1, version2) {
    let v1 = version1.split('.');
    let v2 = version2.split('.');
    
    if (v1.length < v2.length) {
        let n = v2.length - v1.length;
        while (n--) {
            v1.push('0');
        }
    } else if (v1.length > v2.length) {
        let n = v1.length - v2.length;
        while (n--) {
            v2.push('0');
        }
    }

    for (let i = 0; i < v1.length; i++) {
        let n1 = Number(v1[i]);
        let n2 = Number(v2[i]);
        if (n1 === n2) {
            continue;
        } else if (n1 < n2) {
            return -1;
        } else {
            return 1;
        }
    }
    return 0;
};

var compareVersion = function(version1, version2) {
    let v1 = version1.split('.');
    let v2 = version2.split('.');
    const maxlen = Math.max(v1.length, v2.length);

    for (let i = 0; i < maxlen; i++) {
        const num1 = i < v1.length ? parseInt(v1[i]) : 0;
        const num2 = i < v2.length ? parseInt(v2[i]) : 0;

        if (num1 !== num2) {
            return num1 < num2 ? -1 : 1;
        }
    }
    
    return 0;
};

// 不使用额外空间
var compareVersion = function(version1, version2) {
    let len1 = version1.length;
    let len2 = version2.length;

    let i = 0;
    let j = 0;

    while (i < len1 || j < len2) {
        let num1 = 0;
        while (i < len1 && version1[i] !== '.') {
            num1 = num1 * 10 + version1[i].charCodeAt(0) - '0'.charCodeAt(0);
            i++;
        }
        i++;

        let num2 = 0;
        while (j < len2 && version2[j] !== '.') {
            num2 = num2 * 10 + version2[j].charCodeAt(0) - '0'.charCodeAt(0);
            j++;
        }
        j++;

        if (num1 !== num2) {
            return num1 < num2 ? -1 : 1;
        }
    }
    return 0;
};