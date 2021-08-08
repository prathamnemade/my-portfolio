import React from 'react'
import Typewriter from 'typewriter-effect';

const HomeSection = () => {
    return (
        <div id="home-section" className="home-section common-section">
            <div className="normal-tag-one">&lt;html&gt;</div>
            <div className="normal-tag-one">&lt;head&gt;</div>
            <div className="normal-tag-one">&lt;title&gt;
                <div className="hello-text">&nbsp;Hello!!&nbsp;</div>&lt;/title&gt;
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
                                .typeString('CONSULTANT AND MENTOR.')
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
        </div>
    )
}

export default HomeSection