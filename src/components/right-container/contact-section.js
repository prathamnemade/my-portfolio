import React, { useState } from 'react'
import AskQuestion from '../ask-question'
import emailjs, { init } from 'emailjs-com';

init("user_NDJN6hzNKA498n3Hw3dl4");

const PATH = '<div class="Cur_Input_Line"> <span class="Ter_Green">Prathamesh</span> <span class="Ter_Gray">:</span> <span class="Ter_Blue">~/Desktop/Website</span> <span class="Ter_Gray">$ </span> </div>'
const QUESTIONS = [
    { question: 'Please enter your full name: ', value: 'name', type: 'text' },
    { question: 'Please enter your email id: ', value: 'email', type: 'email' },
    { question: 'Please type your message here: ', value: 'message', type: 'text' },
    { question: 'Do you want to send email? (Y/N): ', value: 'confirm', type: 'text' }
]

const ContactSection = () => {
    const [indexQuestion, setIndexQuestion] = useState(0)
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        message: '',
        confirm: null
    })

    const [enterInput, setEnterInput] = useState([
        { path: PATH, question: QUESTIONS[0].question, answer: '', value: QUESTIONS[0].value }
    ])

    const _changeHandler = (event) => {
        const { value, name } = event.target
        setContactForm({ ...contactForm, ...{ [name]: value } })
    }

    const _sendEMail = () => {
        var templateParams = {
            from_name: contactForm.name,
            to_name: 'Prathamesh - Portfolio',
            from_email: contactForm.email,
            message: contactForm.message,
            reply_to: contactForm.email
        };
        emailjs.send('service_rqclzq7', 'template_qo50vcr', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    }


    const _enterHandler = (event) => {
        if (event.key === "Enter") {
            let temp = enterInput
            if (QUESTIONS.length > indexQuestion + 1) {
                temp.push({
                    path: PATH,
                    question: QUESTIONS[indexQuestion + 1].question,
                    answer: '',
                    value: QUESTIONS[indexQuestion + 1].value,
                    type: QUESTIONS[indexQuestion + 1].type,
                })
            } else {
                temp.push({
                    path: PATH,
                    question: contactForm.confirm.toLowerCase() === 'y' || contactForm.confirm.toLowerCase() === 'yes' ? 'Email Sent! Give me a day\'s time to respond :)' : 'OK :( ',
                    answer: '',
                    value: 'acknowledge',
                    acknowledge: true,
                    type: 'text',
                })
                if (contactForm.confirm.toLowerCase() === 'y' || contactForm.confirm.toLowerCase() === 'yes') {
                    _sendEMail()
                }
            }
            setIndexQuestion(indexQuestion + 1)
            setEnterInput(temp)
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