function threeSum(array: number[]): number[][] {
    const res: number[][] = [];
    array.sort((n1, n2) => n1 - n2);
    const arrayLength = array.length;
    for (let i = 0; i < arrayLength - 2; i += 1) {
        while (array[i] === array[i - 1]) {
            i += 1;
        }
        const a = array[i];
        let j = i + 1;
        let k = arrayLength - 1;
        while (j < k) {
            const b = array[j];
            const c = array[k];
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
                while (array[j] === b) {
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
