/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */

 define([], function() {
    function showMessage() {
        alert('Hello World!');
        debugger;
    }

    return {
        pageInit: showMessage
    }
 });
