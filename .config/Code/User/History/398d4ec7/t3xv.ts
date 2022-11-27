function checkAnagram(s1: string, s2: string): boolean {
    let res: boolean = false
    const h1 = hashTable(s1)
    const h2 = hashTable(s2)
    if (h1.length !== h2.length) {
        return res
    }
    else {
        for (let i = 0; i < h1.length; i += 1){
            
        }
    }
}

type frequencyLetter = {
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
    console.log(table);
    return table;
}

hashTable('Guillaume');
