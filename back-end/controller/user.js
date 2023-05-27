const user = require("../model/user");
const modelUser = require("../model/user");

module.exports = {
  async getUser(req, res) {
    try {
      const userInfo = await modelUser.getUser(req.body);
      const userId = JSON.stringify(userInfo[1]);
      if (userInfo[0]) {
        return res.status(201).send(userId);
      } else {
        return res.status(404).send(false);
      }
    } catch (err) {
      console.log(err);
    }
  },

  async createUser(req, res) {
    try {
      const userCreat = await modelUser.createUser(req.body);
      if (!userCreat) {
        return res.status(400).send("user already exist");
      }
      return res.status(201).send(true);
    } catch (err) {
      console.log(err);
    }
  },
};
