const fs = require('fs');

const getRandomIntInclusive = (min, max) => (
  Math.floor(Math.random() * (max - min) + min));

const writeNRows = (writer, n, encoding, callback) => {
  let i = n;
  const write = () => {
    let ok = true;
    do {
      if (i % 100000 === 0) {
        console.log(`<~~ 100,000 rows ~ ${i} to go ~~>`);
      }
      i -= 1;
      const userid = getRandomIntInclusive(1, 1000000);
      const homeid = getRandomIntInclusive(1, 10000000);
      const data = `${userid}, ${homeid}\n`;
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

const writeUsers = fs.createWriteStream('./database/seed/liked_homes.csv');
writeUsers.write('userid, homeid\n', 'utf8');

const numLikes = 1000000;

writeNRows(writeUsers, numLikes, 'utf8', () => {
  writeUsers.end();
});
