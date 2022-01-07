import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kiev8uz', 'template_8oog0yi', form.current, 'user_quMpabUl8g3DFCCR8Dwln')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        const frm = document.getElementsByName('contact-form')[0];
        frm.reset();
    };

    return (
        <section id="contact" className="m-4">
            <h2 className="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
            <div className="row">
                <div className="col-md-9 mb-md-0 mb-5">
                    <form ref={form} name='contact-form' onSubmit={sendEmail}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="name" name="user_name" className="form-control" />
                                    <label for="user_name">Your name</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="email" name="user_email" className="form-control" />
                                    <label for="user_email">Your email</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <input type="text" id="subject" name="user_subject" className="form-control" />
                                    <label for="user_subject">Subject</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form">
                                    <textarea type="text" id="message" name="user_message" rows="2" className="form-control md-textarea"></textarea>
                                    <label for="message">Your message</label>
                                </div>
                            </div>
                        </div>
                        <div className="text-center text-md-left">
                            <input className="btn btn-primary"  type="submit" value="Send"/>
                        </div>
                    </form>   
                </div>
                <div className="col-md-3 text-center">
                    <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-map-marker-alt fa-2x"></i>
                            <p>Salt Lake City, UT 84020, USA</p>
                        </li>
                        <li><i className="fas fa-phone mt-4 fa-2x"></i>
                            <p>(801) 694 - 2493</p>
                        </li>
                        <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                            <p>brad.anderson019@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;