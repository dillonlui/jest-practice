import calculator from "./calculator";

test('add', () => {
    expect(calculator.add(1, 2)).toBe(3)
})

test('subtract', () => {
    expect(calculator.subtract(5, 3)).toBe(2)
})

test('divide', () => {
    expect(calculator.divide(6, 3)).toBe(2)
})

test('muliply', () => {
    expect(calculator.multiply(2, 4)).toBe(8)
})