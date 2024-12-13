/**
 * Тэмдэгтүүдийн массивыг (сортлогдсон) хоёр мэдрэмжийн мод (BST) болгох функц.
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // Хэрвээ массив хоосон бол, ямар ч мөчиргүй (null) буцаана
    if (nums.length === 0) {
        return null;
    }

    // Массивын гол элемент буюу төвийг олох
    const mid = Math.floor(nums.length / 2);
    // Модны үндсийг төв элементоор үүсгэнэ
    const root = new TreeNode(nums[mid]);
    
    // Зүүн талын элементүүдийн эхлэл
    root.left = sortedArrayToBST(nums.slice(0, mid));
    // Баруун талын элементүүдийн эхлэл
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    
    // Үндсийг буцаах
    return root;
};

// TreeNode классыг тодорхойлж байгаа бол, дараах байдлаар өгөгдсөн байх ёстой
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

// Жишээ хэрэглээ
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
