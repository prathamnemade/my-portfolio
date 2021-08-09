import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import './style.scss'

const AskQuestion = ({ line, key, _changeHandler, _enterHandler, isDisabled }) => {
    const [show, setShow] = useState(false)

    return (
        <div key={key} className="question-line">
            <div
                dangerouslySetInnerHTML={{ __html: line.path }}
            />
            <Typewriter
                options={{
                    autoStart: true,
                    delay: 75,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString(line?.question)
                        .pauseFor(500)
                        .callFunction(() => {
                            setShow(true)
                        })
                        .start();
                }}
            />
            {(show && !line.acknowledge) && <input type={line.type} placeholder="Enter here" disabled={isDisabled} onChange={(event) => _changeHandler(event)} name={line.value} onKeyUp={_enterHandler} />}
        </div>
    )
}

export default AskQuestion