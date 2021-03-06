/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */

define(['N/record'], function(record) {
    function pageInit(context) {
        var customer = context.currentRecord;
        var numLines = customer.getLineCount({
            sublistId: 'recmachcustomrecord_iii_prod_pref_item'
        });
        alert('This customer has ' + numLines + ' product preferences');
    }
    function fieldChanged(context) {
        var customer = context.currentRecord;
        var fieldId = context.fieldId;
        if (fieldId === 'custentity_iii_apply_coupon') {
            var couponCode = customer.getField('custentityiii_coupon_code');
            couponCode.isDisabled = !customer.getValue(context.fieldId);
            // TODO: Used to work, now doesn't, investigate
            // customer.setValue(couponCode.isDisabled, !customer.getValue(context.fieldId));
            if (couponCode.isDisabled) {
                customer.setValue(couponCode.id, '');
            }
        }
    }

    function validateField(context) {
        var customer = context.currentRecord;
        var applyCoupon = customer.getValue('custentity_iii_apply_coupon');
        if (applyCoupon) {
            var couponCodeValue = customer.getValue('custentityiii_coupon_code');
            var valueLength = couponCodeValue.length;
            if (valueLength !== 5) {
                alert('Please enter a coupon code with 5 characters.');
                return false;
            }
        }
        return true;
    }

    function saveRecord(context) {
        const fieldIsValid = validateField(context);
        if (!fieldIsValid) {
            return false;
        }
        return true;
    }

    return {
        pageInit: pageInit,
        fieldChanged: fieldChanged,
        saveRecord: saveRecord
    }
});