export default class ReceiptPrinter {
  constructor (products) {
    this.products = [...products];
  }

  print (barcodes) {
    // TODO: Please implement the method
    // <-start-
    var result = '';

    if (barcodes === undefined){
      result = this.appendReceipt(result);
      result += '\n';
      result = this.appendTotal(result);
      result += "0.00";

      console.log(result)
      return result;
    }

    

    for ( const barcode  of  barcodes ) {
      if (this.products.filter(x => x === barcodes).length === 0){
        throw new Error('Unknown barcode.');
      }
    }



    // --end->
  }

  // TODO: You can add additional method if you want
  // <-start-
  appendReceipt (input) {
    input+='==================== Receipt ====================\n'
    return input;
  }


  appendTotal (input) {
    input+='===================== Total =====================\n';
    return input;
  }


  // --end->
}

// TODO: You can add additional function or even class if you want
// <-start-

// --end->
