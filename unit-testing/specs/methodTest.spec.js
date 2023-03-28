const MethodClass = require('../src/index')
const newObject = new MethodClass();
const expect = require('chai').expect;
const sinon = require('sinon');
const chaiaspromised = require('chai-as-promised');
const chai = require('chai');
chai.use(chaiaspromised);

describe.skip('MethodClass Test Suit', () => {
    it('Should return addition of two params', () => {
       expect(newObject.add(1,2)).to.be.equal(3)
    })

    // spy - mock - stub 
    it('Should spy the ass method', () => {
       const spy = sinon.spy(newObject, 'add');
       const arg1 = 10;
       const arg2 = 20;

       newObject.add(arg1, arg2);
       expect(spy.calledWith(10,20)).to.be.true;
       expect(spy.calledTwice).to.be.false;
    })

    it('Should mock the greet function', () => {
        const mock = sinon.mock(newObject);
        const expectation =  mock.expects("greet")
        // expectation.returns('Hello World!');
        newObject.anotherMethod(10,20)
        expectation.withArgs("Hello");
        expectation.verify();
    })
})

describe.skip("Test Suit for stubs", () => {
    it('Should stub add method', () => {
      const stub = sinon.stub(newObject, "add");
      stub.withArgs(10,20).returns(100);
      expect(newObject.anotherMethod(10,20)).to.be.equal(100);
    })
})

describe("Promise Test Suit ", () => {
    it('Should test promise', (done) => {
        // newObject.PromiseTetCase()
        // .then((result)=> {
        //   expect(result).to.be.equal(9)
        // })
        done();
        return expect(newObject.PromiseTetCase()).to.be.eventually.equal(9)
    })
})
