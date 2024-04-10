export function arcRtnCalc(lvl: number, score: number) {
    let strScore = Math.floor(score).toString();
    if (strScore.startsWith('1') || strScore.length > 8) {
        return lvl + 2;
    } else if (strScore.length < 7) {
        strScore = strScore + '0'.repeat(7 - strScore.length);
    }
    let intScore = parseInt(strScore);
    if (intScore > 9800000) {
        return lvl + 1 + (intScore - 9800000) / 200000;
    } else {
        let rawRtn = lvl + (intScore - 9500000) / 300000
        if (rawRtn > 0) {
            return rawRtn;
        } else {
            return 0;
        }
    }
}
