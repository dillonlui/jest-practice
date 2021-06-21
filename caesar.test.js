import caesar from "./caesar";

test("CAESAR CIPHER TEST 1", () => {
    expect(caesar("greetings good sir!", 0)).toBe("greetings good sir!");
});

test("CAESAR CIPHER TEST 2", () => {
    expect(caesar("what a wonderful day", 3)).toBe("zkdw d zrqghuixo gdb");
});

test("CAESAR CIPHER TEST 3", () => {
    expect(caesar("i really need to sleep early tonight!", 6)).toBe(
        "o xkgrre tkkj zu yrkkv kgxre zutomnz!"
    );
});

test("CAESAR CIPHER TEST 4", () => {
    expect(caesar("going to work", 11)).toBe("rztyr ez hzcv");
});

// test('simple shift', () => {
//     expect(caesar('abc', 3)).toBe('def')
// })

// test('wrap shift', () => {
//     expect(caesar('xyz', 3)).toBe('abc')
// })

// test('caps shift', () => {
//     expect(caesar('ABC', 3)).toBe('DEF')
// })

// test('caps wrap shift', () => {
//     expect(caesar('XYZ', 3)).toBe('ABC')
// })

// test('mix shift', () => {
//     expect(caesar('aBc', 3)).toBe('dEf')
// })

// test('punctuation', () => {
//     expect(caesar('!@#a', 3)).toBe('!@#d')
// })