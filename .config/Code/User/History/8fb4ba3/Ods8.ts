function reverse(x: number): number {
    const numbers = x.toString().split('');
    let res: number = 0;
    const numbersLength = numbers.length;
    let minus: number = 1;
    if (numbers[0] === '-') {
        numbers.splice(0, 1);
        minus = -1;
    }
    console.log(numbers);
    for (let i = numbersLength - 1; i >= 0; i -= 1) {
        res += Number(numbers[i]) * 10 ** i;
    }
    return minus * res;
}

function main7() {
    const x = -123;
    console.log(reverse(x));
}
main7();
