/**
 * Орон байрны мөнгийг дээрэмдэх хамгийн их боломжит мөнгийг тооцох функц.
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // Хэрвээ массив хоосон бол 0 буцаана
    if (nums.length === 0) {
        return 0;
    }

    // Хэрвээ массивийн урт 1 бол тухайн элементийг буцаана
    if (nums.length === 1) {
        return nums[0];
    }

    // Динамик хураамжийн массив үүсгэх
    const dp = new Array(nums.length).fill(0);

    // Эхний хоёр байрны мөнгө
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    // 2-оос эхлэн бүх байрнуудыг дүүргэж хамгийн их мөнгийг тооцоолно
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    // Эцсийн байрны хамгийн их мөнгийг буцаах
    return dp[nums.length - 1];
};

// Жишээ хэрэглээ
var param_1 = [2, 7, 9, 3, 1];  // Массивийн өгөгдөл
var ret = rob(param_1);  // Функцыг дуудна
console.log(ret);  // Гаралт: 12
