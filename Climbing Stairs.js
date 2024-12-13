/**
 * Хүрхрээ алхах замыг тооцох функц. Энд 1 алхам болон 2 алхам авах боломжтой.
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // Хэрвээ алхам нь 2-оос бага байвал шууд түүний утгыг буцаах
    if (n <= 2) {
        return n;
    }

    // Динамик хураамжийн массивыг үүсгэж, эхлүүлэх
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1; // Эхний алхам
    dp[2] = 2; // Хоёр дахь алхам

    // 3-оос эхлэн алхам хийх боломжийг тооцоолох
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]; // Сүүлийн хоёр алхамын нийлбэр
    }

    // Аль болох олон алхам хийх замын тоог буцаах
    return dp[n];
};

// Жишээ хэрэглээ:
console.log(climbStairs(5)); // Гаргах: 8