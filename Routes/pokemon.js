const express = require("express");
const router = express.Router();

const {getAllPokemon, getPokemonById} = require("../Controllers/pokemon");

// Gets all pokemon
router.route("/pokemon/").get(getAllPokemon);

//Gets ONE pokemon by id
router.route("/pokemon/:id").get(getPokemonById);

module.exports = router;