const jsdom = require('jsdom');
const path = require('path');
const fs = require('fs');

jsdom.JSDOM.fromFile(path.join(__dirname, '/all/index.html'), {
  contentType: 'text/html',
}).then(dom => {
  try {
    const [, ...trs] = dom.window.document.querySelectorAll('tr');
    const countries = trs.map(tr => {
      const tds = tr.querySelectorAll('td');
      return {
        token: tds[0].textContent,
        name: tds[1].textContent,
      };
    });
    const out = countries.reduce((all, next) => {
      all[next.token] = next.name;
      return all;
    }, {});
    fs.writeFileSync('out.json', JSON.stringify(out, undefined, 2), {
      encoding: 'utf8',
    });
    // countries.forEach(c => {
    //   if (fs.existsSync(`./all/${c.token}/512.png`)){
    //     fs.copyFileSync(
    //       `./all/${c.token}/512.png`,
    //       path.join(__dirname, `/output/${c.token}.png`),
    //     )
    //   }
    // })
  } catch (err) {
    console.log(err);
    throw err;
  }
});
