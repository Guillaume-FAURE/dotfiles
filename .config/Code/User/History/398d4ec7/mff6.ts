type frequencyLetter = {
    letter: string;
    frequency: number;
};

function hashTable(s: string) {
    const table: Array<frequencyLetter> = [];
    const letters = s.split('');
    for (let i = 0; i < letters.length; i += 1) {
        const index: number = table?.findIndex((l) => l.letter === letters[i]);
        if (index === -1) {
            table.push({ letter: letters[i], frequency: 1 });
        } else {
            table[index].frequency += 1;
        }
    }
    return table;
}

function checkAnagram(s1: string, s2: string): boolean {
    const h1 = hashTable(s1);
    const h2 = hashTable(s2);
    if (h1.length !== h2.length) {
        return false;
    }
    for (let i = 0; i < h1.length; i += 1) {
        const index: number = h1.findIndex((l) => l.letter === h2[i].letter);
        if (index !== -1 && h1[index].frequency === h2[i].frequency) {
            /* empty */
        } else {
            return false;
        }
    }
    return true;
}

console.log(checkAnagram('kayak', 'aaykk'));
