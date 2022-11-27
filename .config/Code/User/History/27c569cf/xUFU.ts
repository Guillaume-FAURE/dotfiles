function lengthOfLongestSubstring(s: string): number {
    const letters = s.split('');
    let maxLettersUsed: Array<string> = [];
    const currentLettersUsed: Array<string> = [];
    for (let i = 0; i < letters.length; i += 1) {
        console.log(`currentLetter: ${letters[i]}`);
        const id = currentLettersUsed.findIndex((element) => element === letters[i]);
        if (id !== -1) {
            if (currentLettersUsed.length > maxLettersUsed.length) {
                maxLettersUsed = currentLettersUsed.slice();
                console.log(`${maxLettersUsed} with length of ${maxLettersUsed.length}`);
            }
            console.log(`id: ${id} currentList: ${currentLettersUsed}`);
            currentLettersUsed.splice(0, id + 1);
            currentLettersUsed.push(letters[i]);
            console.log(currentLettersUsed);
        } else {
            currentLettersUsed.push(letters[i]);
            console.log(currentLettersUsed);
        }
    }
    if (currentLettersUsed.length > maxLettersUsed.length) {
        maxLettersUsed = currentLettersUsed;
        console.log(`${maxLettersUsed} with length of ${maxLettersUsed.length}`);
    }
    console.log(`${maxLettersUsed} with length of ${maxLettersUsed.length}`);
    return maxLettersUsed.length;
}

const string = 'dflkasnfvaklasdfnlsdkdnv';
lengthOfLongestSubstring(string);
