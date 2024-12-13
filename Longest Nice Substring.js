/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    // Хэрвээ утга нь 2-аас бага урттай бол хоосон утга буцаах
    if (s.length < 2) {
        return "";
    }

    // Санаачлагаар дамжуулан утгыг шалгах
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        // Тухайн тэмдэгтийн эсрэг бүрхүүл байхгүй бол
        if (!s.includes(c.toUpperCase()) || !s.includes(c.toLowerCase())) {
            // Баруун ба зүүн хэсэгт тус тусад нь урт хамгийн том нарийвчилсан дэд функц дуудна
            const left = longestNiceSubstring(s.slice(0, i));
            const right = longestNiceSubstring(s.slice(i + 1));

            // Хамгийн урт хэсгийг буцаах
            return left.length >= right.length ? left : right;
        }
    }

    // Хэрвээ эсрэг бүрхүүлтэй тэмдэгт байхгүй бол бүхэл үгийг буцаах
    return s;
};

// Жишээ хэрэглээ:
console.log(longestNiceSubstring("YazaaBAay")); 