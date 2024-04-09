const { Router } = require("express");

const router = Router();

const pets = [{ pet: "Olivia", specie: "dog" }];

router.param("pet", (req, res, next, pet) => {
  console.log("param pet", pet);
  if (pet.length > 3) {
    req.pet = pet;
    return next();
  }
  return res.status(400).send("Pet name must have more than 3 characters");
});

router.get("/", (req, res) => {
  res.status(200).send(pets);
});

router.get("/:pet", (req, res) => {
  const { pet } = req;
  console.log("pet", pet);
  const petFound = pets.find((p) => p.pet === pet);
  return res.status(200).json(petFound);
});

router.post("/", (req, res) => {
  const { pet, specie } = req.body;
  pets.push({ pet, specie });
  res.status(201).send(pets);
});

module.exports = router;
