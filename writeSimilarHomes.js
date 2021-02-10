const fs = require('fs');

const writeNRows = (writer, n, encoding, callback) => {
  let i = n;
  const total = 10000000;
  let base = 1;
  let similar = base + 1;
  const write = () => {
    let ok = true;
    do {
      if (i % 100000 === 0) {
        console.log(`<~~ 100,000 rows ~ ${i} to go ~~>`);
        console.log(base);
        console.log(similar);
      }
      i -= 1;
      if (i % 10 === 0) {
        base += 1;
        similar = base + 1;
        if (similar === total) {
          similar = 1;
        }
      }
      similar += 1;
      const homeid = base;
      const similarid = similar;
      const data = `${homeid}, ${similarid}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

const writeUsers = fs.createWriteStream('./database/seed/similar_homes.csv');
writeUsers.write('homeid, similarid\n', 'utf8');

const similarHomes = 100000000;

writeNRows(writeUsers, similarHomes, 'utf8', () => {
  writeUsers.end();
});
