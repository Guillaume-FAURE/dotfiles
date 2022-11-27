function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length - 1; i += 1) {
        const a: number = nums[i];
        if (Math.abs(a) <= Math.abs(target)) {
            for (let j = i + 1; j < nums.length; j += 1) {
                const b: number = nums[j];
                if (a + b === target) {
                    return [i, j];
                }
            }
        }
    }
    return [-1, -1];
}

const array = [2, 4, 6, 7];
const target = 2;
console.log(twoSum(array, target));
