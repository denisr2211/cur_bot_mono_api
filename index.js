const { Telegraf } = require('telegraf');
const  axios  = require('axios').default;
const cc = require('currency-codes');
const NodeCache = require( "node-cache" );


const myCache = new NodeCache( { stdTTL: 100, checkperiod: 120 } );

const token = process.env.token || '5452028726:AAHOZVvV6CN08WtlY2seKFXB4aC3TKppok4';

const bot = new Telegraf(token, { polling: true });

bot.start((ctx) => {                           
    return ctx.reply('Welcom to Currency Bot');
});
 
async function getCurrency(){
    let value = myCache.get("values");
    if (!value){
        console.log('cache not found');
        let response = await axios.get('https://api.monobank.ua/bank/currency');
        myCache.set("values", response.data, 600);
        return response.data;
    }
    else{
        console.log('cache found');
    }
    return value;
}




bot.hears(/^[A-Z]+$/i, async (ctx) => {
    
    const clientCurCode = ctx.message.text;
    const currency = cc.code(clientCurCode);
    
    // check existing
    if (!currency) {
        return ctx.reply('Currency didnt found');
    }

    try {
        let data = await getCurrency();

        const foundCurrency = data.find((cur) => {
            return cur.currencyCodeA.toString() === currency.number;
        });

        console.log({foundCurrency});
        if (!foundCurrency || !foundCurrency.rateBuy || !foundCurrency.rateSell) {
            return ctx.reply('Currency didnt found in Monobank API');
        }

        return ctx.replyWithMarkdown(
`CURRENCY: *${currency.code}*  
RATE BUY: *${foundCurrency.rateBuy}*  
RATE SELL: *${foundCurrency.rateSell}* `);
    } catch (error) {
        return ctx.reply(error);
    }
});

bot.startPolling(); // запускаем бота