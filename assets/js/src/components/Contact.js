import React, { useEffect, useState } from 'react';
import './Contact.scss';
import Elem from '../../../img/elem-reverse.svg'; 
import AOS from 'aos';

const Contact = () => {
    const [formHTML, setFormHTML] = useState('');

    useEffect(() => {
        if (window.contactFormData && window.contactFormData.shortcode) {
            setFormHTML(window.contactFormData.shortcode);

           
            const interval = setInterval(() => {
                if (window.wpcf7 && typeof window.wpcf7.initForm === 'function') {
                    window.wpcf7.initForm(document.querySelector('.wpcf7'));
                    clearInterval(interval);
                }
            }, 500);

            return () => clearInterval(interval); 
        }
        AOS.init({
            duration: 800, 
            once: true, 
        });
    }, []);

    return (
        <section className="contact" id='kontakt'>
        <div className="contact--wrapper">
            <div className="contact-content elem" data-aos="fade-right" data-aos-delay="100">
                <div className="services-text--subtitle global-subtitle">Porozmawiajmy o Twoim projekcie</div>
                <h4 className="services-text--title global-title">Kontakt</h4>
                <div className="contact-description global-text">
                    Jeśli masz jakiekolwiek pytania, nie wahaj się skontaktować z nami za pomocą poniższego formularza.
                </div>
                <div className='contact-description--form'>
                {formHTML ? (
                    <div dangerouslySetInnerHTML={{ __html: formHTML }} />
                ) : (
                    <p>Ładowanie formularza...</p>
                )}
                </div>
            </div>
            {/* <div className='contact-graph--image' data-aos="fade-left" data-aos-delay="200"><img src="http://localhost/szysz/wp-content/uploads/2024/12/laptop-820274_1280.jpg" alt="Content" /></div> */}
            <div className="circle-elem"><Elem /></div>
            {/* <div className="gradient gradient--center-center mouse-move-img"></div> */}
        </div>
        <div className="contact-graph" data-aos="fade-top">
            <div className='contact-graph--background'><img src="https://aszyszlo.pl/wp-content/uploads/2024/12/laptop-4906312_1920.jpg" alt="Content" /></div>
        </div>
        <div className="contact-circle">
            <div className='contact-graph--background'></div>
        </div>
        </section>
    );
};

export default Contact;
