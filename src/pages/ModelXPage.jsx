import React from 'react';
import  Hero  from '../components/Hero';
import  {hero}  from "../constant/index";

const ModelXPage = () => {
    const modelxData = hero.find(item => item.id === 'modelX');
  
    return (
      <div>
        {/* Pass only model3Data as a prop here */}
        <Hero singleItem={modelxData} />
      </div>
    );
};

export default ModelXPage;