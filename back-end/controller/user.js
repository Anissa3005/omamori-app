const modelUser = require("../model/user");

module.exports = {
  async getUser(req, res) {
    try {
      const userInfo = await modelUser.getUser(req.body);
      if (userInfo.length > 0) {
        return res.status(201).send(true);
      }
      return res.status(404).send(false);
    } catch (err) {
      console.log(err);
    }
  },
};
