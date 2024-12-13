class Solution {
    coinChange(coins, amount) {
        // dp массивыг эхлээд Infinity-гаар ачаалж байна
        let dp = new Array(amount + 1).fill(Infinity);
        
        // Суурь тохиолдол: 0 хэмжээний мөнгө авахад 0 зоос шаардлагатай
        dp[0] = 0;
        
        // amount хүртэлх бүх хэмжээний мөнгийг шалгах
        for (let i = 1; i <= amount; i++) {
            for (let coin of coins) {
                if (i - coin >= 0) {
                    // Зоос ашиглахад хамгийн бага зоосны тоо олох
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }
        
        // Хэрэв dp[amount] нь Infinity хэвээр байгаа бол -1 буцаана, эсвэл хамгийн бага зоосны тоог буцаана
        return dp[amount] === Infinity ? -1 : dp[amount];
    }
}
