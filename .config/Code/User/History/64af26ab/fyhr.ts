function twoSum(nums: number[], target: number): number[] {
    const arrayLength = nums.length;
    for (let i = 0; i < arrayLength - 1; i += 1) {
        const a: number = nums[i];
        for (let j = i + 1; j < arrayLength; j += 1) {
            const b: number = nums[j];
            if (a + b === target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}

function main15() {
    const array = [2, 4, 6, 7];
    const target = 2;
    console.log(twoSum(array, target));
}
main15();
