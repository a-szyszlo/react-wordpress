import React from 'react';
import MainBanner from '../components/MainBanner';
import Services from '../components/Services';
import ContentWhy from '../components/ContentWhy';
import ContentCoop from '../components/ContentCoop';
import ContentFaq from '../components/ContentFaq';
import ContactLink from '../components/ContactLink';
import Contact from '../components/Contact';
import Wave from '../components/Wave';


const Home = () => {
    return (
        <>
            <MainBanner />
            <Wave />
            <Services />
            <ContactLink />
            <ContentWhy />
            <ContentCoop />
            <ContentFaq />
            <Contact />
        </>
    );
};

export default Home;