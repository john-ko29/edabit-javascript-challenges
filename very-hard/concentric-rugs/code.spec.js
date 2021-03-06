const generateRug = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(generateRug(1)).toEqual([[0]]);
        expect(generateRug(3)).toEqual([[1, 1, 1], [1, 0, 1], [1, 1, 1]]);
        expect(generateRug(5)).toEqual([[2, 2, 2, 2, 2], [2, 1, 1, 1, 2], [2, 1, 0, 1, 2], [2, 1, 1, 1, 2], [2, 2, 2, 2, 2]]);
        expect(generateRug(7)).toEqual([[3, 3, 3, 3, 3, 3, 3], [3, 2, 2, 2, 2, 2, 3], [3, 2, 1, 1, 1, 2, 3], [3, 2, 1, 0, 1, 2, 3], [3, 2, 1, 1, 1, 2, 3], [3, 2, 2, 2, 2, 2, 3], [3, 3, 3, 3, 3, 3, 3]]);
        expect(generateRug(9)).toEqual([[4, 4, 4, 4, 4, 4, 4, 4, 4], [4, 3, 3, 3, 3, 3, 3, 3, 4], [4, 3, 2, 2, 2, 2, 2, 3, 4], [4, 3, 2, 1, 1, 1, 2, 3, 4], [4, 3, 2, 1, 0, 1, 2, 3, 4], [4, 3, 2, 1, 1, 1, 2, 3, 4], [4, 3, 2, 2, 2, 2, 2, 3, 4], [4, 3, 3, 3, 3, 3, 3, 3, 4], [4, 4, 4, 4, 4, 4, 4, 4, 4]]);
        expect(generateRug(1)).toEqual([[0]]);
        expect(generateRug(3)).toEqual([[1, 1, 1], [1, 0, 1], [1, 1, 1]]);
        expect(generateRug(5)).toEqual([[2, 2, 2, 2, 2], [2, 1, 1, 1, 2], [2, 1, 0, 1, 2], [2, 1, 1, 1, 2], [2, 2, 2, 2, 2]]);
        expect(generateRug(7)).toEqual([[3, 3, 3, 3, 3, 3, 3], [3, 2, 2, 2, 2, 2, 3], [3, 2, 1, 1, 1, 2, 3], [3, 2, 1, 0, 1, 2, 3], [3, 2, 1, 1, 1, 2, 3], [3, 2, 2, 2, 2, 2, 3], [3, 3, 3, 3, 3, 3, 3]]);
        expect(generateRug(9)).toEqual([[4, 4, 4, 4, 4, 4, 4, 4, 4], [4, 3, 3, 3, 3, 3, 3, 3, 4], [4, 3, 2, 2, 2, 2, 2, 3, 4], [4, 3, 2, 1, 1, 1, 2, 3, 4], [4, 3, 2, 1, 0, 1, 2, 3, 4], [4, 3, 2, 1, 1, 1, 2, 3, 4], [4, 3, 2, 2, 2, 2, 2, 3, 4], [4, 3, 3, 3, 3, 3, 3, 3, 4], [4, 4, 4, 4, 4, 4, 4, 4, 4]]);
    });
});
