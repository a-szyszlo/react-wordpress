import React, { useEffect } from 'react';
import './Services.scss';
import AOS from 'aos';
import Wave from '../../../img/wave.svg';

const Services = () => {
    const services = window.acfData?.services || [];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,    
            once: true,    
        });
    }, []);

    return (
        <section className="services">
            <div className="container max-width-custom">
                <div className="services-text" data-aos="fade-up">
                    <div className='services-text--subtitle global-subtitle'>Zakres usług</div>
                    <h4 className='services-text--title global-title'>Jak mogę Ci pomóc?</h4>
                    <div className='services-text--text global-text'>
                        <p>Potrzebujesz strony internetowej, sklepu online lub rozbudowy swojej witryny? Jesteś we właściwym miejscu! Zrealizuję projekt, który odpowiada na Twoje potrzeby.</p>
                    </div>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="service-item elem" 
                            data-aos="fade-up" 
                            data-aos-delay={index * 100} 
                        >
                            {service.image && <i className={`dashicons ${service.image}`} aria-hidden="true"></i>}
                            <h3>{service.title}</h3>
                            <p>{service.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="gradient-wrapper max-width-custom">
                <div className="gradient gradient--center-center mouse-move-img"></div>
            </div>
        </section>
    );
};

export default Services;
