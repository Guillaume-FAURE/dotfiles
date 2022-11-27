/* function checkAnagram(s1: string, s2: string): boolean {
    return true;
} */

type frequencyLetter = {
    letter: string;
    frequency: number;
};

export default function hashTable(s: string) {
    let table: Array<frequencyLetter>;
    const letters = s.split('');
    for (let i = 0; i < letters.length; i += 1) {
        if (table.filter((l) => l.letter !== letters[i]).length > 0) {
            table.push({letter: letters[i], number: 1})
        }
    }
    console.log(table);
}

hashTable('Guillaume');
