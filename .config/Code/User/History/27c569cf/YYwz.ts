function lengthOfLongestSubstring(s: string): number {
    const letters = s.split('');
    let maxLettersUsed: Array<string> = [];
    let currentLettersUsed: Array<string> = [];
    for (let i = 0; i < letters.length; i += 1) {
        if (currentLettersUsed.includes(letters[i])) {
            if (currentLettersUsed.length > maxLettersUsed.length) {
                maxLettersUsed = currentLettersUsed;
            }
            currentLettersUsed = [letters[i]];
        } else {
            currentLettersUsed.push(letters[i]);
        }
    }
    console.log(`${maxLettersUsed} with length of ${maxLettersUsed.length}`);
    return maxLettersUsed.length;
}

const string = ' ';
lengthOfLongestSubstring(string);
