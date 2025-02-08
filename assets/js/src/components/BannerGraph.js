import React, { useState, useEffect } from "react";
import './BannerGraph.scss';
import Elem from '../../../img/elem2.svg'; 
import WooCommerce from '../../../img/WooCommerce.svg'; 
import WordPress from '../../../img/WordPress.svg'; 
import Comarch from '../../../img/Comarch.svg'; 

const BannerGraph = () => {
    const [activeServices, setActiveServices] = useState([false, false, false]);
    const [isPaused, setIsPaused] = useState(false); // Flaga dla zatrzymania animacji
  
    useEffect(() => {
      const timeouts = [
        setTimeout(() => setActiveServices([true, false, false]), 0),
        setTimeout(() => setActiveServices([true, true, false]), 3000),
        setTimeout(() => setActiveServices([true, true, true]), 7000),
      ];
  
      return () => {
        timeouts.forEach(clearTimeout);
      };
    }, []);

    const handleMouseEnter = () => setIsPaused(true); // Zatrzymanie
    const handleMouseLeave = () => setIsPaused(false); // Wznowienie
    
    return (
        <div 
            className={`svg-default ${isPaused ? "paused" : ""}`} // Dodanie klasy "paused"
        >
            <div className="circle-elem"><Elem /></div>
            <div 
                className={`service service-1 ${activeServices[0] ? "appear" : ""}`} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
            >
                <WooCommerce />
            </div>
            <div 
                className={`service service-2 ${activeServices[1] ? "appear" : ""}`} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
            >
                <Comarch />
            </div>
            <div 
                className={`service service-3 ${activeServices[2] ? "appear" : ""}`} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
            >
                <WordPress />
            </div>
        </div>
    );
};

export default BannerGraph;
