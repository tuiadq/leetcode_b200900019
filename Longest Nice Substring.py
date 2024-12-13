class Solution:
    def longestNiceSubstring(self, s):
        if len(s) < 2:
            return ""

        for i, c in enumerate(s):
            if c.swapcase() not in s:
                left = self.longestNiceSubstring(s[:i])
                right = self.longestNiceSubstring(s[i + 1:])

                return max(left, right, key=len)

        return s
