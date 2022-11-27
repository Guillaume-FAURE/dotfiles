function addTwoNumbers(l1: ListNode | null, l2: ListNode | null) {
    let sumL1 = 0;
    for (let i = l1.length - 1; i >= 0; i += 1) {
        sumL1 += l1[i] * 10 ** i;
    }
    let sumL2 = 0;
    for (let i = l1.length - 1; i >= 0; i += 1) {
        sumL2 += l2[i] * 10 ** i;
    }
}
