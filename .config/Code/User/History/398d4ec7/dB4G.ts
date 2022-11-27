ype frequencyLetter = {
    letter: string;
    frequency: number;
};

export default function hashTable(s: string) {
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

console.log(checkAnagram('kayak', 'aaykk'));
