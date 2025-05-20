const mongoose = require("mongoose");

const unitSchema = new mongoose.Schema({
  unit_name: String,
  unit_code: String,
  unit_type: String,
  status: {
    cp: Number,
    hp: Number,
    en: Number,
    mov: Number,
    atk: Number,
    def: Number,
    mob: Number,
    tranform: String,
    terrain_cap: {
      space: String,
      atmospheric: String,
      ground: String,
      sea: String,
      underwater: String,
    },
  },
  unit_detail: {
    tag: [String],
    series: [String],
    mechanisms: String,
  },
  weapons: [
    {
      weapon_name: String,
      weapon_type: String,
      range: String,
      power: Number,
      en: Number,
      acc: String,
      crit: String,
      weapon_effect: [String],
      usage_restrictions: [String],
    },
  ],
  abilities_mods: {
    abilities: [
      {
        abilities_name: String,
        detail: String,
      },
    ],
    modification: String,
  },
});

const UnitModel = mongoose.model("Unit", unitSchema);

module.exports = UnitModel;

//
