import React, { useState, useEffect } from "react";
import './ContentFaq.scss';
import AOS from 'aos';

const ContentFaq = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const faqData = window.acfData?.faq || [];
    const titleACF = window.acfData.titles_all|| [];

    const toggleAnswer = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    useEffect(() => {
        AOS.init({
            duration: 800, 
            once: true, 
        });
    }, []);
    return (
        <section className="content-faq" data-aos="fade-bottom">
            <div className="max-width-custom">
                <div className="services-text--subtitle global-subtitle">{titleACF["faq-subtitle"] || ""}</div>
                <h4 className="services-text--title global-title">{titleACF["faq-title"] || ""}</h4>
                <div className="faq">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-wrapper ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAnswer(index)}
                        >
                            <div className="faq-question">
                                {item.title}
                                <span className="arrow-icon">
                                    <i className={`arrow ${activeIndex === index ? 'rotate' : ''}`}></i>
                                </span>
                            </div>
                            <div
                                className={`faq-answer ${activeIndex === index ? 'show' : ''}`}
                                dangerouslySetInnerHTML={{ __html: item.text }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="gradient gradient--top-right mouse-move-img"></div>
        </section>
    );
};

export default ContentFaq;
