type ListNode = {
    val: number;
    next: ListNode | null;
};

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let res: ListNode;
    const l1Head: ListNode | null = l1;
    const l2Head: ListNode | null = l2;
    let carry: number = 0;

    while (l1Head || l2Head || carry) {
        const x: number = l1Head?.val ?? 0;
        const y: number = l2Head?.val ?? 0;
        const sum = x + y + carry;

        carry = Math.floor(sum / 10);
        res.val = sum % 10;
        res.next = 
    }
    return res;
}
