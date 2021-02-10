const db = require('../database/index.js');

const getSimilarHomes = (id, callback) => {
  const queryString = `SELECT * FROM homes WHERE id IN(SELECT similarid FROM similar_homes WHERE homeid = ${id})`;
  db.client.query(queryString, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

// const getAll = (callback) => {
//   Home.find({}, (err, results) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null, results);
//     }
//   });
// };

// const getNearby = (callback) => {
//   Home.find({}, (err, results) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null, results);
//     }
//   }).sort({ _id: -1 }).limit(16);
// };

// const toggleOnLike = (id, callback) => {
//   Home.updateOne({ _id: id }, { liked: true }, (err, results) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null, results);
//     }
//   });
// };

module.exports = {
  getSimilarHomes,
};
