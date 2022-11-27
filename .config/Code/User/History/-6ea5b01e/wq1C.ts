function longestPalindrome(s: string): string {
    const stringLength = s.length;
    const arrayString = s.split('');
    for (let i = 0; i < stringLength; i += 1) {
        const currentArrayString = arrayString.slice();
        const portion = currentArrayString.splice(0, stringLength - i);
        for (let j = 0; j < i + 1; j += 1) {
            console.log(portion);
            if (isPalindrome(portion)) {
                return arrayToString(portion);
            }
            portion.splice(0, 1);
            portion.push(currentArrayString[portion.length + j]);
        }
    }
    return 'ERROR';
}

export function isPalindrome(s: Array<string>): boolean {
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

export function arrayToString(s: Array<string>): string {
    let string: string = '';
    for (let i = 0; i < s.length; i += 1) {
        string += s[i];
    }
    return string;
}

function main5() {
    const s =
        'rgczcpratwyqxaszbuwwcadruayhasynuxnakpmsyhxzlnxmdtsqqlmwnbxvmgvllafrpmlfuqpbhjddmhmbcgmlyeypkfpreddyencsdmgxysctpubvgeedhurvizgqxclhpfrvxggrowaynrtuwvvvwnqlowdihtrdzjffrgoeqivnprdnpvfjuhycpfydjcpfcnkpyujljiesmuxhtizzvwhvpqylvcirwqsmpptyhcqybstsfgjadicwzycswwmpluvzqdvnhkcofptqrzgjqtbvbdxylrylinspncrkxclykccbwridpqckstxdjawvziucrswpsfmisqiozworibeycuarcidbljslwbalcemgymnsxfziattdylrulwrybzztoxhevsdnvvljfzzrgcmagshucoalfiuapgzpqgjjgqsmcvtdsvehewrvtkeqwgmatqdpwlayjcxcavjmgpdyklrjcqvxjqbjucfubgmgpkfdxznkhcejscymuildfnuxwmuklntnyycdcscioimenaeohgpbcpogyifcsatfxeslstkjclauqmywacizyapxlgtcchlxkvygzeucwalhvhbwkvbceqajstxzzppcxoanhyfkgwaelsfdeeviqogjpresnoacegfeejyychabkhszcokdxpaqrprwfdahjqkfptwpeykgumyemgkccynxuvbdpjlrbgqtcqulxodurugofuwzudnhgxdrbbxtrvdnlodyhsifvyspejenpdckevzqrexplpcqtwtxlimfrsjumiygqeemhihcxyngsemcolrnlyhqlbqbcestadoxtrdvcgucntjnfavylip';
    const s2 = 'cbbd';
    console.log(`Longest palindrome : ${longestPalindrome(s)}`);
    console.log(`Longest palindrome : ${longestPalindrome(s2)}`);
}
main5();
