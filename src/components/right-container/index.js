import React from 'react'

const InformationContainer = () => {
    return (
        <div className="information-box">
            <div className="greeting-box">
                <div className="hello-text">
                    Hello !!
                </div>
                <div>
                    <div className="basic-container">My<br />name is,</div>
                    <div className="name-container">Prathamesh<br />Nemade;</div>
                </div>
            </div>
            <div className="description-box">
                And I am a
                <b>Web Developer.</b>
            </div>
        </div>
    )
}

export default InformationContainer