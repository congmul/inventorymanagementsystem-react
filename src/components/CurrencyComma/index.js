function CurrencyComma( num ) {
    // console.log("In currencyComma")
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    // console.log(str);
    return str.join('.');
  }

  export default CurrencyComma;