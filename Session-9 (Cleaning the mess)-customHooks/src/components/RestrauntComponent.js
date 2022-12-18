import { useEffect, useState } from "react";

import CardComponent from "./CardComponent";
import { useParams } from "react-router-dom";

const RestrauntComponent = () => {
  const { id } = useParams();

  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData(params) {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=28.5121551&lng=77.3912953&menuId=${id}`
    );
    const json = await data.json();
    setResInfo(json);
  }

  return <CardComponent restraunt={resInfo} />;
};

export default RestrauntComponent;
