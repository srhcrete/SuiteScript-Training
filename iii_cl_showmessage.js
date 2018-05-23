/**
 * @NScriptType ClientScript
 * @NApiVersion 2.0
 * @NModuleScope SameAccount
 */

 define ([], function () {
    function showMessage() {
        alert('Hello World');
    }
    return {
        pageInit: showMessage
    }
 })