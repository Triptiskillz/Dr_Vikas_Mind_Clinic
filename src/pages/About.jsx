import { PureComponent, Fragment } from "react";
// import img3 from '../images/3.png'
import { Helmet } from 'react-helmet';
import img7 from '../images/About The Clinic/Dr Vikas Moun.webp'
import img1 from '../images/About The Clinic/Expertise and Experience.png'
import img3 from '../images/About The Clinic/Holistic Approach.png'
import img2 from '../images/About The Clinic/Personalised Treatment.png'
import img4 from '../images/About The Clinic/Empathy & Care.png'
import img5 from '../images/About The Clinic/Comprehensive Services.png'
import img6 from '../images/About The Clinic/Mental Health Advocacy.png'


import RankList from "../comp/RankList";
import { Link } from "react-router-dom";

class About extends PureComponent {
    state = {
        data: [
            {
                img: img1,
                des: "New age expertise to treat every kind of mental health issue.",
                title: "Expertise and Experience"
            },
            {
                img: img2,
                des: "In depth diagnosis and clear understanding of needs to plan the right line of mental health treatment.",
                title: "Personalised Treatment"
            },

            {
                img: img3,
                des: "A complete approach to treatment, based on all factors that contribute to the mental health issue.",
                title: "Holistic Approach"
            },
            {
                img: img4,
                des: "A welcoming and supportive treatment clinic where we treat with care.",
                title: "Empathy & Care"
            },
            {
                img: img5,
                des: "All-round treatment and check-ups to treat mental disorders with great care and compassion.",
                title: "Comprehensive Services"
            },
            {
                img: img6,
                des: "Raising awareness about mental health and fighting stigma",
                title: "Mental Health Advocacy"
            }
        ]
    }
    render() {
        let { data } = this.state
        return (
            <Fragment>
                <Helmet>
                    <title>About Dr Vikas Moun | Dr Vikas Mind Clinic</title>
                    <meta name="description" content="Let us know a Brief about Dr Vikas Moun and Dr Vikas Mind Care Clinic." />
                </Helmet>
                <div className="Service-hero d-flex justify-content-center">
                    <div className="text-center blue mt-4 pt-4 mb-4 pb-4 container">
                        <h1 className="mt-4 pt-4">About  Us</h1>
                    </div>
                </div>

                <div className="me-2 ms-2" style={{ paddingTop: "30px" }}>
                    <div className=" container" >
                        <h2 class="text-center blue">
                            We Treat for a Wide Variety of Mental Health Issues at <span className="green">Dr Vikas Mind Clinic</span>
                        </h2>
                        <p className="text-center" >
                            In the world of mental health, right and professional guidance helps treat and recover patients from years of internal pain. At Dr Vikas Mind Clinic, we offer a wide variety of diagnosis and treatment for various mental health issues. Our specialty clinic is dedicated to providing expert psychiatric care for a wide spectrum of mental health conditions, including but not limited to anxiety disorders, ADHD, mood disorders, Personality disorders, addiction, trauma, epilepsy, depression and neuropsychiatric conditions. The clinic caters to individuals residing in and around West Delhi. Our clinic is committed to providing new-age treatment in the most comprehensive and compassionate manner.
                        </p>
                    </div>
                </div>
                <div className="me-2 ms-2" style={{ paddingTop: "30px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center">
                                <img src={img7} alt="Dr Vikas Moun" className="img-fluid w-50 shadow-sm bg-white rounded" />
                            </div>
                            <div className="col-md-6">
                                <h2 className="blue">
                                    Trusted Psychiatrist<br/>
                                    Your First Step for a  <span className="green"> Better Life </span>
                                </h2>
                                <p>
                                    Dr. Vikas Moun is an esteemed psychiatrist with an MD in Psychiatry from the prestigious King George's Medical College Lucknow. With more than a decade of experience and expertise, he also has worked as a Consultant Psychiatrist with some of the most prestigious hospitals in Delhi, such as Bhatia Global Hospital, Ujala Cygnus Hospital Nangloi and Satyabhama Hospital Nangloi. Well aware of the stigma that surrounds mental health disorders, he today has a clinic where anyone could readily find help in the most comfortable and discreet way. His empathetic approach, extensive knowledge, and personalised treatment plans has treated over thousands to overcome their mental health challenges.
                                </p>

                                <div className="d-flex flex-wrap justify-content-around mt-4">
                                    <Link to="#" class="btn text-white fw-bold m-auto shadow-none btncontact2" >
                                        See Offer
                                    </Link>

                                    <Link to="#" class="btn rounded-0 m-auto fw-bold btn-hover shadow-none" style={{ color: '#00537b', border: "3px solid #00537b" }} >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-aboutUs" style={{ marginTop: "30px" }}>
                    <div className="me-2 ms-2">
                        <div className="container mt-4">
                            <div className="row pb-4">
                                {data.map((e) => (
                                    <div className="col-md-6 col-lg-4 mt-4" >
                                            <div className="text-center m-auto">
                                                <img src={e.img} alt="#" className="img-fluid " width={100} />
                                            </div>
                                            <div className="text-white text-center m-auto">
                                                <p className="fw-bold white">{e.title}</p>
                                                <p className="white">{e.des}</p>

                                            </div>
                                        </div>
                                  
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ paddingTop: "30px", paddingBottom:"30px" }}>
                <RankList show={false} />

                </div>

            </Fragment>
        )
    }
}
export default About;