import React from 'react';
import  Hero  from '../components/Hero';
import  {hero}  from "../constant/index";

const SolarRoofPage = () => {
    const solarRoofData = hero.find(item => item.id === 'solarRoof');
  
    return (
      <div>
        {/* Pass only model3Data as a prop here */}
        <Hero singleItem={solarRoofData} />
      </div>
    );
};

export default SolarRoofPage;