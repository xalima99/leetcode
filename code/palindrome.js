var isPalindrome = function(x) {
    if(x < 0) return false
    let _x = x.toString();

    for(i = 0, j = _x.length -1; i < j; i++, j--){
        if(_x[i] != _x[j]) return false
    }
    return true
};

module.exports = isPalindrome