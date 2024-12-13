/**
 * Хоёр текстийн хамгийн урт нийтлэг дэд дараалал (LCS)-ийг олох функц.
 * @param {string} text1 - Эхний текст
 * @param {string} text2 - Хоёрдахь текст
 * @return {number} - Хамгийн урт нийтлэг дэд дараалалын урт
 */
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length;
    const n = text2.length;

    // dp массив үүсгэж, бүх элементийг 0-оор тохируулна
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Текст бүрийн бүх тэмдэгтүүдийг харьцуулж, хамгийн урт нийтлэг дэд дараалалыг олох
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                // Хэрвээ тэмдэгтүүд адилхан бол өмнөх утгыг авна
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // Тэмдэгтүүд өөр бол хамгийн их утгыг авна
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Хамгийн урт нийтлэг дэд дараалалын урт
    return dp[m][n];
};

// Жишээ хэрэглээ
console.log(longestCommonSubsequence("abcde", "ace")); // Гаргах: 3 (LCS: "ace")
