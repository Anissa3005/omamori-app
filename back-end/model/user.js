const knex = require("../db/knex");
const USER_TABLE = "users";
const bcrypt = require("bcrypt");

module.exports = {
  async getUser(user) {
    const { username, password } = user;

    const userInfo = await knex
      .select("id", "username", "password")
      .from(USER_TABLE)
      .where({
        username: username,
      })
      .returning("password");

    const dbPassword = userInfo[0].password;
    const checkPassword = await bcrypt.compare(password, dbPassword);
    return checkPassword;
  },

  async createUser(user) {
    const { username, password } = user;

    const userExist = await knex(USER_TABLE)
      .where({ username: username })
      .first();

    console.log(userExist);

    if (!userExist) {
      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = await knex(USER_TABLE)
        .insert({
          username: username,
          password: hashPassword,
        })
        .returning(["id", "password"]);
      return newUser;
    } else {
      return false;
    }
  },
};
