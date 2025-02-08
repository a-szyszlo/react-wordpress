import React, { useState, useEffect } from "react";
import AOS from 'aos';
import './ContactLink.scss';


const ContactLink = () => {
    
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,    
            once: true,     
        });
    }, []);
    return (
        <section className="contact-link">
            <div className="container max-width-custom" data-aos="zoom-out">
                <div className="contact-link-title global-title">Czy udało się znaleźć to, czego szukasz?</div>
                <div className="contact-link-text global-text">Kliknij poniższy przycisk i podziel się swoją potrzebą – razem zastanowimy się, jak Ci pomóc!</div>
                <button className="contact-link-button ">Kontakt</button>
            </div>
        </section>
    );
  };

export default ContactLink;