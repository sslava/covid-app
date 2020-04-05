const resp = require('./response.json');
const {alpha2} = require('../src/assets/localization/ru.json');

resp.stats.countries.forEach((c) => {
  if (c.code && c.country_name) {
    alpha2[c.code] = c.country_name;
  }
});
console.log(JSON.stringify(alpha2, undefined, 2));
