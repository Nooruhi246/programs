const { expect } = require("@jest/globals")
const {game} = require("./bowling")

describe("Check for all strikes condition",()=>{
    const rolls = [10,10,10,10,10,10,10,10,10,10,10,10]

    it("Should say the total score is 300",()=>{
        expect(game(rolls).score).toBe(300)
    })
})