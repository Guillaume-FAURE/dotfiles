function romanToInt(s: string): number {
    let num = 0;
    const romanPower = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let currentRoman = '';
    let power = 0;
    for (let i = romanPower.length - 1; i >= 0; i -= 1) {
        console.log(`currentLetter: ${s[i]}`);
        if (s[i] === romanPower[power] || s[i] === romanPower[power + 1]) {
            currentRoman += s[i];
        } else {
            console.log(`power:${power}, currentRoman:${currentRoman}`);
            currentRoman = '';
            power += 1;
        }
    }
    return num;
}

function main13() {
    const roman = 'LVIII';
    console.log(romanToInt(roman));
}
main13();
