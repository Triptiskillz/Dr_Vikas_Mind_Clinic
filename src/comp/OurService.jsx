import { Component } from "react";
import { Link } from "react-router-dom";

import img1 from "../images/Services/Epilepsy.webp";
import img2 from "../images/Services/Anxiety.webp";
import img3 from "../images/Services/Depression.webp";
import img4 from "../images/Services/Sleep Disorder.webp";
import img5 from "../images/Services/Neuropsychiatry.webp";
import img6 from "../images/Services/Headache.webp";
import img7 from "../images/Services/OCD.webp";
import img8 from "../images/Services/Bipolar disorder.webp";
import img9 from "../images/Services/Schizophrenia.webp";
import img10 from "../images/Services/Sexual Disorder.webp";

class OurService extends Component {
  state = {
    data: [
      {
        id: 1,
        img: img1,
        title: "Epilepsy",
        url: "epilepsy-doctor-delhi",
      },
      {
        id: 2,
        img: img2,
        title: "Anxiety",
        url: "psychiatrist-in-delhi-for-anxiety",
      },
      {
        id: 3,
        img: img3,
        title: "Depression",
        url: "depression-doctor-delhi",
      },
      {
        id: 4,
        img: img4,
        title: "Sleep disorder",
        url: "sleep-disorder-treatment-delhi",
      },
      {
        id: 5,
        img: img5,
        title: "Neuropsychiatry",
        url: "neuropsychiatrist-in-delhi",
      },
      {
        id: 6,
        img: img6,
        title: "Headache",
        url: "migraine-headache-doctor-delhi",
      },
      {
        id: 7,
        img: img7,
        title: "OCD",
        url: "OCD-doctor-delhi",
      },
      {
        id: 8,
        img: img8,
        title: "Bipolar disorder",
        url: "bipolar-disorder-doctor-delhi",
      },
      {
        id: 9,
        img: img9,
        title: "Schizophrenia",
        url: "Schizophrenia-doctor-delhi",
      },
      {
        id: 10,
        img: img10,
        title: "Sexologist",
        url: "sexologist-delhi-ncr",
      },
    ],
  };

  render() {
    let { data } = this.state;

    return (
      <>
        <div className="row">
          {data.map((d, index) => (
            <>
              <div
                className="col-md-6 col-lg-3 mt-4 mb-4"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                key={index}
              >
                <div className="OurServicecontainer p-2">
                  <img src={d.img} alt="Avatar" className="OurServiceimage" />

                  {/* <Link to={`/${d.url}`} className="OurServiceoverlay">

                                        <p className="OurServicetext">
                                           
                                                Read More <i class='fa fa-arrow-right'></i>
                                           
                                        </p>
                                    </Link> */}
                  <Link
                    to={`/${d.url}`}
                    className="text-decoration-none text-white text-hover"
                  >
                    <h3 className="fw-bold text-center mt-2 mb-2 blue">
                      {d.title}{" "}
                    </h3>
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </>
    );
  }
}
export default OurService;
