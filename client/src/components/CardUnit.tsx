import axios from "axios";
import { useEffect, useState } from "react";

type Unit = {
  unit_name: String;
  unit_code: String;
  unit_type: String;
  unit_image: any;
  unit_status: {
    cp: String;
    hp: String;
    en: String;
    mov: String;
    atk: String;
    def: String;
    mob: String;
    tranform: String;
    terrain_cap: {
      space: String;
      atmospheric: String;
      ground: String;
      sea: String;
      underwater: String;
    };
  };
  unit_detail: {
    tag: [String];
    series: [String];
    mechanisms: String;
  };
  unit_weapons: [
    {
      weapon_name: String;
      weapon_type: String;
      range: String;
      power: Number;
      en: Number;
      acc: String;
      crit: String;
      weapon_effect: [String];
      usage_restrictions: [String];
    }
  ];
  unit_abilities_mods: {
    abilities: [
      {
        abilities_name: String;
        detail: String;
      }
    ];
    modification: String;
  };
};

function CardUnit() {
  const [data, setData] = useState<Unit[]>([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/api/eternal/units");
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-3 m-5">
      {data.map((unit, index) => (
        <div
          key={index}
          className="flex flex-col  bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:w-5xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={unit.unit_image}
            alt={`${unit.unit_name} image`}
          />
          <div className="flex flex-col p-4 leading-normal align-top">
            <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {unit.unit_name}
            </h5>
            <h6 className="font-normal text-gray-700 dark:text-gray-400">
              {unit.unit_code}
            </h6>
            <div className="text-gray-700 dark:text-gray-400 text-shadow-xs mt-2">
              <div className="font-bold text-gray-700 dark:text-gray-400 text-shadow-xs">
                CP:{unit.unit_status.cp}
              </div>
              <div className="flex gap-3">
                <p>Atk:{unit.unit_status.atk}</p>
                <p>Def:{unit.unit_status.def}</p>
                <p>Mov: {unit.unit_status.mov}</p>
                <p>En: {unit.unit_status.en}</p>
                <p>HP: {unit.unit_status.hp}</p>
                <p>Mob: {unit.unit_status.mob}</p>
                <p>Tranform: {unit.unit_status.tranform}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CardUnit;
