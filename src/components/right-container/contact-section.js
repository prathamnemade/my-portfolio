import React, { useState } from 'react'
import AskQuestion from '../ask-question'

const PATH = '<div class="Cur_Input_Line"> <span class="Ter_Green">Prathamesh</span> <span class="Ter_Gray">:</span> <span class="Ter_Blue">~/Desktop/Website</span> <span class="Ter_Gray">$ </span> </div>'
const QUESTIONS = [
    { question: 'Please enter your full name: ', value: 'name' },
    { question: 'Please enter your email id: ', value: 'email' },
    { question: 'Please type your message here: ', value: 'message' },
    { question: 'Do you want to send email? (Y/N): ', value: 'confirm' }
]

const ContactSection = () => {
    const [indexQuestion, setIndexQuestion] = useState(0)
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [enterInput, setEnterInput] = useState([
        { path: PATH, question: QUESTIONS[indexQuestion].question, answer: '', value: QUESTIONS[indexQuestion].value }
    ])

    const _changeHandler = (event) => {
        const { value, name } = event.target
        setContactForm({ ...enterInput, ...{ [name]: value } })
    }

    const _enterHandler = (event) => {
        if (event.key === "Enter") {
            let temp = enterInput
            if (QUESTIONS.length > indexQuestion + 1) {
                temp.push({
                    path: PATH,
                    question: QUESTIONS[indexQuestion + 1].question,
                    answer: '',
                    value: QUESTIONS[indexQuestion + 1].value
                })
                setIndexQuestion(indexQuestion + 1)
                setEnterInput(temp)
            }
        }
    }

    return <div id="contact-section" className="common-section" >
        <div className="heading">CONTACT</div>
        <div className="question-pattern">
            {enterInput && enterInput.map((line, index) =>
                <AskQuestion key={'line' + index} isDisabled={index < indexQuestion} {...{ line }} {...{ _changeHandler }} {...{ _enterHandler }} />
            )}
        </div>
    </div>
}

export default ContactSection