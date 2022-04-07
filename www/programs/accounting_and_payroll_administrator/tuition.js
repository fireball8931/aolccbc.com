import("https://cdnjs.cloudflare.com/ajax/libs/currencyformatter.js/2.2.0/currencyFormatter.min.js")
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


var parameters = {
    currency: 'CAD', // If currency is not supplied, defaults to USD
    symbol: '$', // Overrides the currency's default symbol
    locale: 'en', // Overrides the currency's default locale (see supported locales)
    decimal: '.', // Overrides the locale's decimal character
    group: ',', // Overrides the locale's group character (thousand separator)
    pattern: '!#,##0' // Overrides the locale's default display pattern

    // The pattern follows standard unicode currency pattern notation.
    // comma = group separator, dot = decimal separator, exclamation = currency symbol
}


jquery.get('dtuition.html', function(data) {
    document.getElementById('dtuition').innerHTML = OSREC.CurrencyFormatter.format(data, parameters);
    var internationaltuitionpreformatted = (data * 1.30); document.getElementById('ituition').innerHTML = OSREC.CurrencyFormatter.format(internationaltuitionpreformatted, parameters);
});




