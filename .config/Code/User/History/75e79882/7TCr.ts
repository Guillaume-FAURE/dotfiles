function romanToInt(s: string): number {
    let num = 0;
    const romanPower = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let currentRoman = '';
    let power = 0;
    for (let i = romanPower.length - 1; i >= 0; i -= 1) {
        if (s[i] === romanPower[power] || s[i] === romanPower[power]) {
            currentRoman += s[i];
        }
        else {
            power += 1;
            console.log(cu)
        }
    }
    return num;
}

function main13() {
    const roman = 'LVIII';
    console.log(romanToInt(roman));
}
main13();
