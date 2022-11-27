function threeSum(array: number[]): number[][] {
    const res: number[][] = [];
    const arrayLength = array.length;
    for (let i = 0; i < arrayLength; i += 1) {
        const a = array[i];
        for (let j = i + 1; j < arrayLength; j += 1) {
            const b = array[j];
            for (let k = j + 1; k < arrayLength; k += 1) {
                const c = array[k];
                if (a + b + c === 0) {
                    const subArray: number[] = [a, b, c].sort((n1, n2) => n1 - n2);
                    let include = false;
                    for (let l = 0; l < res.length; l += 1) {
                        if (JSON.stringify(res[l]) === JSON.stringify(subArray)) {
                            include = true;
                        }
                    }
                    if (!include) {
                        res.push(subArray);
                    }
                }
            }
        }
    }
    return res;
}

function main1() {
    const array = [
        7, 5, -8, -6, -13, 7, 10, 1, 1, -4, -14, 0, -1, -10, 1, -13, -4, 6, -11, 8, -6, 0, 0, -5, 0, 11, -9, 8, 2, -6,
        4, -14, 6, 4, -5, 0, -12, 12, -13, 5, -6, 10, -10, 0, 7, -2, -5, -12, 12, -9, 12, -9, 6, -11, 1, 14, 8, -1, 7,
        -13, 8, -11, -11, 0, 0, -1, -15, 3, -11, 9, -7, -10, 4, -2, 5, -4, 12, 7, -8, 9, 14, -11, 7, 5, -15, -15, -4, 0,
        0, -11, 3, -15, -15, 7, 0, 0, 13, -7, -12, 9, 9, -3, 14, -1, 2, 5, 2, -9, -3, 1, 7, -12, -3, -1, 1, -2, 0, 12,
        5, 7, 8, -7, 7, 8, 7, -15,
    ];
    console.log(threeSum(array));
}
main1();
