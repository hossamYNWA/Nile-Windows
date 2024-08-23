import Config from "../components/configSection/Config.jsx";
import { useEffect } from "react";
import {winSelectActions} from "../components/store/WinConfigOptions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//fetching data function
async function fetchDataFromUrl(category) {
  try {
    const response = await fetch(`http://localhost:8000/api/v1/${category}`);
    const  data  = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch data from the database");
    }

    return data;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}

function WinConfiguration() {
  const categories = [
    "material",
    "company",
    "OpeningSystem",
    "typeOfUnit",
    "profile",
    "frame",
    "sash",
    "Layout",
    "fanlight",
    "OpeningLayout",
    "profileColor",
    "glass",
    "glassColor",
];
const dispatch = useDispatch();
useEffect(() => {
  categories.forEach((cat) => {
      fetchDataFromUrl(cat).then((data) => {
        if(data){
          dispatch(winSelectActions.addOptions({ title: cat, options: data }));
        }
        else{
          throw new Error("request returned empty");
        }
      }).catch((error)=>{
        console.error("error in fetching config data: " + error)
      });
  });
  return () => {
    dispatch(winSelectActions.clearData());
  };
}, []);
const configData = useSelector((state) => state.winConfigOptions);
return <Config />;
}

export default WinConfiguration;
