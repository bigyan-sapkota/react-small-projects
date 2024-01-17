import React, { useState, useEffect } from "react";
import Axios from "axios";

const CatFactGenerator = () => {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  return (
    <div>
      <div>
        <h1 className="h1">Cat Fact Generator</h1>
        <p className="cat-paragraph">{catFact}</p>
        <button onClick={fetchCatFact} className="btn">
          Get Fact
        </button>
      </div>
    </div>
  );
};

export default CatFactGenerator;
