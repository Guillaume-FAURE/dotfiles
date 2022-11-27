function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const sumArray = nums1.concat(nums2).sort((n1, n2) => n1 - n2);
    const {length} = sumArray;
    if (length % 2 === 0) {
        const id1 = length / 2;
        const id2 = length / 2 - 1;
        return (sumArray[id1] + sumArray[id2]) / 2;
    }
    return sumArray[(length - 1) / 2];
}

function main4() {
    const array1 = [1, 2];
    const array2 = [3, 4];
    console.log(findMedianSortedArrays(array1, array2));
}
main4();
