function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const sumArray = nums1.concat(nums2).sort((n1, n2) => n1 - n2);
    if (sumArray.length % 2 === 0) {
        const id1 = Math.floor(sumArray.length / 2);
        const id2 = Math.
    }
    return 0;
}

function main4() {
    const array1 = [1, 2, 5, 76, 24, 243, 5];
    const array2 = [3, 4, 62, 6, 3, 6];
    findMedianSortedArrays(array1, array2);
}
main4();
