function intToRoman(num: number): string {
    let romanNum = '';
    for (let i = num.toString().length - 1; i >= 0; i -= 1) {
        const currentNum = Math.floor(num / 10 ** i);
        num -= currentNum * 10 ** i;
        console.log(`currentNum: ${currentNum}`);
        romanNum += currentNum.toString();
    }
    return romanNum;
}

function main12() {
    const num = 394;
    intToRoman(num);
}
main12();
