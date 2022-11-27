/* function checkAnagram(s1: string, s2: string): boolean {
    return true;
} */

type frequencyLetter = {
    letter: string;
    frequency: number;
};

export default function hashTable(s: string) {
    const table: Array<frequencyLetter> = [];
    const letters = s.split('');
    for (let i = 0; i < letters.length; i += 1) {
        const index: number = table?.findIndex((l) => l.letter === letters[i]);
        console.log(table);
        console.log(`index: ${index}`);
        if (index === -1) {
            table.push({ letter: letters[i], frequency: 1 });
        } else {
            table[index].frequency += 1;
        }
    }
    console.log(table);
}

hashTable('Guillaume');
