import {expect} from 'chai'
import { calcArea } from '../src/poly.js'

describe('calcArea() fuggveny tesztelese', () => {
    it('in: 2, 5; out: 6.88', () => {
        const expected = calcArea(30,3)
        expect(expected).to.closeTo(389.71, 0.1)
    })
    it('in: 135, 30; out: 1300494.69', () => {
        const expected = calcArea(135, 30)
        expect(expected).to.closeTo(1300494.69, 0.1)
    })
    it('in: 30, 2; out: hiba', () => {
        const expected = calcArea(30,2)
        expect(expected).to.throw
    })
    it('in: 30, 0; out: hiba', () => {
        const expected = calcArea(30,0)
        expect(expected).to.throw
    })
    it('in: 10000001, 3; out: hiba', () => {
        const expected = calcArea(10000001, 3)
        expect(expected).to.throw
    })
    it('in: 30, 10000001; out: hiba', () => {
        const expected = calcArea(30, 10000001)
        expect(expected).to.throw
    })
    
})