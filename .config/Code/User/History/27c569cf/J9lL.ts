function lengthOfLongestSubstring(s: string): number {
    const letters = s.split('');
    let maxLettersUsed: Array<string> = [];
    let currentLettersUsed: Array<string> = [];
    const lettersLength = letters.length;
    for (let i = 0; i < lettersLength; i += 1) {
        const id = currentLettersUsed.findIndex((element) => element === letters[i]);
        if (id !== -1) {
            if (currentLettersUsed.length > maxLettersUsed.length) {
                maxLettersUsed = currentLettersUsed;
            }
            i -= currentLettersUsed.length - id - 1;
            currentLettersUsed = [letters[i]];
        } else {
            currentLettersUsed.push(letters[i]);
        }
    }
    if (currentLettersUsed.length > maxLettersUsed.length) {
        maxLettersUsed = currentLettersUsed;
    }
    console.log(`${maxLettersUsed} with length of ${maxLettersUsed.length}`);
    return maxLettersUsed.length;
}

const string = 'dflkasnfvaklasdfnlsdkdnv';
lengthOfLongestSubstring(string);