import React from 'react';
import MainBanner from '../components/MainBanner';
import ContentCoop from '../components/ContentCoop';
import ContentFaq from '../components/ContentFaq';
import ContactLink from '../components/ContactLink';
import Contact from '../components/Contact';

const Comarch = () => {
    return (
        <>
            <MainBanner />
            <ContactLink />
            <ContentCoop />
            <ContentFaq />
            <Contact />
        </>
    );
};

export default Comarch;