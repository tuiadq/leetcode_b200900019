/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // Тусгай сорилтыг ашиглан тоонуудыг эрэмбэлнэ
    return nums.sort((a, b) => a - b);  // Тоонуудыг багаас том руу эрэмбэлэх
};

// Жишээ хэрэглээ:
console.log(sortArray([5, 2, 9, 1, 5, 6])); // Гаргах: [1, 2, 5, 5, 6, 9]
