// person-model.js
const db = require("../../db/db");


const addPerson = async (newPeople) => {
  const [newPersonId] = await db("people").insert(newPeople, ["id"]);

  return getPersonById(newPersonId);
};

const getPersonById = async (id) => {
  return db("people").where("id", id).first();
};

const getPerson = async () => {
  return db("people");
}


const deletePersonById = async (id) => {
  const deletedRowCount = await db("people").where("id", id).delete();

  if (deletedRowCount === 0) {
    throw new Error("Kişi bulunamadı veya silinemedi.");
  }

  return "Kişi başarıyla silindi.";
};


module.exports = {
  addPerson,
  getPersonById,
  getPerson,
  deletePersonById
};
