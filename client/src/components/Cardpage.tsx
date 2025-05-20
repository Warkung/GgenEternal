import axios from "axios";
import { useEffect, useState } from "react";

function Cardpage() {
  const [data, setData] = useState<
    {
      [x: string]: string | undefined;
      unit_name: string;
    }[]
  >([]);

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
          key={index} // Assuming unit_code is unique and stable
          className="max-w-3xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              className="h-96 w-full object-cover p-4 rounded-3xl"
              src={unit.unit_image}
              alt={`Image of ${unit.unit_name}`} // Added more descriptive alt text
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h4 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                {unit.unit_name}
              </h4>
            </a>
            <h6 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {unit.unit_code}
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Cardpage;
