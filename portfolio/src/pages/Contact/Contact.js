/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import { schema } from '../../validation/contact';
import './contact.scss';


function Contact() {
    const [fullName, setFullName] = useState("");
    console.log("name", fullName);
    const [email, setEmail] = useState("");
    console.log("email", email);
    const [text, setText] = useState("");
    console.log("text", text);
    const [redirect, setRedirect] = useState(false);
    const redirectWhenUserClick = useRef(true);
    console.log(redirect);
    const navigate = useNavigate();
    useEffect(() => {
        if (redirectWhenUserClick.current) {
            redirectWhenUserClick.current = false;
            return
        }
        else {
            const timer = setTimeout(() => {
                navigate('/');
                console.log('pas le bon endroit')
            }, 2000)
            return () => clearTimeout(timer);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [redirect])
    const handleSubmit = () => {

    }
    return (
        <div className="contact">
            <div className="contact__container">
                <div className="contact__presentation__hello">
                    <div className="contact__presentation__hello__line"> </div>{" "}
                    <span className="contact__presentation__span">Où me contacter ?</span>
                </div>
                <form className="contact__form" onSubmit={handleSubmit}>
                    <h1 className="contact__form__title">Let's Talk</h1>
                    <div className="contact__form__container__field">
                        <label className="contact__form__label" htmlFor="name">Votre nom</label>
                        <input className="contact__form__input" placeholder="Nom" id="name" type="text" value={fullName} onChange={(event) => setFullName(event.target.value)} />

                        <label className="contact__form__label" htmlFor="email">Votre Email</label>
                        <input value={email} onChange={(event) => setEmail(event.target.value)} className="contact__form__input" placeholder="Email" id="email" type="text" />

                        <label className="contact__form__label" htmlFor="userText">Votre message</label>
                        <textarea value={text} onChange={(event) => setText(event.target.value)} className="contact__form__input" placeholder="Message" id="userText" type="text" />

                    </div>
                    {redirect === false ? <button className="contact__form__button" type="submit" onClick={() => setRedirect(!redirect)}>Valider</button> : <span className="contact__form__span">Votre message à bien été envoyé.</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact;
