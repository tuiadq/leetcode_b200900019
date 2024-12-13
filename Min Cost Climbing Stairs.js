/**
 * Хүрхрээ авсан үед хамгийн бага зардалтай замыг тооцох функц.
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length;

    // Динамик хураамжийн массивыг үүсгэж, эхлүүлэх
    const dp = new Array(n).fill(0);

    // Эхний хоёр алхамын зардлыг зөвшөөрөх
    dp[0] = cost[0];
    dp[1] = cost[1];

    // 2-оос эхлэн бүх алхамд хамгийн бага зардлыг тооцоолох
    for (let i = 2; i < n; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }

    // Эцсийн хоёр алхамын хамгийн бага зардлыг буцаах
    return Math.min(dp[n - 1], dp[n - 2]);
};

// Жишээ хэрэглээ:
console.log(minCostClimbingStairs([10, 15, 20])); // Гаргах: 15
