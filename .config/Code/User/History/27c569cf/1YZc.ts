function lengthOfLongestSubstring(s: string): number {
    const letters = s.split('');
    const maxLettersUsed: Array<string> = [];
    const currentLettersUsed: Array<string> = [];
    for (let i = 0; i < letters.length; i += 1) {
        if (currentLettersUsed.includes(letters[i])) {
            
        }
        currentLettersUsed.push(letters[i]);
    }
    console.log(`${maxLettersUsed} with length of ${maxLettersUsed.length}`);
    return maxLettersUsed.length;
}

const string = 'asfkhnsalsk';
lengthOfLongestSubstring(string);
