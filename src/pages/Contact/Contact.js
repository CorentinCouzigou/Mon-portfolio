/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { schema } from '../../validation/contact';
import emailjs from 'emailjs-com';
import './contact.scss';

function Contact() {
    console.log(process.env);
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [messageError, setMessageError] = useState("");
    const navigate = useNavigate();
    const form = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("current", form.current);
        let errorMessage = schema.validate({
            nom: fullName,
            email: email,
            message: text,
        }).error;
        console.log(errorMessage)
        if (`${errorMessage}` === `ValidationError: "nom" is not allowed to be empty`) {
            setMessageError(`Un nom est nécessaire.`);
        }
        else if (`${errorMessage}` === `ValidationError: "nom" must only contain alpha-numeric characters`) {
            setMessageError(`Un nom valide est nécessaire, sans caractères spéciaux.`);
        }
        else if (`${errorMessage}` === `ValidationError: "email" is not allowed to be empty`) {
            setMessageError(`Un Email est nécessaire.`);
        }

        else if (`${errorMessage}` === `ValidationError: "email" must be a valid email`) {
            setMessageError(`Un Email valide est nécessaire.`);
        }
        else if (`${errorMessage}` === `ValidationError: "message" is not allowed to be empty`) {
            setMessageError(`Un message est nécessaire.`);
        }
        else if (errorMessage) {
            setMessageError(`${errorMessage}`);
        }
        else if (errorMessage === undefined) {
            emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID).then(function (response) {
                console.log("SUCCES !", response.status, response.text)
                setMessageError("Votre message a bien été envoyé.");
                const timer = setTimeout(() => {
                    navigate('/');
                }, 2000)
                return () => clearTimeout(timer);
            }, function (error) {
                console.log('FAILED...', error);
            });


        };

    }

    return (
        <div className="contact">
            <div className="contact__container">
                <div className="contact__presentation__hello">
                    <div className="contact__presentation__hello__line"> </div>{" "}
                    <span className="contact__presentation__span">Où me contacter ?</span>
                </div>
                <form ref={form} className="contact__form" onSubmit={handleSubmit}>
                    <h1 className="contact__form__title">Let's Talk</h1>
                    <div className="contact__form__container__field">
                        <label className="contact__form__label" htmlFor="name">Votre nom</label>
                        <input className="contact__form__input" name="name" placeholder="Nom" id="name" type="text" value={fullName} onChange={(event) => setFullName(event.target.value)} />

                        <label className="contact__form__label" htmlFor="email">Votre Email</label>
                        <input value={email} name="email" onChange={(event) => setEmail(event.target.value)} className="contact__form__input" placeholder="Email" id="email" type="text" />

                        <label className="contact__form__label" htmlFor="userText">Votre message</label>
                        <textarea name="message" value={text} onChange={(event) => setText(event.target.value)} className="contact__form__input" placeholder="Message" id="userText" type="text" />

                    </div>
                    <div className="contact__form__validation">
                        <button className="contact__form__validation__button" type="submit">Valider</button>  <span className="contact__form__validation__span">{messageError}</span>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Contact;
