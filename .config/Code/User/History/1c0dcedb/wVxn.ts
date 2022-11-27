function longestPalindromeBis(s: string): string {
    if (s === null || s.length < 2) return s;

    let start: number = 0;
    let end: number = 0;
    const sLength = s.length;
    for (let i = 0; i < sLength; i += 1) {
        const oddRange: number = getPalindromeRange(s, i, i);
        const evenRange: number = getPalindromeRange(s, i, i + 1);
        const currentRange: number = Math.max(oddRange, evenRange);
        if (currentRange > end - start) {
            start = i - Math.ceil(currentRange / 2) + 1;
            end = i + Math.floor(currentRange / 2) + 1;
        }
    }
    return s.substring(start, end);
}

function getPalindromeRange(str: string, left: number, right: number): number {
    while (left >= 0 && right < str.length) {
        if (str[left] !== str[right]) break;
        left -= 1;
        right += 1;
    }
    const palindromeRange: number = right - left - 1;
    return palindromeRange;
}

function main5() {
    const s =
        'rgczcpratwyqxaszbuwwcadruayhasynuxnakpmsyhxzlnxmdtsqqlmwnbxvmgvllafrpmlfuqpbhjddmhmbcgmlyeypkfpreddyencsdmgxysctpubvgeedhurvizgqxclhpfrvxggrowaynrtuwvvvwnqlowdihtrdzjffrgoeqivnprdnpvfjuhycpfydjcpfcnkpyujljiesmuxhtizzvwhvpqylvcirwqsmpptyhcqybstsfgjadicwzycswwmpluvzqdvnhkcofptqrzgjqtbvbdxylrylinspncrkxclykccbwridpqckstxdjawvziucrswpsfmisqiozworibeycuarcidbljslwbalcemgymnsxfziattdylrulwrybzztoxhevsdnvvljfzzrgcmagshucoalfiuapgzpqgjjgqsmcvtdsvehewrvtkeqwgmatqdpwlayjcxcavjmgpdyklrjcqvxjqbjucfubgmgpkfdxznkhcejscymuildfnuxwmuklntnyycdcscioimenaeohgpbcpogyifcsatfxeslstkjclauqmywacizyapxlgtcchlxkvygzeucwalhvhbwkvbceqajstxzzppcxoanhyfkgwaelsfdeeviqogjpresnoacegfeejyychabkhszcokdxpaqrprwfdahjqkfptwpeykgumyemgkccynxuvbdpjlrbgqtcqulxodurugofuwzudnhgxdrbbxtrvdnlodyhsifvyspejenpdckevzqrexplpcqtwtxlimfrsjumiygqeemhihcxyngsemcolrnlyhqlbqbcestadoxtrdvcgucntjnfavylip';
    console.log(longestPalindromeBis(s));
}
main5();
