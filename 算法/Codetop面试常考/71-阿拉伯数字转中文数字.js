// https://juejin.cn/post/7056769354452434975
/**
 * 阿拉伯数字转中文数字
 * @param {string|number} num - 输入的数字
 * @returns {string} - 转换后的中文数字
 */
function arabicToChinese(num) {
  if (num === 0) return "零";
  let negative = num < 0;
  let str = Math.abs(num).toString();
  let [intPart, decPart] = str.split(".");

  // 整数部分（反转分组）
  let arr = intPart.split("").reverse().join("");
  let curr = 0;
  let units = ["", "万", "亿", "兆"];
  let res = [];
  while (curr < arr.length) {
    res.push(numToChina(arr.slice(curr, curr + 4)));
    curr += 4;
  }
  console.log(res, "res");

  let answer = [];
  for (let i = res.length - 1; i >= 0; i--) {
    if (res[i] === "" && res.length > 1) continue; // 全零组跳过
    if (res[i] === "零" && i !== 0 && res[i - 1] === "") continue;
    answer.push(res[i] + (i === 0 ? "" : units[i]));
  }
  let intResult = answer.join("");
  console.log(intResult, "intResult");

  // 小数部分
  let decResult = "";
  if (decPart) {
    const digits = "零一二三四五六七八九";
    decResult = "点" + [...decPart].map((d) => digits[d]).join("");
  }

  return (negative ? "负" : "") + (intResult || "零") + decResult;
}

function numToChina(n) {
  // n 是 1~4 位的数字字符串（低位在前，如 "4321" 表示 1234）
  if (n === "0000") return "";
  let digits = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  let units = ["", "十", "百", "千"];
  let arr = n.split("").reverse(); // 转回正常高位在前的顺序
  let result = "";
  let lastZero = false;

  for (let i = 0; i < arr.length; i++) {
    let d = parseInt(arr[i], 10);
    if (d === 0) {
      if (!lastZero && result) result += "零";
      lastZero = true;
    } else {
      result += digits[d] + units[arr.length - i - 1];
      lastZero = false;
    }
  }

  // 去除末尾多余的“零”
  if (result.endsWith("零")) result = result.slice(0, -1);
  // 处理“一十”开头 -> “十”
  if (result.startsWith("一十")) result = result.slice(1);
  // 处理单独的“十”（即数字 10）
  if (result === "一十") result = "十";

  return result;
}

console.log(arabicToChinese(1234567890)); // "十二亿三千四百五十六万七千八百九十"
console.log(arabicToChinese(-1001)); // "负一千零一"
console.log(arabicToChinese(-1001.34)); // "负一千零一点三四"
