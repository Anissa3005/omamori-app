const modelOmamori = require("../model/omamori");

module.exports = {
  async createOmamori(req, res) {
    try {
      const omamoriInfo = modelOmamori.createOmamori(req.body);
      res.status(201).send(omamoriInfo[0]);
    } catch (err) {
      console.log(err);
    }
  },
};
