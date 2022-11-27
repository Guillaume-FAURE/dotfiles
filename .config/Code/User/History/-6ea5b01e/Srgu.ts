function longestPalindrome(s: string): string {
    const stringLength = s.length;
    const arrayString = s.split('');
    for (let i = 0; i < stringLength; i += 1) {
        const portion = arrayString.splice(0, stringLength - i);
        console.log(portion);
        for (let j = 1; j <= i + 1; j += 1) {
            if (isPalindrome(portion)) {
                return arrayToString(portion);
            }
            portion.splice(0, 1);
            portion.push(arrayString[portion.length + j]);
        }
    }
    return 'ERROR';
}



function main5() {
    const s = 'rgczcpratwyqxaszbuwwcadruayhasynuxnakpmsyhxzlnxmdtsqqlmwnbxvmgvllafrpmlfuqpbhjddmhmbcgmlyeypkfpreddyencsdmgxysctpubvgeedhurvizgqxclhpfrvxggrowaynrtuwvvvwnqlowdihtrdzjffrgoeqivnprdnpvfjuhycpfydjcpfcnkpyujljiesmuxhtizzvwhvpqylvcirwqsmpptyhcqybstsfgjadicwzycswwmpluvzqdvnhkcofptqrzgjqtbvbdxylrylinspncrkxclykccbwridpqckstxdjawvziucrswpsfmisqiozworibeycuarcidbljslwbalcemgymnsxfziattdylrulwrybzztoxhevsdnvvljfzzrgcmagshucoalfiuapgzpqgjjgqsmcvtdsvehewrvtkeqwgmatqdpwlayjcxcavjmgpdyklrjcqvxjqbjucfubgmgpkfdxznkhcejscymuildfnuxwmuklntnyycdcscioimenaeohgpbcpogyifcsatfxeslstkjclauqmywacizyapxlgtcchlxkvygzeucwalhvhbwkvbceqajstxzzppcxoanhyfkgwaelsfdeeviqogjpresnoacegfeejyychabkhszcokdxpaqrprwfdahjqkfptwpeykgumyemgkccynxuvbdpjlrbgqtcqulxodurugofuwzudnhgxdrbbxtrvdnlodyhsifvyspejenpdckevzqrexplpcqtwtxlimfrsjumiygqeemhihcxyngsemcolrnlyhqlbqbcestadoxtrdvcgucntjnfavylip';
    const s2 = 'a';
    console.log(`Longest palindrome : ${longestPalindrome(s)}`);
    console.log(`Longest palindrome : ${longestPalindrome(s2)}`);
}
main5();
