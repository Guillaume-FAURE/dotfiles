function threeSum(array: number[]): number[][] {
    const res: number[][] = [];
    const orderedArray = array.sort((n1, n2) => n1 - n2);
    console.log(orderedArray);
    const arrayLength = array.length;
    for (let i = 0; i < arrayLength; i += 1) {
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
                let include = false;
                for (let l = 0; l < res.length; l += 1) {
                    if (JSON.stringify(res[l]) === JSON.stringify([a, b, c])) {
                        include = true;
                    }
                }
                if (!include) {
                    res.push([a, b, c]);
                }
                while (orderedArray[j] === b) {
                    j += 1;
                }
            }
        }
    }
    return res;
}

function main1() {
    const array = [
        9, -9, 4, 12, 12, 0, -14, -7, 10, -1, 11, -10, -3, 2, -9, 0, 8, -9, -5, -1, 10, 5, 13, -5, -9, -12, 9, -3, 10,
        10, -10, 4, 8, 1, -7, -2, -14, -6, 6, 11, 8, -6, 9, 13, 11, 7, -10, -4, 14, 0, 3, 1, -10, -7, 3, -12, -3, -11,
        0, -8, -15, 5, 3, 8, 13, 11, 13, -15, -9, 4, 3, 6, 5, -11, -4, -6, 4, 1, 5, -5, -13, -7, 11, -8, 2, -1, -12, 14,
        3, 3, 13, -5, -14, -7, 11, 14, -11, 9, 6, -13, -9, -13, 1, 11, -9, 12, -10, 2, -1, 3, 12, -7, 3, 0, 0, 12, 6, 3,
        3, -13, 14, 1, -3,
    ];
    console.log(threeSum(array));
}
main1();
