function reverse(x: number): number {
    const numbers = x.toString().split('');
    let res: number=0;
    for (let i = 0; i < numbers.length; i += 1){
        res += Number(numbers[i]) ** (number.length - i);
    }
}

function main7() {
    const x = 123;
    console.log(reverse(x));
}
main7();
