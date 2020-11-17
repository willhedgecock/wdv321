// JavaScript Document

module.exports = {

        validInput: function(inValue) {
        inValue += "";	//turns all inValues into strings
        if(inValue.trim() == "" || inValue == 'null' || inValue == 'undefined'){
            return false;
        }
        return true;
    },

        validatePhoneNum: function(inNum) { 

            inNum += "";

            let phoneNumVerify = /^\(?([1-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

            if(phoneNumVerify.test(inNum)) {

                return true;

            } else {

                return false;
            }
        }

};




//VALIDATE PHONE NUMBER TEST PLAN

/*

INPUT               EXPECTED RESULT

""                  Invalid input
" "                 Invalid input
"       "           Invalid input
"abc.095"           Invalid input
1                   Invalid input
1234567895464564    Invalid input
0123456756          Invalid input
5151248965          Valid input
123/456&789         Invalid input
515-515-5151        Valid input
515.515.5151        Valid input

*/