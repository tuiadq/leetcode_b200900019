class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        num_dict = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in num_dict:
                return [num_dict[complement], i]
            num_dict[num] = i


solution = Solution()

# Жишээ 1
nums1 = [2, 7, 11, 15]
target1 = 9
print(solution.twoSum(nums1, target1))  

# Жишээ 2
nums2 = [3, 2, 4]
target2 = 6
print(solution.twoSum(nums2, target2))  

# Жишээ 3
nums3 = [3, 3]
target3 = 6
print(solution.twoSum(nums3, target3)) 