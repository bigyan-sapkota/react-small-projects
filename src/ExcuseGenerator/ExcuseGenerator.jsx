import React, { useState, useEffect } from "react";
import Axios from "axios";

const ExcuseGenerator = () => {
  const [excuseCategory, setExcuseCategory] = useState("");
  const [excuse, setExcuse] = useState("");

  const clickHandler = () => {
    Axios.get(
      `https://excuser-three.vercel.app/v1/excuse/${excuseCategory}/`
    ).then((res) => {
      setExcuse(res.data[0].excuse);
    });
  };

  return (
    <div className="m-10">
      <input
        type="text"
        placeholder="Enter category..."
        value={excuseCategory}
        onChange={(e) => {
          setExcuseCategory(e.target.value);
        }}
      />
      <button onClick={clickHandler}>Get Excuse</button>
      <h1>Excuse is: {excuse}</h1>
    </div>
  );
};

export default ExcuseGenerator;
