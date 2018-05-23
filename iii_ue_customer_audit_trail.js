/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */

define(['N/record'], function (record) {
    return {
        afterSubmit: function (context) {
            var customer = context.newRecord;
            var customerId = customer.getValue('id');
            var customerEmail = customer.getValue('email');
            var customerPhone = customer.getValue('phone');
            var salesRepName = customer.getValue('salesrep');
            var couponCode = customer.getValue('custentityiii_coupon_code');

            log.audit('Sales Rep Name', salesRepName);
            log.audit('Coupon Code', couponCode);
            log.audit('Customer ID', customerId);
            log.audit('Customer', customer);

            if (context.type === context.UserEventType.CREATE) {
                var customer = context.newRecord;
                var customerFollowUp = record.create({
                    type: record.Type.TASK,
                    isDynamic: true,
                    defaultValues: {
                        customform: -120
                    }
                });

                customerFollowUp.setValue({
                    fieldId: 'priority',
                    value: 'HIGH'
                });
                customerFollowUp.setValue({
                    fieldId: 'title',
                    value: 'New Customer Follow-Up',
                });
                customerFollowUp.setValue({
                    fieldId: "company",
                    value: customerId
                });
                customerFollowUp.setValue({
                    fieldId: 'message',
                    value: 'Please take care of this customer and follow up soon.'
                });
                if (customer.getValue('salesrep')) {
                    log.audit('In conditional', 'you are in');
                    //customerFollowUp.setValue({
                    //fieldId: 'assigned',
                    // value: salesRepName
                    //});
                }

                try {
                    var customerFollowUpId = customerFollowUp.save();

                    log.audit({
                        title: 'Customer Follow Up Task record created successfully',
                        details: 'New task record ID' + customerFollowUpId
                    });

                } catch (e) {
                    log.error({
                        title: e.name,
                        details: e.message
                    });
                }
            }
        }
    };
});