/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("omamori").del();
  await knex("omamori").insert([
    {
      id_user: 1,
      img_url:
        "https://images.squarespace-cdn.com/content/v1/5d3ee66abacfa00001df6854/1590714683505-8SWJRFYQZUSQJDEWK9MO/332--f5b03994f7c9539684b7b4f56035a19b.jpg",
      latitude: "35.6764",
      longitude: "139.6993",
    },
    {
      id_user: 2,
      img_url: "https://2ponderful.com/wp-content/uploads/2017/01/omamori.jpg",
      latitude: "35.6259",
      longitude: "139.2503",
    },
    {
      id_user: 3,
      img_url: "https://i.ebayimg.com/images/g/CD4AAOSwPetj~jr1/s-l1600.jpg",
      latitude: "35.7148",
      longitude: "139.7967",
    },
  ]);
};
