import React, { Component } from 'react'
import heroImg from '../images/Home Page/Best Psychiatrist in Delhi.webp'

class Hero extends Component {
    render() {
        return (
            <section class="hero">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 m-auto">
                            <div class="copy" data-aos="fade-up" data-aos-duration="1000">
                                <h1 className='blue '>Psychiatrist in Delhi</h1>
                                <h1 className='green'> Dr Vikas Mind Clinic </h1>
                                <p>
                                    We cure all types of minor and major mental disorders.
                                    As best psychiatrist in Delhi NCR, Dr Vikas treats the patient after proper diagnosis and understands the root cause of the problem.
                                    Depending on the symptoms, we provide both medication as well as counselling as per the requirement.
                                </p>
                            </div>
                        </div>

                        <div class="col-md-6 text-end" data-aos="fade-down" data-aos-duration="1000">
                            <img
                                src={heroImg}

                                alt="Best Psychiatrist in Delhi"
                                width={'100%'}

                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}

export default Hero;