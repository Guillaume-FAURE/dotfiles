function longestPalindrome(s: string): string {
    const stringLength = s.length;
    const arrayString = s.split('');
    const currentString: Array<string> = [];
    let maxPalindrome: Array<string> = [];
    for (let i = 0; i < stringLength; i += 1) {
        if (currentString.length < Math.floor(stringLength - i / 2)) {
            currentString.push(arrayString[i]);
            if (isPalindrome(currentString) && currentString.length > maxPalindrome.length) {
                maxPalindrome = currentString.slice();
            }
        }
    }
    return s;
}

function isPalindrome(s: Array<string>): boolean {
    const stringLength = s.length;
    let i = 0;
    while (i < stringLength / 2) {
        if (s[i] !== s[stringLength - 1 - i]) {
            return false;
        }
        i += 1;
    }
    return true;
}

console.log(isPalindrome('jfls a slfj'.split('')));
