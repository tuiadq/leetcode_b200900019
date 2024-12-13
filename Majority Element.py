class Solution:
    def majorityElement(self, nums):
        def recursiveMajority(nums, candidate, count, index):

            if index == len(nums):
                return candidate


            if count == 0:
                candidate = nums[index]


            count += (1 if nums[index] == candidate else -1)


            return recursiveMajority(nums, candidate, count, index + 1)


        return recursiveMajority(nums, None, 0, 0)
