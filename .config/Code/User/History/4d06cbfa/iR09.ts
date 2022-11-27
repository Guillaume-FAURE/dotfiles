function threeSum(array: number[]): number[][] {
    const res: number[][] = [];
    const orderedArray = array.sort((n1, n2) => n1 - n2);
    console.log(orderedArray);
    const arrayLength = array.length;
    for (let i = 0; i < arrayLength; i += 1) {
        while (orderedArray[i] === orderedArray[i - 1]) {
            i += 1;
        }
        const a = orderedArray[i];
        let j = i + 1;
        let k = arrayLength - 1;
        while (j < k) {
            const b = orderedArray[j];
            const c = orderedArray[k];
            const sum = a + b + c;
            if (sum > 0) {
                k -= 1;
            }
            if (sum < 0) {
                j += 1;
            }
            if (sum === 0) {
                res.push([a, b, c]);
                j += 1;
                while (orderedArray[j] === b) {
                    j += 1;
                }
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
