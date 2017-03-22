var barbarian = require('../barbarian');
var assert = require('assert');

describe('Barbarian', function(){
 
  it('should have the name Maximus', function(){
    assert.equal("Maximus", barbarian.name);
  });


});