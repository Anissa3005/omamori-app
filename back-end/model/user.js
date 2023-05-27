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
    return [checkPassword, userInfo[0].id];
  },

  async createUser(user) {
    const { newUser, newPassword } = user;

    const userExist = await knex(USER_TABLE)
      .where({ username: newUser })
      .first();

    console.log(userExist);

    if (!userExist) {
      const hashPassword = await bcrypt.hash(newPassword, 10);
      const createNewUser = await knex(USER_TABLE)
        .insert({
          username: newUser,
          password: hashPassword,
        })
        .returning(["id", "password"]);
      return createNewUser;
    } else {
      return false;
    }
  },
};
