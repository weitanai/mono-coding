var coinChange = function(coins, amount) {
    const dp = new Array(amount+1).fill(amount+1);
    console.log(dp,'dp---')
    dp[0] = 0;
    let k=0;
    for(let i = 1; i<=amount; i++) {
        for(let j = 0; j< coins.length; j++) {
            // state chagne => amout => fn(amout-countValue) + 1;
            if (i >= coins[j]) {
                console.log('----', dp[i], dp[i-coins[j]], i-coins[j]);
                dp[i] = Math.min(dp[i], dp[i-coins[j]]+1);
                k++;
            }
        }
    }
    console.log(dp,'---------', k)
    return dp[amount] > amount ? -1 :  dp[amount];
};

const res1 = coinChange([1, 2, 5], 11);
console.log(res1);