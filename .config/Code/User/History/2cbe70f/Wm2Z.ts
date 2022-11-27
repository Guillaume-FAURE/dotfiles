class ListNode {
    val: number;

    next: ListNode | null;
};

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let res: ListNode;
    let l1Head: ListNode | null = l1;
    let l2Head: ListNode | null = l2;
    let resHead: ListNode | null = res;
    let carry: number = 0;

    while (l1Head || l2Head || carry) {
        const x: number = l1Head?.val ?? 0;
        const y: number = l2Head?.val ?? 0;
        const sum = x + y + carry;

        carry = Math.floor(sum / 10);
        resHead.val = sum % 10;
        resHead.next = new ListNode();

        l1Head = l1Head?.next;
        l2Head = l2Head?.next;
        resHead = resHead.next;
    }
    return res;
}
