// person-router.js
const express = require("express");
const router = express.Router();
const personModel = require("../model/person-model");

router.post("/kisiler", async (req, res, next) => {
  try {
    let insertedPerson = await personModel.addPerson(req.body);
    console.log("Yeni kişi eklendi:", insertedPerson);
    res.status(200).json(insertedPerson);
  } catch (error) {
    console.error("Kişi eklenirken bir hata oluştu:", error);
    res.status(500).json({ error: "Kişi eklenirken bir hata oluştu." });
  }
});

router.get("/kisiler", async (req, res, next) => {
  try {
    const people = await personModel.getPerson();
    res.status(200).json(people);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Sunucu hatası" });
  }
});

router.delete("/kisiler/:id", async (req, res, next) => {
  try {
    const personId = req.params.id;

    await personModel.deletePersonById(personId);

    res.status(200).json({ message: "Kişi başarıyla silindi." });
  } catch (error) {
    console.error("Kişi silinirken bir hata oluştu:", error);
    res.status(500).json({ error: "Kişi silinirken bir hata oluştu." });
  }
});

router.put("/kisiler/:id", async (req, res, next) => {
  try {
    const personId = req.params.id;
    const updatedData = req.body;

    const editedPerson = await personModel.editPersonById(personId, updatedData);

    if (editedPerson) {
      res.status(200).json(editedPerson);
    } else {
      res.status(404).json({ error: "Kişi bulunamadı." });
    }
  } catch (error) {
    console.error("Kişi düzenlenirken bir hata oluştu:", error);
    res.status(500).json({ error: "Kişi düzenlenirken bir hata oluştu." });
  }
});


module.exports = router;
