'use strict'

const sum1 = require('./sum1')

console.assert(
    typeof sum1 === 'function',
    'should sum is a function'
)
console.assert(
    sum1(1, 2) === 3,
    'should sum(1, 2) return 3'
)
console.log('All tests passed!')