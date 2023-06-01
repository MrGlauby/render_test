const jsonData = require("../pokedex.json");
const allPokemon = jsonData;

const getAllPokemon = (req, res) => {
  try {
    res.status(200).json(allPokemon);
  } catch (err) {
    console.error(err);
    res.status(404).send(`Something is not working:, ${err}`);
  }
};

const getPokemonById = (req, res) => {
  try {
    const { id } = req.params;
    res.send(allPokemon[id - 1]);
  } catch (err) {
    console.error(err);
    res.status(404).send(`Something is not working: ${err}`);
  }
};

module.exports = { getAllPokemon, getPokemonById };
