const { Telegraf } = require('telegraf');
// const  axios  = require('axios').default;
const cc = require('currency-codes');
const NodeCache = require( "node-cache" );

const Currency = require('./Currency');

const myCache = new NodeCache( { stdTTL: 100, checkperiod: 120 } );

const token = process.env.token || '5452028726:AAHOZVvV6CN08WtlY2seKFXB4aC3TKppok4';

const bot = new Telegraf(token, { polling: true });

bot.start((ctx) => {                           
    return ctx.reply('Welcom to Currency Bot');
});
 
async function getCurrency() {
    let value = myCache.get("values");
    if (value) {
        console.log('cache found');
        return value;
    }
    
    console.log('cache not found');
    //let response = await fetch('https://api.monobank.ua/bank/currency');
    //let data = await response.json();
    
    let data = JSON.parse('[{"currencyCodeA":840,"currencyCodeB":980,"date":1659459608,"rateBuy":36.65,"rateSell":37.9003},{"currencyCodeA":978,"currencyCodeB":980,"date":1659459608,"rateBuy":37.47,"rateSell":38.7297},{"currencyCodeA":978,"currencyCodeB":840,"date":1659428408,"rateBuy":1.015,"rateSell":1.03},{"currencyCodeA":826,"currencyCodeB":980,"date":1659473731,"rateCross":46.579},{"currencyCodeA":392,"currencyCodeB":980,"date":1659472389,"rateCross":0.2879},{"currencyCodeA":756,"currencyCodeB":980,"date":1659473712,"rateCross":39.9772},{"currencyCodeA":156,"currencyCodeB":980,"date":1659473504,"rateCross":5.6059},{"currencyCodeA":784,"currencyCodeB":980,"date":1659473598,"rateCross":10.3216},{"currencyCodeA":971,"currencyCodeB":980,"date":1653058293,"rateCross":0.3475},{"currencyCodeA":8,"currencyCodeB":980,"date":1659473204,"rateCross":0.3316},{"currencyCodeA":51,"currencyCodeB":980,"date":1659472940,"rateCross":0.0935},{"currencyCodeA":973,"currencyCodeB":980,"date":1659433798,"rateCross":0.0867},{"currencyCodeA":32,"currencyCodeB":980,"date":1659473592,"rateCross":0.2866},{"currencyCodeA":36,"currencyCodeB":980,"date":1659471201,"rateCross":26.6755},{"currencyCodeA":944,"currencyCodeB":980,"date":1659472787,"rateCross":22.293},{"currencyCodeA":50,"currencyCodeB":980,"date":1659472210,"rateCross":0.4006},{"currencyCodeA":975,"currencyCodeB":980,"date":1659473733,"rateCross":19.9242},{"currencyCodeA":48,"currencyCodeB":980,"date":1659461700,"rateCross":100.5284},{"currencyCodeA":108,"currencyCodeB":980,"date":1538606522,"rateCross":0.0158},{"currencyCodeA":96,"currencyCodeB":980,"date":1659367249,"rateCross":26.9025},{"currencyCodeA":68,"currencyCodeB":980,"date":1659468505,"rateCross":5.5233},{"currencyCodeA":986,"currencyCodeB":980,"date":1659472577,"rateCross":7.3593},{"currencyCodeA":72,"currencyCodeB":980,"date":1653997663,"rateCross":2.7305},{"currencyCodeA":933,"currencyCodeB":980,"date":1659465824,"rateCross":14.2671},{"currencyCodeA":124,"currencyCodeB":980,"date":1659473675,"rateCross":29.565},{"currencyCodeA":976,"currencyCodeB":980,"date":1655462332,"rateCross":0.0163},{"currencyCodeA":152,"currencyCodeB":980,"date":1659472058,"rateCross":0.0423},{"currencyCodeA":170,"currencyCodeB":980,"date":1659470307,"rateCross":0.0089},{"currencyCodeA":188,"currencyCodeB":980,"date":1659456652,"rateCross":0.0561},{"currencyCodeA":192,"currencyCodeB":980,"date":1659388208,"rateCross":1.5271},{"currencyCodeA":203,"currencyCodeB":980,"date":1659473725,"rateCross":1.5818},{"currencyCodeA":262,"currencyCodeB":980,"date":1659368234,"rateCross":0.2086},{"currencyCodeA":208,"currencyCodeB":980,"date":1659473463,"rateCross":5.2302},{"currencyCodeA":12,"currencyCodeB":980,"date":1659434707,"rateCross":0.2549},{"currencyCodeA":818,"currencyCodeB":980,"date":1659473395,"rateCross":2.0049},{"currencyCodeA":230,"currencyCodeB":980,"date":1659241612,"rateCross":0.7106},{"currencyCodeA":981,"currencyCodeB":980,"date":1659473728,"rateCross":14.0354},{"currencyCodeA":936,"currencyCodeB":980,"date":1659463440,"rateCross":4.5389},{"currencyCodeA":270,"currencyCodeB":980,"date":1659378965,"rateCross":0.6887},{"currencyCodeA":324,"currencyCodeB":980,"date":1658346555,"rateCross":0.0041},{"currencyCodeA":344,"currencyCodeB":980,"date":1659437736,"rateCross":4.7182},{"currencyCodeA":191,"currencyCodeB":980,"date":1659473566,"rateCross":5.1811},{"currencyCodeA":348,"currencyCodeB":980,"date":1659473739,"rateCross":0.098},{"currencyCodeA":360,"currencyCodeB":980,"date":1659471527,"rateCross":0.0025},{"currencyCodeA":376,"currencyCodeB":980,"date":1659473621,"rateCross":11.2942},{"currencyCodeA":356,"currencyCodeB":980,"date":1659469110,"rateCross":0.4796},{"currencyCodeA":368,"currencyCodeB":980,"date":1659386907,"rateCross":0.0253},{"currencyCodeA":364,"currencyCodeB":980,"date":1659388208,"rateCross":0.0009},{"currencyCodeA":352,"currencyCodeB":980,"date":1659472766,"rateCross":0.2794},{"currencyCodeA":400,"currencyCodeB":980,"date":1659469751,"rateCross":53.4762},{"currencyCodeA":404,"currencyCodeB":980,"date":1659461919,"rateCross":0.3185},{"currencyCodeA":417,"currencyCodeB":980,"date":1659456461,"rateCross":0.446},{"currencyCodeA":116,"currencyCodeB":980,"date":1659353825,"rateCross":0.009},{"currencyCodeA":408,"currencyCodeB":980,"date":1659388208,"rateCross":16.6591},{"currencyCodeA":410,"currencyCodeB":980,"date":1659466158,"rateCross":0.0291},{"currencyCodeA":414,"currencyCodeB":980,"date":1659469605,"rateCross":123.7687},{"currencyCodeA":398,"currencyCodeB":980,"date":1659473291,"rateCross":0.0789},{"currencyCodeA":418,"currencyCodeB":980,"date":1659446096,"rateCross":0.0024},{"currencyCodeA":422,"currencyCodeB":980,"date":1658834500,"rateCross":0.0014},{"currencyCodeA":144,"currencyCodeB":980,"date":1659473485,"rateCross":0.1054},{"currencyCodeA":434,"currencyCodeB":980,"date":1648958626,"rateCross":6.4735},{"currencyCodeA":504,"currencyCodeB":980,"date":1659468677,"rateCross":3.6763},{"currencyCodeA":498,"currencyCodeB":980,"date":1659473737,"rateCross":1.9686},{"currencyCodeA":969,"currencyCodeB":980,"date":1659103011,"rateCross":0.0087},{"currencyCodeA":807,"currencyCodeB":980,"date":1659473029,"rateCross":0.6308},{"currencyCodeA":496,"currencyCodeB":980,"date":1659442209,"rateCross":0.0116},{"currencyCodeA":478,"currencyCodeB":980,"date":1659388208,"rateCross":0.0978},{"currencyCodeA":480,"currencyCodeB":980,"date":1659441031,"rateCross":0.8194},{"currencyCodeA":454,"currencyCodeB":980,"date":1633949773,"rateCross":0.0325},{"currencyCodeA":484,"currencyCodeB":980,"date":1659472962,"rateCross":1.8733},{"currencyCodeA":458,"currencyCodeB":980,"date":1659461394,"rateCross":8.5212},{"currencyCodeA":943,"currencyCodeB":980,"date":1659353444,"rateCross":0.5856},{"currencyCodeA":516,"currencyCodeB":980,"date":1659354261,"rateCross":2.2604},{"currencyCodeA":566,"currencyCodeB":980,"date":1659467606,"rateCross":0.0889},{"currencyCodeA":558,"currencyCodeB":980,"date":1659453082,"rateCross":1.0356},{"currencyCodeA":578,"currencyCodeB":980,"date":1659473645,"rateCross":3.9455},{"currencyCodeA":524,"currencyCodeB":980,"date":1659429744,"rateCross":0.2934},{"currencyCodeA":554,"currencyCodeB":980,"date":1659442785,"rateCross":23.5325},{"currencyCodeA":512,"currencyCodeB":980,"date":1659465437,"rateCross":98.5296},{"currencyCodeA":604,"currencyCodeB":980,"date":1659472410,"rateCross":9.7837},{"currencyCodeA":608,"currencyCodeB":980,"date":1659471778,"rateCross":0.6843},{"currencyCodeA":586,"currencyCodeB":980,"date":1659473255,"rateCross":0.1591},{"currencyCodeA":985,"currencyCodeB":980,"date":1659473742,"rateCross":8.2809},{"currencyCodeA":600,"currencyCodeB":980,"date":1659473492,"rateCross":0.0055},{"currencyCodeA":634,"currencyCodeB":980,"date":1659466196,"rateCross":10.412},{"currencyCodeA":946,"currencyCodeB":980,"date":1659473726,"rateCross":7.9367},{"currencyCodeA":941,"currencyCodeB":980,"date":1659471413,"rateCross":0.3296},{"currencyCodeA":682,"currencyCodeB":980,"date":1659472177,"rateCross":10.094},{"currencyCodeA":690,"currencyCodeB":980,"date":1659462592,"rateCross":2.7273},{"currencyCodeA":938,"currencyCodeB":980,"date":1659388208,"rateCross":0.0649},{"currencyCodeA":752,"currencyCodeB":980,"date":1659473590,"rateCross":3.7585},{"currencyCodeA":702,"currencyCodeB":980,"date":1659473141,"rateCross":27.5201},{"currencyCodeA":694,"currencyCodeB":980,"date":1651749123,"rateCross":0.0024},{"currencyCodeA":706,"currencyCodeB":980,"date":1659388208,"rateCross":0.0649},{"currencyCodeA":968,"currencyCodeB":980,"date":1658497382,"rateCross":1.6205},{"currencyCodeA":760,"currencyCodeB":980,"date":1659388208,"rateCross":0.013},{"currencyCodeA":748,"currencyCodeB":980,"date":1659076195,"rateCross":2.2464},{"currencyCodeA":764,"currencyCodeB":980,"date":1659469582,"rateCross":1.0546},{"currencyCodeA":972,"currencyCodeB":980,"date":1659364053,"rateCross":3.6071},{"currencyCodeA":795,"currencyCodeB":980,"date":1659388208,"rateCross":0.0021},{"currencyCodeA":788,"currencyCodeB":980,"date":1659466899,"rateCross":12.1705},{"currencyCodeA":949,"currencyCodeB":980,"date":1659473739,"rateCross":2.1315},{"currencyCodeA":901,"currencyCodeB":980,"date":1659461206,"rateCross":1.262},{"currencyCodeA":834,"currencyCodeB":980,"date":1659458769,"rateCross":0.0163},{"currencyCodeA":800,"currencyCodeB":980,"date":1659354556,"rateCross":0.0095},{"currencyCodeA":858,"currencyCodeB":980,"date":1659452493,"rateCross":0.9101},{"currencyCodeA":860,"currencyCodeB":980,"date":1659464142,"rateCross":0.0034},{"currencyCodeA":937,"currencyCodeB":980,"date":1659388208,"rateCross":6.3601},{"currencyCodeA":704,"currencyCodeB":980,"date":1659473647,"rateCross":0.0016},{"currencyCodeA":950,"currencyCodeB":980,"date":1659468279,"rateCross":0.059},{"currencyCodeA":952,"currencyCodeB":980,"date":1659395769,"rateCross":0.058},{"currencyCodeA":886,"currencyCodeB":980,"date":1543715495,"rateCross":0.112},{"currencyCodeA":710,"currencyCodeB":980,"date":1659473082,"rateCross":2.3055},{"currencyCodeA":894,"currencyCodeB":980,"date":1659388208,"rateCross":0.0022}]');

    let currencies = [];
    data.forEach(element => {
        elem = cc.number((element.currencyCodeA+'').padStart(3, '0'));
        let rate;
        if (elem){
            if (element.rateBuy){
                rate = element.rateBuy;
            }
            else{
                rate = element.rateCross;
            }
            const c = new Currency(element.currencyCodeA, elem.code, rate);
            currencies.push(c);
        }
    });

    myCache.set("values", currencies, 600);
    return currencies;
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

        // console.log(getCurrency());

        const foundCurrency = data.find((cur) => {
            return cur.getCode().toString() === currency.number;
        });

        console.log({foundCurrency});
        if (!foundCurrency.getCode() || !foundCurrency.getLetterCode()) {
            return ctx.reply('Currency didnt found in Monobank API');
        }

        return ctx.replyWithMarkdown(
`Валюта: *${foundCurrency.getLetterCode()}*  
Цифровой код: *${foundCurrency.getCode()}*  
Курс: *${foundCurrency.getRate()}* `);
    } catch (error) {
        return ctx.reply(error);
    }
});

bot.startPolling(); // запускаем бота