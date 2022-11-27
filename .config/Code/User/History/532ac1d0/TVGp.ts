function isMatch(s: string, p: string): boolean {
    let regIndex = 0;
    for (let i = 0; i < s.length; i += 1) {
        console.log(`${s[i]}===${p[regIndex]}?`)
        if (p[regIndex] === '*') {
            if (s[i] === (p[regIndex - 1] || '.')) {
                return false;
            }
        } else {
            if (s[i] !== (p[regIndex] || '.')) {
                return false;
            }
            regIndex += 1;
        }
    }
    return true;
}

function main10() {
    const s = 'aa';
    const p = 'a*';
    console.log(isMatch(s, p));
}
main10();