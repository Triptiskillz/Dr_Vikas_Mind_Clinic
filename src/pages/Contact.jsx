import { PureComponent, Fragment } from "react";
import { Helmet } from 'react-helmet';
// import img3 from '../images/3.png'
import { Link } from "react-router-dom";
import img20 from '../images/20.png'
import img21 from '../images/21.png'
import img22 from '../images/22.png'
import ContactFrom from "../comp/ContactFrom";

class Contact extends PureComponent {


    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Contact Dr Vikas Mind Care Clinic</title>
                    <meta name="description" content="Contact Dr Vikas Mind Clinic and book an appointment to meet Dr Vikas Moun in person." />
                </Helmet>
                <div className="Service-hero d-flex justify-content-center mb-4">
                    <div className="fs-1 fw-bold text-center text-white mt-4 pt-4 mb-4 pb-4 container">
                        <h1 className="blue mt-4 pt-4">Contact  Us</h1>
                        <p className="white text-center"> Book your appointment with Dr Vikas Mind Clinic for a better version of yourself. Let us know your concern and we’re happy to help.
                        </p>
                    </div>
                </div>
                {/* <div> */}





                <div className="hadingspace container">
                    <div className="row">
                        <div className="col-md-6 m-auto text-center">
                            <img src={img22} width={100} alt="#" className="pt-3" />
                            <h3 className="blue">Address</h3>
                            <a href='https://goo.gl/maps/VC8nsH2XZ4s9vvNJ6' aria-label="adderss" target="_blank" className="text-decoration-none">
                                <p>
                                    First floor, near Sankalp hospital, Najafgarh road, Nangloi, 110041
                                </p>
                            </a>

                            <img src={img20} width={100} alt="#" className="pt-3" />
                            <h3 className="blue">Contact us</h3>
                            <a href="tel:+919588310945" aria-label="phone number" target="_blank" className="text-decoration-none">
                                <p> +91-9588310945</p>
                            </a>
                            <img src={img21} width={100} alt="#" className="pt-3" />
                            <h3 className="blue">Email Us</h3>
                            <a href="mailto:hello@drvikasmindclinic.com" aria-label="email" target="_blank" className="text-decoration-none">
                                <p>hello@drvikasmindclinic.com</p>
                            </a>
                        </div>
                        <div className="col-md-6 m-auto text-center">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14001.539402923576!2d77.0646746!3d28.6781322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0951449365ff%3A0xae56d0cb508f2d32!2sDr%20Vikas%20Mind%20Care%20Clinic!5e0!3m2!1sen!2sin!4v1691764525188!5m2!1sen!2sin"
                                width="100%"
                                height="600px"
                                // style="border:0;" 
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="hadingspace container">
                    <div className="row">
                        <div className="col-md-6 m-auto text-center">
                            <img src={img22} width={100} alt="#" className="pt-3" />
                            <h3 className="blue">Address</h3>

                            <a href='https://goo.gl/maps/rzgWz6MNNWvQtgu58' aria-label="adderss" target="_blank" className="text-decoration-none">
                                <p> First Floor, Delhi - Rohtak Rd, opposite Metro Pillar Number 829, Bahadurgarh, Haryana, 124507
                                </p>
                            </a>

                            <img src={img20} width={100} alt="#" className="pt-3" />
                            <h3 className="blue">Contact us</h3>
                            <a href="tel:+919588310945" aria-label="phone number" target="_blank" className="text-decoration-none">
                                <p> +91-9588310945</p>
                            </a>

                            <img src={img21} width={100} alt="#" className="pt-3" />
                            <h3 className="blue">Email Us</h3>
                            <a href="mailto:hello@drvikasmindclinic.com" aria-label="email" target="_blank" className="text-decoration-none">
                                <p>hello@drvikasmindclinic.com</p>
                            </a>
                        </div>
                        <div className="col-md-6 m-auto text-center">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13999.8932656067!2d76.9369408!3d28.6904448!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d057da8b479c5%3A0x41c3c532c2bacec3!2sDr%20Vikas%20Mind%20Care%20Clinic!5e0!3m2!1sen!2sin!4v1691764352533!5m2!1sen!2sin"
                                width="100%"
                                height="600px"
                                // style="border:0;" 
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                    </div>
                </div>
                <div className="container hadingspace handingSpaceBottom">
                    <div className="me-2 ms-2">
                        <div class="about">
                            <div class="inner-section rounded">
                                <h3 class=" blue w-100 text-center">

                                    Contact Us
                                </h3>
                                <ContactFrom />
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }
}
export default Contact;