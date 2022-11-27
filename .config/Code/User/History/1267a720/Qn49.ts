function convert(s: string, numRows: number): string {
    const arrayString: Array<string> = [''];
    let res: string = '';
    const stringLength = s.length;
    let line: number = 0;
    let down: boolean = true;
    for (let i = 0; i < stringLength; i += 1) {
        if (arrayString[line] === undefined) {
            arrayString[line] = s[i];
        } else {
            arrayString[line] += s[i];
        }
        if ((down && line !== numRows - 1) || line === 0) {
            line += 1;
            down = true;
        } else {
            line -= 1;
            down = false;
        }
    }
    const arrayStringLength = arrayString.length;
    for (let i = 0; i < arrayStringLength; i += 1) {
        res += arrayString[i];
    }
    return res;
}

function main6() {
    const s: string = 'PAYPALISHIRING';
    const numRows: number = 4;
    console.log(convert(s, numRows));
}
main6();
