var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var output = {};
  var company = []
  for (var i = 0; i < salesData.length; i++) {
    let totSales = 0;
    let totTax = 0;
    for (var x = 0; x < salesData[i].sales.length; x++) {
      totSales += salesData[i].sales[x];
    }
    totTax = totSales * (salesTaxRates[salesData[i].province]);

    if (!output[salesData[i].name])
    output[salesData[i].name] = {
      totalSales: totSales,
      totalTaxes: totTax
    };
    else {
      output[salesData[i].name].totalSales += totSales;
      output[salesData[i].name].totalTaxes += totTax;
    }
  }

  return output;

}


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40

}}
*/