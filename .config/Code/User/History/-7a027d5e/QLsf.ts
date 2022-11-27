function addTwoNumbers(l1: Array<number> | null, l2: Array<number> | null) {
    let sumL1 = 0;
    for (let i = l1.length - 1; i >= 0; i -= 1) {
        sumL1 += l1[i] * 10 ** i;
    }
    let sumL2 = 0;
    for (let i = l2.length - 1; i >= 0; i -= 1) {
        sumL2 += l2[i] * 10 ** i;
    }
    const sum = sumL1 + sumL2;
    const digits = sum.toString().split('').reverse().map(Number);
    return digits;
}

function main2bis() {
    const array1 = [4, 5, 5];
    const array2 = [4, 5, 2, 5, 2];
    addTwoNumbers(array1, array2);
}
main2bis();
