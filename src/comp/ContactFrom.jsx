import { Component, useState } from "react";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactFrom = () => {
    const form = useRef();
    const[data,setdata]=useState('')

    const sendEmail = (e) => {
        e.preventDefault();
        let name = form.current[0].value;
        let email = form.current[1].value;
        let phone = form.current[2].value;
        let msg = form.current[3].value;
        if (name.length <= 3) {
            setdata("name length must be greater than three characters");
        } else if (phone.length <= 9) {
            setdata("phone length must be greater than 10 digit");
        }
        else {
            emailjs.sendForm('service_rdbukga', 'template_0qh35uj', form.current, 'aEbaIaTO7hZ5yvV9E')
                .then((result) => {
                    setdata(result.text +", " + "Email sent.")
                    console.log(result.text);
                }, (error) => {
                    setdata('try again !')
                    console.log(error.text);
                }); 
        }


    };

    return (

        <form className="frombg mt-4 pt-2 rounded" name="myForm" ref={form} onSubmit={sendEmail}>
            <p className="text-danger text-center">{data}</p>
            <div class="form-group mt-3  pe-4 ps-4 ">
                <input type="text" class="form-control p-3 border-0 bg-white" name="user_name " placeholder="You name" required />
            </div>
            <div class="form-group mt-3 pe-4 ps-4 ">
                <input type="email" class="form-control p-3 border-0 bg-white" placeholder="Your email" name="user_email" required />
            </div>
            <div class="form-group mt-3 pe-4 ps-4 ">
                <input type="number" class="form-control p-3 border-0 bg-white" placeholder="Your phone number" name="user_phone" required />
            </div>
            <div class="form-group mt-3 pe-4 ps-4">
                <textarea class="form-control  p-3 border-0 bg-white" name="message" placeholder="Message" rows="4" required></textarea>
            </div>
            <div className="text-end me-4 pb-1 ms-4">
                <input type="submit" value="Send" class="btn text-white mt-4 mb-4 fw-bold shadow-none btncontact2" />

            </div>

        </form>



    );
};

export default ContactFrom;