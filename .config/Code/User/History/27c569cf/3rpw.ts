function lengthOfLongestSubstring(s: string): number {
    const letters = s.split('');
    let maxLettersUsed: Array<string> = [];
    const currentLettersUsed: Array<string> = [];
    for (let i = 0; i < letters.length; i += 1) {
        const id = currentLettersUsed.findIndex((element) => element === letters[i]);
        if (id !== -1) {
            if (currentLettersUsed.length > maxLettersUsed.length) {
                maxLettersUsed = currentLettersUsed.slice();
            }
            currentLettersUsed.splice(0, id + 1);
            currentLettersUsed.push(letters[i]);
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

function main3() {
    const string = 'dflkasnfvaklasdfnlsdkdnv';
    lengthOfLongestSubstring(string);
}
main3();
