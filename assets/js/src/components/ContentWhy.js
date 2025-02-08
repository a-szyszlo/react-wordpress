import React, { useState, useEffect } from "react";
import './ContentWhy.scss';
import AOS from 'aos';
const ContentWhy = () => {
    const aboutACF = window.acfData.about || [];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,    
            once: true,     
        });
    }, []);
    return (
        <section className="content-why">
            <div className="image" data-aos="fade-right">
            <img
                src={aboutACF["about-image"]?.url || "default-image-link.jpg"}
                alt={aboutACF["about-image"]?.alt || "Default Alt Text"}
            />
            </div>
            <div className="text" data-aos="fade-left">
                <div className='text-wrapper'>
                <div className="services-text--subtitle global-subtitle">{aboutACF["about-subtitle"] || ""}</div>
                <h4 className="services-text--title global-title">{aboutACF["about-title"] || ""}</h4>
                <div className="services-text--text global-text" dangerouslySetInnerHTML={{ __html: aboutACF["about-text"] || "" }}>
                   
                </div>
                </div>
            </div>
            <div className="gradient gradient--top-right mouse-move-img"></div>
        </section>
    );
};

export default ContentWhy;