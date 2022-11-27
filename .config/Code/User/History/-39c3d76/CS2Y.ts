function maxArea(height: number[]): number {
    let maxVolume: number = 0;
    for (let i = 0; i < height.length - 1; i += 1) {
        for (let j = i; j < height.length; j += 1) {
            const volume: number = (j - i) * Math.min(height[i], height[j]);
            if (volume > maxVolume) {
                maxVolume = volume;
            }
        }
    }
    return maxVolume;
}

function main11() {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    console.log(maxArea(height));
}
main11();
