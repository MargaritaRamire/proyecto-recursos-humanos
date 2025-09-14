// src/modules/encuestas360/components/SurveyCard.jsx
import React from "react";
import "../styles/SurveyCard.css";

function SurveyCard({ title, description }) {
  return (
    <div className="survey-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="survey-btn">Responder</button>
    </div>
  );
}

export default SurveyCard;
