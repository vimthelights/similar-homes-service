const faker = require('faker');
const fs = require('fs');

const writeNRows = (writer, n, encoding, callback) => {
  let i = n;
  const write = () => {
    let ok = true;
    do {
      if (i % 100000 === 0) {
        console.log(`<~~ 100,000 rows ~ ${i} to go ~~>`);
      }
      i -= 1;
      const username = faker.internet.userName();
      const email = faker.internet.email();
      const data = `${username}, ${email}\n`;
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

const writeUsers = fs.createWriteStream('./database/seed/users.csv');
writeUsers.write('username, email\n', 'utf8');
const numUsers = 1000000;

writeNRows(writeUsers, numUsers, 'utf8', () => {
  writeUsers.end();
});
