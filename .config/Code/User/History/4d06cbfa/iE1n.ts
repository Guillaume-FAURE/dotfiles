function threeSum(array: number[]): number[][] {
    const res: number[][] = [];
    const orderedArray = array.sort((n1, n2) => n1 - n2);
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
