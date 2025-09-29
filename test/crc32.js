'use strict'

const Parser = require('../lib')
const chai = require('chai')
const should = chai.Should()

describe('CRC32', (done) => {
  it('Correct crc is valid', () => {
    const crc32sentence =
      '#UNIHEADINGA,93,GPS,FINE,2385,326588000,0,0,18,10;SOL_COMPUTED,NARROW_FLOAT,5.5208,219.9783,24.6813,0.0000,16.4390,35.3287,"999",21,9,9,5,3,00,3,13*53e4320d'
    //invalid throws error
    should.equal(new Parser({}).parse(crc32sentence), null)
  })

  it('Incorrect crc throws', () => {
    const crc32sentence =
      '#UNIHEADINGA,93,GPS,FINE,2385,326588000,0,0,18,10;SOL_COMPUTED,NARROW_FLOAT,5.5208,219.9783,24.6813,0.0000,16.4390,35.3287,"999",21,9,9,5,3,00,3,13*53e4320a'
    //invalid throws error
    const parse = () => new Parser({}).parse(crc32sentence)
    parse.should.throw()
  })
})
