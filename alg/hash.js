const res = Array.from('helloa');
console.log(res.sort().toString());

const map = new Map();
map.set('hell', ['hello']);
map.set('h', ['hellofdfas'])

console.log(typeof map.values())

// slide window width
var lengthOfLongestSubstring = function (s) {
    const set = new Set();
    const len = s.length;
    let j = 0;
    let i = 0;
    let res = 0;
    while (i < len && j < len) {
        if (!set.has(s[i])) {
            set.add(s[i]);
            console.log(set, s[i])
            res = Math.max(res, i - j + 1);
            i++;
        } else {
            set.delete(s[j]);
            j++;
        }
    }
    console.log([...set])
    return res;
};

const num = lengthOfLongestSubstring('abcabc');
console.log(num, '---');


const s = new Set();
s.add(1); s.add(2);
s.forEach(i => console.log(i, '---'))
console.log(Array.from(s))