type ListNode = {
    val: number;
    next: ListNode | null;
};

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let res: ListNode;
    let l1Head: ListNode | null = l1;
    let l2Head: ListNode | null = l2;
    let carry: number = 0;

    while (l1Head || l2Head || carry) {
        let x: number = l1Head?.val ?? 0;
        let y: number = l2Head?.val ?? 0;
        let sum = x + y + carry;

        carry = Math.floor(sum / 10);
        res.val = 
    }
}
