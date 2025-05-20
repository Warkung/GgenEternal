import axios from "axios";
import { use, useEffect, useState } from "react";

function Cardpage() {
  const [data, setData] = useState<
    {
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
    <div>
      {data.map((unit, index) => (
        <div key={index}>{unit.unit_name}</div>
      ))}
    </div>
  );
}
export default Cardpage;
