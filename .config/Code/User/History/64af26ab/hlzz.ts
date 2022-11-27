function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length - 1; i += 1) {
        const a: number = nums[i];
        if (a <= target) {
            for (let j = i + 1; j < nums.length; j += 1) {
                const b: number = nums[j];
                if (a + b === target) {
                    return [ a, b ];
                }
            }
        }
    }
}

const array = [2, 4, 6, 7];
const target = 8;
twoSum(array, target);