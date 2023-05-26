const knex = require("../db/knex");

const OMAMORI_TABLE = "omamori";

module.exports = {
  async createOmamori(omamori) {
    const { userId, imgUrl, latitude, longitude } = omamori;
    const newOmamori = await knex(OMAMORI_TABLE)
      .insert({
        id_user: userId,
        img_url: imgUrl,
        latitude: latitude,
        longitude: longitude,
      })
      .returning(["img_url", "latitude", "longitude"]);

    console.log(newOmamori);
    return newOmamori;
  },

  async getOmamori() {
    const allOmamori = await knex
      .select("img_url", "latitude", "longitude")
      .from("omamori");

    return allOmamori;
  },
};
