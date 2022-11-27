function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const sumArray = nums1.concat(nums2).sort((n1, n2) => n1 - n2);
    if (sumArray.length % 2 === 0) {
        const id1 = Math.floor(sumArray.length / 2);
        const id2 = Math.ceil(sumArray.length / 2);
        console.log(`${id1} : ${id2}`);
        return (sumArray[id1] + sumArray[id2]) / 2;
    }
    return sumArray[(sumArray.length - 1) / 2];
}

function main4() {
    const array1 = [1, 2];
    const array2 = [3, 4];
    console.log(findMedianSortedArrays(array1, array2));
}
main4();
