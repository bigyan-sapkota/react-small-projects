import React, { useState, useEffect } from "react";
import Axios from "axios";

const AgePredictor = () => {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  };
  return (
    <div>
      <h1 className="h1">Age Predictor</h1>

      <div className="input-button">
        <input
          type="text"
          placeholder="Enter Your Name..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="form-input"
        />
        <button onClick={fetchData} className="btn">
          Predict Age
        </button>
      </div>

      <p className="age-paragraph">Predicted Age : {predictedAge?.age}</p>
      <p className="age-paragraph">Name : {predictedAge?.name}</p>
      <hr className="bg-black mt-4" />
      <p className="mt-5 text-[18px]">
        <span className="font-bold text-blue-600">Note: </span>Your name will
        only be shown if it is in the database.
      </p>
    </div>
  );
};

export default AgePredictor;
