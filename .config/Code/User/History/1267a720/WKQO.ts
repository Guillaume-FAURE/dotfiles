function convert(s: string, numRows: number): string {
    let arrayString: Array<string> = [];
    const stringLength = s.length;
    let line: number = 0;
    let down: boolean = true;
    for (let i = 0; i < stringLength; i += 1){
        arrayString[line] += s[i];
        if (down && line !== numRows - 1) {
            line += 1;
        }
        else {
            line -= 1;
        }
    }
}

function main6() {
    const s: string = 'PAYPALISHIRING';
    const numRows: number = 4;
    convert(s, numRows);
}
main6();
