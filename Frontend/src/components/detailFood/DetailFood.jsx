import { useEffect, useState } from "react";
import foodProvider from "../../utils/foodProvider/foodProvider";
import { useParams } from "react-router-dom";

const DetailFood = () => {
  const [info, setInfo] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const getdetail = async () => {
      try {
        const data = await foodProvider.getFoodById(id);
        if (data) {
          return setInfo(data);
        } else {
          alert("No se encontro el producto");
        }
      } catch {
        console.log(error.message);
      }
    };
    getdetail();
  }, []);

  return (
    <div>
      <p>{info.name}</p>
      <p>{info.image ? info.image : "Default image"}</p>
      <p>$ {info.price}</p>
    </div>
  );
};

export default DetailFood;
