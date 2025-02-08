import React, { useEffect } from 'react';
import AOS from 'aos';
import './MainBanner.scss';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import BannerGraph from './BannerGraph';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const MainBanner = () => {
    const banners = window.acfData.banners || [];


    useEffect(() => {
        AOS.init({
            duration: 1000, 
            offset: 200,    
            once: true,     
        });
    }, []);

    return (
        <div className="main-banner">
            {banners.length > 1 ? (
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar,EffectFade]}
                    spaceBetween={50}
                    navigation
                    pagination={{ clickable: true }}
                    effect="fade"
                    loop={true}
                >
                    {banners.map((banner, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide-content">
                                <div className="slide-content__wrapper">
                                    <div className="banner-text">
                                        <div className="banner-subtilte">{banner.banner_subtitle || ""}</div>
                                        <h2 className="banner-tilte">{banner.banner_title || ""}</h2>
                                        <p>{banner.banner_description || "Default description for the banner."}</p>
                                    </div>
                                </div>
                                <div className="slide-content__wrapper">
                                    <img
                                        className="banner-image"
                                        src={banner.image.url || "https://via.placeholder.com/1200x400"}
                                        alt={banner.banner_title}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="single-banner">
                    <div className="banner-text" data-aos="fade-up">
                        <div className="banner-subtilte">{banners[0]?.subtitle || ""}</div>
                        <h1 className="banner-tilte">{banners[0]?.title || ""}</h1>
                        <p>{banners[0]?.description || ""}</p>
                    </div>
                    <BannerGraph />
                </div>
            )}
           
            <div className="gradient-wrapper max-width-custom">
                <div className="gradient gradient--top-left mouse-move-img"></div>
            </div>
        </div>
    );
};

export default MainBanner;
