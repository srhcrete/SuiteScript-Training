/**
 * NApiVerson 2.x
 * NScriptType ClientScript
 */

 define(['N/record'], function(record) {
   function loadSalesOrderWithPromise(id) {
     record.load.promise({
       type: record.Type.SALES_ORDER,
       id: id
     }).then(function(salesOrder){
       var total = salesOrder.getValue('total');
       console.log('Promise sales order', total);
     });
   }

   function loadSalesOrder(id){
     var salesOrder2 = record.load({
       type: record.Type.SALES_ORDER,
       id: id
     });
     var total2 = salesOrder2.getValue('total');
     console.log('Non-promise sales order', total2);
   }

  function pageInit(context) {
    loadSalesOrder(517);
    loadSalesOrder(518);
    loadSalesOrder(520);
    loadSalesOrder(521);
    loadSalesOrder(522);
    loadSalesOrder(523);
    loadSalesOrder(524);
    loadSalesOrder(526);
    loadSalesOrder(527);
    loadSalesOrder(528);
    loadSalesOrder(530);
    loadSalesOrder(531); 
    loadSalesOrder(532);
    loadSalesOrder(533);
    loadSalesOrder(534);

    // loadSalesOrderWthPromise(517);
    // loadSalesOrderWthPromise(518);
    // loadSalesOrderWthPromise(520);
    // loadSalesOrderWthPromise(521);
    // loadSalesOrderWthPromise(522);
    // loadSalesOrderWthPromise(523);
    // loadSalesOrderWthPromise(524);
    // loadSalesOrderWthPromise(526);
    // loadSalesOrderWthPromise(527);
    // loadSalesOrderWthPromise(528);
    // loadSalesOrderWthPromise(530);
    // loadSalesOrderWthPromise(531);
    // loadSalesOrderWthPromise(532);
    // loadSalesOrderWthPromise(533);
    // loadSalesOrderWthPromise(534);
  }

  return {
    pageInit: pageInit
  }
 });