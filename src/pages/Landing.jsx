import React, { PureComponent, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Hero from "../comp/Hero";
import Sliders from "../comp/Sliders";
import ChooseUs from "../comp/ChooseUs";
import FAQ from "../comp/FAQ";
import aboutimg from "../images/home/Psychiatrist.webp";

import img3part from "../images/home/Psychiatric treatment in Delhi.webp";
import img4 from "../images/home/Best Psychiatrist in Delhi NCR.webp";
import img5 from "../images/home/Psychiatrist in West Delhi.webp";
import img6 from "../images/home/Top Psychiatrist in Delhi NCR.webp";
import img7 from "../images/home/Best Psychiatrist in Delhi.webp";

import BlogSlider from "../comp/BlogSlider";
import RankList from "../comp/RankList";
import ContactFrom from "../comp/ContactFrom";

class Landing extends PureComponent {
  state = {
    faq: [
      {
        q: "Do I need to visit the clinic physically? ",
        ans: "Its better if you visit physically and meet the psychiatrist in person. Especially for the first few sessions that are about diagnosis and understanding about the mental status. Later, you can ask the doctor and he can allow virtual interactions. At clinic you can benefit from a team comprising of psychologist, psychotherapist as well as psychiatrist.",
      },
      {
        q: "Are medicines compulsory?",
        ans: "It totally depends on the type of problem. Our first approach is that we treat the patient without any type of medicine. However, there are cases when medication is important. In that case, they are helpful and beneficial.Sometimes, your mental disorder may require both medication as well as counselling. Be rest assured, we’ll help you with the best.",
      },
      {
        q: "What mental disorders are treated at Dr Vikas Mind Clinic?",
        ans: "Dr Vikas is a certified psychiatrist in Delhi. He can help you with all types of mental disorders. They can be depression, migraine, headache, epilepsy, schizophrenia, Post-Traumatic stress disorder, OCD, sleep disorder, drug deaddiction, bipolar disorder as well as sex related problems. You can also connect to deal with issues related to concentration, emotional imbalance, confidence and anxiety.",
      },
      {
        q: "Can the mental disorders like OCD, Schizophrenia, migraine and depression be successfully treated?",
        ans: "Of course. If you follow the instructions of Dr Vikas Moun (MBBS MD), you may never need to see psychiatrist again after the mental problem is fixed. The treatment can surely be successful. ",
      },
    ],
  };
  render() {
    let { faq } = this.state;
    // document.title="hello";
    return (
      <Fragment>
        <Helmet>
          <title>Best Psychiatrist in Delhi | Dr Vikas Mind Clinic</title>
          <meta
            name="description"
            content="Dr Vikas Moun is MD in Psychiatry. He is the Best Psychiatrist in Delhi NCR with more than 10 years of experience."
          />
        </Helmet>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5RVNGGVP"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>

        <div className="whatsapp">
          <a
            href="https://wa.me/917015639614"
            aria-label="whata app"
            target="_blank"
            id="togglw1"
            className="wtsapp"
          >
            <i class="fa fa-whatsapp"></i>
          </a>
        </div>
        <div className="phone">
          <a
            href="tel:+919588310945"
            aria-label="phone number"
            target="_blank"
            id="togglw1"
            className="phne"
          >
            <i class="fa fa-phone"></i>
          </a>
        </div>

        {/* 1.hero section */}
        <div className="me-2 ms-2" style={{ paddingBottom: "30px" }}>
          <Hero />
        </div>
        {/* 2. */}
        <div class="leftImg">
          <div className="me-2 ms-2" style={{ paddingBottom: "30px" }}>
            <div class="hero-text text-center container ">
              <h2 className="white pt-4">
                {" "}
                Mental Fitness and Life Improvement
              </h2>
              <p className="white">
                Of course, a psychiatrist can treat mental illness. However, you
                can expect more. Whether you are a businessman, sportsperson, an
                officer, or an adult, woman or concerned about your child.
                Through knowledge of psychiatry and counselling, you can realize
                and achieve full potential of your brain.
              </p>
              <i
                class="fa fa-arrow-down pt-3 fw-bold blue"
                style={{ fontSize: "65px" }}
              ></i>

              <div className="row pt-3">
                <div
                  className="col-md-6 col-lg-3 pt-3"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-easing="ease-in-sine"
                >
                  <div className="text-center">
                    <img
                      src={img4}
                      width={"116"}
                      height={"150"}
                      alt="depression"
                    />
                    <p className="fw-bold white">Healthcare</p>
                    <p className="white">
                      Whether you want reliance or you are just concerned about
                      your well-being. A psychiatrist is not only to cure a
                      mental disease.
                    </p>
                  </div>
                </div>

                <div
                  className="col-md-6 col-lg-3 pt-3"
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                >
                  <div className="text-center">
                    <img
                      src={img5}
                      width={"123"}
                      height={"142"}
                      alt="anxiety"
                    />
                    <p className="fw-bold white">Counselling</p>
                    <p className="white">
                      At Dr Vikas Mind Clinic in West Delhi, you will find
                      consultant for coaching and guidance for assessments and
                      sessions.
                    </p>
                  </div>
                </div>

                <div
                  className="col-md-6 col-lg-3 pt-3"
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                >
                  <div className="text-center">
                    <img
                      src={img6}
                      width={"105"}
                      height={"150"}
                      alt="dependence"
                    />
                    <p className="fw-bold white">Holistic Approach</p>
                    <p className="white">
                      We believe in treating our patient holistically. We do
                      everything possible that the person doesn’t need a
                      psychiatrist again for the mental disorder.
                    </p>
                  </div>
                </div>

                <div
                  className="col-md-6 col-lg-3 pt-3"
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                >
                  <div className="text-center">
                    <img
                      src={img7}
                      width={"102"}
                      height={"150"}
                      alt="schizophrenia"
                    />
                    <p className="fw-bold white"> Chronic Disorders</p>
                    <p className="white">
                      Is your illness related to brain not given timely
                      treatment? Reaching out to best psychiatrist in Delhi
                      should not be a Stigma anymore.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3 my services */}

        <div className="hero-services">
          <div className="me-2 ms-2">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-12 col-lg-6 m-auto text-center"
                  data-aos="fade-up-right"
                >
                  <img
                    src={img3part}
                    width={"100%"}
                    height={"100%"}
                    alt="Dr Vikas Mind Clinic"
                    className="img-fluid"
                    style={{ marginTop: "26px" }}
                  />
                </div>
                <div
                  className="col-md-12 col-lg-6  landing-services"
                  data-aos="fade-up-left"
                >
                  <h2 className="blue text-center">
                    Dr Vikas Mind Clinic
                    <span className="green"> Cures and Cares </span>
                  </h2>
                  <p>
                    There are numerous problems related to mental health. No
                    matter how young or old one is. No matter how fit the person
                    may seem to be. In case, you have any negative thoughts
                    related to your mental health, reach out to a doctor for
                    psychological testing & therapy. We are aware of the latest
                    technical aspects and have been practicing these. In these 8
                    years of practice we have gone through many researches
                    related to psychiatry and implemented with utmost care.
                  </p>

                  <div className="d-flex justify-content-center pt-3">
                    <i
                      class="fa fa-arrow-right pt-1 pe-2 fw-bold blue"
                      style={{ fontSize: "20px" }}
                    ></i>

                    <div>
                      <p>
                        <Link
                          to="/sexologist-delhi-ncr"
                          className="blue fw-bold text-decoration-none"
                        >
                          Sexologist
                        </Link>
                      </p>
                      <p>
                        Whether you are facing sexual issues related to erectile
                        dysfunction or something is not fine with your married
                        life. We can help.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center pt-3">
                    <i
                      class="fa fa-arrow-right pt-1 pe-2 fw-bold blue"
                      style={{ fontSize: "20px" }}
                    ></i>

                    <div>
                      <p>
                        <Link
                          to="/psychiatrist-in-delhi-for-anxiety"
                          className="blue fw-bold text-decoration-none"
                        >
                          Anxiety Treatment{" "}
                        </Link>
                      </p>
                      <p>
                        Anxiety is becoming quite common and the reasons are
                        found to be quite obvious like work environment,
                        relationships, etc
                      </p>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center pt-3">
                    <i
                      class="fa fa-arrow-right pt-1 pe-2 fw-bold blue"
                      style={{ fontSize: "20px" }}
                    ></i>

                    <div>
                      <p>
                        <Link
                          to="/depression-doctor-delhi"
                          className="blue fw-bold text-decoration-none"
                        >
                          Depression Treatment
                        </Link>
                      </p>
                      <p>
                        Depression can be due to genetics. Or it can be due to
                        stress related to work, social life or health issues.
                        Not to worry, this can be cured.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 col-lg-4 ">
                  <div className="d-flex justify-content-center pt-3">
                    <i
                      class="fa fa-arrow-right pt-1 pe-2 fw-bold blue"
                      style={{ fontSize: "20px" }}
                    ></i>
                    <div>
                      <p>
                        <Link
                          to="/migraine-headache-doctor-delhi"
                          className="blue fw-bold text-decoration-none"
                        >
                          Migraine Treatment
                        </Link>
                      </p>
                      <p>
                        Migraine can cause regular headache or there can be
                        severe migraine attacks. In any case, this should never
                        be ignored.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-lg-4">
                  <div className="d-flex justify-content-center pt-3">
                    <i
                      class="fa fa-arrow-right pt-1 pe-2 fw-bold blue"
                      style={{ fontSize: "20px" }}
                    ></i>

                    <div>
                      <p>
                        <Link
                          to="/"
                          className="blue fw-bold text-decoration-none"
                        >
                          OCD Treatment
                        </Link>
                      </p>
                      <p>
                        Obsessive Compulsive Disorder is usually considered as
                        long lasting. And without appropriate treatment, the
                        condition may go worse
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-lg-4">
                  <div className="d-flex justify-content-center pt-3">
                    <i
                      class="fa fa-arrow-right pt-1 pe-2 fw-bold blue"
                      style={{ fontSize: "20px" }}
                    ></i>

                    <div>
                      <p>
                        <Link
                          to="/epilepsy-doctor-delhi"
                          className="blue fw-bold  text-decoration-none"
                        >
                          Epilepsy Treatment
                        </Link>
                      </p>
                      <p>
                        You should reach out to a good psychiatrist in Delhi.
                        Epilepsy is a serious problem that may not be easily
                        understood by anyone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center pt-4">
                <Link to="/service" class="btn fw-bold shadow-none btncontact2">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* 4 client says */}
        <div className="landingClientSays" style={{ marginTop: "8px" }}>
          <div className="me-2 ms-2">
            <div className="container">
              <h2 class="blue text-center pt-4">
                What our <span className="green"> clients says</span>
              </h2>
              <Sliders />
            </div>
          </div>
        </div>
        {/* 5 about us*/}
        <div className="landingAboutUs">
          <div className="me-2 ms-2">
            <div className="container">
              <div className="row">
                <div className="col-md-6 landing-services1">
                  <h2 class="blue">
                    Best Psychiatrist in
                    <span className="green"> Delhi NCR </span>
                  </h2>
                  <p>
                    Dr Vikas Moun is not an ordinary doctor in West Delhi. He’s
                    the best psychiatrist in Delhi and has a huge list of people
                    who have recovered from severe mental disorders. He
                    understands how to control mental illness through medicine,
                    by mentoring or just by motivation.
                  </p>
                  <ul className="pt-2">
                    <li>
                      <b>MD in Psychiatry</b> from{" "}
                      <Link to="https://www.kgmu.org/">
                        King George's Medical College
                      </Link>
                    </li>
                    <li>
                      Over a decade of experience of curing variety of mental
                      disorders
                    </li>
                    <li>
                      Ex. Senior Resident at “Dept of Psychiatry PGIMS Rohtak”
                    </li>
                    <li>
                      Worked for Bhatia Global Hospital, Ujala Cygnus Hospital
                      Nangloi and Satyabhama Hospital
                    </li>
                  </ul>
                </div>
                {/* <div className="bg-light" style={{height:"70px"}}></div> */}
                <div className="col-md-6 mt-4 text-center">
                  <img
                    style={{ borderRadius: "22px" }}
                    width={"100%"}
                    height={"100%"}
                    src={aboutimg}
                    className="img-fluid "
                    alt="Dr Vikas Mind Moun"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 6 rank list */}

        <RankList show={true} />
        {/* ChooseUs */}
        <div className="landingChooseUs" style={{ marginTop: "30px" }}>
          <div className="me-2 ms-2">
            <div className="container">
              <h3 class="blue text-center">
                Why Doctor Vikas is top{" "}
                <span className="green"> psychiatrist in Delhi?</span>{" "}
              </h3>
              <ChooseUs />
            </div>
          </div>
        </div>
        {/* 7 FAQ */}
        <div className="me-2 ms-2" style={{ marginTop: "30px" }}>
          <FAQ list={faq} />
        </div>
        {/* 8 blog */}
        {/* <div className="landBlog" style={{ marginTop: "2rem" }}>
                    <div className="me-2 ms-2">
                        <div className="container">
                            <div class="fw-bold text-white" style={{ fontSize: "34px" }}>
                                Latest Blogs
                            </div>
                        </div>
                    </div>
               
                        <div className="container">
                            <BlogSlider />
                        </div>
                </div> */}
        {/* 9 */}
        <div className="container" style={{ marginTop: "30px" }}>
          <div className="me-2 ms-2">
            <div className="row">
              <div className="col-md-7 m-auto bg-white">
                <h3 class="blue">
                  Visiting a Doctor is <span className="green">Normal </span>
                </h3>
                <p>
                  The attitude of avoiding session with doctor is not so cool.
                  It can harm your living as well as your family. In order to
                  use your brain effectively, and to improve your self-esteem,
                  professional help is good. Phobias, hallucinations, any type
                  of disturbance with your thoughts can easily be fixed by a
                  doctor. Let the psychiatrist control the issue and help you
                  with the recovery from your psychiatric and psychological
                  issues. Dr. Vikas Moun is an experienced Psychiatrist in West
                  Delhi. And he can help you with prevention, control and cure
                  of your mental issues.
                </p>
                <Link
                  to="/contact"
                  class="btn text-white mt-3 fw-bold shadow-none btncontact2"
                >
                  Contact Us
                </Link>
              </div>
              <div className="col-md-5 bg-white mb-4">
                <div className="bg-white">
                  <ContactFrom />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14001.539402923576!2d77.0646746!3d28.6781322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0951449365ff%3A0xae56d0cb508f2d32!2sDr%20Vikas%20Mind%20Care%20Clinic!5e0!3m2!1sen!2sin!4v1691764525188!5m2!1sen!2sin"
            width="100%"
            height="300px"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Fragment>
    );
  }
}

export default Landing;
