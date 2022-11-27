function reverse(x: number): number {
    const numbers = x.toString().split('');
    let res: number = 0;
    const numbersLength = numbers.length;
    for (let i = 0; i < numbersLength; i += 1) {
        res += Number(numbers[i]) * 10 ** (numbersLength - i);
    }
    return res;
}

function main7() {
    const x = 123;
    console.log(reverse(x));
}
main7();
