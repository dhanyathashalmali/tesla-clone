import React from 'react';
import  Hero  from '../components/Hero';
import  {hero}  from "../constant/index";

const  SolarPanelsPage = () => {
    const solarPanelsData = hero.find(item => item.id === 'solarPanels');
  
    return (
      <div>
        {/* Pass only model3Data as a prop here */}
        <Hero singleItem={solarPanelsData} />
      </div>
    );
};

export default SolarPanelsPage;