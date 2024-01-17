import React, { useState, useEffect } from "react";
import Axios from "axios";

const CatFactGenerator = () => {
  const [catFact, setCatFact] = useState("");
  const [count, setCount] = useState(0);

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div>
        <h1 className="h1">Cat Fact Generator</h1>
        <p className="cat-paragraph">
          {count === 0 ? "Click on Get Fact to see facts" : catFact}
        </p>
        <button onClick={fetchCatFact} className="btn">
          Get Fact
        </button>
      </div>
    </div>
  );
};

export default CatFactGenerator;
