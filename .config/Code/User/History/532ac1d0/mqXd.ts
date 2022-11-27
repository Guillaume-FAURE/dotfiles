function isMatch(s: string, p: string): boolean {
    let regIndex = 0;
    for (let i = 0; i < s.length; i += 1) {
        console.log(`${s[i]}===${p[regIndex]}?`);
        console.log(`i:${i}, regIndex:${regIndex}`);
        if (p[regIndex] === '*') {
            if (s[i] !== p[regIndex - 1] && p[regIndex - 1] !== '.') {
                regIndex += 1;
                i -= 1;
            }
        } else {
            if (s[i] !== p[regIndex] && p[regIndex] !== '.') {
                if (p[regIndex + 1] === '*') {
                    regIndex += 1;
                    i -= 1;
                } else {
                    return false;
                }
            }
            regIndex += 1;
        }
    }
    console.log(`regIndex:${regIndex}, p.length: ${p.length}`);
    if (regIndex < p.length && p[p.length - 1] !== '*') {
        console.log('Remaining letter');
        return false;
    }
    return true;
}

function main10() {
    const s = 'aaa';
    const p = 'aaaa';
    console.log(isMatch(s, p));
}
main10();
