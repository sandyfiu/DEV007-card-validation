const validator = {
  isValid: function (creditCardNumber) {
    let suma = 0;
    
    for (let i = creditCardNumber.length - 2; i >= 0; i = i - 2) {
      const numMult = parseInt(creditCardNumber[i]) * 2;

      if (numMult >= 10) {
        suma +=numMult - 9;
      }
      else
      {
        suma += numMult;
      }

    }

    for (let i = creditCardNumber.length - 1; i >= 0; i = i -2) {
      suma += parseInt(creditCardNumber[i]);
    }

    if (suma % 10 === 0) {
      return true;
    }
    else
    {
      return false;
    }
  },


  maskify: function (creditCardNumber) {
    let numeroMask = "";
    const ultimosCuatroNum = creditCardNumber.slice(-4);

    for (let i = 0; i < creditCardNumber.length - 4; i++) {
      numeroMask += "*";
    }
    return numeroMask + ultimosCuatroNum;
  },
};

export default validator;