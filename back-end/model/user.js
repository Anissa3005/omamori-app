const knex = require("../db/knex");
const USER_TABLE = "users";

module.exports = {
  async getUser(user) {
    console.log(user);
    const { username, password } = user;
    const userInfo = await knex
      .select("id", "username", "password")
      .from(USER_TABLE)
      .where({
        username: username,
        password: password,
      })
      .returning(["id", "username"]);

    return userInfo;
  },
};
