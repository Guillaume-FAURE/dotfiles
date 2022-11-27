function longestPalindrome(s: string): string {
    const stringLength = s.length;
    const arrayString = s.split('');
    const currentString: Array<string> = [];
    const maxPalindrome: Array<string> = [];
    for (let i = 0; i < stringLength; i += 1) {
        if (currentString.length < Math.floor(stringLength - i / 2)) {
            currentString.push(arrayString[i]);
        }
    }
}
