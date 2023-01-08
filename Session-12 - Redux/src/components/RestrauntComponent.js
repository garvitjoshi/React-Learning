import { useEffect, useState } from "react";

import CardComponent from "./CardComponent";
import { addItem } from "./cartSlice";
import { useDispatch } from "react-redux";
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

  const dispatch = useDispatch();

  const addCartItem = () => {
    dispatch(
      addItem({
        name: "pizza",
      })
    );
  };

  return (
    <>
      <CardComponent restraunt={resInfo} />
      <button className="font-bold m-5 p-5 bg-green-50" onClick={addCartItem}>
        Add Item to cart
      </button>
    </>
  );
};

export default RestrauntComponent;
