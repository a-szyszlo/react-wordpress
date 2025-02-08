import React, { useState, useEffect } from "react";
import './ContentCoop.scss';
import Talk from '../../../img/coop/talk.svg'; 
import Analysis from '../../../img/coop/analysis.svg';
import Support from '../../../img/coop/technical-support.svg'; 
import Develop from '../../../img/coop/web-development.svg';
import Verify from '../../../img/coop/verification.svg';
import Finish from '../../../img/coop/finish.svg';
import AOS from 'aos';

const ContentCoop = () => {
    const titleACF = window.acfData.titles_all|| [];
    const stageACF = window.acfData.etapy|| [];

    useEffect(() => {
        AOS.init({
            duration: 800, 
            once: true, 
        });
    }, []);
    return (
        <section className="content-coop">
            <div className="text">
                <div className="services-text--subtitle global-subtitle" data-aos="fade-right">{titleACF["coop-subtitle"] || ""}</div>
                <h4 className="services-text--title global-title" data-aos="fade-right">{titleACF["coop-title"] || ""}</h4>
                <div className="services-text--text global-text">
                <div className="diagram diagram-desktop">
                    <div className="first-line" data-aos="fade-right">
                        <span>
                            <div className="img-with-line" >
                                <div className='svg-wrapper'><Talk /></div>
                                <hr/>
                            </div>
                            <div className="title" ><strong>{stageACF[0]["title"] || ""}</strong></div>
                            <p dangerouslySetInnerHTML={{ __html: stageACF[0]["text"] || "" }}></p>
                        </span>
                        <span>
                            <div className="img-with-line" >
                                <div className='svg-wrapper'><Analysis /></div>
                                <hr/>
                            </div>
                            <div className="title" ><strong>{stageACF[1]["title"] || ""}</strong></div>
                            <p dangerouslySetInnerHTML={{ __html: stageACF[1]["text"] || "" }}></p>
                        </span>
                        <span className="third">
                            <div className="img-with-line" >
                                <div className='svg-wrapper'><Develop /></div>
                                <hr/>
                            </div>
                            <div className="title" ><strong>{stageACF[2]["title"] || ""}</strong></div>
                            <p dangerouslySetInnerHTML={{ __html: stageACF[2]["text"] || "" }}></p>
                        </span>
                        
                    </div>
                    <div className="second-line"data-aos="fade-left">
                        <span className="first">
                            <div className="img-with-line">
                                <hr className="first"  />
                                <div className='svg-wrapper'><Verify /></div>
                                <hr/>
                            </div>
                            <div className="title" ><strong>{stageACF[3]["title"] || ""}</strong></div>
                            <p dangerouslySetInnerHTML={{ __html: stageACF[3]["text"] || "" }}></p>
                        </span>
                        <span>
                            <div className="img-with-line">
                                <div className='svg-wrapper'><Finish /></div>
                                <hr/>
                            </div>
                            <div className="title" ><strong>{stageACF[4]["title"] || ""}</strong></div>
                            <p dangerouslySetInnerHTML={{ __html: stageACF[4]["text"] || "" }}></p>
                        </span>
                        <span>
                            <div className="img-with-line" >
                                <div className='svg-wrapper'><Support /></div>
                            </div>
                            <div className="title" ><strong>{stageACF[5]["title"] || ""}</strong></div>
                            <p dangerouslySetInnerHTML={{ __html: stageACF[5]["text"] || "" }}></p>
                        </span>
                    </div>
                </div>
                <div className="diagram diagram-mobile">
                    <div className="first-line" data-aos="fade-right">
                        <span>
                            <div className="img-with-line" >
                                <div className='svg-wrapper'><Talk /></div>
                                <hr/>
                            </div>
                            <div className="title" ><strong>{stageACF[0]["title"] || ""}</strong></div>
                            <p dangerouslySetInnerHTML={{ __html: stageACF[0]["text"] || "" }}></p>
                        </span>
                        <span className="third">
                            <div className="img-with-line" >
                                <div className='svg-wrapper'><Analysis /></div>
                                <hr/>
                            </div>
                            <div className="title" ><strong>{stageACF[1]["title"] || ""}</strong></div>
                            <p dangerouslySetInnerHTML={{ __html: stageACF[1]["text"] || "" }}></p>
                        </span>
                        
                    </div>
                    <div className="second-line"data-aos="fade-left">
                        <span className="first">
                            <div className="img-with-line">
                                <hr className="first"  />
                                <div className='svg-wrapper'><Develop /></div>
                                <hr/>
                            </div>
                            <div className="title" ><strong>{stageACF[2]["title"] || ""}</strong></div>
                            <p dangerouslySetInnerHTML={{ __html: stageACF[2]["text"] || "" }}></p>
                        </span>
                        <span className="third">
                        <div className="img-with-line" >
                                <div className='svg-wrapper'><Verify /></div>
                                <hr/>
                            </div>
                            <div className="title" ><strong>{stageACF[3]["title"] || ""}</strong></div>
                            <p dangerouslySetInnerHTML={{ __html: stageACF[3]["text"] || "" }}></p>
                        </span>
                    </div>
                    <div className="third-line" data-aos="fade-left">
                        <span className="first">
                            <div className="img-with-line">
                                <hr className="first"  />
                                <div className='svg-wrapper'><Finish /></div>
                                <hr/>
                            </div>
                            <div className="title" ><strong>{stageACF[4]["title"] || ""}</strong></div>
                            <p dangerouslySetInnerHTML={{ __html: stageACF[4]["text"] || "" }}></p>
                        </span>
                        <span>
                            <div className="img-with-line" >
                                <div className='svg-wrapper'><Support /></div>
                            </div>
                            <div className="title" ><strong>{stageACF[5]["title"] || ""}</strong></div>
                            <p dangerouslySetInnerHTML={{ __html: stageACF[5]["text"] || "" }}></p>
                        </span>
                    </div>
                </div>
                </div>
            </div>
            <div className="gradient gradient--top-right mouse-move-img"></div>
        </section>
    );
};

export default ContentCoop;