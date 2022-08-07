class Currency {

    constructor(digitCode, letterCode, rateToUah){
        this.digitCode = (digitCode+'').padStart(0, 3);
        this.letterCode = letterCode;
        this.rateToUah = rateToUah;
    }

    getCode() 
    {
        return this.digitCode;
    }

    getLetterCode()
    {
        return this.letterCode;
    }

    getRate()
    {
        return this.rateToUah;
    }
}


module.exports = Currency;



// https://t.me/NBUCurrencyConverter_bot