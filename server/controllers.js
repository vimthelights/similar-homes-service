const models = require('./models.js');

const getSimilarHomes = (req, res) => {
  const { id } = req.params;
  models.getSimilarHomes(id, (err, results) => {
    if (err) {
      res.status(500).send('Failed to get similar homes');
    } else {
      res.status(200).json(results);
    }
  });
};

// const getAllHomes = (req, res) => {
//   models.getAll((err, results) => {
//     if (err) {
//       res.status(500).send('Failed to get all homes');
//     } else {
//       res.status(200).json(results);
//     }
//   });
// };

// const getNearbyHomes = (req, res) => {
//   // const { id } = req.params;
//   models.getNearby((err, results) => {
//     if (err) {
//       res.status(500).send('Failed to get nearby homes');
//     } else {
//       // if (id % 2 === 0) { results.reverse(); }
//       res.status(200).json(results);
//     }
//   });
// };

// const updateLiked = (req, res) => {
//   const { id } = req.params;
//   models.toggleOnLike(id, (err, results) => {
//     if (err) {
//       res.status(500).send('Failed update home to liked list');
//     } else {
//       res.status(200).json(results);
//     }
//   });
// };

module.exports = {
  getSimilarHomes,
};
