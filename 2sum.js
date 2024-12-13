/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Объект ашиглан тоо болон индексийг хадгалах
    const numMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        // complement байгаа эсэхийг шалгах
        if (complement in numMap) {
            return [numMap[complement], i];
        }
        // Одоогийн тоог объектод хадгалах
        numMap[nums[i]] = i;
    }

    // Хоёр тоо олоогүй тохиолдолд буцах
    throw new Error("Хоёр тоо олоогүй");
};
