import React from 'react';
import SurveyList from './components/SurveyList';

const surveysData = [
  { id: 1, title: 'Evaluación de Desempeño Anual', description: 'Evaluación para todos los empleados.' },
  { id: 2, title: 'Encuesta de Satisfacción Laboral', description: 'Mide el nivel de satisfacción en la empresa.' },
  { id: 3, title: 'Feedback 360° - Gerencia', description: 'Evaluación del desempeño de líderes.' },
];

const Encuestas360 = () => {
  return (
    <div className="encuestas-container">
      <h1>Evaluación de Desempeño</h1>
      <p>Bienvenida al módulo de Evaluación de Desempeño. Aquí podrás gestionar encuestas y reportes.</p>
      
      {/* Nuevo botón para crear encuestas */}
      <button>Crear Nueva Encuesta</button>

      {/* Título para la lista de encuestas */}
      <h3>Encuestas Disponibles</h3>
      
      <SurveyList surveys={surveysData} /> 
      
    </div>
  );
};

export default Encuestas360;