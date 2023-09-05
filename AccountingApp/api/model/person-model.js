// person-model.js
const db = require("../../db/db");


const addPerson = async (newPeople) => {
  // Veritabanına yeni kişiyi ekle
  const [newPersonId] = await db("people").insert(newPeople, ["id"]);

  // Eklenen kişiyi getir ve döndür
  return getPersonById(newPersonId);
};

const getPersonById = async (id) => {
  return db("people").where("id", id).first();
};

const getPerson = async () => {
  return db("people");
}

module.exports = {
  addPerson,
  getPersonById,
  getPerson
};
