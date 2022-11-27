function reverse(x: number): number {
    const numbers = x.toString().split('');
    let res: number = 0;
    let minus: number = 1;
    if (numbers[0] === '-') {
        numbers.splice(0, 1);
        minus = -1;
    }
    for (let i = numbers.length - 1; i >= 0; i -= 1) {
        res += Number(numbers[i]) * 10 ** i;
    }
    if (res <= 2 ** 31) {
        return minus * res;
    }
    return 0;
}

function main7() {
    const x = 1563847412;

    console.log(reverse(x));
}
main7();
