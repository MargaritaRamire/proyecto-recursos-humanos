// src/modules/encuestas360/components/SurveyList.jsx
import React from "react";
import SurveyCard from "./SurveyCard";
import "../styles/SurveyList.css";

function SurveyList({ surveys }) {
  return (
    <div className="survey-list">
      {surveys.map((survey) => (
        <SurveyCard
          key={survey.id}
          title={survey.title}
          description={survey.description}
        />
      ))}
    </div>
  );
}

export default SurveyList;
