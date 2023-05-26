const modelOmamori = require("../model/omamori");

module.exports = {
  async createOmamori(req, res) {
    try {
      const omamoriInfo = await modelOmamori.createOmamori(req.body);
      res.status(201).send(omamoriInfo[0]);
    } catch (err) {
      console.log(err);
    }
  },

  async getOmamori(req, res) {
    try {
      const allOmamori = await modelOmamori.getOmamori();
      res.status(200).send(allOmamori);
    } catch (err) {
      console.log(err);
    }
  },
};
