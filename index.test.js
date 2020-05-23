const chai = require('chai');
const expect = chai.expect;

const main = require('./index');


describe('test1', () => {
    it('right shift - left shift - right shift dublicates, no triplets', (done) => {
        expect(main([1, 4, 2, 2, 4, 8, 2, 4, 4, 8, 8, 16, 8, 1, 1])).to.deep.equal([1, 4, 16, 2, 8, 32, 8, 2]);
        done();
    });
}
);

describe('test2', () => {
    it('right shift - left shift, present both triplets and dublicates', (done) => {
        expect(main([1, 4, 2, 2, 2, 4, 8, 2, 4, 4, 8, 8, 8, 16, 8])).to.deep.equal([1, 8, 2, 4, 8, 2, 16, 32, 8]);
        done();
    });
});

describe('test3', () => {
    it('right shift - right shift, present both triplets and dublicates', (done) => {
        expect(main([1, 4, 2, 2, 2, 4, 8, 2, 4, 4, 16])).to.deep.equal([1, 8, 2, 4, 8, 2, 8, 16]);
        done();
    });
});

describe('test4', () => {
    it('left shift - right shift, present both triplets and dublicates', (done) => {
        expect(main([1, 2, 2, 2, 4, 8, 2, 4, 4, 16])).to.deep.equal([1, 2, 16, 2, 8, 16]);
        done();
    });
});

describe('test5', () => {
    it('basic', (done) => {
        expect(main([1, 4, 16, 8, 8, 2, 1])).to.deep.equal([1, 4, 32, 2, 1]);
        done();
    });
});
