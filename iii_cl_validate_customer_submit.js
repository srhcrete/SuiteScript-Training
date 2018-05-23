/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */

 define([], function() {
    function saveRecord(context) {
        var customer =  context.currentRecord;
        var couponCode = context.getField('custentityiii_coupon_code');
        var appliesCoupon = context.getField('custentity_iii_apply_coupon'); 
        
        function validateField() {

            return true; 
        }
    }
    return {
        saveRecord: saveRecord
    }
 });