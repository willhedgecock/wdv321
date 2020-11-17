const assert = require('chai').assert;
const validInput = require('../app.js').validInput;
const validatePhoneNum = require('../app.js').validatePhoneNum;

// JavaScript Document

describe("Testing Input Required", function(){
	
	it("The letter a should pass", function(){
		assert.isTrue(validInput('a'));		
    });
	
	it("The number 4 should pass", function() {
		assert.isTrue(validInput(4));
	});
	
	it("Empty or '' should fail", function() {
		assert.isFalse(validInput(' '));
	});	
	
	it("A single space should fail", function() {
		assert.isFalse(validInput(' '));
	});
	
	it("Two or more spaces should fail", function(){
		assert.isFalse(validInput('  '));
	});
	
	it("The word null should fail", function() {
		assert.isFalse(validInput('null'));
	});
	
	it("The word undefined should fail", function() {
		assert.isFalse(validInput('undefined'));
	});
	
	it("The value 'a 4' should pass", function(){
		assert.isTrue(validInput('a 4'));
    });
	
});	//end "Testing Input Required"




describe("Testing Valid Phone Number", function(){
	
    it("Input is required; empty string should fail", function() {
        assert.isFalse(validatePhoneNum("    "));
    });   


    it("Input must be numeric", function() {
        assert.isFalse(validatePhoneNum("abadkjalkdjsf"));
    });


    it("Input must be integers", function(){
        assert.isFalse(validatePhoneNum("abc.095"));
    });

    //TESTING MULTIPLE INPUT FOR 10 DIGITS

    it("Input must be 10 numbers", function() {
        assert.isFalse(validatePhoneNum(1));
    });

    it("Input must be 10 numbers2", function() {
        assert.isFalse(validatePhoneNum(1234567895464564));
    });

    it("Input must be 10 numbers3; passing", function() {
        assert.isTrue(validatePhoneNum(5151248965));
    });

    //END TESTING MULTIPLE INPUT FOR 10 DIGITS

    it("Input must not start with '0'; ten digits", function() {
        assert.isFalse(validatePhoneNum(0123456756));
    });

    it("Input must not contain special characters other than allowed in standard phone numbers", function() {
        assert.isFalse(validatePhoneNum(123/456&789));
    });

    //TESTING VALID INPUTS

    it("should pass", function() {
        assert.isTrue(validatePhoneNum('515-515-5151'))
    });

    it("should pass 2", function() {
        assert.isTrue(validatePhoneNum('515.515.5151'))
    });


});