/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { schema } from '../../validation/contact';
import emailjs from 'emailjs-com';
import './contact.scss';

function Contact() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [messageError, setMessageError] = useState("");
    const navigate = useNavigate();
    const form = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        let errorMessage = schema.validate({
            nom: fullName,
            email: email,
            message: text,
        }).error;
        console.log(errorMessage);
        switch (`${errorMessage}`) {
            case 'ValidationError: "nom" is not allowed to be empty':
                setMessageError(`Un nom est nécessaire.`);
                break;
            case `ValidationError: "nom" with value "${fullName}" fails to match the required pattern: /^[^(<(w)>(.*)</(w)>)]+$/`:
                setMessageError(`Un nom valide est nécessaire. Pas de caractères spéciaux, ni de chiffre.`);
                break;
            case `ValidationError: "nom" must only contain alpha-numeric characters`:
                setMessageError(`Un nom valide est nécessaire, sans caractères spéciaux.`);
                break;
            case `ValidationError: "email" is not allowed to be empty`:
                setMessageError(`Un Email est nécessaire.`);
                break;
            case `ValidationError: "email" must be a valid email`:
                setMessageError(`Un Email valide est nécessaire.`);
                break;
            case `ValidationError: "email" with value "${email}" fails to match the required pattern: /^[A-Z0-9a-z._%+-]+@[a-z0-9.-]+\\.[a-z]{1,4}}*$/`:
                setMessageError(`Un Email valide est nécessaire.`);
                break;
            case `ValidationError: "message" is not allowed to be empty`:
                setMessageError(`Un message est nécessaire.`);
                break;
            case `ValidationError: "message" with value "${text}" fails to match the required pattern: /^[A-Za-zéèÏïÉç0-9 ,;!:-?@^.\\n]*$/`:
                setMessageError(`Un message valide est nécessaire. Pas de caractères spéciaux, et sans émoticône.`);
                break;
            case 'undefined':
                emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID).then(function (response) {
                    setMessageError("Votre message a bien été envoyé. Redirection vers la page d'accueil.");
                    const timer = setTimeout(() => {
                        navigate('/');
                    }, 2500)
                    return () => clearTimeout(timer);
                }, function (error) {
                    console.log('FAILED...', error);
                });
                break;
            default:
                setMessageError(`${errorMessage}`);
        }
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
                        <input className="contact__form__input" value={email} name="email" onChange={(event) => setEmail(event.target.value)} className="contact__form__input" placeholder="Email" id="email" type="text" />

                        <label className="contact__form__label" htmlFor="userText">Votre message</label>
                        <textarea className="contact__form__input" name="message" value={text} onChange={(event) => setText(event.target.value)} className="contact__form__input" placeholder="Message" id="userText" type="text" />

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
