function isPalindrome(x: number): boolean {
    const numString = x.toString().split('');
    const numStringLength = numString.length;
    for (let i = 0; i < Math.floor(numStringLength / 2); i += 1) {
        if (numString[i] !== numString[numStringLength - 1 - i]) {
            return false;
        }
    }
    return true;
}

function main9() {
    const x = 121;
    console.log(isPalindrome(x));
}
main9();
