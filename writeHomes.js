const faker = require('faker');
const fs = require('fs');

const getRandomIntInclusive = (min, max) => (
  Math.floor(Math.random() * (max - min) + min));
const isDecreased = () => (
  Math.random() > 0.75
);

const writeNRows = (writer, n, encoding, callback) => {
  let i = n;
  const url = 'https://sdchomes.s3-us-west-1.amazonaws.com/';
  const write = () => {
    let ok = true;
    do {
      if (i % 100000 === 0) {
        console.log(`<~~ 100,000 rows ~ ${i} to go ~~>`);
      }
      i -= 1;
      const userid = getRandomIntInclusive(1, 1000000);
      const realtor = faker.lorem.word();
      const decreased = isDecreased();
      const price = getRandomIntInclusive(100, 300) * 100000;
      const image = `${url}${(i % 29) + 1}.jpg`;
      const street = faker.address.streetAddress();
      const sta = faker.address.state();
      const city = faker.address.city();
      const beds = getRandomIntInclusive(1, 8);
      const baths = getRandomIntInclusive(1, 8);
      const sqft = getRandomIntInclusive(4000, 10000);
      const score = Math.floor(Math.floor(price * sqft) / 1000000);
      const data = `${userid}, ${realtor}, ${decreased}, ${price}, ${image}, ${street}, ${sta}, ${city}, ${beds}, ${baths}, ${sqft}, ${score}\n`;
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

const writeUsers = fs.createWriteStream('./database/seed/homes.csv');
writeUsers.write('userid, realtor, decreased, price, img, street, city, sta, beds, baths, sqft, score\n', 'utf8');

const numHomes = 10000000;

writeNRows(writeUsers, numHomes, 'utf8', () => {
  writeUsers.end();
});
