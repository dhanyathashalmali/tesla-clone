import React from 'react';
import  Hero  from '../components/Hero';
import  {hero}  from "../constant/index";

const ModelYPage = () => {
    const modelyData = hero.find(item => item.id === 'modelY');
  
    return (
      <div>
        {/* Pass only model3Data as a prop here */}
        <Hero singleItem={modelyData} />
      </div>
    );
};

export default ModelYPage;