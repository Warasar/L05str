function numDots(s){
    var tochki = 0;
    for (i=0;i < s.length ;i++){
        if (s[i] === '.')
        tochki++;
    }
    return tochki;
}

module.exports = numDots;