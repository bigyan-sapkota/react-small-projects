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
        <p>{catFact}</p>
        <button onClick={fetchCatFact}>Get Fact</button>
      </div>
    </div>
  );
};

export default CatFactGenerator;
