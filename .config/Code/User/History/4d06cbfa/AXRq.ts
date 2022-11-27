function threeSum(array: number[]): number[][] {
    const res: number[][] = [];
    const orderedArray = array.sort((n1, n2) => n1 - n2);
    const arrayLength = array.length;
    for (let i = 0; i < arrayLength; i += 1) {
        const a = orderedArray[i];
        for (let j = i + 1; j < arrayLength; j += 1) {
            const b = orderedArray[j];
            for (let k = j + 1; k < arrayLength; k += 1) {
                const c = orderedArray[k];
                if (a + b + c === 0) {
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
    }
    return res;
}

function main1() {
    const array = [-1,0,1,2,-1,-4]
    console.log(threeSum(array));
}
main1();
