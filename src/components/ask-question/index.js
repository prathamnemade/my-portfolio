import React, { useEffect, useState } from 'react'
import './style.scss'

const AskQuestion = ({ line, key, _changeHandler, _enterHandler, isDisabled }) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 3500);
    }, [])

    return (
        <div key={key} className="question-line">
            <div
                dangerouslySetInnerHTML={{ __html: line.path }}
            />
            <div className="typewriter">
                <p>{line?.question}</p>
            </div>
            {show && <input placeholder="Enter here" disabled={isDisabled} onChange={(event) => _changeHandler(event)} name={line.value} onKeyUp={_enterHandler} />}
        </div>
    )
}

export default AskQuestion