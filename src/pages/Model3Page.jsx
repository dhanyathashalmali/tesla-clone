import React from 'react';
import  Hero  from '../components/Hero';
import  {hero}  from "../constant/index";

const Model3Page = () => {
    const model3Data = hero.find(item => item.id === 'model3');
  
    return (
      <div>
        {/* Pass only model3Data as a prop here */}
        <Hero singleItem={model3Data} />
      </div>
    );
};

export default Model3Page;