function intToRoman(num: number): string {
    let romanNum = '';
    const romanPower = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    for (let i = num.toString().length - 1; i >= 0; i -= 1) {
        const currentNum = Math.floor(num / 10 ** i);
        num -= currentNum * 10 ** i;
        if (currentNum)
    }
    return romanNum;
}

function main12() {
    const num = 394;
    intToRoman(num);
}
main12();
