/*
* File: poly.spec.js
* Author: Dóra Boglárka
* Copyright: 2026, Dóra Boglárka
* Group: Sz I N
* Date: 2026-02-10
* Github: https://github.com/kalae1337
* Licenc: MIT
*/

import { expect } from 'chai'
import { calcArea } from '../src/poly.js'

describe('calcArea() fuggveny tesztelese', () => {
    it('in: 30, 3; out: 389.71', () => {
        const expected = calcArea(30, 3)
        expect(expected).closeTo(389.71, 0.1)
    })
    it('in: 135, 30; out: 1300494.69', () => {
        const result = calcArea(135, 30)
        expect(result).closeTo(1300494.69, 0.1)
    })
    it('0,30 hiba', () => {
        expect(() => calcArea(0,30).to.throw(Error))
    })
    it('in: 30, 2; out: hiba', () => {
        expect(() => calcArea(30,2).to.throw(Error))
    })
    it('in: 30, 0; out: hiba', () => {
        expect(() => calcArea(30,0).to.throw(Error))
    })
    it('in: 10000001, 3; out: hiba', () => {
        expect(() => calcArea(10000001,3).to.throw(Error))
    })
    it('in: 30, 10000001; out: hiba', () => {
        expect(() => calcArea(30, 10000001).to.throw(Error))
    })
    
})