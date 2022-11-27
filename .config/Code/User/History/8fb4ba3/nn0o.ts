function reverse(x: number): number {
    const numbers = x.toString().split('');
    let res: number = 0;
    const numbersLength = numbers.length;
    for (let i = numbersLength - 1; i >= 0; i -= 1) {
        res += Number(numbers[numbersLength]) * 10 ** numbersLength;
    }
    return res;
}

function main7() {
    const x = 123;
    console.log(reverse(x));
}
main7();
