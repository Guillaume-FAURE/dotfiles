function intToRoman(num: number): string {
    let romanNum = ''
    for (let i = num.toString.length; i >= 0; i += 1){
        const currentNum = Math.floor(num / 10 ** i);
    }
}

function main12() {
    const num = 394;
    intToRoman(num);
}
main12();