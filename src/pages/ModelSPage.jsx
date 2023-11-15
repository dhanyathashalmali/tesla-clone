import React from 'react';
import  Hero  from '../components/Hero';
import  {hero}  from "../constant/index";

const ModelSPage = () => {
    const modelsData = hero.find(item => item.id === 'modelS');
  
    return (
      <div>
        {/* Pass only model3Data as a prop here */}
        <Hero singleItem={modelsData} />
      </div>
    );
};

export default ModelSPage;