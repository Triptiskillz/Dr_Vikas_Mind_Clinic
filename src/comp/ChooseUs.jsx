import { Component } from "react";

import img14 from "../images/chooseUs/1.png";
import img15 from "../images/chooseUs/2.png";
import img16 from "../images/chooseUs/3.png";
import img17 from "../images/chooseUs/4.png";
import img18 from "../images/chooseUs/5.png";
import img19 from "../images/chooseUs/6.png";

class ChooseUs extends Component {
  state = {
    data: [
      { id: 1, img: img14, text: "Affordable Treatment" },
      { id: 2, img: img15, text: "Minimum medication prescribed" },
      {
        id: 3,
        img: img16,
        text: "Experience of curing chronic cases successfullys",
      },
      {
        id: 4,
        img: img17,
        text: "Patient gets direct contact number of the doctor",
      },
      {
        id: 5,
        img: img18,
        text: "Skillful diagnosis. No unnecessary testing like MRI, CT scan",
      },
      {
        id: 6,
        img: img19,
        text: "Personal connection with the patient for better understanding",
      },
    ],
  };
  render() {
    let { data } = this.state;
    return (
      <>
        <div className="multi-column">
          {data.map((e) => (
            <>
              <div
                className="d-flex justify-content-start mt-4 listLanding p-2"
                style={{ borderLeft: "4px solid #dedee2" }}
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
              >
                <img
                  className="rounded-circle bg-white text-start"
                  alt={e.text}
                  src={e.img}
                  width={71}
                  height={71}
                />

                <p className="col-md-10 m-auto ms-2 fw-bold text-white text-start">
                  {e.text}
                </p>
              </div>
            </>
          ))}
        </div>
      </>
    );
  }
}
export default ChooseUs;
