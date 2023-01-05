import { useEffect, useState } from "react";

import stateMap from "../utils/state-city.json";

const useCities = (state) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchData();
    async function fetchData() {
      //   const data = await fetch();
      const json = stateMap[state];
      setCities(json);
    }
  }, [state]);

  console.log("Cities::", cities);

  return cities;
};

export default useCities;
