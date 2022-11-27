function intToRoman(num: number): string {
    let romanNum: string = '';
    const romanPower = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    for (let i = num.toString().length - 1; i >= 0; i -= 1) {
        const currentNum = Math.floor(num / 10 ** i);
        num -= currentNum * 10 ** i;
        if (currentNum <= 3) {
            for (let j = 1; j <= currentNum; j += 1) {
                romanNum += romanPower[i * 2];
            }
        } else if (currentNum === 4) {
            romanNum += romanPower[i * 2];
            romanNum += romanPower[i * 2 + 1];
        } else if (currentNum === 5) {
            romanNum += romanPower[i * 2 + 1];
        } else if (currentNum <= 8) {
            romanNum += romanPower[i * 2 + 1];
            for (let j = 1; j <= currentNum - 5; j += 1) {
                romanNum += romanPower[i * 2];
            }
        } else if (currentNum === 9) {
            romanNum += romanPower[i * 2];
            romanNum += romanPower[i * 2 + 2];
        }
    }
    return romanNum;
}

function main12() {
    const num = 589;
    console.log(intToRoman(num));
}
main12();
