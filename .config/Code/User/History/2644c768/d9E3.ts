function myAtoi(s: string): number {
    const parsedInt = Number.parseInt(s, 10);
    console.log(parsedInt)
    if (Number.isNaN(parsedInt)) return 0;

    const minRange = Math.pow(-2, 31);
    if (parsedInt < minRange) return minRange;

    const maxRange = Math.pow(2, 31) - 1;
    if (parsedInt > maxRange) return maxRange;

    return parsedInt;
}

function main8() {
    const s = '   fsdfds';
    console.log(myAtoi(s));
}
main8();
