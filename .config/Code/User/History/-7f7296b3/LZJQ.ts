function longestPalindrome(s: string): string {
    const stringLength = s.length;
    const arrayString = s.split('');
    let currentString: Array<string> = [];
    let maxPalindrome: Array<string> = [];
    for (let i = 0; i < stringLength; i += 1) {
        currentString = [];
        for (let j = i; j < stringLength; j += 1) {
            console.log(currentString);
            if (currentString.length < Math.floor(stringLength - j)) {
                currentString.push(arrayString[j]);
                if (isPalindrome(currentString) && currentString.length > maxPalindrome.length) {
                    maxPalindrome = currentString.slice();
                }
            }
        }
    }
    return arrayToString(maxPalindrome);
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

function arrayToString(s: Array<string>): string {
    let string: string = '';
    for (let i = 0; i < s.length; i += 1) {
        string += s[i];
    }
    return string;
}

function main5() {
    const s = 'fdsbabad';
    console.log(longestPalindrome(s));
}
main5();
