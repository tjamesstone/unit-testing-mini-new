import {add} from '../utils/functions'
import { isTSAnyKeyword } from '@babel/types'

it('add returns the sum of two integers correctly', () => {
    expect(add(1,2)).toBe(3)
})
it('add handles string inputs that are numbers', () =>{
    expect(add('3', '4')).toBe(7)
})
it('add returns NaN if non numbers are added', () => {
    expect(add('hello', 'world')).toBeNaN()
})