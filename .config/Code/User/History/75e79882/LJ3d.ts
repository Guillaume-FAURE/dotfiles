function romanToInt(s: string): number {
    let num = 0;
    const romanPower = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    for (let i = 0; i <s.length; i += 1) {
        console.log(`currentLetter: ${s[i]}`);
        if (s[i] === romanPower[power] || s[i] === romanPower[power + 1]) {
            currentRoman.unshift(s[i]);
        } else {
            console.log(`power:${power}, currentRoman:${currentRoman}`);
            currentRoman = [];
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
