function reverse(x: number): number {
    const numbers = x.toString().split('');
    let res: number = 0;
    const numbersLength = numbers.length;
    let minus = false;
    for (let i = numbersLength - 1; i >= 0; i -= 1) {
        res += Number(numbers[i]) * 10 ** i;
    }
    return res;
}

function main7() {
    const x = 123;
    console.log(reverse(x));
}
main7();
