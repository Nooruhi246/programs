const {division} = require("./division")


//Describe what the test block does
describe("Block for Division testing",()=>{
    it("shoud return 2.5 for a=5 and b=2",()=>{
        expect(division(5,2)).toBe(2.5)
    })

    it("shoud return a value close to 1.67 for a=5 and b=3",()=>{
        expect(division(5,3)).toBeCloseTo(1.67)
    })

    it("shoud return Invalid for a=5 and b=0",()=>{
        expect(division(5,0)).toBe("invalid")
    })

    it("shoud return Invalid for string values",()=>{
        expect(division("5",0)).toBe("invalid")
    })


})