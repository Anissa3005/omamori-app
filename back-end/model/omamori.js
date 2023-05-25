const knex = require("../db/knex");

const OMAMORI_TABLE = "omamori";

module.exports = {
  async createOmamori(omamori) {
    const { idUser, img, latitude, longitude } = omamori;
    const newOmamori = await knex(OMAMORI_TABLE)
      .insert({
        id_user: idUser,
        img_url: img,
        latitude: latitude,
        longitude: longitude,
      })
      .returning(["img_url", "latitude", "longitude"]);

    console.log(newOmamori);
    return newOmamori;
  },
};
