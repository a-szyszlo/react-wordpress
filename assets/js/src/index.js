import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Websites from './pages/Websites';
import Shops from './pages/Shops';
import Comarch from './pages/Comarch';
import Maintenance from './pages/Maintenance';


import '../../css/main.scss';

const App = () => {
    if (!pageData || !pageData.id) {
        return <div>Loading...</div>;
    }

    let mainContent = null;


    switch (Number(pageData.id)) {
        case 11:
            mainContent = <Home />;
            break;
        case 84:
            mainContent = <Websites />;
            break;
        case 86:
            mainContent = <Shops />;
            break;
        case 88:
            mainContent = <Comarch />;
            break;
        case 90:
            mainContent = <Maintenance />;
            break;
        default:
            mainContent = <div>Page Not Found</div>;
            break;
    }

    return (
        <>
            <Header />
            <main>
                {mainContent}
            </main>
            <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
