function lengthOfLongestSubstring(s: string): number {
    const letters = s.split('');
    const lettersUsed: Array<string> = [];
    for (let i = 0; i < letters.length; i += 1) {
        if (lettersUsed.includes(letters[i])) {
            console.log(`${lettersUsed} with length of ${lettersUsed.length}`);
            return lettersUsed.length
        } else {
            lettersUsed.push(letters[i]);
        }
    }
    return lettersUsed.length;
}
