import React, { useState, useEffect } from "react";
import Axios from "axios";

const ExcuseGenerator = () => {
  const [excuseCategory, setExcuseCategory] = useState("");
  const [excuse, setExcuse] = useState("Your Excuse here!");

  const clickHandler = () => {
    Axios.get(
      `https://excuser-three.vercel.app/v1/excuse/${excuseCategory}/`
    ).then((res) => {
      setExcuse(res.data[0].excuse);
    });
  };

  return (
    <div className="m-10">
      <h1 className="h1">Excuse Generator</h1>
      <div className="input-button">
        <input
          type="text"
          placeholder="Enter category..."
          value={excuseCategory}
          onChange={(e) => {
            setExcuseCategory(e.target.value);
          }}
          className="form-input"
        />
        <button onClick={clickHandler} className="btn">
          Get Excuse
        </button>
      </div>

      <p className="excuse-paragraph">
        <span className="font-bold">Your Excuse is: </span>
        {excuse}
      </p>
      <hr className="mt-6" />
      <p className="excuse-paragraph">
        Available Categories are:{"  "}
        <span className="italic">
          family, office, children, college, party, funny, unbelievable,
          developers, gaming
        </span>
      </p>
    </div>
  );
};

export default ExcuseGenerator;
