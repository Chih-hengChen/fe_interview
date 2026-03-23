/** https://leetcode.cn/problems/coin-change/description/
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const n = coins.length;
    const map = {};
    const dfs = (i, c) => {
        if (map[`${i}-${c}`]) {
            return map[`${i}-${c}`];
        }
        if (i < 0) {
            return c === 0 ? 0 : Infinity;
        }

        if (c < coins[i]) {
            return dfs(i - 1, c);
        }
        const res = Math.min(dfs(i - 1, c), dfs(i, c - coins[i]) + 1)
        map[`${i}-${c}`] = res;
        return res;
    };
    const result = dfs(n - 1, amount);
    return result < Infinity ? result : -1;
};

var coinChange2 = function(coins, amount) {
    const memo = new Map();
    const dfs = (remain) => {
        if (remain === 0) return 0;
        if (remain < 0) return -1;
        if (memo.has(remain)) return memo.get(remain);

        let min = Infinity;
        for (let coin of coins) {
            const res = dfs(remain - coin);
            if (res >= 0) {
                min = Math.min(min, res + 1);
            }
        }

        const result = (min === Infinity) ? -1 : min;
        memo.set(remain, result);
        return result;
    };
    return dfs(amount);
};

var coinChange3 = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0 && dp[i - coin] !== Infinity) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};