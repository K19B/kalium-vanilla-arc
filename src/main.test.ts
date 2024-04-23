import * as main from './main';

test('Check Arcaea single PTT calc', () => {
    expect(main.arcRtnCalc(0,0)).toBe(0);
    expect(main.arcRtnCalc(12,1)).toBe(14);
    expect(main.arcRtnCalc(32,0)).toBe(0.33333333333333215);
    expect(main.arcRtnCalc(12,9989)).toBe(13.945);
    expect(main.arcRtnCalc(12,9890721)).toBe(13.453605);
    expect(main.arcRtnCalc(12,98907210)).toBe(14);
})
