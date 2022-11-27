import { isPalindrome, arrayToString } from './5ter-longestPalindrom';

function longestPalindromeBis(s: string): string {
    const stringLength = s.length;
    const arrayString = s.split('');
    let currentString: Array<string> = [];
    let maxPalindrome: Array<string> = [];
    for (let i = 0; i < stringLength; i += 1) {
        currentString = [];
        for (let j = i; j < stringLength; j += 1) {
            if (currentString.length < stringLength) {
                currentString.push(arrayString[j]);
                if (isPalindrome(currentString) && currentString.length > maxPalindrome.length) {
                    maxPalindrome = currentString.slice();
                }
            }
        }
    }
    return arrayToString(maxPalindrome);
}

function main5bis() {
    const s =
        'rgczcpratwyqxaszbuwwcadruayhasynuxnakpmsyhxzlnxmdtsqqlmwnbxvmgvllafrpmlfuqpbhjddmhmbcgmlyeypkfpreddyencsdmgxysctpubvgeedhurvizgqxclhpfrvxggrowaynrtuwvvvwnqlowdihtrdzjffrgoeqivnprdnpvfjuhycpfydjcpfcnkpyujljiesmuxhtizzvwhvpqylvcirwqsmpptyhcqybstsfgjadicwzycswwmpluvzqdvnhkcofptqrzgjqtbvbdxylrylinspncrkxclykccbwridpqckstxdjawvziucrswpsfmisqiozworibeycuarcidbljslwbalcemgymnsxfziattdylrulwrybzztoxhevsdnvvljfzzrgcmagshucoalfiuapgzpqgjjgqsmcvtdsvehewrvtkeqwgmatqdpwlayjcxcavjmgpdyklrjcqvxjqbjucfubgmgpkfdxznkhcejscymuildfnuxwmuklntnyycdcscioimenaeohgpbcpogyifcsatfxeslstkjclauqmywacizyapxlgtcchlxkvygzeucwalhvhbwkvbceqajstxzzppcxoanhyfkgwaelsfdeeviqogjpresnoacegfeejyychabkhszcokdxpaqrprwfdahjqkfptwpeykgumyemgkccynxuvbdpjlrbgqtcqulxodurugofuwzudnhgxdrbbxtrvdnlodyhsifvyspejenpdckevzqrexplpcqtwtxlimfrsjumiygqeemhihcxyngsemcolrnlyhqlbqbcestadoxtrdvcgucntjnfavylip';
    console.log(longestPalindromeBis(s));
}
main5bis();
