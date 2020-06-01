export default class ReceiptPrinter {
  constructor (products) {
    this.products = [...products];
  }

  print (barcodes) {
    // TODO: Please implement the method
    // <-start-
    var result = '';

    result = appendReceipt(result);

    if (barcodes === undefined || barcodes.length === 0) {
      result += '\n';
      result = appendTotal(result);
      result += '0.00';

      return result;
    }

    let myProductMap = new Map();

    barcodes.sort();

    for (const barcode of barcodes) {
      const myProduct = this.products.filter(x => x.barcode === barcode)[0];

      if (myProduct === undefined) {
        throw new Error('Unknown barcode.');
      } else {
        // eslint-disable-next-line no-undef
        myProductMap = createmyProductMap(myProduct, barcode, myProductMap);
      }
    }

    const tempResult = printMyProduct(myProductMap);

    const totalPrice = tempResult[0];

    result += tempResult[1];

    result = appendTotal(result);

    result += totalPrice.toFixed(2);

    return result;
    // --end->
  }

  // TODO: You can add additional method if you want
  // <-start-
  // --end->
}

// TODO: You can add additional function or even class if you want
// <-start-
function appendReceipt (input) {
  input += '==================== Receipt ====================\n';
  return input;
}

function appendTotal (input) {
  input += '===================== Total =====================\n';
  return input;
}

function printMyProduct (myProductMap) {
  let tmpResult = '';
  let total = 0;
  for (const [ key, value] of myProductMap) {
    tmpResult += value.name.padEnd(30, ' ') + ('x' + value.count).padEnd(10, ' ') + value.unit + '\n';
    total += value.count * value.price;
  }
  return [total, tmpResult];
}


function createmyProductMap (myProduct, barcode, myProductMap) {
  if (myProductMap.has(barcode)) {
    myProductMap.set(barcode, { name: myProduct.name, unit: myProduct.unit, price: myProduct.price, count: myProductMap.get(barcode).count + 1 });
  } else {
    myProductMap.set(barcode, { name: myProduct.name, unit: myProduct.unit, price: myProduct.price, count: 1 });
  }
  return myProductMap;
}

// --end->
