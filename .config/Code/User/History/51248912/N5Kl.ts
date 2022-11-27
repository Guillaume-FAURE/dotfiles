function isMatchbis(s: string, p: string): boolean {
    if (s.match(RegExp(p))) {
        return s.match(RegExp(p))[0] === s;
    }
    return false;
}
function main10bis() {
    const s = 'aa';
    const p = 'a*';
    console.log(isMatchbis(s, p));
}
main10bis();
