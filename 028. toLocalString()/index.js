// toLocaleString() = returns a string with a language
//                    sensitive representation of this number

// number.toLocaleString(locale,{options});

// 'locale' = secify that language (undefined = default set in browser)
// 'options' = object with formatting options

let myNum = 123456.789;

myNum = myNum.toLocaleString('en-US') // US English
myNum = myNum.toLocaleString('hi-IN') // Hindi
myNum = myNum.toLocaleString('de-DE') // standard German


myNum = myNum.toLocaleString('en-US', {style: "currency", currency: "USD"})
myNum = myNum.toLocaleString('hi-IN', {style: "currency", currency: "INR"})
myNum = myNum.toLocaleString('de-DE', {style: "currency", currency: "EUR"})

myNum = myNum.toLocaleString('en-US', {style: "percent", currency: "USD"})
myNum = myNum.toLocaleString('en-US', {style: "unit", unit: "celsius"}) 