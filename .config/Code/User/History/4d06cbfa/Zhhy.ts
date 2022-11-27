function threeSum(array: number[]): number[][] {
    const res: number[][] = [];
    const orderedArray = array.sort((n1, n2) => n1 - n2);
    const arrayLength = array.length;
    for (let i = 0; i < arrayLength - 2; i += 1) {
        const a = orderedArray[i];
        let j = i + 1;
        let k = arrayLength - 1;
        while (j < k) {
            const b = orderedArray[j]
            const c = orderedArray[k]
            const sum = a + b + c;
            if (sum > 0) {
                
            }
        }
    }
    return res;
}

function main1() {
    const array = [-1, 0, 1, 2, -1, -4];
    console.log(threeSum(array));
}
main1();
