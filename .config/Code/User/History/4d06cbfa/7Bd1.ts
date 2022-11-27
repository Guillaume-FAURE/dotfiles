function threeSum(array: number[]): number[][] {
    const res: number[][] = [];
    const orderedArray = array.sort((n1, n2) => n1 - n2);
    const arrayLength = array.length;
    for (let i = 0; i < arrayLength - 2; i += 1) {
        const a = orderedArray[i];
        while()
    }
    return res;
}

function main1() {
    const array = [-1, 0, 1, 2, -1, -4];
    console.log(threeSum(array));
}
main1();
