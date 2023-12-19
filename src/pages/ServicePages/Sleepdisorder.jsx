import { PureComponent, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import img1 from "../../images/Sleep Disorder/Doctors for Sleep Disorders in Delhi.webp";
import img2 from "../../images/Sleep Disorder/Insomnia Specialist in Delhi.webp";

class Sleepdisorder extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>
            Sleep Disorder Treatment in Delhi NCR | Dr Vikas Mind Clinic
          </title>
          <meta
            name="description"
            content="Dr Vikas is the Best doctor in Delhi NCR for sleep disorder and insomnia treatment. He is a Psychiatrist and has been treating patients for more than 10 years."
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

        <div className="Service-hero d-flex justify-content-center">
          <div className="text-center blue mt-4 pt-4 me-2 ms-2 mb-4 pb-4 container">
            <h1 className="mt-4 mb-4 pb-4 pt-4">
              Sleep Disorder Treatment in Delhi: Dr Vikas Mind Clinic
            </h1>
          </div>
        </div>
        <div className="me-2 ms-2 hadingspace">
          <div className="container">
            <p className="text-center">
              Sleep is an essential part of our lives that helps us stay healthy
              and rejuvenated. Sleep disorders hamper the quality, timing, and
              amount of sleep a person needs on a daily basis.
              <b>
                Sleep problems usually contribute to or indicate mental health
                problems.{" "}
              </b>
              Thus, it's important to check for sleep disorder treatment in
              Delhi.
            </p>
            <p className="mt-2 text-center">
              Today, sleep disorders affect a large portion of the population.
              Due to erratic lifestyles, high-demanding jobs, pollution and
              stress, getting a good night’s sleep is a far outcry.
            </p>
            <p className="mt-2 text-center">
              If left untreated, sleeping issues lead to several serious health
              issues like heart attack, depression, blood pressure, etc.
              Fortunately, with availability of good doctors for sleep disorders
              in Delhi, one can get treated easily
              <b> Dr.Vikas Moun</b>, an <b>MBBS MD</b> is a well{" "}
              <Link to="/">Psychiatrist in West Delhi</Link> who treats various
              sleep disorders in young and old.
            </p>
          </div>
        </div>

        <div className="me-2 ms-2 hadingspace">
          <div className="container">
            <div className="showSectionMobile">
              <div className="hadingspace">
                <h2 className="d-se-tittle">
                  <div className="d-se-text-block">
                    Why Sleep Disorders Need Urgent Attention from Best Sleep
                    Disorder Doctor?
                  </div>
                </h2>
                <img
                  src={img1}
                  alt="Doctors for Sleep Disorders in Delhi"
                  className="img-fluid pspace"
                />
                <p className="pspace">
                  Most people ignore sleep disorders as a small issue. Whether
                  you get too little of sleep or feel overtly sleepy throughout
                  the day, sleep disorder ruins one’s daily life. Apart from
                  disrupting work-life balance, issues with sleep lead to a lot
                  of stress. Getting a proper line of treatment is what enables
                  a good night of sleep.
                </p>
                <p className="fw-bold mt-2">
                  Some of the most common symptoms of sleep disorders:
                </p>
                <ul>
                  <li>
                    <b>Insomnia</b> - Difficulty falling asleep or staying
                    asleep during sleep hours
                  </li>
                  <li>
                    <b>Feeling sleepy during the day</b>
                  </li>
                  <li>
                    <b>Not being able to fall asleep even when tired</b>{" "}
                  </li>
                  <li>
                    <b>Tossing in bed during sleeping hours</b>
                  </li>
                  <li>
                    <b>Waking up abruptly in the middle of sleep</b>
                  </li>
                  <li>
                    <b>Headaches</b>
                  </li>
                  <li>
                    <b>Low on libido</b>
                  </li>
                  <li>
                    <b>Difficulty concentrating during the day</b>
                  </li>
                  <li>
                    <b>Depression and other psychological issues</b>
                  </li>
                  <li>
                    <b>Irritability</b>
                  </li>
                </ul>
                <p className="mt-2">
                  If you or any of your family members have issues with
                  sleeping, meet a sleep disorder specialist in West Delhi. Dr
                  Vikas Mind Clinic is a specialty clinic of trusted and
                  experienced doctors. Apart from this, your sleep disorder can
                  become friends with migraine. Our{" "}
                  <Link to="/migraine-headache-doctor-delhi">
                    migraine doctor Delhi
                  </Link>{" "}
                  is here to take care of it.
                </p>
              </div>
              <div className="hadingspace">
                <h2 className="d-se-tittle">
                  <div className="d-se-text-block1">
                    Why Choose the Best Sleep Doctor in Delhi NCR for Sleep
                    Disorder Treatment?
                  </div>
                </h2>
                <img
                  src={img2}
                  alt="Insomnia Specialist in Delhi"
                  className="img-fluid pspace"
                />
                <p className="pspace">
                  Issues like Insomnia, and Narcolepsy are serious conditions
                  that require medical intervention. If left untreated, it can
                  increase the risk of high blood pressure, heart disease,
                  stroke or even death. Irregular sleeping patterns affect our
                  quality of life, leading to fatigue, irritability, and
                  decreased productivity. Your sleep disorder may crop from a
                  mental disorder called bipolar disorder. We’ll also help with
                  diagnosis from to{" "}
                  <Link to="/bipolar-disorder-doctor-delhi">
                    doctor for bipolar disorder in Delhi.
                  </Link>
                </p>
                <p className="mt-2">
                  Dr. Vikas Moun is the leading specialist in sleep disorder
                  treatment. Under his aegis, many have found relief from living
                  a disturbed life. Apart from overall treatment, Dr Vikas Mind
                  Clinic in West Delhi ensures that every patient stays healthy
                  mentally, physically and psychologically.
                </p>
              </div>
            </div>
            <div className="hiddenSectionMoblie">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={img1}
                    alt="Doctors for Sleep Disorders in Delhi"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6">
                  <h2 className="d-se-tittle">
                    <div className="d-se-text-block">
                      Why Sleep Disorders Need Urgent Attention from Best Sleep
                      Disorder Doctor?
                    </div>
                  </h2>
                  <p className="pspace">
                    Most people ignore sleep disorders as a small issue. Whether
                    you get too little of sleep or feel overtly sleepy
                    throughout the day, sleep disorder ruins one’s daily life.
                    Apart from disrupting work-life balance, issues with sleep
                    lead to a lot of stress. Getting a proper line of treatment
                    is what enables a good night of sleep.
                  </p>
                  <p className="fw-bold mt-2">
                    Some of the most common symptoms of sleep disorders:
                  </p>
                  <ul>
                    <li>
                      <b>Insomnia</b> - Difficulty falling asleep or staying
                      asleep during sleep hours
                    </li>
                    <li>
                      <b>Feeling sleepy during the day</b>
                    </li>
                    <li>
                      <b>Not being able to fall asleep even when tired</b>{" "}
                    </li>
                    <li>
                      <b>Tossing in bed during sleeping hours</b>
                    </li>
                    <li>
                      <b>Waking up abruptly in the middle of sleep</b>
                    </li>
                    <li>
                      <b>Headaches</b>
                    </li>
                    <li>
                      <b>Low on libido</b>
                    </li>
                    <li>
                      <b>Difficulty concentrating during the day</b>
                    </li>
                    <li>
                      <b>Depression and other psychological issues</b>
                    </li>
                    <li>
                      <b>Irritability</b>
                    </li>
                  </ul>
                  <p className="mt-2">
                    If you or any of your family members have issues with
                    sleeping, meet a sleep disorder specialist in West Delhi. Dr
                    Vikas Mind Clinic is a specialty clinic of trusted and
                    experienced doctors. Apart from this, your sleep disorder
                    can become friends with migraine. Our{" "}
                    <Link to="/migraine-headache-doctor-delhi">
                      migraine doctor Delhi
                    </Link>{" "}
                    is here to take care of it.
                  </p>
                </div>
              </div>
              <div className="row hadingspace">
                <div className="col-md-6">
                  <h2 className="d-se-tittle">
                    <div className="d-se-text-block1">
                      Why Choose the Best Sleep Doctor in Delhi NCR for Sleep
                      Disorder Treatment?
                    </div>
                  </h2>
                  <p className="pspace">
                    Issues like Insomnia, and Narcolepsy are serious conditions
                    that require medical intervention. If left untreated, it can
                    increase the risk of high blood pressure, heart disease,
                    stroke or even death. Irregular sleeping patterns affect our
                    quality of life, leading to fatigue, irritability, and
                    decreased productivity. Your sleep disorder may crop from a
                    mental disorder called bipolar disorder. We’ll also help
                    with diagnosis from to{" "}
                    <Link to="/bipolar-disorder-doctor-delhi">
                      doctor for bipolar disorder in Delhi.
                    </Link>
                  </p>
                  <p className="mt-2">
                    Dr. Vikas Moun is the leading specialist in sleep disorder
                    treatment. Under his aegis, many have found relief from
                    living a disturbed life. Apart from overall treatment, Dr
                    Vikas Mind Clinic in West Delhi ensures that every patient
                    stays healthy mentally, physically and psychologically.
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src={img2}
                    alt="Insomnia Specialist in Delhi"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="hadingspace">
              <h2 className="d-se-tittle service-our-service p-2">
                Our Doctor for Sleep Disorders in Delhi Treats Many Other Sleep
                Issues
              </h2>
              <p className="fw-bold pspace">Narcolepsy:</p>
              <p>
                Narcolepsy is a disorder that affects the brain's ability to
                regulate the sleep-wake cycles. Such people experience sudden
                and uncontrollable sleep attacks during the day, even after a
                peaceful night of sleep. They also may have symptoms like
                temporary loss of muscle control, drowsiness, depression, sleep
                paralysis, and vivid dreams. One must seek medical help for
                medications and lifestyle changes for this condition as
                Narcolepsy brings various other complications like depression,
                lack of energy, etc. all of which significantly impact a
                person's quality of life.
              </p>
              <p className="fw-bold mt-2">Sleepwalking:</p>
              <p>
                A very common phenomenon in which a person walks in his sleep.
                Though this can be a hereditary issue that can come down from
                genetics, sleepwalking can also result from lack of sleep,
                anxiety, drugs, alcoholism, etc. Sleepwalking might appear funny
                to hear, but in reality, a person who suffers from this disease
                may put themselves in critical situations. Getting help from a
                sleep disorder specialist in Delhi NCR helps resolve this issue.
              </p>
              <p className="fw-bold mt-2">Lack of sleep/Insomnia:</p>
              <p>
                Insomnia is one of the most common sleep disorders where a
                person is unable to fall asleep even when tired. This kind of
                issue is quite rampant in today’s young generation. Difficulty
                falling or staying asleep is caused by a variety of factors,
                like irregular lifestyle, stress, anxiety, depression,
                psychological issues, etc. Someone who is facing this kind of
                problem must get a good insomnia treatment in Delhi from an
                insomnia specialist like Dr. Vikas Moun, as letting this problem
                stay gives rise to hypertension, diabetes, obesity, and heart
                attack
              </p>
              <div className="fw-bold mt-2">Hypersomnia:</div>
              <p>
                Contrary to insomnia, hypersomnia is a condition in which a
                person feels sleepy and sleeps a lot during the day.
                <br />
                Causes of hypersomnia can be due to:
                <ul>
                  <li>Medical conditions, like Fibromyalgia</li>
                  <li>Low thyroid function</li>
                  <li>Viral illnesses</li>
                  <li>Narcolepsy and other sleep disorders</li>
                  <li>Obstructive sleep apnea</li>
                </ul>
                An oversleeping disorder specialist in Delhi at our clinic will
                help recover from oversleeping issues.
              </p>
              <div className="text-center mt-4">
                <button
                  className="btn  pe-4 ps-4 fw-bold text-white p-2 rounded-0"
                  style={{ backgroundColor: "#005279" }}
                >
                  Book Appointment now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Sleepdisorder;
