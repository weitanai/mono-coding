var coinChange = function (coins, amount) {
    const dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        if (i === 9) {
            debugger;
        }
        for (let coinValue of coins) {
            // 数组下标与硬币值之差大于等于0
            if (i >= coinValue) {
                dp[i] = Math.min(dp[i], dp[i - coinValue] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};


const res = coinChange([1, 2, 5], 11);

console.log("res--", res);

console.log(new Array(3).map(()=>1));

