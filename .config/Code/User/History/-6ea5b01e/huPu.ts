function longestPalindrome(s: string): string {
    const stringLength = s.length;
    const arrayString = s.split('');
    for (let i = 0; i < stringLength; i += 1) {
        for (let j = 0; j < i + 1; j += 1) {
            const currentArrayString = arrayString.slice();
            console.log(`i: ${i}, j: ${j}`);
            const portion = currentArrayString.splice(j, stringLength - i);
            console.log(`portion: ${portion}`);
            if (isPalindrome(portion)) {
                return arrayToString(portion);
            }
        }
    }
    return 'ERROR';
}

function isPalindrome(s: Array<string>): boolean {
    const stringLength = s.length;
    let i = 0;
    while (i < stringLength / 2) {
        if (s[i] !== s[stringLength - 1 - i]) {
            return false;
        }
        i += 1;
    }
    return true;
}

function arrayToString(s: Array<string>): string {
    let string: string = '';
    for (let i = 0; i < s.length; i += 1) {
        string += s[i];
    }
    return string;
}

function main5() {
    const s = 'rgczcpratwyqxaszbuwwcadruayhasynuxnakpmsyhxzlnxmdtsqqlmwnbxvmgvllafrpmlfuqpbhjddmhmbcgmlyeypkfpreddyencsdmgxysctpubvgeedhurvizgqxclhpfrvxggrowaynrtuwvvvwnqlowdihtrdzjffrgoeqivnprdnpvfjuhycpfydjcpfcnkpyujljiesmuxhtizzvwhvpqylvcirwqsmpptyhcqybstsfgjadicwzycswwmpluvzqdvnhkcofptqrzgjqtbvbdxylrylinspncrkxclykccbwridpqckstxdjawvziucrswpsfmisqiozworibeycuarcidbljslwbalcemgymnsxfziattdylrulwrybzztoxhevsdnvvljfzzrgcmagshucoalfiuapgzpqgjjgqsmcvtdsvehewrvtkeqwgmatqdpwlayjcxcavjmgpdyklrjcqvxjqbjucfubgmgpkfdxznkhcejscymuildfnuxwmuklntnyycdcscioimenaeohgpbcpogyifcsatfxeslstkjclauqmywacizyapxlgtcchlxkvygzeucwalhvhbwkvbceqajstxzzppcxoanhyfkgwaelsfdeeviqogjpresnoacegfeejyychabkhszcokdxpaqrprwfdahjqkfptwpeykgumyemgkccynxuvbdpjlrbgqtcqulxodurugofuwzudnhgxdrbbxtrvdnlodyhsifvyspejenpdckevzqrexplpcqtwtxlimfrsjumiygqeemhihcxyngsemcolrnlyhqlbqbcestadoxtrdvcgucntjnfavylip';
    console.log(`Longest palindrome : ${longestPalindrome(s)}`);
}
main5();
