import React from 'react'
import Typewriter from 'typewriter-effect';

const InformationContainer = () => {
    return (
        <div className="information-box">
            <div className="normal-tag-one">&lt;html&gt;</div>
            <div className="normal-tag-one">&lt;head&gt;</div>
            <div className="normal-tag-one">&lt;title&gt;
                <div className="hello-text">&nbsp;&nbsp;Hello !!&nbsp;&nbsp;</div>&lt;/title&gt;
            </div>
            <div className="normal-tag-one">
                <div>&lt;script type="
                    <span className="description-tag-text">who-am-i</span>"&gt;
                    <div className="who-am-i">
                        &nbsp;&nbsp;I am a
                        <span className="web-developer" >Web Developer</span>.
                        &nbsp;&nbsp;
                    </div>
                    &lt;/script&gt;
                </div>
            </div>
            {/* <div className="normal-tag-one">&lt;meta name="portfolio" content="See my Portfolio." /&gt;</div>
            <div className="normal-tag-one">&lt;meta name="connect" content="Email me here." /&gt;</div> */}
            <div className="normal-tag-one">&lt;/head&gt;</div>
            <div className="normal-tag-one">&lt;body&gt;</div>
            <div className="normal-tag-one">&lt;code&gt;&nbsp;
                <span className="typewritter-container">
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('PROGRAMMER.')
                                .pauseFor(1500)
                                .deleteAll()
                                .typeString('CONSULTANT.')
                                .pauseFor(1500)
                                .deleteAll()
                                .typeString('FREELANCER.')
                                .pauseFor(1500)
                                .start();
                        }}
                    />
                </span>
                &lt;/code&gt;
            </div>
            <div className="normal-tag-one">&lt;div&gt;</div>
            <div className="normal-tag-one">&lt;h3&gt;<div className="basic-container">My name is,</div>&lt;/h3&gt;</div>
            <div className="normal-tag-one">&lt;h1&gt;<div className="name-container">Prathamesh Nemade.</div>&lt;/h1&gt;</div>
            <div className="normal-tag-one">&lt;/div&gt;</div>
            <div className="normal-tag-one">&lt;/body&gt;</div>
            <div className="normal-tag-one">&lt;/html&gt;</div>
            {/* <div className="greeting-box">
                <div className="hello-text">
                    Hello !!
                    <div className="typewritter-container">
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('PROGRAMMER.')
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString('CONSULTANT.')
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString('FREELANCER.')
                                    .pauseFor(1500)
                                    .start();
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div className="basic-container">Myname is,</div>
                    <div className="name-container">PrathameshNemade;</div>
                </div>
            </div>
            <div className="description-box">
                <div className="who-am-i">
                    <div></div>
                    I am a
                    <b>Web Developer.</b>
                </div>
                <div className="about-info">
                    See my <b>Portfolio</b>.
                    Let's connect & <b>grow together</b>.
                    Connect on <b>LinkedIn</b>.
                    Checkout my product <b>here</b>.
                    Let's connect <b>here</b>.
                </div>
            </div> */}
        </div>
    )
}

export default InformationContainer