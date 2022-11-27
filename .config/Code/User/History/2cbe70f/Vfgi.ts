class ListNode {
    val: number;

    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoListNodes(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const res = new ListNode();
    let l1Head: ListNode | null = l1;
    let l2Head: ListNode | null = l2;
    let resHead: ListNode | null = res;
    let carry: number = 0;

    while (l1Head || l2Head || carry !== 0) {
        const x: number = l1Head?.val ?? 0;
        const y: number = l2Head?.val ?? 0;
        const sum = x + y + carry;

        carry = Math.floor(sum / 10);
        resHead.next = new ListNode(sum % 10);

        l1Head = l1Head?.next!;
        l2Head = l2Head?.next!;
        resHead = resHead.next!;
    }
    return res.next;
}

function main2() {
    const l1 = new ListNode();
    const l2 = new ListNode();
    addTwoListNodes(l1, l2);
}
main2();
