function romanToInt(s: string): number {
    let num = 0;
    const romanPower = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    for (let i = 0; i < s.length; i += 1) {
        const current = romanPower(s[i]);
        const next = romanPower(s[i + 1]);

        if (current < next) {
            num += next - current;
            i += 1;
        } else {
            num += current;
        }
    }
    return num;
}

function main13() {
    const roman = 'LVIII';
    console.log(romanToInt(roman));
}
main13();
