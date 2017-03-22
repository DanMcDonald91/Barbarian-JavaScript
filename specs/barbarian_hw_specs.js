var barbarian = require('../barbarian');
var assert = require('assert');

describe('Barbarian', function(){
 
  it('should have the name Maximus', function(){
    assert.equal("Maximus", barbarian.name);
  });

  it('should have the weapon LongSword' , function(){
    assert.equal("LongSword" , barbarian.weapon);
  });


});it('should have MadDog as favourite beer', function(){
  assert.equal("MadDog" , barbarian.favbeer);

});

it('should have 100 starting health', function(){
  assert.equal(100, barbarian.health);
})

it('should have 0 anger at first' , function(){
  assert.equal(0, barbarian.anger);
})
